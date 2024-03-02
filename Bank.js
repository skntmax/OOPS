//  classes examples

class BankAccount {
  constructor(name, intial_amount = 0, type = "saving") {
    this.name = name;
    this.intial_amount = intial_amount;
    this.type = type;
    this.total = intial_amount;
  }

  getBalance() {
    return this.intial_amount;
  }

  deposite(amount) {
    this.total = this.total + amount;
    return this.amount;
  }

  getUserName() {
    return this.name;
  }
}

let users1 = new BankAccount("skntmax"); // default 0 intial amount and type saving acccount
let users2 = new BankAccount("skntmax", 1200, "credit"); // strictly defining , initial amount and type of account

console.log(users1, users2);
