module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: [
    /bibliography/,
    /star-button/,
    /abbr/,
    /links/,
    /btn/,
    /col-sm-2/,
  ],
};
