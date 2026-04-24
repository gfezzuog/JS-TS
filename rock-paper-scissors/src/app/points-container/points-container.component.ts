import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-points-container',
  templateUrl: './points-container.component.html',
  styleUrls: ['./points-container.component.css']
})
export class PointsContainerComponent implements OnInit {

  @Input() playerTotPoints!: number
  @Input() cpuTotPoints!: number
  @Input() parTot!: number
  @Input() choice!: number
  @Input() enemyChoice!: number

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
  constructor() { }

  ngOnInit(): void {
  }

}

