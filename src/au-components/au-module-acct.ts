import {Acct, Annotation} from 'app-data/models/acct';
import {customElement, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-acct')
@inject(App)
export class AuModuleAcct {
  app = null;

  Acct: typeof Acct = Acct;
  Annotation: typeof Annotation = Annotation;

  constructor(app) {
    this.app = app;
  }

  onGoFae(event) {
    this.app.selectedBchg = null;
    this.app.selectedModule = this.app.MODULE_FAE;
    this.app.gridScrollerLink.setAttribute("href", `#${this.app.selectedAcct.id}`);
    this.app.gridScrollerLink.click();
  }
  onGoUp(event) {
    // let selectedAcctId = this.app.selectedAcct.id;
    let acctList = this.app.selectedAcct.parentFaeSide.acctList.filter(listItem => listItem instanceof Acct);
    let listIndex = acctList.findIndex(acct => acct.id == this.app.selectedAcct.id);
    if (listIndex > 0) {
      this.app.selectedBchg = null;
      this.app.selectedAcct = acctList[listIndex - 1];
    }
    else {
      alert('This is the first account in the list.');
    }
  }
  onGoDown(event) {
    let acctList = this.app.selectedAcct.parentFaeSide.acctList.filter(listItem => listItem instanceof Acct);
    let listIndex = acctList.findIndex(acct => acct.id == this.app.selectedAcct.id);
    if (listIndex < acctList.length - 1) {
      this.app.selectedBchg = null;
      this.app.selectedAcct = acctList[listIndex + 1];
    }
    else {
      alert('This is the last account in the list.');
    }
  }
  showBchgDetail(event, bchg) {
    this.app.selectedTran = bchg.sourceTran;
    this.app.selectedBchg = bchg;
    this.app.selectedModule = this.app.MODULE_BCHG;
  }
  showBchgInTran(event, bchg) {
    this.app.selectedTran = bchg.sourceTran;
    this.app.selectedBchg = bchg;
    this.app.selectedModule = this.app.MODULE_TRAN;
  }

  onRowEnter(event, listItem) {
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', true);
    event.target.children[2].classList.toggle('aaRowDataHover', true);
  }
  onRowLeave(event, listItem) {
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', false);
    event.target.children[2].classList.toggle('aaRowDataHover', false);
  }
  onEdit(event) {
    if (this.app.selectedAcct.isAcct()) {
      document.getElementById('acctModule-' + this.app.selectedAcct.id).classList.toggle('aaRowDataHover', true);
    }
    this.app.isEditing = true;
  }
  onSaveEdits(event) {
    if (this.app.selectedAcct.isAcct()) {
      document.getElementById('acctModule-' + this.app.selectedAcct.id).classList.toggle('aaRowDataHover', false);
    }
    this.app.isEditing = false;
  }
  onCancelEdits(event) {
    if (this.app.selectedAcct.isAcct()) {
      document.getElementById('acctModule-' + this.app.selectedAcct.id).classList.toggle('aaRowDataHover', false);
    }
    this.app.isEditing = false;
  }
  onDelete(event) {
    alert('"Delete account" not yet implemented.');
  }
  onMenuClick(event, selectedAcct) {
    // alert(`selectedAcct.title = ${selectedAcct.title}`);
  }
  onNewTran(event, selectedAcct) {
    alert('"New tran..." not yet implemented.');
  }
}

