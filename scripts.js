const a = document.getElementById("share");
const b = document.getElementById("article-author");
const c = document.getElementById("share-desktop");
const d = document.getElementById("share-pointer");

function shareFunction() {
  let w = document.documentElement.clientWidth || window.innerWidth;
  const targetWidth = 1024;  

  if (w < targetWidth && a.style.display === "none" && b.style.display === "grid") {
    a.style.display = "block";
    b.style.display = "none";
  } 

  else if (w >= targetWidth && c.style.display === "none" && d.style.display === "none" ) {
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

