import { Component } from '@angular/core';
import { BlogPost } from '../../models/blog.model';
import { BlogService } from '../../core/services/blog.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-create',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './blog-create.component.html',
  styleUrl: './blog-create.component.scss'
})
export class BlogCreateComponent {
  blog: BlogPost = {
    id: 0,
    title: '',
    subject: '',
    topic: '',
    estimatedTimeInMinutes: 0,
    content: '',
    codeSnippet: '',
    youTubeLink: '',
    usefulLinks: [],
    tags: [],
    createdAt: new Date().toISOString()
  };

  newLink = '';
  newTag = '';

  constructor(private blogService: BlogService, private router: Router) {}

  addUsefulLink() {
    if (this.newLink.trim()) {
      this.blog.usefulLinks.push(this.newLink.trim());
      this.newLink = '';
    }
  }

  addTag() {
    if (this.newTag.trim()) {
      this.blog.tags.push(this.newTag.trim());
      this.newTag = '';
    }
  }

  submit() {
    this.blogService.createBlog(this.blog).subscribe(() => {
      alert('Blog created successfully!');
      this.router.navigate(['/']);
    });
  }
}
