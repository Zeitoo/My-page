let primos = []

for (let c = 1; c < 5 ; c++) {
    let divisores = []
    for (let d = 1 ; c < 5 ; d ++) {
        if (!String(c / d).includes(".") ) {
            divisores.push(d)
        }
        console.log(c,divisores)

    }  
    if (divisores.length > 2) {
        break
    }  
}