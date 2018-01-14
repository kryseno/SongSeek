$(document).ready(initApp);

function initApp() {
    console.log('app initiated');
    $("#submitButton").click(handleClick);
    $("#songRequestForm").submit(function(e){
        e.preventDefault();
    })
}

function handleClick() {
    console.log('submit button clicked');
    const artistName = $("#inputArtistName").val();
    const songTitle = $("#inputSongTitle").val();
    const usersName = $("#inputYourName").val();
    const usersEmail = $("#inputEmail").val();
    console.log('artistName: '+artistName);
    console.log('songTitle: '+songTitle);
    console.log('usersName: '+usersName);
    console.log('usersEmail: '+usersEmail);
}

// ajax call
// grab input data
// send input data to server
// place input data into db
// last priority: retrieve history of requests