import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1500
  };
  slideImg = [
    { img: "assets/images/banner_bg1.jpg" },
    { img: "assets/images/banner_bg2.jpg" },
    { img: "assets/images/banner_bg3.jpg" }
  ];
  slidetext = [
    { text: `Cloud based custom <span>ERP & CRM</span> Application` },
    { text: `<span>E-Commerce</span> Application` },
    { text: `<span>Android & iOS</span> Mobile App` },
    { text: `<span>Responsive</span> Website with CMS` },
    { text: `<span>Digital</span> Marketing` },
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
