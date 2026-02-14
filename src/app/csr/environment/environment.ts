import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-environment',
  imports: [CommonModule],
  templateUrl: './environment.html',
  styleUrl: './environment.css',
})
export class Environment implements OnInit, OnDestroy {
  currentIndex = 0;
  intervalId: any;

  banners = [
    {
      image: '/environment1.webp',
      title: 'Environmental Responsibility'
    },
    {
      image: '/environment2.avif ',
      title: 'Sustainable Manufacturing Practices'
    },
    {
      image: '/environment3.jpg',
      title: 'Reducing Carbon Footprint'
    }
  ];

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  /* ---------- AUTO SLIDE ---------- */
  startAutoSlide() {
    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.zone.run(() => this.next());
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
