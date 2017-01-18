// 任意数求和

function add(){
    arguments.__proto__ = Array.prototype;
    // 这样 arguments 就能使用数组中方法了
    var total =null;
    arguments.forEach(function (item) {
        if(!isNaN(Number(item))){
            // 先判断是不是 有效数字
            total+=item;
        }
    });
    return total;
}

// 将方法暴露出去
module.exports={
    add:add
}