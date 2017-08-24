import {customElement, inject, bindable} from 'aurelia-framework';
import {Eva} from '../eva';
import {AcctList} from '../models/acct-list';
import {Acct, Annotation} from '../models/acct';

@customElement('acct-list-fae')
export class AcctListFae {
  eva: Eva = Eva.getInstance();
  @bindable equationSide: string;
  sideHeading: string;
  sideAcctList: AcctList;
  moverDialog;
  mouseIsDown: boolean = false;
  sourceRow: Element = null;
  mouseEventCnt: number = 1;

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
    this.moverDialog.style.display = "block";
  }

  onMoverDone(event) {
    /*
        for (let i = 0; i < this.moverList.length; i++) {
          for (let listItem of this.sideAcctList) {
            if (listItem.id == this.moverList[i].id) {
              listItem.intraSideSorter = i;
              break;
            }
          }
        }
    */
    let acctMoverRows = document.getElementById(`${this.equationSide}-acct-mover-rows`);
    console.log(acctMoverRows);
    for (let i = 0; i < acctMoverRows.childElementCount; i++) {
      let moverRowId = acctMoverRows.children[i].children[0].children[0].innerHTML.slice(15);
      for (let listItem of this.sideAcctList) {
        console.log(`moverRowId: "${moverRowId}"; listItem.id: "${listItem.id}"`);
        if (listItem.id == moverRowId) {
          listItem.intraSideSorter = i;
          break;
        }
      }
      console.log("-------------------------------------------------------");
    }
    this.sideAcctList.refresh();
    this.sourceRow = null;
    this.moverDialog.style.display = "none";
  }

  onMoverCancel(event) {
    this.sourceRow = null;
    this.moverDialog.style.display = "none";
  }

  onMoverMouseDown(event) {
    let targetRow: Element = event.currentTarget as Element;
    targetRow.children[0].classList.toggle('aaRowHover', false);
    targetRow.children[0].classList.toggle('aaDragging', true);
    this.mouseIsDown = true;
  }

  onMoverMouseUp(event) {
    let targetRow: Element = event.currentTarget as Element;
    targetRow.children[0].classList.toggle('aaDragging', false);
    targetRow.children[0].classList.toggle('aaRowHover', true);
    this.mouseIsDown = false;
    this.sourceRow = null;
  }

  onMoverMouseLeave(event, listItem) {
    let targetRow: Element = event.currentTarget as Element;
    if (this.mouseIsDown) {
      targetRow.children[0].classList.toggle('aaDragging', false);
      this.sourceRow = targetRow;
    }
    else {
      targetRow.children[0].classList.toggle('aaRowHover', false);
    }
  }

  onMoverMouseEnter(event, listItem) {
    let targetRow: Element = event.currentTarget as Element;
    if (this.mouseIsDown) {
      let targetRowDataCells = targetRow.children[0];
      let exitedRowDataCells = this.sourceRow.children[0];
      //
      let currentId = targetRowDataCells.children[0].innerHTML;
      let currentClass = targetRowDataCells.children[1].innerHTML;
      let currentTitle = targetRowDataCells.children[2].innerHTML;
      let currentEndingBalance = targetRowDataCells.children[4].innerHTML;
      //
      targetRowDataCells.children[0].innerHTML = exitedRowDataCells.children[0].innerHTML; // id
      targetRowDataCells.children[1].innerHTML = exitedRowDataCells.children[1].innerHTML; // class
      targetRowDataCells.children[2].innerHTML = exitedRowDataCells.children[2].innerHTML; // title
      targetRowDataCells.children[4].innerHTML = exitedRowDataCells.children[4].innerHTML; // endingBalance
      switch (targetRowDataCells.children[1].innerHTML) {
        case "Acct":
          targetRowDataCells.children[2].classList.toggle('aaCellAnnoTitle', false)
          targetRowDataCells.children[2].classList.toggle('aaCellAcctTitle', true)
          break;
        case "Annotation":
          targetRowDataCells.children[2].classList.toggle('aaCellAcctTitle', false)
          targetRowDataCells.children[2].classList.toggle('aaCellAnnoTitle', true)
          break;
      }
      exitedRowDataCells.children[0].innerHTML = currentId;
      exitedRowDataCells.children[1].innerHTML = currentClass;
      exitedRowDataCells.children[2].innerHTML = currentTitle;
      exitedRowDataCells.children[4].innerHTML = currentEndingBalance;
      switch (exitedRowDataCells.children[1].innerHTML) {
        case "Acct":
          exitedRowDataCells.children[2].classList.toggle('aaCellAnnoTitle', false)
          exitedRowDataCells.children[2].classList.toggle('aaCellAcctTitle', true)
          break;
        case "Annotation":
          exitedRowDataCells.children[2].classList.toggle('aaCellAcctTitle', false)
          exitedRowDataCells.children[2].classList.toggle('aaCellAnnoTitle', true)
          break;
      }
      targetRow.children[0].classList.toggle('aaDragging', true);
    }
    else {
      targetRow.children[0].classList.toggle('aaRowHover', true);
    }
  }

  onMoverOpen2(event) {
    this.moverDialog.style.display = "block";
  }

  onMoverDone2(event) {
    /*
        for (let i = 0; i < this.moverList.length; i++) {
          for (let listItem of this.sideAcctList) {
            if (listItem.id == this.moverList[i].id) {
              listItem.intraSideSorter = i;
              break;
            }
          }
        }
    */
    let acctMoverRows = document.getElementById(`${this.equationSide}-acct-mover-rows`);
    console.log(acctMoverRows);
    for (let i = 0; i < acctMoverRows.childElementCount; i++) {
      let moverRowId = acctMoverRows.children[i].children[0].children[0].innerHTML.slice(15);
      for (let listItem of this.sideAcctList) {
        console.log(`moverRowId: "${moverRowId}"; listItem.id: "${listItem.id}"`);
        if (listItem.id == moverRowId) {
          listItem.intraSideSorter = i;
          break;
        }
      }
      console.log("-------------------------------------------------------");
    }
    this.sideAcctList.refresh();
    this.sourceRow = null;
    this.moverDialog.style.display = "none";
  }

  onMoverCancel2(event) {
    this.sourceRow = null;
    this.moverDialog.style.display = "none";
  }

  onMoverMouseDown2(event) {
    let targetRow: Element = event.currentTarget as Element;
    this.logMouseEvent("mouseDown", this.sourceRow, targetRow);
    targetRow.children[1].classList.toggle('aaRowHover', false);
    targetRow.children[1].classList.toggle('aaDragging', true);
    this.mouseIsDown = true;
  }

  onMoverMouseUp2(event) {
    let targetRow: Element = event.currentTarget as Element;
    this.logMouseEvent("mouseUp", this.sourceRow, targetRow);
    targetRow.children[1].classList.toggle('aaDragging', false);
    targetRow.children[1].classList.toggle('aaRowHover', true);
    this.mouseIsDown = false;
    this.sourceRow = null;
  }

  onMoverMouseLeave2(event, listItem) {
    let targetRow: Element = event.currentTarget as Element;
    this.logMouseEvent("mouseLeave", this.sourceRow, targetRow);
    if (this.mouseIsDown) {
      targetRow.children[1].classList.toggle('aaDragging', false);
      this.sourceRow = targetRow;
    }
    else {
      targetRow.children[1].classList.toggle('aaRowHover', false);
    }
  }

  onMoverMouseEnter2(event, listItem) {
    let targetRow: Element = event.currentTarget as Element;
    this.logMouseEvent("mouseEnter", this.sourceRow, targetRow);
    let parentList: Element = targetRow.parentElement;
    if (this.mouseIsDown && this.sourceRow) {
      this.sourceRow.classList.toggle('aaDragging', false);
      targetRow.children[1].classList.toggle('aaRowHover', false);
      targetRow.children[1].classList.toggle('aaDragging', true);
      let compareDocumentPositionResult = targetRow.compareDocumentPosition(this.sourceRow);
      switch (compareDocumentPositionResult) {
        case targetRow.DOCUMENT_POSITION_PRECEDING:
          // console.log(`targetRow.DOCUMENT_POSITION_PRECEDING`);
          parentList.insertBefore(targetRow, this.sourceRow);
          break;
        case targetRow.DOCUMENT_POSITION_FOLLOWING:
          // console.log(`targetRow.DOCUMENT_POSITION_FOLLOWING`);
          parentList.insertBefore(this.sourceRow, targetRow);
          break;
        default:
          console.log('logic fault! compareDocumentPositionResult: ${compareDocumentPositionResult}');
      }
      while (true) {
        let compareDocumentPositionResult2 = targetRow.compareDocumentPosition(this.sourceRow);
        console.log(`compareDocumentPositionResult: ${compareDocumentPositionResult}; compareDocumentPositionResult2: ${compareDocumentPositionResult2};`);
        if (compareDocumentPositionResult2 !== compareDocumentPositionResult) {
          break;
        }
      }
    }
    else {
      targetRow.children[1].classList.toggle('aaRowHover', true);
    }
  }

  onSwapRows(event) {
    console.log(`onSwapRows ${this.mouseEventCnt++}`);
    let moverRowList = document.getElementById(`${this.equationSide}-acct-mover-rows`)
    moverRowList.insertBefore(moverRowList.children[1], moverRowList.children[0]);
  }

  onMouseMove(event) {
    let moverRowList = event.currentTarget;
    let mouseFeedback = document.getElementById(`${this.equationSide}-CoorY`);
    mouseFeedback.innerHTML = `mouseY: ${event.clientY}; moverRowListY: ${this.elementY(moverRowList)};`;
    for (let moverRow of moverRowList.children) {
      console.log(`moverRow.id: ${moverRow.children[0].innerHTML}; moverRowY: ${this.elementY(moverRow)};`);
    }
    console.log("=================================================");
  }

  elementY(element) {
    return element.getBoundingClientRect().top;
    // let offsetTop = 0;
    // do {
    //   if (!isNaN(element.offsetTop))
    //     offsetTop += element.offsetTop;
    // } while (element = element.offsetParent);
    // return offsetTop;
  };

  logMouseEvent(mouseEvent: string, sourceRow: Element, targetRow: Element) {
    return;
    // console.log(`${this.mouseEventCnt++}. mouseEvent: ${mouseEvent}; sourceRow: ${sourceRow ? sourceRow.children[0].innerHTML : "null"}; targetRow: ${targetRow.children[0].innerHTML};`);
  }
}
