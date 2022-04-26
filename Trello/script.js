const btn = document.getElementById('btnColonne');
const main = document.getElementById('main');
const btnNote = document.getElementById('btnNote');
const header = document.getElementById('header');
const container = document.getElementById('container');
//   Formulaire Modal
const textarea =document.getElementById('textarea');
const date = document.getElementById('date');
const time = document.getElementById('time');
const hour = document.getElementById('hour');
const clique = document.getElementById('submit');
const showMessage = document.getElementById('showMessage');
const form = document.querySelector('form');


var i= 0;

btnNote.disabled = true;
btn.addEventListener('click',()=>{  
    // console.log(i);
    if (i<5) {
        generer();
        btnNote.disabled = false;
        //  console.log(i)
    i++;
    } 
 })

const togg = document.getElementById('menu');
togg.addEventListener('click', ()=>{
    header.classList.toggle('afficheMenu')
});


showMessage.addEventListener('click', ()=>{
    save.classList.toggle('show');
})
// const tabColor=['#008080','#DAA520','#B22222','#0000FF','#4B0082'];
const tabColor=['#979392','#C19A6B','#FFB5DA','#FFFFcc','#95d775'];
function generer() {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'colonne');
    newDiv.setAttribute('class', 'animate__animated animate__fadeInTopLeft');
    // var img = document.createElement("img");
    // img.src = "dev.png";
    var divColonne1 = document.createElement('div');
    divColonne1.setAttribute('class','colonne1');
    var inputColon = document.createElement('input');
    inputColon.setAttribute('type','text');
    inputColon.setAttribute('id','note');

    var supprimer = document.createElement('i');
    supprimer.setAttribute('class', 'fa-solid fa-trash-can')
    supprimer.setAttribute('id', 'delete');
    var corbeille = document.createElement('i');
    corbeille.setAttribute('class', 'fa-solid fa-trash');
    corbeille.setAttribute('id', 'corbeille');

    var span = document.createElement('span');
    var p = i+1;
    inputColon.value = 'colonne' + p;
    
    divColonne1.appendChild(span);
    span.appendChild(inputColon)
    newDiv.appendChild(divColonne1);
    newDiv.appendChild(supprimer);
    newDiv.appendChild(corbeille);

    // newDiv.appendChild(img);
    main.append(newDiv);
    newDiv.style.background=tabColor[i];
    newDiv.style.backgroundImage='url("tabs.png")';
    newDiv.style.backgroundRepeat='no-repeat';
    newDiv.style.backgroundPosition='center';
    newDiv.style.backgroundSize='100%';

    corbeille.addEventListener('click',function(){
        main.removeChild(this.parentElement);
        i--;
      })
      
    //   supprimer.addEventListener('click',function(){ 
    //       alert('You');
    //     colonne.removeChild(this.parentElement);
    //   })
}
  

//    Js MODAL
const closse = document.getElementById('close');
const modal = document.getElementById('modal');
// Show modal
btnNote.addEventListener('click', ()=>modal.classList.add('show-modal'));
closse.addEventListener('click',function(){
     modal.classList.remove('show-modal')
})

clique.addEventListener('click', ()=>{
    validForm();
    if (cpt==0) {
        var newDiv = document.querySelector('#colonne');
        modal.classList.remove('show-modal');
        maFct(textarea.value,newDiv);
        // maFct(date.value,newDiv);        
}
});

