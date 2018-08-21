import {bindable} from 'aurelia-framework';
import { FaeSide } from 'models/fae-side';
import { Jrnl } from 'models/jrnl';
import { Acct, Annotation } from 'models/acct';
import { Tran } from 'models/tran';
import { Bchg } from 'models/bchg';


export class Eva {
  /*
   * ===================================================
   *   This a class is designed to be a singleton object.
   * ===================================================
   */
  private static _instance: Eva;

  static getInstance(): Eva {
    if (!this._instance) {
      this._instance = new Eva();
    }
    return this._instance;
  }

   /*==========================================================
   * constants simulated by getters
   */
  get SIDE_ID_ASSETS(): string {return 'Assets';}
  get SIDE_ID_EQUITIES(): string {return 'Equities';}
  get TRAN_JRNL_ID(): string {return 'Journal';}
  get MODULE_FAE(): string {return "fae";}
  get MODULE_ACCT(): string {return "acct";}
  get MODULE_BCHG(): string {return "bchg";}
  get MODULE_TRAN(): string {return "tran";}
  get MODULE_JRNL(): string {return "jrnl";}
  get END_OF_LIST(): string {return "- End of list -";}
  get ROW_SELECTED_CHAR(): string {return String.fromCharCode(0xf111);} // FontAwesome fa-circle

  /*=====================================================
   *  state info
   */
  selectedModule: string = this.MODULE_FAE;
  selectedFaeSide: FaeSide = null;
  selectedAcct: Acct | Annotation = null;
  selectedTran: Tran = null;
  selectedBchg: Bchg = null;
  showingModuleBchg: boolean = true;
  isEditing: boolean = false;
  //
  /*==========================================================
   *  data model stuff
   */
  entityName: string = "";
  faeSideAssets: FaeSide = new FaeSide(/*id*/ this.SIDE_ID_ASSETS);
  faeSideEquities: FaeSide = new FaeSide(/*id*/ this.SIDE_ID_EQUITIES);
  // jrnl: Jrnl = new Jrnl();
  jrnl: Jrnl = new Jrnl(/*id*/ this.TRAN_JRNL_ID);

  private _nextSorter: number = 1;
  get nextSorter(): number {return this._nextSorter++;}

  private _nextAcctId: number = 1;
  get nextAcctId(): number {return this._nextAcctId++;}

  private _nextTranId: number = 1;
  get nextTranId(): number {return this._nextTranId++;}

