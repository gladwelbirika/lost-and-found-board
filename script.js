//API
async function fetchAPIItems(){
    const container = document.querySelector(".board-container");
    if(!container)return;
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=2")
    const data = await res.json();
    data.forEach(post => {
        const card = document.createElement("div");
        card.classList.add("item-card");
        card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <p><strong>Status:</strong> API Item </p>
        `;
        container.appendChild(card);
    })

}

//report form submission handling
const form = document.querySelector(".report-form");

if(form){
form.addEventListener("submit",function(event){
    event.preventDefault();

const name = document.getElementById("itemName").value ;
const type = document.getElementById("type").value ;
const description = document.getElementById("description").value ;
const location = document.getElementById("location").value ;
const contact = document.getElementById("contact").value ;

let items = JSON.parse(localStorage.getItem("items")) || [];

items.push({
    name,
    type,
    description,
    location,
    contact,
    claimed:false
});

localStorage.setItem("items", JSON.stringify(items));

alert("Item reported successfully!");

window.location.href = "board.html";
});
}


//display reported items to the board page
  const board = document.querySelector(".board-container"); 

  if (board) {
    
     function displayItems(list){
        board.innerHTML = "";

        list.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("item-card")
        
    div.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <p><strong>Location:</strong> ${item.location}</p>
    <p><strong>Status:</strong> ${item.type}</p>
    <p><strong>Contact:</strong> ${item.contact}</p>
    `;

    const claimBtn=document.createElement("button");
    claimBtn.textContent = item.claimed ? "Claimed" : "claim Item";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove"


    div.appendChild(claimBtn);
    div.appendChild(removeBtn)
    board.appendChild(div);
 
   });

}

let items = JSON.parse(localStorage.getItem("items")) || [];

displayItems(items);

fetchAPIItems();
  }

//Search bar
const searchInput = document.querySelector(".search-bar");

if(searchInput){
searchInput.addEventListener("input", function(){

    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll(".item-card");

    cards.forEach(card => {

        const text = card.textContent.toLowerCase();

        if(text.includes(query)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        
        }
    });
});
}

//unit testing
function test(name,condition){
    console.log(name + ":" + (condition ? "pass" : "fail"));
}

console.log("=== UNIT TESTS RUNNING ===");

test("LocalStorage items should be a valid array",
    Array.isArray(JSON.parse(localStorage.getItem("items") || "[]"))
);
test("search should match text correctly",
    "phone lost".includes("phone")
);
