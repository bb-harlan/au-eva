import { Bchg } from '../models/bchg';
import { Eva } from '../eva';
//
export class TranBchgList extends Array<Bchg> {
  
  eva: Eva = Eva.getInstance();
  changeToAssetBalances: number = 0.00;
  changeToEquityBalances: number = 0.00;

  private constructor() {
    super();
  }

  static create(): TranBchgList {
    // return Object.create(TranBchgList.prototype);
    let tranBchgList = Object.create(TranBchgList.prototype) 
    // console.log(`tranBchgList.eva.SIDE_ASSETS is "${tranBchgList.eva.SIDE_EQUITIES}"`)
    // console.log(`tranBchgList.eva.SIDE_ASSETS is "${tranBchgList.eva.SIDE_ASSETS}"`)
    return tranBchgList;
  }

  refresh(): void {
    this.sort((a: Bchg, b: Bchg) => a.compareToInTran(b));
    this.changeToAssetBalances = 0.00;
    this.changeToEquityBalances = 0.00;
    console.log(`this.eva.SIDE_ASSETS is "${this.eva.SIDE_EQUITIES}"`)
    console.log(`this.eva.SIDE_ASSETS is "${this.eva.SIDE_ASSETS}"`)
    for (let bchg of this) {
      if (bchg.targetAcct.equationSide == this.eva.SIDE_ASSETS) {
        this.changeToAssetBalances += bchg.amt;
      } else if (bchg.targetAcct.equationSide == this.eva.SIDE_EQUITIES) {
        this.changeToEquityBalances += bchg.amt;
      } else {
        throw new Error(`acct.equationSide has invalid value: ${bchg.targetAcct.equationSide}.`);
      }
    }
  }
}
