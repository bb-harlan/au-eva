import {customAttribute, inject} from 'aurelia-framework';
import {Eva} from '../eva';
import {FaeSide} from '../au-components/fae-side';
import {AcctList} from '../models/acct-list';
//
@customAttribute('au-equation-side')
@inject(FaeSide)
export class EquationSide {

    eva:Eva = Eva.getInstance();
    faeSide:FaeSide;
    value;
    //
    constructor(faeSide: FaeSide) {
        this.faeSide = faeSide;
    }

    bind() {
        this.faeSide.equationSide = this.value;
        switch (this.faeSide.equationSide) {
            case this.eva.SIDE_ASSETS:
                this.faeSide.acctList = this.eva.assetList;
                break;
            case this.eva.SIDE_EQUITIES:
                this.faeSide.acctList = this.eva.equityList;
                break;
            default:
                this.faeSide.acctList = [] as AcctList;
        }
    }
}
