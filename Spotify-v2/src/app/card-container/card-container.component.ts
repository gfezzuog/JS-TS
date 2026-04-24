import { Component, OnInit } from '@angular/core';
import { Icard } from '../card/card.component';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  // cards: Map<string, string> = new Map<string, string>([
  //   ["Utattemita", "https://i.scdn.co/image/ab67616d0000b273f5912abed0ea22e746552771"],
  //   ["Hellvisback", "/assets/hellvisback.jpg"],
  //   ["Vivarium", "https://i.scdn.co/image/ab67616d0000b2735e78b0e461c31729c636730b"],
  //   ["Kyougen", "https://i.scdn.co/image/ab67616d0000b27364381fb5ba549f149ae74560"],
  //   ["io Individuo", "https://i.scdn.co/image/ab67616d00001e0298c3f51e4a8ccf497adaa0e9"],
  //   ["Kingdom Hearts", "https://i.scdn.co/image/ab67706f00000002fdf2bf282f92e8ac4888d2a5"]
  // ])
  // cardsName: string[] = []

  cards: Icard[] = [
    {name: "Utattemita", img: "https://i.scdn.co/image/ab67616d0000b273f5912abed0ea22e746552771"},
    {name: "Hellvisback", img: "/assets/hellvisback.jpg"}
  ]
  
  constructor() {
    // this.cardsName = Array.from(this.cards.keys());
   }

  ngOnInit(): void {
  }

}
