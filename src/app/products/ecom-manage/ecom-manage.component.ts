import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ecom-manage',
  templateUrl: './ecom-manage.component.html',
  styleUrls: ['./ecom-manage.component.css']
})
export class EcomManageComponent implements OnInit {

  title = 'Ecommerce / Online Store Management Application';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'This is the Ecommerce / Online Store Management Application Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Ecommerce / Online Store Management Application Page Description'});
  }

}
