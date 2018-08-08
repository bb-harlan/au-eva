import { Acct, Annotation } from '../models/acct';

//
export class AcctList extends Array<Acct | Annotation> {
  equationSide: string;
  listTotal: number;
  idToFind;
  
  private constructor() {
    super()
  }

  static create(equationSide: string): AcctList {
    return Object.assign(Object.create(AcctList.prototype), { equationSide });
  }

  refresh(): void {
    this.sort((a, b) => a.compareTo(b));
    this.listTotal = 0.00;
    for (let acct of this) {
      if (acct instanceof Acct) {
        acct.bchgList.refresh();
        this.listTotal += acct.bchgList.endingBalance;
      }
    }
  }
}
