module.exports = {
  apps: [
    {
      name: "crux-server",
      script: "./dist/index.js",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "crux-ngrok",
      script: "ngrok",
      args: "http 4000",
    },
  ],
};
