import { Component, OnInit } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.css']
})
export class PrivacyPageComponent implements OnInit {

  title = 'FlamingosTech- Privacy Policy';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    
    this.meta.updateTag({name: 'keywords', content: 'This is the Privacy Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Privacy Page Description'});
  }

}
