import {bindable} from 'aurelia-framework';
import {Bchg} from './models/bchg';
import {AcctList} from './models/acct-list';
import {Acct, Annotation} from './models/acct';
import {TranList} from './models/tran-list';
import {Tran} from './models/tran';
export class Eva {
  /*
   * ===================================================
   *   This a class is deigned to be a singleton object.
   * ===================================================
   */
  private static _instance: Eva;

  static getInstance(): Eva {
    if (!this._instance) {
      this._instance = new Eva();
    }
    return this._instance;
  }

  /*
   public static getInstance():Eva {
   return Eva._instance || (Eva._instance = new Eva());
   };
   */
  /*==========================================================
   * constants simulated by getters
   *
   * */
  get SIDE_ASSETS(): string {
    return 'A';
  };

  get SIDE_EQUITIES(): string {
    return 'E';
  };

  get MODULE_FAE(): string {
    return "fae";
  };

  get MODULE_ACCT(): string {
    return "acct";
  };

  get MODULE_BCHG(): string {
    return "bchg";
  };

  get MODULE_TRAN(): string {
    return "tran";
  };

  get MODULE_JRNL(): string {
    return "jrnl";
  };

  get END_OF_LIST(): string {
    return "- End of list -";
  };

  get GRIDLINE_COLOR(): string {
    return "#ccc";
  };

  get GRIDLINE_THIN(): string {
    return "1px";
  };

  // get GRIDLINE_THICK():string {return "5px";};
  get GRIDLINE_THICK(): string {
    return "2px"
  };

  get TOOLBAR_BACKGROUND_COLOR(): string {
    return "#ddd";
  };

  // get ROW_SELECTED_CHAR():string {return String.fromCharCode(0xf005);} // FontAwesome fa-star
  get ROW_SELECTED_CHAR(): string {
    return String.fromCharCode(0xf111);
  } // FontAwesome fa-circle
  // get ROW_SELECTED_CHAR():string {return String.fromCharCode(0xf192);} // FontAwesome fa-dot-circle
  equSideText(equSideAbbr: string): string {
    if (equSideAbbr == this.SIDE_ASSETS) {
      return 'Assets';
    }
    else if (equSideAbbr == this.SIDE_EQUITIES) {
      return 'Equities';
    }
    else {
      return '?';
    }
  }

  /*=====================================================
   *  view state info
   */
  selectedModule: string = this.MODULE_FAE;
  selectedAcctList: AcctList = null;
  selectedAcct: Acct | Annotation = null;
  selectedTran: Tran = null;
  selectedBchg: Bchg = null;
  selectedEquSide: string = null;
  showingModuleBchg: boolean = true;
  isEditing: boolean = false;
  //
  /*==========================================================
   *  data model stuff
   *
   * */
  assetList: AcctList = new AcctList(this.SIDE_ASSETS);
  equityList: AcctList = new AcctList(this.SIDE_EQUITIES);
  tranList: TranList = new TranList();
  private _nextSorter: number = 1;
  get nextSorter(): number {
    return this._nextSorter++;
  }

  /*
   private _nextId:number = 1;
   get nextId():number {
   return this._nextId++;
   }
   */
  private _nextAcctId: number = 1;
  get nextAcctId(): number {
    return this._nextAcctId++;
  }

  private _nextTranId: number = 1;
  get nextTranId(): number {
    return this._nextTranId++;
  }

  private _nextBchgId: number = 1;
  get nextBchgId(): number {
    return this._nextBchgId++;
  }

  formattedCurrency(currencyAmount: number):string {
    return Intl.NumberFormat("en-US",
      {style: "decimal",
        minimumIntegerDigits: 1,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2}).format(currencyAmount);
    // return numeral(currency).format('0,0.00');
  }

  dataSource = "eva.currencyAmount1";
  currencyAmount1: number = 1234.56;
  @bindable currencyAmount2: number = 789.12;
  generateTestData() {
    /*
     Create some accounts**********************************************************
     */
    let annotation: Annotation = new Annotation(`anno-${this.nextAcctId}`, this.SIDE_ASSETS, 0, "Current assets (an annotation row)");
    this.assetList.push(annotation);
    let acctId = '';
    for (let intraSideSorter = 15; intraSideSorter > 0; intraSideSorter--) {
      acctId = `A${this.nextAcctId}`;
      let assetAcct = new Acct(acctId, this.SIDE_ASSETS, intraSideSorter, `<test data account title: equation side ${this.SIDE_ASSETS}, acct #${acctId}>`, 1);
      this.assetList.push(assetAcct);
      acctId = `A${this.nextAcctId}`;
      let equityAcct = new Acct(acctId, this.SIDE_EQUITIES, intraSideSorter, `(test data account title, equation side ${this.SIDE_EQUITIES}, acct #${acctId})`, 1);
      this.equityList.push(equityAcct);
    }
    console.log('Created some accounts (order scrambled from normal order)');
    /*
     Create some transactions**********************************************************
     */
    let bchg1: Bchg;
    let bchg2: Bchg;
    let bchgId: string;
    for (let i = 1; i <= 50; ++i) {
      let tranDate: string = (i % 2 ? "2016/02/13" : "2016/02/12");
      let tran = new Tran(`T${this.nextTranId}`, tranDate, this.nextSorter);
      this.tranList.push(tran);
      let filteredAssetAcctList = this.assetList.filter((listItem) => listItem instanceof Acct);
      let filteredEquityAcctList = this.equityList.filter((listItem) => listItem instanceof Acct);
      let acctList = filteredAssetAcctList.concat(filteredEquityAcctList);
      let randomAcct2 = acctList[(Math.random() * (acctList.length - 1)).toFixed(0)];
      // bchgId = `bchg-${this.nextBchgId}`;
      let bchg2 = new Bchg(
        `B${this.nextBchgId}`,
        randomAcct2 as Acct,
        tran,
        0,
        `<change desc: bchg #B${this.nextBchgId}; tran #${tran.id}; acct #${randomAcct2.id}; >`,
        Math.round(Math.random() * 1000000)/100);
      tran.bchgList.push(bchg2);
      (randomAcct2 as Acct).bchgList.push(bchg2);
      let randomAcct1 = acctList[(Math.random() * (acctList.length - 1)).toFixed(0)];
      let bchg1 = new Bchg(
        `B${this.nextBchgId}`,
        randomAcct1 as Acct,
        tran,
        1,
        `<change desc: bchg #B${this.nextBchgId}; tran #${tran.id}; acct #${randomAcct1.id}; >`,
        (randomAcct2.equationSide == randomAcct1.equationSide ? -bchg2.amt : bchg2.amt));
      tran.bchgList.push(bchg1);
      (randomAcct1 as Acct).bchgList.push(bchg1);
    }
    console.log('Created some transactions (order scrambled from normal order)');
    /*
     Refresh equation  sides **********************************************************
     */
    let sides = [this.assetList, this.equityList];
    for (let sideList of sides) {
      sideList.refresh();
    }
    console.log(`Refreshed equation sides`);
    /*
     Refresh journal & transactions **********************************************************
     */
    this.tranList.refresh();
    console.log(`Refreshed tranList`);
    console.log('Run completed!');

    let myNumber = 12345678.9876;
    console.log(new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(myNumber));
    // console.log(numeral(myNumber).format('0,0.00'));
  }
}



