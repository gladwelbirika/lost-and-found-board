
// ================= REPORT PAGE =================

const form = document.querySelector(".report-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("itemName").value;
        const type = document.getElementById("type").value;
        const description = document.getElementById("description").value;
        const location = document.getElementById("location").value;
        const contact = document.getElementById("contact").value;

        let items = JSON.parse(localStorage.getItem("items")) || [];

        items.push({
            name,
            type,
            description,
            location,
            contact
        });

        localStorage.setItem("items", JSON.stringify(items));

        alert("Item reported successfully!");

        window.location.href = "board.html";
    });
}


// ================= BOARD PAGE =================

const board = document.querySelector(".board-container");

if (board) {

    function displayItems(list) {
        board.innerHTML = "";

        list.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("item-card");

            div.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>Status:</strong> ${item.type}</p>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Contact:</strong> ${item.contact}</p>
            `;

            board.appendChild(div);
        });
    }

    let items = JSON.parse(localStorage.getItem("items")) || [];

    displayItems(items);


    // ================= SEARCH =================

    const searchInput = document.getElementById("search");

    if (searchInput) {
        searchInput.addEventListener("input", function () {

            const value = this.value.toLowerCase();

            const filtered = items.filter(item =>
                item.name.toLowerCase().includes(value) ||
                item.description.toLowerCase().includes(value) ||
                item.location.toLowerCase().includes(value) ||
                item.type.toLowerCase().includes(value)
            );

            displayItems(filtered);
        });
    }
}