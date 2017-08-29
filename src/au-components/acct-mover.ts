import {customElement, bindable, inject} from 'aurelia-framework';
import {Eva} from '../eva';
import {AcctList} from '../models/acct-list';
import {Acct, Annotation} from '../models/acct';
import {FaeSide} from '../au-components/fae-side';

@customElement('au-acct-mover')
@inject(FaeSide)
export class AcctMover {
  //
  eva: Eva = Eva.getInstance();
  faeSide: FaeSide;
  equationSide: string;
  sideAcctList: AcctList;
  moverDialogPositionElement;

  bindMoverDialog = true;
  moverDialog;
  mouseIsDown: boolean = false;
  selectedMoverRow: Element = null;
  mouseEventCnt: number = 1;
  moverDialogModal;
  //
  constructor(faeSide: FaeSide) {
    console.log(`[in constructor] faeSide: ${faeSide};`);
    console.log(`[in constructor] faeSide.equationSide: ${faeSide.equationSide};`);
    console.log(`[in constructor] faeSide.sideAcctList: ${faeSide.sideAcctList};`);
    this.faeSide = faeSide;
    console.log(`[in constructor] this.faeSide: ${this.faeSide};`);
    console.log(`[in constructor] this.faeSide.equationSide: ${this.faeSide.equationSide};`);
    this.equationSide = faeSide.equationSide;
    this.sideAcctList = faeSide.sideAcctList;
    this.moverDialogPositionElement = faeSide.moverDialogPositionElement;
    this.moverDialogModal = document.getElementById(`moverDialogModal2-${this.equationSide}`);
    console.log(`(in acct-mover.ts):: moverDialogModal.id: "moverDialogModal2-${this.equationSide}";`);
    console.log(this.moverDialogModal);
  }



  attached() {
    // this.moverDialogModal = document.getElementById(`moverDialogModal2-${this.equationSide}`);
    // console.log(`(in acct-mover.ts):: moverDialogModal.id: "moverDialogModal2-${this.equationSide}";`);
    // console.log(this.moverDialogModal);
  }

  onMoverDialogOpen(event) {
    // let moverRowList = document.getElementById(`${this.equationSide}-mover-row-list`);
    this.bindMoverDialog = true;
    this.moverDialogModal.style.display = "block";
  }

  onMoverDialogDone(event) {
    let moverRowList = document.getElementById(`${this.equationSide}-mover-row-list`);
    for (let i = 0; i < moverRowList.childElementCount; i++) {
      let moverAcctId = moverRowList.children[i].getAttribute("data-acct-id");
      for (let acctItem of this.sideAcctList) {
        // console.log(`moverRowId: "${moverRowId}"; acctItem.id: "${acctItem.id}"`);
        if (acctItem.id == moverAcctId) {
          acctItem.intraSideSorter = i;
          break;
        }
      }
    }
    this.sideAcctList.refresh();
    // console.log(this.sideAcctList);
    this.moverDialogModal.style.display = "none";
    this.bindMoverDialog = false;
  }

  onMoverDialogCancel(event) {
    this.moverDialogModal.style.display = "none";
    this.bindMoverDialog = false;
  }

  onMoveRowMouseDown(event) {
    let targetRow: Element = event.currentTarget as Element;
    // this.logMouseEvent("mouseDown", this.selectedMoverRow, targetRow);
    targetRow.children[0].classList.toggle('aaRowHover', false);
    targetRow.children[0].classList.toggle('aaDragging', true);
    this.mouseIsDown = true;
    this.selectedMoverRow = event.currentTarget;
  }

  onMoveRowMouseUp(event) {
    let targetRow = event.currentTarget as Element;
    // this.logMouseEvent("mouseUp", this.selectedMoverRow, targetRow);
    targetRow.children[0].classList.toggle('aaDragging', false);
    targetRow.children[0].classList.toggle('aaRowHover', true);
    this.mouseIsDown = false;
    this.selectedMoverRow = null;
  }

  onMoveRowMouseLeave(event, listItem) {
    if (!this.mouseIsDown) {
      let targetRow = event.currentTarget as Element;
      targetRow.children[0].classList.toggle('aaRowHover', false);
    }
  }

  onMoveRowMouseEnter(event, listItem) {
    if (!this.mouseIsDown) {
      let targetRow = event.currentTarget as Element;
      targetRow.children[0].classList.toggle('aaRowHover', true);
    }
  }

  onMouseMove(event) {
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

  elementY(element) {
    return element.getBoundingClientRect().top;
  };

  logMouseEvent(mouseEvent: string, selectedMoverRow: Element, targetRow: Element) {
    // console.log(`${this.mouseEventCnt++}. mouseEvent: ${mouseEvent}; selectedMoverRow: ${selectedMoverRow ? selectedMoverRow.children[0].innerHTML : "null"}; targetRow: ${targetRow.children[0].innerHTML};`);
  }
}
