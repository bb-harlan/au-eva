import {customAttribute, inject} from 'aurelia-framework';
import {Eva} from '../eva';
import {AcctListFae} from '../au-components/acct-list-fae';
import {AcctList} from '../models/acct-list';
//
@customAttribute('aa-equation-side')
@inject(AcctListFae)
export class EquationSide {

    eva:Eva = Eva.getInstance();
    acctListFae: AcctListFae;
    value;
    //
    constructor(acctListFae:AcctListFae) {
        this.acctListFae = acctListFae;
    }

    bind() {
        this.acctListFae.equationSide = this.value;
/*
        console.log(`this.acctListFae.equationSide = ${this.acctListFae.equationSide}`);
        console.log(`Constants.SIDE_ASSETS = ${Constants.SIDE_ASSETS}; this.eva.SIDE_EQUITIES = ${this.eva.SIDE_EQUITIES}`);
*/
        switch (this.acctListFae.equationSide) {
            case this.eva.SIDE_ASSETS:
                this.acctListFae.sideHeading = "Asset accounts";
                this.acctListFae.sideAcctList = this.eva.assetList;
                break;
            case this.eva.SIDE_EQUITIES:
                this.acctListFae.sideHeading = "Equity accounts";
                this.acctListFae.sideAcctList = this.eva.equityList;
                break;
            default:
                this.acctListFae.sideHeading = "[Logic fault]";
                this.acctListFae.sideAcctList = [] as AcctList;
        }
    }
}
