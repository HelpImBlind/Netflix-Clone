const iconify = require("@iconify/tailwind4");

module.exports = {
 content: [
  "./src/**/*.{html,js}", 
  "./node_modules/flyonui/**/*.{js,ts}",
  "./node_modules/@iconify/tailwind4/**/*.{js,ts}",
],
  theme: {
    extend: {},
  },
  plugins: [
    iconify,
    require("flyonui"),
  ],
};



