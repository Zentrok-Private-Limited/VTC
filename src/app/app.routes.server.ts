import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [

  /* ---------------- STATIC PAGES ---------------- */
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

  /* ---------------- DESCRIPTIVE (STATIC ENTRY) ---------------- */
  {
    path: 'descriptive',
    renderMode: RenderMode.Prerender,
  },

  /* ---------------- DESCRIPTIVE (DYNAMIC → NO PRERENDER) ---------------- */
  {
    path: 'descriptive/:category',
    renderMode: RenderMode.Client,   // ✅ FIX
  },
  {
    path: 'descriptive/:category/:product',
    renderMode: RenderMode.Client,   // ✅ FIX
  },

  /* ---------------- CONTAINER DESICCANTS ---------------- */
  {
    path: 'container-desiccants',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'container-desiccants/:category/:product',
    renderMode: RenderMode.Server,   // ✅ SEO + dynamic
  },

  /* ---------------- FALLBACK ---------------- */
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  }

];
