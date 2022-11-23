/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
  async rewrites() {
      return [
        {
          source: '/sign_in',
          destination: 'http://localhost:3000/api/signin',
        },
      ]
    },
};
