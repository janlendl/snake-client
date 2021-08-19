const { MOVEMENT_KEYS, MESSAGE_HOTKEYS } = require("./constants");

// Stores the active TCP connection object
let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user via stdin
 */
 const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  return stdin;
}

const handleUserInput = (key) => {
  if(key === '\u0003') {
    console.log('Exiting ....');
    process.exit();
  }
  if(MOVEMENT_KEYS[key]) {
    connection.write(MOVEMENT_KEYS[key]);
  }
  if(MESSAGE_HOTKEYS[key]) {
    connection.write(MESSAGE_HOTKEYS[key]);
  }
}

module.exports = { setupInput };