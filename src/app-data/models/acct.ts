import {Bchg} from './bchg';
import {FaeSide} from './fae-side';

//
export abstract class EquationSideItem {
  id: string;
  parentFaeSide: FaeSide;
  intraSideSorter: number;

  constructor(id: string, parentFaeSide: FaeSide, intraSideSorter: number) {
    this.id = id;
    this.parentFaeSide = parentFaeSide;
    this.intraSideSorter = intraSideSorter;
  }
  isAcct(): boolean {
    return (this instanceof Acct);
  }
  isAnnotation(): boolean {
    return (this instanceof Annotation);
  }
  compareTo(b: EquationSideItem): number {
    return (
      this.parentFaeSide.id == b.parentFaeSide.id ?
        (this.intraSideSorter > b.intraSideSorter ? 1 : -1) :
        (this.parentFaeSide.id > b.parentFaeSide.id ? 1 : -1)
    );
  }
}

//
export class Annotation extends EquationSideItem {
  //
  annoText: string;

  constructor(id: string, faeSide: FaeSide, intraSideSorter: number, annoText: string) {
    super(id, faeSide, intraSideSorter);
    this.annoText = annoText;
  }
}

//
export class Acct extends EquationSideItem {
  //
  title: string;
  normalBalance: number;
  bchgList: Array<Bchg> = [];
  endingBalance: number = 0.00;

  constructor(id: string, faeSide: FaeSide, intraSideSorter: number, title: string, normalBalance: number) {
    super(id, faeSide, intraSideSorter);
    this.title = title;
    this.normalBalance = normalBalance;
  }
  refresh(): void {
    this.bchgList.sort((a:Bchg, b:Bchg) => a.compareToInAcct(b));
    this.endingBalance = 0.00;
    for (let bchg of this.bchgList) {
        this.endingBalance += bchg.amt;
        bchg.newBalance = this.endingBalance;
    }
    this.parentFaeSide.refresh();
  }
}
