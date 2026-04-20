let doppio = x => x * 2
 
doppio = () => 2

 function onclick1() {
    console.log(typeof doppio);
  } 
 
 function onclick2() {
    console.log(double(2));
  } 

 const bottone_doppio = document.getElementById("doppio");
 const bottone_double = document.getElementById("double");
 bottone_doppio.addEventListener("click", onclick1);
 bottone_double.addEventListener("click", onclick2);
//  console.log(element)

let double = function(x) {return x * 2}



// () => ({})