import {FaeSide} from 'app-data/models/fae-side';
import {Acct, Annotation} from 'app-data/models/acct';
import {Bchg} from 'app-data/models/bchg';
import {Tran} from 'app-data/models/tran';
import {Jrnl} from 'app-data/models/jrnl';

export class Data {
  /*==========================================================
  * constants simulated by getters
  */
  get SIDE_ID_ASSETS(): string {
    return 'Assets';
  }

  get SIDE_ID_EQUITIES(): string {
    return 'Equities';
  }

  get TRAN_JRNL_ID(): string {
    return 'Journal';
  }

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
  entityName: string = "";
  faeSideAssets: FaeSide = new FaeSide(/*id*/ this.SIDE_ID_ASSETS);
  faeSideEquities: FaeSide = new FaeSide(/*id*/ this.SIDE_ID_EQUITIES);
  jrnl: Jrnl = new Jrnl(/*id*/ this.TRAN_JRNL_ID);


  generateTestData() {
    console.log('Generating test data...');
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
      /*id*/ annoId,
      /*faeSide*/ this.faeSideAssets,
      /*intraSideSorter*/ this.nextSorter,
      /*title*/ `Test annotation (equationSide: ${this.faeSideAssets.id}; annoId: ${annoId};)`);
    this.faeSideAssets.acctList.push(newAnno);
    for (let intraSideSorter = 15; intraSideSorter > 0; intraSideSorter--) {
      acctId = `acct${this.nextAcctId}`;
      newAcct = new Acct(
        /*id*/ acctId,
        /*parentFaeSide*/ this.faeSideAssets,
        /*intraSideSorter*/ this.nextSorter,
        /*title*/ `Test account (equationSide: ${this.faeSideAssets.id}, acctId: ${acctId};)`,
        /*normalBalance*/ 1);
      this.faeSideAssets.acctList.push(newAcct);
      acctId = `acct${this.nextAcctId}`;
      newAcct = new Acct(
        /*id*/ acctId,
        /*parentFaeSide*/ this.faeSideEquities,
        /*intraSideSorter*/ this.nextSorter,
        /*title*/ `Test account (equationSide: ${this.faeSideEquities.id}; acctId: ${acctId};)`,
        /*normalBalance*/  1);
      this.faeSideEquities.acctList.push(newAcct);
    }
    console.log('Created some accounts (order scrambled from normal order)');
    /*
     Create some transactions**********************************************************
     */
    let filteredAssetAcctList = this.faeSideAssets.acctList.filter((listItem) => listItem instanceof Acct);
    let filteredEquityAcctList = this.faeSideEquities.acctList.filter((listItem) => listItem instanceof Acct);
    let acctList = filteredAssetAcctList.concat(filteredEquityAcctList);
    for (let i = 1; i <= 50; ++i) {
      sourceTran = new Tran(
        /*id*/ `tran${this.nextTranId}`,
        /*parentJrnl*/ this.jrnl,
        /*date*/ (i % 2 ? "2016/02/13" : "2016/02/12"),
        /*intraDateSorter*/ this.nextSorter);
      randomAcct = acctList[(Math.random() * (acctList.length - 1)).toFixed(0)];
      newBchg = new Bchg(
        /*id*/ `bchg${this.nextBchgId}`,
        /*sourceTran*/ sourceTran,
        /*targetAcct*/ randomAcct,
        /*intraTranSorter*/ 0,
        /*desc*/ `<change desc: bchg #B${this.nextBchgId}; tran #${sourceTran.id}; acct #${randomAcct.id}; >`,
        /*amt*/ 0.00);
      sourceTran.bchgList.push(newBchg);
      randomAcct.bchgList.push(newBchg);
      randomAcct = acctList[(Math.random() * (acctList.length - 1)).toFixed(0)];
      newBchg = new Bchg(
        /*id*/ `bchg${this.nextBchgId}`,
        /*sourceTran*/ sourceTran,
        /*targetAcct*/ randomAcct,
        /*intraTranSorter*/ 1,
        /*desc*/ `<change desc: bchg #B${this.nextBchgId}; tran #${sourceTran.id}; acct #${randomAcct.id}; >`,
        /*amt*/ Math.round(Math.random() * 1000000) / 100);
      sourceTran.bchgList.push(newBchg);
      randomAcct.bchgList.push(newBchg);
      sourceTran.computeBalancingBchgAmt(this.SIDE_ID_ASSETS, this.SIDE_ID_EQUITIES);
      this.jrnl.tranList.push(sourceTran);
    }
    this.jrnl.refresh(); // cascades to refresh all
    console.log('Created some transactions (order scrambled from normal order)');
    console.log(this.faeSideAssets);
    console.log(this.faeSideEquities);
    console.log(this.jrnl);
    console.log('Generation of test data completed!');
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
      /*parentFaeSide*/ this.faeSideAssets,
      /*intraSideSorter*/ this.nextSorter,
      /*title*/ "Pocket money",
      /*normalBalance*/ 1);
    this.faeSideAssets.acctList.push(newAcct);
    newAcct = new Acct(
      /*id*/ `acct${this.nextAcctId}`,
      /*parentFaeSide*/ this.faeSideAssets,
      /*intraSideSorter*/ this.nextSorter,
      /*title*/ "Tallahassee Bank - checking account",
      /*normalBalance*/ 1);
    this.faeSideAssets.acctList.push(newAcct);
    newAcct = new Acct(
      /*id*/ `acct${this.nextAcctId}`,
      /*parentFaeSide*/ this.faeSideEquities,
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
      /*amt*/ 0.00);
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);
    targetAcct = this.faeSideAssets.acctList[0] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*intraTranSorter*/ this.nextSorter,
      /*desc*/ "Opening position",
      /*amt*/ 12.00);
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);
    targetAcct = this.faeSideAssets.acctList[1] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*intraTranSorter*/ this.nextSorter,
      /*desc*/ "Opening position",
      /*amt*/ 1700.00);
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);
    sourceTran.computeBalancingBchgAmt(this.SIDE_ID_ASSETS, this.SIDE_ID_EQUITIES);
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
      /*date*/ "2018/08/05",
      /*intraDateSorter*/ this.nextSorter);
    targetAcct = this.faeSideAssets.acctList[0] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*intraTranSorter*/ this.nextSorter,
      /*desc*/ "Cash from ATM withdrawal",
      /*amt*/ 0.00);
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);
    targetAcct = this.faeSideAssets.acctList[1] as Acct;
    newBchg = new Bchg(
      /*id*/ `bchg${this.nextBchgId}`,
      /*sourceTran*/ sourceTran,
      /*targetAcct*/ targetAcct,
      /*intraTranSorter*/ this.nextSorter,
      /*desc*/ "ATM withdrawal",
      /*amt*/ -100.00)
    sourceTran.bchgList.push(newBchg);
    targetAcct.bchgList.push(newBchg);
    sourceTran.computeBalancingBchgAmt(this.SIDE_ID_ASSETS, this.SIDE_ID_EQUITIES);
    this.jrnl.tranList.push(sourceTran);
    /* end of transaction */

    this.jrnl.refresh(); // cascades to refresh all
    console.log(this.faeSideAssets);
    console.log(this.faeSideEquities);
    console.log(this.jrnl);
    console.log('\nGeneration of example data completed!\n********************************************');
  }
}



