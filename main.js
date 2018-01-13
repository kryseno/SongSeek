$(document).ready(initApp);

function initApp() {
    console.log('app initiated');
    $("#submitButton").click(handleClick);
}

function handleClick() {
    console.log('submit button clicked');
}