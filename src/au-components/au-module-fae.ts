import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-fae')
@inject(App)
export class AuModuleFae {
  get NAV() {
    return "nav";
  }
  get EDIT() {
    return "edit";
  }
  faeView = this.NAV;

  // @injected item(s)
  app: App;

  /*=====================================================
   *  reference(s)
   *=====================================================
   */
  viewmodelPopupAcctMover; // <au-popup-acct-mover view-model.ref="viewmodelPopupAcctMover"></au-popup-acct-mover>

  constructor(app) {
    this.app = app;
  }
  faeSidesEdit(event) {
    this.app.candidateFaeSideAssets = this.app.data.faeSideAssets.clone();
    this.app.candidateFaeSideEquities = this.app.data.faeSideEquities.clone();
/*
    console.log("*** clones of faeSides ***")
    console.log(this.app.candidateFaeSideAssets);
    console.log(this.app.candidateFaeSideEquities);
*/
    this.faeView = this.EDIT;
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

