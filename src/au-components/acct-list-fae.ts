import {customElement, inject} from 'aurelia-framework';
import {Eva} from '../eva';

@customElement('acct-list-fae')
export class AcctListFae {
  eva: Eva = Eva.getInstance();
  equationSide: string;
  sideHeading: string;
  sideAcctList;
  AcctList;
  /*
   constructor() {
   /!*
   The au-equation-side custom attribute is used to set this.equationSide to
   either "A" or "E" which in turn is used by the this.dataProvider getter
   to return either this.appModel.assetList or this.appModel.equitiesList, respectively.

   the custom element acct-list-fae and its custom attribute equation-side
   are used in app.html like so:

   <acct-list-fae au-equation-side=eva.SIDE_ASSETS></acct-list-fae>
   and
   <acct-list-fae au-equation-side=this.eva.SIDE_EQUITIES></acct-list-fae>

   For details see equation-side.ts
   *!/
   }
   */

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

  onArrangeRows(event) {
    alert('"Rearrange list sequence" not yet implemented.');
  }

  onGoAcct(event, listItem) {
    this.eva.selectedBchg = null;
    this.eva.selectedAcct = listItem;
    this.eva.selectedModule = this.eva.MODULE_ACCT;
  }

  attached() {
  }

  detached() {
  }

  formattedCurrency(currency) {
    return Intl.NumberFormat("en-US", {style: "decimal", maximumFractionDigits: 2}).format(currency);
    // return numeral(currency).format('0,0.00');
  }
}




