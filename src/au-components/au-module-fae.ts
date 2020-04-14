import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';
import {Acct} from 'app-data/models/acct';

@customElement('au-module-fae')
@inject(App)
export class AuModuleFae {

  // @injected item(s)
  app: App;

  /*=====================================================
   *  reference(s)
   *=====================================================
   */
  viewmodelPopupAcctMover; // <au-popup-acct-mover view-model.ref="viewmodelPopupAcctMover"></au-popup-acct-mover>

  constructor(app, auModuleFae) {
    this.app = app;
  }
  faeSidesEdit(event) {
    this.app.candidateFaeSideAssets = this.app.data.faeSideAssets.clone();
    this.app.candidateFaeSideEquities = this.app.data.faeSideEquities.clone();
    this.app.viewNavMode = false;
  }
  faeSidesEditDone(event) {
    this.app.data.faeSideAssets = this.app.candidateFaeSideAssets;
    this.app.data.faeSideEquities = this.app.candidateFaeSideEquities;
    this.app.candidateFaeSideAssets = null;
    this.app.candidateFaeSideEquities = null;
    this.app.data.faeSideAssets.refresh();
    this.app.data.faeSideEquities.refresh();
    this.app.viewNavMode = true;;
  }
  faeSidesEditCancel(event) {
    this.app.candidateFaeSideAssets = null;
    this.app.candidateFaeSideEquities = null;
    this.app.viewNavMode = true;;
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

