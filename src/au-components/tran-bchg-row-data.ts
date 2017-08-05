import { customElement, bindable } from 'aurelia-framework';
import { Eva } from '../eva';
import { Bchg } from '../models/bchg';

@customElement('tran-bchg-row-data')
export class TranBchg {
    //
    eva: Eva = Eva.getInstance();
    @bindable bchg: Bchg;

    onInputCurrencyCompleted(event) {
        this.bchg.amt = event.detail.newCurrencyAmount;
        this.bchg.sourceTran.refresh();
    }

}


