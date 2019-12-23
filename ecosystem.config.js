module.exports = {
  apps: [{
    name: 'scrdcool-api',
    script: 'app.js',
    instances: 1,
    watch: true,
    ignore_watch: ['node_modules', 'static/upload', '.idea'],
    max_memory_restart: '500M',
    node_args: ['--inspect'],
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
}
