const deployConfig = {
  user: "root",
  path: "/var/www/gg-addon",
  repo: "git@github.com:zingfeng/google-addon-demo.git",
  "post-deploy": "npm install && node index.js",
};

module.exports = {
  apps: [
    {
      name: "google-addon",
      script: "./index.js",
      log_date_format: "YYYY-MM-DD HH:mm Z",
    },
  ],

  deploy: {
    daybreak: {
      ...deployConfig,
      host: "134.209.110.123",
      ref: "origin/master",
    },
  },
};
