import { Acct, Annotation } from '../models/acct';

//
export class AcctList extends Array<Acct | Annotation> {
  equationSide: string;
  listTotal: number;
  idToFind;
  aTestProperty: string = "Hello, world.";

<<<<<<< HEAD
  constructor(equationSide: string) {
    super();
    this.equationSide = equationSide;
  }

  public aTestMethod() {
    console.log("Reached inside of aTestMethod in AcctList class.");

  }
  refresh() {
=======
  private constructor() {
    super()
  }

  static create(equationSide: string): AcctList {
    return Object.assign(Object.create(AcctList.prototype), { equationSide });
  }

  refresh(): void {
>>>>>>> d96c0e358cd8e63d51497bb0d7fcedd8bcc544c4
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
