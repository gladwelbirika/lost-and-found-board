const form = document.querySelector(".report- form");

form.addEventListener("submit",function(event){
    event.preventDefault();
});

const name = document.getElementById("itemName").value ;
const type = document.getElementById("type").value ;
const description = document.getElementById("description").value ;
const location = document.getElementById("location").value ;
const contact = document.getElementById("contact").value ;

const item = {
    id:Date.now(),
    name,
    type,
    description,
    location,
    contact
};