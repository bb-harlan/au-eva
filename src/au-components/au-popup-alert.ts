import {customElement, inject} from 'aurelia-framework';
import {App} from 'app';
import {Bchg} from 'app-data/models/bchg';

@customElement('au-popup-alert')
@inject(App)
export class AuPopupAlert {
  /* @injected object(s) */
  app: App;


  /* element.ref properties */
  alertDialogModal: HTMLElement; //<div element.ref="alertDialogModal"
  alertDialogContent: HTMLElement; // <div element.ref = "alertDialogContent" ...

  /* other properties */
  alertTitle: string;
  marginTop: number;
  alertMsg: string;

  constructor(app: App) {
    this.app = app;
  }

  open(alertTitle, marginTop, alertMsg): void {
    this.alertTitle = alertTitle;
    this.marginTop = marginTop;
    this.alertMsg = alertMsg;
    // position alertDialogContent
/*
    this.alertDialogContent.style.marginTop = `${marginTop}px`;
    this.alertDialogContent.innerHTML = alertMsg;
*/
    // display dialog
    this.alertDialogModal.style.display = "flex";
  }

  close() {
    this.alertDialogModal.style.display = "none";
  }
}
