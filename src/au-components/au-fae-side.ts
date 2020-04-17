import {customElement, bindable, inject} from 'aurelia-framework';
import {FaeSide} from 'app-data/models/fae-side';
import {Acct, Annotation} from 'app-data/models/acct';
import {App} from 'app';
import {AuModuleFae} from 'au-components/au-module-fae';

@customElement('au-fae-side')
@inject(App, AuModuleFae)
export class AuFaeSide {

  /* @injected object(s) */
  app: App;
  auModuleFae: AuModuleFae;

  @bindable faeSide: FaeSide;

  /* element reference(s) */
  popupTop: HTMLElement; // <div class="aaRowData aaRowBgColorNonData"  element.ref="popupTopLeft">
  popupLeft: HTMLElement; // <div class="aaRowData aaRowBgColorNonData"  element.ref="popupTopLeft">
  rowOpsMenuModal: HTMLElement;
  rowOpsMenuContent: HTMLElement;
  rowOpsBoundingClientRect;

  /* other properties */
  Acct: typeof Acct = Acct;
  Annotation: typeof Annotation = Annotation;

  /*
   * In the following two mouesenter/mouseleave handlers, the end-of-list
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

  onRowEnter(event, listItem) {
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', true);
    event.target.children[2].classList.toggle('aaRowDataHover', true);
  }

  onRowLeave(event, listItem) {
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', false);
    event.target.children[2].classList.toggle('aaRowDataHover', false);
  }

  onRowOpsOpen(event, listItem) {
    this.rowOpsBoundingClientRect = (event.target as Element).parentElement.getBoundingClientRect();
    this.rowOpsMenuModal.style.display = "block";
  }

  onRowOpsCancel(event) {
    if (event.target == this.rowOpsMenuModal) {
      this.rowOpsMenuModal.style.display = "none";
    }
  }
  acctNew(event, listItem) {
    let insertionIndex: number;
    let newAcct: Acct;
    if (listItem) {
      insertionIndex = listItem.intraSideIndex;
    }
    else {
      insertionIndex = this.faeSide.acctList.length;
    }
    newAcct = new Acct(
      /*id*/ `acct${this.app.data.nextAcctId}`,
      /*parentFaeSide*/ this.faeSide,
      /*intraSideIndex*/ 0,
      /*title*/ "",
      /*normalBalance*/ 1);
    this.faeSide.acctList.splice(insertionIndex, 0, newAcct);
    this.faeSide.reindexAcctList();
  }
  annotationNew(event, listItem) {
    let insertionIndex: number;
    let newAnnotation: Annotation;
    if (listItem) {
      insertionIndex = listItem.intraSideIndex;
    }
    else {
      insertionIndex = this.faeSide.acctList.length;
    }
    newAnnotation = new Annotation(
      /*id*/ `acct${this.app.data.nextAcctId}`,
      /*parentFaeSide*/ this.faeSide,
      /*intraSideIndex*/ 0,
      /*annoText*/ "");
    this.faeSide.acctList.splice(insertionIndex, 0, newAnnotation);
    this.faeSide.reindexAcctList();
  }
  listItemDelete(event, listItem) {
    if (listItem instanceof Acct && listItem.bchgList.length != 0) {
      alert("cannot delete");
      return
    }
    let removalIndex = listItem.intraSideIndex;
    this.faeSide.acctList.splice(removalIndex, 1);
    this.faeSide.reindexAcctList();
  }
}
