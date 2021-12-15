import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {
  title = 'Services';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    
    this.meta.updateTag({name: 'keywords', content: 'This is the Service Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Service Page Description'});
  }

}
