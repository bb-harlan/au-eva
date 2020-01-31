import {customElement, inject} from 'aurelia-framework';
import {App} from "app";
import {Tran} from 'app-data/models/tran';
import {Bchg} from 'app-data/models/bchg';

@customElement('au-module-tran')
@inject(App)

export class AuModuleTran {
  get NAV() {
    return "nav";
  }
  get NEW() {
    return "new";
  }
  get EDIT() {
    return "edit";
  }
  get DELETE() {
    return "delete";
  }
  tranView = this.NAV;

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
    if (this.app.selectedTran) {
      this.app.gridScrollerLink.setAttribute("href", `#${this.app.selectedTran.id}`);
      this.app.gridScrollerLink.click();
    }
  }
  onGoUp(event) {
    let tranList = this.app.selectedTran.parentJrnl.tranList;
    let listIndex = tranList.findIndex(tran => tran.id == this.app.selectedTran.id);
    if (listIndex > 0) {
      this.app.selectedBchg = null;
      this.app.selectedTran = tranList[listIndex - 1];
    }
    else {
      alert('this is the first transaction in the journal.');
    }
  }
  onGoDown(event) {
    let tranList = this.app.selectedTran.parentJrnl.tranList;
    let listIndex = tranList.findIndex(tran => tran.id == this.app.selectedTran.id);
    if (listIndex < tranList.length - 1) {
      this.app.selectedBchg = null;
      this.app.selectedTran = tranList[listIndex + 1];
    }
    else {
      alert('this is the last transaction in the journal.');
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
    this.app.gridScrollerLink.setAttribute("href", `#${this.app.selectedBchg.id}`);
    this.app.gridScrollerLink.click();
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
  pickAcctDone(currentBchg, pickedAcct) {
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
      /*parentJrnl*/ this.app.data.jrnl,
      /*date*/ "2020/01/22",
      /*intraDateSorter*/ this.app.data.nextSorter);
    this.tranView = this.NEW;
  }
  tranNewDone(evenet) {
    if (this.app.candidateTran.totalChangesAssets != this.app.candidateTran.totalChangesEquities) {
      alert("Transaction is out of balance.")
      return;
    }
    // this.app.candidateTran.parentJrnl = this.app.data.jrnl;
    this.app.candidateTran.register();
    this.app.selectedTran = this.app.candidateTran;
    this.app.selectedTran.parentJrnl.refresh();
    this.app.candidateTran = null;
    this.tranView = this.NAV;
  }
  tranNewCancel(evenet) {
    this.app.candidateTran = null;
    this.tranView = this.NAV;
  }
  tranEdit(event) {
    this.app.candidateTran = this.app.selectedTran.clone();
    this.tranView = this.EDIT;
  }
  tranEditDone(event) {
    if (this.app.candidateTran.totalChangesAssets != this.app.candidateTran.totalChangesEquities) {
      alert("Transaction is out of balance.")
      this.tranView = this.NAV;
      return;
    }
    // this.app.candidateTran.parentJrnl = this.app.selectedTran.parentJrnl;
    this.app.selectedTran.unregister();
    this.app.candidateTran.register();
    this.app.selectedTran = this.app.candidateTran;
    this.app.data.jrnl.refresh();
    this.app.candidateTran = null;
    this.tranView = this.NAV;
  }
  tranEditCancel(event) {
    this.app.candidateTran = null;
    this.tranView = this.NAV;
  }
  tranDelete(event) {
    this.tranView = this.DELETE;
  }
  tranDeleteConfirmed(event) {
    if (this.app.selectedTran.parentJrnl.tranList.length == 1) {
      // selectedTran is the only tran in jrnl.tranList and
      // unregistering it will leave no tran in the jrnl.tranList
      this.app.selectedTran.unregister();
      this.tranView = this.NAV;
      this.app.selectedTran = null;
      this.onGoJrnl(event);
    }
    else {
      // determine which tran will replace this.app.selectedTran after
      // this.app.selectedTran is unregistered
      let nextTran;
      let indexOfSelectedTran = this.app.selectedTran.parentJrnl.tranList.findIndex(tran => tran.id == this.app.selectedTran.id);
      if (indexOfSelectedTran < this.app.selectedTran.parentJrnl.tranList.length - 1) {
        // selectedTran is not the last tran in jrnl.tranList so that at least one tran follows it.
        nextTran = this.app.selectedTran.parentJrnl.tranList[indexOfSelectedTran + 1];
      }
      else {
        // selectedTran is the last tran in jrnl.tranList and at least one tran precedes it.
        nextTran = this.app.selectedTran.parentJrnl.tranList[indexOfSelectedTran - 1];
      }
      this.app.selectedTran.unregister();
      this.app.selectedTran = nextTran;
      this.tranView = this.NAV;
    }
  }
  tranDeleteCancel(event) {
    this.tranView = this.NAV;
  }
  onMenuClick(event, bchg) {
    alert(`bchg.id: ${bchg ? bchg.id : "End-of-list"} - "Row ops menu" not yet implemented.`);
  }
  onEditRows(event) {
    alert('Not yet implemented.')
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

