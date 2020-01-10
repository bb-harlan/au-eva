import {inject, valueConverter} from "aurelia-framework";
import {App} from 'app';

@valueConverter("auEquationSideConverter")
@inject(App)
export class AuEquationSideConverter {
  app = null;

  constructor(app) {
    this.app = app;
  }

  toView(faeSideId: string, capitalize: boolean, plural: boolean) {
    if (faeSideId == 'Assets') {
      return `${capitalize ? "A" : "a"}sset${plural ? "s" : ""}`;
    }
    else if (faeSideId == 'Equities') {
      return `${capitalize ? "E" : "e"}quit${plural ? "ies" : "y"}`;
    }
    else {
      return "[equation side logic fault]";
    }
  }
}
