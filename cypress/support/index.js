const commands = require("./commands");

Object.keys(commands).forEach((command) => {
  Cypress.Commands.add(command, commands[command]);
});
