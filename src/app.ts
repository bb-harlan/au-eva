import {Eva} from 'eva';
import {Acct, Annotation} from 'models/acct';
import {Tran} from 'models/tran';
import {Bchg} from 'models/bchg';

export class App {

  /*
   * ===================================================
   * The Eva class is designed as a singleton class,
   * an instance of which can be obtained by any component
   * with a call to the static method Eva.getInstance().
   * That is....
   *
   * The following call to Eva.getInstance()
   * is the first call to that static method and will create the first
   * and only instance of that class. Any subsequent calls to that static method
   * in Aurelia components will return that already-existing instance.
   *
   * Thus, this class gives this application intra-global scope for
   * any components needing its members.
   * ===================================================
   */
  eva: Eva = Eva.getInstance();
  classString: string = "import {customElement, bindable} from 'aurelia-framework';\n";

  constructor() {
  }

  bind() {
    // this.eva.generateTestData();
    this.eva.generateExample1Data();
  }
  onFaeModule(event) {
    this.eva.selectedAcct = null;
    this.eva.selectedBchg = null;
    this.eva.selectedTran = null;
    this.eva.selectedModule = this.eva.MODULE_FAE;
    this.eva.selectedFaeSide = null;
  }
  onJrnlModule(event) {
    this.eva.selectedAcct = null;
    this.eva.selectedBchg = null;
    this.eva.selectedTran = null;
    this.eva.selectedModule = this.eva.MODULE_JRNL;
    this.eva.selectedFaeSide = null;
  }
  onMenuClick(event, listItem) {
  }
}


