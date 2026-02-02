import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isOpen = false;
  isProductsOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;

    // menu band ho to dropdown bhi band
    if (!this.isOpen) {
      this.isProductsOpen = false;
    }
  }

}
