import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.css']
})
export class DataManagementComponent implements OnInit {

  title = 'FlamingosTech | Data management solution companies';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'data management solutions companies'});
    this.meta.updateTag({name: 'description', content: 'One of Kolkata top data management solution companies, has been providing services for various clients over a period of time'});
  }

}
