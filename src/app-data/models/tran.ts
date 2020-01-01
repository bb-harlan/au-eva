import {Bchg} from './bchg';
import {Jrnl} from './jrnl';
import {Data} from "../data";

export class Tran {
  id: string;
  parentJrnl: Jrnl;
  date: string;
  intraDateSorter: number;
  totalChangesAssets: number = 0.00;
  totalChangesEquities: number = 0.00;
  bchgList: Array<Bchg> = [];

  constructor(id: string,
              parentJrnl: Jrnl,
              date: string,
              intraDateSorter: number) {
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
    this.totalChangesAssets = 0.00;
    this.totalChangesEquities = 0.00;
    for (let bchg of this.bchgList) {
      switch (bchg.targetAcct.parentFaeSide.id) {
        case 'Assets':
          this.totalChangesAssets += bchg.amt;
          break;
        case 'Equities':
          this.totalChangesEquities += bchg.amt;
          break;
        default:
          throw new Error(`acct.parentFaeSide.id has invalid value: "${bchg.targetAcct.parentFaeSide.id}"`);
      }
    }
    if (this.parentJrnl) {
      // this.parentJrnl is null if this is a temporary cloned tran
      for (let bchg of this.bchgList) {
        bchg.targetAcct.refresh();
      }
    }
  }

  compareToInJrnl(b: Tran): number {
    return (
      this.date == b.date ?
        (this.intraDateSorter > b.intraDateSorter ? 1 : -1) :
        (this.date > b.date ? 1 : -1)
    )
  }


  regToAccts() {
  }

  unregFromAccts() {
  }

  clone():Tran {
    let clonedTran = new Tran(
      /*id*/ this.id,
      /*parentJrnl*/ null,
      /*date*/ this.date,
      /*intraDateSorter*/ this.intraDateSorter);
    clonedTran.totalChangesAssets = this.totalChangesAssets;
    clonedTran.totalChangesEquities = this.totalChangesEquities;
    for (let bchg of this.bchgList) {
      clonedTran.bchgList.push(bchg.clone(clonedTran));
    }
    return clonedTran;
  }
}
