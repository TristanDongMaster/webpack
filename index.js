
/*var a = require('./bear.js');
document.body.appendChild(a[0]);*/
require(['./bear.js'], function(bear,$) {
	document.body.appendChild(bear[0]);
});