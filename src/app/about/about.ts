import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About implements OnInit, OnDestroy {

  currentIndex = 0;
  intervalId: any;

  banners = [
    {
      image: '/banner1.png',
      title: 'Delivering innovative moisture protection solutions backed by expertise, reliability, and trust.'
    },
    {
      image: '/banner2.png',
      title: 'Committed to protecting product value through advanced technology and industry-focused solutions.'
    },
    {
      image: '/banner3.png',
      title: 'Combining innovation, experience, and service to prevent moisture damage across the supply chain.'
    }
  ];

  // ✅ SINGLE CONSTRUCTOR
  constructor(
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async ngOnInit(): Promise<void> {

    // 🔹 AOS only in browser
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
      });
    }

    // 🔹 Start banner slider
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /* ---------- AUTO SLIDE ---------- */
  startAutoSlide() {
    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.zone.run(() => {
          this.next();
        });
      }, 4000);
    });
  }

  /* ---------- NAVIGATION ---------- */
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  trackByIndex(index: number) {
    return index;
  }
}
