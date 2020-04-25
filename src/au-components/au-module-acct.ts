import {Acct, Annotation} from 'app-data/models/acct';
import {customElement, inject} from 'aurelia-framework';
import {App} from 'app';

@customElement('au-module-acct')
@inject(App)
export class AuModuleAcct {

  /* @injected object(s) */
  app: App;

  /* element reference(s) */
  moduleRootElement: Element;

  /* other properties */
  observerScrollIntoView = new MutationObserver(this.callbackScrollIntoView);

  Acct: typeof Acct = Acct;
  Annotation: typeof Annotation = Annotation;

  constructor(app) {
    this.app = app;
  }
  observeForScrollIntoView() {
    (this.observerScrollIntoView as any).app = this.app; // cast as "any" to programmatically add property
    this.observerScrollIntoView.observe(this.moduleRootElement,
                                  {
                                    childList: false,
                                    attributeFilter: [ "style" ],
                                    subtree: false
                                  }
    );
  }
  callbackScrollIntoView(mutationList, observer) {
    if (observer.app.selectedAcct) {
      let element = document.getElementById(`acct-${observer.app.selectedBchg.id}`);
      if (element) {
        element.scrollIntoView({behavior: "smooth", block: "center"});
      }
    }
    observer.disconnect();
  }
  onRowEnter(event, listItem) {
    event.target.children[2].classList.toggle('aaRowDataHover', true);
  }
  onRowLeave(event, listItem) {
    event.target.children[2].classList.toggle('aaRowDataHover', false);
  }
}

