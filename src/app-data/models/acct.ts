import {Bchg} from './bchg';
import {FaeSide} from './fae-side';

//
export abstract class EquationSideItem {
  id: string;
  parentFaeSide: FaeSide;
  intraSideIndex: number;

  constructor(id: string, parentFaeSide: FaeSide, intraSideIndex: number) {
    this.id = id;
    this.parentFaeSide = parentFaeSide;
    this.intraSideIndex = intraSideIndex;
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
        (this.intraSideIndex > b.intraSideIndex ? 1 : -1) :
        (this.parentFaeSide.id > b.parentFaeSide.id ? 1 : -1)
    );
  }
}

//
export class Annotation extends EquationSideItem {
  //
  annoText: string;

  constructor(id: string,
              parentFaeSide: FaeSide,
              intraSideIndex: number,
              annoText: string) {
    super(id, parentFaeSide, intraSideIndex);
    this.annoText = annoText;
  }
  clone() {
    let clonedAnno = new Annotation(
      this.id,
      this.parentFaeSide,
      this.intraSideIndex,
      this.annoText)
  return clonedAnno;
  }
}

//
export class Acct extends EquationSideItem {
  //
  title: string;
  normalBalance: number;
  auxInfo: string = "";
  bchgList: Array<Bchg> = [];
  endingBalance: number = 0.00;

  constructor(id: string,
              parentFaeSide: FaeSide,
              intraSideIndex: number,
              title: string,
              normalBalance: number) {
    super(id, parentFaeSide, intraSideIndex);
    this.title = title;
    this.normalBalance = normalBalance;
  }
  sortBchgList(): void {
    this.bchgList.sort((a:Bchg, b:Bchg) => a.compareToInAcct(b));
  }
  refresh(): void {
    this.sortBchgList();
    this.endingBalance = 0.00;
    for (let bchg of this.bchgList) {
        this.endingBalance += bchg.amt;
        bchg.newBalance = this.endingBalance;
    }
  }
  clone() {
    let clonedAcct = new Acct(
      this.id,
      this.parentFaeSide,
      this.intraSideIndex,
      this.title,
      this.normalBalance);
    clonedAcct.endingBalance = this.endingBalance;
    for (let bchg of this.bchgList) {
      let clonedBchg = bchg.clone(bchg.sourceTran, clonedAcct);
      clonedAcct.bchgList.push(clonedBchg);
    }
    return clonedAcct;
  }
}
