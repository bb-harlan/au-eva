import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';
import {AuModuleFae} from 'au-components/au-module-fae';
import {Acct, Annotation} from 'app-data/models/acct';
import {FaeSide} from 'app-data/models/fae-side';

@customElement('au-popup-acct-mover')
@inject(App, AuModuleFae)
export class AuPopupAcctMover {
  app;
  faeSide: FaeSide;
  moverAcctList: Array<Acct | Annotation> = [];
  mouseIsDown: boolean = false;
  selectedMoverRow: Element = null;

  // refs
  moverDialogModal: HTMLElement; // <div element.ref="moverDialogModal" class="aaModal">
  moverDialogContent: HTMLElement; // <div element.ref = "moverDialogContent" ...
  moverRowList: HTMLElement; //  <div element.ref="moverRowList" class="aaGridScrollableRows" ...

  constructor(app: App) {
    this.app = app;
  }

  open(proxyForMoverPosition: HTMLElement, faeSide: FaeSide) {
    this.faeSide = faeSide;

    // make copy of acctList for mover
    this.moverAcctList.push(...faeSide.acctList);

    // postion moverDialogContent
    let moverDialogPositionProps = proxyForMoverPosition.getBoundingClientRect();
    this.moverDialogContent.style.top = `${moverDialogPositionProps.top}px`;
    this.moverDialogContent.style.left = `${moverDialogPositionProps.left}px`;

    // show modal dialog
    this.moverDialogModal.style.display = "block";
  }

  done() {
    /*
    In the view an Aurelia repeat loop is coded as follows to create
    a div for each row of the mover datagrid as follows.

     <template repeat.for="moverAcctListItem of moverAcctList">
          <div
            class="aaRow"
            mover-acct-list-item.bind="moverAcctListItem"
            /
            /
            /

    In that loop note that

      mover-acct-list-item.bind="moverAcctListItem"

    creates a property named moverAcctListItem on each row, a div of type HTMLElement.
    The value of that property is set to the iterator moverAcctListItem.

    The following for loop uses that moverAcctListItem property
    to reference the original acct|annotation object and update its intraTranIndex property
    to reflect its possibly new position in the list as a result of moving.
    */
    this.moverAcctList.splice(0, this.moverAcctList.length); //donewith it, delete all members
    for (let i = 0; i <= this.moverRowList.childElementCount - 1; i++) {
      let listItem = (<any>this.moverRowList.children[i]).listItem as Acct | Annotation;
      console.log(listItem);
      listItem.intraSideSorter = i;
    }
    this.faeSide.refresh();
    this.moverDialogModal.style.display = "none";
  }

  cancel() {
    this.moverAcctList.splice(0, this.moverAcctList.length); //donewith it, delete all members
    this.moverDialogModal.style.display = "none";
  }

  onRowMouseDown(event) {
    let targetRow: Element = event.currentTarget as Element;
    targetRow.children[0].classList.toggle('aaRowDataHover', false);
    targetRow.children[0].classList.toggle('aaDragging', true);
    this.mouseIsDown = true;
    this.selectedMoverRow = event.currentTarget;
  }

  onRowMouseUp(event) {
    let targetRow = event.currentTarget as Element;
    targetRow.children[0].classList.toggle('aaDragging', false);
    targetRow.children[0].classList.toggle('aaRowDataHover', true);
    this.mouseIsDown = false;
    this.selectedMoverRow = null;
  }

  onRowMouseLeave(event, listItem) {
    if (!this.mouseIsDown) {
      let targetRow = event.currentTarget as Element;
      targetRow.children[0].classList.toggle('aaRowDataHover', false);
    }
  }

  onRowMouseEnter(event, listItem) {
    if (!this.mouseIsDown) {
      let targetRow = event.currentTarget as Element;
      targetRow.children[0].classList.toggle('aaRowDataHover', true);
    }
  }

  onListMouseMove(event) {
    if (!this.mouseIsDown || !this.selectedMoverRow) {
      return;
    }
    let mouseY = event.clientY;
    let moverRowList = event.currentTarget;
    let previousSibling = this.selectedMoverRow.previousElementSibling;
    if (previousSibling && mouseY < this.selectedMoverRow.getBoundingClientRect().top) {
      moverRowList.insertBefore(this.selectedMoverRow, previousSibling);
      return;
    }
    let nextSibling = this.selectedMoverRow.nextElementSibling;
/*
    if (nextSibling.id == `${this.app.END_OF_LIST}`) {
      nextSibling = null;
    }
*/
    if (nextSibling && mouseY >= nextSibling.getBoundingClientRect().top) {
      moverRowList.insertBefore(nextSibling, this.selectedMoverRow);
      return;
    }
  }

  onListMouseLeave(event) {
    if (this.mouseIsDown && this.selectedMoverRow) {
      this.selectedMoverRow.children[0].classList.toggle('aaDragging', false);
      this.selectedMoverRow.children[0].classList.toggle('aaRowDataHover', false);
      this.mouseIsDown = false;
      this.selectedMoverRow = null;
      return;
    }
  }

  elementY(element) {
    return element.getBoundingClientRect().top;
  };
}
