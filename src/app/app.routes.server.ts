import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [

  /* -------- STATIC ROUTES (PRERENDER) -------- */
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

  /* -------- DYNAMIC (NEVER PRERENDER) -------- */
  {
    path: 'in-box-desiccants/descriptive/:category',
    renderMode: RenderMode.Client,   // ✅ dynamic
  },
  {
    path: 'in-box-desiccants/descriptive/:category/:product',
    renderMode: RenderMode.Client,   // ✅ dynamic
  },

  /* -------- CONTAINER DESICCANTS (SEO IMPORTANT) -------- */
  {
    path: 'container-desiccants',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'container-desiccants/:category/:product',
    renderMode: RenderMode.Server,   // ✅ dynamic + SEO
  },

  /* -------- FALLBACK (ALWAYS LAST) -------- */
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  }

];
