module.exports = {
  proxy: 'localhost:3000',
  files: ['**/*.css', '**/*.pug', '**/*.js'],
  ignore: ['node_modules'],
  reloadDelay: 10,
  ui: false,
  notify: true,
  port: 3001,
};
