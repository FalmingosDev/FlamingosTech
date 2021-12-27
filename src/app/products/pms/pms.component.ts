import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pms',
  templateUrl: './pms.component.html',
  styleUrls: ['./pms.component.css']
})
export class PmsComponent implements OnInit {

  title = 'Property Management System';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'This is the Property Management System Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Property Management System Page Description'});
  }

}
