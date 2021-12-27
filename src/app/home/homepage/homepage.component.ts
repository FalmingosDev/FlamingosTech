import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
// import * as alertify from 'alertifyjs';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title = 'FlamingosTech | Indian software development companies';
  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

        this.meta.updateTag({name: 'keywords', content: 'Indian software development companies, kolkata it company, software companies in kolkata'});
        this.meta.updateTag({name: 'description', content: 'FlamingosTech is one of the best Indian software development companies that provides multiple software and IT solutions to its clients.'});
    // this.alertService.success('welcome on Flamingostech.com');
     // alertify.notify( message, 'success', [wait, callback]);
     //alertify.notify('sample', 'success', 5, function(){  console.log('dismissed'); });
     //alertify.success('Success message');
    /* var delay = alertify.get('notifier','delay');
     alertify.set('notifier','delay', 10);
     alertify.set('notifier','position', 'bottom-right');
     alertify.success('Current position : ' + alertify.get('notifier','position'));*/
  }
  // 

}
