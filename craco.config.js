const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              //Primary colors for this tech evaluation
              '@primary-color': '#1DA57A',

              //layout
              '@layout-body-background':'none',

              //link
              '@link-decoration': 'none',
              '@link-hover-decoration': 'none',
              '@link-focus-decoration': 'none',

              //Menu settings
              '@menu-bg':'none',
              '@menu-highlight-color':'#fa8c16',
              '@menu-item-active-bg':'#fa8c16',
              '@menu-item-active-border-width':'none',
              '@menu-item-padding':'0 20px',
              
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};