import {Bchg} from '../models/bchg';
//
export class AcctBchgList extends Array<Bchg> {
  //
  endingBalance: number = 0.00;
  needsRefresh: boolean;

  constructor() {
    super();
  }

/*
  refresh() {
    this.sort((a:Bchg, b:Bchg) => a.compareToInAcct(b));
      let endingBalance = 0.00;
      for (let bchg of this) {
        endingBalance += bchg.amt;
        bchg.newBalance = endingBalance;
      }
      this.endingBalance = endingBalance;
    }
*/
  refresh() {
    this.sort((a:Bchg, b:Bchg) => a.compareToInAcct(b));
    this.endingBalance = 0.00;
    for (let bchg of this) {
      this.endingBalance += bchg.amt;
      bchg.newBalance = this.endingBalance;
    }
  }
}
