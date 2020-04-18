// import {TaskQueue, inject} from 'aurelia-framework';
import {Data} from "app-data/data";
import {Acct, Annotation} from 'app-data/models/acct';
import {FaeSide} from 'app-data/models/fae-side';
import {Tran} from 'app-data/models/tran';
import {Bchg} from 'app-data/models/bchg';
import {Jrnl} from 'app-data/models/jrnl';

export class App {

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

  /* element.ref properties */
  viewmodelFae; // <au-module-fae view-model.ref="viewmodelFae"></au-module-fae>
  viewmodelAcct; // <au-module-acct view-model.ref="viewmodelAcct"></au-module-fae>
  viewmodelBchg; // <au-module-bchg view-model.ref="viewmodelBchg"></au-module-fae>
  viewmodelTran; // <au-module-tran view-model.ref="viewmodelTran"></au-module-fae>
  viewmodelJrnl; // <au-module-jrnl view-model.ref="viewmodelJrnl</au-module-fae>

  viewmodelPopupAcctMover; // <au-popup-acct-mover view-model.ref="viewmodelPopupAcctMover">
  viewmodelPopupAcctPicker; // <au-popup-acct-picker view-model.ref="viewmodelPopupAcctPicker">
  viewmodelPopupBchgMover; // <au-popup-bchg-mover view-model.ref="viewmodelPopupBchgMover">

  /*=====================================================
   *  UI state/control
   *=====================================================
   */
  selectedModule = this.MODULE_FAE;
  invokingModule = null;
  viewNavMode = true;

  selectedFaeSide: FaeSide = null;
  selectedAcct: Acct = null;
  filteredAcctList: Array<Acct | Annotation>;
  selectedBchg: Bchg = null;
  selectedTran: Tran = null;
  candidateTran: Tran = null;
  candidateFaeSideAssets: FaeSide = null;
  candidateFaeSideEquities: FaeSide = null;
  /*
  * About candidateTran
  * -------------------
  *
  */

  /*=====================================================
   *  Reference to  accounting entity's data
   *=====================================================
   */
  data = new Data(
    "",
    1,
    1,
    1,
    1);


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
      parsedData.entityName,
      parsedData._nextSorter,
      parsedData._nextAcctId,
      parsedData._nextTranId,
      parsedData._nextBchgId);
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
            /*intraSideIndex*/ listItem.intraSideIndex,
            /*annoText*/ listItem.annoText);
        }
        else {
          revivedListItem = new Acct(
            /*annoId*/ listItem.id,
            /*faeSide*/ revivedFaeSide,
            /*intraSideIndex*/ listItem.intraSideIndex,
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
      revivedData.faeSideAssets.refresh();
      revivedData.faeSideEquities.refresh();
      revivedData.jrnl.refresh();
      revivedTran.register();
    }
    revivedData.jrnl.refresh();
    console.log(revivedData);
    this.data = null;
    // alert("Wait");
    this.data = revivedData;
    // *** IT WORKS!!!! ***
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

  selectAcct(acct): void {
    this.selectedAcct = acct;
  }
  selectAcctAndGo(acct): void {
    this.selectedAcct = acct;
    this.filteredAcctList = this.selectedAcct.parentFaeSide.acctList.filter(listItem => listItem instanceof Acct);
    this.goAcctModule(event);
  }
  selectBchg(bchg): void {
    this.selectedBchg = bchg;
    this.selectedAcct = bchg.targetAcct;
    this.selectedTran = bchg.sourceTran;
  }
  selectAcctBchgGoTran(bchg): void {
    this.selectedBchg = bchg;
    this.selectedAcct = bchg.targetAcct;
    this.selectedTran = bchg.sourceTran;
    this.selectedModule = this.MODULE_TRAN;
  }
  selectTranBchgGoAcct(bchg): void {
    this.selectedBchg = bchg;
    this.selectedAcct = bchg.targetAcct;
    this.filteredAcctList = this.selectedAcct.parentFaeSide.acctList.filter(listItem => listItem instanceof Acct);
    this.selectedTran = bchg.sourceTran;
    this.selectedModule = this.MODULE_ACCT;
  }
  selectTran(tran): void {
    this.selectedTran = tran;
  }
  selectTranAndGo(tran): void {
    this.selectedTran = tran;
    this.selectedModule = this.MODULE_TRAN;
  }
  addHovering(event) {
    event.target.classList.toggle("aaNavMapBtnHover", true);
  }
  removeHovering(event) {
    event.target.classList.toggle("aaNavMapBtnHover", false);
  }

  goFaeModule(event) {
    event.target.classList.toggle("aaNavModuleHover", false);
    this.selectedModule = null;
    this.viewmodelFae.observeRootElement();
    this.selectedModule = this.MODULE_FAE;
  }
  goAcctModule(event) {
    if (this.selectedBchg && this.selectedBchg.targetAcct.id != this.selectedAcct.id) {
      this.selectedBchg = null;
    }
    event.target.classList.toggle("aaNavModuleBtnHover", false);
    this.filteredAcctList = this.selectedAcct.parentFaeSide.acctList.filter(listItem => listItem instanceof Acct);
    this.selectedModule = null;
    this.viewmodelAcct.observeRootElement();
    this.selectedModule = this.MODULE_ACCT;
  }
  goBchgModule(event) {
    event.target.classList.toggle("aaNavModuleBtnHover", false);
    this.selectedModule = null;
    this.selectedModule = this.MODULE_BCHG;
  }
  goTranModule(event) {
    if (this.selectedBchg && this.selectedBchg.sourceTran.id != this.selectedTran.id) {
      this.selectedBchg = null;
    }
    event.target.classList.toggle("aaNavModuleBtnHover", false);
    this.selectedModule = null;
    this.viewmodelTran.observeRootElement();
    this.selectedModule = this.MODULE_TRAN;
  }
  goJrnlModule(event) {
    event.target.classList.toggle("aaNavModuleHover", false);
    this.selectedModule = null;
    this.viewmodelJrnl.observeRootElement();
    this.selectedModule = this.MODULE_JRNL;
/*
    if (this.selectedTran) {
      console.log(this.selectedTran);
      document.getElementById(this.selectedTran.id).scrollIntoView();
    }
*/
  }

  goPrevAcct(event) {
    let selectedAcctIndex = this.filteredAcctList.findIndex(element => element.id == this.selectedAcct.id);
    this.selectedAcct = this.filteredAcctList[selectedAcctIndex - 1] as Acct;
  }
  goNextAcct(event) {
    let selectedAcctIndex = this.filteredAcctList.findIndex(element => element.id == this.selectedAcct.id);
    this.selectedAcct = this.filteredAcctList[selectedAcctIndex + 1] as Acct;
  }
  goPrevTran(event) {
    let selectedTranIndex = this.data.jrnl.tranList.findIndex(element => element.id == this.selectedTran.id);
    this.selectedTran = this.data.jrnl.tranList[selectedTranIndex - 1];
  }
  goNextTran(event) {
    let selectedTranIndex = this.data.jrnl.tranList.findIndex(element => element.id == this.selectedTran.id);
    this.selectedTran = this.data.jrnl.tranList[selectedTranIndex + 1];
  }
}


