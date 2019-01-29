function convertInput() {
    const number = parseInt(document.getElementById('numberField').value);
    const result = convertToRomanNumeral(number);
    document.getElementById('resultField').innerHTML = result;
}

function convertToRomanNumeral(number) {
    const romanNumeralConversion = [
        { romC: 'I', romI: 1 },
        { romC: 'V', romI: 5 },
        { romC: 'X', romI: 10 },
        { romC: 'L', romI: 50 },
        { romC: 'C', romI: 100 },
        { romC: 'D', romI: 500 },
        { romC: 'M', romI: 1000 },
    ];

    let tensPlaceIndex = 0;
    let convertedDigits = []; // Entries will be added in reverse. Will need to flip them before returning.

    if (number === 0) {
        return 'nulla';
    }

    if (number < 0) {
        return 'Roman numerals must be positive integers';
    }

    if (number > 3999) {
        return 'This converter only supports Roman numerals up to 3999';
    }

    while(number > 0) {
        const currentDigit = number % 10;
        let convertedValue = '';

        if (currentDigit > 0 && currentDigit < 4) {
            for (let i = 0; i < currentDigit; i++){
                convertedValue = convertedValue + romanNumeralConversion[tensPlaceIndex].romC;
            }
        } else if (currentDigit === 4) {
            convertedValue = romanNumeralConversion[tensPlaceIndex].romC + romanNumeralConversion[tensPlaceIndex + 1].romC;
        } else if (currentDigit > 4 && currentDigit < 9) {
            convertedValue = romanNumeralConversion[tensPlaceIndex + 1].romC;
            for (let i = 0; i < currentDigit - 5; i++){
                convertedValue = convertedValue + romanNumeralConversion[tensPlaceIndex].romC;
            }
        } else if (currentDigit === 9) {
            convertedValue = romanNumeralConversion[tensPlaceIndex].romC + romanNumeralConversion[tensPlaceIndex + 2].romC;
        } else {
            // Do Nothing. The digit is a 0.
        }

        convertedDigits.push(convertedValue);

        number = Math.floor(number / 10);
        tensPlaceIndex = tensPlaceIndex + 2;
    }

    return convertedDigits.reverse().join('');
};

module.exports = {
    convertToRomanNumeral
};
