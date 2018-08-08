import {Bchg} from './bchg';
import { Eva } from '../eva';

//
export class AcctBchgList extends Array<Bchg> {
  //
  eva: Eva = Eva.getInstance();
  endingBalance: number = 0.00;
  needsRefresh: boolean;

    private constructor() {
        super();
    }

    static create() : AcctBchgList {
      // return Object.create(AcctBchgList.prototype);
      let acctBchgList = Object.create(AcctBchgList.prototype);
      // console.log(`acctBchgL.eva.SIDE_ASSETS is "${acctBchgList.eva.SIDE_EQUITIES}"`)
      // console.log(`acctBchgL.eva.SIDE_ASSETS is "${acctBchgList.eva.SIDE_ASSETS}"`)
      return acctBchgList;
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
