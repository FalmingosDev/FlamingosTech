import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Title, Meta } from '@angular/platform-browser';


  
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    title = 'flamingostech_project';
    constructor(private router: Router, private titleService: Title, private meta: Meta){}
      
    ngOnInit() {

        this.meta.addTag({name: 'author', content: 'Flamingostech'});
        this.meta.addTag({name: 'robots', content: 'index, follow'});

        this.router.events.subscribe((event) => {
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
        
    }
}
