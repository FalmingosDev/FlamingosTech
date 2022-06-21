import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-retail-chain',
  templateUrl: './retail-chain.component.html',
  styleUrls: ['./retail-chain.component.css']
})
export class RetailChainComponent implements OnInit {

  title = 'FlamingosTech | Retail chain with inventory management';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Best pos software for retail stores in india Best billing software for Pos retail'});
    this.meta.updateTag({name: 'description', content: 'FlamingosTech offers retail change with inventory management services.'});
  }

}
