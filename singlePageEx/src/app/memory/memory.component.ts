import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css'],
})
export class MemoryComponent implements OnInit {
  img = [
    { id: 1, path: '/assets/memory/Air_baloon.png' },
    { id: 2, path: '/assets/memory/Bicycle.png' },
    { id: 3, path: '/assets/memory/Ship.png' },
    { id: 4, path: '/assets/memory/Submarine.png' },
    { id: 5, path: '/assets/memory/Tractor.png' },
    { id: 6, path: '/assets/memory/Tram.png' },
  ];

  selectedCards: {
    id: number;
    path: string;
    flipped: boolean;
    matched: boolean;
  }[] = [];

  memoryMatrix: {
    id: number;
    path: string;
    flipped: boolean;
    matched: boolean;
  }[] = [];
  constructor() {}

  ngOnInit(): void {
    this.createMatrix();
  }

  createMatrix() {
    const duplicated = [...this.img, ...this.img].map((card) => ({
      ...card,
      flipped: false,
      matched: false,
    }));
    this.memoryMatrix = this.shuffleArray(duplicated);
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
  }

  onCardSelected(index: number): void {
    const card = this.memoryMatrix[index];

    if (!card || card.flipped || card.matched) return;
    card.flipped = true;
    this.selectedCards.push(card);

    if (this.selectedCards.length === 2) {
      const [first, second] = this.selectedCards;

      if (first.id === second.id) {
        setTimeout(() => {
          first.matched = true;
          second.matched = true;
          this.selectedCards = [];
        }, 400);
      } else {
        setTimeout(() => {
          first.flipped = false;
          second.flipped = false;
          this.selectedCards = [];
        }, 800);
      }
    }
  }
}
