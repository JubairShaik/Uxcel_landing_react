const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  });
  
  module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          ...(process.env.NODE_ENV !== 'development' ? [purgecss] : []),
        ],
      },
    },
  };
  