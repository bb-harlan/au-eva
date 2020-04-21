import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';
import {Acct} from 'app-data/models/acct';
import {FaeSide} from 'app-data/models/fae-side';

@customElement('au-module-fae')
@inject(App)
export class AuModuleFae {

  /* @injected object(s) */
  app: App;

  /* other properties */
  moduleRootElement: Element;
  observerScrollIntoView = new MutationObserver(this.callbackScrollIntoView);
  observerSetInputFocus = new MutationObserver(this.callbackSetInputFocus);

  /* element reference(s) */
  viewmodelPopupAcctMover;

  constructor(app, auModuleFae) {
    this.app = app;
  }

  observeForScrollIntoView() {
    (this.observerScrollIntoView as any).app = this.app; // cast as "any" to programmatically add property
    this.observerScrollIntoView.observe(this.moduleRootElement,
                                  { attributeFilter:[ 'style' ] }
    );
  }
  callbackScrollIntoView(mutationList, observer) {
    if (observer.app.selectedAcct) {
      let element = document.getElementById(observer.app.selectedAcct.id);
      if (element) {
        element.scrollIntoView();
      }
    }
    observer.disconnect();
  }
  observeForSetInputFocus() {
    (this.observerSetInputFocus as any).app = this.app; // cast as "any" to programmatically add property
    this.observerSetInputFocus.observe(this.moduleRootElement,
                                  {
                                    childList: true,
                                    subtree: true});
  }
  callbackSetInputFocus(mutationList, observer) {
    if (observer.app.candidateSelectedAcct) {
      let element = document.getElementById(`${observer.app.candidateSelectedAcct.id}-title`);
      if (element) {
        (element as HTMLElement).focus();
      }
    }
    observer.disconnect();
  }

  faeSidesEdit(event) {
    this.app.candidateFaeSideAssets = this.app.data.faeSideAssets.clone();
    this.app.candidateFaeSideEquities = this.app.data.faeSideEquities.clone();
    if (this.app.selectedAcct) {
      let candidateFaeSide: FaeSide = null;
      if (this.app.selectedAcct.parentFaeSide.id == "Assets") {
        candidateFaeSide = this.app.candidateFaeSideAssets
      }
      else {
        candidateFaeSide = this.app.candidateFaeSideEquities;
      }
      let filteredAcctList = candidateFaeSide.acctList.filter((listItem) => listItem instanceof Acct) as Array<Acct>;
      this.app.candidateSelectedAcct = filteredAcctList.find(element => element.id == this.app.selectedAcct.id);
    }
    this.app.viewNavMode = false;
  }
  faeSidesEditDone(event) {
    this.app.data.faeSideAssets = this.app.candidateFaeSideAssets;
    this.app.data.faeSideEquities = this.app.candidateFaeSideEquities;
    this.app.selectedAcct = this.app.candidateSelectedAcct;

    this.app.candidateFaeSideAssets = null;
    this.app.candidateFaeSideEquities = null;
    this.app.candidateSelectedAcct = null;

    this.app.data.faeSideAssets.refresh();
    this.app.data.faeSideEquities.refresh();
    (this.observerScrollIntoView as any).app = this.app; // cast as "any" to programmatically add property
    this.observerScrollIntoView.observe(this.moduleRootElement,
                                        {
                                          childList: true,
                                          attributes: true,
                                          subtree: true,
                                          characterData: true});
    this.app.viewNavMode = true;
  }
  faeSidesEditCancel(event) {
    (this.observerScrollIntoView as any).app = this.app; // cast as "any" to programmatically add property
    this.observerScrollIntoView.observe(this.moduleRootElement,
                                        {
                                          childList: true,
                                          attributes: true,
                                          subtree: true,
                                          characterData: true});
    this.app.viewNavMode = true;
    this.app.candidateFaeSideAssets = null;
    this.app.candidateFaeSideEquities = null;
    this.app.candidateSelectedAcct = null;
  }
}

