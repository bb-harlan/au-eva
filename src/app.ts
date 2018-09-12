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
    return String.fromCharCode(0xf111); // FontAwesome fa-circle
  }

  /*=====================================================
   *  UI state/control
   *=====================================================
   */
  selectedModule = this.MODULE_FAE;
  selectedFaeSide = null;
  selectedAcct = null;
  selectedTran = null;
  selectedBchg = null;
  showingModuleBchg = true;
  isEditing = false;
  /*=====================================================
   *  Reference to entity's accounting data
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


