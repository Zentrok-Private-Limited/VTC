import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
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
export class MoistureDamage implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async ngOnInit(): Promise<void> {

    // Run only in browser (SSR safe)
    if (isPlatformBrowser(this.platformId)) {

      const AOS = (await import('aos')).default;

      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true,
        offset: 120
      });

    }

  }

}