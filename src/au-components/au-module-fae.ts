import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-fae')
@inject(App)
export class AuModuleFae {
  //
  app = null;

  /*=====================================================
   *  reference(s)
   *=====================================================
   */
  viewmodelPopupAcctMover; // <au-popup-acct-mover view-model.ref="viewmodelPopupAcctMover"></au-popup-acct-mover>

  constructor(app) {
    this.app = app;
  }

  selectSide(faeSide) {
    this.app.selectedFaeSide = faeSide;
  }

  deselectSide(event) {
    this.app.selectedFaeSide = null;
  }

  bind() {
    if (this.app.selectedAcct) {
      this.app.gridScrollerLink.setAttribute("href", `#${this.app.selectedAcct.id}`);
      this.app.gridScrollerLink.click();
    } else {
      this.app.gridScrollerLink.setAttribute("href", `#`);
    }
    this.app.selectedBchg = null;
    this.app.selectedTran = null;
  }
}

