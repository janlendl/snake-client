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
  // this will make sure we terminate the terminal with CTRL+C
  switch (key) {
    case '\u0003':
      process.exit();
      break;
    case 'w':
      console.log('up');
      break;
    case 'a':
      console.log('left');
      break;
    case 's':
      console.log('down');
      break;
    case 'd':
      console.log('right');
      break;
  }
}

module.exports = { setupInput };