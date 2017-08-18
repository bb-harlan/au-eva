export class AcctMover {

  id: string;
  sourceClass: string;
  displayText: string;
  endingBalance: string;

  constructor(id: string, sourceClass: string, displayText: string, endingBalance: string) {
    this.id = id;
    this.sourceClass = sourceClass;
    this.displayText = displayText;
    this.endingBalance = endingBalance;
  }
}
