/**
 * 环境变量枚举
 */
const dev = {
  NAME: 'dev',
  DESC: '测试环境',
  IS_PROD: false,
  URL: '/api',
};

const prod = {
  NAME: 'prod',
  DESC: '生产环境',
  IS_PROD: true,
  URL: 'http://api.yashaoxf.com',
};


module.exports = {
  dev,
  prod
};