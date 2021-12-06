import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
// import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
