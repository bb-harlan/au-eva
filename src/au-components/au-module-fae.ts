import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';
import {Acct} from 'app-data/models/acct';

@customElement('au-module-fae')
@inject(App)
export class AuModuleFae {

  /* @injected object(s) */
  app: App;

  /* other properties */
  moduleRootElement: Element;
  moScrollIntoView = new MutationObserver(this.cbScrollIntoView);
  moSetInputFocus = new MutationObserver(this.cbSetInputFocus);

  /* element reference(s) */
  viewmodelPopupAcctMover;

  constructor(app, auModuleFae) {
    this.app = app;
  }

  observeForScrollIntoView() {
    (this.moScrollIntoView as any).app = this.app; // cast as "any" to programmatically add property
    this.moScrollIntoView.observe(this.moduleRootElement,
                                  {childList: false,
                                    attributes: true,
                                    attributeOldValue: true,
                                    subtree: false}
    );
  }
  cbScrollIntoView(mutationList, mutationObserver) {
    if (mutationObserver.app.selectedAcct) {
      let element = document.getElementById(mutationObserver.app.selectedAcct.id);
      if (element) {
        element.scrollIntoView();
      }
    }
    mutationObserver.disconnect();
  }
  observeForSetInputFocus() {
    (this.moSetInputFocus as any).app = this.app; // cast as "any" to programmatically add property
    this.moSetInputFocus.observe(this.moduleRootElement,
                                  {childList: true,
                                    subtree: true}
    );
  }
  cbSetInputFocus(mutationList, mutationObserver) {
    if (mutationObserver.app.selectedAcct) {
      let element = document.getElementById(mutationObserver.app.selectedAcct.id);
      if (element) {
        (element.children[2].children[0] as HTMLElement).focus();
      }
    }
    mutationObserver.disconnect();
  }

  faeSidesEdit(event) {
    this.app.candidateFaeSideAssets = this.app.data.faeSideAssets.clone();
    this.app.candidateFaeSideEquities = this.app.data.faeSideEquities.clone();
    this.app.viewNavMode = false;
  }
  faeSidesEditDone(event) {
    this.app.data.faeSideAssets = this.app.candidateFaeSideAssets;
    this.app.data.faeSideEquities = this.app.candidateFaeSideEquities;
    this.app.candidateFaeSideAssets = null;
    this.app.candidateFaeSideEquities = null;
    this.app.data.faeSideAssets.refresh();
    this.app.data.faeSideEquities.refresh();
    this.app.viewNavMode = true;;
  }
  faeSidesEditCancel(event) {
    this.app.candidateFaeSideAssets = null;
    this.app.candidateFaeSideEquities = null;
    this.app.viewNavMode = true;;
  }
}

