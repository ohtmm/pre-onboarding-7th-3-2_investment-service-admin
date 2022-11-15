module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/logout',
        destination: '/',
        permanent: false,
      },
    ];
  },
};
