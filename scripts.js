let x = document.getElementById("share");
let y = document.getElementById("article-author");


function shareFunction() {
  let w = document.documentElement.clientWidth || window.innerWidth;
  var targetWidth = 768; 

  if (w <= targetWidth && x.style.display === "none" && y.style.display === "grid") {
    x.style.display = "block";
    y.style.display = "none";
  } 
        
  else {
    x.style.display = "none";
    y.style.display = "grid";
  } 

}

