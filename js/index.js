document.getElementById("calculate-expenses").addEventListener("click",function(){
    let salary = document.getElementById("salary").value;
    console.log(typeof salary);
    salary = handleError(salary);
    console.log(typeof salary);
});
function handleError(value){
    if(typeof value != "number"){
        document.getElementById("expense-err").innerText="Value must be a number";
        return null;
    }
    if(value < 0){
        document.getElementById("expense-err").innerText="Value cannot be a negetive number";
        return null;
    }
    return value;
}