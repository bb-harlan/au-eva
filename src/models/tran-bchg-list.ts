import {Bchg} from '../models/bchg';
import {Eva} from '../eva';
//
export class TranBchgList extends Array<Bchg> {
    //
    eva:Eva = Eva.getInstance();
    changeToAssetBalances:number = 0.00;
    changeToEquityBalances:number = 0.00;

    constructor() {
        super();
    }

    refresh():void {
        this.sort((a:Bchg, b:Bchg) => a.compareToInTran(b));
        let changeToAssetBalances:number = 0.00;
        let changeToEquityBalances:number = 0.00;
        for (let bchg of this) {
            if (bchg.targetAcct.equationSide == this.eva.SIDE_ASSETS) {
                changeToAssetBalances += bchg.amt;
            } else if (bchg.targetAcct.equationSide == this.eva.SIDE_EQUITIES) {
                changeToEquityBalances += bchg.amt;
            } else {
                throw new Error(`acct.equationSide has invalid value: ${bchg.targetAcct.equationSide}.`);
            }
        }
        this.changeToAssetBalances = changeToAssetBalances;
        this.changeToEquityBalances = changeToEquityBalances;
    }
}
