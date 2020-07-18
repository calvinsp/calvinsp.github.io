const menuToggle = document.querySelector('.menu-togle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('muncul');
});

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}