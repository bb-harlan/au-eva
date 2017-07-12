import {customElement, inject} from 'aurelia-framework';
import {App} from '../app';
@customElement('au-di-experiment')
@inject(App)

export class DiExperiment {

  app:App;

  constructor(app: App) {
    this.app = app;
  }
}

