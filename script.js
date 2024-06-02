let items = [];

function addItem() {
    let item = document.getElementById("item").value;
    if (item !== "") {
        items.push(item);
        displayList();
        document.getElementById("item").value = "";
    }
}

function displayList() {
    let list = document.getElementById("list");
    list.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = items[i];
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function() {
            items.splice(i, 1);
            displayList();
        });
        li.appendChild(deleteButton);
        list.appendChild(li);
    }
}

document.getElementById("add").addEventListener("click", addItem);
document.getElementById("item").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addItem();
    }
});

displayList();