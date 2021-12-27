import { Component, OnInit } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  title = 'FlamingosTech | Kolkata IT Company | About Us';
  constructor(private titleService: Title, private meta: Meta) { }
  // constructor() { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    
    this.meta.updateTag({name: 'keywords', content: 'Kolkata it company, top it companies in kolkata, it companies in kolkata'});
    this.meta.updateTag({name: 'description', content: 'FlamingosTech is an IT company in kolkata and was established in 2016. We offer various services including software development, cloud computing, digital marketing, and many more.'});
  }


}
