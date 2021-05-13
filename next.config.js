module.exports = {
    async rewrites() {
      return [
        {
          source: '/:product/bula',
          destination: 'https://consultaremedios.com.br/:product/bula',
        },
      ]
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    }
  }