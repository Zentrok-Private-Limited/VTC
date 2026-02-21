import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTAINER_DATA } from '../container-desiccants';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {

  category: any;
  product: any;
  selectedImage: string | null = null;

  contactForm!: FormGroup;
  loading = false;
  successMsg = '';
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.route.paramMap.subscribe(params => {
      const categorySlug = params.get('category');
      const productSlug = params.get('product');

      this.category = CONTAINER_DATA.find(c => c.slug === categorySlug);

      if (!this.category) {
        this.product = null;
        return;
      }

      this.product = this.category.products.find(
        (p: any) => p.slug === productSlug
      );

      this.selectedImage = this.product?.images?.[0] || null;
    });
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      country: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      subject: [''],
      message: ['']
    });

    const categorySlug = this.route.snapshot.paramMap.get('category');
    const productSlug = this.route.snapshot.paramMap.get('product');

    this.category = CONTAINER_DATA.find(
      c => c.slug === categorySlug
    );

    if (!this.category) return;

    this.product = this.category.products.find(
      (p: any) => p.slug === productSlug
    );

    if (this.product?.images?.length) {
      this.selectedImage = this.product.images[0];
    }
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.http.post(
      'https://vtc-database.vercel.app/api/contact',
      this.contactForm.value
    ).subscribe({
      next: () => {
        this.successMsg = 'Message sent successfully ✅';
        this.errorMsg = '';
        this.contactForm.reset();
        this.loading = false;
      },
      error: () => {
        this.errorMsg = 'Something went wrong ❌';
        this.successMsg = '';
        this.loading = false;
      }
    });
  }
}
