import { Component } from '@angular/core';
import { PostMeta } from '../blog/blog.model';
import { BlogService } from '../services/blog.service';

interface Skill {
  name: string;
  level: number; // 0-100
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  icon: string;
  gradient: string;
  status: 'live' | 'soon';
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  readonly year = new Date().getFullYear();

  readonly skills: Skill[] = [
    { name: 'TypeScript / JavaScript', level: 90 },
    { name: 'Angular & Ionic', level: 88 },
    { name: 'Node.js', level: 80 },
    { name: 'UI / UX Design', level: 75 },
    { name: 'Cloud & DevOps', level: 70 },
  ];

  readonly stack = ['Angular', 'Ionic', 'TypeScript', 'Node.js', 'Capacitor', 'Git', 'Figma', 'Docker'];

  readonly projects: Project[] = [
    {
      title: 'marco.dev',
      description: 'Portfolio personale + blog tech con un articolo nuovo ogni giorno. Costruito con Ionic e Angular, pubblicato su GitHub Pages e disponibile anche come app Android.',
      tags: ['Ionic', 'Angular', 'Capacitor', 'CI/CD'],
      link: 'https://marctie.github.io/marco.peluso/',
      icon: 'code-slash-outline',
      gradient: 'linear-gradient(135deg, #7c5cff 0%, #18d6c4 100%)',
      status: 'live',
    },
    {
      title: 'Dispensa Alimentare',
      description: 'Sai sempre cosa hai in frigo e in dispensa. Scansiona, aggiungi e scopri subito cosa puoi cucinare — zero sprechi, zero sorprese al supermercato.',
      tags: ['Ionic', 'Angular', 'Capacitor', 'Android'],
      icon: 'nutrition-outline',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      status: 'soon',
    },
    {
      title: 'FinanzAI',
      description: 'Il tuo co-pilota finanziario. Analizza le spese, individua dove stai sprecando e ti guida verso i tuoi obiettivi economici con suggerimenti personalizzati.',
      tags: ['AI', 'Angular', 'Finanza', 'Mobile'],
      icon: 'trending-up-outline',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      status: 'soon',
    },
  ];

  latestPosts: PostMeta[] = [];

  constructor(private blog: BlogService) {}

  ionViewWillEnter() {
    this.blog.getPosts().subscribe((posts) => (this.latestPosts = posts.slice(0, 3)));
  }
}
