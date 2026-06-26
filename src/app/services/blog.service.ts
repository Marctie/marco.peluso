import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { marked } from 'marked';
import { Observable, from, map, of, shareReplay, switchMap } from 'rxjs';
import { Post, PostMeta } from '../blog/blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private readonly base = 'assets/blog';
  private posts$?: Observable<PostMeta[]>;

  constructor(private http: HttpClient) {}

  /** Loads the post index (newest first). Cached for the session. */
  getPosts(): Observable<PostMeta[]> {
    if (!this.posts$) {
      this.posts$ = this.http.get<PostMeta[]>(`${this.base}/manifest.json`).pipe(
        map((posts) => [...posts].sort((a, b) => b.date.localeCompare(a.date))),
        shareReplay(1),
      );
    }
    return this.posts$;
  }

  /** Loads a single post and renders its markdown body to HTML. */
  getPost(slug: string): Observable<Post | undefined> {
    return this.getPosts().pipe(
      switchMap((posts) => {
        const meta = posts.find((p) => p.slug === slug);
        if (!meta) {
          return of(undefined);
        }
        return this.http.get(`${this.base}/${slug}.md`, { responseType: 'text' }).pipe(
          switchMap((raw) => from(this.render(raw)).pipe(map((html) => ({ ...meta, html })))),
        );
      }),
    );
  }

  /** Strips YAML frontmatter and converts the markdown body to HTML. */
  private async render(raw: string): Promise<string> {
    const body = raw.replace(/^---[\s\S]*?---\s*/, '');
    return marked.parse(body, { async: true });
  }
}
