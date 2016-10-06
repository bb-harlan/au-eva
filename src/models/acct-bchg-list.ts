import {Bchg} from '../models/bchg';
//
export class AcctBchgList extends Array<Bchg> {
    //
    endingBalance:number = 0.00;

    constructor() {
        super();
    }
    refresh():void {
        this.sort((a:Bchg, b:Bchg) => a.compareToInAcct(b));
        let endingBalance = 0.00;
        for (let bchg of this) {
            endingBalance += bchg.amt;
            bchg.newBalance = endingBalance;
        }
        this.endingBalance = endingBalance;
    }
}
