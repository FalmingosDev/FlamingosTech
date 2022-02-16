import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ecom-manage',
  templateUrl: './ecom-manage.component.html',
  styleUrls: ['./ecom-manage.component.css']
})
export class EcomManageComponent implements OnInit {

  title = 'FlamingosTech | Ecommerce online store service providers';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Ecommerce online store service providers Online store service & ecommerce providers'});
    this.meta.updateTag({name: 'description', content: 'Ecommerce application, Ecommerce seo and other ecommerce services'});
  }

}
