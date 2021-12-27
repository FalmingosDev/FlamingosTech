import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css']
})
export class OurProjectsComponent implements OnInit {

  title = 'FlamingosTech | Kolkata IT Company |Projects';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    
    this.meta.updateTag({name: 'keywords', content: 'This is the Projects Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Projects Page Description'});
  }

}
