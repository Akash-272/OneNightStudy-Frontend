import { Component, Input } from '@angular/core';
import { BlogPost } from '../../models/blog.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  @Input() blog!: BlogPost;
}
