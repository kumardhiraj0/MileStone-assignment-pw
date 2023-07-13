let customer = {
  name: "John Doe",
  balance: 1000,
};

//deposit fn
function deposit(amount) {
  customer.balance += amount;
  console.log(
    `Deposit of ${amount} successful, New balance: ${customer.balance}`
  );
}

// withdraw fn
function withdraw(amount) {
  if (amount <= customer.balance) {
    customer.balance -= amount;
    console.log(
      `Withdrawal of ${amount} successful, New balance: ${customer.balance}`
    );
  } else {
    console.log("Insufficient funds, Withdrawal canceled.");
  }
}

deposit(100); 
withdraw(1300);