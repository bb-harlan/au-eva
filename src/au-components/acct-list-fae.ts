import {customElement, inject, bindable} from 'aurelia-framework';
import {Eva} from '../eva';
import {AcctList} from '../models/acct-list';
import {AcctMover} from '../models/acct-mover';
import {Acct, Annotation} from '../models/acct';

@customElement('acct-list-fae')
export class AcctListFae {
  eva: Eva = Eva.getInstance();
  @bindable equationSide: string;
  sideHeading: string;
  sideAcctList: AcctList;
  moverDialog;
  moverList: Array<AcctMover>;
  mouseIsDown: boolean = false;
  swapListItem: AcctMover = null;



  attached() {
    /*
    The au-equation-side custom attribute is used to set this.equationSide to
    either "A" or "E" which in turn is used by this method to set the properties...
      sideHeading
      sideAcctList

    ...as follows.
    */
    switch (this.equationSide) {
      case this.eva.SIDE_ASSETS:
        this.sideHeading = "Asset accounts";
        this.sideAcctList = this.eva.assetList;
        break;
      case this.eva.SIDE_EQUITIES:
        this.sideHeading = "Equity accounts";
        this.sideAcctList = this.eva.equityList;
        break;
      default:
        this.sideHeading = "[Logic fault]";
    }
    // this.sideAcctList: AcctList = [];
    /*
    In module-fae.html this custom element acct-list-fae coded as follows:

      <acct-list-fae equation-side="${eva.SIDE_ASSETS}" ...></acct-list-fae>

    and

       <acct-list-fae equation-side="${eva.SIDE_EQUITIES}" ...></acct-list-fae>
    */

    /*
    * Position modal content
    */
    this.moverDialog = document.getElementById(`moverDialog${this.equationSide}`);
    let positioningElement = document.getElementById(`moverAnchor-${this.equationSide}`);
    let moverDialogContent = document.getElementById(`moverDialogContent${this.equationSide}`);
    moverDialogContent.style.position = "absolute";
    moverDialogContent.style.top = `${positioningElement.offsetTop}px`;
    moverDialogContent.style.left = `${positioningElement.offsetLeft}px`;
  }

  /*
   * In the following two mouesenter/mouseleave handlers, the end-of-list
   * row passes a null value as listItem to signal that the call is from the
   * end-of-list row from which there is no listItem to navigation to. This method
   * uses that signal to know not to make the nav button visible--
   * that is, it is to remain hidden. The nav button is present but hidden
   * in the end-of-list row to make the horizontal alignment of the remaining columns correct.
   *
   * event.target.children[0] is the menu buttom.
   * event.target.children[1] is the nav buttom.
   */

  onRowEnter(event, listItem) {
    if (listItem) {
      event.target.children[0].children[0].style.visibility = 'visible';
      event.target.children[1].children[0].style.visibility = 'visible';
    }
    else {
      event.target.children[0].children[0].style.visibility = 'visible';
    }
    event.target.children[5].classList.toggle('aaRowHover', true);
  }

  onRowLeave(event, listItem) {
    if (listItem) {
      event.target.children[0].children[0].style.visibility = 'hidden';
      event.target.children[1].children[0].style.visibility = 'hidden';
    }
    else {
      event.target.children[0].children[0].style.visibility = 'hidden';
    }
    event.target.children[5].classList.toggle('aaRowHover', false);
  }

  onMenuClick(event, listItem) {
    alert('"Row ops menu" not yet implemented.');
  }

  onGoAcct(event, listItem) {
    this.eva.selectedBchg = null;
    this.eva.selectedAcct = listItem;
    this.eva.selectedModule = this.eva.MODULE_ACCT;
  }

  onMoverOpen(event) {
    this.moverList = [];
    for (let listItem of this.sideAcctList) {
      if (listItem instanceof Acct) {
        this.moverList.push(new AcctMover(listItem.id, "Acct", listItem.title, this.eva.formattedCurrency(listItem.bchgList.endingBalance)));
        console.log(`bchgList.endingBalance: ${listItem.bchgList.endingBalance}; formatted: ${this.eva.formattedCurrency(listItem.bchgList.endingBalance)}`)
      }
      if (listItem instanceof Annotation) {
        this.moverList.push(new AcctMover(listItem.id, "Annotation", listItem.annoText, ""));
      }
    }
    this.moverDialog.style.display = "block";
  }
  onMoverDone(event) {
    for (let i = 0; i < this.moverList.length; i++) {
      for (let listItem of this.sideAcctList) {
        if (listItem.id == this.moverList[i].id) {
          listItem.intraSideSorter = i;
          break;
        }
      }
    }
    this.sideAcctList.refresh();
    this.swapListItem = null;
    this.moverList = [];
    this.moverDialog.style.display = "none";
  }
  onMoverCancel(event) {
    this.swapListItem = null;
    this.moverList = [];
    this.moverDialog.style.display = "none";
  }
  onMoverMouseDown(event) {
    event.currentTarget.classList.toggle('aaRowHover', false);
    event.currentTarget.classList.toggle('aaDragging', true);
    this.mouseIsDown = true;
  }
  onMoverMouseUp(event) {
    event.currentTarget.classList.toggle('aaDragging', false);
    event.currentTarget.classList.toggle('aaRowHover', true);
    this.mouseIsDown = false;
    this.swapListItem = null;
  }
  onMoverMouseEnter(event, listItem) {
    if (this.mouseIsDown) {
      event.currentTarget.classList.toggle('aaDragging', true);
      let saveId = listItem.id;
      let saveSourceClass = listItem.sourceClass;
      let saveDisplayText = listItem.displayText;
      let saveEndingBalance = listItem.endingBalance;
      listItem.id = this.swapListItem.id;
      listItem.sourceClass = this.swapListItem.sourceClass;
      listItem.displayText = this.swapListItem.displayText;
      listItem.endingBalance = this.swapListItem.endingBalance;
      this.swapListItem.id = saveId;
      this.swapListItem.sourceClass = saveSourceClass;
      this.swapListItem.displayText = saveDisplayText;
      this.swapListItem.endingBalance = saveEndingBalance;
    }
    else {
      event.currentTarget.classList.toggle('aaRowHover', true);
    }
  }
  onMoverMouseLeave(event, listItem) {
    if (this.mouseIsDown) {
      this.swapListItem = listItem;
      event.currentTarget.classList.toggle('aaDragging', false);
    }
    else {
      event.currentTarget.classList.toggle('aaRowHover', false);
    }
  }
}
