import {valueConverter} from "aurelia-framework";
import {Eva} from '../eva';
@valueConverter("currencyConverter")
export class CurrencyConverter {
  eva: Eva = Eva.getInstance();

  toView(currencyAmount: number) {
    return this.eva.formattedCurrency(currencyAmount);
  }
}
