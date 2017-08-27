import {valueConverter} from "aurelia-framework";
import {Eva} from "../eva";


@valueConverter("equationSideConverter")
export class EquationSideConverter {
  eva: Eva = Eva.getInstance();

  toView(equationSide: string, capitalize: boolean, plural: boolean) {
    if (equationSide == this.eva.SIDE_ASSETS) {
      return `${capitalize ? "A" : "a"}sset${plural ? "s" : ""}`;
    }
    else if (equationSide == this.eva.SIDE_EQUITIES) {
      return `${capitalize ? "E" : "e"}quit${plural ? "ies" : "y"}`;
    }
    else {
      return "[equation side Logic fault]";
    }
  }
}
