import {Eva} from './eva';
import {AcctList} from './models/acct-list';
import {Acct, Annotation} from './models/acct';
import {TranList} from './models/tran-list';
import {Tran} from './models/tran';
import {Bchg} from './models/bchg';

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
  eva:Eva = Eva.getInstance(); // will create the first instance of Eva

  constructor() {
  }

  bind() {
    this.eva.generateTestData();
  }
  onFaeModule(event) {
    this.eva.selectedAcct = null;
    this.eva.selectedBchg = null;
    this.eva.selectedTran = null;
    this.eva.selectedModule = this.eva.MODULE_FAE;
    this.eva.selectedEquSide = null;
  }
  onJrnlModule(event) {
    this.eva.selectedAcct = null;
    this.eva.selectedBchg = null;
    this.eva.selectedTran = null;
    this.eva.selectedModule = this.eva.MODULE_JRNL;
    this.eva.selectedEquSide = null;
  }
  onMenuClick(event, listItem) {
  }
}


