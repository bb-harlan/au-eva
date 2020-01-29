import {valueConverter, inject} from "aurelia-framework";
import {AuInputCurrency} from 'au-components/au-input-currency';

@valueConverter("auCurrencyConverter")
export class AuCurrencyConverter {
  toView(currencyAmt: number): string {
    return Intl.NumberFormat("en-US",
                             {
                               style: "decimal",
                               minimumIntegerDigits: 1,
                               minimumFractionDigits: 2,
                               maximumFractionDigits: 2
                             }).format(currencyAmt);
  }
}
