import { Tran } from './tran';
//
export class TranList extends Array<Tran> {
  private constructor() { super(); }

  static create(): TranList {
    return Object.create(TranList.prototype);
  }

  refresh(): void {
    this.sort((a, b) => a.compareTo(b));
    for (let tran of this) {
      tran.refresh();
    }
  }

}
