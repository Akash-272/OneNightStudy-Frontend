import { Component } from '@angular/core';
import { BlogPost } from '../../models/blog.model';
import { BlogService } from '../../core/services/blog.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogCardComponent } from '../../shared/blog-card/blog-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, 
    FormsModule,
    BlogCardComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  blogs: BlogPost[] = [];
  searchText = '';

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs(): void {
    this.blogService.getAllBlogs().subscribe(data => this.blogs = data);
  }

  onSearch(): void {
    if (this.searchText.trim()) {
      this.blogService.searchBlogs(this.searchText).subscribe(data => this.blogs = data);
    } else {
      this.fetchBlogs();
    }
  }
}
