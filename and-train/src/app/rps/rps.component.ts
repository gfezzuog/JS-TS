import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.css']
})
export class RpsComponent implements OnInit {

  @Input() nome: string | null = null
  constructor() { }

  ngOnInit(): void {
    console.log(this.nome)
  }

}
