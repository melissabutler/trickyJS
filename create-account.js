function createAccount(pin, amount = 0) {
    console.log(pin, amount)
    return {
        checkBalance(inputPin){
            if (inputPin !== pin) return "Invalid PIN.";
            return`$${amount}`; 
        },

        deposit(inputPin, deposit){
            if(inputPin !== pin) return "Invalid PIN.";
            amount += deposit;
            return `Succesfully deposited $${deposit}. Current balance: $${amount}.`

        },

        withdraw(inputPin, withdrawal){
            if(inputPin !== pin) return "Invalid PIN.";
            if(withdrawal > amount) return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
            amount -= withdrawal;
            return `Succesfully withdrew $${withdrawal}. Current balance: $${amount}.`

        },
        changePin(inputPin, newPin){
            if(inputPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!"
        },
    }

}

f
module.exports = { createAccount };

createAccount("1234", 100)
let account = createAccount("1234", 100);

account.checkBalance("oops");
// "Invalid PIN."

account.deposit("1234", 250);
// "Succesfully deposited $250. Current balance: $350."

account.withdraw("1234", 300);
// "Succesfully withdrew $300. Current balance: $50."

account.withdraw("1234", 10);
// "Withdrawal amount exceeds account balance. Transaction cancelled."

account.changePin("1234", "5678");
// "PIN successfully changed!"