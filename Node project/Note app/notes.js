// console.log('Starting notes.js');

const fs = require('fs');  //core module of npm

var fetchNotes = () => {      // NOTE: for reading the note
  try {
  var noteString = fs.readFileSync('notes-data.json');  //return the file in string
  return JSON.parse(noteString);              //convert the string file into object
  }catch(e){
    return [];
  }
};

var saveNotes = (notes) => {      // NOTE: for saving the note in file
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));      //converting the file into the string
};

var addNote = (title, body) => {  // NOTE: adding note in file
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
  // console.log('Adding note',title,body);
};

var getAll = () => {        // NOTE: Getting all the notes
  // console.log('Getting all notes');
  return fetchNotes();

};

var getNote = (title) => {      // NOTE: getting a single note
  // console.log('Reading a note ',title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {     // NOTE: removing note
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !==filteredNotes.length;
// console.log('Removing a note');
};

var logNote = (note) => {     // NOTE: printing details in note
  debugger;
  console.log("---");
  console.log(`Title: ${note.title} `);
  console.log(`Body: ${note.body}`);
}


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
