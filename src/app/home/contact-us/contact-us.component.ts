import { Component, OnInit } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  title = 'Contact Us';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    
    this.meta.updateTag({name: 'keywords', content: 'This is the Contact Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Contact Page Description'});
  }

}
