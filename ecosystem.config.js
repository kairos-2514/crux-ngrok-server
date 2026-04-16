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
      args: "http 4001 --url=unperishing-nonseasonably-yesenia.ngrok-free.dev --authtoken=38zwnzS2SsBDTZJbVwkF6ydGkkJ_2poATXvnEXzmV4BtF5vTL",
      restart_delay: 5000,
    },
  ],
};
