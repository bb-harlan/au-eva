import {AcctBchgList} from '../models/acct-bchg-list';
//
export abstract class EquationSideItem {

    id: string;
    equationSide: string;
    intraSideSorter: number;
    
    constructor(id:string, equationSide:string, intraSideSorter:number) {
        this.id = id;
        this.equationSide = equationSide;
        this.intraSideSorter = intraSideSorter;
    }

  isAcct() {
      return (this instanceof Acct);
    }
  isAnnotation() {
      return (this instanceof Annotation);
    }
    compareTo(b: EquationSideItem):number {
        return (
            this.equationSide == b.equationSide ?
                (this.intraSideSorter > b.intraSideSorter ? 1 : -1) :
                (this.equationSide > b.equationSide ? 1 : -1)
        );
    }

}
//
export class Annotation extends EquationSideItem {
    //
    annoText: string;

    constructor(id:string, equationSide:string, intraSideSorter:number, annoText:string) {
        super(id, equationSide, intraSideSorter);
        this.annoText = annoText;
    }
}
//
export class Acct extends EquationSideItem {
    //
    title: string;
    normalBalance: number;
    bchgList: AcctBchgList = new AcctBchgList();

    constructor(id:string, equationSide: string, intraSideSorter: number, title: string, normalBalance: number) {
        super(id, equationSide, intraSideSorter);
        this.title = title;
        this.normalBalance = normalBalance;
    }
}
