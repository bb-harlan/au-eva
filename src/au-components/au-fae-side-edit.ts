import {customElement, bindable, inject} from 'aurelia-framework';
import {FaeSide} from 'app-data/models/fae-side';
import {Acct, Annotation} from 'app-data/models/acct';
import {App} from 'app';
import {AuModuleFae} from 'au-components/au-module-fae';

@customElement('au-fae-side-edit')
@inject(App, AuModuleFae)
export class AuFaeSideEdit {

  /* @injected object(s) */
  app: App;
  auModuleFae: AuModuleFae;

  @bindable faeSide: FaeSide;
  candidateFaeSide: FaeSide;
  candidateSelectedAcct

  /* element reference(s) */
  divGridRows: HTMLElement;
  popupTop: HTMLElement;
  rowOpsMenuModal: HTMLElement;
  rowOpsBoundingClientRect;

  /* other properties */
  Acct: typeof Acct = Acct;
  Annotation: typeof Annotation = Annotation;
  mutationObserver = new MutationObserver(this.onMutation);

  /*
   * In the following two mouseenter/mouseleave handlers, the end-of-list
   * row passes a null value as listItem to signal that the call is from the
   * end-of-list row from which there is no listItem to navigation to. This method
   * uses that signal to know not to make the nav button visible--
   * that is, it is to remain hidden. The nav button is present but hidden
   * in the end-of-list row to make the horizontal alignment of the remaining columns correct.
   *
   * event.target.children[0] is the menu buttom.
   * event.target.children[1] is the nav buttom.
   */
  constructor(app, auModuleFae) {
    this.app = app;
    this.auModuleFae = auModuleFae;
  }

  bind() {
    this.candidateFaeSide = this.faeSide.clone();
    /*
        if (this.app.selectedAcct) {
          let filteredAcctList = this.candidateFaeSide.acctList.filter((listItem) => listItem instanceof Acct) as Array<Acct>;
          this.candidateSelectedAcct = filteredAcctList.find(element => element.id == this.app.selectedAcct.id);
    */
  }
  missingTitleCnt(): number {
    let missingTitleCnt = 0;
    for (let listItem of this.candidateFaeSide.acctList) {
      if (listItem instanceof Acct) {
        listItem.title = listItem.title.trim();
        if (listItem.title.length == 0) {
          missingTitleCnt++;
        }
      }
    }
    return missingTitleCnt;
  }
  saveChanges(): void {
    /* sync possibly changed listItem in this.faeSide.acctList to match corresponding listItem in candidateFaeSide.acctList */
    let deletedListItems: Array<Acct | Annotation> = [];
    for (let listItem of this.faeSide.acctList) {
      let candidateListItem = this.candidateFaeSide.acctList.find(element => element.id == listItem.id);
      if (candidateListItem === undefined) {
        deletedListItems.push(listItem);
      }
      else {
        listItem.intraSideIndex = candidateListItem.intraSideIndex;
        if (listItem instanceof Acct) {
          listItem.title = (candidateListItem as Acct).title;
        }
        else if (listItem instanceof Annotation) {
          listItem.annoText = (candidateListItem as Annotation).annoText;
        }
        else {
          // error
        }
      }
    }
    /* remove listItems deleted from this.faeSide.actList */
    for (let deletedListItem of deletedListItems) {
      let removalIndex = this.faeSide.acctList.indexOf(deletedListItem);
      this.faeSide.acctList.splice(removalIndex, 1);
    }
    /* add to this.faeSide.actList any added candidateListItems */
    for (let listItem of this.candidateFaeSide.acctList) {
      let foundListItem = this.faeSide.acctList.find(element => element.id == listItem.id);
      if (foundListItem === undefined) {
        this.faeSide.acctList.push(listItem);
      }
    }
    this.faeSide.sortAcctList();
    this.faeSide.reindexAcctList();
    this.candidateFaeSide = null;
  }
  cancel(): void {
    this.candidateFaeSide = null;
  }

  onRowEnter(event, listItem) {
    event.target.children[2].classList.toggle('aaRowDataHover', true);
  }
  onRowLeave(event, listItem) {
    event.target.children[2].classList.toggle('aaRowDataHover', false);
  }
  onTitleFocus(event, listItem) {
    this.candidateSelectedAcct = listItem;
  }
  onRowOpsOpen(event, listItem) {
    this.rowOpsBoundingClientRect = (event.target as Element).parentElement.getBoundingClientRect();
    this.rowOpsMenuModal.style.display = "block";
  }
  onRowOpsCancel(event) {
    if (event.target == this.rowOpsMenuModal) {
      this.rowOpsMenuModal.style.display = "none";
    }
  }
  acctNew(event, listItem) {
    this.mutationObserver.observe(this.divGridRows, {subtree: false, childList: true});
    let insertionIndex: number;
    let newAcct: Acct;
    if (listItem) {
      insertionIndex = listItem.intraSideIndex;
    }
    else {
      insertionIndex = this.candidateFaeSide.acctList.length;
    }
    newAcct = new Acct(
      /*id*/ `acct${this.app.data.nextAcctId}`,
      /*parentFaeSide*/ this.candidateFaeSide,
      /*intraSideIndex*/ 0,
      /*title*/ "",
      /*normalBalance*/ 1);
    (this.mutationObserver as any).inputId = `${newAcct.id}-title`; // cast as "any" to programmatically add property
    this.candidateFaeSide.acctList.splice(insertionIndex, 0, newAcct);
    this.candidateFaeSide.reindexAcctList();
    this.candidateSelectedAcct = newAcct;
  }
  annotationNew(event, listItem) {
    this.mutationObserver.observe(this.divGridRows, {subtree: false, childList: true});
    let insertionIndex: number;
    let newAnnotation: Annotation;
    if (listItem) {
      insertionIndex = listItem.intraSideIndex;
    }
    else {
      insertionIndex = this.candidateFaeSide.acctList.length;
    }
    newAnnotation = new Annotation(
      /*id*/ `anno${this.app.data.nextAcctId}`,
      /*parentFaeSide*/ this.candidateFaeSide,
      /*intraSideIndex*/ 0,
      /*annoText*/ "");
    (this.mutationObserver as any).inputId = `${newAnnotation.id}-annoText`; // cast as "any" to programmatically add property
    this.candidateFaeSide.acctList.splice(insertionIndex, 0, newAnnotation);
    this.candidateFaeSide.reindexAcctList();
  }
  listItemDelete(event, listItem) {
    let removalIndex = listItem.intraSideIndex;
    this.candidateFaeSide.acctList.splice(removalIndex, 1);
    this.candidateFaeSide.reindexAcctList();
  }

  onMutation(mutationsList, mutationObserver) {
    console.log("************ mutationsList *********************");
    console.log(mutationsList);
    let element = document.getElementById(mutationObserver.inputId);
    if (element) {
      (element as HTMLElement).focus();
    }
    else {
      console.log("element not found");
    }
    mutationObserver.disconnect();
  }
}
