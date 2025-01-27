module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'loveat-back'),
        username: env('DATABASE_USERNAME', "root"),
        password: env('DATABASE_PASSWORD', "root"),
        uri: env('DATABASE_URI'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: true,
      },
    },
  },
});
