const showNotif=document.getElementById("affiche_notification")
const flex=document.getElementById("flex")
const button=document.querySelectorAll("button");
 
    for(let i=0;i<button.length;i++){
        button[i].addEventListener('click',function(e) {

            
          var a =e.target.classList[0]
            notification(a,e)
        })
        
    }

 function notification(notif,e){
     var newDiv=document.createElement("div");
     var newH1=document.createElement("h1");
     newH1.innerHTML=e.target.innerHTML;
     newDiv.appendChild(newH1);
     newDiv.className=notif
     newDiv.classList.add("flex")
     showNotif.appendChild(newDiv); 
     setInterval((e)=>{
        newDiv.remove();
     },2500)
 }