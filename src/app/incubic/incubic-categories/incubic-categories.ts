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
  categoriesData = INCUBIC_CATEGORIES;

  categorie: Category[] = [
    { name: 'Clay Desiccants', slug: 'clay-desiccants' },
    { name: 'Silica Gel Round Beads', slug: 'silica-gel-round-beads' },
    { name: 'Silica Gel Granules', slug: 'silica-gel-granules' },
    { name: 'Molecular Sieve', slug: 'molecular-sieve-desiccants' },
    { name: 'Indicating & Specialty Desiccants', slug: 'indicating-specialty-desiccants' },
    { name: 'Food Grade Desiccants', slug: 'food-grade-desiccants' },
    { name: 'Activated Carbon', slug: 'activated-carbon' },
    { name: 'Oxygen Absorbers', slug: 'oxygen-absorbers' }
  ];


  selectedCategory = 'clay-desiccants';
  projects: Product[] = [
    
    {
      title: '2g Clay Desiccant',
      slug: '2g-clay',
      categorySlug: 'clay-desiccants',
      image: '/cl2g.png',
      gram: 'CL 2G'
    },
    {
      title: '6g Clay Desiccant',
      slug: '6g-clay',
      categorySlug: 'clay-desiccants',
      image: '/cl6g.png',
      gram: 'CL 6G'
    },
    {
      title: '9g Clay Desiccant',
      slug: '9g-clay',
      categorySlug: 'clay-desiccants',
      image: '/cl9g.png',
      gram: 'CL 9G'
    },
    {
      title: '17g Clay Desiccant',
      slug: '17g-clay',
      categorySlug: 'clay-desiccants',
      image: '/cl17g.png',
      gram: 'CL 17G'
    },
    {
      title: '33g Clay Desiccant',
      slug: '33g-clay',
      categorySlug: 'clay-desiccants',
      image: '/cl33g.png',
      gram: 'CL 33G'
    },
    {
      title: '66g Clay Desiccant',
      slug: '66g-clay',
      categorySlug: 'clay-desiccants',
      image: '/cl66g.png',
      gram: 'CL 66G'
    },

    // 🔹 SILICA GEL ROUND BEADS
    {
      title: '2g Silica Gel Round Beads',
      slug: '2g-silica-round',
      categorySlug: 'silica-gel-round-beads',
      image: '/SG.png',
      gram: '2g SG'
    },
    {
      title: '5g Silica Gel Round Beads',
      slug: '5g-silica-round',
      categorySlug: 'silica-gel-round-beads',
      image: '/SG.png',
      gram: '5g SG'
    },
    {
      title: '10g Silica Gel Round Beads',
      slug: '10g-silica-round',
      categorySlug: 'silica-gel-round-beads',
      image: '/SG.png',
      gram: '10g SG'
    },

    // 🔹 SILICA GEL GRANULES
    {
      title: '1g Silica Gel Granules',
      slug: '1g-silica-granules',
      categorySlug: 'silica-gel-granules',
      image: 'banner1.png',
      gram: '1g SGG'
    },
    {
      title: '2g Silica Gel Granules',
      slug: '2g-silica-granules',
      categorySlug: 'silica-gel-granules',
      image: 'banner2.png',
      gram: '2g SGG'
    },
    {
      title: '5g Silica Gel Granules',
      slug: '5g-silica-granules',
      categorySlug: 'silica-gel-granules',
      image: 'banner3.png',
      gram: '5g SGG'
    },
    {
      title: '10g Silica Gel Granules',
      slug: '10g-silica-granules',
      categorySlug: 'silica-gel-granules',
      image: 'banner1.png',
      gram: '10g SGG'
    },

    // 🔹 MOLECULAR SIEVE (LISTING / GRID)
    {
      title: '1g Molecular Sieve',
      slug: '1g-molecular-sieve',
      categorySlug: 'molecular-sieve-desiccants', 
      image: '/banner1.png',
      gram: '1g MS'
    },
    {
      title: '2g Molecular Sieve',
      slug: '2g-molecular-sieve',
      categorySlug: 'molecular-sieve-desiccants', 
      image: '/banner2.png',
      gram: '2g MS'
    },
    {
      title: '5g Molecular Sieve',
      slug: '5g-molecular-sieve',
      categorySlug: 'molecular-sieve-desiccants', 
      image: '/banner3.png',
      gram: '5g MS'
    },
    // 🔹 INDICATING & SPECIALTY (LISTING)
    {
      title: '1g Indicating Desiccant',
      slug: '1g-indicating-desiccant',
      categorySlug: 'indicating-specialty-desiccants',
      image: '/banner1.png',
      gram: '1g IS'
    },
    {
      title: '2g Indicating Desiccant',
      slug: '2g-indicating-desiccant',
      categorySlug: 'indicating-specialty-desiccants',
      image: '/banner2.png',
      gram: '2g IS'
    },
    // 🔹 FOOD GRADE DESICCANTS
    {
      title: '1g Food Grade Desiccant',
      slug: '1g-food-grade-desiccant',
      categorySlug: 'food-grade-desiccants',
      image: '/banner1.png',
      gram: '1g FG'
    },
    {
      title: '2g Food Grade Desiccant',
      slug: '2g-food-grade-desiccant',
      categorySlug: 'food-grade-desiccants',
      image: '/banner2.png',
      gram: '2g FG'
    },
    {
      title: '5g Food Grade Desiccant',
      slug: '5g-food-grade-desiccant',
      categorySlug: 'food-grade-desiccants',
      image: '/banner3.png',
      gram: '5g FG'
    },

    // 🔹 ACTIVATED CARBON
    {
      title: '5g Activated Carbon',
      slug: '5g-activated-carbon',
      categorySlug: 'activated-carbon',
      image: '/banner2.png',
      gram: '5g AC'
    },
    {
      title: '10g Activated Carbon',
      slug: '10g-activated-carbon',
      categorySlug: 'activated-carbon',
      image: '/banner3.png',
      gram: '10g AC'
    },
    // 🔹 OXYGEN ABSORBERS
    {
      title: '50cc Oxygen Absorber',
      slug: '50cc-oxygen-absorber',
      categorySlug: 'oxygen-absorbers',
      image: '/banner1.png',
      gram: '50cc OA'
    },
    {
      title: '100cc Oxygen Absorber',
      slug: '100cc-oxygen-absorber',
      categorySlug: 'oxygen-absorbers',
      image: '/banner2.png',
      gram: '100cc OA'
    }
  ];

  ngOnInit() {
    this.filteredProjects = this.projects.filter(
      p => p.categorySlug === 'clay-desiccants'
    );
  }

  filteredProjects: Product[] = [];

  constructor(private router: Router) {
    this.filteredProjects = this.projects;
  }

  filterCategory(category: Category) {
    this.selectedCategory = category.slug;

    this.filteredProjects = this.projects.filter(
      product => product.categorySlug === category.slug
    );
  }

  openProject(product: Product) {
    this.router.navigate([
      '/in-box-desiccants',
      'incubic',
      product.categorySlug, // :category
      product.slug          // :product
    ]);
  }
}
