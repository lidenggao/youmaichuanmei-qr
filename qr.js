var qr = require('qr-image');

var dir = '20200402.2';
var qr_svg = qr.image(`http://ymcm.uiyun.com/${dir}/index.html`, { type: 'png' });
qr_svg.pipe(require('fs').createWriteStream(`./${dir}/qr.png`));