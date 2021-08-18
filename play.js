
const { connect } = require('./client');
console.log('Connecting ... ');
connect();

/**
 * Setup User Interface
 * Specifically, so that we can handle user via stdin
 */
const setupInput = function() {
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
  if (key === '\u0003') process.exit(); // this will make sure we terminate the terminal with CTRL+C
}

