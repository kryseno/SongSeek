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