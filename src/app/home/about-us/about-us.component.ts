import { Component, OnInit } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  title = 'About Us';
  constructor(private titleService: Title, private meta: Meta) { }
  // constructor() { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    
    this.meta.updateTag({name: 'keywords', content: 'This is the About Page'});
    this.meta.updateTag({name: 'description', content: 'This is the About Page Description'});
  }

}
