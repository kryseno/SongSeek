$(document).ready(initApp);

function initApp() {
    console.log('app initiated');
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
    const inputArtistName = $("#inputArtistName").val();
    const inputSongTitle = $("#inputSongTitle").val();
    const inputUsersName = $("#inputUsersName").val();
    const inputUsersEmail = $("#inputUsersEmail").val();
    console.log('artistName: '+inputArtistName);
    console.log('songTitle: '+inputSongTitle);
    console.log('usersName: '+inputUsersName);
    console.log('usersEmail: '+inputUsersEmail);
}


// ajax call
// grab input data
// send input data to server
// place input data into db
// last priority: retrieve history of requests