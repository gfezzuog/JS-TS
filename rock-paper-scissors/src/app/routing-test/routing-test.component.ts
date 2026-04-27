import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-test',
  templateUrl: './routing-test.component.html',
  styleUrls: ['./routing-test.component.css']
})
export class RoutingTestComponent implements OnInit {

  val!: string | null

  constructor(public route:ActivatedRoute) { 
    this.val = this.route.snapshot.paramMap.get('val')
    console.log(this.val)
  }

  ngOnInit(): void {
  }

}
