// STEP 6: Wrap the entire contents inside of an IIFE
(function (window) {

    // STEP 7: Create 'byeSpeaker' object
    var byeSpeaker = {};

    // DO NOT attach speakWord variable to the 'byeSpeaker' object
    var speakWord = "Good Bye";

    // STEP 8: Attach 'speak' function to 'byeSpeaker'
    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    // STEP 9: Expose 'byeSpeaker' to the global scope
    window.byeSpeaker = byeSpeaker;

})(window);
