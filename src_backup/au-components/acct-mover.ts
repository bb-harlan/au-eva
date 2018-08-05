import {customElement, bindable} from 'aurelia-framework';
import {Eva} from '../eva';
import {AcctList} from '../models/acct-list';
import {Acct, Annotation} from '../models/acct';

@customElement('au-acct-mover')
export class AcctMover {
  eva: Eva = Eva.getInstance();
  @bindable acctList: AcctList;
  @bindable moverDialogPositionElement;
  moverDialogPositionTop;
  moverDialogPositionLeft;

  moverAcctList: AcctList;
  mouseIsDown: boolean = false;
  selectedMoverRow: Element = null;
  moverDialogModal: HTMLElement = null;
  moverRowList: HTMLElement;


  onDialogOpen(event) {
    this.moverAcctList = AcctList.create(this.acctList.equationSide);
    this.moverAcctList.push(...this.acctList);
    let moverDialogPositionProps = this.moverDialogPositionElement.getBoundingClientRect();
    this.moverDialogPositionTop = moverDialogPositionProps.top;
    this.moverDialogPositionLeft = moverDialogPositionProps.left;
    this.moverDialogModal.style.display = "block";
    // console.log(moverDialogPositionProps);
  }
  onDialogDone(event) {
    for (let i = 0; i < this.moverRowList.childElementCount - 1; i++) {
      let listItem = (<any>this.moverRowList.children[i]).listItem as Acct | Annotation;
      listItem.intraSideSorter = i;
    }
    this.acctList.refresh();
    this.moverAcctList = null;
    this.moverDialogModal.style.display = "none";
  }
  onDialogCancel(event) {
    this.moverAcctList = null;
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
