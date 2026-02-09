import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';

@Component({
  selector: 'app-moisture-damage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moisture-damage.html',
  styleUrl: './moisture-damage.css',
})
export class MoistureDamage implements OnInit, OnDestroy{
currentIndex = 0;
  intervalId: any;

  banners = [
    { image: '/banner1.png', title: 'Mechanisms of Moisture Ingress and Condensation' },
    { image: '/banner2.png', title: 'Effects of Humidity on Material Integrity and Performance' },
    { image: '/banner3.png', title: 'Moisture Mitigation and Environmental Control Strategies' }
  ];

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /* ---------- AUTO SLIDE (SAFE) ---------- */
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

  /* ---------- PERFORMANCE ---------- */
  trackByIndex(index: number) {
    return index;
  }
}
