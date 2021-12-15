import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//  import * as $ from 'jquery';
//  import* as hcOffcanvasNav from 'hc-offcanvas-nav';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() setPageMeta = new EventEmitter(); 
  

  constructor() { }

  ngOnInit(): void {}
  openNav() {
    (<HTMLElement>document.getElementById("mySidenav")).style.width = "170px";
  }

   closeNav() {
    (<HTMLElement>document.getElementById("mySidenav")).style.width = "0";
  }

  setMeta(){
    this.setPageMeta.emit();
  }

}
