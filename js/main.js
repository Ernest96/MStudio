function menu() {
    document.getElementById("side-menu").classList.toggle("nav");
    document.getElementById("menu-btn").classList.toggle("nav");
    document.getElementById("hamburger").classList.toggle("hidden");
    document.getElementById("close").classList.toggle("hidden");
    document.getElementById("main").classList.toggle("inactive");
}


(function () {
    $("footer").load("../pages/footer.html");
    $("#side-menu").load("../pages/navbar.html");

    AOS.init({
        duration: 500,
        once: true,
        offset: 100
    });

    new SimpleLightbox({ elements: ".container-gallery a" });

    
})();