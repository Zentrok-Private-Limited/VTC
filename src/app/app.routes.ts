import { Routes } from '@angular/router';
import { Desiccants } from './desiccants/desiccants';

export const routes: Routes = [

  /* ---------------- HOME & STATIC PAGES ---------------- */
  {
    path: '',
    loadComponent: () =>
      import('./home/home').then(m => m.Home),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about').then(m => m.About),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./services/services').then(m => m.Services),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact').then(m => m.Contact),
  },

  /* ---------------- OPTIONAL STATIC PRODUCT ---------------- */
  {
    path: 'calcium-based',
    loadComponent: () =>
      import('./calcium-based/calcium-based').then(m => m.CalciumBased),
  },

  /* ---------------- IN-BOX DESICCANTS ---------------- */
  {
    path: 'in-box-desiccants',
    loadComponent: () =>
      import('./in-box-desiccants/in-box-desiccants')
        .then(m => m.InBoxDesiccants),
  },

  /* ---------------- INCUBIC LEVEL 1 : CATEGORIES ---------------- */
  {
    path: 'in-box-desiccants/incubic',
    loadComponent: () =>
      import('./incubic/incubic-categories/incubic-categories')
        .then(m => m.IncubicCategories),
  },

  /* ---------------- INCUBIC LEVEL 2 : CATEGORY PRODUCTS ---------------- */
  {
    path: 'in-box-desiccants/incubic/:category',
    loadComponent: () =>
      import('./incubic/incubic-category-products/incubic-category-products')
        .then(m => m.IncubicCategoryProducts),
  },

  /* ---------------- INCUBIC LEVEL 3 : FINAL PRODUCT ---------------- */
  {
    path: 'in-box-desiccants/incubic/:category/:product',
    loadComponent: () =>
      import('./incubic/incubic-product-details/incubic-product-details')
        .then(m => m.IncubicProductDetails),
  },

  /* ---------------- Container Desiccants ---------------- */
  {
    path: 'container-desiccants',
    loadComponent: () =>
      import('./container-desiccants/container-desiccants').then(m => m.ContainerDesiccants),
  },
  {
    path: 'container-desiccants/:category/:product',
    loadComponent: () =>
      import('./product/product-details/product-details')
        .then(m => m.ProductDetails),
  },
  // ---------------Absorbent & Adsorbent Desiccants---------------------
  {
    path: 'desiccants',
    loadComponent: () =>
      import('./desiccants/desiccants').then(m => m.Desiccants),
  },
  // ---------------Moisture Damage Desiccants---------------------
  {
    path: 'moisture-damage',
    loadComponent: () =>
      import('./moisture-damage/moisture-damage').then(m => m.MoistureDamage),
  },
  // ---------------Moisture Damage Desiccants---------------------
  {
    path: 'moisture-damage-prevention',
    loadComponent: () =>
      import('./moisture-damage-prevention/moisture-damage-prevention').then(m => m.MoistureDamagePrevention),
  },
  // ---------------Industry solutions--------------------
  {
    path: 'industry-solutions',
    loadComponent: () =>
      import('./industry-solutions/industry-solutions').then(m => m.IndustrySolutions),
  },
];
