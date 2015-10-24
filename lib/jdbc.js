var JDBC = require('jdbc');
var jinst = require('jdbc/lib/jinst');

if (!jinst.isJvmCreated()) {
  jinst.addOption("-Xrs");
  jinst.setupClasspath(['./TeraJDBC/tdgssconfig.jar', './TeraJDBC/terajdbc4.jar']);
}

var config = {
  // Required
  url: 'jdbc:teradata://153.64.73.17/TMODE=ANSI,CHARSET=UTF8',

  // Optional
  drivername: 'com.teradata.jdbc.TeraDriver',
  minpoolsize: 10,
  maxpoolsize: 100,

  properties: {
    user: 'hack_user13',
    password: 'tdhackathon'
  }
};

var hsqldb = new JDBC(config);

var hsqldbInit = false;

if (!hsqldbInit) {
  hsqldb.initialize(function(err) {
    if (err) {
      console.log(err);
    } else {
      hsqldbInit = true;
    }
  });
}


// Connection
// var asyncjs = require('async');


hsqldb.reserve(function(err, connObj) {
  // The connection returned from the pool is an object with two fields
  // {uuid: <uuid>, conn: <Connection>}
  if (connObj) {
    console.log("Using connection: " + connObj.uuid);
    // Grab the Connection for use.
    var conn = connObj.conn;


conn.createStatement(function(err, statement) {
  if (err) {
    console.log(err);
  } else {
    statement.executeQuery("SELECT * FROM homeland_security.refugee_arrivals_by_country;", function(err, resultset) {
      if (err) {
        console.log(err)
      } else {
        // Convert the result set to an object array.
        resultset.toObjArray(function(err, results) {
          console.log(results.length);
          if (results.length > 0) {
            console.log("ID: " + results[0].Total);
            console.log("here");
          }
          // console.log(null, resultset);
        });
      }
    });
  }
});
    
  }
});
