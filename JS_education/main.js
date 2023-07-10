const prompt = require("prompt-sync")();

const deposit = () => {
    while (true){
    const depositAmout = prompt("Enter a deposit ammout: ");
    const numberDepositAmout =parseFloat(depositAmout);
    
        if (isNaN(numberDepositAmout) || numberDepositAmout <=0){
            console.log("INVALID NUMBER");
        }
        else {
            return numberDepositAmout;
        }
    }
}

const depositAmout = deposit();