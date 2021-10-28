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

  /* element reference(s) */
  rowOpsMenuModal: HTMLElement;
  rowOpsBoundingClientRect;
  rowColumnHeaders: HTMLElement;
  divScrollableRows: Element;

  /* other properties */
  Acct: typeof Acct = Acct;
  Annotation: typeof Annotation = Annotation;
  mouseIsDown: boolean = false;
  selectedMoverRow: Element = null;
  rowEnterCnt: number = 0;

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
  saveChanges(): void {
    for (let i = 0; i < this.divScrollableRows.children.length - 1; i++) {
      let listItem = this.faeSide.acctList.find(element => element.id == this.divScrollableRows.children[i].id);
      listItem.intraSideIndex = i;
    }
    this.faeSide.sortAcctList();
  }
  cancel(): void {
  }
  onRowMouseDown(event): void {
    let targetRow = event.currentTarget as Element;
    targetRow.children[0].classList.toggle('aaRowOpsMoverSelected', true);
    targetRow.children[2].classList.toggle('aaDragging', true);
    targetRow.children[2].classList.toggle('aaRowDataHover', false);
    this.mouseIsDown = true;
    this.selectedMoverRow = event.currentTarget;
  }
  onRowMouseUp(event): void {
    let targetRow = event.currentTarget as Element;
    targetRow.children[0].classList.toggle('aaRowOpsMoverSelected', false);
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
    let targetRow = event.currentTarget as Element;
    if (this.mouseIsDown && this.selectedMoverRow) {
      // user dragged mouse into row (with mous down)
      if (this.selectedMoverRow.previousElementSibling && this.selectedMoverRow.previousElementSibling.id == targetRow.id) {
        this.divScrollableRows.insertBefore(this.selectedMoverRow, targetRow);
        this.selectedMoverRow.scrollIntoView({block: 'center'});
      }
      else if (this.selectedMoverRow.nextElementSibling && this.selectedMoverRow.nextElementSibling.id == targetRow.id) {
        // NOTE: In the following statement "targetRow.nextSibling" works, "targetRow.nextElementSibling" does not work
        this.selectedMoverRow.parentElement.insertBefore(this.selectedMoverRow, targetRow.nextSibling);
        this.selectedMoverRow.scrollIntoView({block: 'nearest'});
      }
    }
    else {
      // user moved mouse into row with mouse up
      let targetRow = event.currentTarget as Element;
      targetRow.children[2].classList.toggle('aaRowDataHover', true);
    }
  }
  onListMouseLeave(event) {
    if (this.mouseIsDown && this.selectedMoverRow) {
      this.selectedMoverRow.scrollIntoView({block: 'center'});
      this.selectedMoverRow.children[0].classList.toggle('aaRowOpsMoverSelected', false);
      this.selectedMoverRow.children[2].classList.toggle('aaDragging', false);
      this.selectedMoverRow.children[0].classList.toggle('aaRowDataHover', false);
      this.mouseIsDown = false;
      this.selectedMoverRow = null;
    }
  }
  onTransparentRowMouseEnter(event) {
    if (this.mouseIsDown && this.selectedMoverRow) {
      // this.selectedMoverRow.scrollIntoView({block: 'center'});
      this.selectedMoverRow.children[0].classList.toggle('aaRowOpsMoverSelected', false);
      this.selectedMoverRow.children[2].classList.toggle('aaDragging', false);
      this.selectedMoverRow.children[0].classList.toggle('aaRowDataHover', false);
      this.mouseIsDown = false;
      this.selectedMoverRow = null;
    }
  }
}
