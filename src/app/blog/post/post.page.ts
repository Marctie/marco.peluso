import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Post } from '../blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  standalone: false,
})
export class PostPage implements OnInit {
  post$!: Observable<Post | undefined>;

  constructor(private route: ActivatedRoute, private blog: BlogService) {}

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params) => this.blog.getPost(params.get('slug') ?? '')),
    );
  }
}
