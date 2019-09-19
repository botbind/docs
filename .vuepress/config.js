module.exports = {
  title: "Developer Docs",
  description: "Developer documentation for Bot Bind addon developers.",
  head: [
    ["link", { rel: "icon", href: "/icon.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }]
  ],
  themeConfig: {
    logo: "./assets/img/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Main Site", link: "https://botbind.com" }
    ],
    sidebar: ["/", "/testing", "/dashoptions"],
    sidebarDepth: 1,
    lastUpdated: true,
    repo: "botbind/docs",
    editLinks: true,
    displayAllHeaders: true
  },
  serviceWorker: true,
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-imsize"));
    }
  }
};
