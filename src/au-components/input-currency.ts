import {customElement, bindable} from 'aurelia-framework';
import {Eva} from '../eva';

//
@customElement('au-input-currency')
export class InputCurrency {
  //
  eva: Eva = Eva.getInstance();
  // input element reference
  inputElement: HTMLInputElement;
  previousValue: string;
  sanitizedValue: string;
  @bindable currencyAmount: number;
  private tempCurrencyAmount: number
  formattedCurrencyAmount: string;

  onFocus() {
    console.log("onFocus()");
    if (this.currencyAmount) {
      this.tempCurrencyAmount = this.currencyAmount;
    }
  }
  onBlur() {
    console.log("onBlur()");
    this.currencyAmount = this.tempCurrencyAmount;
  }

  onInput() {
    console.log("onInput: ", this.inputElement.value);
    let cursorPosition = this.inputElement.selectionStart;
    let sanitizedValue = "";
    let encounteredDecimalPoint = false;
    let fractionLength = 0;
    let char: string;
    let i: number;
    console.log("sanitizedValue = '" + sanitizedValue + "'; cursorPosition = ", cursorPosition);
    for (i = 0; i < this.inputElement.value.length; i++) {
      char = this.inputElement.value.substr(i, 1);
      if (i == 0 && char == "-") {
        sanitizedValue += char;
        console.log("sanitizedValue = ", sanitizedValue, "; cursorPosition = ", cursorPosition);
      }
      else if (char == ".") {
        if (!encounteredDecimalPoint) {
          // first encounter
          encounteredDecimalPoint = true;
          sanitizedValue += char;
          console.log("sanitizedValue = ", sanitizedValue, "; cursorPosition = ", cursorPosition);
        }
      } else if (char >= "0" && char <= "9") {
        sanitizedValue += char;
        console.log("sanitizedValue = ", sanitizedValue, "; cursorPosition = ", cursorPosition);
        if (encounteredDecimalPoint) {
          fractionLength++;
        }
      }
      else {
        //unacceptable char, don't append to sanitizedValue and put cursor back to prior position
        if (i < cursorPosition) {
          cursorPosition--;
        }
      }
    }
    // eliminate any leading zeros
    if (sanitizedValue.substr(0, 1) == "0") {
      sanitizedValue = sanitizedValue.substr(1);
      console.log("sanitizedValue = ", sanitizedValue, "; cursorPosition = ", cursorPosition);
      if (cursorPosition >= 1) {
        cursorPosition--;
      }
    } else if (sanitizedValue.substr(0, 2) == "-0") {
      sanitizedValue = "-" + sanitizedValue.substr(2);
      console.log("sanitizedValue = ", sanitizedValue, "; cursorPosition = ", cursorPosition);
      if (cursorPosition >= 2) {
        cursorPosition--;
      }
    }
    // truncate any trailing characters in excess if 2 decimal places
    let decimalPointPosition = sanitizedValue.indexOf(".");
    fractionLength = sanitizedValue.substr(decimalPointPosition).length - 1;
    if (fractionLength > 2) {
      sanitizedValue = sanitizedValue.substr(0, decimalPointPosition + 3);
      console.log("sanitizedValue = ", sanitizedValue, "; cursorPosition = ", cursorPosition);
      if (cursorPosition > sanitizedValue.length) {
        cursorPosition = sanitizedValue.length;
      }
    }
    this.tempCurrencyAmount = parseFloat(sanitizedValue);
    this.formattedCurrencyAmount = this.eva.formattedCurrency(this.tempCurrencyAmount);
    // numeral(currencyAmount).format('0,0.00');
    // adjust cursor position for any digit group separaters added by formatting
    for (i = 0; i <= cursorPosition; i++) {
      if (this.formattedCurrencyAmount.substr(i, 1) == ",") {
        cursorPosition++;
      }
    }
    this.inputElement.value = this.formattedCurrencyAmount;
    this.inputElement.setSelectionRange(cursorPosition, cursorPosition);
    console.log("sanitizedValue = ", sanitizedValue, "; cursorPosition = ", cursorPosition);
    console.log("============ end of char processing ==============");
  }

  onKeyDown() {
    // console.log('onKeyDown');
  }
/*
  onKeyPress() {
    // console.log('onKeyPress');
  }
  onKeyUp() {
    // console.log('onKeyUp');
  }
*/

}


