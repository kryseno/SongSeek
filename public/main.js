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
        url: '/add_song_request',
        method: 'post',
        data: dataObj,
        success: function (result) {
            console.log('this is the result: ', result);
            if(result.success){
                console.log('successful result');
            } else {
                console.log('error detected');
            }
        },
        error: function (result) {
            if (result.success === false) {
                console.log('error detected', result);
            }
        }
    });
};

function changeSubmitStatus() {
    console.log('this is where submit status will change');
    const submitMessage = $("#statusMessage").html('Your request has been submitted!');
    $(".submitStatus").append(submitMessage);
    console.log('status message changed, input values cleared');
    $("#inputArtistName").val('');
    $("#inputSongTitle").val('');
    $("#inputUsersName").val('');
    $("#inputUsersEmail").val('');
}