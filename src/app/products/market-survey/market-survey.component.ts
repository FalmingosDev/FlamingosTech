import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-market-survey',
  templateUrl: './market-survey.component.html',
  styleUrls: ['./market-survey.component.css']
})
export class MarketSurveyComponent implements OnInit {

  title = 'FlamingosTech | Market survey management kolkata';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Market survey management kolkata Market service management'});
    this.meta.updateTag({name: 'description', content: 'Market survey management in kolkata by FlamingosTech'});
  }

}
