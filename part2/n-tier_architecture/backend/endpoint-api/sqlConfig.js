var dbconfig = {
    development: {
        server: '192.168.169.128',
        database:'team3_engce301_db',
        user:'team3',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.169.128'  // SQL Server instance name
        }
    },
    production: {
        server: '10.21.47.33', //CE Lab Server
        database:'team0_engce301_db',
        user:'team3',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '10.21.47.33'  // SQL Server instance name
        }
    },

};

module.exports = dbconfig;
