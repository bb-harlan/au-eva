import {customElement, inject} from 'aurelia-framework';
import {App} from "app";
import {Tran} from 'app-data/models/tran';
import {Bchg} from 'app-data/models/bchg';

@customElement('au-module-tran')
@inject(App)

export class AuModuleTran {

  /* @injected object(s) */
  app: App;

  /* element reference(s) */
  moduleRootElement: Element;
  popupTop: HTMLElement; // <div element.ref="popupTop" ...

  /* other properties */
  observerScrollIntoView = new MutationObserver(this.callbackScrollIntoView);
  observerSetInputFocus = new MutationObserver(this.callbackSetInputFocus);
  get TRAN_OP_NEW() {
    return "new";
  }
  get TRAN_OP_EDIT() {
    return "edit";
  }
  get TRAN_OP_DELETE() {
    return "deleteedit";
  }
  tranOp = "";

  constructor(app) {
    this.app = app;
  }

  observeForScrollIntoView() {
    (this.observerScrollIntoView as any).app = this.app; // cast as "any" to programmatically add property
    this.observerScrollIntoView.observe(this.moduleRootElement,
                                        { attributeFilter:[ 'style' ] }
    );
  }
  callbackScrollIntoView(mutationList, observer) {
    if (observer.app.selectedBchg) {
      let element = document.getElementById(observer.app.selectedBchg.id);
      if (element) {
        element.scrollIntoView();
      }
    }
    observer.disconnect();
  }
  observeForSetInputFocus() {
    (this.observerSetInputFocus as any).app = this.app; // cast as "any" to programmatically add property
    this.observerSetInputFocus.observe(this.moduleRootElement,
                                       {
                                         childList: true,
                                         subtree: true});
  }
  callbackSetInputFocus(mutationList, observer) {
    if (observer.app.candidateSelectedBchg) {
      let element = document.getElementById(`${observer.app.candidateSelectedBchg.id}-desc`);
      if (element) {
        (element as HTMLElement).focus();
      }
    }
    observer.disconnect();
  }
  onRowEnter(event, bchg) {
    if (bchg) {
      event.target.children[2].classList.toggle('aaRowDataHover', true);
    }
  }
  onRowLeave(event, bchg) {
    if (bchg) {
      event.target.children[2].classList.toggle('aaRowDataHover', false);
    }
  }
  tranNew(event) {
    this.app.candidateTran = new Tran(
      /*id*/ `tran${this.app.data.nextTranId}`,
      /*parentJrnl*/ this.app.data.jrnl,
      /*date*/ new Date().toISOString().slice(0, 10),
      /*intraDateSorter*/ this.app.data.nextSorter);
    this.app.viewNavMode = false;
    this.tranOp = this.TRAN_OP_NEW;
  }
  tranNewDone(event) {
    if (this.app.candidateTran.totalChangesAssets != this.app.candidateTran.totalChangesEquities) {
      alert("Transaction is out of balance.")
      return;
    }
    if (this.app.candidateTran.date == "") {
      alert("Transaction date is missing or invalid.")
      return;
    }
    this.app.candidateTran.intraDateSorter = this.app.data.nextSorter;
    this.app.candidateTran.register();
    this.app.selectedTran = this.app.candidateTran;
    this.app.data.jrnl.refresh();
    this.app.data.faeSideAssets.refresh();
    this.app.data.faeSideEquities.refresh();
    this.app.candidateTran = null;
    this.tranOp = null;
    this.app.viewNavMode = true;
    if (this.app.invokingModule) {
      this.app.selectedModule = this.app.invokingModule;
      this.app.invokingModule = null;
    }
  }
  tranNewCancel(event) {
    this.app.candidateTran = null;
    this.tranOp = null;
    this.app.viewNavMode = true;
    ;
    if (this.app.invokingModule) {
      this.app.selectedModule = this.app.invokingModule;
      this.app.invokingModule = null;
    }
  }
  tranEdit(event) {
    this.app.candidateTran = this.app.selectedTran.clone();
    if (this.app.selectedBchg) {
      this.app.candidateSelectedBchg = this.app.candidateTran.bchgList.find(element => element.id == this.app.selectedBchg.id);
    }
    this.tranOp = this.TRAN_OP_EDIT;
    this.app.viewNavMode = false;
  }
  tranEditDone(event) {
    let jrnlSortNeeded = false;
    if (this.app.candidateTran.totalChangesAssets != this.app.candidateTran.totalChangesEquities) {
      alert("Transaction is out of balance.")
      return;
    }
    if (this.app.candidateTran.date == "") {
      alert("Transaction date is missing or invalid.")
      return;
    }
    if (this.app.candidateTran.date != this.app.selectedTran.date) {
      this.app.candidateTran.intraDateSorter = this.app.data.nextSorter;
      jrnlSortNeeded = true;
    }
    this.app.candidateTran.refresh();
    this.app.selectedTran.unregister();
    this.app.candidateTran.register();
    this.app.selectedTran = this.app.candidateTran;
    if (this.app.candidateSelectedBchg) {
      this.app.selectedBchg = this.app.candidateSelectedBchg;
      this.app.selectedAcct = this.app.candidateSelectedBchg.targetAcct;
    }
    this.app.candidateTran = null;
    this.app.candidateSelectedAcct = null;
    this.app.data.jrnl.refresh();
    if (jrnlSortNeeded) {
      this.app.data.jrnl.sortTranList();
    }
    this.app.data.faeSideAssets.refresh();
    this.app.data.faeSideEquities.refresh();
    this.tranOp = null;
    this.app.viewNavMode = true;
    if (this.app.invokingModule) {
      this.app.selectedModule = this.app.invokingModule;
      this.app.invokingModule = null;
    }

  }
  tranEditCancel(event) {
    this.app.candidateTran = null;
    this.tranOp = null;
    this.app.viewNavMode = true;
    if (this.app.invokingModule) {
      this.app.selectedModule = this.app.invokingModule;
      this.app.invokingModule = null;
    }
  }
  tranDelete(event) {
    this.tranOp = this.TRAN_OP_DELETE;
    this.app.viewNavMode = false;
  }
  tranDeleteConfirmed(event) {
    if (this.app.selectedTran.parentJrnl.tranList.length == 1) {
      // selectedTran is the only tran in jrnl.tranList and
      // unregistering it will leave no tran in the jrnl.tranList
      this.app.selectedTran.unregister();
      this.app.data.faeSideAssets.refresh();
      this.app.data.faeSideEquities.refresh();
      this.app.selectedTran = null;
      this.tranOp = null;
      this.app.viewNavMode = true;
      ;
      this.app.goJrnlModule(event);
    }
    else {
      // determine which tran will replace this.app.selectedTran after
      // this.app.selectedTran is unregistered
      let nextTran;
      let indexOfSelectedTran = this.app.selectedTran.parentJrnl.tranList.findIndex(arrayElement => arrayElement.id == this.app.selectedTran.id);
      if (indexOfSelectedTran < this.app.selectedTran.parentJrnl.tranList.length - 1) {
        // selectedTran is not the last tran in jrnl.tranList so that at least one tran follows it.
        nextTran = this.app.selectedTran.parentJrnl.tranList[indexOfSelectedTran + 1];
      }
      else {
        // selectedTran is the last tran in jrnl.tranList and at least one tran precedes it.
        nextTran = this.app.selectedTran.parentJrnl.tranList[indexOfSelectedTran - 1];
      }
      this.app.selectedTran.unregister();
      this.app.data.faeSideAssets.refresh();
      this.app.data.faeSideEquities.refresh();
      this.app.selectedTran = nextTran;
      this.tranOp = null;
      this.app.viewNavMode = true;
    }
    if (this.app.invokingModule) {
      this.app.selectedModule = this.app.invokingModule;
      this.app.invokingModule = null;
    }

  }
  tranDeleteCancel(event) {
    this.app.viewNavMode = true;
    if (this.app.invokingModule) {
      this.app.selectedModule = this.app.invokingModule;
      this.app.invokingModule = null;
    }
  }

  bchgNew(bchg) {
    this.app.viewmodelPopupAcctPicker.open(bchg, this.callbackBchgNew);
  }
  callbackBchgNew(app, bchg, pickedAcct) {
    let newBchgInsertionIndex: number;
    if (bchg) {
      newBchgInsertionIndex = bchg.intraTranIndex;
    }
    else {
      newBchgInsertionIndex = this.app.candidateTran.bchgList.length;
    }
    let newBchg = new Bchg(
      /*id*/`bchg${app.data.nextBchgId}`,
      /*sourceTran*/ app.candidateTran,
      /*targetAcct*/ pickedAcct,
      /*desc*/"",
      /*amt*/0.00);
    app.candidateSelectedBchg = newBchg;
    app.candidateTran.bchgList.splice(newBchgInsertionIndex, 0, newBchg);
    // update each bchg.intraTranIndex and recalc side totals
    app.candidateTran.refresh();
    app.viewmodelTran.observeForSetInputFocus();
  }
  bchgDelete(bchg) {
    let sourceTran = bchg.sourceTran;
    sourceTran.bchgList.splice(bchg.intraTranIndex, 1);
    sourceTran.refresh()
  }
}

