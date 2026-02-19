import {
  Component, OnInit, NgZone,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
  selectedImage!: string; // ✅ important

  constructor(private route: ActivatedRoute,
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

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
    this.route.paramMap.subscribe(params => {

      const categorySlug = params.get('category');
      const productSlug = params.get('product');

      this.category = DESCRIPTIVE_DATA.find(
        c => c.slug === categorySlug
      );

      this.product = null;

      if (this.category && productSlug) {
        this.product = this.category.products?.find(
          (p: any) => p.slug === productSlug
        );
      }

      // ✅ SAFE DEFAULT IMAGE SET
      setTimeout(() => {
        if (this.product?.images?.length) {
          this.selectedImage = this.product.images[0];
        }
        else if (this.category?.images?.length) {
          this.selectedImage = this.category.images[0];
        }
        else {
          this.selectedImage = '';
        }
      });

    });
  }

  // 🔹 Thumbnail click
  selectImage(img: string) {
    this.selectedImage = img;
  }
}
