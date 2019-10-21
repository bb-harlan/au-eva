import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-fae')
@inject(App)
export class AuModuleFae {
  //
  app = null;

  /*=====================================================
   *  reference(s)
   *=====================================================
   */
  viewmodelAcctMover; // <au-acct-mover view-model.ref="viewmodelAcctMover"></au-acct-mover>

  constructor(app) {
    this.app = app;
  }

  selectSide(faeSide) {
    this.app.selectedFaeSide = faeSide;
  }

  deselectSide(event) {
    this.app.selectedFaeSide = null;
  }

  attached() {
    let hyperLink: Element = document.getElementById('scrollToSelected');
    if (this.app.selectedAcct) {
      hyperLink.innerHTML = `#${this.app.selectedAcct.id}`;
      hyperLink.setAttribute("href", `#${this.app.selectedAcct.id}`);
      // hyperLink.click();
      document.getElementById('scrollToSelected').click();
    } else {
      hyperLink.innerHTML = "#";
      hyperLink.setAttribute("href", `#`);
    }
    this.app.selectedBchg = null;
    this.app.selectedTran = null;
  }
}

