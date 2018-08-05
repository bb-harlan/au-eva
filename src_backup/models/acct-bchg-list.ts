import {Bchg} from './bchg';
//
export class AcctBchgList extends Array<Bchg> {
  //
  endingBalance: number = 0.00;
  needsRefresh: boolean;

<<<<<<< HEAD
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
=======
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
>>>>>>> d96c0e358cd8e63d51497bb0d7fcedd8bcc544c4
    }
  }
}
