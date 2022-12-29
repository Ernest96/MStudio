const urlParams = new URLSearchParams(window.location.search);
const masterParam = urlParams.get('master');
let images = {};

document.getElementById('master').value = masterParam;

VirtualSelect.init({
    ele: 'select',
    search: true,
    optionsCount: 8,
    showDropboxAsPopup: false,
});




function send(event) {

    let bookForm = document.getElementById("book-form");


    if (bookForm.checkValidity() == false) {
        bookForm.reportValidity();
        return;
    }

    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("bookForm")),
        }).then(() => {
            alert("Mulțumim pentru mesaj!");
            form.reset();
        });
    });


}

