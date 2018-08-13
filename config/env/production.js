/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  connections: {
    ops: {
      adapter: 'sails-mongo',
      // host: process.env.OPENSHIFT_MONGODB_DB_HOST || '127.10.247.2',
      // port: process.env.OPENSHIFT_MONGODB_DB_PORT || 27017,
      // user: 'my_db_user',
      // password: 'superLong&SecurePassword',
      // database: 'my_prod_db'
        url : 'mongodb://octocat:Thisis1password@ds259711.mlab.com:59711/notasdb',
    }
  },
  models: {
    schema: true,
    connection: 'ops',
    migrate: 'safe'
  },


  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  port: process.env.OPENSHIFT_NODEJS_PORT || 1337,
  host: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

   log: {
     level: "silent"
  }

};
