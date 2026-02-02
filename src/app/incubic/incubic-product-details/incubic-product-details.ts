import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { INCUBIC_DATA } from '../incubic.data';

@Component({
  selector: 'app-incubic-product-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './incubic-product-details.html',
})
export class IncubicProductDetails {

  product: any;
  category: any;
  selectedImage: string | null = null;

  constructor(private route: ActivatedRoute) {

    const categorySlug = this.route.snapshot.paramMap.get('category');
    const productSlug = this.route.snapshot.paramMap.get('product');

    this.category = INCUBIC_DATA.find(c => c.slug === categorySlug);

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
