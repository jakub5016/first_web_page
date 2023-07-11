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

const getNumberOfLines = () =>{
    while (true){
    const lines = prompt("Enter a number of lines (1-3): ");
    const numberOfLines =parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines >3){
            console.log("INVALID NUMBER OF LINES");
        }
        else {
            return numberOfLines;
        }
    }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
