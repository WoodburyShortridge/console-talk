( () => {

    const awaitVoices = new Promise(done =>
    window.speechSynthesis.onvoiceschanged = done);

    awaitVoices.then(()=> {
        const _log = console.log, _warn = console.warn, _error = console.error;
        const voices = window.speechSynthesis.getVoices();

        console.log = function (something) {
            let msg = new SpeechSynthesisUtterance(something);
            msg.voice = voices[7];
            window.speechSynthesis.speak(msg);
            return _log.apply(console, arguments);
        };

        console.warn = function (something) {
            let msg = new SpeechSynthesisUtterance(something);
            msg.voice = voices[32];
            window.speechSynthesis.speak(msg);
            return _warn.apply(console, arguments);
        };

        console.error = function (something) {
            let msg = new SpeechSynthesisUtterance(something);
            msg.voice = voices[48];
            window.speechSynthesis.speak(msg);
            return _error.apply(console, arguments);
        };
    });

})();