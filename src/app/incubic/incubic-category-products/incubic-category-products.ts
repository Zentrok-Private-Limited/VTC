import { Component, OnInit } from '@angular/core';
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
export class IncubicCategoryProducts implements OnInit {

  category: any = null;
  product: any = null;
  selectedImage = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      const categorySlug = params.get('category');
      const productSlug = params.get('product');

      // 🔹 Find category
      this.category = INCUBIC_DATA.find(
        c => c.slug === categorySlug
      );

      // 🔹 Find product inside category
      if (this.category && productSlug) {
        this.product = this.category.products?.find(
          (p: any) => p.slug === productSlug
        );
      } else {
        this.product = null;
      }

      // 🔹 Default image priority
      if (this.product?.images?.length) {
        this.selectedImage = this.product.images[0];
      } else if (this.category?.images?.length) {
        this.selectedImage = this.category.images[0];
      } else {
        this.selectedImage = '';
      }
    });
  }

  // 🔹 Thumbnail click
  selectImage(img: string) {
    this.selectedImage = img;
  }
}
