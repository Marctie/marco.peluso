import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostMeta } from './blog.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
  standalone: false,
})
export class BlogPage implements OnInit {
  posts$!: Observable<PostMeta[]>;

  constructor(private blog: BlogService) {}

  ngOnInit() {
    this.posts$ = this.blog.getPosts();
  }
}
