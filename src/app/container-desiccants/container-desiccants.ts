import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CONTAINER_DESICCANTS_DATA } from '../product/container-desiccants';

interface Category {
  name: string;
  slug: string;
}

interface Product {
  title: string;
  slug: string;
  categorySlug: string;
  image: string;
  gram: string;
}

@Component({
  selector: 'app-container-desiccants',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './container-desiccants.html',
  styleUrl: './container-desiccants.css',
})
export class ContainerDesiccants implements OnInit {

  /* ---------- CATEGORIES ---------- */
  categories: Category[] = CONTAINER_DESICCANTS_DATA;

  selectedCategory = 'standard';
  filteredProjects: Product[] = [];

  /* ---------- PRODUCTS ---------- */
  projects: Product[] = [

    /* STANDARD */
    {
      title: 'VTC 250G',
      slug: 'vtc-250g',
      categorySlug: 'standard',
      image: '/vtc250g.png',
      gram: 'VTC 250G'
    },
    {
      title: 'VTC 250G Sticker',
      slug: 'vtc-250g-sticker',
      categorySlug: 'standard',
      image: '/vtc250g.png',
      gram: 'VTC 250G Sticker'
    },
    {
      title: 'VTC 500G',
      slug: 'vtc-500g',
      categorySlug: 'standard',
      image: '/vtc500g.png',
      gram: 'VTC 500G'
    },

    /* HEAVY */
    {
      title: 'VTC 1000G',
      slug: 'vtc-1000g',
      categorySlug: 'heavy',
      image: '/vtc1000g.png',
      gram: 'VTC 1000G'
    },

    /* SPECIAL */
    {
      title: 'VTC 1000G',
      slug: 'vtc-1000g-special',
      categorySlug: 'special',
      image: '/vtc1000g.png',
      gram: 'VTC 1000G'
    },
    {
      title: 'VTC 1200G',
      slug: 'vtc-1200g',
      categorySlug: 'special',
      image: '/vtc1200g.png',
      gram: 'VTC 1200G'
    }
  ];

  constructor(private router: Router) {}

  /* ---------- INIT ---------- */
  ngOnInit(): void {
    this.filterCategory(this.categories[0]);
  }

  /* ---------- FILTER ---------- */
  filterCategory(category: Category): void {
    this.selectedCategory = category.slug;
    this.filteredProjects = this.projects.filter(
      p => p.categorySlug === category.slug
    );
  }

  /* ---------- NAVIGATION ---------- */
  openProject(product: Product): void {
    this.router.navigate([
      '/container-desiccants',
      product.categorySlug,
      product.slug
    ]);
  }
}
