const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main = document.getElementById('main');
const form = document.getElementById('form');
const search =document.getElementById('search');

                // var p=1
                // alert(p)
    var i=1;

getMovies(APIURL+i)

  // Obtenir film 
function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{

    // Montrer les films
       showMovies(data.results); // Transmettre les resultats 
    //    console.log(data.results);
    })
}

// Affiche des films
function showMovies(data){
    main.innerHTML =''
// Parcourir les données  
    data.forEach(movie => {
        const {title,overview,poster_path,vote_average}=movie;
        const movieE1 =document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML =`
                <img src="${IMGPATH+poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${color(vote_average)}">${vote_average}</span>
                </div>
                
                <div class="overview">

                    <h3>Overview</h3>
                    ${overview}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                    quibusdam a sit consectetur aspernatur corporis quam iste facere, 
                    dignissimos consequatur illum doloribus pariatur molestias at ullam 
                    laudantium temporibus? Officiis, sunt!

                </div>
         
        
            `
            main.appendChild(movieE1);
    })
}

function color(vote){
    if(vote >=8){
        return 'green'

    }else if(vote >=5){

        return 'orange'
    }else

    return 'red'

}
search.addEventListener('keyup',(e) =>{
    e.preventDefault();
    const searchTerm =search.value;
    if(searchTerm){  
        getMovies(SEARCHAPI+searchTerm)
        // p++
        // alert(p)
    }else{
        getMovies(APIURL);
    }
})


window.addEventListener('scroll',function(){
    if((document.body.scrollHeight)<=(window.innerHeight+window.scrollY)){
        i++;
        getMovies(APIURL+i);
    }
})

//document.querySelector(".loader").style.visibility="hidden";

window.onload=function(){
    //alert('ok')
 if(document.readyState){
     setTimeout(function(){
     document.querySelector(".loader").style.visibility="hidden";
     main.style.visibility="visible";
    }, 3000)
 }else{
     document.querySelector(".loader").style.visibility="visible";
     main.style.visibility="hidden";
 }
}


   