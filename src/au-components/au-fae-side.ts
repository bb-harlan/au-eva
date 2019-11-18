import {customElement, bindable, inject} from 'aurelia-framework';
import {FaeSide} from 'app-data/models/fae-side';
import {App} from 'app';
import {AuModuleFae} from 'au-components/au-module-fae';

@customElement('au-fae-side')
@inject(App, AuModuleFae)
export class AuFaeSide {
  app: App;
  auModuleFae: AuModuleFae;
  @bindable faeSide: FaeSide;

  /*=====================================================
    *  references
    *=====================================================
    */
  proxyForMoverPositions: HTMLElement; // <div class="aaRowData aaRowBgColorNonData"  element.ref="proxyForMoverPositions">

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

  onGoAcct(event, listItem) {
    this.app.selectedBchg = null;
    this.app.selectedAcct = listItem;
    this.app.selectedModule = this.app.MODULE_ACCT;
  }

  onEditRows(event) {
    alert('Not yet implemented.')
  }
}
