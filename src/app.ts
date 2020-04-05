import {TaskQueue, inject} from 'aurelia-framework';
import {Data} from "app-data/data";
import {Acct, Annotation} from 'app-data/models/acct';
import {FaeSide} from 'app-data/models/fae-side';
import {Tran} from 'app-data/models/tran';
import {Bchg} from 'app-data/models/bchg';
import {Jrnl} from 'app-data/models/jrnl';

@inject(TaskQueue)
export class App {
  taskQueue: TaskQueue;

  constructor(TaskQueue) {
    this.taskQueue = TaskQueue;
  }

  get MODULE_FAE() {
    return "fae";
  }
  get MODULE_ACCT() {
    return "acct";
  }
  get MODULE_BCHG() {
    return "bchg";
  }
  get MODULE_TRAN() {
    return "tran";
  }
  get MODULE_JRNL() {
    return "jrnl";
  }
  get ROW_SELECTED_CHAR() {
    // return String.fromCharCode(0xf111); // FontAwesome fa-circle
    return "&#xf111;" // FontAwesome fa-circle
  }
  get NAV_RIGHT_CHAR() {
    return String.fromCharCode(0xf054); // FontAwesome
  }
  // remove following when I have finished abandoning it
  get MODULE_MODE_NAVIGATING() {
    return "navigating";
  }
  // remove following when I have finished abandoning it
  get MODULE_MODE_EDITING() {
    return "editing";
  }
  get MODULE_MODE_MOVING_ROWS() {
    return "moving rows";
  }

  /* element.ref properties */
  gridScrollerLink: HTMLElement; //<a> tag used to scroll grid to row having specifid Id
  viewmodelModuleFAE; // <au-module-fae view-model.ref="viewmodelModuleFAE"></au-module-fae>
  viewmodelModuleAcct; // <au-module-acct view-model.ref="viewmodelModuleAcct"></au-module-fae>
  viewmodelModuleBchg; // <au-module-bchg view-model.ref="viewmodelModuleBchg"></au-module-fae>
  viewmodelModuleTran; // <au-module-tran view-model.ref="viewmodelModuleTran"></au-module-fae>
  viewmodelModuleJrnl; // <au-module-jrnl view-model.ref="viewmodelModuleJrnl</au-module-fae>

  viewmodelPopupAcctMover; // <au-popup-acct-mover view-model.ref="viewmodelPopupAcctMover">
  viewmodelPopupAcctPicker; // <au-popup-acct-picker view-model.ref="viewmodelPopupAcctPicker">
  viewmodelPopupBchgMover; // <au-popup-bchg-mover view-model.ref="viewmodelPopupBchgMover">

  /*=====================================================
   *  UI state/control
   *=====================================================
   */
  selectedModule = this.MODULE_FAE;
  invokingModule = null;
  // remove following when I have finished abandoning it
  selectedModuleMode = this.MODULE_MODE_NAVIGATING;

  selectedFaeSide: FaeSide = null;
  selectedAcct: Acct = null;
  selectedBchg: Bchg = null;
  selectedTran: Tran = null;
  candidateTran: Tran = null;
  /*
  * About candidateTran
  * -------------------
  *
  */
  isEditing = false;

  /*=====================================================
   *  Reference to  accounting entity's data
   *=====================================================
   */
  data = new Data(
    1,
    1,
    1,
    1,
    "");

