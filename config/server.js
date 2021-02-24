module.exports = ({ env }) => ({
  host: env('HOST', process.env.HOST || '0.0.0.0'),
  port: env.int('PORT', process.env.PORT || 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1430e2e28133847cd7a1fb54bbfb90a7'),
    },
  },
});
// Changing host
