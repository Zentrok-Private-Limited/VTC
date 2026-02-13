import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [

  /* ================= STATIC PAGES ================= */
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

  /* ================= CALCIUM BASED ================= */
  {
    path: 'calcium-based',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'calcium-based/:category/:product',
    renderMode: RenderMode.Client,   // ✅ FIX (dynamic → no prerender)
  },

  /* ================= DESCRIPTIVE ================= */
  {
    path: 'descriptive',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'descriptive/:category',
    renderMode: RenderMode.Client,   // ✅ FIX
  },
  {
    path: 'descriptive/:category/:product',
    renderMode: RenderMode.Client,   // ✅ FIX
  },

  /* ================= CONTAINER DESICCANTS ================= */
  {
    path: 'container-desiccants',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'container-desiccants/:category/:product',
    renderMode: RenderMode.Server,   // ✅ SEO + dynamic
  },

  /* ================= FALLBACK ================= */
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  }

];
