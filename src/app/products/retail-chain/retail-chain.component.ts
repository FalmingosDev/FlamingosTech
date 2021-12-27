import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-retail-chain',
  templateUrl: './retail-chain.component.html',
  styleUrls: ['./retail-chain.component.css']
})
export class RetailChainComponent implements OnInit {

  title = 'Retail Chain with Inventory Management System';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'This is the Retail Chain with Inventory Management System Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Retail Chain with Inventory Management System Page Description'});
  }

}
