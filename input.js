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
  // switch case will write to server ie. ctrl+c 
  switch (key) {
    case '\u0003':
      process.exit();
      break;
    case 'w':
      connection.write('Move: up');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'd':
      connection.write('Move: right');
      break;
  }
}

module.exports = { setupInput };