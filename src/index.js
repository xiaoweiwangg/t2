require("./js/contralor.js")
//es6 new methods
//let const
let a = 1;
//let 拥有块儿级别作用域 不能在一个块儿内重复声明
const PI = 3.1415926;
//const 同样有块儿级别作用域 一旦声明便不能被改变
let [q, w, e, r] = [1, 2, 3, 4];
console.log(q);
let { n, m } = { n: "hai", m: "hou" }
console.log(n);
$ = require("jquery/dist/jquery.js")
$.get("./test.json", (dt) => {
  let { name, age, sex } = dt//使用场景
  console.log(name);
})
//结构赋值 两边结构必须一样都是数组或对象 右边表达式必须有源 解构与赋值同时完成 ->使用场景常见在 获取远程json直接赋值
//新函数使用 如果只有一个参数 则省略括号 如果有一个 表达式 省略方括号
show = () => {
  console.log("is show !");
}
let arr = [16, 25, 23, 14, 35];
arr.sort((a, b) => a - b)
console.log(arr);
//参数扩展
let fn = (a1, b1, c1, ...d1) => {
  console.log(d1)
}
fn("n", "i", "hao", "wo", "jiao", "er", "wei")//函数剩余参数会被...d1收集并入d1数组 如果没有返回空数组
//使用场景1
let [arr1, arr2] = [[1, 2, 3], [4, 5, 6]];
let arr3 = [...arr1, ...arr2]//...会把数组拆解打散
console.log(arr3);
//使用场景2
let { obj1, obj2 } = { obj1: { name1: "wang", sex1: "man" }, obj2: { name: "li", sex: "woman" } }
let obj3 = { ...obj1, ...obj2 }//... 拆解对象并打散注意对象属性重名问题
console.log(obj3);
//使用场景3 冒泡算法...............
//array 扩展-map方法 进行数组映射值并返回一个新数组
let arrmap = [56, 45, 34, 56, 76, 43, 23, 34, 56];
let ap = arrmap.map(item => item >= 60 ? "及格" : "不及格")
console.log(ap);
//array 扩展-reduce方法 迭代回调函数参数的上一个返回值
let ad = arrmap.reduce((tpl, item) => tpl + item)
console.log(ad);
//array 扩展-filter方法 过滤true值并返回
let af = arrmap.filter(item => item % 2 == 0)
console.log(af);
//array 扩展-foreach方法 遍历数组 没有返回值 不能赋值给某变量
arrmap.forEach((item, index) => console.log(`item:${index}--- ${item}`))
let arm=[3,5,7,8,9,7,5,8]
let st=new Set(arm);//对数组去重
console.log(st)








