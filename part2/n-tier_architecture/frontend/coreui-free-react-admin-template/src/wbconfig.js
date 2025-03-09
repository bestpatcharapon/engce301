const wbconfig = {
    development: {
        hosturl  : 'https://172.23.211.15:4000/api',
        wsurl    : 'wss://172.23.211.15:4000',
        masterKey     : 'wallboardapi',
        clientKey     : 'wallboardapi',
        javascriptKey : 'wallboardapi',
        appId : "wallboardapi"
    },
    production: {
        hosturl  : 'https://lab-parse-server.cpe-rmutl.net/team03/api',
        wsurl    : 'wss://lab-parse-server.cpe-rmutl.net/team03',
        masterKey     : 'wallboardapi',
        clientKey     : 'wallboardapi',
        javascriptKey : 'wallboardapi',
        appId : "wallboardapi"
    }
};
export default wbconfig;
