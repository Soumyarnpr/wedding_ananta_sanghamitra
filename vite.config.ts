import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import wedding from './src/config/wedding.config.json';

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: 'invitation-metadata',
      transformIndexHtml() {
        const names = wedding.couple.groom.name + ' & ' + wedding.couple.bride.name;
        const date = new Intl.DateTimeFormat('en-IN', {
          weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
        }).format(new Date(wedding.wedding.date + 'T00:00:00Z'));
        const title = names + ' | Wedding Reception';
        const description = 'The Pradhan family invites you to ' + names + '’s wedding reception on ' + date
          + ' at ' + wedding.wedding.venue.name + ', ' + wedding.wedding.venue.address + '.';
        return [
          { tag: 'title', children: title.replaceAll('&', '&amp;').replaceAll('<', '&lt;'), injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'theme-color', content: wedding.theme.maroon } },
          { tag: 'meta', attrs: { name: 'description', content: description } },
          { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
          { tag: 'meta', attrs: { property: 'og:title', content: title } },
          { tag: 'meta', attrs: { property: 'og:description', content: description } },
          { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
          { tag: 'link', attrs: { rel: 'icon', href: wedding.artwork.lotus, type: 'image/svg+xml' } },
          { tag: 'link', attrs: { rel: 'preload', as: 'image', href: wedding.artwork.hero } },
        ];
      },
    },
  ],
});
