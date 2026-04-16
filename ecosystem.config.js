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
      args: "http 4001 --domain=unperishing-nonseasonably-yesenia.ngrok-free.dev",
      restart_delay: 5000,
    },
  ],
};
