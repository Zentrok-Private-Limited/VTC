import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  Inject,
  PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
// hero.component.ts
import { register } from 'swiper/element/bundle';
register(); 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home implements AfterViewInit {

  @ViewChildren('counter') counters!: QueryList<ElementRef<HTMLElement>>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {

    // 🔒 IMPORTANT: Browser check
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = Number(el.getAttribute('data-target'));
            this.animateCounter(el, target);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.6 }
    );

    this.counters.forEach(counter =>
      observer.observe(counter.nativeElement)
    );
  }

  private animateCounter(el: HTMLElement, target: number) {
    let current = 0;
    const duration = 1200;
    const start = performance.now();

    const update = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.innerText = value.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.innerText = target.toLocaleString();
      }
    };

    requestAnimationFrame(update);
  }

   currentIndex = 0;

  slides = [
    {
      image: '/process1.png',
      caption: 'Welcome to Venice',
      description: 'A breathtaking view of the mountains during sunrise.'
    },
    {
      image: '/process2.png',
      caption: 'Packaging',
      description: 'A serene forest path surrounded by tall trees.'
    },
    {
      image: '/process3.png',
      caption: 'Shipping',
      description: 'A sunny beach with golden sand and clear blue water.' 
    },
    {
      image: '/process4.png',
      caption: 'Retail',
      description: 'A sunny beach with golden sand and clear blue water.' 
    }
  ];

  prev() {
    this.currentIndex =
      this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex =
      this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
