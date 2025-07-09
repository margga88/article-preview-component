let a = document.getElementById("share");
let b = document.getElementById("article-author");
let c = document.getElementById("share-desktop");
let d = document.getElementById("share-pointer");

function shareFunction() {
  let w = document.documentElement.clientWidth || window.innerWidth;
  var targetWidth = 768;  

  if (w <= targetWidth && a.style.display === "none" && b.style.display === "grid") {
    a.style.display = "block";
    b.style.display = "none";
  } 

  else if (w > targetWidth && c.style.display === "none" && d.style.display === "none" ) {
    c.style.display = "block";
    d.style.display = "block";    
  } 
      
  else {
    a.style.display = "none";
    b.style.display = "grid";
    c.style.display = "none";
    d.style.display = "none";    
  } 

}

