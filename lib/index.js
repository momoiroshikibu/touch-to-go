var fs = require('fs');
var EventEmitter = require('events').EventEmitter;

var watchFilePath = __dirname + '/' + '.touch2restart.tmp';
var emitter = new EventEmitter();

if (!fs.existsSync(watchFilePath)) {
    fs.writeFileSync(
        watchFilePath,
        '',  // no data
        null // no callback
    );
}

fs.watch(watchFilePath, function(current, previous) {
    emitter.emit('change');
});

module.exports = emitter;
