import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {

  title = 'FlamingosTech | POS management system';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Pos billing software india Pos billing software kolkata'});
    this.meta.updateTag({name: 'description', content: 'FlamingosTech builds one of the best POS billing software in kolkata.'});
  }
}
