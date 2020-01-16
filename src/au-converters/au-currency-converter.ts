import {valueConverter} from "aurelia-framework";

@valueConverter("auCurrencyConverter")
export class AuCurrencyConverter {
  toView(currencyAmt: number) {
    return Intl.NumberFormat("en-US",
      {
        style: "decimal",
        minimumIntegerDigits: 1,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(currencyAmt);
  }
}
