// STEP 2: Wrap the entire contents inside of an IIFE
(function (window) {

    // STEP 3: Create 'helloSpeaker' object
    var helloSpeaker = {};

    // DO NOT attach speakWord variable to the 'helloSpeaker' object
    var speakWord = "Hello";

    // STEP 4: Attach 'speak' function to 'helloSpeaker'
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    // STEP 5: Expose 'helloSpeaker' to the global scope
    window.helloSpeaker = helloSpeaker;

})(window);
