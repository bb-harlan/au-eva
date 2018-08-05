import {valueConverter} from "aurelia-framework";
// import {Eva} from '../eva';

@valueConverter("currencyConverter")
export class CurrencyConverter {
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
