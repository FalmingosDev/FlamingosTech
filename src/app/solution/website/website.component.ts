import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  title = 'FlamingosTech- Responsive Website with CMS';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'This is the Responsive Website with CMS Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Responsive Website with CMS Page Description'});
  }

}
