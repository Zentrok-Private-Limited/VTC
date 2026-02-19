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
    path: 'in-box-desiccants',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'in-box-desiccants/:category',
    renderMode: RenderMode.Client,   // ✅ FIX
  },
  {
    path: 'in-box-desiccants/:category/:product',
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
