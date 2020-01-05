import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';
import {AuModuleTran} from 'au-components/au-module-tran';
import {Bchg} from 'app-data/models/bchg';
import {Acct, Annotation} from "../app-data/models/acct";

@customElement('au-popup-bchg-mover')
@inject(App, AuModuleTran)
export class AuPopupBchgMover {
  /* @injected item(s) */
  app: App;
  auModuleTran: AuModuleTran;

  /* data properties */
  moverBchgList: Array<Bchg> = [];

  /* view properties */
  mouseIsDown: boolean = false;
  selectedMoverRow: Element = null;

  /* ref properties */
  moverDialogModal: HTMLElement; //<div element.ref="moverDialogModal"
  moverDialogContent: HTMLElement; // <div element.ref = "moverDialogContent" ...
  moverRowList: HTMLElement; //<div element.ref="moverRowList"

  constructor(app: App, auModuleTran: AuModuleTran) {
    this.app = app;
    this.auModuleTran = auModuleTran;
  }

  open(event, proxyForMoverPositionTop: HTMLElement, proxyForMoverPositionLeft: HTMLElement) {
    // make copy of bchgList for mover
    this.moverBchgList.push(...this.auModuleTran.clonedTran.bchgList);
    // position moverDialogContent
    let proxyPositionProps = proxyForMoverPositionTop.getBoundingClientRect();
    this.moverDialogContent.style.top = `${proxyPositionProps.top}px`;
    proxyPositionProps = proxyForMoverPositionLeft.getBoundingClientRect();
    this.moverDialogContent.style.left = `${proxyPositionProps.left}px`;
    // display dialog
    this.moverDialogModal.style.display = "block";
  }

  done(event) {
    /*
    In the view an Aurelia repeat loop is coded as follows to create
    a div for each row of the mover datagrid as follows.

      <template repeat.for="bchg of moverBchgList">
        <div
        class="aaRow"
         mover-bchg.bind="moverBchg"
        /
        /
        /

    In that loop note that

        mover-bchg.bind="bchg"

    creates a property named moverBchg on each row element, a div of type HTMLElement.
    The value of that property is set to the iterator bchg.

    The following for loop uses that moverBchg property
    to reference the original bchg object and update its intraTranIndex property
    to reflect its possibly new position in the list as a result of moving.
    */
    for (let i = 0; i <= this.moverRowList.childElementCount - 1; i++) {
      let moverBchg = (<any>this.moverRowList.children[i]).moverBchg as Bchg;
      moverBchg.intraTranIndex = i;
    }
    this.moverBchgList = []; //done with it
    this.auModuleTran.clonedTran.bchgList.sort((a: Bchg, b: Bchg) => a.compareToInTran(b));
    this.moverDialogModal.style.display = "none";
  }

  cancel(event) {
    this.moverBchgList = []; //done with it
    this.moverDialogModal.style.display = "none";
  }

  onRowMouseDown(event) {
    let targetRow: Element = event.currentTarget as Element;
    targetRow.children[1].classList.toggle('aaRowDataHover', false);
    targetRow.children[1].classList.toggle('aaDragging', true);
    this.mouseIsDown = true;
    this.selectedMoverRow = event.currentTarget;
  }

  onRowMouseUp(event) {
    let targetRow = event.currentTarget as Element;
    targetRow.children[1].classList.toggle('aaDragging', false);
    targetRow.children[1].classList.toggle('aaRowDataHover', true);
    this.mouseIsDown = false;
    this.selectedMoverRow = null;
  }

  onRowMouseLeave(event, bchg) {
    if (!this.mouseIsDown) {
      let targetRow = event.currentTarget as Element;
      targetRow.children[1].classList.toggle('aaRowDataHover', false);
    }
  }

  onRowMouseEnter(event, bchg) {
    if (!this.mouseIsDown) {
      let targetRow = event.currentTarget as Element;
      targetRow.children[1].classList.toggle('aaRowDataHover', true);
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
