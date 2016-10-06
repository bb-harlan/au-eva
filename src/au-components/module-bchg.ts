import {customElement} from 'aurelia-framework';
import {Eva} from '../eva';
//
@customElement('module-bchg')
export class ModuleBchg {
    //
    eva:Eva = Eva.getInstance();

    onGoAcct(event) {
        this.eva.selectedModule = this.eva.MODULE_ACCT;
    }
    onGoTran(event) {
        this.eva.selectedModule = this.eva.MODULE_TRAN;
    }
}

