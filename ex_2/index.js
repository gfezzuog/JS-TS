const number_check = (inputvalue) => {
  for (let char of inputvalue) {
    if (isNaN(char) && char !== " ") return true;
  }
  return false;
};

const onclick = () => {
  const inputvalue = input_row.value;
  if (!inputvalue) console.log("Error: Null input");
  else if (inputvalue.length < 5) console.log("Error: Less then 5 char");
  else if (!number_check(inputvalue)) console.log("Error: Contains Numbers");
  else console.log(`OK! value: ${inputvalue}`);
};

const bottone_submit = document.getElementById("btn1");
const input_row = document.getElementById("input1");
bottone_submit.addEventListener("click", onclick);

// let doppio = x => x * 2

// doppio = () => 2

//  function onclick1() {
//     console.log(typeof doppio);
//   }

//  function onclick2() {
//     console.log(double(2));
//   }

//  const bottone_doppio = document.getElementById("doppio");
//  const bottone_double = document.getElementById("double");
//  bottone_doppio.addEventListener("click", onclick1);
//  bottone_double.addEventListener("click", onclick2);
// //  console.log(element)

// let double = function(x) {return x * 2}

// () => ({})
