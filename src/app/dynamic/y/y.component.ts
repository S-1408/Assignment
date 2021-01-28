import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  save(text){
 console.log(text.value);
 alert(JSON.stringify(text.value));
  }
}
