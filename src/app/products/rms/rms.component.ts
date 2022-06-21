import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-rms',
  templateUrl: './rms.component.html',
  styleUrls: ['./rms.component.css']
})
export class RmsComponent implements OnInit {

  title = 'FlamingosTech | Reservation management system';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({name: 'keywords', content: 'Hotel reservation system software Reservation system software in India'});
    this.meta.updateTag({name: 'description', content: 'Reservation management system services by FlamingosTech.'});
  }

}
