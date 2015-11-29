String.prototype.toBase64 = function() {
    return (new Buffer(this.toString()).toString('base64'));
}

String.prototype.fromBase64 = function() {
    return new Buffer(this.toString(), 'base64').toString('utf8');

}
console.log(new Buffer("Hello World").toString('base64'));
console.log("Hello World".toBase64());