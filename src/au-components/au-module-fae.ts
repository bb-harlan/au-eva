import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';
import {Acct} from 'app-data/models/acct';
import {Annotation} from 'app-data/models/acct';
import {FaeSide} from 'app-data/models/fae-side';

@customElement('au-module-fae')
@inject(App)

export class AuModuleFae {

  /* @injected object(s) */
  app: App;

  /* element reference(s) */
  moduleRootElement: Element;
  viewmodelFaeSideAssets;
  viewmodelFaeSideEquities;
  viewmodelPopupAcctMover;
  panelToolBar: Element;

  /* other properties */
  observerScrollIntoView = new MutationObserver(this.callbackScrollIntoView);
  observerSetInputFocus = new MutationObserver(this.callbackSetInputFocus);

  constructor(app, auModuleFae) {
    this.app = app;
  }

  observeForScrollIntoView() {
    (this.observerScrollIntoView as any).app = this.app; // cast as "any" to programmatically add property
    this.observerScrollIntoView.observe(this.moduleRootElement,
                                        {attributeFilter: ['style']}
    );
  }
  callbackScrollIntoView(mutationList, observer) {
    if (observer.app.selectedAcct) {
      let element = document.getElementById(observer.app.selectedAcct.id);
      if (element) {
        element.scrollIntoView({behavior: "smooth", block: "center"});
      }
    }
    observer.disconnect();
  }
  observeForSetInputFocus() {
    (this.observerSetInputFocus as any).app = this.app; // cast as "any" to programmatically add property
    this.observerSetInputFocus.observe(this.moduleRootElement,
                                       {
                                         childList: true,
                                         subtree: true
                                       });
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
    let matchingListItem;
    let newAcct;
    let newAnnotation;
    let removalIndex;
    let allSideListItems;
    let missingTitleCnt = 0;
    allSideListItems = this.app.candidateFaeSideAssets.acctList.concat(this.app.candidateFaeSideEquities.acctList);
    for (let listItem of allSideListItems) {
      if (listItem instanceof Acct && listItem.title.length == 0) {
        missingTitleCnt++;
      }
    }
    if (missingTitleCnt > 0) {
      this.app.viewmodelPopupAlert.open("Save changes",
                                        this.panelToolBar.getBoundingClientRect().bottom,
                                        `${missingTitleCnt} account(s) missing title.`);
      return;
    }


    /*** process Assets list ***/
    /* remove any deleted listItems */
    for (let listItem of this.app.data.faeSideAssets.acctList) {
      matchingListItem = this.app.candidateFaeSideAssets.acctList.find(element => element.id == listItem.id);
      if (!matchingListItem) {
        removalIndex = this.app.data.faeSideAssets.acctList.findIndex(element => element.id == listItem.id);
        this.app.data.faeSideAssets.acctList.splice(removalIndex, 1);
      }
    }
    /* update acctlist with any new or changed listItems */
    for (let listItem of this.app.candidateFaeSideAssets.acctList) {
      if (listItem instanceof Annotation) {
        matchingListItem = this.app.data.faeSideAssets.acctList.find(element => element.id == listItem.id);
        if (matchingListItem) {
          matchingListItem.intraSideIndex = listItem.intraSideIndex;
          matchingListItem.annoText = listItem.annoText;
        }
        else {
          this.app.data.faeSideAssets.acctList.push(listItem);
        }
      }
      else if (listItem instanceof Acct) {
        matchingListItem = this.app.data.faeSideAssets.acctList.find(element => element.id == listItem.id);
        if (matchingListItem) {
          matchingListItem.intraSideIndex = listItem.intraSideIndex;
          matchingListItem.title = listItem.title;
        }
        else {
          this.app.data.faeSideAssets.acctList.push(listItem);
        }
      }
      else {
        /* error */
      }
    }

    /*** process Equities list ***/
    /* remove any deleted listItems */
    for (let listItem of this.app.data.faeSideEquities.acctList) {
      matchingListItem = this.app.candidateFaeSideEquities.acctList.find(element => element.id == listItem.id);
      if (!matchingListItem) {
        removalIndex = this.app.data.faeSideEquities.acctList.findIndex(element => element.id == listItem.id);
        this.app.data.faeSideEquities.acctList.splice(removalIndex, 1);
      }
    }
    /* update acctlist with any new or changed listItems */
    for (let listItem of this.app.candidateFaeSideEquities.acctList) {
      if (listItem instanceof Annotation) {
        matchingListItem = this.app.data.faeSideEquities.acctList.find(element => element.id == listItem.id);
        if (matchingListItem) {
          matchingListItem.intraSideIndex = listItem.intraSideIndex;
          matchingListItem.annoText = listItem.annoText;
        }
        else {
          this.app.data.faeSideEquities.acctList.push(listItem);
        }
      }
      else if (listItem instanceof Acct) {
        matchingListItem = this.app.data.faeSideEquities.acctList.find(element => element.id == listItem.id);
        if (matchingListItem) {
          matchingListItem.intraSideIndex = listItem.intraSideIndex;
          matchingListItem.title = listItem.title;
        }
        else {
          this.app.data.faeSideEquities.acctList.push(listItem);
        }
      }
      else {
        /* error */
      }
    }

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
                                          characterData: true
                                        });
    this.app.viewNavMode = true;
  }
  faeSidesEditCancel(event) {
    (this.observerScrollIntoView as any).app = this.app; // cast as "any" to programmatically add property
    this.observerScrollIntoView.observe(this.moduleRootElement,
                                        {
                                          childList: true,
                                          attributes: true,
                                          subtree: true,
                                          characterData: true
                                        });
    this.app.viewNavMode = true;
    this.app.candidateFaeSideAssets = null;
    this.app.candidateFaeSideEquities = null;
    this.app.candidateSelectedAcct = null;
  }
}

