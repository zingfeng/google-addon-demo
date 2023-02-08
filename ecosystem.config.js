const deployConfig = {
  user: "root",
  path: "/var/www/gg-addon",
  repo: "git@github.com:AvengersCodeLovers/aPoll.git",
  "post-deploy": "cd slack-app && npm install && npm run start",
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
      ref: "origin/main",
    },
  },
};
