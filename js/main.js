function menu() {
    document.getElementById("side-menu").classList.toggle("nav");
    document.getElementById("menu-btn").classList.toggle("nav");
    document.getElementById("hamburger").classList.toggle("hidden");
    document.getElementById("close").classList.toggle("hidden");
    document.getElementById("main").classList.toggle("inactive");
}


(function () {

    AOS.init({
        duration: 500,
        once: true,
        offset: 100
    });

    new SimpleLightbox({ elements: ".container-gallery a" });

    
})();