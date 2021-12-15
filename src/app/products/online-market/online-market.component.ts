import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-online-market',
  templateUrl: './online-market.component.html',
  styleUrls: ['./online-market.component.css']
})
export class OnlineMarketComponent implements OnInit {

  title = 'Online Market';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'This is the Online Market Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Online Market Page Description'});
  }

}
