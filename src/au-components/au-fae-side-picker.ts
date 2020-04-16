import {customElement, bindable, inject} from 'aurelia-framework';
import {FaeSide} from 'app-data/models/fae-side';
import {Acct, Annotation} from 'app-data/models/acct';
import {App} from 'app';
import {AuPopupAcctPicker} from 'au-components/au-popup-acct-picker';

@customElement('au-fae-side-picker')
@inject(App, AuPopupAcctPicker)
export class AuFaeSidePicker {
  app: App;
  auPopupAcctPicker: AuPopupAcctPicker;

  @bindable faeSide: FaeSide;

  /* element reference(s) */
  popupTopLeft: HTMLElement; // <div class="aaRowData aaRowBgColorNonData"  element.ref="popupTopLeft">
  rowOpsMenuModal: HTMLElement;
  rowOpsMenuContent: HTMLElement;
  rowOpsBoundingClientRect;

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
  constructor(app, auPopupAcctPicker) {
    this.app = app;
    this.auPopupAcctPicker = auPopupAcctPicker;
  }

  onRowEnter(event, listItem) {
    event.target.children[0].children[0].classList.toggle('aaRowDataHover', true);
  }

  onRowLeave(event, listItem) {
    event.target.children[0].children[0].classList.toggle('aaRowDataHover', false);
  }
}
