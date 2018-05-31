/* $(document).ready(function () {
    alert("Witaj na portalu dla miłośników gór!");
    
    }); */

// Get the modal, then get the image and insert it inside the modal - use its "alt" text as a caption
function myFunction(imgs) {
    var modal = document.getElementById('myModal');
    var expandImg = document.getElementById("img");
    var imgText = document.getElementById("caption");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    modal.style.display = "block";
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

