// NPM
const program = require('commander');

// within module
const overencrypt = require('./overencrypt');

/*
  OverEncrypt looks at your Apache or Nginx config files and makes recommendations for your
  LetsEncrypt TLS security.
  
  This cli.js file allows you to run OverEncrypt on the command line.
  It requires you to have NodeJS installed, and to have run `npm install`.
*/


// Commander on NPM allows us to define a command line tool's options like this:
program
  .version('1.1.1')
  .option('-a, --apache', 'Apache conf path')
  .option('-n, --nginx', 'Nginx conf path')
  .parse(process.argv);

// runs the OverEncrypt library and handles the response
function printResponse(err, response) {
  if (err) {
    // some kind of error has occurred :(
    console.error(err);
  } else {
    // print results out to the command line
    console.log(JSON.stringify(response));
  }
}

// Apache, Nginx, or unknown request
if (program.apache) {
  overencrypt('apache', program.apache, printResponse);
} else if (program.nginx) {
  overencrypt('nginx', program.nginx, printResponse);
} else {
  console.error('Must provide an Apache or Nginx config file');
}