import {valueConverter} from "aurelia-framework";
// import {Eva} from '../eva';

@valueConverter("auCurrencyConverter")
export class AuCurrencyConverter {
  // eva: Eva = Eva.getInstance();

  toView(currencyAmount: number) {
    return Intl.NumberFormat("en-US",
      {
        style: "decimal",
        minimumIntegerDigits: 1,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(currencyAmount);
  }
}
