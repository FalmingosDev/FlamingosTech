import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css']
})
export class DigitalMarketingComponent implements OnInit {

  title = 'FlamingosTech | Digital advertising agency';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Media planning advertising agency Digital advertising agency SEO agency & services SMO agency & services SMM agency & services Content optimisation & services Top ten advertising agency in kolkata'});
    this.meta.updateTag({name: 'description', content: 'We are an digital marketing agency focussing on services like seo, smo, smm, sem, content optimization and other digital media planning activities'});
  }

}
