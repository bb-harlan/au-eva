import {customElement, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-jrnl')
@inject(App)
export class AuModuleJrnl {
  //
  app = null;

  constructor(app) {
    this.app = app;
  }

  onRowEnter(event, tran) {
    event.target.children[0].classList.toggle('aaRowOpsHover', true);
    event.target.children[2].classList.toggle('aaRowDataHover', true);
  }

  onRowLeave(event, tran) {
    event.target.children[0].classList.toggle('aaRowOpsHover', false);
    event.target.children[2].classList.toggle('aaRowDataHover', false);
  }

  onGoTran(event, tran) {
    this.app.selectedBchg = null;
    this.app.selectedTran = tran;
    this.app.selectedModule = this.app.MODULE_TRAN;
  }

  onNewTran(event) {
    alert('"New transaction" dialog not yet implemented.');
  }

  /*
   selectSide(equationSide) {
   this.app.selectedEquationSide = equationSide;
   }
   deselectSide(event) {
   this.app.selectedEquationSide = null;
   }
   */
  attached() {
    /*
     let hyperLink:Element = document.getElementById('scrollToSelected');
     if (this.app.selectedTran) {
     hyperLink.innerHTML = `#${this.app.selectedTran.id}`;
     hyperLink.setAttribute("href", `#${this.app.selectedTran.id}`);
     // hyperLink.click();
     document.getElementById('scrollToSelected').click();
     } else {
     hyperLink.innerHTML = "#";
     hyperLink.setAttribute("href", `#`);
     }
     */
    if (this.app.selectedTran) {
      document.getElementById('scrollToSelected').innerHTML = `#${this.app.selectedTran.id}`;
      document.getElementById('scrollToSelected').setAttribute("href", `#${this.app.selectedTran.id}`);
      // hyperLink.click();
      document.getElementById('scrollToSelected').click();
    } else {
      document.getElementById('scrollToSelected').innerHTML = "#";
      document.getElementById('scrollToSelected').setAttribute("href", `#`);
    }
    this.app.selectedBchg = null;
    this.app.selectedAcct = null;
    this.app.selectedFaeSide = null;
  }
}

