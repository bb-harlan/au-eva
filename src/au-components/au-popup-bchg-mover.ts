import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';
import {Bchg} from 'app-data/models/bchg';

@customElement('au-popup-bchg-mover')
@inject(App)
export class AuPopupBchgMover {
  /* @injected object(s) */
  app: App;

  /* data properties */
  moverBchgList: Array<Bchg> = [];

  /* view properties */
  mouseIsDown: boolean = false;
  selectedMoverRow: Element = null;

  /* element.ref properties */
  moverDialogModal: HTMLElement; //<div element.ref="moverDialogModal"
  moverDialogContent: HTMLElement; // <div element.ref = "moverDialogContent" ...
  moverGridRows: HTMLElement; //<div element.ref="moverGridRows"

  constructor(app: App) {
    this.app = app;
  }

  open(): void {
    // make copy of bchgList for mover
    this.moverBchgList.push(...this.app.candidateTran.bchgList);
    // position moverDialogContent
    let boundingClientRect = this.app.viewmodelTran.popupTop.getBoundingClientRect();
    this.moverDialogContent.style.marginTop = `${boundingClientRect.top}px`;
    // display dialog
    this.moverDialogModal.style.display = "flex";
  }

  done(event) {
    /*
    In the view an Aurelia repeat loop is coded as follows to create
    a div for each row of the mover datagrid as follows.

      <template repeat.for="bchg of moverBchgList">
        <div class="aaRow"
             mover-bchg.bind="moverBchg"
        /
        /
        /

    In that loop note that

        mover-bchg.one-time="bchg"

    creates a property named moverBchg on each row element, a div of type HTMLElement.
    The value of that property is set to the iterator bchg.

    The following for loop uses that moverBchg property
    to reference the original bchg object and update its intraTranIndex property
    to reflect its possibly new position in the list as a result of moving.
    */
    if (this.moverBchgList.length >= 2) {
      for (let i = 0; i < this.moverGridRows.childElementCount; i++) {
        let moverBchg = (<any>this.moverGridRows.children[i]).moverBchg as Bchg;
        moverBchg.intraTranIndex = i;
      }
      this.app.candidateTran.sortBchgList();
    }
    this.moverBchgList.splice(0, this.moverBchgList.length); //done with it, delete all members
    this.moverDialogModal.style.display = "none"; // terminate the modal popup
  }
  cancel(event) {
    this.moverBchgList.splice(0, this.moverBchgList.length); //done with it, delete all members
    this.moverDialogModal.style.display = "none"; // terminate the modal popup
  }
  onRowMouseDown(event) {
    let targetRow: Element = event.currentTarget as Element;
    targetRow.children[0].classList.toggle('aaRowOpsSelected', true);
    targetRow.children[2].classList.toggle('aaDragging', true);
    targetRow.children[2].classList.toggle('aaRowDataHover', false);
    this.mouseIsDown = true;
    this.selectedMoverRow = event.currentTarget;
  }
  onRowMouseUp(event) {
    let targetRow = event.currentTarget as Element;
    targetRow.children[0].classList.toggle('aaRowOpsSelected', false);
    targetRow.children[2].classList.toggle('aaDragging', false);
    targetRow.children[2].classList.toggle('aaRowDataHover', true);
    this.mouseIsDown = false;
    this.selectedMoverRow = null;
  }
  onRowMouseLeave(event, bchg) {
    if (!this.mouseIsDown) {
      let targetRow = event.currentTarget as Element;
      targetRow.children[2].classList.toggle('aaRowDataHover', false);
    }
  }
  onRowMouseEnter(event, bchg) {
    if (!this.mouseIsDown) {
      let targetRow = event.currentTarget as Element;
      targetRow.children[2].classList.toggle('aaRowDataHover', true);
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
}
