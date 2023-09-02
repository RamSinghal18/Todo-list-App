const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if(inputBox.value==='')
    {
        alert("You must Write something");
    }
    else
    {
        let li=document.createElement("li");    // creating element for displaying 
        li.innerHTML=inputBox.value;      // adding the inputbox value to the list 
        listContainer.appendChild(li);   // append to container with the input element written by user
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span); // append to container
    }
    inputBox.value=''; // after adding the input element to the list remove it from add your text thing
    saveData(); 
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");  // toggle the checkbox
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove(); //removing parent element
        saveData();
    }
},false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();
