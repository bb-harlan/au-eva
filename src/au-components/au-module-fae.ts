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

  /* element & view-model references */
  moduleRootElement: Element;
  vmFaeSideEditAssets; // view-model reference
  vmFaeSideEditEquities; // view-model reference
  vmFaeSideMoveAssets; // view-model reference
  vmFaeSideMoveEquities; // view-model reference
  viewmodelPopupAcctMover;
  panelToolBar: Element;

  /* other properties */
  scrollableRowsHeight: number = 200;

  moduleMode;
  observerScrollIntoView = new MutationObserver(this.callbackScrollIntoView);
  observerSetInputFocus = new MutationObserver(this.callbackSetInputFocus);

  constructor(app) {
    this.app = app;
    this.moduleMode = this.app.MODE_NAV;
    (window as any).onresize = this.onResize;
    (window as any).auModuleFae = this;
  }
  onResize(event) {
    console.log("******** in onResize ********");
    let domRectPanel = (window as any).auModuleFae.moduleRootElement.getBoundingClientRect();
    (window as any).auModuleFae.scrollableRowsHeight = (window as any).auModuleFae.scrollableRowsHeight + (window as any).innerHeight - domRectPanel.bottom - 25;
  }
  activate() {
    console.log("******** in auModuleFae.activate() ********");
  }
  created(owningView, myView) {
    console.log("******** in auModuleFae.created() ********");
  }
  bind() {
    console.log("****** in auModuleFae.bind() ******");
  }
  attached() {
    console.log("******** in auModuleFae.attached() ********");
    /* initialize this.scrollableRowsHeight so that the module panel
       extends downward to within 25px of bottom of window.
    */
    let domRectPanel = this.moduleRootElement.getBoundingClientRect();
    this.scrollableRowsHeight = this.scrollableRowsHeight + (window as any).innerHeight - domRectPanel.bottom - 25;
    /*
    this.crollableRowsHeight is used in au-fae-side.html as follows:
    <div class="aaGridScrollableRows"
         css="height: ${auModuleFae.scrollableRowsHeight}px;" ...
    */
  }
  deactivate() {
    console.log("******** in auModuleFae.deactivate() ********");
  }
  detached() {
    console.log("******** in auModuleFae.detached() ********");
  }
  unbind() {
    console.log("******** in auModuleFae.unbind() ********");
  }

  editOpen() {
    /*
        this.vmFaeSideEditAssets.open();
        this.vmFaeSideEditEquities.open();
    */
    this.moduleMode = this.app.MODE_EDIT;
    this.app.elementNavRibbon.classList.toggle("aaHidden", true);
    /*
    * For other initialization see the bind() method of compomeent au-fae-side-edit
    * */
  }
  editSaveChanges() {
    let missingTitleCnt = this.vmFaeSideEditAssets.missingTitleCnt() + this.vmFaeSideEditEquities.missingTitleCnt();
    if (missingTitleCnt > 0) {
      this.app.viewmodelPopupAlert.open("Save changes",
                                        this.panelToolBar.getBoundingClientRect().bottom,
                                        `Account title is missing for ${missingTitleCnt} account(s).`);
      return;
    }
    this.vmFaeSideEditAssets.saveChanges();
    this.vmFaeSideEditEquities.saveChanges();
    this.moduleMode = this.app.MODE_NAV;
    this.app.elementNavRibbon.classList.toggle("aaHidden", false);
  }
  editCancel() {
    this.vmFaeSideEditAssets.cancel();
    this.vmFaeSideEditEquities.cancel();
    this.moduleMode = this.app.MODE_NAV;
    this.app.elementNavRibbon.classList.toggle("aaHidden", false);
  }
  moveOpen() {
    /*
        this.vmFaeSideMoveAssets.open();
        this.vmFaeSideMoveEquities.open();
    */
    this.moduleMode = this.app.MODE_MOVE;
    this.app.elementNavRibbon.classList.toggle("aaHidden", true);
    this.app.selectedAcct = null;
  }
  moveSaveChanges() {
    this.vmFaeSideMoveAssets.saveChanges();
    this.vmFaeSideMoveEquities.saveChanges();
    this.moduleMode = this.app.MODE_NAV;
    this.app.elementNavRibbon.classList.toggle("aaHidden", false);
  }
  moveCancel() {
    this.vmFaeSideMoveAssets.cancel();
    this.vmFaeSideMoveEquities.cancel();
    this.moduleMode = this.app.MODE_NAV;
    this.app.elementNavRibbon.classList.toggle("aaHidden", false);
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
        // element.scrollIntoView({behavior: "smooth", block: "center"});
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
    this.vmFaeSideEditAssets.initialize();
    this.vmFaeSideEditEquities.initialize();
    return;
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
    // this.app.viewNavMode = false;
    this.moduleMode = this.app.MODE_EDIT;
    this.app.elementNavRibbon.classList.toggle("aaHidden", true);
  }
  faeSidesEditDone(event) {
    let missingTitleCnt = this.vmFaeSideEditAssets.missingTitleCnt() + this.vmFaeSideEditEquities.missingTitleCnt();
    if (missingTitleCnt > 0) {
      this.app.viewmodelPopupAlert.open("Save changes",
                                        this.panelToolBar.getBoundingClientRect().bottom,
                                        `Account title is missing for ${missingTitleCnt} account(s).`);
      return;
    }
    this.vmFaeSideEditAssets.saveChanges();
    this.vmFaeSideEditEquities.saveChanges();

    this.app.selectedAcct = this.app.candidateSelectedAcct;
    this.app.candidateSelectedAcct = null;

    this.app.data.faeSideAssets.refresh();
    this.app.data.faeSideEquities.refresh();
    this.moduleMode = this.app.MODE_NAV;
    /*
        observeForScrollIntoView() {
        (this.observerScrollIntoView as any).app = this.app; // cast as "any" to programmatically add property
        this.observerScrollIntoView.observe(this.moduleRootElement,
                                             {
                                              childList: true,
                                              attributes: true,
                                              subtree: true,
                                              characterData: true
                                             } );
    */
  }
  faeSidesEditCancel(event): void {
    this.vmFaeSideEditAssets.cancel();
    this.vmFaeSideEditEquities.cancel();
    /*
        (this.observerScrollIntoView as any).app = this.app; // cast as "any" to programmatically add property
        this.observerScrollIntoView.observe(this.moduleRootElement,
                                            {
                                              childList: true,
                                              attributes: true,
                                              subtree: true,
                                              characterData: true
                                            });
    */
    // this.app.viewNavMode = true;
    this.app.candidateFaeSideAssets = null;
    this.app.candidateFaeSideEquities = null;
    this.app.candidateSelectedAcct = null;
    this.moduleMode = this.app.MODE_NAV;
    this.app.elementNavRibbon.classList.toggle("aaHidden", false);
  }
}