function maFct(text,newDiv){
    // console.log(value);
    var divInput = document.createElement('div');
    divInput.setAttribute('class','nbrColonne');
    var tache = document.createElement('textarea');
    tache.value = text;
    // inputNbrColone.value= hour;
    tache.setAttribute('type','textarea');
    tache.setAttribute('class','blockNote');
    var divFleche = document.createElement('div');
    divFleche.setAttribute('class', 'fleche');
    var flecheLeft = document.createElement('button');
    flecheLeft.setAttribute('class', 'flecheLeft');
    flecheLeft.innerHTML = "<<";
    var deleteTask = document.createElement('i');
    deleteTask.setAttribute('class', 'fa-solid fa-trash-can');
    deleteTask.setAttribute('id', 'taskbar');
    var flecheRight = document.createElement('button');
    flecheRight.setAttribute('class', 'flecheRight');
    flecheRight.innerHTML = ">>";


    divFleche.appendChild(flecheLeft);
    divFleche.appendChild(tache);
    divFleche.appendChild(deleteTask);
    divFleche.appendChild(flecheRight);
    newDiv.appendChild(divFleche);

    flecheRight.addEventListener('click', ()=>{
        flecheRight.parentElement.parentElement.nextElementSibling.appendChild(flecheRight.parentElement)
        // console.log(flecheRight)
        
    })
    
    flecheLeft.addEventListener('click', ()=>{
        flecheLeft.parentElement.parentElement.previousElementSibling.appendChild(flecheLeft.parentElement)
        // console.log(flecheLeft)
    })

    tache.addEventListener('mouseover', ()=>{
        tache.value=date.value + " " + time.value + " " + hour.value;
        // alert('ok');
    })
    tache.addEventListener('mouseout', ()=>{
        tache.value=textarea.value;
    })

       deleteTask.addEventListener('click',function(){ 
        //   alert('You');
        //   this.parentElement.parentElement.removeChild(this.parentElement);
        var message = document.querySelector('#message');
        message.appendChild(divFleche);
      })

      var save = document.querySelector('.save');
      save.addEventListener('click',function(){
          divFleche.appendChild(message)
      })
      


    //   save.addEventListener('click', function(){ 
    //     alert('You');
    // })
      var currentTime = moment();
    //   console.log(currentTime);
      var date = form[1].value;
     var  dateDebut = form[2].value;
     var  dateFin = form[3].value;
      var startDate = moment.duration(dateDebut,'milliseconds');
      var endDate = moment.duration(dateFin,'milliseconds');
      var startEndDiff = endDate - startDate;
      var dateEnter = moment(date + " " + dateDebut,"YYYY-MM-DD HH:mm");
      

      var validDate = dateEnter - currentTime;
      if(validDate<0){
          alert('Veuillez saisir une date valide');
      }

      if(startEndDiff<0){
          alert("L'heure de fin saisi doit supérieur à l'heur de début ");
      }
      
      setTimeout(() => {
        tache.style.background= "green";
      }, validDate);

      setTimeout(() => {
          tache.style.background= 'red';
        flecheLeft.disabled= true;
        flecheRight.disabled= true;
      }, validDate+startEndDiff);

 } 

 

///////////// Validation du Formulaire  Modal /////////////

function validForm(){
    const textValid = textarea.value.trim();
    const dateValid =  date.value.trim();
    const timeValid = time.value.trim();
    const hourValid = hour.value.trim();
    cpt= 0;
    if (textValid==='') {
        showError(textarea,'Veuillez remplir le champ');
        cpt++;
    }else{
        showSuccess(textarea);
    }

    if (dateValid === '') {
        showError(date,'Veuillez entrez une date');
        cpt++;
    }else{
        showSuccess(date);
    }

    if (timeValid === '') {
        showError(time,'Veuillez entrez la date de début');
        cpt++;
    }else{
        showSuccess(time)
    }

    if (hourValid=== '') {
        showError(hour,'Veuillez entrez la date de fin');
        cpt++;
    }else{
        showSuccess(hour)
    }
    if(cpt==0){
        return true;
    }else{
        return false;
    }
}

function showError(balise,message){
    const formControl =document.querySelector('.form-control');
    formControl.className = 'form-control error';
    const small = document.querySelector('small');
    small.innerText = message;
}

function showSuccess(balise){
    const formControl =document.querySelector('.form-control');
    formControl.className = 'form-control success';
}

as
function getdata(url){
    let data = fetch(url).then(response =>{
        return response.json()
    })
}



window.onload = async () =>{
    let data = await getData();
    alert(await getdata())
}
async function getdata(){
    let form = new FormData();
    form.append("controller","securite");
    form.append("Nom","Diop");
    form.append("Prenom","Cheikh Tidiane");

    let response = await fetch("http://localhost:8002",{
        method:'POST',
        body:form
    })
    return await response.json();
}