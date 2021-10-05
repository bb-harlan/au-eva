import {customElement, bindable, inject} from 'aurelia-framework';
import {FaeSide} from 'app-data/models/fae-side';
import {Acct, Annotation} from 'app-data/models/acct';
import {App} from 'app';
import {AuModuleFae} from 'au-components/au-module-fae';

@customElement('au-fae-side-move')
@inject(App, AuModuleFae)
export class AuFaeSideMove {

  /* @injected object(s) */
  app: App;
  auModuleFae: AuModuleFae;

  @bindable faeSide: FaeSide;
  candidateFaeSide: FaeSide;
  candidateSelectedAcct

  /* element reference(s) */
  rowOpsMenuModal: HTMLElement;
  rowOpsBoundingClientRect;
  rowColumnHeaders: HTMLElement;
  divScrollableRows: HTMLElement;

  /* other properties */
  Acct: typeof Acct = Acct;
  Annotation: typeof Annotation = Annotation;
  mouseIsDown: boolean = false;
  selectedMoverRow: Element = null;


  /*
   * In the following two mouseenter/mouseleave handlers, the end-of-list
   * row passes a null value as listItem to signal that the call is from the
   * end-of-list row from which there is no listItem to navigation to. This method
   * uses that signal to know not to make the nav button visible--
   * that is, it is to remain hidden. The nav button is present but hidden
   * in the end-of-list row to make the horizontal alignment of the remaining columns correct.
   *
   * event.target.children[0] is the menu buttom.
   * event.target.children[1] is the nav buttom.
   */
  constructor(app, auModuleFae) {
    this.app = app;
    this.auModuleFae = auModuleFae;
  }

/*
  open(): void {
    // alert("got here: open()");
    this.candidateFaeSide = this.faeSide.clone();
    console.log(this.candidateFaeSide);
    /!*
        if (this.app.selectedAcct) {
          let filteredAcctList = this.candidateFaeSide.acctList.filter((listItem) => listItem instanceof Acct) as Array<Acct>;
          this.candidateSelectedAcct = filteredAcctList.find(element => element.id == this.app.selectedAcct.id);
    *!/
  }
*/
  saveChanges(): void {
    if (this.divScrollableRows.children.length >= 2) {
      for (let i = 0; i < this.divScrollableRows.children.length; i++) {
        // let listItem = (<any>this.divScrollableRows.children[i]).listItem as Acct | Annotation;
        let listItem = this.faeSide.acctList.find(element => element.id == this.divScrollableRows.children[i].id);
        listItem.intraSideIndex = i;
      }
      this.faeSide.sortAcctList();
    }
  }
  cancel(): void {
    this.candidateFaeSide = null;
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
  onRowMouseLeave(event, listItem) {
    if (!this.mouseIsDown) {
      let targetRow = event.currentTarget as Element;
      targetRow.children[2].classList.toggle('aaRowDataHover', false);
    }
  }
  onRowMouseEnter(event, listItem) {
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

  onRowEnter(event, listItem) {
    event.target.children[2].classList.toggle('aaRowDataHover', true);
  }
  onRowLeave(event, listItem) {
    event.target.children[2].classList.toggle('aaRowDataHover', false);
  }
}
