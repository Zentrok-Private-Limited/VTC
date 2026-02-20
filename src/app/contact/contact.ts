import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule], // ✅ sirf UI modules
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {

  contactForm!: FormGroup;
  loading = false;
  successMsg = '';
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

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
  }

  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.http.post('https://vtc-database.vercel.app/api/contact', this.contactForm.value)
      .subscribe({
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
