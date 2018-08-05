import {Acct, Annotation} from '../models/acct';

//
export class AcctList extends Array<Acct | Annotation> {
  equationSide: string;
  listTotal: number;
  idToFind;
  aTestProperty: string = "Hello, world.";

  constructor(equationSide: string) {
    super();
    this.equationSide = equationSide;
  }

  public aTestMethod() {
    console.log("Reached inside of aTestMethod in AcctList class.");

  }
  refresh() {
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
