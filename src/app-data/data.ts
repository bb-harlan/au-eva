import {FaeSide} from 'app-data/models/fae-side';
import {Acct, Annotation} from 'app-data/models/acct';
import {Bchg} from 'app-data/models/bchg';
import {Tran} from 'app-data/models/tran';
import {Jrnl} from 'app-data/models/jrnl';

export class Data {

  /*==========================================================
   * miscellaneous getters
   *==========================================================
   */
  private _nextSorter: number = 1;
  get nextSorter(): number {
    return this._nextSorter++;
  }
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

  /*==========================================================
   *  entitiy's accounting data
   */
  entityName: string = "test entity";
  faeSideAssets: FaeSide = new FaeSide(/*id*/ 'Assets');
  faeSideEquities: FaeSide = new FaeSide(/*id*/ 'Equities');
  jrnl: Jrnl = new Jrnl(/*id*/ 'Journal');

  constructor(entityName: string,
              _nextSorter: number,
              _nextAcctId: number,
              _nextTranId: number,
              _nextBchgId: number) {
    this.entityName = entityName;
    this._nextSorter = _nextSorter;
    this._nextAcctId = _nextAcctId;
    this._nextTranId = _nextTranId;
    this._nextBchgId = _nextBchgId;
  }


  generateEmptyData() {
    console.log('\n********************************************\nGenerating test data...');
    this.entityName = "<programmatically generated empty data for testing>";
/*
    let newAnno: Annotation;
    let newAcct: Acct;
    let randomAcct: Acct;
    let sourceTran: Tran;
    let newBchg: Bchg;
    let acctId: string;
    let annoId: string;
*/
  }
  generateTestData() {
    console.log('\n********************************************\nGenerating test data...');
    this.entityName = "<programmatically generated test data for testing>";
    let newAnno: Annotation;
    let newAcct: Acct;
    let randomAcct: Acct;
    let sourceTran: Tran;
    let newBchg: Bchg;
    let acctId: string;
    let annoId: string;
    /*
     Create some accounts**********************************************************
     */
    annoId = `anno${this.nextAcctId}`;
    newAnno = new Annotation(
      /*annoId*/ annoId,
      /*faeSide*/ this.faeSideAssets,
      /*intraSideIndex*/ this.nextSorter,
      /*annoText*/ `Test annotation (equationSide: ${this.faeSideAssets.id}; annoId: ${annoId};)`);
    this.faeSideAssets.acctList.push(newAnno);
    for (let intraSideIndex = 15; intraSideIndex > 0; intraSideIndex--) {
      acctId = `acct${this.nextAcctId}`;
      newAcct = new Acct(
        /*id*/ acctId,
        /*parentFaeSide*/ this.faeSideAssets,
        /*intraSideIndex*/ this.nextSorter,
        /*title*/ `Test account (equationSide: ${this.faeSideAssets.id}, acctId: ${acctId};)`,
        /*normalBalance*/ 1);
      this.faeSideAssets.acctList.push(newAcct);

      acctId = `acct${this.nextAcctId}`;
      newAcct = new Acct(
        /*id*/ acctId,
        /*parentFaeSide*/ this.faeSideEquities,
        /*intraSideIndex*/ this.nextSorter,
        /*title*/ `Test account (equationSide: ${this.faeSideEquities.id}; acctId: ${acctId};)`,
        /*normalBalance*/  1);
      this.faeSideEquities.acctList.push(newAcct);
    }
    this.faeSideAssets.reindexAcctList();
    this.faeSideEquities.reindexAcctList();
    /*
     * Create some transactions**********************************************************
     */
    let filteredAssetAcctList = this.faeSideAssets.acctList.filter((listItem) => listItem instanceof Acct);
    let filteredEquityAcctList = this.faeSideEquities.acctList.filter((listItem) => listItem instanceof Acct);
    let acctList = filteredAssetAcctList.concat(filteredEquityAcctList);
    for (let i = 1; i <= 50; ++i) {
      sourceTran = new Tran(
        /*id*/ `tran${this.nextTranId}`,
        /*parentJrnl*/ this.jrnl,
        /*date*/ (i % 2 ? "2016-02-03" : "2016-02-20"),
        /*intraDateSorter*/ this.nextSorter);

      randomAcct = acctList[(Math.random() * (acctList.length - 1)).toFixed(0)];
      newBchg = new Bchg(
        /*id*/ `bchg${this.nextBchgId}`,
        /*sourceTran*/ sourceTran,
        /*targetAcct*/ randomAcct,
        /*desc*/ `<change desc: bchg #B${this.nextBchgId}; tran #${sourceTran.id}; acct #${randomAcct.id}; >`,
        /*amt*/ 0.00);
      sourceTran.bchgList.push(newBchg);
      randomAcct.bchgList.push(newBchg);

      randomAcct = acctList[(Math.random() * (acctList.length - 1)).toFixed(0)];
      newBchg = new Bchg(
        /*id*/ `bchg${this.nextBchgId}`,
        /*sourceTran*/ sourceTran,
        /*targetAcct*/ randomAcct,
        /*desc*/ `<change desc: bchg #B${this.nextBchgId}; tran #${sourceTran.id}; acct #${randomAcct.id}; >`,
        /*amt*/ Math.round(Math.random() * 1000000) / 100);
      sourceTran.bchgList.push(newBchg);
      randomAcct.bchgList.push(newBchg);

      sourceTran.bchgList[0].setAmtToBalanceTran();
      this.jrnl.tranList.push(sourceTran);
    }
    this.faeSideAssets.refresh();
    this.faeSideEquities.refresh();
    this.jrnl.refresh(); // cascades to refresh all
    console.log(this);
    console.log('Generation of test data completed!');
  }
  generateExample1Data() {
    console.log('\n********************************************\nGenerating example data...');
    this.entityName = "Rene (an individual)";
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
      /*parentFaeSide*/ this.faeSideAssets,
      /*intraSideIndex*/ this.nextSorter,
      /*title*/ "Pocket money",
      /*normalBalance*/ 1);
    this.faeSideAssets.acctList.push(newAcct);
    newAcct = new Acct(
      /*id*/ `acct${this.nextAcctId}`,
      /*parentFaeSide*/ this.faeSideAssets,
      /*intraSideIndex*/ this.nextSorter,
      /*title*/ "Tallahassee Bank - checking account",
      /*normalBalance*/ 1);
    this.faeSideAssets.acctList.push(newAcct);
    this.faeSideAssets.reindexAcctList();

