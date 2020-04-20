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
  moScrollIntoView = new MutationObserver(this.cbScrollIntoView);

  Acct: typeof Acct = Acct;
  Annotation: typeof Annotation = Annotation;

  constructor(app) {
    this.app = app;
  }
  observeForScrollIntoView() {
    (this.moScrollIntoView as any).app = this.app; // cast as "any" to programmatically add property
    this.moScrollIntoView.observe(this.moduleRootElement,
                                  {
                                    childList: false,
                                    attributeFilter: [ "display" ],
                                    attributeOldValue: true,
                                    subtree: false
                                  }
    );
  }
  cbScrollIntoView(mutationList, mutationObserver) {
    if (mutationObserver.app.selectedBchg) {
      document.getElementById(mutationObserver.app.selectedBchg.id).scrollIntoView();
    }
    mutationObserver.disconnect();
  }
  onRowEnter(event, listItem) {
    event.target.children[2].classList.toggle('aaRowDataHover', true);
  }
  onRowLeave(event, listItem) {
    event.target.children[2].classList.toggle('aaRowDataHover', false);
  }
}

