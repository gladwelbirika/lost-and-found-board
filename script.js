//report form submission handling
const form = document.querySelector(".report-form");

form.addEventListener("submit",function(event){
    event.preventDefault();

const name = document.getElementById("itemName").value ;
const type = document.getElementById("type").value ;
const description = document.getElementById("description").value ;
const location = document.getElementById("location").value ;
const contact = document.getElementById("contact").value ;

const item = {
    id:Date.now(),
    name:name,
    type:type,
    description:description,
    location:location,
    contact:contact
};

let items = JSON.parse(localStorage.getItem("items")) || [];

items.push(item);

localStorage.setItem("items", JSON.stringify(items));

form.reset();
});

//display reported items to the board page
function displayItems(){
    
}