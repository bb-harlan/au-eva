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
   */
  get SIDE_ASSETS(): string {return 'A';};
  get SIDE_EQUITIES(): string {return 'E';};
  get MODULE_FAE(): string {return "fae";};
  get MODULE_ACCT(): string {return "acct";};
  get MODULE_BCHG(): string {return "bchg";};
  get MODULE_TRAN(): string {return "tran";};
  get MODULE_JRNL(): string {return "jrnl";};
  get END_OF_LIST(): string {return "- End of list -";};
  get ROW_SELECTED_CHAR(): string {return String.fromCharCode(0xf111);} // FontAwesome fa-circle

  /*=====================================================
   *  state info
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
   */
  entityName: string = "";
  assetList: AcctList = AcctList.create(this.SIDE_ASSETS);
  equityList: AcctList = AcctList.create(this.SIDE_EQUITIES);
  tranList: TranList = TranList.create();
  
  private _nextSorter: number = 1;
  private _nextAcctId: number = 1;
  private _nextTranId: number = 1;
  private _nextBchgId: number = 1;

  get nextSorter(): number {return this._nextSorter++;}
  get nextAcctId(): number {return this._nextAcctId++;}
  get nextTranId(): number {return this._nextTranId++;}
  get nextBchgId(): number {return this._nextBchgId++;}


  generateTestData() {
    console.log('Generating test data...');
    this.entityName = "<programmatically generated test data for testing>";

    let newAnno: Annotation;
    let newAcct: Acct;
    let randomAcct: Acct;
    let newTran: Tran;
    let newBchg: Bchg;
    let acctId: string;
    let annoId: string;

    /*
     Create some accounts**********************************************************
     */
    annoId = `acct${this.nextAcctId}`;
    newAnno = new Annotation(
      /*id*/ annoId, 
      /*equationSide*/ this.SIDE_ASSETS, 
      /*intraSideSorter*/ 0, 
      /*title*/ `Test annotation (equationSide: ${this.SIDE_ASSETS}; annoId: ${annoId};)`);
    this.assetList.push(newAnno);

    for (let intraSideSorter = 15; intraSideSorter > 0; intraSideSorter--) {
      acctId = `acct${this.nextAcctId}`;
      newAcct = new Acct(
        /*id*/ acctId, 
        /*equationSide*/ this.SIDE_ASSETS, 
        /*intraSideSorter*/ intraSideSorter, 
        /*title*/ `Test account (equationSide: ${this.SIDE_ASSETS}, acctId: ${acctId};)`, 
        /*normalBalance*/ 1);
      this.assetList.push(newAcct);

      acctId = `acct${this.nextAcctId}`;
      newAcct = new Acct(
        /*id*/ acctId, 
        /*equationSide*/this.SIDE_EQUITIES,
        /*intraSideSorter*/ intraSideSorter,
        /*title*/ `Test account (equationSide: ${this.SIDE_EQUITIES}; acctId: ${acctId};)`,
        /*normalBalance*/ 1);
      this.equityList.push(newAcct);
    }
    console.log('Created some accounts (order scrambled from normal order)');
    /*
     Create some transactions**********************************************************
     */
    let filteredAssetAcctList = this.assetList.filter((listItem) => listItem instanceof Acct);
    let filteredEquityAcctList = this.equityList.filter((listItem) => listItem instanceof Acct);
    let acctList = filteredAssetAcctList.concat(filteredEquityAcctList);
    for (let i = 1; i <= 50; ++i) {
      newTran = new Tran(
        /*id*/ `tran${this.nextTranId}`, 
        /*date*/ (i % 2 ? "2016/02/13" : "2016/02/12"), 
        /*intraDateSorter*/ this.nextSorter);
      
      randomAcct = acctList[(Math.random() * (acctList.length - 1)).toFixed(0)];
      newBchg = new Bchg(
        /*id*/ `bchg${this.nextBchgId}`,
        /*sourceTran*/ newTran,
        /*targetAcct*/ randomAcct,
        /*intraTranSorter*/ 0,
        /*desc*/ `<change desc: bchg #B${this.nextBchgId}; tran #${newTran.id}; acct #${randomAcct.id}; >`,
        /*amt*/ 0.00);
      newTran.bchgList.push(newBchg);
      randomAcct.bchgList.push(newBchg);
      
      randomAcct = acctList[(Math.random() * (acctList.length - 1)).toFixed(0)];
      newBchg = new Bchg(
        /*id*/ `bchg${this.nextBchgId}`,
        /*sourceTran*/ newTran,
        /*targetAcct*/ randomAcct,
        /*intraTranSorter*/ 1,
        /*desc*/ `<change desc: bchg #B${this.nextBchgId}; tran #${newTran.id}; acct #${randomAcct.id}; >`,
        /*amt*/ Math.round(Math.random() * 1000000)/100);
      newTran.bchgList.push(newBchg);
      randomAcct.bchgList.push(newBchg);
      newTran.refresh();
      this.tranList.push(newTran);
    }
    console.log('Created some transactions (order scrambled from normal order)');
    /*
     Refresh equation sides **********************************************************
     */
    this.assetList.refresh();
    this.equityList.refresh();
    console.log(`Refreshed equation sides`);
    /*
     Refresh journal & transactions **********************************************************
     */
    this.tranList.refresh();
    console.log(`Refreshed tranList`);
    console.log('Generation of test data completed!');
  }

  generateExample1Data() {
    console.log('\n********************************************\nGenerating example data...');
    this.entityName = "Rene (an sindividual)";

    let newAnno: Annotation;
    let newAcct: Acct;
    let newTran: Tran;
    let newBchg: Bchg;
    let targetAcct: Acct;

    newAcct = new Acct(
      /*id*/ `acct${this.nextAcctId}`, 
      /*equationSide*/ this.SIDE_ASSETS, 
      /*intraSideSorter*/ this.nextSorter, 
      /*title*/ "Pocket money", 
      /*normalBalance*/ 1);
      this.assetList.push(newAcct);

    newAcct = new Acct(
      /*id*/ `acct${this.nextAcctId}`, 
      /*equationSide*/ this.SIDE_ASSETS, 
      /*intraSideSorter*/ this.nextSorter, 
      /*title*/ "Tallahassee Bank - checking account", 
      /*normalBalance*/ 1);
    this.assetList.push(newAcct);

    newAcct = new Acct(
      /*id*/ `acct${this.nextAcctId}`, 
      /*equationSide*/ this.SIDE_EQUITIES, 
      /*intraSideSorter*/ this.nextSorter, 
      /*title*/ "Rene's equity", 
      /*normalBalance*/ 1);
    this.equityList.push(newAcct);
  
    newTran = new Tran(
      /*id*/ `tran${this.nextTranId}`, 
      /*date*/ "2018/08/01", 
      /*intraDateSorter*/ this.nextSorter);

    targetAcct = this.equityList[0] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ newTran,
      /*targetAcct*/ targetAcct,
      /*intraTranSorter*/ 0,
      /*desc*/ "Opening position",
      /*amt*/ 0.00)
    newTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);
    
    targetAcct = this.assetList[0] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ newTran,
      /*targetAcct*/ targetAcct,
      /*intraTranSorter*/ 1,
      /*desc*/ "Opening position",
      /*amt*/ 3.00)
    newTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);
    
    targetAcct = this.assetList[1] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ newTran,
      /*targetAcct*/ targetAcct,
      /*intraTranSorter*/ 2,
      /*desc*/ "Opening position",
      /*amt*/ 1700.00)
    newTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);

    this.tranList.push(newTran);  

    this.assetList.refresh();
    this.equityList.refresh();
    this.tranList.refresh();
    
    console.log("\nAsset accounts:");
    for (let acct of this.assetList) {
      console.log(acct);
    }
    console.log("\nEquity accounts:");
    for (let acct of this.equityList) {
      console.log(acct);
    }
    console.log("\nTransactions:");
    for (let tran of this.tranList) {
      console.log(tran);
    }
    console.log('\nGeneration of example data completed!\n********************************************');
  }
}



