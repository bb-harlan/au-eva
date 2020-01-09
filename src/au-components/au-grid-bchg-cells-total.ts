import {customElement, bindable} from 'aurelia-framework';

@customElement('au-grid-bchg-cells-total')
export class AuGridBchgCellsTotal {
  @bindable faeSide: string;
  @bindable sideTotalChanges: number;
  @bindable otherSideTotalChanges: number;

  constructor() {
  }
}
