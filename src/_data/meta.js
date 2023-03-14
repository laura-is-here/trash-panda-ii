module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Trash Panda Productions',
  siteDescription:
    'We book anti-racist, anti-fascist, punk rock bands in and around Reno and Sparks, NV',
  siteType: 'Organization', // schema
  locale: 'en_US',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Trash Panda Booking', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: '', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#e6aa68', //  Manifest: defines the default theme color for the application
  themeBgColor: '#02020b', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg',
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Upcoming Events',
    description: 'Information for upcoming events booked by Trash Panda'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Organization name',
    street: '123 Main St.',
    city: 'Ciudad',
    state: 'Estado',
    zip: '12345',
    mobileDisplay: '+34 1234567',
    mobileCall: ' +341234567',
    email: 'hola@yoursite.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
