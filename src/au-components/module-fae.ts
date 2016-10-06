import {customElement, inject} from 'aurelia-framework';
import {Eva} from '../eva';

@customElement('module-fae')
export class ModuleFae {
    //
    eva:Eva = Eva.getInstance();

    constructor() {
    }

    selectSide(equationSide) {
        this.eva.selectedEquSide = equationSide;
    }

    deselectSide(event) {
        this.eva.selectedEquSide = null;
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

