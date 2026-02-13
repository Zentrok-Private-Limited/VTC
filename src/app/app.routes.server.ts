import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [

  /* -------- STATIC ROUTES -------- */
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'services',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender,
  },

  /* -------- IN-BOX DESICCANTS -------- */
  {
    path: 'in-box-desiccants',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'in-box-desiccants/descriptive',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'in-box-desiccants/descriptive/:category',
    renderMode: RenderMode.Client,
  },
  {
    path: 'in-box-desiccants/descriptive/:category/:product',
    renderMode: RenderMode.Client,
  },

  /* -------- CALCIUM BASED (⚠️ FIX HERE) -------- */
  {
    path: 'calcium-based',
    renderMode: RenderMode.Prerender,   // listing page
  },
  {
    path: 'calcium-based/:category/:product',
    renderMode: RenderMode.Server,      // ✅ MUST be Server
  },

  /* -------- CONTAINER DESICCANTS -------- */
  {
    path: 'container-desiccants',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'container-desiccants/:category/:product',
    renderMode: RenderMode.Server,
  },

  /* -------- FALLBACK (ALWAYS LAST) -------- */
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  }

];

