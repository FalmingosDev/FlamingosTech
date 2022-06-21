import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-fleet-manage',
  templateUrl: './fleet-manage.component.html',
  styleUrls: ['./fleet-manage.component.css']
})
export class FleetManageComponent implements OnInit {

  title = 'FlamingosTech | Fleet employee management in India';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Fleet employee management india Best fleet employee system'});
    this.meta.updateTag({name: 'description', content: 'Top level fleet employee management in India by FlamingosTech'});
  }

}
