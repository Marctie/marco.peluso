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
      title: 'Questo portfolio',
      description: 'Sito + app Android costruiti con Ionic/Angular, con un blog tech aggiornato automaticamente ogni giorno.',
      tags: ['Ionic', 'Angular', 'Capacitor', 'CI/CD'],
    },
    {
      title: 'Progetto in arrivo',
      description: 'Sostituisci questo testo con uno dei tuoi lavori migliori. Aggiungi screenshot e link al repo.',
      tags: ['Soon'],
    },
    {
      title: 'Progetto in arrivo',
      description: 'Un altro spazio pronto per mostrare quello che sai fare.',
      tags: ['Soon'],
    },
  ];

  latestPosts: PostMeta[] = [];

  constructor(private blog: BlogService) {}

  ionViewWillEnter() {
    this.blog.getPosts().subscribe((posts) => (this.latestPosts = posts.slice(0, 3)));
  }
}
