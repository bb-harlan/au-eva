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

  bchg: Bchg;
  callbackPicked: Function;

  constructor(app) {
    this.app = app;
  }
  open(bchg, callbackPicked): void {
    this.bchg = bchg;
    this.callbackPicked = callbackPicked;
    let boundingClientRect = this.app.viewmodelTran.popupTop.getBoundingClientRect();
    this.pickerDialogContent.style.marginTop = `${boundingClientRect.top}px`;
    this.pickerDialogModal.style.display = "flex";
  }
  picked(pickedAcct: Acct): void {
    this.callbackPicked(this.app, this.bchg, pickedAcct);
    this.pickerDialogModal.style.display = "none";
    return;
  }
  cancel(): void {
    this.pickerDialogModal.style.display = "none";
  }
}
