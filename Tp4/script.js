document.body.onload=function(){
    i=1;
   var image=document.getElementById('image');
   
   var newDiv=document.createElement("div")
   
   var imgC=document.createElement('img');
   
   
   newDiv.appendChild(imgC)
   image.appendChild(newDiv)


    setInterval(() => {
   
   if(i>3){i=1}
   imgC.src="img"+i+".jpg";
   imgC.addEventListener('mousemove',function(){
    imgC.className="survol"
   })  
   newDiv.className="photo"
   imgC.className="photo";
   newDiv.appendChild(imgC)
   image.appendChild(divim)
   imgC.style.transition="all 0.6s ease"; 
   i++
}, 3000); 

d.onclick=function(){
  i--
  if(i<1){i=3}
 
  imgC.src="img"+i+".jpg"; 
  imgC.className="photo" 
newDiv.appendChild(profit)
   image.appendChild(divim)
}

g.onclick=function(){
  i++
  if(i>3){i=1}
  imgC.src="img"+i+".jpg"; 
  imgC.className="photo" 
   newDiv.appendChild(imgC)   
   image.appendChild(newDiv) 
}
}