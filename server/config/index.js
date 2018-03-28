exports.APP = {
  API_PATH: '/api',
  PORT: 3000
}

exports.DB = {
  uri: `mongodb://127.0.0.1:${argv.dbport || '27017'}/my_blog`,
  username: argv.db_username || 'DB_username',
  password: argv.db_password || 'DB_password'
}

exports.AUTH = {
  jwtTokenSecret: argv.auth_key || 'my_blog',
  defaultUsername: argv.auth_default_username || 'jkchao',
  defaultPassword: argv.auth_default_password || '123456'
}