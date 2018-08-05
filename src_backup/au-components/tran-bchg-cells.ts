import {customElement, bindable, inject} from 'aurelia-framework';
import {Eva} from '../eva';
import {ModuleTran} from './module-tran';
import {Bchg} from '../models/bchg';
//
@customElement('au-tran-bchg-cells')
@inject(ModuleTran)
export class TranBchgCells {
    //
    eva: Eva = Eva.getInstance();
    moduleTran: ModuleTran;
    @bindable bchg: Bchg;

    constructor(moduleTran: ModuleTran) {
        this.moduleTran = moduleTran;
    }
}


