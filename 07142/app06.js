var a = {};
a['k1'] =1;
//console.log(a)
//console.log(a['k1'])
a['k1'] =2;
//console.log(a['k1'])

var b = new Object();
b['b1'] = 10;
console.log(b);
//console.log(b['b1'])

var i = 1;
var c = {};
for (; i<10; i++){
    c[`key${i}`] =i*100;

}
console.log(c);