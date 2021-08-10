// Declare some variables:
var noteEntryArea = document.querySelector("#noteEntryArea");
var addBtn = document.querySelector("#addBtn");
var collection = document.querySelector("#collection");
var nextNoteNumber = 0;

// fcn to accept input for a note:
addBtn.addEventListener("click", function() {
    // Read entry from textarea element:
    var txt = noteEntryArea.value;

    // Store in memory
    nextNoteNumber++;
    var currentNote = `note${nextNoteNumber}`;
    localStorage.setItem(currentNote, txt);

    // Display note on screen
    collection.insertAdjacentHTML(
        "beforeend",
        `<div class="storedNote">
          <p id="${currentNote}">Note ${nextNoteNumber}:</p>
          <p>${localStorage.getItem(currentNote)}</p>
          <button class="btn" id="delBtn${nextNoteNumber}">Delete note</button>
        </div>`
    );

    // Add functionality to delete button
    var delBtn = document.querySelector(`#delBtn${nextNoteNumber}`);
    delBtn.addEventListener("click", function() {
        delBtn.parentElement.remove();
    });

    // fcn to show full contents of a note in a popup window on hover
});