    newAcct = new Acct(
      /*id*/ `acct${this.nextAcctId}`,
      /*parentFaeSide*/ this.faeSideEquities,
      /*intraSideIndex*/ this.nextSorter,
      /*title*/ "Rene's equity",
      /*normalBalance*/ 1);
    this.faeSideEquities.acctList.push(newAcct);
    this.faeSideEquities.reindexAcctList();
    /*
    *************************************************
    * create opening position transaction
    *************************************************
    */
    sourceTran = new Tran(
      /*id*/ `tran${this.nextTranId}`,
      /*parentJrnl*/ this.jrnl,
      /*date*/ "2018-08-01",
      /*intraDateSorter*/ this.nextSorter);

    targetAcct = this.faeSideAssets.acctList[0] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*desc*/ "Opening position",
      /*amt*/ 12.00);
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);

    targetAcct = this.faeSideAssets.acctList[1] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*desc*/ "Opening position",
      /*amt*/ 1700.00);
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);

    targetAcct = this.faeSideEquities.acctList[0] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*desc*/ "Opening position",
      /*amt*/ 0.00);
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);
    newBchg.setAmtToBalanceTran();

    this.jrnl.tranList.push(sourceTran);
    /* end of transaction */

    /*
    *************************************************
    * create ATM withdrawal transaction
    *************************************************
    */
    sourceTran = new Tran(
      /*id*/ `tran${this.nextTranId}`,
      /*parentJrnl*/ this.jrnl,
      /*date*/ "2018-08-05",
      /*intraDateSorter*/ this.nextSorter);

    targetAcct = this.faeSideAssets.acctList[1] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*desc*/ "ATM cash withdrawal",
      /*amt*/ -100.00);
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);

    targetAcct = this.faeSideAssets.acctList[0] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*desc*/ "Deposit cash from ATM withdrawal",
      /*amt*/ 0.00);
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);
    newBchg.setAmtToBalanceTran();


    this.jrnl.tranList.push(sourceTran);
    /* end of transaction */
    this.faeSideAssets.refresh();
    this.faeSideEquities.refresh();
    this.jrnl.refresh(); // cascades to refresh all
    console.log(this);
    console.log('\nGeneration of example data completed!\n********************************************');
  }
  replacer(key, value) {
    if (key == "parentFaeSide" ||
        key == "sourceTran" ||
        key == "targetAcct" ||
        key == "parentJrnl") {
      return value.id;
    }
    return value;
  }
}


