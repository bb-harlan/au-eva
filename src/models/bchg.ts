import {Acct} from '../models/acct';
import {Tran} from '../models/tran';
//
export class Bchg {
    id:string;
    parentAcct:Acct;
    parentTran:Tran;
    intraTranSorter:number;
    desc:string;
    amt:number;
    newBalance:number;

    constructor(id:string,
                parentAcct:Acct,
                parentTran:Tran,
                intraTranSorter:number,
                desc:string,
                amt:number) {
        this.id = id;
        this.parentAcct = parentAcct;
        this.parentTran = parentTran;
        this.intraTranSorter = intraTranSorter;
        this.desc = desc;
        this.amt = amt;
        this.newBalance = 0.00;
    }

    compareToInAcct(b:Bchg):number {
        return this.parentTran.compareTo(b.parentTran);
    }

    compareToInTran(b:Bchg):number {
        return (
            this.intraTranSorter > b.intraTranSorter ?
                1 :
                (this.intraTranSorter < b.intraTranSorter ? -1 : 0));
    }
}
