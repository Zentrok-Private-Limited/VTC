import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isOpen = false;
  isProductsOpen = false;
  isDesktopProductsOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.isProductsOpen = false;
    }
  }

  toggleDesktopProducts() {
    this.isDesktopProductsOpen = !this.isDesktopProductsOpen;
  }

  closeAll() {
    this.isOpen = false;
    this.isProductsOpen = false;
    this.isDesktopProductsOpen = false;
  }
onNavClick() {
  this.isOpen = false;
  this.isProductsOpen = false;
  this.isDesktopProductsOpen = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
isKnowledgeOpen = false;
isCsrOpen = false;


}
