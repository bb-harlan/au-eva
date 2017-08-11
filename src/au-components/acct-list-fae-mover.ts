import {customElement, inject} from 'aurelia-framework';
import {Eva} from '../eva';

@customElement('acct-list-fae-mover')
export class AcctListFaeMover {
  eva: Eva = Eva.getInstance();
  equationSide: string;
  sideHeading: string;
  sideAcctList;
  AcctList;
  
}




