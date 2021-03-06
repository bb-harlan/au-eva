import {Tran} from './tran';

export class Jrnl {

  id: string;
  tranList: Array<Tran> = [];

  constructor(id: string) {
    this.id = id;
  }
  sortTranList(): void {
    this.tranList.sort((a: Tran, b: Tran) => a.compareToInJrnl(b));
  }
  refresh(): void {
    this.sortTranList();
    for (let tran of this.tranList) {
      tran.refresh();
    }
  }
}
