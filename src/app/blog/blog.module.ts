import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { BlogPageRoutingModule } from './blog-routing.module';
import { BlogPage } from './blog.page';
import { PostPage } from './post/post.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, BlogPageRoutingModule],
  declarations: [BlogPage, PostPage],
})
export class BlogPageModule {}
