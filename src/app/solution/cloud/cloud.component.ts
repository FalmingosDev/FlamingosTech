import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent implements OnInit {

  title = 'FlamingosTech- Cloud Based Custom ERP & CRM Application';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'This is the Cloud Based Custom ERP & CRM Application Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Cloud Based Custom ERP & CRM Application Page Description'});
  }

}
