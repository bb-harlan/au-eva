import {Bchg} from './bchg';
import {Jrnl} from './jrnl';

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
  compareToInJrnl(b: Tran): number {
    return (
      this.date == b.date ?
        (this.intraDateSorter > b.intraDateSorter ? 1 : -1) :
        (this.date > b.date ? 1 : -1)
    )
  }
  sortBchgList(): void {
    this.bchgList.sort((a: Bchg, b: Bchg) => a.compareToInTran(b));
  }
  refresh(): void {
    this.totalChangesAssets = 0.00;
    this.totalChangesEquities = 0.00;
    let intraTranIndex = 0;
    for (let bchg of this.bchgList) {
      bchg.intraTranIndex = intraTranIndex++;
      if (bchg.targetAcct) {
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
    }
/*
    for (let bchg of this.bchgList) {
      bchg.targetAcct.refresh();
    }
*/
  }
  register(): void {
    this.parentJrnl.tranList.push(this);
    for (let bchg of this.bchgList) {
      bchg.registerToAcct();
      bchg.targetAcct.refresh();
    }
  }
  unregister(): void {
    for (let bchg of this.bchgList) {
      bchg.unregisterFromAcct();
      // bchg.targetAcct.refresh();
    }
    this.bchgList = [];
    let thisIndex = this.parentJrnl.tranList.findIndex((element) => element.id == this.id);
    this.parentJrnl.tranList.splice(thisIndex, 1);
  }
  clone(): Tran {
    let clonedTran = new Tran(
      /*id*/ this.id,
      /*parentJrnl*/ this.parentJrnl,
      /*date*/ this.date,
      /*intraDateSorter*/ this.intraDateSorter);
    clonedTran.totalChangesAssets = this.totalChangesAssets;
    clonedTran.totalChangesEquities = this.totalChangesEquities;
    for (let bchg of this.bchgList) {
      let clonedBchg = bchg.clone(clonedTran, bchg.targetAcct);
      clonedTran.bchgList.push(clonedBchg);
    }
    return clonedTran;
  }
}
