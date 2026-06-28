import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
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
  status: 'live' | 'soon' | 'client';
  image?: string;
  imageBg?: string;
}

interface Experience {
  period: string;
  company: string;
  role: string;
  location: string;
  current: boolean;
  highlights: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  readonly year = new Date().getFullYear();

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) this.content.scrollToPoint(0, el.offsetTop, 500);
  }

  readonly skills: Skill[] = [
    { name: 'Flutter / Dart', level: 85 },
    { name: 'Quality Assurance & Testing', level: 85 },
    { name: 'TypeScript / JavaScript', level: 82 },
    { name: 'Angular & Ionic', level: 80 },
    { name: 'HTML / CSS / Bootstrap', level: 80 },
    { name: 'UI/UX Design (Figma)', level: 74 },
    { name: 'Web Analytics (GA4, GTM)', level: 70 },
  ];

  readonly stack = ['Flutter', 'Dart', 'Angular', 'Ionic', 'TypeScript', 'Bootstrap 5', 'Node.js', 'Capacitor', 'Figma', 'GA4', 'GTM', 'Matomo', 'Git', 'Windows Server'];

  readonly projects: Project[] = [
    {
      title: 'Aperitiv',
      description: 'App Flutter per la prenotazione di tavoli e la gestione eventi nel settore food & beverage. UI sviluppata su mockup Figma con databinding avanzato e gestione dinamica degli stati.',
      tags: ['Flutter', 'Dart', 'Figma', 'Food & Beverage'],
      link: 'https://aperitiv.it',
      icon: 'restaurant-outline',
      gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/YX4a16Elk8FwZq1N/aperitiv-m2W8zXRVeDiNzq4X.png',
      imageBg: 'linear-gradient(135deg, #1c0900 0%, #2d1800 100%)',
      status: 'client',
    },
    {
      title: 'Merits',
      description: 'Piattaforma Flutter Web per la gestione meritocratica di premi aziendali. Integrazione componenti UI/UX e validazione della coerenza visiva con i mockup di riferimento.',
      tags: ['Flutter Web', 'UI/UX', 'Corporate', 'Dart'],
      link: 'https://merits.it',
      icon: 'trophy-outline',
      gradient: 'linear-gradient(135deg, #0f3460 0%, #16213e 100%)',
      image: 'https://merits.it/wp-content/uploads/2021/08/merits_logo_header_white.png',
      imageBg: 'linear-gradient(135deg, #0f3460 0%, #16213e 100%)',
      status: 'client',
    },
    {
      title: 'App Paziente',
      description: 'App mobile Flutter sviluppata per Pagine Mediche: prenotazioni, referti, storico clinico e comunicazione con i medici, tutto in un\'unica piattaforma per il paziente.',
      tags: ['Flutter', 'Dart', 'Healthcare', 'Mobile'],
      link: 'https://www.paginemediche.it',
      icon: 'heart-outline',
      gradient: 'linear-gradient(135deg, #0052a3 0%, #00b4d8 100%)',
      image: 'assets/logos/paginemediche-white.svg',
      imageBg: 'linear-gradient(135deg, #002f5f 0%, #004a8f 100%)',
      status: 'client',
    },
    {
      title: 'App Medico',
      description: 'App Flutter dedicata ai professionisti sanitari di Pagine Mediche: gestione appuntamenti, comunicazione con i pazienti e monitoraggio dell\'attività clinica.',
      tags: ['Flutter', 'Dart', 'Healthcare', 'QA'],
      link: 'https://www.paginemediche.it',
      icon: 'medical-outline',
      gradient: 'linear-gradient(135deg, #005f73 0%, #0a9396 100%)',
      image: 'assets/logos/paginemediche-white.svg',
      imageBg: 'linear-gradient(135deg, #003d4d 0%, #005f73 100%)',
      status: 'client',
    },
    {
      title: 'Dispensa Alimentare',
      description: 'Sai sempre cosa hai in frigo e in dispensa. Scansiona, aggiungi e scopri subito cosa puoi cucinare — zero sprechi, zero sorprese al supermercato.',
      tags: ['Ionic', 'Angular', 'Capacitor', 'Android'],
      link: 'https://marctie.github.io/Dispence/home',
      icon: 'nutrition-outline',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      status: 'live',
    },
    {
      title: 'FinanzAI',
      description: 'Il tuo co-pilota finanziario. Analizza le spese, individua dove stai sprecando e ti guida verso i tuoi obiettivi economici con suggerimenti personalizzati.',
      tags: ['AI', 'Angular', 'Finanza', 'Mobile'],
      link: 'https://marctie.github.io/FinanzAi/home',
      icon: 'trending-up-outline',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      status: 'live',
    },
  ];

  readonly experiences: Experience[] = [
    {
      period: 'Set 2025 – Presente',
      company: 'Intellitronika',
      role: 'Sviluppatore Software',
      location: 'Italia',
      current: true,
      highlights: [
        'Sviluppo di applicazioni web e mobile per la Pubblica Amministrazione con Angular e Ionic.',
        'Integrazione di comunicazioni real-time tramite LiveKit e SignalR in ambiente Ionic.',
        'Implementazione di protocolli IoT con MQTT per la gestione di dispositivi connessi.',
      ],
    },
    {
      period: 'Gen 2025 – Ago 2025',
      company: 'Freelancer',
      role: 'Flutter Developer',
      location: 'Remote',
      current: false,
      highlights: [
        'Sviluppo UI Flutter per Aperitiv — app di prenotazione tavoli ed eventi food & beverage — seguendo mockup Figma con databinding avanzato.',
        'Implementazione gestione dinamica delle schermate e degli stati dell\'interfaccia con widget personalizzati e layout responsive.',
        'Supporto allo sviluppo Flutter Web di Merits, piattaforma per la gestione meritocratica di premi aziendali.',
      ],
    },
    {
      period: 'Lug 2023 – Set 2024',
      company: 'Pagine Mediche',
      role: 'QA & Mobile Developer',
      location: 'Salerno, Italia',
      current: false,
      highlights: [
        'Sviluppo UI dell\'applicazione mobile con Flutter, garantendo design intuitivo e un\'esperienza utente ottimale.',
        'Owner QA: coordinamento del team di testing a 360°, definizione strategie di beta testing e supervisione dell\'intero ciclo di qualità.',
        'Documentazione e segnalazione bug tecnici con soluzioni per il miglioramento delle performance e stabilità.',
      ],
    },
    {
      period: 'Feb 2022 – Feb 2023',
      company: 'Healthware International',
      role: 'Developer Assistant',
      location: 'Salerno, Italia',
      current: false,
      highlights: [
        'Realizzazione di landing page responsive e newsletter HTML con Bootstrap 5.',
        'Configurazione e gestione di Google Analytics 4, Google Tag Manager e Matomo per il tracciamento avanzato.',
        'Esecuzione di test approfonditi, reporting e gestione delle priorità bug tramite ClickUp.',
      ],
    },
    {
      period: 'Feb 2018 – Gen 2022',
      company: 'Natana Doc S.p.A.',
      role: 'Responsabile IT',
      location: 'Pontecagnano Faiano, Italia',
      current: false,
      highlights: [
        'Gestione e manutenzione di PC, stampanti e sistemi Windows con ottimizzazioni e patch critiche.',
        'Manutenzione server e macchine virtuali Windows Server, rinnovo licenze e configurazione desktop remoto.',
        'Configurazione piattaforme di collaboration digitale e gestione sicurezza informatica aziendale.',
      ],
    },
  ];

  latestPosts: PostMeta[] = [];

  constructor(private blog: BlogService) {}

  ionViewWillEnter() {
    this.blog.getPosts().subscribe((posts) => (this.latestPosts = posts.slice(0, 3)));
  }
}
