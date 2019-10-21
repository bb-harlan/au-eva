import {Data} from "app-data/data";

export class App {
  /*==========================================================
   * constants simulated by getters
   *==========================================================
   */
  get SIDE_ID_ASSETS() {
    return 'Assets';
  }

  get SIDE_ID_EQUITIES(): string {
    return 'Equities';
  }

  get TRAN_JRNL_ID() {
    return 'Journal';
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

  get MODULE_MODE_NAVIGATING() {
    return "navigating";
  }
  get MODULE_MODE_EDITING() {
    return "editing";
  }
  get MODULE_MODE_MOVING_ROWS() {
    return "moving rows";
  }


  /*=====================================================
   *  UI state/control
   *=====================================================
   */
  selectedModule = this.MODULE_FAE;
  selectedModuleMode = this.MODULE_MODE_NAVIGATING;
  selectedFaeSide = null;
  selectedAcct = null;
  selectedTran = null;
  selectedBchg = null;
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

  /*=====================================================
   *  references to dialog view-models
   *=====================================================
   */
/*
// <au-acct-mover view-model.ref="viewmodelAcctMover"></au-acct-mover>
  viewmodelAcctMover;
*/

}


