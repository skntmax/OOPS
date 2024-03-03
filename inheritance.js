//  classes examples

// mmultiple inheritance with polymorphism and encapsulation
class BankAccount {
  #name;
  #type;
  #total;
  #intial_amount;
  #branch_name;

  constructor(name, intial_amount = 0, type = "saving", branch_name = "delhi") {
    this.#name = name;
    this.#intial_amount = intial_amount;
    this.#type = type;
    this.#total = intial_amount;
    this.#branch_name = branch_name;
  }

  getBalance() {
    return this.#intial_amount;
  }

  deposite(amount) {
    this.#total = this.#total + amount;
    return this.amount;
  }

  getUserName() {
    return this.#name;
  }

  getBranchName() {
    console.log("calling from main branch");
    return this.#branch_name;
  }
}

class B2 extends BankAccount {
  #branch_name;
  constructor(name, amount, type, branch_name) {
    super(name, amount, type);
    this.#branch_name = branch_name;
  }

  getBranchName() {
    console.log("calling from B2  Bank branch");
    return this.#branch_name;
  }
}

let users1 = new B2("skntmax", 1200, "credit", "mujaffarpur"); // strictly defining , initial amount and type of account

let users2 = new BankAccount("rahul", 1200, "credit"); // strictly defining , initial amount and type of account

console.log(users1.getBranchName());
console.log(users2.getBranchName());
