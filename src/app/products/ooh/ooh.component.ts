import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-ooh',
  templateUrl: './ooh.component.html',
  styleUrls: ['./ooh.component.css']
})
export class OohComponent implements OnInit {

  title = 'Out Of Home Advertising Management Application';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'This is the Out Of Home Advertising Management Application Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Out Of Home Advertising Management Application Page Description'});
  }

}
