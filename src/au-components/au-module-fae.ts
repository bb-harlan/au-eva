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
  attached() {
    console.log(`ATTACHED() - <au-module-fae>`);
    if (this.app.selectedAcct) {
      this.app.gridScrollerLink.setAttribute("href", `#${this.app.selectedAcct.id}`);
      this.app.gridScrollerLink.click();
    }
  }
  detached() {
    console.log(`DETACHED() - <au-module-fae>`);
  }

}

