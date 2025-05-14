import { calculateLastDigits, checkRepeats } from './validate.js'

const input = document.getElementById('input')
const form = document.getElementById('form')

input.addEventListener('keyup', () => {
	const rawValue = input.value.replace(/\D/g, '')

	const formatted = rawValue
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1-$2')
		.replace(/(-\d{2})\d+?$/, '$1')

	input.value = formatted
})

form.addEventListener('submit', e => {
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
