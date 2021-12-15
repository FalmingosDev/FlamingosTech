import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-terms-page',
  templateUrl: './terms-page.component.html',
  styleUrls: ['./terms-page.component.css']
})
export class TermsPageComponent implements OnInit {

  title: 'Terms';
  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    
    this.meta.updateTag({name: 'keywords', content: 'This is the Terms Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Terms Page Description'});
  }

}
