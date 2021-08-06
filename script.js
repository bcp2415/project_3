// Declare some variables:
var note1 = document.querySelector('#note1');
var addBtn = document.querySelector('#addBtn');
var collection = document.querySelector('#collection');
var nextNoteNumber = 0;

// fcn to accept input for a note:
addBtn.addEventListener('click', function() {

    // Read entry from textarea element:
    var txt = note1.value;

    // Store in memory
    nextNoteNumber++;
    var currentNote = `note${nextNoteNumber}`;
    localStorage.setItem(currentNote, txt);

    // Test storage function:
    console.log(localStorage.getItem(currentNote));

    // Display note on screen 
    collection.insertAdjacentHTML('beforeend', `<h3>Note ${nextNoteNumber}</h3>`)
});

// fcn to delete a note

// fcn to show full contents of a note in a popup window on hover