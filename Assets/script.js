var todo = document.querySelector(".todo");
//var saveBtn = document.querySelector(".saveBtn");

//Show current date and time in header
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY hh : mm A'));


// Loop to set colors in hour blocks according to hour of day
function timeLoop(){
  var currentHour = dayjs().hour();
  for (var i = 0; i < textarea.length; i++){
    if (i + 8 < currentHour) textarea[i].classList.add("past");
    if (i + 8 == currentHour) textarea[i].classList.add("present");
    if (i + 8 > currentHour) textarea[i].classList.add("future");
  }
}


// function to save events 
$(".saveBtn").on("click",function(){
  var text = $(this).siblings("textarea").val();
  var time = $(this).data("hour");
  var tasks = localStorage.getItem("todo");
  if(tasks = null){
    tasks = {};
  }
  tasks[time] = text;
  localStorage.setItem("todo", JSON.stringify(todo));
})



//function to display saved events from local storage
function displayTasks(){
  var pendingTasks = JSON.parse(localStorage.getItem("todo"));
    if (pendingTasks !== null){
      document.querySelector("todo").textContent = pendingTasks.todo
    }
}


function init (){
  displayTasks();
}





// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
