module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: [
    // Bibliography styles - keep all .bibliography selectors
    /^\.bibliography/,
  ],
};
safelist: {
    standard: ['bibliography', 'star-button', 'abbr', 'links', 'btn', 'col-sm-2'],
    greedy: [/^bibliography/, /^star-button/]
  }