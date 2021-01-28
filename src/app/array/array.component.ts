import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  constructor() { }
   arr = ['2','3','10','15','26','35','50','63','69']

data:any;
  ngOnInit(): void {

  }
  findindex(ind){
    console.log(ind.value);
    console.log(this.arr[ind.value]);
    this.data = this.arr[ind.value]
  this.arr.forEach((number,index) =>{
      console.log(number,index);


    })
  }
}
