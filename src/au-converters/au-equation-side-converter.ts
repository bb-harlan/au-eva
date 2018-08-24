import {valueConverter} from "aurelia-framework";
import {Eva} from "eva";


@valueConverter("auEquationSideConverter")
export class AuEquationSideConverter {
  eva: Eva = Eva.getInstance();

  toView(faeSideId: string, capitalize: boolean, plural: boolean) {
    if (faeSideId == this.eva.SIDE_ID_ASSETS) {
      return `${capitalize ? "A" : "a"}sset${plural ? "s" : ""}`;
    }
    else if (faeSideId == this.eva.SIDE_ID_EQUITIES) {
      return `${capitalize ? "E" : "e"}quit${plural ? "ies" : "y"}`;
    }
    else {
      return "[equation side logic fault]";
    }
  }
}
