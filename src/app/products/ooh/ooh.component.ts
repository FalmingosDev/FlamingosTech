import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-ooh',
  templateUrl: './ooh.component.html',
  styleUrls: ['./ooh.component.css']
})
export class OohComponent implements OnInit {

  title = 'FlamingosTech | Product ooh advertising in kolkata';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Ooh advertising in india Product ooh advertising in kolkata Kolkata ooh advertising Best kolkata product ooh advertising Indian Ooh advertising company'});
    this.meta.updateTag({name: 'description', content: 'FlamingosTech offers OOH application services to clients based nationally'});
  }

}
