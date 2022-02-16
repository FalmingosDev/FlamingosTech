import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-online-examination',
  templateUrl: './online-examination.component.html',
  styleUrls: ['./online-examination.component.css']
})
export class OnlineExaminationComponent implements OnInit {

  title = 'FlamingosTech | online examination management system';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Online examination management system Examination management system kolkata'});
    this.meta.updateTag({name: 'description', content: 'Online management system serviced by FlamingosTech'});
  }
}
