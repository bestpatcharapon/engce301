module.exports = {
    development: {
      parseConfig: {
        databaseURI:
          "mongodb://wallboarduser:WB1qazxsw2@192.168.169.128:27017/wallboarddb",
        appId: "wallboardapi",
        masterKey: "wallboardapi", //Add your master key here. Keep it secret!
        clientKey: "wallboardapi",
        javascriptKey: "wallboardapi",
        serverURL: "https://localhost:5003/api", // Don't forget to change to https if needed
        publicServerURL: "https://localhost:5003/api",
      },
    },
    production: {
      parseConfig: {
        databaseURI:
          "mongodb://wallboarduser:WB1qazxsw2@10.21.47.33:27017/wallboarddb-team3",
        appId: "wallboardapi",
        masterKey: "wallboardapi", //Add your master key here. Keep it secret!
        clientKey: "wallboardapi",
        javascriptKey: "wallboardapi",
        serverURL: "https://lab-parse-server.cpe-rmutl.net/team03/api", // Don't forget to change to https if needed
        publicServerURL: "https://lab-parse-server.cpe-rmutl.net/team03/api",
      },
    },
  }[process.env.NODE_ENV === "production" ? "production" : "development"];