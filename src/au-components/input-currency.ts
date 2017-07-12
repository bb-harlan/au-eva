import {customElement, bindable} from 'aurelia-framework';
import {Eva} from '../eva';
//
@customElement('input-currency')
export class InputCurrency {
  //
  eva: Eva = Eva.getInstance();
  cursorPosition: number;
  currencyAmount: number;
  @bindable dataProvider: number;

  oninput(event) {
    let currencyAmount;
    let unsanitizedValue = event.target.value;
    this.cursorPosition = event.target.selectionStart;
    let sanitizedValue = "";
    let encounteredDecimalPoint = false;
    let fractionLength = 0;
    let char: string;
    let i: number;
    for (i = 0; i < unsanitizedValue.length; i++) {
      char = unsanitizedValue.substr(i, 1);
      /*
       console.log(i, "char = " + char);
       */
      if (i == 0 && char == "-") {
        sanitizedValue += char;
      }
      else if (char == ".") {
        if (!encounteredDecimalPoint) {
          // first encounter
          encounteredDecimalPoint = true;
          sanitizedValue += char;
        }
        /*
         else {
         if (i <= this.cursorPosition) {
         this.cursorPosition--;
         }
         }
         */
      } else if (char >= "0" && char <= "9") {
        sanitizedValue += char;
        if (encounteredDecimalPoint) {
          fractionLength++;
        }
      }
      else {
        //unacceptable char, don't append to sanitizedValue and put cursor back to prior position
        if (i < this.cursorPosition) {
          this.cursorPosition--;
        }
      }
      /*
       console.log(i, "sanitizedValue = '" + sanitizedValue + "'");
       console.log(i, "Updated unsanitizedthis.cursorPosition = ", this.cursorPosition);
       */
    }
    // eliminate any leading zeros
    if (sanitizedValue.substr(0, 1) == "0") {
      sanitizedValue = sanitizedValue.substr(1);
      if (this.cursorPosition >= 1) {
        this.cursorPosition--;
      }
    } else if (sanitizedValue.substr(0, 2) == "-0") {
      sanitizedValue = "-" + sanitizedValue.substr(2);
      if (this.cursorPosition >= 2) {
        this.cursorPosition--;
      }
    }
    /*
     console.log("sanitizedValue = '" + sanitizedValue + "'");
     */
    // truncate any trailing characters in excess if 2 decimal places
    var decimalPointPosition = sanitizedValue.indexOf(".");
    fractionLength = sanitizedValue.substr(decimalPointPosition).length - 1;
    if (fractionLength > 2) {
      sanitizedValue = sanitizedValue.substr(0, decimalPointPosition + 3);
      if (this.cursorPosition > sanitizedValue.length) {
        this.cursorPosition = sanitizedValue.length;
      }
    }
    currencyAmount = parseFloat(sanitizedValue);
    let formattedCurrencyAmount = Intl.NumberFormat("en-US", {style: "decimal", maximumFractionDigits: 2}).format(currencyAmount);
    // numeral(currencyAmount).format('0,0.00');
    event.target.value = formattedCurrencyAmount;
    // adjust cursor position for any thousands separaters added by formatting
    for (i = 0; i <= this.cursorPosition; i++) {
      if (formattedCurrencyAmount.substr(i, 1) == ",") {
        this.cursorPosition++;
      }
    }
    event.target.setSelectionRange(this.cursorPosition, this.cursorPosition);
    document.getElementById("myFractionLength").innerHTML = "fractionLength = '" + fractionLength + "'";
    document.getElementById("mySanitizedValue").innerHTML = "Sanitized value = '" + sanitizedValue + "'";
    console.log("============ end of char processing");
  }
}


