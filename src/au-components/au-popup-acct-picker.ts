import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';
import {Bchg} from "../app-data/models/bchg";
import {Acct} from "../app-data/models/acct";

@customElement('au-popup-acct-picker')
@inject(App)
export class AuPopupAcctPicker {
  // injected stuff
  app;
  // refs
  pickerDialogModal: HTMLElement; // <div element.ref="pickerDialogModal" class="aaModal">
  pickerDialogContent: HTMLElement; // <div element.ref = "pickerDialogContent" ...
  // other stuff

  currentBchg: Bchg;
  pickerCallback: Function;

  constructor(app) {
    this.app = app;
  }
  open(currentBchg, pickerCallback): void {
    this.currentBchg = currentBchg;
    this.pickerCallback = pickerCallback;
    let boundingClientRect = this.app.viewmodelTran.popupTop.getBoundingClientRect();
    this.pickerDialogContent.style.marginTop = `${boundingClientRect.top}px`;
    this.pickerDialogModal.style.display = "flex";
  }
  picked(pickedAcct: Acct): void {
    this.pickerCallback(this.app, this.currentBchg, pickedAcct);
    this.pickerDialogModal.style.display = "none";
    return;
  }
  cancel(): void {
    this.pickerDialogModal.style.display = "none";
  }
}
