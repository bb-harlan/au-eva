import {customElement, bindable} from 'aurelia-framework';
import {Eva} from '../eva';
import {TranBchgList} from '../models/tran-bchg-list';
import {Bchg} from '../models/bchg';

@customElement('au-tran-bchg-mover')
export class TranBchgMover {
  eva: Eva = Eva.getInstance();
  @bindable tranBchgList: TranBchgList;
  @bindable moverDialogPositionElement;

  moverTranBchgList: TranBchgList;
  mouseIsDown: boolean = false;
  selectedMoverRow: Element = null;
  moverDialogModal: HTMLElement = null;
  moverRowList: HTMLElement;


  onDialogOpen(event) {
    this.moverTranBchgList = new TranBchgList();
    this.moverTranBchgList.push(...this.tranBchgList);
    console.log(this.moverTranBchgList);
    this.moverDialogModal.style.display = "block";
  }
  onDialogDone(event) {
    for (let i = 0; i < this.moverRowList.childElementCount; i++) {
      let bchg = (<any>this.moverRowList.children[i]).bchg as Bchg;
      bchg.intraTranSorter = i;
    }
    this.tranBchgList.refresh();
    this.moverTranBchgList = null;
    this.moverDialogModal.style.display = "none";
  }
  onDialogCancel(event) {
    this.moverTranBchgList = null;
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
