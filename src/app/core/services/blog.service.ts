import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../../models/blog.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  //private baseUrl = 'https://localhost:44382/api/BlogPosts';
  private baseUrl = `${environment.apiBaseUrl}/BlogPosts`;
  constructor(private http: HttpClient) {}

  getAllBlogs(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.baseUrl);
  }

  getBlogById(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.baseUrl}/${id}`);
  }

  searchBlogs(query: string): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.baseUrl}/search?q=${query}`);
  }

  createBlog(blog: BlogPost): Observable<any> {
    return this.http.post(this.baseUrl, blog);
  }
  
}

