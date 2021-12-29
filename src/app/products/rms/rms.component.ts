import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-rms',
  templateUrl: './rms.component.html',
  styleUrls: ['./rms.component.css']
})
export class RmsComponent implements OnInit {

  title = 'FlamingosTech- Reservation Management System for Hotels with integrated Booking Engine';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'This is the Reservation Management System Page'});
    this.meta.updateTag({name: 'description', content: 'This is the Reservation Management System Page Description'});
  }

}
