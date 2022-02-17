// error handle function

function handleError(value){

    if(isNaN(value)){
        return 0;
    }
    if(value < 0){
        document.getElementById("err-msg").innerText="Value cannot be a negetive number";
        return null;
    }
    
    return value;

}


// calculate expenses

document.getElementById("calculate-expenses").addEventListener("click",function(){
    document.getElementById("err-msg").innerText="";

    let salary = handleError(parseFloat(document.getElementById("salary").value));
    let food = handleError(parseFloat(document.getElementById("food").value));
    let rent = handleError(parseFloat(document.getElementById("rent").value));
    let clothes = handleError(parseFloat(document.getElementById("clothes").value));

    let totalExpenses = food+rent+clothes;
    let balance = salary-totalExpenses;

    if(totalExpenses > salary){
        document.getElementById("err-msg").innerText="Expenses exceed the balance";

    }

    else{
        
    document.getElementById("total-expenses").innerText=totalExpenses;
    document.getElementById("balance").innerText=balance;
    }

    document.getElementById("food").value="";
    document.getElementById("rent").value="";
    document.getElementById("clothes").value="";


    
  
});


// calculate saving

document.getElementById("calculate-saving").addEventListener("click",function(){
    document.getElementById("err-msg").innerText="";


   let salary = handleError(parseFloat(document.getElementById("salary").value));
   let balance = handleError(parseFloat(document.getElementById("balance").innerText));

    let save = handleError(parseFloat(document.getElementById("save").value));


    let savingAmount = salary*(save/100);
    let remainingBalance = balance-savingAmount;

    if(savingAmount > balance){
        document.getElementById("err-msg").innerText="Savings exceed the balance";

    }
    else{
        document.getElementById("saving-amount").innerText=savingAmount;
        document.getElementById("remaining-balance").innerText=remainingBalance;
    }
    document.getElementById("save").value="";

  
});


