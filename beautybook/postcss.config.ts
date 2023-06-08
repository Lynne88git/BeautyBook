import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { RuleSetRule } from 'webpack';

const postcssLoader: RuleSetRule = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
};

export default postcssLoader;
