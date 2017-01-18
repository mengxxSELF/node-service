// 求平均值  去掉最大最小值 然后求平均值
var a = require('./a');

function pvg(){
    arguments.__proto__= Array.prototype;
    arguments.sort();
    arguments.shift();
    arguments.pop();
    return (a.add.apply(null,arguments)/arguments.length).toFixed(2);
}

module.exports={
    pvg:pvg
};