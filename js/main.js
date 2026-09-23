import { calculateLastDigits, checkRepeats } from './cpf.js'

const form = document.getElementById('form')
const input = document.getElementById('input')
const result = document.getElementById('result')

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

	if (cpf.length === 11) {
		const isValid = calculateLastDigits(cpf) && checkRepeats(cpf)

		result.textContent = isValid ? 'CPF válido' : 'CPF inválido'
		result.classList.add(isValid ? 'success' : 'error')
		result.hidden = false
	} else {
		result.textContent = ''
		result.classList.remove('success', 'error')
		result.hidden = true
	}
})
