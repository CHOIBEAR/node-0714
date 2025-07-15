//for 문 

for (var a = 0; a<10 ;a++) {
    console.log(a);
}

for (var b=0; b<10;b=b+2) {
    console.log(b);
}

for (var c=1; c<2049;c=c*2){
    console.log(c);
}

for (var a=1;a<10;a++){
    if (a % 2 === 1) continue 
    for (var b=1;b<10;b++)
        console.log(`${a}*${b}=${a*b}`);
}
for (var a=1;a<10;a=a+2){
    for (var b=1;b<10;b++)
        console.log(`${a}*${b}=${a*b}`);
}
