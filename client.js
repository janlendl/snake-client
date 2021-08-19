const net = require('net');


// Establish connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // Interpret incoming data as text
  conn.setEncoding('utf8');
  const name = 'JLP'; // Initials will be sent to the server

  // Upon successful connection console message the client.
  conn.on('connect', () => {
    console.log('Successfully connected to the game server.');
    
    // Send initials to the server
    conn.write(`Name: ${name}`);
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
}

module.exports = { connect };