import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  articles = [
    {
      image: 'img/images.jpg',
      title: 'How To Design The Perfect Hero Image: Guide, Practical Tips And Inspiration',
      description: 'The hero image, a large banner image prominently placed on a web page, generally in the front and center.',
      link: '#'
    },
    {
      image: 'img/images.jpg',
      title: 'How To Design The Perfect Hero Image: Guide, Practical Tips And Inspiration',
      description: 'The hero image, a large banner image prominently placed on a web page, generally in the front and center.',
      link: '#'
    },
    {
      image: 'img/images.jpg',
      title: 'How To Design The Perfect Hero Image: Guide, Practical Tips And Inspiration',
      description: 'The hero image, a large banner image prominently placed on a web page, generally in the front and center.',
      link: '#'
    }];
}
