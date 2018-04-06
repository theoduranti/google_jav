
function affichage() 
{
    var display1 = document.getElementById('display');
    var section = document.getElementById('section');
    display1.style.display = "none" ;
    section.style.display = "block" ;
}
setTimeout ( function() { alert ("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please") }, 10000 ) ;


function adresse(){
    var redirect = "https://www.google.com/#q=" ;
    var chercher = document.getElementById('barre').value ;
    var conca = window.open(redirect.concat(chercher), '_+');
}

