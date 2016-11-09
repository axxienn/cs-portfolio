//todolist(elements from HTML)
var textbox = document.getElementById("textbox");
var customize = document.getElementById("customize");
var addbutton = document.getElementById("addbutton");
var tasks = document.getElementById("tasks");

//adding to do items
addbutton.addEventListener("click", function() {
    
    var task = "<div>" + textbox.value + "<div>" + "<br>";
    tasks.innerHTML = tasks.innerHTML + task; 
    
    
});


//removing to do items
tasks.addEventListener("click", function(evt){
   
   var remove = evt.target;
   remove.parentNode.removeChild(remove);

});


// highlight to do items
