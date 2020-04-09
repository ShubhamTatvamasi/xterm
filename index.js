// import { Terminal } from 'xterm';
// import { AttachAddon } from 'xterm-addon-attach';

// const term = new Terminal();
// const socket = new WebSocket('wss://docker.example.com/containers/mycontainerid/attach/ws');
// const attachAddon = new AttachAddon(socket);

// // Attach the socket to term
// term.loadAddon(attachAddon);


import { Terminal } from 'xterm';
import { WebLinksAddon } from 'xterm-addon-web-links';

const terminal = new Terminal();
// Load WebLinksAddon on terminal, this is all that's needed to get web links
// working in the terminal.
terminal.loadAddon(new WebLinksAddon());

