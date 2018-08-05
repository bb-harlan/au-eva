import {Bchg} from './bchg';
//
export class AcctBchgList extends Array<Bchg> {
  //
  endingBalance: number = 0.00;
  needsRefresh: boolean;

    private constructor() {
        super();
    }

    static create() : AcctBchgList {
      return Object.create(AcctBchgList.prototype);
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
