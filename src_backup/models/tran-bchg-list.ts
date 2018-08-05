import { Bchg } from '../models/bchg';
import { Eva } from '../eva';
//
export class TranBchgList extends Array<Bchg> {
  //
  eva: Eva = Eva.getInstance();
  changeToAssetBalances: number = 0.00;
  changeToEquityBalances: number = 0.00;

<<<<<<< HEAD
    constructor() {
      super();
    }

/*
    refresh() {
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
*/
  refresh() {
    this.sort((a:Bchg, b:Bchg) => a.compareToInTran(b));
    this.changeToAssetBalances = 0.00;
    this.changeToEquityBalances = 0.00;
    for (let bchg of this) {
      if (bchg.targetAcct.equationSide == this.eva.SIDE_ASSETS) {
        this.changeToAssetBalances += bchg.amt;
      } else if (bchg.targetAcct.equationSide == this.eva.SIDE_EQUITIES) {
        this.changeToEquityBalances += bchg.amt;
      } else {
        throw new Error(`acct.equationSide has invalid value: ${bchg.targetAcct.equationSide}.`);
      }
    }
=======
  private constructor() {
    super();
  }

  static create(): TranBchgList {
    return Object.create(TranBchgList.prototype);
  }

  refresh(): void {
    this.sort((a: Bchg, b: Bchg) => a.compareToInTran(b));
    let changeToAssetBalances: number = 0.00;
    let changeToEquityBalances: number = 0.00;
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
>>>>>>> d96c0e358cd8e63d51497bb0d7fcedd8bcc544c4
  }
}
