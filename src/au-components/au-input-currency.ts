import {customElement, bindable, inject, observable} from 'aurelia-framework';
import {App} from 'app';
import {AuCurrencyConverter} from 'au-converters/au-currency-converter';

//
@customElement('au-input-currency')
@inject(Element, AuCurrencyConverter)
export class AuInputCurrency {
  //
  element: Element;
  inputElement: HTMLInputElement;
  auCurrencyConverter: AuCurrencyConverter;
  @bindable @observable({changeHandler: 'currencyAmountChanged'}) currencyAmount: number;
  @bindable isReadonly: boolean = false;
  @bindable isDisabled: boolean = false;
  @bindable classesString: string;

  constructor(element: Element, auCurrencyConverter: AuCurrencyConverter) {
    this.element = element;
    this.auCurrencyConverter = auCurrencyConverter;
  }

  currencyAmountChanged(newValue, oldValue) {
    console.log(`newValue: ${newValue}; oldValue" ${oldValue};`);
    let customEvent = new CustomEvent(
      'inputcurrencycompleted',
      {
        bubbles: true,
        detail: {
          newCurrencyAmount: newValue
        }
      }
    );
    this.element.dispatchEvent(customEvent);
  }

  formattedCurrencyAmount: string;
  private tempCurrencyAmount: number;
  private modifyDelete: boolean = false;
  private modifyBackspace: boolean = false;
  private targetCharForRemoval: string;

  onFocus() {
    if (this.currencyAmount) {
      this.tempCurrencyAmount = this.currencyAmount;
    }
  }

  onBlur() {
    this.currencyAmount = this.tempCurrencyAmount;
  }

  onKeydown(event) {
    console.log("onKeydown(); event.which:", event.which, "; event.keyCode:", event.keyCode, "; event.charCode:", event.charCode, "; event.key:", event.key);
    if (event.which == 8) {
      // backspace key
      if (this.inputElement.selectionStart > 0) {
        let targetCharForRemoval = this.inputElement.value.substr(this.inputElement.selectionStart - 1, 1);
        if (targetCharForRemoval == "," || targetCharForRemoval == ".") {
          this.modifyBackspace = true;
          this.targetCharForRemoval = targetCharForRemoval;
          console.log("this.targetCharForRemoval: '" + this.targetCharForRemoval, "'")
        }
      }
    } else if (event.which == 46) {
      // delete key
      let targetCharForRemoval = this.inputElement.value.substr(this.inputElement.selectionStart, 1);
      if (targetCharForRemoval == "," || targetCharForRemoval == ".") {
        this.modifyDelete = true;
        this.targetCharForRemoval = targetCharForRemoval;
        console.log("this.targetCharForRemoval: '" + this.targetCharForRemoval, "'")
      }
    } else if (event.which == 13) {
      // enter key
      this.onBlur();
    }
    return true;
  }

  onInput() {
    let inputElementValue = this.inputElement.value
    console.log("onInput() value: '" + inputElementValue + "'");
    let cursorPosition = this.inputElement.selectionStart;
    if (this.modifyBackspace) {
      if (cursorPosition > 0) {
        if (this.targetCharForRemoval == ",") {
          inputElementValue = inputElementValue.substr(0, cursorPosition - 1) + inputElementValue.substr(cursorPosition);
        } else if (this.targetCharForRemoval == ".") {
          inputElementValue = inputElementValue.substr(0, cursorPosition - 1) + "." + inputElementValue.substr(cursorPosition);
        } else {
          // logic fault
        }
        cursorPosition = cursorPosition - 1;
        this.modifyBackspace = false; // reset to default
      }
      console.log("onInput() value: '" + inputElementValue + "'");
    } else if (this.modifyDelete) {
      if (this.targetCharForRemoval == ",") {
        inputElementValue = inputElementValue.substr(0, cursorPosition) + inputElementValue.substr(cursorPosition + 1);
        cursorPosition = cursorPosition - 1;
      } else if (this.targetCharForRemoval == ".") {
        inputElementValue = inputElementValue.substr(0, cursorPosition) + "." + inputElementValue.substr(cursorPosition + 1);
        cursorPosition = cursorPosition + 1;
      } else {
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
    for (let i = 0; i < inputElementValue.length; i++) {
      char = inputElementValue.substr(i, 1);
      if (i == 0 && char == "-") {
        sanitizedValue += char;
        console.log("sanitizedValue = ", sanitizedValue, "; cursorPosition = ", cursorPosition);
      } else if (char == ".") {
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
      } else {
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
    if (sanitizedValue === "") {
      this.tempCurrencyAmount = 0;
    } else {
      this.tempCurrencyAmount = parseFloat(sanitizedValue);
    }
    this.formattedCurrencyAmount = this.auCurrencyConverter.toView(this.tempCurrencyAmount);
    // adjust cursor position for any digit group separaters added by formatting
    for (let i = 0; i <= cursorPosition; i++) {
      if (this.formattedCurrencyAmount.substr(i, 1) == ",") {
        cursorPosition++;
      }
    }
    this.inputElement.value = this.formattedCurrencyAmount;
    this.inputElement.setSelectionRange(cursorPosition, cursorPosition);
    /*
        console.log("sanitizedValue = ", sanitizedValue, "; cursorPosition = ", cursorPosition);
        console.log("============ end of char processing ==============");
    */
  }
}


