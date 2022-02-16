import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pms',
  templateUrl: './pms.component.html',
  styleUrls: ['./pms.component.css']
})
export class PmsComponent implements OnInit {

  title = 'FlamingosTech | Property management system';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Best commercial property management software Horizon property management software Commercial property management system india Intellectual property asset management software'});
    this.meta.updateTag({name: 'description', content: 'FlamingosTech serves one of the best property management software in India'});
  }

}
