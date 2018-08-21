import {Eva} from 'eva';
import {Tran} from './tran';
import {Bchg} from "./bchg";
import {FaeSide} from "./fae-side";

export class Jrnl {

  get eva(): Eva {
    return Eva.getInstance();
  }
  id: string;
  tranList: Array<Tran> = [];

  constructor(id: string) {
    this.id = id;
  }
  // get id() : string {
  //  return  this.eva.TRAN_JRNL_ID;
  // }
  refresh(): void {
    this.tranList.sort((a: Tran, b: Tran) => a.compareToInJrnl(b));
    for (let tran of this.tranList) {
      tran.refresh();
    }
  }
}

/*
export class Jrnl {
  eva: Eva;
  id: string;
  tranList: Array<Tran> = [];

  constructor(id: string) {
    this.eva =  Eva.getInstance();
    this.id = id;
  }
  refresh(): void {
    this.tranList.sort((a: Tran, b: Tran) => a.compareToInJrnl(b));
    for (let tran of this.tranList) {
      tran.refresh();
    }
  }
}
*/
