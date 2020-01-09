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
    return this.sourceTran.compareTo(b.sourceTran);
  }

  compareToInTran(b: Bchg): number {
    return (
      this.intraTranIndex > b.intraTranIndex ?
        1 :
        (this.intraTranIndex < b.intraTranIndex ? -1 : 0));
  }

  clone(sourceTran: Tran): Bchg {
    let clonedBchg =  new Bchg(
      this.id,
      sourceTran,
      this.targetAcct,
      this.desc,
      this.amt);
    clonedBchg.intraTranIndex = this.intraTranIndex;
    return clonedBchg;
  }
  regToAcct() {
  }
  unregFromAcct() {
    for (let i = 0; i <= this.targetAcct.bchgList.length - 1; i++) {
      if (this.targetAcct.bchgList[i].id == this.id) {
        console.log(`Deleting from targetAcct.bchgList: bchg.Id: ${this.id}; bchg.dsec: ${this.desc};`);
        this.targetAcct.bchgList.splice(i, 1);
        break;
      }
    }
  }
  unregFromTran() {
    for (let i = 0; i <= this.sourceTran.bchgList.length - 1; i++) {
      if (this.sourceTran.bchgList[i].id == this.id) {
        console.log(`Deleting from sourceTran.bchgList:  ${this.id}; bchg.dsec: ${this.desc};`);
        this.sourceTran.bchgList.splice(i, 1);
        break;
      }
    }
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
