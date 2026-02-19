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
  {
    path: 'calcium-based/:category/:product',
    loadComponent: () =>
      import('./product/product-details/product-details')
        .then(m => m.ProductDetails),
  },

  /* ---------------- IN-BOX DESICCANTS ---------------- */
  // {
  //   path: 'in-box-desiccants',
  //   loadComponent: () =>
  //     import('./in-box-desiccants/in-box-desiccants')
  //       .then(m => m.InBoxDesiccants),
  // },

  /* ---------------- DESCRIPTIVE ---------------- */

  {
    path: 'in-box-desiccants',
    loadComponent: () =>
      import('./in-box-desiccants/in-box-desiccants-categories/in-box-desiccants-categories')
        .then(m => m.InBoxDesiccantsCategories),
  },
  {
    path: 'in-box-desiccants/:category',
    loadComponent: () =>
      import('./in-box-desiccants/in-box-desiccants-category-products/in-box-desiccants-category-products')
        .then(m => m.InBoxDesiccantsCategoryProducts),
  },
  {
    path: 'in-box-desiccants/:category/:product',
    loadComponent: () =>
      import('./in-box-desiccants/in-box-desiccants-product-details/in-box-desiccants-product-details')
        .then(m => m.InBoxDesiccantsProductDetails),
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
  // ---------------CRS--------------------
  {
    path: 'social-responsibilities',
    loadComponent: () =>
      import('./csr/social-responsibilities/social-responsibilities')
        .then(m => m.SocialResponsibilities)
  },
  {
    path: 'environment',
    loadComponent: () =>
      import('./csr/environment/environment')
        .then(m => m.Environment)
  },
  {
    path: 'compliance',
    loadComponent: () =>
      import('./csr/compliance/compliance')
        .then(m => m.Compliance)
  },
  {
    path: 'certification',
    loadComponent: () =>
      import('./csr/certification/certification')
        .then(m => m.Certification)
  }
];
