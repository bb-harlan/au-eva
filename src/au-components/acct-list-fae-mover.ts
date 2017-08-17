import {customElement, inject} from 'aurelia-framework';
import {AcctListFae} from '../au-components/acct-list-fae'
import {AcctList} from '../models/acct-list'

@customElement('acct-list-fae-mover')
@inject(AcctListFae)
export class AcctListFaeMover {
  acctListFae;
  tempAcctList: AcctList;

  constructor(acctListFae: AcctListFae) {
    this.acctListFae = acctListFae;
  }
}




