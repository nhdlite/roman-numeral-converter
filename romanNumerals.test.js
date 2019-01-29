const test = require('tape');
const romanNumerals = require('./romanNumerals');

test('0 yields nulla', (t) => {
    const result = romanNumerals.convertToRomanNumeral(0);
    t.equals(result, 'nulla');
    t.end();
});

test('1 yields I', (t) => {
    const result = romanNumerals.convertToRomanNumeral(1);
    t.equals(result, 'I');
    t.end();
});

test('3 yields III', (t) => {
    const result = romanNumerals.convertToRomanNumeral(3);
    t.equals(result, 'III');
    t.end();
});

test('4 yields IV', (t) => {
    const result = romanNumerals.convertToRomanNumeral(4);
    t.equals(result, 'IV');
    t.end();
});

test('7 yields VII', (t) => {
    const result = romanNumerals.convertToRomanNumeral(7);
    t.equals(result, 'VII');
    t.end();
});

test('9 yields IX', (t) => {
    const result = romanNumerals.convertToRomanNumeral(9);
    t.equals(result, 'IX');
    t.end();
});

test('10 yields X', (t) => {
    const result = romanNumerals.convertToRomanNumeral(10);
    t.equals(result, 'X');
    t.end();
});

test('13 yields XIII', (t) => {
    const result = romanNumerals.convertToRomanNumeral(13);
    t.equals(result, 'XIII');
    t.end();
});

test('14 yields XIV', (t) => {
    const result = romanNumerals.convertToRomanNumeral(14);
    t.equals(result, 'XIV');
    t.end();
});

test('19 yields XIX', (t) => {
    const result = romanNumerals.convertToRomanNumeral(19);
    t.equals(result, 'XIX');
    t.end();
});

test('33 yields XXXIII', (t) => {
    const result = romanNumerals.convertToRomanNumeral(33);
    t.equals(result, 'XXXIII');
    t.end();
});

test('40 yields XL', (t) => {
    const result = romanNumerals.convertToRomanNumeral(40);
    t.equals(result, 'XL');
    t.end();
});

test('49 yields XL', (t) => {
    const result = romanNumerals.convertToRomanNumeral(49);
    t.equals(result, 'XLIX');
    t.end();
});

test('50 yields L', (t) => {
    const result = romanNumerals.convertToRomanNumeral(50);
    t.equals(result, 'L');
    t.end();
});

test('99 yields XCIX', (t) => {
    const result = romanNumerals.convertToRomanNumeral(99);
    t.equals(result, 'XCIX');
    t.end();
});

test('246 yields CCXLVI', (t) => {
    const result = romanNumerals.convertToRomanNumeral(246);
    t.equals(result, 'CCXLVI');
    t.end();
}); 


test('3999 yields MMMCMXCIX', (t) => {
    const result = romanNumerals.convertToRomanNumeral(3999);
    t.equals(result, 'MMMCMXCIX');
    t.end();
});

test('4000 yields error', (t) => {
    const result = romanNumerals.convertToRomanNumeral(4000);
    t.equals(result, 'This converter only supports Roman numerals up to 3999');
    t.end();
});

