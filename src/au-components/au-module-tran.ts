import {customElement} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {App} from "app";
import {Bchg} from 'app-data/models/bchg';
import {Tran} from 'app-data/models/tran';
import {AuPopupBchgMover} from "au-components/au-popup-bchg-mover";
import {Data} from "../app-data/data";

@customElement('au-module-tran')
@inject(App)
export class AuModuleTran {
  clonedTran: Tran;


  // @injected item(s)
  app: App;

  /*=====================================================
   *  references
   *=====================================================
   */
  proxyForMoverPositionTop: HTMLElement; // <div element.ref="proxyForMoverPositionTop" ...
  proxyForMoverPositionLeft: HTMLElement; // <div element.ref="proxyForMoverPositionLeft" ...
  viewmodelPopupBchgMover; // <au-popup-bchg-mover view-model.ref="viewmodelPopupBchgMover></au-popup-bchg-mover>
  constructor(app) {
    this.app = app;
  }

  onGoJrnl(event) {
    this.app.selectedBchg = null;
    this.app.selectedModule = this.app.MODULE_JRNL;
  }
  onGoUp(event) {
    let selectedTranId = this.app.selectedTran.id;
    let tranList = this.app.selectedTran.parentJrnl.tranList;
    let listIndex = tranList.findIndex(function (tran) {
      return tran.id === selectedTranId;
    });
    if (listIndex > 0) {
      this.app.selectedBchg = null;
      this.app.selectedTran = tranList[listIndex - 1];
    } else {
      alert('Reached beginning of list.');
    }
  }
  onGoDown(event) {
    let selectedTranId = this.app.selectedTran.id;
    let tranList = this.app.selectedTran.parentJrnl.tranList;
    let listIndex = tranList.findIndex(function (tran) {
      return tran.id === selectedTranId;
    });
    if (listIndex < tranList.length - 1) {
      this.app.selectedBchg = null;
      this.app.selectedTran = tranList[listIndex + 1];
    } else {
      alert('Reached end of list.');
    }
  }
  showBchgDetail(event, bchg) {
    this.app.selectedBchg = bchg;
    this.app.selectedAcct = bchg.targetAcct;
    this.app.selectedModule = this.app.MODULE_BCHG;
  }
  showBchgInAcct(event, bchg) {
    this.app.selectedBchg = bchg;
    this.app.selectedAcct = bchg.targetAcct;
    this.app.selectedModule = this.app.MODULE_ACCT;
  }
  onRowEnter(event, listItem) {
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', true);
    if (true || listItem) {
      event.target.children[2].classList.toggle('aaRowDataHover', true);
    }
  }
  onRowLeave(event, listItem) {
    event.target.children[0].children[0].classList.toggle('aaRowOpsHover', false);
    if (true || listItem) {
      event.target.children[2].classList.toggle('aaRowDataHover', false);
    }
  }
  rowNew(event, listItem) {
    alert(`Insert before "${listItem ? listItem.targetAcct.title : null}" not yet implemented.`);
  }
  rowDelete(event, listItem) {
    alert("Not yet imolemented");
  }
  tranNew(event) {
    alert('Not yet implemented.');
  }
  tranEdit(event) {
    this.clonedTran = this.app.selectedTran.clone();
    this.app.selectedModuleMode = this.app.MODULE_MODE_EDITING;
  }
  tranDelete(event) {
    alert('Not yet implemented.');
  }

  saveEdits(event) {
    this.app.selectedTran.refresh();
    this.app.selectedModuleMode = this.app.MODULE_MODE_NAVIGATING;
  }
  cancelEdits(event) {
    this.app.selectedModuleMode = this.app.MODULE_MODE_NAVIGATING;
  }

  onPickAcct(event, bchg) {
    alert(`bchg.id: ${bchg.id} - "Acct picker dialog" not yet implemented.`);
  }

  onMenuClick(event, bchg) {
    alert(`bchg.id: ${bchg ? bchg.id : "End-of-list"} - "Row ops menu" not yet implemented.`);
  }

  onMoverDialogOpen(event) {
    alert('"Rearrange list sequence" not yet implemented.');
  }

  onEditRows(event) {
    alert('Not yet implemented.')
  }

  attached() {
    let hyperLink: Element = document.getElementById('scrollToSelected');
    if (this.app.selectedBchg) {
      hyperLink.innerHTML = `#${this.app.selectedBchg.id}`;
      hyperLink.setAttribute("href", `#${this.app.selectedBchg.id}`);
      // hyperLink.click();
      document.getElementById('scrollToSelected').click();
    } else {
      hyperLink.innerHTML = "#";
    }
  }

  acctPicked(message) {
    console.log(message);
  }
  SetBchgAmtToBalanceTran(bchg: Bchg) {
    let totalChangesAssets: number = 0.00;
    let totalChangesEquities: number = 0.00;
    // compute totalChangesAssets, totalChangesEquities for all other elements of bchgList
    for (let otherBchg of bchg.sourceTran.bchgList) {
      if (otherBchg.id == bchg.id) {
        continue; // skip this otherBchg
      }
      switch (bchg.targetAcct.parentFaeSide.id) {
        case 'Assets':
          totalChangesAssets += bchg.amt;
          break;
        case 'Equities':
          totalChangesEquities += bchg.amt;
          break;
        default:
          throw new Error(`acct.parentFaeSide.id has invalid value: ${bchg.targetAcct.parentFaeSide.id}.`);
      }
    }
    // compute bchg.amt for balancing the source tran
    switch (bchg.targetAcct.parentFaeSide.id) {
      case 'Assets':
        bchg.amt = totalChangesEquities - totalChangesAssets;
        totalChangesAssets += bchg.amt;
        break;
      case 'Equities':
        bchg.amt = totalChangesAssets - totalChangesEquities;
        totalChangesEquities += bchg.amt;
        break;
      default:
        throw new Error(`acct.parentFaeSide.id has invalid value: ${bchg.targetAcct.parentFaeSide.id}.`);
    }
    bchg.sourceTran.totalChangesAssets = totalChangesAssets;
    bchg.sourceTran.totalChangesEquities = totalChangesEquities;
  }

}

