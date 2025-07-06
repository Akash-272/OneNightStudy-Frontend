import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog/:id', loadComponent: () => import('./pages/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent) },
    { path: 'create',loadComponent: () => import('./pages/blog-create/blog-create.component').then(m => m.BlogCreateComponent) },
];
