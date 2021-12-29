import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-st-retail',
  templateUrl: './st-retail.component.html',
  styleUrls: ['./st-retail.component.css']
})
export class StRetailComponent implements OnInit {

  title = 'FlamingosTech- Standalone Retail Outlet (POS) Management System';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'This is the Standalone Retail Outlet Management System Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Standalone Retail Outlet Management System Page Description'});
  }

}
