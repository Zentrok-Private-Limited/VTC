import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DESCRIPTIVE_DATA } from '../descriptive.data';

@Component({
  selector: 'app-descriptive-product-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './descriptive-product-details.html',
})
export class DescriptiveProductDetails {
  product: any;
  category: any;
  selectedImage: string | null = null;

  constructor(private route: ActivatedRoute) {

    const categorySlug = this.route.snapshot.paramMap.get('category');
    const productSlug = this.route.snapshot.paramMap.get('product');

    this.category = DESCRIPTIVE_DATA.find(c => c.slug === categorySlug);

    this.product = this.category?.products.find(
      (p: any) => p.slug === productSlug
    );

    // default image
    if (this.product?.images?.length) {
      this.selectedImage = this.product.images[0];
    }
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }
}
