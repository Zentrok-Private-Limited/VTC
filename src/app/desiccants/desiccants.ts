import { CommonModule, isPlatformBrowser } from '@angular/common';
import {Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-desiccants',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './desiccants.html',
  styleUrls: ['./desiccants.css'],
})
export class Desiccants implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  activeSolution: 'box' | 'container' = 'box';

  adsorbent: 'silicaGel' | 'dryClayDesiccant' | 'molecularSieves' = 'silicaGel';

  adsorbentabsorbent: 'box' | 'container' = 'box';
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
  }
}
