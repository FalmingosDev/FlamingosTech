import { Component, OnInit } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cookie-page',
  templateUrl: './cookie-page.component.html',
  styleUrls: ['./cookie-page.component.css']
})
export class CookiePageComponent implements OnInit {

  title = 'FlamingosTech | Kolkata IT Company |Cookies';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    
    this.meta.updateTag({name: 'keywords', content: 'This is the Cookies Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Cookies Page Description'});
  }
}
