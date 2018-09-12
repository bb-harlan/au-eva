import {customElement, bindable, inject} from 'aurelia-framework';
import {AuModuleTran} from './au-module-tran';
import {Bchg} from 'app-data/models//bchg';

@customElement('au-tran-bchg-cells')
@inject(AuModuleTran)
export class AuTranBchgCells {
    moduleTran: AuModuleTran;
    @bindable bchg: Bchg;

    constructor(moduleTran: AuModuleTran) {
        this.moduleTran = moduleTran;
    }
}


