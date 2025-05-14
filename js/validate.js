export const calculateLastDigits = numbers => {
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

export const checkRepeats = numbers => {
	return !/^(.)\1+$/.test(numbers)
}
