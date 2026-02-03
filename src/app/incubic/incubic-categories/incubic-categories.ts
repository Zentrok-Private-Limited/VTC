import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { INCUBIC_CATEGORIES } from '../incubic.data';

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
  selector: 'app-incubic-categories',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './incubic-categories.html',
  styleUrl: './incubic-categories.css',
})
export class IncubicCategories {

  // (optional) agar future me data chahiye
  categoriesData = INCUBIC_CATEGORIES;

  // 🔹 Category buttons
  categorie: Category[] = [
    { name: 'All', slug: 'all' },
    { name: 'Clay Desiccants', slug: 'clay-desiccants' },
    { name: 'Silica Gel Round Beads', slug: 'silica-gel-round-beads' },
    { name: 'Silica Gel Granules', slug: 'silica-gel-granules' },
    { name: 'Molecular Sieve', slug: 'molecular-sieve' },
    { name: 'Indicating & Specialty', slug: 'indicating-specialty' },
    { name: 'Food Grade Desiccants', slug: 'food-grade' },
    { name: 'Activated Carbon', slug: 'activated-carbon' },
    { name: 'Oxygen Absorbers', slug: 'oxygen-absorbers' }
  ];

  selectedCategory = 'all';

  // 🔹 Products (abhi static, baad me INCUBIC_DATA se aa sakta hai)
  projects: Product[] = [
    // 🔹 CLAY DESICCANTS
    {
      title: '1g Clay Desiccant',
      slug: '1g-clay',
      categorySlug: 'clay-desiccants',
      image: 'images/clay.jpg',
      gram: '1g'
    },
    {
      title: '2g Clay Desiccant',
      slug: '2g-clay',
      categorySlug: 'clay-desiccants',
      image: 'images/clay.jpg',
      gram: '2g'
    },

    // 🔹 SILICA GEL ROUND BEADS
    {
      title: '2g Silica Gel Round Beads',
      slug: '2g-silica-round',
      categorySlug: 'silica-gel-round-beads',
      image: 'images/silica-round.jpg',
      gram: '2g SG'
    },
    {
      title: '5g Silica Gel Round Beads',
      slug: '5g-silica-round',
      categorySlug: 'silica-gel-round-beads',
      image: 'images/silica-round.jpg',
      gram: '5g SG'
    },

    // 🔹 SILICA GEL GRANULES
    {
      title: '1g Silica Gel Granules',
      slug: '1g-silica-granules',
      categorySlug: 'silica-gel-granules',
      image: 'images/silica-granules.jpg',
      gram: '1g SGG'
    },
    {
      title: '2g Silica Gel Granules',
      slug: '2g-silica-granules',
      categorySlug: 'silica-gel-granules',
      image: 'images/silica-granules.jpg',
      gram: '2g SGG'
    },
    {
      title: '5g Silica Gel Granules',
      slug: '5g-silica-granules',
      categorySlug: 'silica-gel-granules',
      image: 'images/silica-granules.jpg',
      gram: '5g SGG'
    },
    {
      title: '10g Silica Gel Granules',
      slug: '10g-silica-granules',
      categorySlug: 'silica-gel-granules',
      image: 'images/silica-granules.jpg',
      gram: '10g SGG'
    },

    // 🔹 MOLECULAR SIEVE
    {
      title: '3A Molecular Sieve',
      slug: '3a-molecular-sieve',
      categorySlug: 'molecular-sieve',
      image: 'images/molecular-sieve.jpg',
      gram: '5g'
    },
    {
      title: '4A Molecular Sieve',
      slug: '4a-molecular-sieve',
      categorySlug: 'molecular-sieve',
      image: 'images/molecular-sieve.jpg',
      gram: '10g'
    },

    // 🔹 INDICATING & SPECIALTY
    {
      title: 'Orange Indicating Silica Gel',
      slug: 'orange-indicating-silica',
      categorySlug: 'indicating-specialty',
      image: 'images/indicating.jpg',
      gram: '5g'
    },
    {
      title: 'Humidity Indicator Card',
      slug: 'humidity-indicator-card',
      categorySlug: 'indicating-specialty',
      image: 'images/humidity-card.jpg',
      gram: 'N/A'
    },

    // 🔹 FOOD GRADE DESICCANTS
    {
      title: 'Food Grade Clay Desiccant',
      slug: 'food-grade-clay',
      categorySlug: 'food-grade',
      image: 'images/food-grade-clay.jpg',
      gram: '2g'
    },
    {
      title: 'Food Grade Silica Gel',
      slug: 'food-grade-silica',
      categorySlug: 'food-grade',
      image: 'images/food-grade-silica.jpg',
      gram: '5g'
    },

    // 🔹 ACTIVATED CARBON
    {
      title: 'Activated Carbon Pellets',
      slug: 'activated-carbon-pellets',
      categorySlug: 'activated-carbon',
      image: 'images/activated-carbon.jpg',
      gram: '10g'
    },
    {
      title: 'Activated Carbon Granules',
      slug: 'activated-carbon-granules',
      categorySlug: 'activated-carbon',
      image: 'images/activated-carbon.jpg',
      gram: '20g'
    },

    // 🔹 OXYGEN ABSORBERS
    {
      title: '50cc Oxygen Absorber',
      slug: '50cc-oxygen-absorber',
      categorySlug: 'oxygen-absorbers',
      image: 'images/oxygen-absorber.jpg',
      gram: '50cc'
    },
    {
      title: '100cc Oxygen Absorber',
      slug: '100cc-oxygen-absorber',
      categorySlug: 'oxygen-absorbers',
      image: 'images/oxygen-absorber.jpg',
      gram: '100cc'
    }
  ];



  // 🔹 Filtered products
  filteredProjects: Product[] = [];

  constructor(private router: Router) {
    // default: show all products
    this.filteredProjects = this.projects;
  }

  // ✅ Category filter
  filterCategory(category: Category) {
    this.selectedCategory = category.slug;

    this.filteredProjects =
      category.slug === 'all'
        ? this.projects
        : this.projects.filter(
          product => product.categorySlug === category.slug
        );
  }

  // ✅ Product detail page navigation
  openProject(product: Product) {
    this.router.navigate([
      '/in-box-desiccants',
      'incubic',
      product.categorySlug, // :category
      product.slug          // :product
    ]);
  }
}
