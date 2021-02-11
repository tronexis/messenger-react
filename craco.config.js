module.exports = {
  style: {
    css: {
      loaderOptions: {
        modules: {
          localIdentName: "[name]__[local]-[hash:base64:6]",
        },
      },
    },
  },
  babel: {
    plugins: ["babel-plugin-styled-components", "babel-plugin-macros"],
  },
};
