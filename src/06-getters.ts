export class MyDate {
  constructor(
    public day: number = 9,
    public month: number = 7,
    private _year: number = 1993
  ) {}

  private addPading(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  printFormat(): string {
    return `${this.addPading(this.day)}/${this.addPading(this.month)}/${
      this._year
    }`;
  }

  get year(): number {
    return this._year;
  }
}

const mydate = new MyDate(1, 7, 1994);

console.log(mydate.printFormat());

console.log(mydate.year);
