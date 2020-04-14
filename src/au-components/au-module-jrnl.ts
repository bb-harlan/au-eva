import {customElement, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-jrnl')
@inject(App)
export class AuModuleJrnl {
  //
  app = null;
  rootDivOfJrnl: Element = null;
  mutationObserver = null;

  constructor(app) {
    this.app = app;
  }
  attached() {
    /*
     * NOTE: I don't know exactly WHY the use of MutationObserver below works to solve
     * the problem of scrolling to the grid row of the selectedTran, but it does.
     */

    this.mutationObserver = new MutationObserver(this.mutationObserverCallback);
    this.mutationObserver.app = this.app; // add new property for use by callback function
    this.mutationObserver.observe(this.rootDivOfJrnl, {childList: false, attributes: true, attributeOldValue: true,  subtree: false});
  }
  mutationObserverCallback(mutationList, observer) {
    if (observer.app.selectedTran) {
      document.getElementById(observer.app.selectedTran.id).scrollIntoView();
/*   *** The following does not work***
      observer.app.gridScrollerLink.setAttribute("href", `#${observer.app.selectedTrant.id}`);
      observer.app.gridScrollerLink.click();
*/
    }
  }
  onRowEnter(event) {
    /*row ops*/
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', true);
    /*tran date*/
    event.target.children[2].children[0].classList.toggle('aaRowDataHover', true);
    /*tran bchg rows*/
    event.target.children[2].children[1].classList.toggle('aaRowDataHover', true);
  }
  onRowLeave(event) {
    /*row ops*/
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', false);
    /*tran date*/
    event.target.children[2].children[0].classList.toggle('aaRowDataHover', false);
    /*tran bchg rows*/
    event.target.children[2].children[1].classList.toggle('aaRowDataHover', false);
  }
  onGoTran(event, tran) {
    this.app.selectedBchg = null;
    this.app.selectedTran = tran;
    this.app.selectedModule = this.app.MODULE_TRAN;
  }
  tranNew(event) {
    this.app.invokingModule = this.app.MODULE_JRNL;
    this.app.selectedModule = this.app.MODULE_TRAN;
    this.app.viewmodelModuleTran.tranNew();
  }
  tranEdit(event) {
    if (this.app.selectedTran) {
      this.app.invokingModule = this.app.MODULE_JRNL;
      this.app.selectedModule = this.app.MODULE_TRAN;
      this.app.viewmodelModuleTran.tranEdit();
    }
  }
  tranDelete(event) {
    if (this.app.selectedTran) {
      this.app.invokingModule = this.app.MODULE_JRNL;
      this.app.selectedModule = this.app.MODULE_TRAN;
      this.app.viewmodelModuleTran.tranDelete();
    }
  }

}

