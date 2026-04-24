import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-rps',
  templateUrl: './form-rps.component.html',
  styleUrls: ['./form-rps.component.css']
})
export class FormRpsComponent implements OnInit {


  field = new FormControl('0');

  playerWins = 0;
  cpuWins = 0;
  parcheggiTot = 0;
  choice = 0;
  enemyChoice = 0;

  // options: number[] = [0, 1, 2]
  options = [
    {val: 0, cont: "Sasso",},
    {val: 1, cont: "Carta"},
    {val: 2, cont: "Forbici"}
  ]

  winner = (player: number, cpu: number) =>
    (player - cpu + 3) % 3;

  fight(): void {
    this.choice = Number(this.field.value);
    this.enemyChoice = Math.floor(Math.random() * 3);
    const finish = this.winner(this.choice, this.enemyChoice);


    if (finish === 0) {
      console.log("Parcheggio");
      this.parcheggiTot++;
    } else if (finish === 1) {
      console.log("Winner: Player!!");
      this.playerWins++;
    } else {
      console.log("Winner: CPU");
      this.cpuWins++;
    }
  }


    constructor() { }

    ngOnInit(): void {
      this.field.valueChanges.subscribe({
        next(value) {
          console.log(value)
        },
      })

  }

}

