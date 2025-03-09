import { NgFor } from '@angular/common';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements  OnInit{
constructor() {
  this.ngAfterViewInit();
}
ngOnInit() {
}
teamMembers = [
  { name: 'Walid', role: 'Team Leader &', img: 'img/walid.jpeg' },
  { name: 'Adham Nasser', role: 'Expertise Page', img: 'img/adham.JPG' },
  { name: 'Mohamed Soltan', role: 'Blog Page', img: 'img/mohamed soltan.jpeg' },
  { name: 'Abdelrahman Ibrahim', role: 'Product Page', img: 'img/abdelrahman.jpg' },
  { name: 'Zeyad Mohamed', role: 'About Page', img: 'img/zeyad.jpeg' }
];

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
