import {Acct} from '../models/acct';
import {Tran} from '../models/tran';
//
export class Bchg {
    id:string;
    targetAcct:Acct;
    sourceTran:Tran;
    intraTranSorter:number;
    desc:string;
    amt:number;
    newBalance:number;

    constructor(id:string,
                targetAcct:Acct,
                sourceTran:Tran,
                intraTranSorter:number,
                desc:string,
                amt:number) {
        this.id = id;
        this.targetAcct = targetAcct;
        this.sourceTran = sourceTran;
        this.intraTranSorter = intraTranSorter;
        this.desc = desc;
        this.amt = amt;
        this.newBalance = 0.00;
    }

    compareToInAcct(b:Bchg):number {
        return this.sourceTran.compareTo(b.sourceTran);
    }

    compareToInTran(b:Bchg):number {
        return (
            this.intraTranSorter > b.intraTranSorter ?
                1 :
                (this.intraTranSorter < b.intraTranSorter ? -1 : 0));
    }
}
