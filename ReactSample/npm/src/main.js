// たし算モジュールを読み込み
var add = require('./add');

var txt = document.createTextNode(add(114, 514));
document.body.appendChild(txt);