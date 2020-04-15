import {Acct, Annotation} from 'app-data/models/acct';
import {customElement, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-acct')
@inject(App)
export class AuModuleAcct {
  app = null;

  Acct: typeof Acct = Acct;
  Annotation: typeof Annotation = Annotation;

  constructor(app) {
    this.app = app;
  }
  onRowEnter(event, listItem) {
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', true);
    event.target.children[2].classList.toggle('aaRowDataHover', true);
  }
  onRowLeave(event, listItem) {
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', false);
    event.target.children[2].classList.toggle('aaRowDataHover', false);
  }
}

