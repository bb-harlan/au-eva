import { Eva } from 'eva';
import { Bchg } from './bchg';
import { Jrnl } from './jrnl';

export class Tran {

  eva: Eva = Eva.getInstance();
  id: string;
  parentJrnl: Jrnl;
  date: string;
  intraDateSorter: number;
  totalChangesAssets: number = 0.00;
  totalChangesEquities: number = 0.00;
  bchgList: Array<Bchg> = [];

  constructor(id: string, parentJrnl: Jrnl, date: string, intraDateSorter: number) {
    this.id = id;
    this.parentJrnl = parentJrnl;
    this.date = date;
    this.intraDateSorter = intraDateSorter;
  }

  compareTo(b: Tran): number {
    return (
      this.date == b.date ?
        (this.intraDateSorter > b.intraDateSorter ? 1 : -1) :
        (this.date > b.date ? 1 : -1)
    )
  }

  refresh() {
    this.bchgList.sort((a: Bchg, b: Bchg) => a.compareToInTran(b));
    let totalChangesAssets: number = 0.00;
    let totalChangesEquities: number = 0.00;
    let balancingBchg: Bchg = this.bchgList[0];

    // compute totalChangesAssets, totalChangesEquities for indexes 1 ... n of this.bchgList
    for (let bchg of this.bchgList.slice(1)) {
      switch (bchg.targetAcct.parentFaeSide.id) {
        case this.eva.SIDE_ID_ASSETS:
          totalChangesAssets += bchg.amt;
          bchg.targetAcct.refresh();
          break;
        case this.eva.SIDE_ID_EQUITIES:
          totalChangesEquities += bchg.amt;
          bchg.targetAcct.refresh();
          break;
        default:
          throw new Error(`acct.parentFaeSide.id has invalid value: ${bchg.targetAcct.parentFaeSide.id}.`);
      }
    }
    // compute amt for balancing bchg
    switch (balancingBchg.targetAcct.parentFaeSide.id) {
      case this.eva.SIDE_ID_ASSETS:
        balancingBchg.amt = totalChangesEquities - totalChangesAssets;
        totalChangesAssets += balancingBchg.amt;
        balancingBchg.targetAcct.refresh();
        break;
      case this.eva.SIDE_ID_EQUITIES:
        balancingBchg.amt = totalChangesAssets - totalChangesEquities;
        totalChangesEquities += balancingBchg.amt;
        balancingBchg.targetAcct.refresh();
        break;
      default:
        throw new Error(`acct.parentFaeSide.id has invalid value: ${balancingBchg.targetAcct.parentFaeSide.id}.`);
    }
    this.totalChangesAssets = totalChangesAssets;
    this.totalChangesEquities = totalChangesEquities;
  }
  compareToInJrnl(b: Tran): number {
    return (
      this.date == b.date ?
        (this.intraDateSorter > b.intraDateSorter ? 1 : -1) :
        (this.date > b.date ? 1 : -1)
    )
  }
}
