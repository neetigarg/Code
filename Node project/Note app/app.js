// console.log('Starting app.js');

const fs = require('fs');
const _=require('lodash');          // NOTE: including module for arrays and method simplification
const yargs = require('yargs');     // NOTE: including the module for parsing

var titleOptions = {
    describe : 'Title of Note',
    demand : true,
    alias : 't'
  };

var bodyOptions = {
  describe : 'Body',
  demand : true,
  alias : 'b'
};

const notes = require('./notes.js');  // NOTE: including notes.js
const argv = yargs.command('add','Adding a Note',
  {title :titleOptions,
    body :bodyOptions
})
.command('list', 'List of all Notes')
.command('read','Reading a note',{title : titleOptions})
.command('remove','Removing a note',{title : titleOptions})
.help().argv;
var command = process.argv[2];//argv._[0]
console.log('Command: ',command);
// console.log('Process',process.argv);

// console.log('yargs',argv);

if(command == 'add'){
  // console.log('adding new notes');
  var note=notes.addNote(argv.title,argv.body);

  if(note){
    console.log("Note exists");
    notes.logNote(note);
  }else{
    console.log("Node title taken");
  }

}else if (command == 'list') {
  // console.log('Listing all notes');
  var allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));

}else if (command == 'read') {
  // console.log('Reading');
  var note = notes.getNote(argv.title);
  if(note){
    console.log("Note found");
    notes.logNote(note);
  }else{
    console.log("Note not found");
  }

}else if (command == 'remove') {
  // console.log('Removing');
  var removeNotes = notes.removeNote(argv.title);
  var message = removeNotes ? 'Node was removed': 'Note not found';
  console.log(message);
  notes.removeNote(argv.title);

}else {
  console.log('command not recognised');
}
