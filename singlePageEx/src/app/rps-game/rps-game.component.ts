import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rps-game',
  templateUrl: './rps-game.component.html',
  styleUrls: ['./rps-game.component.css']
})
export class RpsGameComponent implements OnInit {

  field = new FormControl('0');

  playerWins: number = 0;
  cpuWins: number = 0;
  parcheggiTot: number = 0;
  choice: number = 0;
  enemyChoice: number = 0;

  // Options container
  options = [
    {val: 0, cont: "Sasso",},
    {val: 1, cont: "Carta"},
    {val: 2, cont: "Forbici"}
  ]

  // Img container
  imgs: {val: number, path: string}[] = [
    {val: 0, path: "assets/rock.png"},
    {val: 1, path: "assets/paper.png"},
    {val: 2, path: "assets/scissors.png"}
  ]
   getPath(n: number): string | undefined{
    const img = this.imgs.find(i => i.val === n)
    const ret = img?.path

    return(ret)
  }

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

