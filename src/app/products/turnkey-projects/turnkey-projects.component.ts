import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-turnkey-projects',
  templateUrl: './turnkey-projects.component.html',
  styleUrls: ['./turnkey-projects.component.css']
})
export class TurnkeyProjectsComponent implements OnInit {

  title = 'FlamingosTech | Turnkey projects in india ';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Upcoming turnkey projects in india Event management system application'});
    this.meta.updateTag({name: 'description', content: 'Turnkey project application in India by FlamingosTech'});
  }

}
