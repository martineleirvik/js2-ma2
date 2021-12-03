import { books } from "./components/data.js";

const booksContainer = document.querySelector("ul");

books.forEach(function(item)  {
    console.log(item);

    booksContainer.innerHTML += `<div class="card">
                                <li><span> Title: ${item.title}</span></li>
                                <li><span> ISBN: ${item.isbn}</span></li>
                                </div>`;

});