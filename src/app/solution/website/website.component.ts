import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  title = 'FlamingosTech | Digital marketing ad kolkata agency';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Digital marketing ad kolkata agency Kolkata app development service'});
    this.meta.updateTag({name: 'description', content: 'Best digital marketing ad agency in kolkata with responsive website with cms'});
  }

}
