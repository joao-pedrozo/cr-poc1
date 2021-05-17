module.exports = {
    async rewrites() {
      return [
        {
          source: '/:product/bula',
          destination: 'https://consultaremedios.com.br/:product/bula',
        },
      ]
    },
    images: {
      domains: ['localhost'],
    },
  }