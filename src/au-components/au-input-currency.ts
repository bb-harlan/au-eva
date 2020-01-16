import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';
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
  originalInputValue: string; // Esc key restores these original values
  originalSelectionStart: number;
  currentInputValue: string; // values used in processing each keyup event
  currentSelectionStart: number;
  priorInputValue: string; // values used in keyup processing to see what was prior to a Delete or Backspace key
  priorSelectionStart: number;
  formattedCurrencyAmount: string;
  tempCurrencyAmount: number;
  modifyDelete: boolean = false;
  modifyBackspace: boolean = false;
  targetCharForRemoval: string;

  constructor(auCurrencyConverter: AuCurrencyConverter) {
    this.auCurrencyConverter = auCurrencyConverter;
  }
  onFocus(): void {
    this.originalInputValue = this.inputCurrencyElement.value;
    this.originalSelectionStart = this.inputCurrencyElement.selectionStart;
    this.priorInputValue = this.inputCurrencyElement.value;
    this.priorSelectionStart = this.inputCurrencyElement.selectionStart;
    this.tempCurrencyAmount = this.currencyAmt;
  }
  onBlur(): void {
    this.inputCompleted();
  }
  onKeyup(keyboardEvent) {
    console.log(`this.priorInputValue: ${this.priorInputValue}; this.priorSelectionStart: ${this.priorSelectionStart};`);
    console.log(`keyboardEvent.key: ${keyboardEvent.key}; keyboardEvent.code: ${keyboardEvent.code};`);
    this.currentInputValue = this.inputCurrencyElement.value;
    this.currentSelectionStart = this.inputCurrencyElement.selectionStart;
    console.log(`this.currentInputValue: ${this.currentInputValue}; this.currentSelectionStart: ${this.currentSelectionStart};`);
    if (keyboardEvent.key == "Backspace") {
      if (this.inputCurrencyElement.selectionStart > 0) {
        let targetCharForRemoval = this.inputCurrencyElement.value.substr(this.inputCurrencyElement.selectionStart - 1, 1);
        if (targetCharForRemoval == "," || targetCharForRemoval == ".") {
          this.modifyBackspace = true;
          this.targetCharForRemoval = targetCharForRemoval;
          console.log("this.targetCharForRemoval: '" + this.targetCharForRemoval, "'")
        }
      }
    }
    else if (keyboardEvent.key == "Delete") {
      let targetCharForRemoval = this.inputCurrencyElement.value.substr(this.inputCurrencyElement.selectionStart, 1);
      if (targetCharForRemoval == "," || targetCharForRemoval == ".") {
        this.modifyDelete = true;
        this.targetCharForRemoval = targetCharForRemoval;
        console.log("this.targetCharForRemoval: '" + this.targetCharForRemoval, "'")
      }
    }
    else if (keyboardEvent.key == "Enter") {
      this.inputCompleted();
    }
    else if (keyboardEvent.key >= "0" && keyboardEvent.key <= "9") {
      let inputValue: string = this.inputCurrencyElement.value;
      let inputCursorPosition: number = this.inputCurrencyElement.selectionStart;
      let dataCursorPosition: number = inputCursorPosition;
      // remove commas from inputValue adjusting dataCursorPosition as necessary
      let commaPosition = inputValue.indexOf(",");
      while (commaPosition >= 0) {
        console.log(`inputValue: "${inputValue}"; commaPosition: ${commaPosition}; dataCursorPosition: ${dataCursorPosition};`);
        inputValue = inputValue.substring(0, commaPosition) + inputValue.substring(commaPosition + 1);
        if (dataCursorPosition > commaPosition) {
          dataCursorPosition--;
        }
        commaPosition = inputValue.indexOf(",", commaPosition + 1);
      }
      // convert inputValue (a string) to tempCurrencyAmount (a float)
      this.tempCurrencyAmount = parseFloat(inputValue); // (binding will cause view to be updated)
      // adjust dataCursorPosition as necessary to account for any commas added by formatting
      let tempFormattedAmount = this.auCurrencyConverter.toView(this.tempCurrencyAmount);
      console.log(`this.tempCurrencyAmount: ${this.tempCurrencyAmount}; tempFormattedAmount: ${tempFormattedAmount};`);
      commaPosition = tempFormattedAmount.indexOf(",");
      console.log(`commaPosition: ${commaPosition}; dataCursorPosition: ${dataCursorPosition};`);
      while (commaPosition >= 0) {
        console.log(`inputValue: "${inputValue}"; commaPosition: ${commaPosition}; dataCursorPosition: ${dataCursorPosition};`);
        if (dataCursorPosition >= commaPosition) {
          dataCursorPosition++;
        }
        console.log(`commaPosition: ${commaPosition}; dataCursorPosition: ${dataCursorPosition};`);
        commaPosition = tempFormattedAmount.indexOf(",", commaPosition + 1);
      }
      this.inputCurrencyElement.value = tempFormattedAmount;
      this.inputCurrencyElement.setSelectionRange(dataCursorPosition, dataCursorPosition);
    }
    else if (keyboardEvent.key == ".") {
      // to be completed
    }
    else if (keyboardEvent.key == "-") {
      // to be completed
    }
    else if (keyboardEvent.key == "Escape") {
      this.inputCurrencyElement.value = this.originalInputValue;
      this.inputCurrencyElement.setSelectionRange(this.originalSelectionStart, this.originalSelectionStart);
    }
    else if (keyboardEvent.key == "ArrowLeft" || keyboardEvent.key == "ArrowRight") {
      this.priorSelectionStart = this.currentSelectionStart;
    }
    else {
      // undo any unacceptable key
      this.inputCurrencyElement.value = this.priorInputValue;
      this.inputCurrencyElement.setSelectionRange(this.priorSelectionStart, this.priorSelectionStart);
    }
    //prepare for the next keyboard input if any
/*
    this.priorInputValue = this.currentInputValue;
    this.priorSelectionStart = this.currentSelectionStart;
*/
  }
  inputCompleted(): void {
    console.log(`this.tempCurrencyAmount: ${this.tempCurrencyAmount}; this.currencyAmt: ${this.currencyAmt};`);
    this.currencyAmt = this.tempCurrencyAmount;
    console.log(`this.tempCurrencyAmount: ${this.tempCurrencyAmount}; this.currencyAmt: ${this.currencyAmt};`);
    this.onCompleted({newBchgAmt: this.tempCurrencyAmount});
  };

  /*
      following "if else if" stuff replaced by the above swtich statement
      if (keyboardEvent.key == "Backspace") {
        if (this.inputElement.selectionStart > 0) {
          let targetCharForRemoval = this.inputElement.value.substr(this.inputElement.selectionStart - 1, 1);
          if (targetCharForRemoval == "," || targetCharForRemoval == ".") {
            this.modifyBackspace = true;
            this.targetCharForRemoval = targetCharForRemoval;
            console.log("this.targetCharForRemoval: '" + this.targetCharForRemoval, "'")
          }
        }
      } else if (keyboardEvent.key == "Delete") {
        let targetCharForRemoval = this.inputElement.value.substr(this.inputElement.selectionStart, 1);
        if (targetCharForRemoval == "," || targetCharForRemoval == ".") {
          this.modifyDelete = true;
          this.targetCharForRemoval = targetCharForRemoval;
          console.log("this.targetCharForRemoval: '" + this.targetCharForRemoval, "'")
        }
      } else if keyboardEvent.key == "Enter") {
        console.log(`this.currencyAmt: ${this.currencyAmt}; this.tempCurrencyAmount: ${this.tempCurrencyAmount}`);
        this.currencyAmt = this.tempCurrencyAmount;
        console.log("calling this.onCompleted()");
        this.onCompleted();
      }
      return true;
    }
  */
  onInput() {
    let inputCurrencyElementValue = this.inputCurrencyElement.value;
    console.log(`this.inputCurrencyElement.value: ${this.inputCurrencyElement.value};`);
    let cursorPosition = this.inputCurrencyElement.selectionStart;
    if (this.modifyBackspace) {
      if (cursorPosition > 0) {
        if (this.targetCharForRemoval == ",") {
          inputCurrencyElementValue = inputCurrencyElementValue.substr(0, cursorPosition - 1) + inputCurrencyElementValue.substr(cursorPosition);
        }
        else if (this.targetCharForRemoval == ".") {
          inputCurrencyElementValue = inputCurrencyElementValue.substr(0, cursorPosition - 1) + "." + inputCurrencyElementValue.substr(cursorPosition);
        }
        else {
          // logic fault
        }
        cursorPosition = cursorPosition - 1;
        this.modifyBackspace = false; // reset to default
      }
    }
    else if (this.modifyDelete) {
      if (this.targetCharForRemoval == ",") {
        inputCurrencyElementValue = inputCurrencyElementValue.substr(0, cursorPosition) + inputCurrencyElementValue.substr(cursorPosition + 1);
        cursorPosition = cursorPosition - 1;
      }
      else if (this.targetCharForRemoval == ".") {
        inputCurrencyElementValue = inputCurrencyElementValue.substr(0, cursorPosition) + "." + inputCurrencyElementValue.substr(cursorPosition + 1);
        cursorPosition = cursorPosition + 1;
      }
      else {
        // logic fault
      }
      this.modifyDelete = false; // reset to default
    }
    let sanitizedValue = "";
    let encounteredDecimalPoint = false;
    let fractionLength = 0;
    let char: string;
    let i: number;
    console.log("sanitizedValue = '" + sanitizedValue + "'; cursorPosition = ", cursorPosition);
    for (let i = 0; i < inputCurrencyElementValue.length; i++) {
      char = inputCurrencyElementValue.substr(i, 1);
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
      }
      else if (char >= "0" && char <= "9") {
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
    }
    else if (sanitizedValue.substr(0, 2) == "-0") {
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
    if (sanitizedValue === "") {
      this.tempCurrencyAmount = 0;
    }
    else {
      this.tempCurrencyAmount = parseFloat(sanitizedValue);
    }
    this.formattedCurrencyAmount = this.auCurrencyConverter.toView(this.tempCurrencyAmount);
    // adjust cursor position for any digit group separaters added by formatting
    for (let i = 0; i <= cursorPosition; i++) {
      if (this.formattedCurrencyAmount.substr(i, 1) == ",") {
        cursorPosition++;
      }
    }
    this.inputCurrencyElement.value = this.formattedCurrencyAmount;
    this.inputCurrencyElement.setSelectionRange(cursorPosition, cursorPosition);
    /*
        console.log("sanitizedValue = ", sanitizedValue, "; cursorPosition = ", cursorPosition);
        console.log("============ end of char processing ==============");
    */
  }
}


