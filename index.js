const genId1 = require('nxhl_xid');
const genId2 = require('vmlv_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|M3p0tFXiud|' + genId2()).digest('base64');
}


module.exports = generateKey;
