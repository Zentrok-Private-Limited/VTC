import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-industry-solutions',
  imports: [CommonModule,RouterModule],
  templateUrl: './industry-solutions.html',
  styleUrl: './industry-solutions.css',
})
export class IndustrySolutions {
adsorbentabsorbent:
  | 'garments'
  | 'leather'
  | 'footwear'
  | 'furniture'
  | 'HandicraftsAndKitchen'
  | 'machinery'
  | 'metalProducts'
  | 'food'
  | 'pharma'
  = 'garments';

}
