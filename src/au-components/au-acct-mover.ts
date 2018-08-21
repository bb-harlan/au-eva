import {customElement, bindable, inject} from 'aurelia-framework';
import {AuFaeSide} from '../au-components/au-fae-side';
import {FaeSide} from '../models/fae-side';
import {Eva} from 'eva';
import {Acct, Annotation} from 'models/acct';

@customElement('au-acct-mover')
@inject(AuFaeSide)
export class AuAcctMover {
  eva: Eva = Eva.getInstance();
  @bindable acctList: Array<Acct | Annotation>;
  @bindable moverDialogPositionElement;
  moverDialogPositionTop;
  moverDialogPositionLeft;
  auFaeSide: AuFaeSide;

  moverAcctList: Array<Acct | Annotation>;
  mouseIsDown: boolean = false;
  selectedMoverRow: Element = null;
  moverDialogModal: HTMLElement = null;
  moverRowList: HTMLElement; // element.ref="moverRowList"

  constructor(auFaeSide) {
    this.auFaeSide = auFaeSide;
  }
  onDialogOpen(event) {
    this.moverAcctList = [];
    this.moverAcctList.push(...this.auFaeSide.faeSide.acctList);
    let moverDialogPositionProps = this.moverDialogPositionElement.getBoundingClientRect();
    this.moverDialogPositionTop = moverDialogPositionProps.top;
    this.moverDialogPositionLeft = moverDialogPositionProps.left;
    this.moverDialogModal.style.display = "block";
    // console.log(moverDialogPositionProps);
  }
  onDialogDone(event) {
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
    to reference the original acct|annotation object and update its intraTranSorter property
    to reflect its possibly new position in the list as a result of moving.
    */
    this.moverAcctList = []; // done with it
    for (let i = 0; i < this.moverRowList.childElementCount - 1; i++) {
      let listItem = (<any>this.moverRowList.children[i]).listItem as Acct | Annotation;
      listItem.intraSideSorter = i;
    }
    this.auFaeSide.faeSide.refresh();
    this.moverDialogModal.style.display = "none";
  }
  onDialogCancel(event) {
    this.moverAcctList = [];
    this.moverDialogModal.style.display = "none";
  }
  onRowMouseDown(event) {
    let targetRow: Element = event.currentTarget as Element;
    targetRow.children[0].classList.toggle('aaRowHover', false);
    targetRow.children[0].classList.toggle('aaDragging', true);
    this.mouseIsDown = true;
    this.selectedMoverRow = event.currentTarget;
  }
  onRowMouseUp(event) {
    let targetRow = event.currentTarget as Element;
    targetRow.children[0].classList.toggle('aaDragging', false);
    targetRow.children[0].classList.toggle('aaRowHover', true);
    this.mouseIsDown = false;
    this.selectedMoverRow = null;
  }
  onRowMouseLeave(event, listItem) {
    if (!this.mouseIsDown) {
      let targetRow = event.currentTarget as Element;
      targetRow.children[0].classList.toggle('aaRowHover', false);
    }
  }
  onRowMouseEnter(event, listItem) {
    if (!this.mouseIsDown) {
      let targetRow = event.currentTarget as Element;
      targetRow.children[0].classList.toggle('aaRowHover', true);
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
    if (nextSibling.id == `${this.eva.END_OF_LIST}`) {
      nextSibling = null;
    }
    if (nextSibling && mouseY >= nextSibling.getBoundingClientRect().top) {
      moverRowList.insertBefore(nextSibling, this.selectedMoverRow);
      return;
    }
  }
  onListMouseLeave(event) {
    if (this.mouseIsDown && this.selectedMoverRow) {
      this.selectedMoverRow.children[0].classList.toggle('aaDragging', false);
      this.selectedMoverRow.children[0].classList.toggle('aaRowHover', false);
      this.mouseIsDown = false;
      this.selectedMoverRow = null;
      return;
    }
  }
  elementY(element) {
    return element.getBoundingClientRect().top;
  };
}
