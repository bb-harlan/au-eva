import { Tran } from './tran';
//
export class TranList extends Array<Tran> {
<<<<<<< HEAD
//    
    refresh() {
        this.sort((a, b) => a.compareTo(b));
        for (let tran of this) {
            tran.refresh();
        }
=======
  private constructor() { super(); }

  static create(): TranList {
    return Object.create(TranList.prototype);
  }

  refresh(): void {
    this.sort((a, b) => a.compareTo(b));
    for (let tran of this) {
      tran.refresh();
>>>>>>> d96c0e358cd8e63d51497bb0d7fcedd8bcc544c4
    }
  }

}
