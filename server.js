//开启服务 监听端口
var http =require('http'),
    url=require('url'),
    fs=require('fs');

http.createServer(function (req,res) {
    var urlObj =  url.parse( req.url ,true),
        pathname= urlObj.pathname;
    // 通过判断后缀名  .html .css .js   设置MIME
    var reg = /\.([a-zA-Z0-9]+)/i;
    var cont = null;
    if(reg.exec(pathname)){
        try{
            cont = fs.readFileSync('.'+pathname);
        }catch (e){

        }
        var mime = RegExp.$1.toUpperCase();
        var head = 'text/plain';
        switch (mime){
            case 'HTML':
                head='text/html';
                break;
            case 'CSS':
                head='text/css';
                break;
            case 'JS':
                head='text/javascript';
                break;
        }
        res.writeHead(200,{
            'content-type':head+';charset=utf-8;'
        });
        res.end(cont);
    }
}).listen('8082', function () {
    console.log('port is 8082')
})



