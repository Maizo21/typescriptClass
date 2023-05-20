export class MyDate {
  public day: number;
  public month: number;
  public year: number;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }
}

const mydate = new MyDate(1, 10, 1994);

console.log(mydate.printFormat());
