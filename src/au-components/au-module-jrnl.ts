import {customElement, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-jrnl')
@inject(App)
export class AuModuleJrnl {

  /* @injected object(s) */
  app: App;

  /* other properties */
  moduleRootElement: Element;
  observerScrollIntoView = new MutationObserver(this.callbackScrollIntoView);

  constructor(app) {
    this.app = app;
  }

  observeForScrollIntoView() {
    (this.observerScrollIntoView as any).app = this.app; // cast as "any" to programmatically add property
    this.observerScrollIntoView.observe(this.moduleRootElement,
                                  {
                                    childList: false,
                                    attributeFilter: [ "display" ],
                                    attributeOldValue: true,
                                    subtree: false
                                  }
    );
  }
  callbackScrollIntoView(mutationList, callbackSetInputFocus) {
    if (callbackSetInputFocus.app.selectedTran) {
      document.getElementById(callbackSetInputFocus.app.selectedTran.id).scrollIntoView();
    }
    callbackSetInputFocus.disconnect();
  }
  onRowEnter(event) {
    /*tran date*/
    event.target.children[2].children[0].classList.toggle('aaRowDataHover', true);
    /*tran bchg rows*/
    event.target.children[2].children[1].classList.toggle('aaRowDataHover', true);
  }
  onRowLeave(event) {
    /*tran date*/
    event.target.children[2].children[0].classList.toggle('aaRowDataHover', false);
    /*tran bchg rows*/
    event.target.children[2].children[1].classList.toggle('aaRowDataHover', false);
  }
  tranNew(event) {
    this.app.invokingModule = this.app.MODULE_JRNL;
    this.app.selectedModule = this.app.MODULE_TRAN;
    this.app.viewmodelTran.tranNew();
  }
  tranEdit(event) {
    if (this.app.selectedTran) {
      this.app.invokingModule = this.app.MODULE_JRNL;
      this.app.selectedModule = this.app.MODULE_TRAN;
      this.app.viewmodelTran.tranEdit();
    }
  }
  tranDelete(event) {
    if (this.app.selectedTran) {
      this.app.invokingModule = this.app.MODULE_JRNL;
      this.app.selectedModule = this.app.MODULE_TRAN;
      this.app.viewmodelTran.tranDelete();
    }
  }

}

