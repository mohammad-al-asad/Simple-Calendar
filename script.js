// Date
const d = new Date();
const currentMonth = d.getMonth();
const currentDate = d.getDate()

// Nodes
const monthSelection = document.getElementById(`month-${currentMonth}`);
const monthBodySelection = monthSelection.childNodes[3];
const dateSelection = monthSelection.childNodes[3].childNodes[(currentDate+7)*2-1];

// Adding class 
monthBodySelection.classList.add("date-body-js");
dateSelection.classList.add("dates-js");

// Scroll 
window.addEventListener("load", scroll);
function scroll(){
    let i = 2;
    let j = 0;
    const len = currentMonth + 1;
    while(i <= len){
        i++;
        j = j + 2;
    }
    let ammount = ((j * 100) + 70)
    window.scrollBy(0 , ammount);
}
console.log(window.scrollY);