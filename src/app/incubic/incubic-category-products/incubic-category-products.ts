import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { INCUBIC_DATA } from '../incubic.data';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incubic-category-products',
  imports: [RouterModule,CommonModule],
  templateUrl: './incubic-category-products.html',
  styleUrl: './incubic-category-products.css',
})
export class IncubicCategoryProducts {
 category: any;

  constructor(private route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('category');
    this.category = INCUBIC_DATA.find(c => c.slug === slug);
  }
}
