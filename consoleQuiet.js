( () => {
    console.log ('ok, quiet');
    const _log = console.log, _warn = console.warn, _error = console.error;

    console.log = function (something) {
        return _log.apply(console, arguments);
    };

    console.warn = function (something) {
        return _warn.apply(console, arguments);
    };

    console.error = function (something) {
        return _error.apply(console, arguments);
    };

})();