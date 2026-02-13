import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DESCRIPTIVE_DATA } from '../descriptive.data';

@Component({
  selector: 'app-descriptive-product-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './descriptive-product-details.html',
})
export class DescriptiveProductDetails {

  category: any;
  product: any;
  selectedImage: string | null = null;

  constructor(private route: ActivatedRoute) {

    // ✅ THIS IS THE FIX
    this.route.paramMap.subscribe(params => {

      const categorySlug = params.get('category');
      const productSlug = params.get('product');

      this.category = DESCRIPTIVE_DATA.find(
        c => c.slug === categorySlug
      );

      if (!this.category) {
        this.product = null;
        return;
      }

      this.product = this.category.products.find(
        (p: any) => p.slug === productSlug
      );

      // reset image when product changes
      this.selectedImage = this.product?.images?.[0] || null;
    });
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }
}
