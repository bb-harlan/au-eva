import {customElement} from 'aurelia-framework';
import {Eva} from '../eva';
import {AcctList} from '../models/acct-list';

@customElement('module-acct')
export class ModuleAcct {

    eva:Eva = Eva.getInstance();

    onGoFae(event) {
        this.eva.selectedBchg = null;
        this.eva.selectedModule = this.eva.MODULE_FAE;
    }

    onGoUp(event) {
        let acctList:AcctList;
        if (this.eva.selectedAcct.equationSide == this.eva.SIDE_ASSETS) {
            acctList = this.eva.assetList;
        } else if (this.eva.selectedAcct.equationSide == this.eva.SIDE_EQUITIES) {
            acctList = this.eva.equityList;
        } else {
            alert('Logic fault in onGoUp click handler');
            return;
        }
        let listIndex = acctList.findIndex(this.findIndexTest, this.eva.selectedAcct.id);
        if (listIndex > 0) {
            this.eva.selectedAcct = acctList[listIndex - 1];
            this.eva.selectedBchg = null;
        } else {
            alert('Reached beginning of list.');
        }
    }

    onGoDown(event) {
        let acctList:AcctList;
        if (this.eva.selectedAcct.equationSide == this.eva.SIDE_ASSETS) {
            acctList = this.eva.assetList;
        } else if (this.eva.selectedAcct.equationSide == this.eva.SIDE_EQUITIES) {
            acctList = this.eva.equityList;
        } else {
            alert('Logic fault in onGoUp click handler');
            return;
        }
        let listIndex = acctList.findIndex(this.findIndexTest, this.eva.selectedAcct.id);
        if (listIndex < acctList.length - 1) {
            this.eva.selectedAcct = acctList[listIndex + 1];
            this.eva.selectedBchg = null;
        }
        else {
            alert('Reached end of list.');
        }
    }
    onGoBchg(event, bchg) {
        this.eva.selectedTran = bchg.parentTran;
        this.eva.selectedBchg = bchg;
        if (this.eva.showingModuleBchg) {
            this.eva.selectedModule = this.eva.MODULE_BCHG;
        }
        else {
            this.eva.selectedModule = this.eva.MODULE_TRAN;
        }
    }
    findIndexTest(listItem) {
        return (listItem.id == this);
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
        if (this.eva.selectedAcct.isAcct) {
            document.getElementById('acctModule-' + this.eva.selectedAcct.id).classList.toggle('aaRowHover', true);
        }
        this.eva.isEditing = true;
    }

    onSaveEdits(event) {
        if (this.eva.selectedAcct.isAcct) {
            document.getElementById('acctModule-' + this.eva.selectedAcct.id).classList.toggle('aaRowHover', false);
        }
        this.eva.isEditing = false;
    }

    onCancelEdits(event) {
        if (this.eva.selectedAcct.isAcct) {
            document.getElementById('acctModule-' + this.eva.selectedAcct.id).classList.toggle('aaRowHover', false);
        }
        this.eva.isEditing = false;
    }
    onDelete (event) {
        alert('"Delete account" not yet implemented.');
    }

    onMenuClick(event, selectedAcct) {
        // alert(`selectedAcct.title = ${selectedAcct.title}`);
    }
  onNewTran(event, selectedAcct) {
    alert('"New tran..." not yet implemented.');
  }
    attached() {
        let hyperLink:Element = document.getElementById('scrollToSelected');
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

