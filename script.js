document.getElementById("year").innerHTML = (new Date().getFullYear())
const booksKey = "books";

let books = JSON.parse(localStorage.getItem(booksKey)) || [];

let btn = document.getElementById("btn");
let element = document.getElementById("book-list");
let row = document.createElement("row");
row.className = "row";
let id = 0;

if(books != null){
    books.forEach(book => {
        addElement(book);
    });
}
class Book {
    constructor(title, src, author, pages) {
        this.title = title;
        this.src = src;
        this.author = author;
        this.pages = pages;
    }
}
function addElement(book) {
    let cardId = "card-" + id;
    let col = document.createElement("col")
    col.className = "col-3";
    col.id = cardId;
    let card = document.createElement("div")
    card.className = "card mt-3 mb-5"
    let img = document.createElement("img")
    img.className = "card-img-top"
    img.src = book.src;
    let cardBody = document.createElement("div")
    cardBody.className = "card-body"
    let elementTitle = document.createElement("h1");
    elementTitle.className = "card-title text-center"
    elementTitle.innerHTML = book.title;
    let hr = document.createElement("hr")
    let elementAuthor = document.createElement("h3");
    elementAuthor.className = "card-text"
    elementAuthor.innerHTML = "Author: " + book.author;
    let elementPages = document.createElement("h3");
    elementPages.className = "card-text "
    elementPages.innerHTML = "Pages: " + book.pages;
    let buttonRemove = document.createElement("button")
    buttonRemove.className = "btn btn-danger";
    buttonRemove.onclick = function () { btnRemove(cardId) };
    buttonRemove.innerHTML = "Remove";

    row.appendChild(col);
    col.appendChild(card)
    card.appendChild(img)
    cardBody.appendChild(elementTitle);
    cardBody.appendChild(hr)
    cardBody.appendChild(elementAuthor)
    cardBody.appendChild(elementPages);
    cardBody.appendChild(buttonRemove);
    card.appendChild(cardBody);
    id++;

    element.appendChild(row)

}

function addToLocalStorage(books) {
    localStorage.setItem(booksKey, JSON.stringify(books))
}


function submitForm(event) {
    event.preventDefault
    let title = document.getElementById("title").value;
    let src = document.getElementById("src").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let book = new Book(title, src, author, pages)
    books.push(book)
    addToLocalStorage(books)
    addElement(book)
}
btn.addEventListener("click", submitForm)


// function for empty fields input

btn.addEventListener("click", function removeFields(event) {
    event.preventDefault();
    let title = document.getElementById("title");
    let src = document.getElementById("src");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    title.value = "";
    src.value = "";
    author.value = "";
    pages.value = "";
})

// function for remove card

function btnRemove(cardId) {
    let card = document.getElementById(cardId);
    card.remove();
}

