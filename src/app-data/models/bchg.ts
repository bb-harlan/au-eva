import {Data} from '../data';
import {Acct} from './acct';
import {Tran} from './tran';

export class Bchg {
  id: string;
  sourceTran: Tran;
  targetAcct: Acct;
  intraTranIndex: number;
  desc: string;
  amt: number;
  newBalance: number = 0.00;

  constructor(id: string,
              sourceTran: Tran,
              targetAcct: Acct,
              desc: string,
              amt: number) {
    this.id = id;
    this.sourceTran = sourceTran;
    this.targetAcct = targetAcct;
    this.desc = desc;
    this.amt = amt;
  }

  compareToInAcct(b: Bchg): number {
    return (
      this.sourceTran.date == b.sourceTran.date ?
        (this.sourceTran.intraDateSorter > b.sourceTran.intraDateSorter ? 1 : -1) :
        (this.sourceTran.date > b.sourceTran.date ? 1 : -1)
    )
  }
  compareToInTran(b: Bchg): number {
    return (
      this.intraTranIndex > b.intraTranIndex ?
        1 :
        (this.intraTranIndex < b.intraTranIndex ? -1 : 0));
  }
  clone(sourceTran: Tran, targetAcct: Acct): Bchg {
    let clonedBchg =  new Bchg(
      this.id,
      sourceTran,
      targetAcct,
      this.desc,
      this.amt);
    clonedBchg.intraTranIndex = this.intraTranIndex;
    clonedBchg.newBalance = this.newBalance;
    return clonedBchg;
  }
  registerToAcct() {
    this.targetAcct.bchgList.push(this);
    // this.targetAcct.parentFaeSide.refresh();
  }
  unregisterFromAcct() {
    let thisIndex = this.targetAcct.bchgList.findIndex((element) => element.id == this.id);
    this.targetAcct.bchgList.splice(thisIndex, 1);
    // this.targetAcct.parentFaeSide.refresh();
  }
  unregisterFromTran() {
    let thisIndex = this.sourceTran.bchgList.findIndex((arrayElement) => arrayElement.id == this.id);
    this.sourceTran.bchgList.splice(thisIndex, 1);
  }
  setAmtToBalanceTran() {
    let totalChangesAssets: number = 0.00;
    let totalChangesEquities: number = 0.00;

    // compute totalChangesAssets, totalChangesEquities for all other elements of bchgList
    for (let otherBchg of this.sourceTran.bchgList) {
      if (otherBchg.id == this.id) {
        continue; // skip this bchg
      }
      switch (otherBchg.targetAcct.parentFaeSide.id) {
        case 'Assets':
          totalChangesAssets += otherBchg.amt;
          break;
        case 'Equities':
          totalChangesEquities += otherBchg.amt;
          break;
        default:
          throw new Error(`acct.parentFaeSide.id has invalid value: "${this.targetAcct.parentFaeSide.id}"`);
      }
    }
    // compute this.amt for balancing the source tran
    switch (this.targetAcct.parentFaeSide.id) {
      case 'Assets':
        this.amt = totalChangesEquities - totalChangesAssets;
        totalChangesAssets += this.amt;
        break;
      case 'Equities':
        this.amt = totalChangesAssets - totalChangesEquities;
        totalChangesEquities += this.amt;
        break;
      default:
        throw new Error(`acct.parentFaeSide.id has invalid value: "${this.targetAcct.parentFaeSide.id}"`);
    }
    this.sourceTran.totalChangesAssets = totalChangesAssets;
    this.sourceTran.totalChangesEquities = totalChangesEquities;
  }
}
