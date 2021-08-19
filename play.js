
const { connect } = require('./client');
const { setupInput } = require('./input');


console.log('Connecting ... ')

// This will run client and input functions inside
setupInput(connect());
