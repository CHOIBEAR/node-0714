const a = (v1, v2) => {
    if(v1 < 10) {
        return v2
    } else {
        return v1
    }
}
console.log(a, typeof(a))
console.log(a(10, 4))