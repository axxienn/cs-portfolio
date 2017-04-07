//big project (gathering elements from HTML)
var input = document.getElementById("input");
var select = document.getElementById("operator");
var input2 = document.getElementById("input2");
var button = document.getElementById("calculate");
var ans = document.getElementById("answer");
var answer;

//function of the calculator start
button.addEventListener("click",function (){
    var number = input.value;
    var number2 = input2.value;
    var operator = select.value;
    
    if (operator === "+") {
        var answer =  parseInt(number) + parseInt(number2);
        ans.innerHTML = answer;
    }
    
    if (operator === "-") {
        var answer = parseInt(number) - parseInt(number2);
        ans.innerHTML = answer;
    }
    
    if (operator === "*") {
        var answer = parseInt(number) * parseInt(number2);
        ans.innerHTML = answer;
    }
    
    if (operator === "/") {
        var answer = parseInt(number) / parseInt(number2);
        ans.innerHTML = answer;
    }
    
    if (operator === "^") {
        var answer = Math.pow(number, number2);
        ans.innerHTML = answer;
    }
    
    if (operator === "sqrt") {
        var answer = Math.sqrt(number2);
        ans.innerHTML = answer;
    }
    
    if (operator === "sin") {
        var answer = Math.sin(number2);
        ans.innerHTML = answer;
    }
    
    if (operator === "cos") {
        var answer = Math.cos(number2);
        ans.innerHTML = answer;
    }
    
    if (operator === "tan") {
        var answer = Math.tan(number2);
        ans.innerHTML = answer;
    }
    
});


     




