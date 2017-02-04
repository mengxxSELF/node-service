var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 8099;

http.createServer(function (req,res) {
//    处理URL
    var urlObi = url.parse(req.url,true),
        pathN = urlObi.pathname,
        query=urlObi.query;

    // 使用正则匹配后缀
    var reg = /\.([a-zA-Z0-9]+)/i; // 注意这里的加号
    var cont =status=null;
    var mime = 'text/plain';
    if(reg.exec(pathN)){
        try{
            cont= fs.readFileSync('.'+pathN);
            status=200;
        }catch (e){
            cont = 'not found';
            status=404;
        }

        var end = RegExp.$1;
        switch (end.toUpperCase()) {
            case 'HTML':
                mime='text/html';
                break;
            case 'CSS':
                mime='text/css';
                break;
            case 'JAVASCRIPT':
                mime='text/javascript';
                break;
        }

        res.writeHead(status,{'content-type':mime+';charset=utf-8;'});
        res.end(cont);
    };





}).listen(port, function () {
    console.log('the port is',port)
});

