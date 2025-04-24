const form = document.getElementById('form')
const input = document.getElementById('input')

input.addEventListener('keyup', () => {
    const rawValue = input.value.replace(/\D/g, '')

    const formatted = rawValue
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')

    input.value = formatted
})

const calculateLastDigits = (numbers) => {
    let firstResult = 0
    let secondResult = 0

    for (let i = 0; i < 9; i++) {
        firstResult += parseInt(numbers[i]) * (10 - i)
    }

    for (let i = 0; i < 10; i++) {
        secondResult += parseInt(numbers[i]) * (11 - i)
    }

    let firstCheckDigit = (firstResult * 10) % 11
    let secondCheckDigit = (secondResult * 10) % 11

    if (firstCheckDigit === 10) firstCheckDigit = 0
    if (secondCheckDigit === 10) secondCheckDigit = 0

    return firstCheckDigit === parseInt(numbers[9]) && secondCheckDigit === parseInt(numbers[10])
}

const checkRepeats = (numbers) => {
    return !/^(.)\1+$/.test(numbers)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const cpf = input.value.replace(/[^0-9]/g, '')

    const result = document.getElementById('result')

    if (cpf.length === 11) {
        const isValid = calculateLastDigits(cpf) && checkRepeats(cpf)

        result.innerHTML = isValid ? 'CPF válido.' : 'CPF inválido.'
        result.style.color = isValid ? 'green' : 'red'
        result.style.display = 'block'
    } else {
        result.innerHTML = ''
        result.style.display = 'none'
    }
})
