// Declare some variables:
var noteEntryArea = document.querySelector('#noteEntryArea');
var addBtn = document.querySelector('#addBtn');
var collection = document.querySelector('#collection');
var nextNoteNumber = 0;

// fcn to accept input for a note:
addBtn.addEventListener('click', function() {

    // Read entry from textarea element:
    var txt = noteEntryArea.value;

    // Store in memory
    nextNoteNumber++;
    var currentNote = `note${nextNoteNumber}`;
    localStorage.setItem(currentNote, txt);

    // Test storage function:
    console.log(localStorage.getItem(currentNote));

    // Display note on screen 
    collection.insertAdjacentHTML('beforeend', `<div class="storedNote"><h3 id="${currentNote}">Note ${nextNoteNumber}</h3><p>${localStorage.getItem(currentNote)}</p></div>`);
});

// fcn to delete a note

// fcn to show full contents of a note in a popup window on hover