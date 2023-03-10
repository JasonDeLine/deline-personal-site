// gets the button
let mybutton = document.getElementById("backToTop");

//user scrolls down 10px from the top of the page, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Click button scrolls to top of page
function topFunction() {
    document.documentElement.scrollTop = 0;
}