// Declare some variables:
var note1 = document.querySelector('#note1');
var addBtn = document.querySelector('#addBtn');

// fcn to accept input for a note:
addBtn.addEventListener('click', function() {

    // Read entry from textarea element:
    var txt = note1.value;

    // Store in memory
    var nextNote = 1;
    nextNote++;
    var currentNote = `note${nextNote}`;
    localStorage.setItem(currentNote, txt);

    // Test storage function:
    console.log(localStorage.getItem(currentNote));

    // Display note on screen 

});

// fcn to delete a note

// fcn to show full contents of a note in a popup window on hover