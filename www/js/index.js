
my_media = null;
function playAudio(src) {
    // Create Media object from src
    my_media = new Media(src, onSuccess, onError);
    // Play audio
    my_media.play();
}
// onSuccess Callback
function onSuccess() {
    console.log("playAudio():Audio Success");
}
// onError Callback
function onError(error) {
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}