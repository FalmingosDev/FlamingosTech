import { Component, OnInit } from '@angular/core';
//import { jquery } from '../../../../node_modules/jquery/';
 import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeElement:any;
  foundActive:any;
  defaultWidth:any;
  lineWidth:any;
  defaultPosition: any;
  menuLine: any;
  linePosition: any;
  constructor() { }

  ngOnInit(): void {
  }

}
