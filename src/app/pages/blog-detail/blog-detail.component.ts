import { Component } from '@angular/core';
import { BlogPost } from '../../models/blog.model';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../core/services/blog.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  imports: [
    CommonModule
  ],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  blog!: BlogPost;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getBlogById(id).subscribe(data => this.blog = data);
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
