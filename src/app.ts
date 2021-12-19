// import {TaskQueue, inject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {Data} from "app-data/data";
import {Acct, Annotation} from 'app-data/models/acct';
import {FaeSide} from 'app-data/models/fae-side';
import {Tran} from 'app-data/models/tran';
import {Bchg} from 'app-data/models/bchg';
import {Jrnl} from 'app-data/models/jrnl';
import * as firebase from "firebase/app";
import "firebase/firestore";

export class App {

  constructor() {
    /*
        if (!firebase.apps.length) {
          firebase.initializeApp(this.firebaseConfig);
        }
        this.firestore=firebase.firestore();
        let docURL = document.URL;
        this.urlObj = new URL(docURL);
        console.log("this.urlObj");
        console.log(this.urlObj);
        if(this.urlObj.hostname === "localhost") {
          this.firestore.settings({
                                    host: "localhost:8085",
                                    ssl: false
                                  });
    /!*
          this.firestore.settings.host = "localhost:8085";
          this.firestore.settings.ssl = false;
    *!/

        }
        let booksId = this.urlObj.searchParams.get('booksId');
        if (booksId) {
          console.log(`booksId: "${booksId}"`);
        }
        else {
          console.log("Query string parameter 'booksId' not found");
        }


        this.firestore.collection("example").get().then(
          querySnapshot => {
            let docs = querySnapshot.docs.map(doc => doc.data());
            console.log("console.log(docs)");
            console.log(docs);
          }
          )
        console.log("console.log(firebase)");
        console.log(firebase);

    */
  }

  /*
    firebaseConfig = {
      apiKey: "AIzaSyBIkCf6Tz-qQbDYSnE6QlYWb195nSqp-CY",
      authDomain: "au-eva.firebaseapp.com",
      databaseURL: "https://au-eva.firebaseio.com",
      projectId: "au-eva",
      storageBucket: "au-eva.appspot.com",
      messagingSenderId: "699165213300",
      appId: "1:699165213300:web:29a56650cef6fe6fc4c721",
      measurementId: "G-WVEFCE4R4S"
    };
    firestore;

    urlObj: URL;
  */

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

  get MODE_NAV() {
    return "nav";
  }
  get MODE_EDIT() {
    return "edit";
  }
  get MODE_MOVE() {
    return "move";
  }

  /* element.ref properties */
  navBtnFae;
  navBtnAcct;
  navBtnBchg;
  navBtnTran;
  navBtnJrnl;
  navBtnReturn = null;
  viewmodelFae; // <au-module-fae view-model.ref="viewmodelFae"></au-module-fae>
  viewmodelAcct; // <au-module-acct view-model.ref="viewmodelAcct"></au-module-acct>
  viewmodelBchg; // <au-module-bchg view-model.ref="viewmodelBchg"></au-module-bchg>
  viewmodelTran; // <au-module-tran view-model.ref="viewmodelTran"></au-module-tran>
  viewmodelJrnl; // <au-module-jrnl view-model.ref="viewmodelJrnl</au-module-jrnl>

  viewmodelPopupAlert; // <au-popup-acct-mover view-model.ref="viewmodelPopupAcctMover">
  viewmodelPopupAcctMover; // <au-popup-acct-mover view-model.ref="viewmodelPopupAcctMover">
  viewmodelPopupAcctPicker; // <au-popup-acct-picker view-model.ref="viewmodelPopupAcctPicker">
  viewmodelPopupBchgMover; // <au-popup-bchg-mover view-model.ref="viewmodelPopupBchgMover">

  /*=====================================================
   *  UI state/control
   *=====================================================
   */
  selectedModule = this.MODULE_FAE;
  slectedMode = this.MODE_NAV;
  viewNavMode = true;

  selectedAcct: Acct | Annotation = null;
  selectedBchg: Bchg = null;
  selectedTran: Tran = null;
  filteredAcctList: Array<Acct>;

  candidateSelectedAcct: Acct | Annotation = null;
  candidateSelectedBchg: Bchg = null;
  candidateSelectedTran: Tran = null;
  candidateTran: Tran = null;
  candidateFaeSideAssets: FaeSide = null;
  candidateFaeSideEquities: FaeSide = null;

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

  activate() {
    console.log("******** in app.activate() ********");
  }
  created(owningView, myView) {
    console.log("******** in app.created() ********");
    this.data.generateTestData();
    // this.data.generateEmptyData();
    // this.data.generateExample1Data();
    this.data.stringifyData();
    this.data.reviveData();
  }
  bind() {
    console.log("******** in app.bind() ********");
    /*** Test strigifying and reviving data ***/

    /*
        let bodyElement = document.getElementsByTagName("BODY")[0];
        console.log(bodyElement);
        let domRectBody = bodyElement.getBoundingClientRect();
        console.log(domRectBody);
        let panelElement = document.getElementById("observedElement");
        console.log(panelElement);
        let domRectPanel = panelElement.getBoundingClientRect();
        console.log(domRectPanel);
        this.heightTest = this.heightTest + domRectBody.bottom - domRectPanel.bottom;
    */
  }
  attached() {
    console.log("******** in app.attached() ********");
  }
  deactivate() {
    console.log("******** in app.deactivate() ********");
  }
  detached() {
    console.log("******** in app.detached() ********");
  }
  unbind() {
    console.log("******** in app.unbind() ********");
  }

  selectAcct(acct): void {
    this.selectedAcct = acct;
  }
  selectAcctGoAcct(acct): void {
    this.selectedAcct = acct;
    this.filteredAcctList =
      this.selectedAcct.parentFaeSide.acctList.filter(listItem => listItem instanceof Acct) as Array<Acct>;
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
    this.goTranModule(event);
  }
  selectTranBchgGoAcct(bchg): void {
    this.selectedBchg = bchg;
    this.selectedAcct = bchg.targetAcct;
    this.selectedTran = bchg.sourceTran;
    this.filteredAcctList =
      this.selectedAcct.parentFaeSide.acctList.filter(listItem => listItem instanceof Acct) as Array<Acct>;
    this.goAcctModule(event);
  }
  selectTran(tran): void {
    this.selectedTran = tran;
  }
  selectTranGoTran(tran): void {
    this.selectedTran = tran;
    this.goTranModule(event);
  }
  /*
    addHovering(event) {
      event.target.classList.toggle("aaNavMapBtnHover", true);
    }
    removeHovering(event) {
      event.target.classList.toggle("aaNavMapBtnHover", false);
    }
  */
  elementNavRibbon: HTMLElement;

  goFaeModule(event) {
    event.target.classList.toggle("aaNavModuleHover", false);
    this.selectedModule = null;
    // this.viewmodelFae.observeForScrollIntoView();
    this.selectedModule = this.MODULE_FAE;
  }
  goAcctModule(event) {
    if (this.selectedBchg && this.selectedBchg.targetAcct.id != this.selectedAcct.id) {
      this.selectedBchg = null;
    }
    event.target.classList.toggle("aaNavModuleBtnHover", false);
    this.filteredAcctList =
      this.selectedAcct.parentFaeSide.acctList.filter(listItem => listItem instanceof Acct) as Array<Acct>;
    this.selectedModule = null;
    // this.viewmodelAcct.observeForScrollIntoView();
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
    this.viewmodelTran.observeForScrollIntoView();
    this.selectedModule = this.MODULE_TRAN;
  }
  goJrnlModule(event) {
    event.target.classList.toggle("aaNavModuleHover", false);
    this.selectedModule = null;
    this.viewmodelJrnl.observeForScrollIntoView();
    this.selectedModule = this.MODULE_JRNL;
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


