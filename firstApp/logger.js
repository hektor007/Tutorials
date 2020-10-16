var x =;
var url = 'http://mylogger.io/log';

function log(message) {
    //Send an HTTP rquest
    
    console.log(message);
}

module.exports = log;
//module.exports.urlName = url; /// urlName is the name used in the export destination.