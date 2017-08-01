import {customElement, bindable} from 'aurelia-framework';
import {Eva} from '../eva';
import {Bchg} from '../models/bchg';

@customElement('tran-bchg')
export class TranBchg {
    //
    eva: Eva = Eva.getInstance();
    @bindable bchg: Bchg;
}


