import { Component, ElementRef, ViewChild } from '@angular/core';
import { BlogPost } from '../../models/blog.model';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../core/services/blog.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SafeUrlPipe } from "../../shared/safe-url.pipe";

@Component({
  selector: 'app-blog-detail',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  blog!: BlogPost;
  @ViewChild('codeElement') codeElement!: ElementRef;

  showCopiedToast = false;

  copyCode(code: string) {
    navigator.clipboard.writeText(code).then(() => {
      this.showCopiedToast = true;
      setTimeout(() => this.showCopiedToast = false, 1500);
    });
  }
  constructor(private route: ActivatedRoute, private blogService: BlogService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getBlogById(id).subscribe(data => this.blog = data);
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getEmbedUrl(link: string): string {
  const videoId = link.split('v=')[1]?.split('&')[0];
  return `https://www.youtube.com/embed/${videoId}`;
}

getYouTubeEmbedUrl(url: string): string {
  let videoId = '';

  if (url.includes('watch?v=')) {
    videoId = url.split('v=')[1]?.split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0];
  }
  videoId= videoId ? `https://www.youtube.com/embed/${videoId}` : '' ;
  return videoId;
}


}
