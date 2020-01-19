import {customElement, bindable, inject} from 'aurelia-framework';
import {AuCurrencyConverter} from 'au-converters/au-currency-converter';

@customElement('au-input-currency') @inject(AuCurrencyConverter)
export class AuInputCurrency {

  @bindable classesString: string;
  @bindable isReadonly: boolean = false;
  @bindable isDisabled: boolean = false;
  @bindable currencyAmt: number = 0.00;
  @bindable onCompleted;

  /*injected objects*/
  auCurrencyConverter: AuCurrencyConverter;

  /* element.ref properties */
  inputCurrencyElement: HTMLInputElement;

  /*misc properties*/
  maxLength = 13;
  originalCurrencyAmt: number;
  originalInputValue: string; // Esc key restores these original values
  originalSelectionStart: number;

  constructor(auCurrencyConverter: AuCurrencyConverter) {
    this.auCurrencyConverter = auCurrencyConverter;
  }
  onFocus(): void {
    this.originalInputValue = this.inputCurrencyElement.value;
    this.originalSelectionStart = this.inputCurrencyElement.selectionStart;
    this.originalCurrencyAmt = this.currencyAmt;
  }
  onBlur(): void {
    this.inputCompleted();
  }
  onKeydown(keyboardEvent) {
    console.log(`\n*** keyboardEvent.type: "${keyboardEvent.type}"; ***************`);
    console.log(keyboardEvent);
    console.log(keyboardEvent.target.value);
    if (keyboardEvent.key == ".") {
      // move cursor to first digit past decimal point,
      // but don't let period pass through
      let newSelectionStart = this.inputCurrencyElement.value.indexOf(".") + 1;
      this.inputCurrencyElement.setSelectionRange(newSelectionStart, newSelectionStart);
      return false;
    }
    if (keyboardEvent.key == "Delete") {
      let charAtCursor = this.inputCurrencyElement.value.charAt(this.inputCurrencyElement.selectionStart);
      console.log(`charAtCursor: "${charAtCursor};"`);
      if (charAtCursor == "," || charAtCursor == ".") {
        // treat Delete as ArrowRight
        let newSelectionStart = this.inputCurrencyElement.selectionStart + 1;
        this.inputCurrencyElement.setSelectionRange(newSelectionStart, newSelectionStart);
        return false;
      }
      return true;
    }
    if (keyboardEvent.key == "Backspace") {
      let charBeforeCursor = this.inputCurrencyElement.value.charAt(this.inputCurrencyElement.selectionStart - 1);
      console.log(`charBeforeCursor: "${charBeforeCursor}";`);
      if (charBeforeCursor == "," || charBeforeCursor == ".") {
        // treat Backspace as ArrowLeft
        let newSelectionStart = this.inputCurrencyElement.selectionStart - 1;
        this.inputCurrencyElement.setSelectionRange(newSelectionStart, newSelectionStart);
        return false;
      }
      return true;
    }
    if ((keyboardEvent.key >= "0" && keyboardEvent.key <= "9") ||
      (keyboardEvent.key == "-" &&
        this.inputCurrencyElement.selectionStart == 0 &&
        this.inputCurrencyElement.value.charAt(0) != '-')) {
      return true;
    }
    if (
      keyboardEvent.key == "Enter" ||
      keyboardEvent.key == "Escape" ||
      keyboardEvent.key == "ArrowLeft" ||
      keyboardEvent.key == "ArrowRight"
    ) {
      return true;
    }
    // any other key is unacceptable; filter it out.
    return false;
    /*
    keyboardEvent.preventDefault();
    keyboardEvent.stopPropagation()
    */
    return false;
  }
  onKeyup(keyboardEvent) {
    let currentInputValue = this.inputCurrencyElement.value;
    let currentSelectionStart = this.inputCurrencyElement.selectionStart;
    let indexOfDecimalPoint = this.inputCurrencyElement.value.indexOf(".");
    let indexOfComma: number;
    let currentCurrencyAmt: number;
    console.log(`\n*** keyboardEvent.type: "${keyboardEvent.type}"; ***************`);
    console.log(`currentInputValue: ${currentInputValue}; currentSelectionStart: ${currentSelectionStart};`);
    console.log(`keyboardEvent.key: ${keyboardEvent.key}; keyboardEvent.code: ${keyboardEvent.code};`);
    console.log("******************************************");
    if ((keyboardEvent.key >= "0" && keyboardEvent.key <= "9") ||
      keyboardEvent.key == "-" ||
      keyboardEvent.key == "Delete" ||
      keyboardEvent.key == "Backspace") {
      if (currentSelectionStart > indexOfDecimalPoint &&
        (keyboardEvent.key != "Delete" &&  keyboardEvent.key != "Backspace")) {
        // chop off last char
        currentInputValue = currentInputValue.substring(0, currentInputValue.length - 1);
      }
      if (currentInputValue == "0.00" || currentInputValue == "-0.00") {
        currentSelectionStart = indexOfDecimalPoint;
      }
      // remove commas from currentInputValue adjusting currentSelectionStart as necessary
      for (let i = 0; i < currentInputValue.length - 1; i++) {
        if (currentInputValue.charAt(i) == "," && currentSelectionStart > i) {
          currentSelectionStart--;
        }
      }
      console.log(`updated currentSelectionStart after anticipating removal of any commas: ${currentSelectionStart};`);

      currentInputValue = currentInputValue.replace(",", "");
      console.log(`updated currentInputValue after removal of any commas: ${currentInputValue};`);
      // convert currentInputValue (a string) to currentCurrencyAmt (a float)
      currentCurrencyAmt = parseFloat(currentInputValue);
      console.log(`parseFloat(currentInputValue): ${currentCurrencyAmt};`);
      // update currentInputValue based on new value of currentCurrencyAmt (a float)
      currentInputValue = this.auCurrencyConverter.toView(currentCurrencyAmt);
      console.log(`this.auCurrencyConverter.toView(currentCurrencyAmt): ${currentInputValue};`);
      // update currentSelectionStart as necessary to account for any commas added by formatting
      for (let i = 0; i < currentInputValue.length - 1; i++) {
        if (currentInputValue.charAt(i) == "," && currentSelectionStart >= i) {
          currentSelectionStart++;
        }
      }
      console.log(`updated currentSelectionStart: ${currentSelectionStart};`);
      console.log(`this.currencyAmt: ${this.currencyAmt};`);

      this.currencyAmt = currentCurrencyAmt;
      this.inputCurrencyElement.value = currentInputValue;
      this.inputCurrencyElement.setSelectionRange(currentSelectionStart, currentSelectionStart);
      return true;
    }
    if (keyboardEvent.key == "Escape") {
      this.currencyAmt = this.originalCurrencyAmt;
      this.inputCurrencyElement.value = this.originalInputValue;
      this.inputCurrencyElement.setSelectionRange(this.originalSelectionStart, this.originalSelectionStart);
      return true;
    }
    if (keyboardEvent.key == "Enter") {
      this.inputCompleted();
      return true;
    }
    // onKeydown() allowed no other keys to change this.inputCurrencyElement.value,
    // nothing else to do at this point.
  }
  inputCompleted(): void {
    this.onCompleted({newBchgAmt: this.currencyAmt});
  }
}


