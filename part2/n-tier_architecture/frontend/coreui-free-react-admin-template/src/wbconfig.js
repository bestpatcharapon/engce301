const wbconfig = {
    development: {
      hosturl: 'https://localhost:5003/api',
      wsurl: 'wss://localhost:5003',
      masterKey: 'wallboardapi',
      clientKey: 'wallboardapi',
      javascriptKey: 'wallboardapi',
      appId: 'wallboardapi',
    },
    production: {
      hosturl: 'https://lab-parse-server.cpe-rmutl.net/team03/api',
      wsurl: 'wss://lab-parse-server.cpe-rmutl.net/team03',
      masterKey: 'wallboardapi',
      clientKey: 'wallboardapi',
      javascriptKey: 'wallboardapi',
      appId: 'wallboardapi',
    },
  }
  export default wbconfig[import.meta.env.PROD ? 'production' : 'development']