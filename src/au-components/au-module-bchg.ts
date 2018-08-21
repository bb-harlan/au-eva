import {customElement} from 'aurelia-framework';
import {Eva} from 'eva';
//
@customElement('au-module-bchg')
export class AuModuleBchg {
  //
  eva: Eva = Eva.getInstance();

  onGoAcct(event) {
    this.eva.selectedModule = this.eva.MODULE_ACCT;
  }

  onGoTran(event) {
    this.eva.selectedModule = this.eva.MODULE_TRAN;
  }
}

