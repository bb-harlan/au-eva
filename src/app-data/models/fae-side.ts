import { Acct, Annotation } from './acct';

export class FaeSide {
  id: string;   // 'Assets' or 'Equities'
  acctList: Array<Acct | Annotation> = [];
  listTotal: number = 0.00;
  
  constructor(id: string) {
    this.id = id;
  }
  sortAcctList(): void {
    this.acctList.sort((a, b) => a.compareTo(b));
  }
  refresh(): void {
    this.sortAcctList();
    this.listTotal = 0.00;
    for (let acct of this.acctList) {
      if (acct instanceof Acct) {
        this.listTotal += acct.endingBalance;
      }
    }
  }
  clone(): FaeSide {
    let clonedFaeSide = new FaeSide(
      /*id*/ this.id);
    clonedFaeSide.listTotal = this.listTotal;
    for (let listItem of this.acctList) {
      let clonedListItem = listItem.clone();
      clonedFaeSide.acctList.push(clonedListItem);
    }
    return clonedFaeSide;
  }
}
