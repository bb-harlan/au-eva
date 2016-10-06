import {customElement, bindable, inject} from 'aurelia-framework';
import {ModuleTran} from './module-tran'
import {Eva} from '../eva';
import {Bchg} from '../models/bchg';

@customElement('tran-bchg')
@inject(ModuleTran)
export class TranBchgRow {
    //
    eva: Eva = Eva.getInstance();
    @bindable bchg: Bchg;
    moduleTran: ModuleTran;

    constructor(moduleTran: ModuleTran) {
        this.moduleTran = moduleTran;
    }
}


