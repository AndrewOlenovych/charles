import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/core";

import { BreakpointsOptions } from './models/break-points-options';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  public breakpoints: BreakpointsOptions = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 50    
    }
  };

  constructor() { 
  }

  ngOnInit(): void {
  }

}
