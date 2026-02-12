import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DESCRIPTIVE_DATA } from '../descriptive.data'; 

@Component({
  selector: 'app-descriptive-category-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './descriptive-category-products.html',
  styleUrl: './descriptive-category-products.css',
})
export class DescriptiveCategoryProducts implements OnInit {

  category: any = null;
  product: any = null;
  selectedImage = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      const categorySlug = params.get('category');
      const productSlug = params.get('product');

      // 🔹 Find category
      this.category = DESCRIPTIVE_DATA.find(
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
