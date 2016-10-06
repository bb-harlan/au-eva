import {Tran} from '../models/tran';
//
export class TranList extends Array<Tran> {
//    
    refresh():void {
        this.sort((a, b) => a.compareTo(b));
        for (let tran of this) {
            tran.refresh();
        }
    }

}
