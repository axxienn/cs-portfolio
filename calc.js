//calculator
var input = document.getElementById("input");
var select = document.getElementById("operator");
var input2 = document.getElementById("input2");
var button = document.getElementById("calculate");
var ans = document.getElementById("answer");
var answer;

//calculator start
button.addEventListener("click",function (){
    
    if (select.value === "+"){
    answer = parseInt(input.value) + parseInt(input2.value);
    ans.innerHTML = answer;
    }
    
    if (select.value === "-"){
    answer = parseInt(input.value) - parseInt(input2.value);
    ans.innerHTML = answer;
    }
    
    if (select.value === "*"){
    answer = parseInt(input.value) * parseInt(input2.value);
    ans.innerHTML = answer;
    }
   
    if (select.value === "/"){
    answer = parseInt(input.value) / parseInt(input2.value);
    ans.innerHTML = answer;
    } 
    
    if (select.value === "^"){
    answer = Math.pow(input.value, input2.value);
    ans.innerHTML = answer;
    }
    
    if (select.value === "sqrt"){
    answer = Math.sqrt(input2.value);
    ans.innerHTML = answer;
    }
    
    if (select.value === "sin"){
    answer = Math.sin(input2.value);
    ans.innerHTML = answer;
    }
    
    if (select.value === "cos"){
    answer = Math.cos(input2.value);
    ans.innerHTML = answer;
    }
    
    if (select.value === "tan"){
    answer = Math.tan(input2.value);
    ans.innerHTML = answer;
    }
});


     




