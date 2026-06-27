import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPage } from './blog.page';
import { PostPage } from './post/post.page';

const routes: Routes = [
  { path: '', component: BlogPage },
  { path: ':slug', component: PostPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPageRoutingModule {}
