import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-online-market',
  templateUrl: './online-market.component.html',
  styleUrls: ['./online-market.component.css']
})
export class OnlineMarketComponent implements OnInit {

  title = 'FlamingosTech | Online marketplace in India';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Online marketplace in india Online marketplace services in india'});
    this.meta.updateTag({name: 'description', content: 'FlamingosTech builds software that supports e-commerce and online marketplace services in India'});
  }

}
