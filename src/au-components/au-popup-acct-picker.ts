import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';
import {AuModuleTran} from 'au-components/au-module-tran';

@customElement('au-popup-acct-picker')
@inject(App, AuModuleTran)
export class AuPopupAcctPicker {
  // injected stuff
  app;
  auModuleTran;
  aCallbackMethod: Function;

  // refs
  pickerDialogModal: HTMLElement; // <div element.ref="pickerDialogModal" class="aaModal">
  pickerDialogContent: HTMLElement; // <div element.ref = "pickerDialogContent" ...

  constructor(app, auModuleTran) {
    this.app = app;
    this.auModuleTran = auModuleTran;
  }

  open(event, aCallbackMethod) {
    this.aCallbackMethod = aCallbackMethod;
    this.pickerDialogModal.style.display = "block";
  }

  picked(event) {
    this.aCallbackMethod("something picked");
    this.pickerDialogModal.style.display = "none";
  }

  cancel(event) {
    this.pickerDialogModal.style.display = "none";
  }

}
