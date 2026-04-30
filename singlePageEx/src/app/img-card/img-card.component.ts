import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit, OnChanges {

  @Input() imgPath!: string;
  @Input() imgId!: number;
  @Input() flipped!: boolean;
  @Input() matched!: boolean;

  @Output() cardClicked = new EventEmitter<{ id: number; path: string }>();

  defaultPath: string = '/assets/memory/Pattern.png';
  pathShowed: string = this.defaultPath;

  ngOnInit(): void {
    this.pathShowed = this.defaultPath;
  }

  ngOnChanges(changes: SimpleChanges): void {

    // Carta scoperta
    if (changes['flipped']?.currentValue === true) {
      this.pathShowed = this.imgPath;
    }

    // Carta coperta di nuovo
    if (changes['flipped']?.currentValue === false && !this.matched) {
      this.pathShowed = this.defaultPath;
    }

    // Carta trovata → sparisce
    if (changes['matched']?.currentValue === true) {
      this.pathShowed = '';
    }
  }

  checkCard(): void {
    if (this.flipped || this.matched) return;

    this.cardClicked.emit({
      id: this.imgId,
      path: this.imgPath
    });
  }
}
