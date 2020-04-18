import {customElement, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-jrnl')
@inject(App)
export class AuModuleJrnl {

  /* @injected object(s) */
  app: App;

  /* other properties */
  moduleRootElement: Element;
  mutationObserver = new MutationObserver(this.mutationObserverCallback);

  constructor(app) {
    this.app = app;
  }

  observeRootElement() {
    (this.mutationObserver as any).app = this.app; // cas as "any" to programmatically add property
    this.mutationObserver.observe(this.moduleRootElement,
                                  {childList: false,
                                    attributes: true,
                                    attributeOldValue: true,
                                    subtree: false}
    );
  }
  mutationObserverCallback(mutationList, mutationObserver) {
    if (mutationObserver.app.selectedTran) {
      document.getElementById(mutationObserver.app.selectedTran.id).scrollIntoView();
    }
    mutationObserver.disconnect();
  }

  /*
  attached() {
    /!*
     * NOTE: I don't know exactly WHY the use of MutationObserver below works to solve
     * the problem of scrolling to the grid row of the selectedTran, but it does.
     *!/

    this.mutationObserver = new MutationObserver(this.mutationObserverCallback);
    this.mutationObserver.app = this.app; // add new property for use by callback function
    this.mutationObserver.observe(this.moduleRootElement,
                                 {childList: false,
                                         attributes: true,
                                         attributeOldValue: true,
                                         subtree: false}
                                         );
  }
  mutationObserverCallback(mutationList, mutationObserver) {
    if (mutationObserver.app.selectedTran) {
      document.getElementById(mutationObserver.app.selectedTran.id).scrollIntoView();
    }
    mutationObserver.disconnect();
  }
*/
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

