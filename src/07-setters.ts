export class MyDate {
  constructor(
    public day: number = 9,
    private _month: number = 7,
    private _year: number = 1993
  ) {}

  private addPading(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  printFormat(): string {
    return `${this.addPading(this.day)}/${this.addPading(this._month)}/${
      this._year
    }`;
  }

  get year(): number {
    return this._year;
  }

  set month(value: number) {
    if (value > 0 && value < 13) {
      this._month = value;
    }
  }
}

const mydate = new MyDate(1, 7, 1994);

console.log(mydate.printFormat());

console.log(mydate.year);

mydate.month = 13;

mydate.month = 12;

console.log(mydate.printFormat());
