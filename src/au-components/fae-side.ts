import {customElement, bindable} from 'aurelia-framework';
import {Eva} from '../eva';
import {AcctList} from '../models/acct-list';
import {Acct, Annotation} from '../models/acct';

@customElement('au-fae-side')
export class FaeSide {
  //
  eva: Eva = Eva.getInstance();
  @bindable acctList: AcctList;
  moverDialogModal: HTMLElement;
  moverDialogContent: HTMLElement;
  moverDialogPositionElement: HTMLElement;
  rowOpsMenuModal: HTMLElement;
  rowOpsMenuContent: HTMLElement;
  rowOpsBoundingClientRect;

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
  onRowEnter(event, listItem) {
    if (listItem) {
      event.target.children[0].children[0].style.visibility = 'visible';
      event.target.children[1].children[0].style.visibility = 'visible';
    }
    else {
      event.target.children[0].children[0].style.visibility = 'visible';
    }
    event.target.children[5].classList.toggle('aaRowHover', true);
  }

  onRowLeave(event, listItem) {
    if (listItem) {
      event.target.children[0].children[0].style.visibility = 'hidden';
      event.target.children[1].children[0].style.visibility = 'hidden';
    }
    else {
      event.target.children[0].children[0].style.visibility = 'hidden';
    }
    event.target.children[5].classList.toggle('aaRowHover', false);
  }

  onRowOpsOpen(event, listItem) {
    this.rowOpsBoundingClientRect = (event.target as Element).parentElement.getBoundingClientRect();
    this.rowOpsMenuModal.style.display = "block";
  }
  onRowOpsClose(event) {
    this.rowOpsMenuModal.style.display = "none";
  }

  onGoAcct(event, listItem) {
    this.eva.selectedBchg = null;
    this.eva.selectedAcct = listItem;
    this.eva.selectedModule = this.eva.MODULE_ACCT;
  }
}
