// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

//Function for setting default ENV variables.
function CheckEnvVar(varname, defaultvalue) {
    var result = process.env[varname];
    if(result!=undefined)
        return result;
    else
        return defaultvalue;
}

// Domain Variables
<<<<<<< HEAD
var domain = CheckEnvVar('GHOST_DOMAIN', 'http://localhost:2368');
var sslDomain = CheckEnvVar('GHOST_SSL_DOMAIN', undefined); // Won't advertise its useage, but it's there
var forceAdminSSL = CheckEnvVar('GHOST_FORCE_ADMIN_SSL', false);

// Mail Variables
var mailTransport = CheckEnvVar('GHOST_MAIL_TRANSPORT', '');
var mailService = CheckEnvVar('GHOST_MAIL_SERVICE', '');
var mailHost = CheckEnvVar('GHOST_MAIL_HOST', 'localhost');
var mailName = CheckEnvVar('GHOST_MAIL_NAME', '');
var mailUser = CheckEnvVar('GHOST_MAIL_USER', '');
var mailPass = CheckEnvVar('GHOST_MAIL_PASS', '');
var mailFrom = CheckEnvVar('GHOST_MAIL_FROM', '');
var mailSecureConnection = CheckEnvVar('GHOST_MAIL_SECURE_CONNECTION', false);
var mailPort = CheckEnvVar('GHOST_MAIL_PORT', 25);
var mailIgnoreTLS = CheckEnvVar('GHOST_MAIL_IGNORE_TLS', false);
var mailDebug = CheckEnvVar('GHOST_MAIL_DEBUG', '');

if (mailService != '') {
    mailHost = undefined
    mailPort = undefined
    mailSecureConnection = undefined
}
=======
var devDomain = CheckEnvVar('DEV_DOMAIN', 'http://localhost:2368');
var devSSLDomain = CheckEnvVar('DEV_SSL_DOMAIN', ''); // Won't advertise its useage, but it's there
var devForceAdminSSL= CheckEnvVar('DEV_FORCE_ADMIN_SSL', false);

var prodDomain = CheckEnvVar('PROD_DOMAIN', 'http://example.com');
var prodSSLDomain = CheckEnvVar('PROD_SSL_DOMAIN', ''); // Won't advertise its useage, but it's there
var prodForceAdminSSL= CheckEnvVar('DEV_FORCE_ADMIN_SSL', false);

//Development Mail Variables
var devMailTransport = CheckEnvVar('DEV_MAIL_TRANSPORT', '');
var devMailService = CheckEnvVar('DEV_MAIL_SERVICE', '');
var devMailHost = CheckEnvVar('DEV_MAIL_HOST', 'localhost');
var devMailName = CheckEnvVar('DEV_MAIL_NAME', '');
var devMailUser = CheckEnvVar('DEV_MAIL_USER', '');
var devMailPass = CheckEnvVar('DEV_MAIL_PASS', '');
var devMailFrom = CheckEnvVar('DEV_MAIL_FROM', '');
var devMailSecureConnection = CheckEnvVar('DEV_MAIL_SECURE_CONNECTION', false);
var devMailPort = CheckEnvVar('DEV_MAIL_PORT', 25);
var devMailIgnoreTLS = CheckEnvVar('DEV_MAIL_IGNORE_TLS', false);
var devMailDebug = CheckEnvVar('DEV_MAIL_DEBUG', '');

if (devMailService != '') {
    devMailHost = undefined
    devMailPort = undefined
    devMailSecureConnection = undefined
}

//Production Mail Variables
var prodMailTransport = CheckEnvVar('PROD_MAIL_TRANSPORT', '');
var prodMailService = CheckEnvVar('PROD_MAIL_SERVICE', '');
var prodMailHost = CheckEnvVar('PROD_MAIL_HOST', 'localhost');
var prodMailName = CheckEnvVar('DEV_MAIL_NAME', '');
var prodMailUser = CheckEnvVar('PROD_MAIL_USER', '');
var prodMailPass = CheckEnvVar('PROD_MAIL_PASS', '');
var prodMailFrom = CheckEnvVar('PROD_MAIL_FROM', '');
var prodMailSecureConnection = CheckEnvVar('PROD_MAIL_SECURE_CONNECTION', false);
var prodMailPort = CheckEnvVar('PROD_MAIL_PORT', 25);
var prodMailIgnoreTLS = CheckEnvVar('PROD_MAIL_IGNORE_TLS', false);
var prodMailDebug = CheckEnvVar('PROD_MAIL_DEBUG', '');
>>>>>>> ZZROTDesign/master

if (prodMailService != '') {
    prodMailHost = undefined
    prodMailPort = undefined
    prodMailSecureConnection = undefined
}

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: domain,
        urlSSL: sslDomain,
        forceAdminSSL: forceAdminSSL,
        mail: {
            from: mailFrom,
            transport: mailTransport,
            options: {
                ignoreTLS: mailIgnoreTLS,
                host: mailHost,
                port: mailPort,
                debug: mailDebug,
                secureConnection: mailSecureConnection,
                name: mailName,
                service: mailService,
                auth: {
                    user: mailUser,
                    pass: mailPass
                }
            }
        },
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(process.env.GHOST_CONTENT, '/data/ghost.db')
            },
            debug: false
        },

        server: {
            host: '0.0.0.0',
            port: '2368'
        },
        // #### Paths
        // Specify where your content directory lives
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT, '/')
        }
    },

    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blog's published URL.
        url: domain,
        urlSSL: sslDomain,
        forceAdminSSL: forceAdminSSL,
        mail: {
            from: mailFrom,
            transport: mailTransport,
            options: {
                ignoreTLS: mailIgnoreTLS,
                host: mailHost,
                port: mailPort,
                debug: mailDebug,
                secureConnection: mailSecureConnection,
                name: mailName,
                service: mailService,
                auth: {
                    user: mailUser,
                    pass: mailPass
                }
            }
        },

        // #### Database
        // Ghost supports sqlite3 (default), MySQL & PostgreSQL
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(process.env.GHOST_CONTENT, '/data/ghost-dev.db')
            },
            debug: false
        },
        // #### Server
        // Can be host & port (default), or socket
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        // #### Paths
        // Specify where your content directory lives
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT, '/')
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://0.0.0.0:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(process.env.GHOST_CONTENT, '/data/ghost-test.db')
            },
            pool: {
                afterCreate: function (conn, done) {
                    conn.run('PRAGMA synchronous=OFF;' +
                    'PRAGMA journal_mode=MEMORY;' +
                    'PRAGMA locking_mode=EXCLUSIVE;' +
                    'BEGIN EXCLUSIVE; COMMIT;', done);
                }
            }
        },
        server: {
            host: '0.0.0.0',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://0.0.0.0:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '0.0.0.0',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '0.0.0.0',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://0.0.0.0:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '0.0.0.0',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '0.0.0.0',
            port: '2369'
        },
        logging: false
    }
};

module.exports = config;
