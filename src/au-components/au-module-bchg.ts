import {customElement, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-bchg')
@inject(App)
export class AuModuleBchg {
  app = null;

  constructor(app) {
    this.app = app;
  }

  onGoAcct(event) {
    this.app.selectedModule = this.app.MODULE_ACCT;
    this.app.gridScrollerLink.setAttribute("href", `#${this.app.selectedBchg.id}`);
    this.app.gridScrollerLink.click();
  }

  onGoTran(event) {
    this.app.selectedModule = this.app.MODULE_TRAN;
    this.app.gridScrollerLink.setAttribute("href", `#${this.app.selectedBchg.id}`);
    this.app.gridScrollerLink.click();
  }
}

