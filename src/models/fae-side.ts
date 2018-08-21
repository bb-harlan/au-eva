import { Acct, Annotation } from './acct';

//
export class FaeSide {
  id: string;   // eva.SIDE_ID_ASSETS or eva.SIDE_ID_EQUITIES
  acctList: Array<Acct | Annotation> = [];
  listTotal: number = 0.00;
  
  constructor(id: string) {
    this.id = id;
  }

  refresh(): void {
    this.acctList.sort((a, b) => a.compareTo(b));
    this.listTotal = 0.00;
    for (let acct of this.acctList) {
      if (acct instanceof Acct) {
        this.listTotal += acct.endingBalance;
      }
    }
  }
}
