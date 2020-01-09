const APPCONF = {
  server: {
    port: 8888
  },
  db: {
    username: 'root',
    password: '216520521sc.LN',
    port: '3306',
    host: '127.0.0.1',
    database: 'scrdcool',
    dialect: 'mysql'
  },
  session: {
    key: 'scrdcool',
    // maxAge: 24 * 60 * 60 * 1000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
    domain: '.scrdcool.com'
  }
}

module.exports = APPCONF
