
var btn=document.getElementsByClassName("btn")[0];
console.log(btn);


btn.addEventListener('submit', function(event) {
  // Redirect to a specific page when the button is clicked
  window.location.href = "DesignerHomepage.html"; 
});

