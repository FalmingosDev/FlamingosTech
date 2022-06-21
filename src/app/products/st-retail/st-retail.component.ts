import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-st-retail',
  templateUrl: './st-retail.component.html',
  styleUrls: ['./st-retail.component.css']
})
export class StRetailComponent implements OnInit {

  title = 'FlamingosTech | Best pos software for retail stores in india';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Pos billing software for retail shop Best pos software for retail stores in india'});
    this.meta.updateTag({name: 'description', content: 'FlamingosTech provides best POS software for retail stores in India'});
  }

}
