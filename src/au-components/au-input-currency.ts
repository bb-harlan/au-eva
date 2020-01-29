import {customElement, bindable, inject} from 'aurelia-framework';
import {AuCurrencyConverter} from 'au-converters/au-currency-converter';

@customElement('au-input-currency')
@inject(AuCurrencyConverter)
export class AuInputCurrency {

  @bindable classesString: string;
  @bindable isReadonly: boolean = false;
  @bindable isDisabled: boolean = false;
  @bindable currencyAmt: number = 0.00;
  @bindable onCompleted: Function; // callback function
  @bindable maxLength: number;

  /*injected objects*/
  auCurrencyConverter: AuCurrencyConverter;

  /* element.ref properties */
  inputCurrencyElement: HTMLInputElement;

  /*misc properties*/
  originalCurrencyAmt: number;
  originalInputValue: string; // Esc key restores these original values
  originalSelectionStart: number;
  interimCurrencyAmt: number;
  interimInputValue: string;
  interimSelectionStart: number;
  indexOfDecimalPoint: number;

  constructor(auCurrencyConverter: AuCurrencyConverter) {
    this.auCurrencyConverter = auCurrencyConverter;
  }
  onFocus(): void {
    console.log(`\n*** in onFocus() ***************`);
    this.originalInputValue = this.inputCurrencyElement.value;
    this.originalSelectionStart = this.inputCurrencyElement.selectionStart;
  }
  onBlur(): void {
    console.log(`\n*** in onBlur() ***************`);
    if (this.originalInputValue == this.inputCurrencyElement.value) {
      return;
    }
    this.inputCompleted();
  }
  onKeydown(keyboardEvent) {
    console.log(`\n*** keyboardEvent.type: "${keyboardEvent.type}"; ***************`);
    if (keyboardEvent.key == ".") {
      // move cursor to first digit past decimal point,
      // but don't let period pass through
      let newSelectionStart = this.inputCurrencyElement.value.indexOf(".") + 1;
      this.inputCurrencyElement.setSelectionRange(newSelectionStart, newSelectionStart);
      return false;
    }
    if (keyboardEvent.key == "-") {
      // onKeyup() will programmatcially prepend "-" to inputValue,
      // don't let "-" pass through'
      return false; // don't let it pass through
    }
    if (keyboardEvent.key == "Delete") {
      let charAtCursor = this.inputCurrencyElement.value.charAt(this.inputCurrencyElement.selectionStart);
      if (charAtCursor == "," || charAtCursor == ".") {
        // treat Delete as ArrowRight,
        // but don't let "Delete" pass through
        let newSelectionStart = this.inputCurrencyElement.selectionStart + 1;
        this.inputCurrencyElement.setSelectionRange(newSelectionStart, newSelectionStart);
        return false; // don't let "Delete" pass through
      }
      return true; // else let "Delete" pass through
    }
    if (keyboardEvent.key == "Backspace") {
      let charBeforeCursor = this.inputCurrencyElement.value.charAt(this.inputCurrencyElement.selectionStart - 1);
      if (charBeforeCursor == "," || charBeforeCursor == ".") {
        // treat "Backspace" as ArrowLeft
        let newSelectionStart = this.inputCurrencyElement.selectionStart - 1;
        this.inputCurrencyElement.setSelectionRange(newSelectionStart, newSelectionStart);
        return false; // don't let "Backspace" pass through
      }
      return true; // else let "Backspace" pass through
    }
    if (keyboardEvent.key >= "0" && keyboardEvent.key <= "9") {
      return true; // let it pass through
    }
    if (keyboardEvent.key == "Enter" ||
      keyboardEvent.key == "Tab" ||
      keyboardEvent.key == "Escape" ||
      keyboardEvent.key == "ArrowLeft" ||
      keyboardEvent.key == "ArrowRight") {
      return true; // let these pass through
    }
    // any other key is unacceptable; filter it out.
    return false; // don't let them pass through
    /*
    keyboardEvent.preventDefault();
    keyboardEvent.stopPropagation()
    */
  }
  onKeyup(keyboardEvent) {
    console.log(`\n*** keyboardEvent.type: "${keyboardEvent.type}"; ***************`);
    let offsetFromDecimalPoint: number;
    if ((keyboardEvent.key >= "0" && keyboardEvent.key <= "9") ||
        keyboardEvent.key == "-" ||
        keyboardEvent.key == "Delete" ||
        keyboardEvent.key == "Backspace") {
      this.interimInputValue = this.inputCurrencyElement.value;
      this.interimSelectionStart = this.inputCurrencyElement.selectionStart;
      if (this.interimInputValue == "" ) {
        this.interimInputValue = "0.00";
        this.interimSelectionStart = 1; // at decimal point
        this.indexOfDecimalPoint = 1;
        offsetFromDecimalPoint = 0;
      }
      else if (this.interimInputValue.indexOf(".") < 0) {
        this.interimInputValue = this.interimInputValue + ".00";
        this.indexOfDecimalPoint = this.interimInputValue.indexOf(".");
        this.interimSelectionStart = this.indexOfDecimalPoint; // at decimal point
        offsetFromDecimalPoint = 0;

      }
      else if (keyboardEvent.key == "-" && this.interimInputValue.charAt(0) != "-") {
        this.interimInputValue = "-" + this.interimInputValue; //prepend "-"
        this.interimSelectionStart++; // adjust cursor position accordingly
        this.indexOfDecimalPoint = this.interimInputValue.indexOf(".");
        offsetFromDecimalPoint = this.interimSelectionStart - this.indexOfDecimalPoint;
      }
      else {
        this.indexOfDecimalPoint = this.interimInputValue.indexOf(".");
        if (this.interimSelectionStart > this.indexOfDecimalPoint) {
          // user made some change to fractional part.
          let fractinalPart = this.interimInputValue.substring(this.indexOfDecimalPoint + 1);
          if (fractinalPart.length > 2) {
            //chop off the ending char
            this.interimInputValue = this.interimInputValue.substring(0, this.interimInputValue.length - 1);
          }
          this.interimSelectionStart = Math.min(this.interimSelectionStart, this.interimInputValue.length - 1);
          offsetFromDecimalPoint = this.interimSelectionStart - this.indexOfDecimalPoint;
        }
        else {
          // this.interimSelectionStart <= this.indexOfDecimalPoint,
          // user made some change to integer part.
          offsetFromDecimalPoint = 0;
          for (let i = this.indexOfDecimalPoint - 1; i >= this.interimSelectionStart; i--) {
            if (this.interimInputValue.charAt(i) != ",") {
              offsetFromDecimalPoint--;
            }
          }
        }
      }

      // start of conversion of inputValue to a well formed float string
      let arithmeticSign = "";
      let unsignedValue = this.interimInputValue;
      if (unsignedValue.charAt(0) == "-") {
        arithmeticSign = "-";
        unsignedValue = unsignedValue.substring(1);
      }
      //trim any leading zeros
      while (unsignedValue.charAt(0) == "0") {
        unsignedValue = unsignedValue.substring(1);
      }
      // remove any commas
      let indexOfComma: number;
      while (true) {
        indexOfComma = unsignedValue.indexOf(",");
        if (indexOfComma < 0) {
          break;
        }
        unsignedValue = unsignedValue.substring(0, indexOfComma) + unsignedValue.substring(indexOfComma + 1);
      }
      this.interimCurrencyAmt = parseFloat(arithmeticSign + unsignedValue);
      this.interimInputValue = this.auCurrencyConverter.toView(this.interimCurrencyAmt);
      this.indexOfDecimalPoint = this.interimInputValue.indexOf(".");
      if (offsetFromDecimalPoint <= 0) {
        let newIndex = this.indexOfDecimalPoint;
        let rawOffset = 0;
        for (; rawOffset != offsetFromDecimalPoint; newIndex--) {
          if (this.interimInputValue.charAt(newIndex) != ",") {
            rawOffset--;
          }
        }
        this.interimSelectionStart = newIndex;
      }
      this.inputCurrencyElement.value = this.interimInputValue;
      this.inputCurrencyElement.setSelectionRange(this.interimSelectionStart, this.interimSelectionStart);
      return true;
    }
    if (keyboardEvent.key == "Escape") {
      this.interimCurrencyAmt = this.originalCurrencyAmt;
      this.inputCurrencyElement.value = this.originalInputValue;
      this.inputCurrencyElement.setSelectionRange(this.originalSelectionStart, this.originalSelectionStart);
      return true;
    }
    if (keyboardEvent.key == "Enter") {
      if (this.originalInputValue == this.inputCurrencyElement.value) {
        return;
      }
      this.inputCompleted();
    }
    // onKeydown() allowed no other keys to change this.inputCurrencyElement.value,
    // nothing else to do at this point.
  }
  inputCompleted(): void {
    this.onCompleted({newCurrencyAmt: this.interimCurrencyAmt});
  }
}


