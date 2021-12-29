import { Component, OnInit } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  title = 'FlamingosTech- Team';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    
    this.meta.updateTag({name: 'keywords', content: 'This is the Team Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Team Page Description'});
  }
}
