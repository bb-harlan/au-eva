import {Bchg} from '../models/bchg';
import {Eva} from '../eva';
import {TranBchgList} from '../models/tran-bchg-list';

//
export class Tran {
    //
    eva:Eva = Eva.getInstance();
    id:string;
    date:string;
    intraDateSorter:number;
    assetsBchg:number;
    equitiesBchg:number;
    bchgList:TranBchgList = new TranBchgList();

    constructor(id:string, date:string, intraDateSorter:number) {
        this.id = id;
        this.date = date;
        this.intraDateSorter = intraDateSorter;
        this.assetsBchg = 0.00;
        this.equitiesBchg = 0.00;
    }

    compareTo(b:Tran):number {
        return (
            this.date == b.date ?
                (this.intraDateSorter > b.intraDateSorter ? 1 : -1) :
                (this.date > b.date ? 1 : -1)
        )
    }

    refresh():void {
        this.bchgList.sort((a:Bchg, b:Bchg) => a.compareToInTran(b));
        let assetsBchg:number = 0.00;
        let equitiesBchg:number = 0.00;
        for (let bchg of this.bchgList) {
            if (bchg.targetAcct.equationSide == this.eva.SIDE_ASSETS) {
                assetsBchg += bchg.amt;
            } else if (bchg.targetAcct.equationSide == this.eva.SIDE_EQUITIES) {
                equitiesBchg += bchg.amt;
            } else {
                throw new Error(`acct.equationSide has invalid value: ${bchg.targetAcct.equationSide}.`);
            }
        }
        this.assetsBchg = assetsBchg;
        this.equitiesBchg = equitiesBchg;
    }
}
