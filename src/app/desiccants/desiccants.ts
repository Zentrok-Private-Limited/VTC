import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-desiccants',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './desiccants.html',
  styleUrls: ['./desiccants.css'],
})
export class Desiccants {
  activeSolution: 'box' | 'container' = 'box';

  adsorbent: 'silicaGel' | 'dryClayDesiccant' | 'molecularSieves' = 'silicaGel';

adsorbentabsorbent: 'box' | 'container' = 'box';
}
