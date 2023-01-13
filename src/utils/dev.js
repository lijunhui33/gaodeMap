const scriptConfig = {
  "NAME": "dev",
  "DESC": "测试环境",
  "IS_PROD": false,
  "URL": "/api"
};

const { IS_PROD, NAME, DESC, URL } = scriptConfig;

export default { URL, IS_PROD, NAME, DESC };