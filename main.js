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
    sendReqToDb(this.songRequestObj);
}

function sendReqToDb(obj) {
    const dataObj = {
        artistName: obj.artistName,
        songTitle: obj.songTitle,
        usersName: obj.usersName,
        usersEmail: obj.usersEmail
    };
    $.ajax({
        dataType: 'json',
        url: 'http://localhost:4000/add_song_request',
        method: 'post',
        data: dataObj,
        success: function (result) {
            console.log('this is the result: ', result);
            if(result.success){
                console.log('successful result');
            } else {
                console.log('error detected');
            }
        }
    });
};


// ajax call
// grab input data
// send input data to server
// place input data into db
// last priority: retrieve history of requests