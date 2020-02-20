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
}

