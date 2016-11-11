//todolist(elements from HTML)
var textbox = document.getElementById("textbox");
var changeStyle = document.getElementById("changeStyle");
var customize = document.getElementById("customize");
var addbutton = document.getElementById("addbutton");
var tasks = document.getElementById("tasks");

//adding to do items 
addbutton.addEventListener("click", function() {

     // changing color of font & highlight of to do items
    var task = "<div style= 'color: " + customize.value + "; background-color:" + changeStyle.value + " '>" + textbox.value  + "<br>";
    tasks.innerHTML = tasks.innerHTML + task;

});

//removing to do items
tasks.addEventListener("click", function(evt){
   
   var remove = evt.target;
   remove.parentNode.removeChild(remove);

});


