import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css']
})
export class DigitalMarketingComponent implements OnInit {

  title = 'Digital Marketing';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'This is the Digital Marketing Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Digital Marketing Page Description'});
  }

}
