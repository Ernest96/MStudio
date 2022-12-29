let bookForm = document.getElementById("book-form");




bookForm.addEventListener("submit", e => {

    if (bookForm.checkValidity() == false) {
        bookForm.reportValidity();
        return;
    }

    e.preventDefault();
    fetch(bookForm.action, {
        method: "POST",
        body: new FormData(bookForm),
    }).then(() => {
        alert("Mulțumim pentru mesaj!");
        bookForm.reset();
    });
});
