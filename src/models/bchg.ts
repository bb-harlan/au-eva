import {Acct} from './acct';
import {Tran} from './tran';

export class Bchg {
    id: string;
    sourceTran: Tran;
    targetAcct: Acct;
    intraTranSorter: number;
    desc: string;
    amt: number;
    newBalance: number = 0.00;

    constructor(id:string,
                sourceTran:Tran,
                targetAcct:Acct,
                intraTranSorter:number,
                desc:string,
                amt:number) {
        this.id = id;
        this.sourceTran = sourceTran;
        this.targetAcct = targetAcct;
        this.intraTranSorter = intraTranSorter;
        this.desc = desc;
        this.amt = amt;
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

    copy () {
      return new Bchg(
        this.id,
        this.sourceTran,
        this.targetAcct,
        this.intraTranSorter,
        this.desc,
        this.amt);
    }
}
