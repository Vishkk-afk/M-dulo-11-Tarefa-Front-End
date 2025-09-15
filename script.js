document.addEventListener('DOMContentLoaded', function() {
  mostrarMenu('home');
});

function mostrarMenu(id) {
    document.querySelectorAll(".menu").forEach(function (section) {
        section.style.display = "none";
    })
    document.getElementById(id).style.display = "block";
}