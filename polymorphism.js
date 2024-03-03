//  classes examples
// will create several form extending the same class

class BankAccount {
  #name;
  #type;
  #total;
  #intial_amount;
  #branch_name;

  constructor(name, intial_amount = 0, type = "saving") {
    this.#name = name;
    this.#intial_amount = intial_amount;
    this.#type = type;
    this.#total = intial_amount;
    this.#branch_name = "delhi";
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

class SubBank extends BankAccount {
  #branch_name;
  constructor(branch_name) {
    super();
    this.#branch_name = branch_name;
  }

  getBranchName() {
    console.log("calling from sub branch");

    return this.#branch_name;
  }
}

let users2 = new BankAccount("skntmax", 1200, "credit"); // strictly defining , initial amount and type of account

let subBranchUser = new SubBank("noida");

console.log(users2.getBranchName()); // calling main branch with the help of methord overriding
console.log(subBranchUser.getBranchName()); // calling sub branch with the help of methord overriding
