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
    { img: "assets/images/banner_bg1.png", alt:"It company in kolkata" },
    { img: "assets/images/banner_bg2.png", alt:"Online It service in kolkata" },
    { img: "assets/images/banner_bg3.png", alt:"Company in kolkata with It service" },
    { img: "assets/images/banner_bg4.png", alt:"Best software company in kolkata" },
    { img: "assets/images/banner_bg5.png", alt:"Digital marketing agency kolkata" },
    { img: "assets/images/banner_bg6.png", alt:"Best kolkata it company" }
  ];
  slidetext = [
    { text: `Cloud based custom <span>ERP & CRM</span> Application` },
    { text: `<span>Data</span> Management` },
    { text: `<span>E-Commerce</span> Application` },
    { text: `<span>Android & iOS</span> Mobile App` },
    { text: `<span>Responsive</span> Website with CMS` },
    { text: `<span>Digital</span> Marketing` },
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
