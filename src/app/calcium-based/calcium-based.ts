import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CONTAINER_DESICCANTS_DATA } from '../product/container-desiccants';

interface Product {
  title: string;
  slug: string;
  categorySlug: string;
  image: string;
  gram: string;
}
@Component({
  selector: 'app-calcium-based',
  imports: [RouterModule, CommonModule],
  templateUrl: './calcium-based.html',
  styleUrl: './calcium-based.css',
})
export class CalciumBased {

projects: Product[] = [
    
    {
      title: 'DS 2G',
      slug: 'ds-2g',
      categorySlug: 'ds',
      image: '/ds2g.png',
      gram: 'DS 2G'
    },
    {
      title: 'DS 2g sticky',
      slug: 'ds-2g-sticky',
      categorySlug: 'ds',
      image: '/ds2g.png',
      gram: 'DS 2G Sticky'
    },
    {
      title: 'DS 5g ',
      slug: 'ds-5g',
      categorySlug: 'ds',
      image: '/ds5g.png',
      gram: 'DS 5G'
    },
    {
      title: 'DS 5g Sticky ',
      slug: 'ds-5g-sticky',
      categorySlug: 'ds',
      image: '/ds5g.png',
      gram: 'DS 5G sticky'
    },
    {
      title: 'DS 10g ',
      slug: 'ds-10g',
      categorySlug: 'ds',
      image: '/ds10g.png',
      gram: 'DS 10G'
    },
    {
      title: 'DS 25g ',
      slug: 'ds-25g',
      categorySlug: 'ds',
      image: '/ds25g.png',
      gram: 'DS 25G'
    },
    {
      title: 'DS 50g ',
      slug: 'ds-50g',
      categorySlug: 'ds',
      image: '/ds50.png',
      gram: 'DS 50G'
    },
    {
      title: 'DS 100g ',
      slug: 'ds-100g',
      categorySlug: 'ds',
      image: '/ds100g.png',
      gram: 'DS 100G'
    },
  ];
  filteredProjects: Product[] = [];

  constructor(private router: Router) {
    this.filteredProjects = this.projects;
  }

  openProject(product: Product) {
    this.router.navigate([
      '/calcium-based',
      product.categorySlug,
      product.slug
    ]);
  }
}
