import {customElement, bindable, inject} from 'aurelia-framework';
import {FaeSide} from 'app-data/models/fae-side';
import {Acct, Annotation} from 'app-data/models/acct';
import {App} from 'app';

@customElement('au-popup-acct-mover')
@inject(App)
export class AuPopupAcctMover {

  /* @injected object(s) */
  app: App;

  // refs
  moverDialogModal: HTMLElement; // <div element.ref="moverDialogModal" class="aaModal">
  moverDialogContent: HTMLElement; // <div element.ref = "moverDialogContent" ...
  moverGridRows: HTMLElement; //  <div element.ref="moverGridRows" class="aaGridScrollableRows" ...

  /* other properties */
  faeSide: FaeSide;
  moverAcctList: Array<Acct | Annotation> = [];
  mouseIsDown: boolean = false;
  selectedMoverRow: Element = null;

  constructor(app) {
    this.app = app;
  }
  open(popupTop: HTMLElement, popupLeft: HTMLElement, faeSide: FaeSide): void {
    // set postion of moverDialogContent
    let boundingClientRect;
    boundingClientRect = popupTop.getBoundingClientRect();
    this.moverDialogContent.style.top = `${boundingClientRect.top}px`;
    boundingClientRect = popupLeft.getBoundingClientRect();
    this.moverDialogContent.style.left = `${boundingClientRect.left}px`;

    // make copy of acctList for mover
    this.faeSide = faeSide;
    this.moverAcctList.push(...this.faeSide.acctList);

    // show modal dialog
    this.moverDialogModal.style.display = "flex";
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
    The value of that property is set to the iterator moverAcctListItem, therby providing
    another reference to the listIems in the array moverAcctList.

    The following for loop uses that moverAcctListItem property
    to reference the original acct|annotation object and update its intraTranIndex property
    to reflect its possibly new position in the list as a result of moving.
    */
    this.moverAcctList.splice(0, this.moverAcctList.length); //done with it, delete all members
    for (let i = 0; i <= this.moverGridRows.childElementCount - 1; i++) {
      let listItem = (<any>this.moverGridRows.children[i]).listItem as Acct | Annotation;
      listItem.intraSideIndex = i;
    }
    this.faeSide.sortAcctList();
    this.moverDialogModal.style.display = "none";
  }
  cancel() {
    this.moverAcctList.splice(0, this.moverAcctList.length); //done with it, delete all members
    // terminate the modal popup
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
    let moverGridRows = event.currentTarget;
    let previousSibling = this.selectedMoverRow.previousElementSibling;
    if (previousSibling && mouseY < this.selectedMoverRow.getBoundingClientRect().top) {
      moverGridRows.insertBefore(this.selectedMoverRow, previousSibling);
      return;
    }
    let nextSibling = this.selectedMoverRow.nextElementSibling;
    if (nextSibling && mouseY >= nextSibling.getBoundingClientRect().top) {
      moverGridRows.insertBefore(nextSibling, this.selectedMoverRow);
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
