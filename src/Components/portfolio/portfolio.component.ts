import { Component } from '@angular/core';
import {NgFor, NgOptimizedImage} from "@angular/common";
import {LazyLoadImageModule} from "ng-lazyload-image";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    NgOptimizedImage,
    LazyLoadImageModule,
    NgFor
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
img1:string='img/pngtree-a-laptop-laying-on-a-brown-desk-image_13038932.jpg';

  constructor() {
    this.ngAfterViewInit();
  }
  ngOnInit() {
  }
  // ------variables
  boundlesspaydetails = [
    { label: 'PHASE', value: 'Grow' },
    { label: 'SERVICES', value: 'Crypto trading' },
    { label: 'PLATFORMS', value: 'Web, Mobile' }
  ];

  oxforddetails = [
    { label: 'PHASE', value: 'Grow' },
    { label: 'SERVICES', value: 'Real Estate' },
    { label: 'PLATFORMS', value: 'Web' }
  ];
 
  //--------functions
  workWithUs() {
    alert("Thank you for your interest! We'll get in touch soon.");
  }

  ngAfterViewInit(): void {
    this.workWithUs();

    // DOM manipulation should be done here
    const workSection = document.querySelector('.work-section');
    const workContent = document.querySelector('.work-content');

    if (workSection && workContent) {
      workSection.addEventListener('mouseenter', () => {
        workContent.classList.add('hovered');
      });

      workSection.addEventListener('mouseleave', () => {
        workContent.classList.remove('hovered');
      });
    }
  }

}
