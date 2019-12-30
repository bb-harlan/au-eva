import {customElement, bindable} from 'aurelia-framework';
import {Bchg} from 'app-data/models/bchg';

@customElement('au-cell-bchg')
export class AuCellBchg {
    @bindable bchg:Bchg;
}

