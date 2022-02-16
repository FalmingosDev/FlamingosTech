import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  title = 'FlamingosTech | Ecommerce online store service providers';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Android app developer software Ecommerce online store service providers'});
    this.meta.updateTag({name: 'description', content: 'Top level e-commerce and online store service providers in India'});
  }

}
