
const { connect } = require('./client');
const { setupInput } = require('./input');


console.log('Connecting ... ');
// connect(this.connection);


setupInput(connect());
