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
  }

  onGoTran(event) {
    this.app.selectedModule = this.app.MODULE_TRAN;
  }
}

