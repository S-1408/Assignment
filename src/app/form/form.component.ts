import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public teldata:any[] =[
    {
      tel:''
    }
  ]
  hideInput:boolean =false;
  constructor() { }


  ngOnInit(): void {
  }

  logValue(data:any){
 console.log(data.value);
  }

  addTel(){
    this.hideInput = true;
    this.teldata.push(
      {
        tel:''
      }
    )
  }
}

