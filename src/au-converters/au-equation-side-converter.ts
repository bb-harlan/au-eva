import {inject, valueConverter} from "aurelia-framework";
import {App} from 'app';
import {AuFaeSide} from "au-components/au-fae-side";

@valueConverter("auEquationSideConverter")
@inject(App)
export class AuEquationSideConverter {
  app = null;

  constructor(app) {
    this.app = app;
  }

  toView(faeSideId: string, capitalize: boolean, plural: boolean) {
    if (faeSideId == this.app.data.SIDE_ID_ASSETS) {
      return `${capitalize ? "A" : "a"}sset${plural ? "s" : ""}`;
    }
    else if (faeSideId == this.app.data.SIDE_ID_EQUITIES) {
      return `${capitalize ? "E" : "e"}quit${plural ? "ies" : "y"}`;
    }
    else {
      return "[equation side logic fault]";
    }
  }
}
