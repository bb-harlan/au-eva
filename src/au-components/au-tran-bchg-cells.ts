import {customElement, bindable, inject} from 'aurelia-framework';
import {Eva} from 'eva';
import {AuModuleTran} from './au-module-tran';
import {Bchg} from 'models/bchg';
//
@customElement('au-tran-bchg-cells')
@inject(AuModuleTran)
export class AuTranBchgCells {
    //
    eva: Eva = Eva.getInstance();
    moduleTran: AuModuleTran;
    @bindable bchg: Bchg;

    constructor(moduleTran: AuModuleTran) {
        this.moduleTran = moduleTran;
    }
}


