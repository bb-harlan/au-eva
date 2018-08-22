import {customElement} from 'aurelia-framework';
import {Eva} from 'eva';
import {Acct, Annotation} from "models/acct";
import {Tran} from "../models/tran";

@customElement('au-module-acct')
export class AuModuleAcct {

  eva: Eva = Eva.getInstance();

  onGoFae(event) {
    this.eva.selectedBchg = null;
    this.eva.selectedModule = this.eva.MODULE_FAE;
  }
  onGoUp(event) {
    let selectedAcctId = this.eva.selectedAcct.id;
    let acctList = this.eva.selectedAcct.parentFaeSide.acctList;
    let listIndex = acctList.findIndex(function (acct) {return acct.id === selectedAcctId});
    if (listIndex > 0) {
      this.eva.selectedBchg = null;
      this.eva.selectedAcct = acctList[listIndex - 1];
    } else {
      alert('Reached beginning of list.');
    }
  }
  onGoDown(event) {
    let selectedAcctId = this.eva.selectedAcct.id;
    let acctList = this.eva.selectedAcct.parentFaeSide.acctList;
    let listIndex = acctList.findIndex(function (acct) {return acct.id === selectedAcctId});
    if (listIndex < acctList.length - 1) {
      this.eva.selectedBchg = null;
      this.eva.selectedAcct = acctList[listIndex + 1];
    }
    else {
      alert('Reached end of list.');
    }
  }

  // getAcctIndex(listItem) {
  //   return (listItem.id == this.eva.selectedAcct.id); //returns index, not boolean
  // }
  // onGoUp(event) {
  //   let selectedAcctIndex = this.eva.selectedAcct.parentFaeSide.acctList.findIndex(this.getAcctIndex);
  //   if (selectedAcctIndex > 0) {
  //     this.eva.selectedAcct = this.eva.selectedAcct.parentFaeSide.acctList[selectedAcctIndex - 1];
  //     this.eva.selectedBchg = null;
  //   } else {
  //     alert('Reached beginning of list.');
  //   }
  // }
  // onGoDown(event) {
  //   let selectedAcctIndex = this.eva.selectedAcct.parentFaeSide.acctList.findIndex(this.getAcctIndex);
  //   if (selectedAcctIndex  < this.eva.selectedAcct.parentFaeSide.acctList.length - 1) {
  //     this.eva.selectedAcct = this.eva.selectedAcct.parentFaeSide.acctList[selectedAcctIndex + 1];
  //     this.eva.selectedBchg = null;
  //   } else {
  //     alert('Reached end of list.');
  //   }
  // }
  onGoBchg(event, bchg) {
    this.eva.selectedTran = bchg.sourceTran;
    this.eva.selectedBchg = bchg;
    if (this.eva.showingModuleBchg) {
      this.eva.selectedModule = this.eva.MODULE_BCHG;
    }
    else {
      this.eva.selectedModule = this.eva.MODULE_TRAN;
    }
  }
  onRowEnter(event, bchg) {
    if (!this.eva.isEditing) {
      event.target.children[3].classList.toggle('aaRowHover', true);
      event.target.children[0].children[0].style.visibility = 'visible';
    }
  }
  onRowLeave(event, bchg) {
    if (!this.eva.isEditing) {
      event.target.children[3].classList.toggle('aaRowHover', false);
      event.target.children[0].children[0].style.visibility = 'hidden';
    }
  }
  onEdit(event) {
    if (this.eva.selectedAcct.isAcct()) {
      document.getElementById('acctModule-' + this.eva.selectedAcct.id).classList.toggle('aaRowHover', true);
    }
    this.eva.isEditing = true;
  }
  onSaveEdits(event) {
    if (this.eva.selectedAcct.isAcct()) {
      document.getElementById('acctModule-' + this.eva.selectedAcct.id).classList.toggle('aaRowHover', false);
    }
    this.eva.isEditing = false;
  }
  onCancelEdits(event) {
    if (this.eva.selectedAcct.isAcct()) {
      document.getElementById('acctModule-' + this.eva.selectedAcct.id).classList.toggle('aaRowHover', false);
    }
    this.eva.isEditing = false;
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
  attached() {
    let hyperLink: Element = document.getElementById('scrollToSelected');
    if (this.eva.selectedBchg) {
      hyperLink.innerHTML = `#${this.eva.selectedBchg.id}`;
      hyperLink.setAttribute("href", `#${this.eva.selectedBchg.id}`);
      // hyperLink.click();
      document.getElementById('scrollToSelected').click();
    } else {
      hyperLink.innerHTML = "#";
    }
  }
}

