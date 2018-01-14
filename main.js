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

}

// ajax call
// grab input data
// send input data to server
// place input data into db
// last priority: retrieve history of requests