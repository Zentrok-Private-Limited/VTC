import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  NgZone,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-in-box-desiccants',
  imports: [CommonModule, RouterModule],
  templateUrl: './in-box-desiccants.html',
  styleUrl: './in-box-desiccants.css',
})
export class InBoxDesiccants implements OnInit {
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
  }
}
