import {customAttribute, inject} from 'aurelia-framework';
import {Eva} from 'eva';
import {AuFaeSide} from '../au-components/au-fae-side';
import {FaeSide} from 'models/fae-side';
// import {Acct} from 'models/acct';

@customAttribute('au-fae-side-data')
@inject(AuFaeSide)
export class AuFaeSideData {
    eva:Eva = Eva.getInstance();
    auFaeSide: AuFaeSide;
    value: FaeSide;

    constructor(auFaeSide: AuFaeSide) {
        this.auFaeSide = auFaeSide;
    }
    bind() {
      this.auFaeSide.faeSide = this.value;
    }
    // bind() {
    //     switch (this.value) {
    //         case this.eva.SIDE_ID_ASSETS:
    //             this.auFaeSide.faeSide = this.eva.faeSideAssets;
    //             break;
    //         case this.eva.SIDE_ID_EQUITIES:
    //             this.auFaeSide.faeSide = this.eva.faeSideEquities;
    //             break;
    //         default:
    //             throw new Error(`attribute au-faeSide-id specifies invalid value: ${this.value}.`);
    //     }
    // }
}
