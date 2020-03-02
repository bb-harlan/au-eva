import {customElement, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-bchg')
@inject(App)
export class AuModuleBchg {
  app = null;

  constructor(app) {
    this.app = app;
  }
}

