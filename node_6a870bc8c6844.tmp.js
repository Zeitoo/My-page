let primos = []

for (let c = 1; c < 100 ; c++) {
    let divisores = []
    for (let d = 1 ; c < 100 ; d ++) {
        if (String(c / d).includes(".") ) {
            divisores.push(d)
        }
        console.log(divisores)

    }  
    if (divisores.length > 2) {
        break
    }  
}