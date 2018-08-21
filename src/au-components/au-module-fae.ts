import {customElement, bindable} from 'aurelia-framework';
import {Eva} from 'eva';

@customElement('au-module-fae')
export class AuModuleFae {
    //
    @bindable eva:Eva = Eva.getInstance();

    constructor() {
    }

    selectSide(faeSide) {
        this.eva.selectedFaeSide = faeSide;
    }

    deselectSide(event) {
        this.eva.selectedFaeSide = null;
    }

    attached() {
        let hyperLink:Element = document.getElementById('scrollToSelected');
        if (this.eva.selectedAcct) {
            hyperLink.innerHTML = `#${this.eva.selectedAcct.id}`;
            hyperLink.setAttribute("href", `#${this.eva.selectedAcct.id}`);
            // hyperLink.click();
            document.getElementById('scrollToSelected').click();
        } else {
            hyperLink.innerHTML = "#";
            hyperLink.setAttribute("href", `#`);
        }
        this.eva.selectedBchg = null;
        this.eva.selectedTran = null;
    }
}

