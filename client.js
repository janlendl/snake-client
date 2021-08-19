const net = require('net');
const { IP, PORT, NAME } = require('./constants');

// Establish connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, 
    port: PORT
  });

  // Interpret incoming data as text
  conn.setEncoding('utf8');

  // Upon successful connection console message the client.
  conn.on('connect', () => {
    console.log('Successfully connected to the game server.');
    
    // Send initials to the server
    conn.write(`Name: ${NAME}`);
  });

  // This will output whatever data is being passed
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
}

module.exports = { connect };