  bind() {
    // this.data.generateEmptyData();
    // this.data.generateTestData();
    this.data.generateExample1Data();

    /*
    * *************************
    * *** Experimental code ***
    * *************************
    */
    console.log("***** stringifiedData *****");
    let stringifiedData = JSON.stringify(this.data, this.replacer);
    console.log(stringifiedData);

    console.log("***** parsedData *****");
    let parsedData = JSON.parse(stringifiedData);
    console.log(parsedData);
    let revivedData = new Data(
      parsedData._nextSorter,
      parsedData._nextAcctId,
      parsedData._nextTranId,
      parsedData._nextBchgId,
      parsedData.entityName);
    console.log("***** revivedData *****");
    let revivedFaeSide;
    let revivedListItem;
    let revivedTran;
    let revivedBchg;
    let allAccts;
    for (let parsedFaeSide of [parsedData.faeSideAssets, parsedData.faeSideEquities]) {
      revivedFaeSide = (parsedFaeSide.id == 'Assets' ? revivedData.faeSideAssets : revivedData.faeSideEquities);
      for (let listItem of parsedFaeSide.acctList) {
        if (listItem.id.substring(0, 4) == "anno") {
          revivedListItem = new Annotation(
            /*annoId*/ listItem.id,
            /*faeSide*/ revivedFaeSide,
            /*intraSideSorter*/ listItem.intraSideSorter,
            /*annoText*/ listItem.annoText);
        }
        else {
          revivedListItem = new Acct(
            /*annoId*/ listItem.id,
            /*faeSide*/ revivedFaeSide,
            /*intraSideSorter*/ listItem.intraSideSorter,
            /*annoText*/ listItem.title,
            /*normalBalance*/ listItem.normalBalance);
          revivedListItem.endingBalance = listItem.endingBalance;
        }
        revivedFaeSide.acctList.push(revivedListItem);
      }
      allAccts = revivedData.faeSideAssets.acctList.concat(revivedData.faeSideEquities.acctList);
      revivedFaeSide.refresh();
    }
    for (let tran of parsedData.jrnl.tranList) {
      revivedTran = new Tran(
        /*id*/ tran.id,
        /*parentJrnl*/ revivedData.jrnl,
        /*date*/ tran.date,
        /*intraDateSorter*/ tran.intraDateSorter);
      for (let bchg of tran.bchgList) {
        revivedBchg = new Bchg(
          /*id*/ bchg.id,
          /*sourceTran*/ revivedTran,
          /*targetAcct*/ allAccts.find(element => element.id == bchg.targetAcct),
          /*desc*/ bchg.desc,
          /*amt*/ bchg.amt);
        revivedTran.bchgList.push(revivedBchg);
      }
      revivedTran.register();
    }
    revivedData.jrnl.refresh();
    console.log(revivedData);
    this.data = null;
    alert("Wait");
    this.data = revivedData;
  }
  replacer(key, value) {
    if (key == "parentFaeSide" ||
      key == "sourceTran" ||
      key == "targetAcct" ||
      key == "parentJrnl") {
      return value.id;
    }
    return value;
  }

  selectAcct(listItem)
    :
    void {
    if (listItem.isAcct()
    ) {
      this.selectedAcct = listItem;
    }
  }
  selectSideAcctGoAcct(listItem)
    :
    void {
    if (listItem.isAcct()
    ) {
      this.selectedAcct = listItem;
      this.selectedModule = this.MODULE_ACCT;
    }
  }
  selectBchg(bchg)
    :
    void {
    this.selectedBchg = bchg;
    this.selectedAcct = bchg.targetAcct;
    this.selectedTran = bchg.sourceTran;
  }
  selectAcctBchgGoTran(bchg)
    :
    void {
    this.selectedBchg = bchg;
    this.selectedAcct = bchg.targetAcct;
    this.selectedTran = bchg.sourceTran;
    this.selectedModule = this.MODULE_TRAN;
  }
  selectTranBchgGoAcct(bchg)
    :
    void {
    this.selectedBchg = bchg;
    this.selectedAcct = bchg.targetAcct;
    this.selectedTran = bchg.sourceTran;
    this.selectedModule = this.MODULE_ACCT;
  }
  selectTran(tran)
    :
    void {
    this.selectedTran = tran;
  }
  selectJrnlTranGoTran(tran)
    :
    void {
    this.selectedTran = tran;
    this.selectedModule = this.MODULE_TRAN;
  }
  goFaeModule() {
    // this.selectedBchg = null;
    // this.selectedTran = null;
    this.selectedModule = this.MODULE_FAE;
    if (this.selectedAcct) {
      this.gridScrollerLink.setAttribute("href", `#${this.selectedAcct.id}`);
      this.gridScrollerLink.click();
    }
  }
  scrollFaeModule() {
    this.gridScrollerLink.click();
    console.log("clicked scroller")
  }
  goAcctModule(acct) {
    // this.selectedAcct = null;
    if (acct) {
      this.selectedAcct = acct;
    }
    else {
      if (!this.selectedAcct) {
        throw new Error(`Logic error in app.goAcctModule()`);
      }
    }
    if (this.selectedBchg && this.selectedBchg.targetAcct.id != this.selectedAcct.id) {
      this.selectedBchg = null;
    }
    this.selectedModule = this.MODULE_ACCT;
  }
  goBchgModule() {
    this.selectedModule = this.MODULE_BCHG;
  }
  goTranModule(tran) {
    if (tran) {
      this.selectedTran = tran;
    }
    else {
      if (!this.selectedTran) {
        throw new Error(`Logic error in app.goAcctModule()`);
      }
    }
    if (this.selectedBchg && this.selectedBchg.sourceTran.id != this.selectedTran.id) {
      this.selectedBchg = null;
    }
    this.selectedModule = this.MODULE_TRAN;
  }
  goJrnlModule() {
    // this.selectedBchg = null;
    // this.selectedAcct = null;
    this.selectedModule = this.MODULE_JRNL;
    if (this.selectedTran) {
      console.log(this.selectedTran);
      document.getElementById(this.selectedTran.id).scrollIntoView();
      /*
            this.gridScrollerLink.setAttribute("href", `#${this.selectedTran.id}`);
            this.gridScrollerLink.click();
      */
    }
  }
}


