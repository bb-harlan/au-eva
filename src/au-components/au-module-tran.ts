import {customElement} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {App} from "app";
import {Bchg} from 'app-data/models/bchg';
import {Tran} from 'app-data/models/tran';
import {AuPopupBchgMover} from "au-components/au-popup-bchg-mover";

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
    /*alert('Not yet implemented.');*/
    this.clonedTran = new Tran(
      /*id*/ this.app.selectedTran.id,
      /*parentJrnl*/ this.app.selectedTran.parentJrnl,
      /*date*/ this.app.selectedTran.date,
      /*intraDateSorter*/ this.app.selectedTran.intraDateSorter);
    this.clonedTran.totalChangesAssets = this.app.selectedTran.totalChangesAssets;
    this.clonedTran.totalChangesEquities = this.app.selectedTran.totalChangesEquities;
    this.clonedTran.bchgList = [];
    let clonedBchg: Bchg;
    for (let bchg of this.app.selectedTran.bchgList) {
      clonedBchg = new Bchg(
        /*id*/ bchg.id,
        /*sourceTran*/ this.clonedTran,
        /*targetAcct*/ bchg.targetAcct,
        /*intraTranSorter*/ bchg.intraTranSorter,
        /*desc*/ bchg.desc,
        /*amt*/ bchg.amt);
      this.clonedTran.bchgList.push(clonedBchg);
    }

    this.app.selectedModuleMode = this.app.MODULE_MODE_EDITING;
  }
  tranDelete(event) {
    alert('Not yet implemented.');
  }

  saveEdits(event) {
    this.app.selectedTran.computeBalancingBchgAmt(this.app.data.SIDE_ID_ASSETS, this.app.data.SIDE_ID_EQUITIES);
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
}

