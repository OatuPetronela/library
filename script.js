document.getElementById("year").innerHTML = (new Date().getFullYear())

class Book {
    constructor(title, src, author, pages) {
        this.title = title;
        this.src = src;
        this.author = author;
        this.pages = pages;
    }
}

let books = [];
let btn = document.getElementById("btn");
let element = document.getElementById("book-list");


let row = document.createElement("row");
row.className = "row";
function addElement(book) {

    let col = document.createElement("col")
    col.className = "col-3";
    let card = document.createElement("div")
    card.className = "card"
    let img = document.createElement("img")
    img.className = "card-img-top"
    img.src = book.src;
    let cardBody = document.createElement("div")
    cardBody.className = "card-body"
    let elementTitle = document.createElement("h1");
    elementTitle.className = "card-title text-center"
    elementTitle.innerHTML = book.title;
    let elementAuthor = document.createElement("h3");
    elementAuthor.className = "card-text"
    elementAuthor.innerHTML = book.author;
    let elementPages = document.createElement("h5");
    elementPages.className = "card-text"
    elementPages.innerHTML = "Pages: " + book.pages;
    let buttonRemove = document.createElement("button")
    buttonRemove.className = "btn btn-danger";
    buttonRemove.innerHTML = "Remove"

    row.appendChild(col);
    col.appendChild(card)
    card.appendChild(img)
    cardBody.appendChild(elementTitle);
    cardBody.appendChild(elementAuthor)
    cardBody.appendChild(elementPages);
    cardBody.appendChild(buttonRemove);
    card.appendChild(cardBody);

    element.appendChild(row)

}

function submitForm(event) {
    event.preventDefault
    let title = document.getElementById("title").value;
    let src =document.getElementById("src").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    console.log(title,src, author, pages)
    let book = new Book(title, src, author, pages)
    books.push(book)
    addElement(book)
}
btn.addEventListener("click", submitForm)