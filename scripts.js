let x = document.getElementById("share");
let y = document.getElementById("article-author");
let card = document.getElementById("article-card");

function shareFunction() {  

  if (x.style.display === "none" && y.style.display === "grid") {
    x.style.display = "block";
    y.style.display = "none";
  } 
      
  else {
    x.style.display = "none";
    y.style.display = "grid";
  } 

}
