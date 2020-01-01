import {Data} from '../data';
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

  constructor(id: string,
              sourceTran: Tran,
              targetAcct: Acct,
              intraTranSorter: number,
              desc: string,
              amt: number) {
    this.id = id;
    this.sourceTran = sourceTran;
    this.targetAcct = targetAcct;
    this.intraTranSorter = intraTranSorter;
    this.desc = desc;
    this.amt = amt;
  }

  compareToInAcct(b: Bchg): number {
    return this.sourceTran.compareTo(b.sourceTran);
  }

  compareToInTran(b: Bchg): number {
    return (
      this.intraTranSorter > b.intraTranSorter ?
        1 :
        (this.intraTranSorter < b.intraTranSorter ? -1 : 0));
  }

  clone(sourceTran) {
    return new Bchg(
      this.id,
      sourceTran,
      this.targetAcct,
      this.intraTranSorter,
      this.desc,
      this.amt);
  }
  regToAcct() {
  }
  unregFromAcct() {
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
