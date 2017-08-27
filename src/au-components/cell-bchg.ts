import {customElement, bindable} from 'aurelia-framework';
import {Eva} from '../eva';
import {Bchg} from '../models/bchg';
//
@customElement('au-cell-bchg')
export class CellBchg {
    //
    eva:Eva = Eva.getInstance();

    @bindable bchg:Bchg;

}

