import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent implements OnInit {

  title = 'FlamingosTech | CRM and ERP in cloud computing';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Crm and Erp in cloud computing Cloud computing in Crm & Erp'});
    this.meta.updateTag({name: 'description', content: 'Kolkata based CRM and Cloud computing service in India'});
  }

}
