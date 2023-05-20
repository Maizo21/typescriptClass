export class MyService {
  private static instance: MyService | null = null;

  private constructor(public name: string) {}

  getName(): string {
    return this.name;
  }

  static getInstance(name: string): MyService {
    if (!MyService.instance) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.getInstance("MyService1");

const myService2 = MyService.getInstance("MyService2");

console.log(myService1 === myService2);
