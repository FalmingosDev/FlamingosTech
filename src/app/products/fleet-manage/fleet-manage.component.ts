import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-fleet-manage',
  templateUrl: './fleet-manage.component.html',
  styleUrls: ['./fleet-manage.component.css']
})
export class FleetManageComponent implements OnInit {

  title = 'FlamingosTech- Fleet / Employee Management System with Real Time Geo Location Tracking Facility';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'This is the Employee Management System Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Employee Management System Page Description'});
  }

}
