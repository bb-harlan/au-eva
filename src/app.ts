import {Data} from "app-data/data";
import {Acct} from 'app-data/models/acct';
import {FaeSide} from 'app-data/models/fae-side';
import {Tran} from 'app-data/models/tran';
import {Bchg} from 'app-data/models/bchg';

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
  get END_OF_LIST() {
    return "- End of list -";
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
  viewmodelModuleFAE; // <au-module-fae view-model.ref="viewmodelModuleFAE" if.bind="selectedModule == MODULE_FAE"></au-module-fae>
  viewmodelModuleAcct; // <au-module-acct view-model.ref="viewmodelModuleAcct" ...></au-module-fae>
  viewmodelModuleBchg; // <au-module-bchg view-model.ref="viewmodelModuleBchg" ...></au-module-fae>
  viewmodelModuleTran; // <au-module-tran view-model.ref="viewmodelModuleTran" ...></au-module-fae>
  viewmodelModuleJrnl; // <au-module-jrnl view-model.ref="viewmodelModuleJrnl ...></au-module-fae>

  viewmodelPopupAcctMover; // <au-popup-acct-mover view-model.ref="viewmodelPopupAcctMover">
  viewmodelPopupAcctPicker; // <au-popup-acct-picker view-model.ref="viewmodelPopupAcctPicker">
  viewmodelPopupBchgMover; // <au-popup-bchg-mover view-model.ref="viewmodelPopupBchgMover">

  /*=====================================================
   *  UI state/control
   *=====================================================
   */
  selectedModule = this.MODULE_FAE;
  // remove following when I have finished abandoning it
  selectedModuleMode = this.MODULE_MODE_NAVIGATING;

  selectedFaeSide: FaeSide = null;
  editableFaeSide: FaeSide = null;
  faesideEditingMode: boolean = false;
  selectedAcct: Acct = null;
  selectedTran: Tran = null;
  editableTran: Tran = null // clone of selectedTran for editing
  tranEditingMode: boolean = false;
  selectedBchg: Bchg = null;
  isEditing = false;

  /*=====================================================
   *  Reference to  accounting entity's data
   *=====================================================
   */
  data = new Data();

  bind() {
    // this.data.generateTestData();
    this.data.generateExample1Data();
  }

  onFaeModule(event) {
    this.selectedAcct = null;
    this.selectedBchg = null;
    this.selectedTran = null;
    this.selectedModule = this.MODULE_FAE;
    this.selectedFaeSide = null;
  }

  onJrnlModule(event) {
    this.selectedAcct = null;
    this.selectedBchg = null;
    this.selectedTran = null;
    this.selectedModule = this.MODULE_JRNL;
    this.selectedFaeSide = null;
  }

  onMenuClick(event, listItem) {
  }
}


