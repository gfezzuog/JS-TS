const submit = document.getElementById("submit")

submit.addEventListener('click', fight)
// const enemy = [0, 1, 2]

let winner = (player, cpu) => (player - cpu + 3) %3
let cpu_wins = 0
let player_wins = 0

function fight() {
  const select = document.getElementById("morra")
  const choice = Number(select.value)
  let enemy_choice = Math.floor(Math.random() * 3);
  let finish = winner(choice, enemy_choice)
  console.log(`Hai scelto ${select.selectedOptions[0].text}`)
  if (finish == 0)
    console.log("Parcheggio")
  else if (finish == 1)
  {
    console.log("Winner: Player!!")
    player_wins += 1
  }
  else
  {
    console.log("Winner: CPU")
    cpu_wins += 1
  }
  if(cpu_wins > player_wins)
    console.log(`La cpu sta vincendo; punti cpu: ${cpu_wins} tu: ${player_wins}`)
  else if (player_wins > cpu_wins)
    console.log(`Stai vincendo; tu: ${player_wins} punti: ${cpu_wins}`)
  else
    console.log(`Siete in Parcheggio; tu: ${player_wins} punti: ${cpu_wins}`)

}






// const number_check = (inputvalue) => {
//   for (let char of inputvalue) {
//     if (isNaN(char) && char !== " ") return true;
//   }
//   return false;
// };

// const onclick = () => {
//   const inputvalue = input_row.value;
//   if (!inputvalue) console.log("Error: Null input");
//   else if (inputvalue.length < 5) console.log("Error: Less then 5 char");
//   else if (!number_check(inputvalue)) console.log("Error: Contains Numbers");
//   else console.log(`OK! value: ${inputvalue}`);
// };

// const bottone_submit = document.getElementById("btn1");
// const input_row = document.getElementById("input1");
// bottone_submit.addEventListener("click", onclick);

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
