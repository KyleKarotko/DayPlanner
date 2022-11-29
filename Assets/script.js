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


// function to save events locally
$(".saveBtn").on("click",function(){
  var text = $(this).siblings("textarea").val();
  var time = $(this).data("hour");
  var tasks = JSON.parse(localStorage.getItem("todo"));
  if(!tasks) {
    tasks = {};
  } 
  tasks[time] = text;
  localStorage.setItem("todo", JSON.stringify(tasks));
})



// how do I pull it back from local to display on refresh!?!?!?

//function to display saved events from local storage
function displayTasks(){
  var pendingTasks = JSON.parse(localStorage.getItem("todo"));
  const tasks = {
    a: 'todo',
    b: 13
  };
  
  for (const [key, value] of Object.entries(pendingTasks)) {
    console.log(`${key}: ${value}`);
  }
}




function init (){
  displayTasks();
}





init();
