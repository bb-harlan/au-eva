import {customElement, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-jrnl')
@inject(App)
export class AuModuleJrnl {
  //
  app = null;

  constructor(app) {
    this.app = app;
  }
  scrollSelectedRowIntoView() {
    if (this.app.selectedTran) {
      console.log(this.app.selectedTran);
      document.getElementById(this.app.selectedTran.id).scrollIntoView();
      /*
            this.gridScrollerLink.setAttribute("href", `#${this.selectedTran.id}`);
            this.gridScrollerLink.click();
      */
    }
  }
  attached() {
    console.log(`ATTACHED() - <au-module-jrnl>`);
    if (this.app.selectedTran) {
      this.app.gridScrollerLink.setAttribute("href", `#${this.app.selectedTrant.id}`);
      this.app.gridScrollerLink.click();
    }
  }

  onRowEnter(event) {
    /*row ops*/
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', true);
    /*tran date*/
    event.target.children[2].children[0].classList.toggle('aaRowDataHover', true);
    /*tran bchg rows*/
    event.target.children[2].children[1].classList.toggle('aaRowDataHover', true);
  }
  onRowLeave(event) {
    /*row ops*/
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', false);
    /*tran date*/
    event.target.children[2].children[0].classList.toggle('aaRowDataHover', false);
    /*tran bchg rows*/
    event.target.children[2].children[1].classList.toggle('aaRowDataHover', false);
  }
  onGoTran(event, tran) {
    this.app.selectedBchg = null;
    this.app.selectedTran = tran;
    this.app.selectedModule = this.app.MODULE_TRAN;
  }
  tranNew(event) {
    this.app.invokingModule = this.app.MODULE_JRNL;
    this.app.selectedModule = this.app.MODULE_TRAN;
    this.app.viewmodelModuleTran.tranNew();
  }

}

