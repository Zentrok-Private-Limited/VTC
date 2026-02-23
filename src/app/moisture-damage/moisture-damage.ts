import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-moisture-damage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './moisture-damage.html',
  styleUrls: ['./moisture-damage.css'],
})
export class MoistureDamage implements OnInit, OnDestroy {

  currentIndex = 0;
  intervalId: any = null;

  banners = [
    {
      image: '/banner1.png',
      title: 'Mechanisms of Moisture Ingress and Condensation'
    },
    {
      image: '/banner2.png',
      title: 'Effects of Humidity on Material Integrity and Performance'
    },
    {
      image: '/banner3.png',
      title: 'Moisture Mitigation and Environmental Control Strategies'
    }
  ];

  constructor(
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  /* ---------- INIT ---------- */
  async ngOnInit(): Promise<void> {
    // ✅ Run only in browser (SSR safe)
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
      });
    }

    this.startAutoSlide();
  }

  /* ---------- DESTROY ---------- */
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /* ---------- AUTO SLIDE ---------- */
  startAutoSlide(): void {
    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.zone.run(() => {
          this.next();
        });
      }, 4000);
    });
  }

  /* ---------- NAVIGATION ---------- */
  next(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.banners.length;
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.banners.length) %
      this.banners.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  /* ---------- PERFORMANCE ---------- */
  trackByIndex(index: number): number {
    return index;
  }
}