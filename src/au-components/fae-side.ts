import {customElement, bindable} from 'aurelia-framework';
import {Eva} from '../eva';
import {AcctList} from '../models/acct-list';
import {Acct, Annotation} from '../models/acct';

@customElement('au-fae-side')
export class FaeSide {
  //
  eva: Eva = Eva.getInstance();
  @bindable equationSide: string;
  // equationSide: string;
  sideAcctList: AcctList;
  bindMoverDialog = true;
  moverDialogModal;
  moverDialogContent;
  moverDialogPositionElement;
  mouseIsDown: boolean = false;
  selectedMoverRow: Element = null;
  mouseEventCnt: number = 1;

  attached() {
    /*
    The au-equation-side custom attribute is used to set this.equationSide to
    either "A" or "E" which in turn is used by this method to set the property...

      sideAcctList

    ...as follows.
    */
    // console.log(`this.equationSide: "${this.equationSide}";`);
    switch (this.equationSide) {
      case this.eva.SIDE_ASSETS:
        this.sideAcctList = this.eva.assetList;
        break;
      case this.eva.SIDE_EQUITIES:
        this.sideAcctList = this.eva.equityList;
        break;
      default:
        this.sideAcctList = null;
    }
    console.log(this.sideAcctList);
    /*
    * Set references to
    *     moverDialogModal,
    *     moverDialogContent,
    *     moverDialogPositionElement.
    */
    this.moverDialogModal = document.getElementById(`moverDialogModal${this.equationSide}`);
    this.moverDialogContent = document.getElementById(`moverDialogContent${this.equationSide}`);
    this.moverDialogPositionElement = document.getElementById(`moverAnchor-${this.equationSide}`);
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

  onMoverDialogOpen(event) {
    let moverRowList = document.getElementById(`${this.equationSide}-mover-row-list`);
    // this.bindMoverDialog = true;
    this.moverDialogModal.style.display = "block";
  }

  onMoverDialogDone(event) {
    let moverRowList = document.getElementById(`${this.equationSide}-mover-row-list`);
    for (let i = 0; i < moverRowList.childElementCount; i++) {
      let moverAcctId = moverRowList.children[i].getAttribute("data-acct-id");
      for (let acctItem of this.sideAcctList) {
        if (acctItem.id == moverAcctId) {
          acctItem.intraSideSorter = i;
          break;
        }
      }
    }
    this.sideAcctList.refresh();
    this.moverDialogModal.style.display = "none";
    // this.bindMoverDialog = false;
  }

  onMoverDialogCancel(event) {
    this.moverDialogModal.style.display = "none";
    this.bindMoverDialog = false;
  }

  onMoveRowMouseDown(event) {
    let targetRow: Element = event.currentTarget as Element;
    // this.logMouseEvent("mouseDown", this.selectedMoverRow, targetRow);
    targetRow.children[0].classList.toggle('aaRowHover', false);
    targetRow.children[0].classList.toggle('aaDragging', true);
    this.mouseIsDown = true;
    this.selectedMoverRow = event.currentTarget;
  }

  onMoveRowMouseUp(event) {
    let targetRow = event.currentTarget as Element;
    // this.logMouseEvent("mouseUp", this.selectedMoverRow, targetRow);
    targetRow.children[0].classList.toggle('aaDragging', false);
    targetRow.children[0].classList.toggle('aaRowHover', true);
    this.mouseIsDown = false;
    this.selectedMoverRow = null;
  }

  onMoveRowMouseLeave(event, listItem) {
    if (!this.mouseIsDown) {
      let targetRow = event.currentTarget as Element;
      targetRow.children[0].classList.toggle('aaRowHover', false);
    }
  }

  onMoveRowMouseEnter(event, listItem) {
    if (!this.mouseIsDown) {
      let targetRow = event.currentTarget as Element;
      targetRow.children[0].classList.toggle('aaRowHover', true);
    }
  }

  onMouseMove(event) {
    if (!this.mouseIsDown || !this.selectedMoverRow) {
      return;
    }
    let mouseY = event.clientY;
    let moverRowList = event.currentTarget;
    let previousSibling = this.selectedMoverRow.previousElementSibling;
    if (previousSibling && mouseY < this.selectedMoverRow.getBoundingClientRect().top) {
      moverRowList.insertBefore(this.selectedMoverRow, previousSibling);
      return;
    }
    let nextSibling = this.selectedMoverRow.nextElementSibling;
    if (nextSibling && mouseY >= nextSibling.getBoundingClientRect().top) {
      moverRowList.insertBefore(nextSibling, this.selectedMoverRow);
      return;
    }
  }

  elementY(element) {
    return element.getBoundingClientRect().top;
  };

  logMouseEvent(mouseEvent: string, selectedMoverRow: Element, targetRow: Element) {
    // console.log(`${this.mouseEventCnt++}. mouseEvent: ${mouseEvent}; selectedMoverRow: ${selectedMoverRow ? selectedMoverRow.children[0].innerHTML : "null"}; targetRow: ${targetRow.children[0].innerHTML};`);
  }
}
