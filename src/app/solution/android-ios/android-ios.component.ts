import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-android-ios',
  templateUrl: './android-ios.component.html',
  styleUrls: ['./android-ios.component.css']
})
export class AndroidIosComponent implements OnInit {

  title = 'FlamingosTech | Kolkata app development service';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Kolkata app development service Android app developer software'});
    this.meta.updateTag({name: 'description', content: 'Provides app development services in India'});
  }

}
