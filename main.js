$(document).ready(initApp);

function initApp() {
    console.log('app initiated');
    addClickHandlersToElements();
    $("#songRequestForm").submit(function(e){
        e.preventDefault();
    })
}

function addClickHandlersToElements() {
    $("#submitButton").click(handleSubmitClicked);
}

function handleSubmitClicked() {
    sendSongRequest();
}

function sendSongRequest() {
    console.log('submit button clicked');
    this.artistName = $("#inputArtistName").val();
    this.songTitle = $("#inputSongTitle").val();
    this.usersName = $("#inputUsersName").val();
    this.usersEmail = $("#inputUsersEmail").val();
    this.songRequestObj = {
        artistName: this.artistName,
        songTitle: this.songTitle,
        usersName: this.usersName,
        usersEmail: this.usersEmail
    };
    console.log('grabbing song request info:',this.songRequestObj);
}


// ajax call
// grab input data
// send input data to server
// place input data into db
// last priority: retrieve history of requests