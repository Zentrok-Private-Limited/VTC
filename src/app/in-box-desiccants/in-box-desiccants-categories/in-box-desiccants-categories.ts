import { Component, NgZone, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DESCRIPTIVE_CATEGORIES } from '../descriptive.data';

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
  selector: 'app-in-box-desiccants-categories',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './in-box-desiccants-categories.html',
  styleUrl: './in-box-desiccants-categories.css',
})
export class InBoxDesiccantsCategories {
  categoriesData = DESCRIPTIVE_CATEGORIES;

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
      title: '2g Silica Gel Granules',
      slug: '2g-silica-granules',
      categorySlug: 'silica-gel-granules',
      image: 'sgg.png',
      gram: '2g SGG'
    },
    {
      title: '5g Silica Gel Granules',
      slug: '5g-silica-granules',
      categorySlug: 'silica-gel-granules',
      image: 'sgg.png',
      gram: '5g SGG'
    },
    {
      title: '10g Silica Gel Granules',
      slug: '10g-silica-granules',
      categorySlug: 'silica-gel-granules',
      image: 'sgg.png',
      gram: '10g SGG'
    },

    // 🔹 MOLECULAR SIEVE (LISTING / GRID)

    {
      title: '2g Molecular Sieve',
      slug: '2g-molecular-sieve',
      categorySlug: 'molecular-sieve-desiccants',
      image: '/ms2g.png',
      gram: '2g MS'
    },
    {
      title: '6g Molecular Sieve',
      slug: '6g-molecular-sieve',
      categorySlug: 'molecular-sieve-desiccants',
      image: '/ms6g.png',
      gram: '6g MS'
    },
    {
      title: '10g Molecular Sieve',
      slug: '10g-molecular-sieve',
      categorySlug: 'molecular-sieve-desiccants',
      image: '/ms10g.png',
      gram: '10g MS'
    },
    // 🔹 INDICATING & SPECIALTY (LISTING)
    {
      title: '2g Indicating Desiccant',
      slug: '2g-indicating-desiccant',
      categorySlug: 'indicating-specialty-desiccants',
      image: '/is.png',
      gram: '2g IS'
    },
    // 🔹 FOOD GRADE DESICCANTS
    {
      title: '0.5g Food Grade Desiccant',
      slug: '0.5g-food-grade-desiccant',
      categorySlug: 'food-grade-desiccants',
      image: '/fg05g.png',
      gram: '0.5g FG'
    },
    {
      title: '1g Food Grade Desiccant',
      slug: '1g-food-grade-desiccant',
      categorySlug: 'food-grade-desiccants',
      image: '/fg1g.png',
      gram: '1g FG'
    },
    {
      title: '2g Food Grade Desiccant',
      slug: '2g-food-grade-desiccant',
      categorySlug: 'food-grade-desiccants',
      image: '/fg2g.png',
      gram: '2g FG'
    },

    // 🔹 ACTIVATED CARBON
    {
      title: '2g Activated Carbon',
      slug: '2g-activated-carbon',
      categorySlug: 'activated-carbon',
      image: '/ac2g.png',
      gram: '2g AC'
    },
    {
      title: '6g Activated Carbon',
      slug: '6g-activated-carbon',
      categorySlug: 'activated-carbon',
      image: '/ac6g.png',
      gram: '6g AC'
    },
    {
      title: '10g Activated Carbon',
      slug: '10g-activated-carbon',
      categorySlug: 'activated-carbon',
      image: '/ac10g.png',
      gram: '10g AC'
    },
    // 🔹 OXYGEN ABSORBERS
    {
      title: '50cc Oxygen Absorber',
      slug: '50cc-oxygen-absorber',
      categorySlug: 'oxygen-absorbers',
      image: '/50cc.png',
      gram: '50cc OA'
    },
    {
      title: '100cc Oxygen Absorber',
      slug: '100cc-oxygen-absorber',
      categorySlug: 'oxygen-absorbers',
      image: '/100cc.png',
      gram: '100cc OA'
    }
  ];

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
      });
    }
    this.filteredProjects = this.projects.filter(
      p => p.categorySlug === 'clay-desiccants'
    );
  }

  filteredProjects: Product[] = [];

  constructor(private router: Router,
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
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
      '/descriptive',
      product.categorySlug, // :category
      product.slug          // :product
    ]);
  }

}
