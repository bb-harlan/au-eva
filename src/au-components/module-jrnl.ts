import {customElement, inject} from 'aurelia-framework';
import {Eva} from '../eva';

@customElement('module-jrnl')
export class ModuleJrnl {
    //
    eva: Eva = Eva.getInstance();

    onRowEnter(event, tran) {
        event.target.children[0].children[0].style.visibility = 'visible';
        event.target.children[4].classList.toggle('aaRowHover', true);
    }

    onRowLeave(event, tran) {
        event.target.children[0].children[0].style.visibility = 'hidden';
        event.target.children[4].classList.toggle('aaRowHover', false);
    }
    onGoTran(event, tran) {
        this.eva.selectedBchg = null;
        this.eva.selectedTran = tran;
        this.eva.selectedModule = this.eva.MODULE_TRAN;
    }
    onNewTran(event) {
        alert('"New transaction" dialog not yet implemented.');
    }

    /*
     selectSide(equationSide) {
     this.eva.selectedEquationSide = equationSide;
     }
     deselectSide(event) {
     this.eva.selectedEquationSide = null;
     }
     */
    attached() {
        /*
         let hyperLink:Element = document.getElementById('scrollToSelected');
         if (this.eva.selectedTran) {
         hyperLink.innerHTML = `#${this.eva.selectedTran.id}`;
         hyperLink.setAttribute("href", `#${this.eva.selectedTran.id}`);
         // hyperLink.click();
         document.getElementById('scrollToSelected').click();
         } else {
         hyperLink.innerHTML = "#";
         hyperLink.setAttribute("href", `#`);
         }
         */
        if (this.eva.selectedTran) {
            document.getElementById('scrollToSelected').innerHTML = `#${this.eva.selectedTran.id}`;
            document.getElementById('scrollToSelected').setAttribute("href", `#${this.eva.selectedTran.id}`);
            // hyperLink.click();
            document.getElementById('scrollToSelected').click();
        } else {
            document.getElementById('scrollToSelected').innerHTML = "#";
            document.getElementById('scrollToSelected').setAttribute("href", `#`);
        }
        this.eva.selectedBchg = null;
        this.eva.selectedAcct = null;
        this.eva.selectedEquSide = null;
    }
}

