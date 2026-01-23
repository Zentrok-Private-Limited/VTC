import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    { image: '/banner1.png', title: 'First Banner' },
    { image: '/banner2.png', title: 'Second Banner' },
    { image: '/banner3.png', title: 'Third Banner' }
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
