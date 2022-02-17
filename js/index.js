function handleError(value){
    document.getElementById("expense-err").innerText="";

    
    if(isNaN(value)){
        return 0;
    }
    if(value < 0){
        document.getElementById("expense-err").innerText="Value cannot be a negetive number";
        return 0;
    }
    
    return value;
}

function calculate(){
    let salary = handleError(parseFloat(document.getElementById("salary").value));
 

    let food = handleError(parseFloat(document.getElementById("food").value));
    let rent = handleError(parseFloat(document.getElementById("rent").value));
    let clothes = handleError(parseFloat(document.getElementById("clothes").value));

    let save = handleError(parseFloat(document.getElementById("save").value));


    let totalExpenses = food+rent+clothes;
    let balance = salary-totalExpenses;

    if(totalExpenses > salary){
        document.getElementById("expense-err").innerText="Expenses exceed the balance";

    }

    else{
        
    document.getElementById("total-expenses").innerText=totalExpenses;
    document.getElementById("balance").innerText=balance;
    }

    let savingAmount = salary*(save/100);
    let remainingBalance = balance-savingAmount;

    
    document.getElementById("saving-amount").innerText=savingAmount;
    document.getElementById("remaining-balance").innerText=remainingBalance;
}


document.getElementById("calculate-expenses").addEventListener("click",function(){

    calculate();
  
});

document.getElementById("calculate-saving").addEventListener("click",function(){


   calculate();

  
});