  private _nextBchgId: number = 1;
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
      /*faeSide*/ this.faeSideAssets, 
      /*intraSideSorter*/ 0, 
      /*title*/ `Test annotation (equationSide: ${this.faeSideAssets}; annoId: ${annoId};)`);
    this.faeSideAssets.acctList.push(newAnno);

    for (let intraSideSorter = 15; intraSideSorter > 0; intraSideSorter--) {
      acctId = `acct${this.nextAcctId}`;
      newAcct = new Acct(
        /*id*/ acctId, 
        /*faeSide*/ this.faeSideAssets, 
        /*intraSideSorter*/ intraSideSorter, 
        /*title*/ `Test account (equationSide: ${this.faeSideAssets.id}, acctId: ${acctId};)`, 
        /*normalBalance*/ 1);
      this.faeSideAssets.acctList.push(newAcct);

      acctId = `acct${this.nextAcctId}`;
      newAcct = new Acct(
        /*id*/ acctId, 
        /*faeSide*/ this.faeSideEquities,
        /*intraSideSorter*/ intraSideSorter,
        /*title*/ `Test account (equationSide: ${this.faeSideEquities.id}; acctId: ${acctId};)`,
        /*normalBalance*/  1);
        this.faeSideEquities.acctList.push(newAcct);
      }
    console.log('Created some accounts (order scrambled from normal order)');
    /*
     Create some transactions**********************************************************
     */
    // let filteredAssetAcctList = this.faeSideAssets.acctList.filter((listItem) => listItem instanceof Acct);
    // let filteredEquityAcctList = this.faeSideEquities.acctList.filter((listItem) => listItem instanceof Acct);
    // let acctList = filteredAssetAcctList.concat(filteredEquityAcctList);
    // for (let i = 1; i <= 50; ++i) {
    //   newTran = new Tran(
    //     /*id*/ `tran${this.nextTranId}`, 
    //     /*date*/ (i % 2 ? "2016/02/13" : "2016/02/12"), 
    //     /*intraDateSorter*/ this.nextSorter);
      
    //   randomAcct = acctList[(Math.random() * (acctList.length - 1)).toFixed(0)];
    //   newBchg = new Bchg(
    //     /*id*/ `bchg${this.nextBchgId}`,
    //     /*sourceTran*/ newTran,
    //     /*targetAcct*/ randomAcct,
    //     /*intraTranSorter*/ 0,
    //     /*desc*/ `<change desc: bchg #B${this.nextBchgId}; tran #${newTran.id}; acct #${randomAcct.id}; >`,
    //     /*amt*/ 0.00);
    //   newTran.bchgList.push(newBchg);
    //   randomAcct.bchgList.push(newBchg);
      
    //   randomAcct = acctList[(Math.random() * (acctList.length - 1)).toFixed(0)];
    //   newBchg = new Bchg(
    //     /*id*/ `bchg${this.nextBchgId}`,
    //     /*sourceTran*/ newTran,
    //     /*targetAcct*/ randomAcct,
    //     /*intraTranSorter*/ 1,
    //     /*desc*/ `<change desc: bchg #B${this.nextBchgId}; tran #${newTran.id}; acct #${randomAcct.id}; >`,
    //     /*amt*/ Math.round(Math.random() * 1000000)/100);
    //   newTran.bchgList.push(newBchg);
    //   randomAcct.bchgList.push(newBchg);
    //   newTran.refresh();
    //   this.tranJrnl.tranList.push(newTran);
    // }
    // console.log('Created some transactions (order scrambled from normal order)');
    // /*
    //  Refresh equation sides **********************************************************
    //  */
    // this.assetList.refresh();
    // this.equityList.refresh();
    // console.log(`Refreshed equation sides`);
    // /*
    //  Refresh journal & transactions **********************************************************
    //  */
    // this.tranList.refresh();
    // console.log(`Refreshed tranList`);
    // console.log('Generation of test data completed!');
  }

  generateExample1Data() {
    console.log('\n********************************************\nGenerating example data...');
    this.entityName = "Rene (an sindividual)";

    let newAnno: Annotation;
    let newAcct: Acct;
    let sourceTran: Tran;
    let newBchg: Bchg;
    let targetAcct: Acct;

    /*
    *************************************************
    * create accounts
    *************************************************
    */
    newAcct = new Acct(
      /*id*/ `acct${this.nextAcctId}`, 
      /*faeSide*/ this.faeSideAssets,
      /*intraSideSorter*/ this.nextSorter, 
      /*title*/ "Pocket money", 
      /*normalBalance*/ 1);
    this.faeSideAssets.acctList.push(newAcct);

    newAcct = new Acct(
      /*id*/ `acct${this.nextAcctId}`, 
      /*faeSide*/ this.faeSideAssets,
      /*intraSideSorter*/ this.nextSorter, 
      /*title*/ "Tallahassee Bank - checking account", 
      /*normalBalance*/ 1);
    this.faeSideAssets.acctList.push(newAcct);

    newAcct = new Acct(
      /*id*/ `acct${this.nextAcctId}`, 
      /*faeSide*/ this.faeSideEquities,
      /*intraSideSorter*/ this.nextSorter, 
      /*title*/ "Rene's equity", 
      /*normalBalance*/ 1);
    this.faeSideEquities.acctList.push(newAcct);

    /*
    *************************************************
    * create opening position transaction
    *************************************************
    */
    sourceTran = new Tran(
      /*id*/ `tran${this.nextTranId}`,
      /*parentJrnl*/ this.jrnl,
      /*date*/ "2018/08/01",
      /*intraDateSorter*/ this.nextSorter);

    targetAcct = this.faeSideEquities.acctList[0] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*intraTranSorter*/ this.nextSorter,
      /*desc*/ "Opening position",
      /*amt*/ 0.00)
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);

    targetAcct = this.faeSideAssets.acctList[0] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*intraTranSorter*/ this.nextSorter,
      /*desc*/ "Opening position",
      /*amt*/ 12.00)
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);
    
    targetAcct = this.faeSideAssets.acctList[1] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*intraTranSorter*/ this.nextSorter,
      /*desc*/ "Opening position",
      /*amt*/ 1700.00)
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);
    
    sourceTran.parentJrnl.tranList.push(sourceTran);
    /*
    * end of transaction
    *************************************************
    */

    /*
    *************************************************
    * create ATM withdrawal transaction
    *************************************************
    */
    sourceTran = new Tran(
      /*id*/ `tran${this.nextTranId}`,
      /*parentJrnl*/ this.jrnl,
      /*date*/ "2018/08/05",
      /*intraDateSorter*/ this.nextSorter);

    targetAcct = this.faeSideAssets.acctList[0] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*intraTranSorter*/ this.nextSorter,
      /*desc*/ "Cash",
      /*amt*/ 0.00)
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);

    targetAcct = this.faeSideAssets.acctList[1] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*intraTranSorter*/ this.nextSorter,
      /*desc*/ "ATM withdrawal",
      /*amt*/ -50.00)
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);

    sourceTran.parentJrnl.tranList.push(sourceTran);
    /*
    * end of transaction
    *************************************************
    */


    sourceTran.parentJrnl.refresh(); // will cascade to refreshof all objecs

    console.log(this.faeSideAssets);
    console.log(this.faeSideEquities);
    console.log(this.jrnl);
    console.log('\nGeneration of example data completed!\n********************************************');
  }
}



