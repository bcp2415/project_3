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
        `<div class="storedNote" id="noteDisplay${nextNoteNumber}">
          <p id="${currentNote}">Note ${nextNoteNumber}:</p>
          <p class="noteText">${localStorage.getItem(currentNote)}</p>
          <button class="btn" id="delBtn${nextNoteNumber}">Delete note</button>
        </div>`
    );

    // Add functionality to delete button
    var delBtn = document.querySelector(`#delBtn${nextNoteNumber}`);
    delBtn.addEventListener("click", function() {
        delBtn.parentElement.remove();
        localStorage.removeItem(currentNote);
    });

    // Clear textarea after adding note:
    noteEntryArea.value = "";

    // Put focus back in textarea:
    noteEntryArea.focus();

    // fcn to show full contents of a note in a popup window on hover
    var noteDisplay = document.querySelector(`#noteDisplay${nextNoteNumber}`);
    noteDisplay.addEventListener("mouseover", function() {
        window.alert(localStorage.getItem(currentNote));
    });
});