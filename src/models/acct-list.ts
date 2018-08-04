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
    let listTotal = 0.00;
    for (let listItem of this) {
      if (listItem instanceof Acct) {
        listItem.bchgList.refresh();
        listTotal += listItem.bchgList.endingBalance;
      }
    }
    this.listTotal = listTotal;
  }
}
