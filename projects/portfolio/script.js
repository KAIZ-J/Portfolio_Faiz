function tgl(){
 const nv = document.querySelector(".navbar");
 const cl = document.getElementById("nav-icon");
    if(nv.style.display=="none"){
      nv.style.display = "flex";
      cl.src="/projects/portfolio/assets/close.png";
    
      }
      else {nv.style.display="none";
      cl.src="/projects/portfolio/assets/menu.png" ;
      }
      }