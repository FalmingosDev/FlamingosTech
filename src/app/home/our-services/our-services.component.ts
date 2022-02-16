import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  title = 'FlamingosTech | Kolkata IT company | Services';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    
    this.meta.updateTag({name: 'keywords', content: 'Kolkata it company, top it companies in kolkata'});
    this.meta.updateTag({name: 'description', content: 'FlamingosTech is one of the top IT and software companies in Kolkata that performs multiple IT services in website development and designing.'});
  }

}
