import {Acct, Annotation} from 'app-data/models/acct';
import {customElement, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-acct')
@inject(App)
export class AuModuleAcct {

  /* @injected object(s) */
  app: App;

  /* other properties */
  moduleRootElement: Element;
  mutationObserver = new MutationObserver(this.mutationObserverCallback);

  Acct: typeof Acct = Acct;
  Annotation: typeof Annotation = Annotation;

  constructor(app) {
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
    if (mutationObserver.app.selectedBchg) {
      document.getElementById(mutationObserver.app.selectedBchg.id).scrollIntoView();
    }
    mutationObserver.disconnect();
  }
  onRowEnter(event, listItem) {
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', true);
    event.target.children[2].classList.toggle('aaRowDataHover', true);
  }
  onRowLeave(event, listItem) {
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', false);
    event.target.children[2].classList.toggle('aaRowDataHover', false);
  }
}

