var foto = [
   "img/metroA.jpeg",
   "img/metroD.jpeg",
];

var para = [
   "Un esempio di misura analogica",
   "Un esempio di misura digitale",
];

var i=0;

function avanti(){
   if (i<foto.length-1)
      i++;
   else
      i=0;

   document.querySelector("#metro").src = foto[i];
   document.querySelector("#ex").innerText = para[i];
}
