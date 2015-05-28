var mongoose = require('mongoose');

var connectionString = "mongodb://localhost/tasker";

mongoose.connect(connectionString);

mongoose.connection.on('connnected', function(){
  console.log('[MongoDB]: Connected');
});

mongoose.connection.on('disconnnected', function(){
  console.log('[MongoDB]: Disconnected');
});

mongoose.connection.on('error', function(){
  console.log('[MongoDB]:Error, bae! See below:');
  console.log(error);
});
