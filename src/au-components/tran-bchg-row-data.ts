import { customElement, bindable } from 'aurelia-framework';
import { Eva } from '../eva';
import { Bchg } from '../models/bchg';

@customElement('tran-bchg-row-data')
export class TranBchg {
    //
    eva: Eva = Eva.getInstance();
    @bindable bchg: Bchg;

    onInputCompletion(event) {
        this.bchg.amt = event.detail.newvalue;
        this.bchg.sourceTran.refresh();
    }

}


