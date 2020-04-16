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
  mutationObserver = new MutationObserver(this.mutationObserverCallback);

  /* element reference(s) */
  viewmodelPopupAcctMover;

  constructor(app, auModuleFae) {
    this.app = app;
  }

  observeRootElement() {
    (this.mutationObserver as any).app = this.app; // cast as "any" to programmatically add property
    this.mutationObserver.observe(this.moduleRootElement,
                                  {childList: false,
                                    attributes: true,
                                    attributeOldValue: true,
                                    subtree: false}
    );
  }
  mutationObserverCallback(mutationList, mutationObserver) {
    if (mutationObserver.app.selectedAcct) {
      document.getElementById(mutationObserver.app.selectedAcct.id).scrollIntoView();
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

