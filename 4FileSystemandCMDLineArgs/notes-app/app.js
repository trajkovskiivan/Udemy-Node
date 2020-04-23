const fs = require('fs')
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');




// const msg = getNotes();
// console.log(msg)
// console.log(chalk.blue('Sucess'));


// console.log(process.argv[2])


// const command = process.argv[2];

// console.log(process.argv)

// if(command === 'add') {
//     console.log(`Adding note!`);
// } else if (command === 'remove') {
//     console.log(`Removing note!`)
// }



// argument parsing
// npm i yargs


// console.log(process.argv)

// Customize yarg version

yargs.version(`1.1.0`)


// add, remove, read, list

// Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})


// Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note')
    }
})

// Create list command

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function() {
        console.log('Listing the note')
    }
})

// Create read command

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading the note')
    }
})

yargs.parse();


// console.log(yargs.argv)

