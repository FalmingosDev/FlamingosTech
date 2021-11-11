import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.css']
})
export class RequestDemoComponent implements OnInit {
  firstBol:boolean=true;
  secBol:boolean=false;
  thridBol:boolean=false;
  fourthBol:boolean=false;
  fifthBol:boolean=false;
  sixthBol:boolean=false;
  sevBol:boolean=false;
  eightBol:boolean=false;
  nineBol:boolean=false;
  first_box: [
    { name: 'JS',  selected: true, id: 1 },
    { name: 'CSS',  selected: false, id: 2 },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  //1st box
  side_next(e:any):void{
    e.preventDefault();
    this.firstBol=false;
    this.secBol=true;
  }

  //2nd box
  side_prev_2():void{
    this.firstBol=true;
    this.secBol=false;
  }
  side_next2():void{
    this.secBol=false;
    this.thridBol=true;
  }

  //3rd box
  side_prev_3():void{
    this.secBol=true;
    this.thridBol=false;
  }
  side_next_3():void{
    this.thridBol=false;
    this.fourthBol=true;
  }

  //4th box
  side_prev_4():void{
    this.fourthBol=false;
    this.thridBol=true;
  }
  side_next_4():void{
    this.fourthBol=false;
    this.fifthBol=true;
  }

  //5th box
  side_prev_5():void{
    this.fifthBol=false;
    this.fourthBol=true;
  }
  side_next_5():void{
    this.fifthBol=false;
    this.sixthBol=true;
  }

  //6th box
  side_prev_6():void{
    this.sixthBol=false;
    this.fifthBol=true;
  }
  side_next_6():void{
    this.sixthBol=false;
    this.sevBol=true;
  }


  //7th box
  side_prev_7():void{
    this.sevBol=false;
    this.sixthBol=true;
  }
  side_next_7():void{
    this.sevBol=false;
    this.eightBol=true;
  }


  // 8th box
  side_prev_8():void{
    this.eightBol=false;
    this.sevBol=true;

  }
  side_next_8():void{
    this.eightBol=false;
    this.nineBol=true;
  }


  //9th box
  side_prev_9():void{
    this.nineBol=false;
    this.eightBol=true;
  }

}
