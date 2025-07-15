const obj = {
    e1 : () => 8,
    e2 : (fn) => fn(),
    e3 : () => 6,
    e4 : () => 5,
    e5 : () => 4,
    e6 : () => 3,
    e7 : () => 2,
    e8 : () => 1,
}

console.log(obj.e7())