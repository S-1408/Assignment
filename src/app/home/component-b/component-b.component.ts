import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
@Input() b:any;
  constructor() { }

  ngOnInit(): void {
  }

}
