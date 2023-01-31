

(function () {

    var names = ["twisha", "khushi", "Janvi", "jay", "harsiddh", "madhvi", "kashyap", "krishna", "radha", "bheem"];


    for (var name in names) {

        var firstLetter = names[name].charAt(0).toLowerCase();

     
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[name]);
        } else {
            helloSpeaker.speak(names[name]);
        }
    }
})();
