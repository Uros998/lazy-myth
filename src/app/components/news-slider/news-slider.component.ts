import {AfterViewInit, Component, OnInit} from '@angular/core';
import {register} from 'swiper/element';
// import Swiper styles
import 'swiper/css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, SwiperOptions} from "swiper";

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.scss']
})
export class NewsSliderComponent implements OnInit, AfterViewInit {

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    direction: 'vertical',
    autoplay: true,
    grabCursor: true,
    pagination: true,
    mousewheel: true,
    keyboard: true,
    modules: [ Autoplay],
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    register();
  }
}
