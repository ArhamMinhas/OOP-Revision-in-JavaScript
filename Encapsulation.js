
class BankAccount {
  // Private field (introduced in ES2022)
  #balance = 0; // hidden data

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance; // accessed through method only
  }
}

// Main equivalent
const acc = new BankAccount();
acc.deposit(2000);
console.log("Balance:", acc.getBalance());
