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

  //
  currentBchg: Bchg;
  action: string;

  constructor(app) {
    this.app = app;
  }
  open(proxyForPickerPositionTop: HTMLElement, currentBchg: Bchg, action: string): void {
    this.currentBchg = currentBchg;
    this.action = action;
    let proxyPositionProps = proxyForPickerPositionTop.getBoundingClientRect();
    this.pickerDialogContent.style.top = `${proxyPositionProps.top}px`;
    this.pickerDialogModal.style.display = "block";
  }
  picked(targetAcct: Acct): void {
    switch (this.action) {
      case 'create':
        let newBchgInsertionIndex: number;
        if (this.currentBchg) {
          newBchgInsertionIndex = this.currentBchg.intraTranIndex;
        } else {
          newBchgInsertionIndex = this.app.editableTran.bchgList.length;
        }
        let newBchg = new Bchg(
          /*id */ `bchg${this.app.data.nextBchgId}`,
          /*sourceTran*/ this.app.editableTran,
          /*targetAcct*/ targetAcct,
          /*desc*/ "picked account",
          /*amt*/ 90.00);
        this.app.editableTran.bchgList.splice(newBchgInsertionIndex, 0, newBchg);
        this.app.editableTran.refresh(); // updates each bchg.intraTranIndex
        break;
      case 'update':
        this.currentBchg.targetAcct = targetAcct;
        this.app.editableTran.refresh(); // updates each bchg.intraTranIndex
        break;
      default:
        throw new Error(`action pararmeter has invalid value: "${this.action}"`);
    }
    this.pickerDialogModal.style.display = "none";
  }
  cancel(): void {
    this.pickerDialogModal.style.display = "none";
  }
}
