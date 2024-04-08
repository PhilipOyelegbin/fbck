// menu toggle function
const toggleMenu = () => {
  let designState = document.getElementById("navitem").classList.contains("show");
  if (designState) {
    document.getElementById("navitem").classList.remove("show")
  } else {
    document.getElementById("navitem").classList.add("show")   
  }
}
// end menu

// Append an image to the modal
var modal = document.getElementById('myModal');
var images = document.querySelectorAll('#imageGallery img'); // Use querySelectorAll to get a NodeList
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

images.forEach(function(img) {
  img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// end modal

