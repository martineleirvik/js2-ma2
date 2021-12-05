import { books } from "./components/data.js";


function createList() {

    const booksContainer = document.querySelector("ul");

    books.forEach(function(item)  {
        console.log(item);

        booksContainer.innerHTML += `<div class="card">
                                    <li><span> Title: ${item.title} </span></li>
                                    <li><span> ISBN: ${item.isbn}</span></li>
                                    <li><span> <i class="fa fa-trash" data-item="${item.title}"></i> </span></li>
                                    </div>`;

    });

    const trashCan = document.querySelectorAll("li i");

    trashCan.forEach(function(can){
        can.addEventListener("click", removeFromList);
    });

};

createList();


function removeFromList() {
    console.log(event);

    const deleteItem = event.target.dataset.item.title;

    const newList = books.filter(function(item){
        if(deleteItem !== item) {
            return true;
        }
    })

    books = newList;

    createList();

}