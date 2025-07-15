for (var a = 1; a < 10; a++) {
    if (a%2 === 1) continue
    for (var b = 1; b < 10; b++) {
        console.log(`${a} * ${b} = ${a * b}`)
    }
}