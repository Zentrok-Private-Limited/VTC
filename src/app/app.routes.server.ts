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

  /* -------- CALCIUM BASED -------- */
  {
    path: 'calcium-based',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'calcium-based/:category/:product',
    renderMode: RenderMode.Server,   // ✅ dynamic
  },

  /* -------- CONTAINER DESICCANTS -------- */
  {
    path: 'container-desiccants',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'container-desiccants/:category/:product',
    renderMode: RenderMode.Server,   // ✅ dynamic
  },

  /* -------- FALLBACK -------- */
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  }

];
