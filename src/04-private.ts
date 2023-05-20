export class MyDate {
  day: number;
  month: number;
  private year: number;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  private addPading(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  printFormat(): string {
    return `${this.addPading(this.day)}/${this.addPading(this.month)}/${
      this.year
    }`;
  }
}

const mydate = new MyDate(1, 7, 1994);

console.log(mydate.printFormat());
