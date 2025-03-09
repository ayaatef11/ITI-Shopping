import { NgClass, NgFor } from '@angular/common';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor,NgClass],
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

technoItems = [
  { number: '01', name: 'Node.js', url: 'https://nodejs.org/', position: 'left' },
  { number: '02', name: 'Laravel', url: 'https://laravel.com/', position: 'right' },
  { number: '03', name: 'Vue.js', url: 'https://vuejs.org/', position: 'left' },
  { number: '04', name: 'React.js', url: 'https://react.dev/', position: 'right' }
];

values = [
  { icon: '❤️', title: 'Integrity', description: 'We hold ourself to a strong ethical and moral code' },
  { icon: '✅', title: 'Trust', description: 'We are dependable loyal and hard working to achieve the same goal.' },
  { icon: '🏆', title: 'Excellence', description: 'We consistently strive to do high-quality work and give no room for error.' }
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
