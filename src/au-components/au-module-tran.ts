import {customElement, inject} from 'aurelia-framework';
import {App} from "app";
import {Tran} from 'app-data/models/tran';
import {Bchg} from 'app-data/models/bchg';

@customElement('au-module-tran')
@inject(App)

export class AuModuleTran {
  newBchgInsertionIndex: number;
  // Maybe use the following eventually to let user control header row soff o ron
  showGridHeaderRow: boolean = true;

  // @injected item(s)
  app: App;

  /*=====================================================
   *  references
   *=====================================================
   */
  popupTop: HTMLElement; // <div element.ref="popupTop" ...

  constructor(app) {
    this.app = app;
  }
  onGoJrnl(event) {
    this.app.selectedBchg = null;
    this.app.selectedModule = this.app.MODULE_JRNL;
  }
  onGoUp(event) {
    let selectedTranId = this.app.selectedTran.id;
    let tranList = this.app.selectedTran.parentJrnl.tranList;
    let listIndex = tranList.findIndex(function (tran) {
      return tran.id === selectedTranId;
    });
    if (listIndex > 0) {
      this.app.selectedBchg = null;
      this.app.selectedTran = tranList[listIndex - 1];
    }
    else {
      alert('Reached beginning of list.');
    }
  }
  onGoDown(event) {
    let selectedTranId = this.app.selectedTran.id;
    let tranList = this.app.selectedTran.parentJrnl.tranList;
    let listIndex = tranList.findIndex(function (tran) {
      return tran.id === selectedTranId;
    });
    if (listIndex < tranList.length - 1) {
      this.app.selectedBchg = null;
      this.app.selectedTran = tranList[listIndex + 1];
    }
    else {
      alert('Reached end of list.');
    }
  }
  showBchgDetail(event, bchg) {
    this.app.selectedBchg = bchg;
    this.app.selectedAcct = bchg.targetAcct;
    this.app.selectedModule = this.app.MODULE_BCHG;
  }
  showBchgInAcct(event, bchg) {
    this.app.selectedBchg = bchg;
    this.app.selectedAcct = bchg.targetAcct;
    this.app.selectedModule = this.app.MODULE_ACCT;
  }
  onRowEnter(event, bchg) {
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', true);
    if (bchg) {
      event.target.children[2].classList.toggle('aaRowDataHover', true);
    }
  }
  onRowLeave(event, bchg) {
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', false);
    if (bchg) {
      event.target.children[2].classList.toggle('aaRowDataHover', false);
    }
  }
  pickerCallback(currentBchg, pickedAcct) {
    let newBchgInsertionIndex: number;
    if (currentBchg) {
      newBchgInsertionIndex = currentBchg.intraTranIndex;
    }
    else {
      newBchgInsertionIndex = this.app.candidateTran.bchgList.length;
    }
    let newBchg = new Bchg(
      /*id*/`bchg${this.app.data.nextBchgId}`,
      /*sourceTran*/ this.app.candidateTran,
      /*targetAcct*/ pickedAcct,
      /*desc*/"",
      /*amt*/0.00
      );
    this.app.candidateTran.bchgList.splice(newBchgInsertionIndex, 0, newBchg);
    // update each bchg.intraTranIndex and recalc side totals
    this.app.candidateTran.refresh();
  }
  bchgDelete(bchg) {
    let sourceTran = bchg.sourceTran;
    sourceTran.bchgList.splice(bchg.intraTranIndex, 1);
    sourceTran.refresh()
  }
  tranNew(event) {
    this.app.candidateTran = new Tran(
      /*id*/ `tran${this.app.data.nextTranId}`,
      /*parentJrnl*/ null,
      /*date*/ "2020/01/22",
      /*intraDateSorter*/ this.app.data.nextSorter);
  }
  tranNewDone(evenet) {
    if (this.app.candidateTran.totalChangesAssets != this.app.candidateTran.totalChangesEquities) {
      alert("Transaction is out of balance.")
      return;
    }
    this.app.candidateTran.parentJrnl = this.app.data.jrnl;
    this.app.candidateTran.register();
    this.app.selectedTran = this.app.candidateTran;
    this.app.selectedTran.parentJrnl.refresh();
    this.app.candidateTran = null;
  }
  tranNewCancel(evenet) {
    this.app.candidateTran = null;
  }
  tranEdit(event) {
    this.app.candidateTran = this.app.selectedTran.clone();
  }
  tranEditDone(event) {
    if (this.app.candidateTran.totalChangesAssets != this.app.candidateTran.totalChangesEquities) {
      alert("Transaction is out of balance.")
      return;
    }
    // this.app.candidateTran.parentJrnl = this.app.selectedTran.parentJrnl;
    this.app.selectedTran.unregister();
    this.app.candidateTran.register();
    this.app.selectedTran = this.app.candidateTran;
    this.app.data.jrnl.refresh();
    this.app.candidateTran = null;
  }
  tranEditCancel(event) {
    this.app.candidateTran = null;
  }
  tranDelete(event) {
    alert('Not yet implemented.');
  }

  onPickAcct(event, bchg) {
    alert(`bchg.id: ${bchg.id} - "Acct picker dialog" not yet implemented.`);
  }

  onMenuClick(event, bchg) {
    alert(`bchg.id: ${bchg ? bchg.id : "End-of-list"} - "Row ops menu" not yet implemented.`);
  }

  onMoverDialogOpen(event) {
    alert('"Rearrange list sequence" not yet implemented.');
  }

  onEditRows(event) {
    alert('Not yet implemented.')
  }

  attach() {
    if (this.app.selectedBchg) {
      this.app.gridScrollerLink.innerHTML = `#${this.app.selectedBchg.id}`;
      this.app.gridScrollerLink.setAttribute("href", `#${this.app.selectedBchg.id}`);
      this.app.gridScrollerLink.click();
    }
    else {
      this.app.gridScrollerLink.innerHTML = "#";
    }
  }

  acctPicked(message) {
    console.log(message);
  }
  SetBchgAmtToBalanceTran(bchg: Bchg) {
    let totalChangesAssets: number = 0.00;
    let totalChangesEquities: number = 0.00;
    // compute totalChangesAssets, totalChangesEquities for all other elements of bchgList
    for (let otherBchg of bchg.sourceTran.bchgList) {
      if (otherBchg.id == bchg.id) {
        continue; // skip this otherBchg
      }
      switch (bchg.targetAcct.parentFaeSide.id) {
        case 'Assets':
          totalChangesAssets += bchg.amt;
          break;
        case 'Equities':
          totalChangesEquities += bchg.amt;
          break;
        default:
          throw new Error(`acct.parentFaeSide.id has invalid value: ${bchg.targetAcct.parentFaeSide.id}.`);
      }
    }
    // compute bchg.amt for balancing the source tran
    switch (bchg.targetAcct.parentFaeSide.id) {
      case 'Assets':
        bchg.amt = totalChangesEquities - totalChangesAssets;
        totalChangesAssets += bchg.amt;
        break;
      case 'Equities':
        bchg.amt = totalChangesAssets - totalChangesEquities;
        totalChangesEquities += bchg.amt;
        break;
      default:
        throw new Error(`acct.parentFaeSide.id has invalid value: ${bchg.targetAcct.parentFaeSide.id}.`);
    }
    bchg.sourceTran.totalChangesAssets = totalChangesAssets;
    bchg.sourceTran.totalChangesEquities = totalChangesEquities;
  }

}

