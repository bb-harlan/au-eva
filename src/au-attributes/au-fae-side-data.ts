import {customAttribute, inject} from 'aurelia-framework';
import {AuFaeSide} from 'au-components/au-fae-side';
import {FaeSide} from 'app-data/models/fae-side';

@customAttribute('au-fae-side-data')
@inject(AuFaeSide)
export class AuFaeSideData {
  auFaeSide: AuFaeSide;
  value: FaeSide;

  constructor(auFaeSide: AuFaeSide) {
    this.auFaeSide = auFaeSide;
  }

  bind() {
    this.auFaeSide.faeSide = this.value;
  }
}
