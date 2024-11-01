/** @type {import('@eventcatalog/core/bin/eventcatalog.config').Config} */
export default {
  title: 'Rocket.Chat Docs',
  tagline: 'Discover, Explore and Document your Event Driven Architectures',
  organizationName: 'Rocket.Chat',
  homepageLink: 'https://rocket.chat',
  editUrl: 'https://github.com/boyney123/eventcatalog-demo/edit/master',
  // By default set to false, add true to get urls ending in /
  trailingSlash: false,
  // Change to make the base url of the site different, by default https://{website}.com/docs,
  // changing to /company would be https://{website}.com/company/docs,
  base: '/',
  // Customize the logo, add your logo to public/ folder
  logo: {
    alt: 'Rocket.Chat Logo',
    src: '/logo.png',
    text: 'Rocket.Chat'
  },
  docs: {
    sidebar: {
      // Should the sub heading be rendered in the docs sidebar?
      showPageHeadings: true
    }
  },
  // required random generated id used by eventcatalog
  cId: '3bed1e2a-8aca-4600-a11e-483bce30c8ce'
}
