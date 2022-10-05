//var readlineSync = require('readline-sync'),
import readlineSync from 'readline-sync';

let MAX = 60; let MIN = 0; let value = 30; let key = 0;
console.log('\n\n' + (new Array(20)).join(' ') +
    '[Z] <- -> [X]  FIX: [SPACE]\n');
while (true) {
    console.log('\x1B[1A\x1B[K|' +
        (new Array(value + 1)).join('-') + 'O' +
        (new Array(MAX - value + 1)).join('-') + '| ' + value);
    key = readlineSync.keyIn('',
        { hideEchoBack: true, mask: '', limit: 'zx ' });
    if (key === 'z') { if (value > MIN) { value--; } }
    else if (key === 'x') { if (value < MAX) { value++; } }
    else { break; }
}
console.log('\nA value the user requested: ' + value);