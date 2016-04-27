var crypto = function(text) {
	this.text = text;
};

crypto.prototype.text = function() {
	return this.message.replace(/[\W]/g, "").tolowerCase();
};


Crypto.prototype.size = function() {
	var length = this.normalizePlaintext().legnth;
	return Math.ceil(Math.sqrt(legnth)); 
};

Crypto.prototype.plainTextSegments = function() {
	npt = this.normalizePlaintext(),
		size = this.size(),
		var segments = [];

	for (var i = 0; i < npt.length; i += size) {
		segments.push(npt.slice(i, i + size));
	}

		return segments; 
};

Crypto.prototype.ciphertext = function() {
	var ct = "";
	size = this.size();
	segs = this.plaintextSegments();

for (var i = 0; i < size; i += 1) {
	for (var j = 0; j < segs.length; j += 1) {
		ct += segs[j].charAt(i);
	}
}

	return ct;

};

module.exports = Crypto;

