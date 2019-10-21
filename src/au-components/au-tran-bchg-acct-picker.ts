import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';
import {Bchg} from 'app-data/models/bchg';

@customElement('au-tran-bchg-acct-picker')
@inject(App)
export class AuTranBchgAcctPicker {
  app = null;
  /* data properties */
  moverTranBchgList: Array<Bchg>;
  /* view properties */
  mouseIsDown: boolean = false;
  selectedMoverRow: Element = null;
  moverDialogModal: HTMLElement = null;
  moverRowList: HTMLElement; //<div element.ref="moverRowList"
  constructor(app) {
    this.app = app;
  }

  onDialogOpen(event, moverDialogPositionElement, bchg) {
    alert(bchg.targetAcct.title);
    alert(this.app.data.faeSideEquities.acctList[0].title);
    bchg.targetAcct = this.app.data.faeSideEquities.acctList[0]; // test
    bchg.sourceTran.refresh(); // test
    return;
    this.moverTranBchgList = [];
    this.moverTranBchgList.push(...this.app.selectedTran.bchgList);
    let moverDialogPositionProps = moverDialogPositionElement.getBoundingClientRect();
    this.moverDialogModal.style.display = "block";
  }

  onDialogDone(event) {
    /*
    In the view an Aurelia repeat loop is coded as follows to create
    a div for each row of the mover datagrid as follows.

      <template repeat.for="moverBchg of moverTranBchgList">
        <div
        class="aaRow"
        bchg.bind="bchg"
        /
        /
        /

    In that loop note that

        mover-bchg.bind="moverBchg"

    creates a property named moverBchg on each row, a div of type HTMLElement.
    The value of that property is set to the iterator moverBchg.

    The following for loop uses that moverBchg property
    to reference the original bchg object and update its intraTranSorter property
    to reflect its possibly new position in the list as a result of moving.
    */
    this.moverTranBchgList = []; //done with it
    for (let i = 0; i < this.moverRowList.childElementCount - 1; i++) {
      let moverBchg = (<any>this.moverRowList.children[i]).moverBchg as Bchg;
      moverBchg.intraTranSorter = i;
    }
    this.app.selectedTran.refresh();
    this.moverDialogModal.style.display = "none";
  }

  onDialogCancel(event) {
    this.moverTranBchgList = []; //done with it
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
    if (nextSibling.id == `${this.app.END_OF_LIST}`) {
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
