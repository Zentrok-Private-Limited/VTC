import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { INCUBIC_DATA } from '../incubic.data';

@Component({
  selector: 'app-incubic-category-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './incubic-category-products.html',
  styleUrl: './incubic-category-products.css',
})
export class IncubicCategoryProducts {

  category: any;
  product: any;

  selectedImage = '';

  constructor(private route: ActivatedRoute) {
    const categorySlug = this.route.snapshot.paramMap.get('category');
    const productSlug = this.route.snapshot.paramMap.get('product');

    // 🔹 Find category
    this.category = INCUBIC_DATA.find(
      c => c.slug === categorySlug
    );

    // 🔹 Find product inside category
    this.product = this.category?.products?.find(
      (p: any) => p.slug === productSlug
    );

    // 🔹 Default image (first product image)
    if (this.product?.images?.length) {
      this.selectedImage = this.product.images[0];
    }
    // fallback (just in case)
    else if (this.category?.images?.length) {
      this.selectedImage = this.category.images[0];
    }
  }

  // 🔹 Thumbnail click
  selectImage(img: string) {
    this.selectedImage = img;
  }
}
