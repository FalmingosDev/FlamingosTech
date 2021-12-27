import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-turnkey-projects',
  templateUrl: './turnkey-projects.component.html',
  styleUrls: ['./turnkey-projects.component.css']
})
export class TurnkeyProjectsComponent implements OnInit {

  title = 'Turnkey Project / Event Management Application ';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'This is the Turnkey Project / Event Management Application Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Turnkey Project / Event Management Application Page Description'});
  }

}
