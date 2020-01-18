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
  originalCurrencyAmt: number;
  originalInputValue: string; // Esc key restores these original values
  originalSelectionStart: number;
  priorInputValue: string; // used in keyup processing to see what was prior to a Delete or Backspace key
  priorSelectionStart: number;
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
  }
  onBlur(): void {
    this.inputCompleted();
  }
  onKeydown(keyboardEvent) {
    let currentInputValue = this.inputCurrencyElement.value;
    let currentSelectionStart = this.inputCurrencyElement.selectionStart;
    let indexOfComma: number;
    let currentCurrencyAmt: number;
    console.log("\n*** HANDLING KEYDOWN EVENT ***");
    console.log(`this.priorInputValue: ${this.priorInputValue}; this.priorSelectionStart: ${this.priorSelectionStart};`);
    console.log(`currentInputValue: ${currentInputValue}; currentSelectionStart: ${currentSelectionStart};`);
    console.log(`keyboardEvent.key: ${keyboardEvent.key}; keyboardEvent.code: ${keyboardEvent.code};`);
    console.log("******************************");
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
      this.priorInputValue = currentInputValue;
      this.priorSelectionStart = currentSelectionStart;
      console.log(`this.currencyAmt: ${this.currencyAmt};`);

      this.currencyAmt = currentCurrencyAmt;
      this.inputCurrencyElement.value = currentInputValue;
      this.inputCurrencyElement.setSelectionRange(currentSelectionStart, currentSelectionStart);
    }
    else if (keyboardEvent.key == ".") {
      // to be completed
    }
    else if (keyboardEvent.key == "-") {
      // to be completed
    }
    else if (keyboardEvent.key == "Escape") {
      this.currencyAmt = this.originalCurrencyAmt;
      this.inputCurrencyElement.value = this.originalInputValue;
      this.inputCurrencyElement.setSelectionRange(this.originalSelectionStart, this.originalSelectionStart);
    }
    else if (keyboardEvent.key == "ArrowLeft" || keyboardEvent.key == "ArrowRight") {
      this.priorSelectionStart = currentSelectionStart;
    }
    else {
      // ignore any unacceptable key
      keyboardEvent.preventDefault();
      keyboardEvent.stopPropagation()
      // return false;
      /*
            this.inputCurrencyElement.value = this.priorInputValue;
            this.inputCurrencyElement.setSelectionRange(this.priorSelectionStart, this.priorSelectionStart);
      */
    }
    //prepare for the next keyboard input if any
    /*
        this.priorInputValue = currentInputValue;
        this.priorSelectionStart = currentSelectionStart;
    */
  }
  inputCompleted(): void {
    this.onCompleted({newBchgAmt: this.currencyAmt});
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
        console.log(`this.currencyAmt: ${this.currencyAmt}; currentCurrencyAmt: ${currentCurrencyAmt}`);
        this.currencyAmt = currentCurrencyAmt;
        console.log("calling this.onCompleted()");
        this.onCompleted();
      }
      return true;
    }
  */

  /*
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
        currentCurrencyAmt = 0;
      }
      else {
        currentCurrencyAmt = parseFloat(sanitizedValue);
      }
      this.formattedCurrencyAmount = this.auCurrencyConverter.toView(currentCurrencyAmt);
      // adjust cursor position for any digit group separaters added by formatting
      for (let i = 0; i <= cursorPosition; i++) {
        if (this.formattedCurrencyAmount.substr(i, 1) == ",") {
          cursorPosition++;
        }
      }
      this.inputCurrencyElement.value = this.formattedCurrencyAmount;
      this.inputCurrencyElement.setSelectionRange(cursorPosition, cursorPosition);
      /!*
          console.log("sanitizedValue = ", sanitizedValue, "; cursorPosition = ", cursorPosition);
          console.log("============ end of char processing ==============");
      *!/
    }
  */
}


