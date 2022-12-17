let date = document.querySelector(".date"),
  noOfTasks = document.querySelector(".no-of-tasks"),
  listOfTasks = document.querySelectorAll("li");

let myTask = document.getElementById("myTask");
let button = document.querySelector(".addition"),
  text = document.getElementById("text"),
  ul = document.querySelectorAll(".myTask li");
  console.log(ul)

button.addEventListener("click", () => {
  addLists();
});

function addLists() {
  let template = "";
  template = `<li>${text.value}</li>`;
  text.value = "";
  myTask.innerHTML += template;
}

ul.forEach(()=>
{   
    
    addEventListener("click", clickHandler)
})
function clickHandler()
{
    console.log("HH")
}
const todayDate = new Date();
let todayDay = todayDate.getDay(),
  today = todayDate.getDate(),
  todayMonth = todayDate.getMonth();

const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date.innerText = `${Days[todayDay]}, ${""} ${Months[todayMonth]} ${today}`;
noOfTasks.innerText = `${listOfTasks.length}  ${"tasks"}`;
