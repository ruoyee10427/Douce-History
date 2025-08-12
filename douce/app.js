var modal = document.getElementById("paymentModal");

var span = document.getElementsByClassName("close")[0];

document.querySelectorAll('#bookBtn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = "block";
    });
});

span.onclick = function() {
    modal.style.display = "none";
}

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

