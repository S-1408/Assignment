import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
@Input() a:any;
  constructor() { }

  ngOnInit(): void {
  }

}
