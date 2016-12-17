var fs = require('fs');
var confr = new (require('nginx-conf').NginxParser)();

var txt = fs.readFileSync('./test.conf') + '';
var result = confr.parse(txt, function (err, tree) {
    console.log(err);
    console.log(tree.children[0]);
});
