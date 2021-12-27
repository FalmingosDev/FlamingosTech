import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-android-ios',
  templateUrl: './android-ios.component.html',
  styleUrls: ['./android-ios.component.css']
})
export class AndroidIosComponent implements OnInit {

  title = 'Android & iOS Mobile App';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'This is the Android & iOS Mobile App Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Android & iOS Mobile App Page Description'});
  }

}
