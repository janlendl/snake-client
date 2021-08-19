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
    case '\u0003': // ctrl+c unicode
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
    case '1':
      connection.write('Say: Hi!');
      break;
    case '2':
      connection.write('Say: Game on!');
      break;
    case '3':
      connection.write('Say: GLHF!');
      break;
    case '4':
      connection.write('Say: GG!');
      break;
    case '5':
      connection.write('Say: GGWP!');
      break;
  }
}

module.exports = { setupInput };