const formatCPF = () => {
    cpf = document.getElementById("input").value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1')

    document.getElementById("input").value = cpf
}

const calculateLastDigits = () => {
    firstResult = 0
    secondResult = 0
    
    for (i = 0; i < cpf.length - 2; i++) {
        number = cpf.length - 1 - i
        firstResult += parseInt(cpf[i]) * number
    }
    for (i = 0; i < cpf.length - 1; i++) {
        number = cpf.length - i
        secondResult += parseInt(cpf[i]) * number
    }

    firstCheckDigit = firstResult * 10 % 11
    secondCheckDigit = secondResult * 10 % 11

    if (firstCheckDigit = 10) {
        firstCheckDigit = 0
    }
    if (secondCheckDigit = 10) {
        secondCheckDigit = 0
    }

    return (firstCheckDigit = parseInt(cpf[cpf.length - 2])) && (secondCheckDigit = parseInt(cpf[cpf.length - 1]))
}

const checkRepeats = () => {
    repeats = 0
    
    for (i = 1; i < cpf.length; i++) {
        if (cpf[i] == cpf[i - 1]) {
            repeats++
        }
    }

    return repeats < 10
}

const validateCPF = () => {
    cpf = document.getElementById("input").value.replace(/[^0-9]/g, "")

    if (cpf.length == 11) {
        if (calculateLastDigits() && checkRepeats()) {
            document.getElementById("result").innerHTML = "CPF válido."
            document.getElementById("result").style.color = "green"
        } else {
            document.getElementById("result").innerHTML = "CPF inválido."
            document.getElementById("result").style.color = "red"
        }

        document.getElementById("result").style.display = "block"
    } else {
        document.getElementById("result").innerHTML = ""
        document.getElementById("result").style.display = "none"
    }
}
