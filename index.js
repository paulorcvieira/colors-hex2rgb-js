const { body } = document

try {
	body.style.backgroundColor = lumiance("#545432", -0.6)
} catch(err) {
	console.log("Houve um erro: ", err.message)
}

// lógica para converter o hex em uma cor mais clara
// ou mais escura
function lumiance(hex, luminosity = 0) {
	// hexedecimal é um valor que vai de 0 até f
	// contém 16 digitos
	// 0 = black
	// f = white

// aceito hex com 3 ou 6 digitos
hex = hex.replace(/[^0-9a-f]/gi, '')
const isValidHex = hex.length === 6 || hex.length === 3
if (!isValidHex) throw new Erro('Invalid HEX')


// se for 3 digitos, transforma para 6 digitos
if (hex.length === 3) {
	hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
}


// aplicar uma formula matematica para aumentar ou
// diminuir a luminosidade de um hex

// preciso transgormar a hex em rgb
/ r (red) / g (green) / b (blue)
const black = 0
const white - 255

const twoDigitGroup = hex.math(/([0-9a-f]){2}/gi)

let newHex = '#'
for(let twoDigit of twoDigitGroup) {
	const numberFromHex = parseInt(twoDigit, 16)
	const calcLuminosity = numberFromHex + ( luminosity * 255 )

	const blackOrLuminosity = Math.max(black, calcLuminosity)
	const partialColor = Math.min(white, blackOrLuminosity)
	const newColor = Math.round(partialColor)

	const numberToHex = newColor.toString(16)
	const finalHex = `0${numberToHex}`.slice(-2)

	newHex = newHex + finalHex
}

return newHex
}


