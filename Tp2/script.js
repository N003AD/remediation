
const container = document.getElementById('container');
const divFin = document.getElementById('divFin');

var objet = [
    {
        "icone":"nav-icon fas fa-tachometer-alt",
        "titre":"Dashbord",
        "msg":"null",
        "icone1":"right fas fa-angle-left",
        "cle":null
    },
    {
        "icone":"nav-icon fas fa-th",
        "titre":"Widgets",
        "msg":"null",
        "icone1":"right badge badge-danger",
        "cle":null
    },
    {
        "icone":"nav-icon fas fa-copy",
        "titre":"Layout options",
        "msg":"6",
        "icone1":"fas fa-angle-left right",
        "cle":null
    }, //////////////////////////////
    {
        "icone":"nav-icon fas fa-chart-pie",
        "titre":"Charts",
        "msg":"null",
        "icone1":"right fas fa-angle-left", 
        "cle":[
                {
                    "icone":"",
                    "msg":"",
                    "titre":"ChartJS",
                    "icone1":"far fa-circle nav-icon",
                    "cle":null 
                },
                {
                    "icone":"",
                    "msg":"",
                    "titre":"Flot",
                    "icone1":"far fa-circle nav-icon",
                    "cle":null
                },
                {
                    "icone":"",
                    "msg":"",
                    "titre":"Inline",
                    "icone1":"far fa-circle nav-icon",
                    "cle":null
                },
                {
                    "icone":"",
                    "msg":"",
                    "titre":"uPlot",
                    "Icone1":"far fa-circle nav-icon",
                    "cle":null
                }
            ]
       
    },
    ////bnbbbbb///
    {
        "icone":"nav-icon fas fa-tree",
        "titre":"UI Elements",
        "msg":"null"  ,
        "icone1":"fas fa-angle-left right",
        "cle":null
    },
    {
        "icone":"nav-icon fas fa-edit",
        "titre":"Forms",
        "msg":"null"  ,
        "icone1":"fas fa-angle-left right",
        "cle":null
         
    },
    {
        "icone":"nav-icon fas fa-table",
        "titre":"Tables",
        "msg":"null",
        "icone1":"fas fa-angle-left right",
        "cle":null
    }
]


for (let i = 0; i < objet.length; i++) {
    myFct(objet[i])
}

 function myFct(menu){
    var newDiv =document.createElement('div');
    var iconeFirst = document.createElement('i');
    var para = document.createElement('span');    
    var iconeSecond = document.createElement('i');
    var iconeThree = document.createElement('i');
    
    newDiv.appendChild(iconeFirst);
    newDiv.appendChild(para);
    newDiv.appendChild(iconeSecond);
    newDiv.appendChild(iconeThree);

    
    divFin.appendChild(newDiv);

    iconeFirst.setAttribute("class", menu["icone"]);
    para.innerHTML = menu["titre"];
    // console.log("ok: "+menu['cle'])
    // console.log("ojjj")
    if(menu['cle'] != null){
        console.log(menu['cle'])
        menu['cle'].forEach(function(item){
            myFct(item);
        })
        // myFct(menu['cle']);
    }
    iconeSecond.setAttribute("class", menu["msg"]);
    iconeThree.setAttribute("class", menu["icone1"]);
    newDiv.setAttribute("class", "header");
 }
    
