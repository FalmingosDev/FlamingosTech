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
    constructor(private router: Router, private titleService: Title, private meta: Meta) { }
    // title = 'flamingostech';
    // constructor(private router: Router) { }
      
    ngOnInit() {
        // this.titleService.setTitle(this.title);

        this.meta.addTag({name: 'author', content: 'Flamingostech'});
        this.meta.addTag({name: 'robots', content: 'index, follow'});
        // this.meta.updateTag({name: 'keywords', content: 'Angular Project, Create Angular Project'});
        // this.meta.updateTag({name: 'description', content: 'Flamingostech is the best Software development & Digital Marketing company in Kolkata.We Provide Business Solutions & Develop Software.They also provide E-Commerce Application, Android & iOS Mobile App, Cloud-based custom ERP & CRM Application, Digital Marketing, Responsive Website with CMS'});


        this.router.events.subscribe((event) => {
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
        
    }

    pageMeta(){
        this.ngOnInit();
    }
}
