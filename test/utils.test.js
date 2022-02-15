const {pow} = require('../src/utils.js')

test('2 во 2 степени = 4', () => {
    expect(pow(2, 2)).toBe(4);
});

test('2 в 0 степени = 1', () => {
    expect(pow(2, 0)).toBe(1);
});

test('2 в undefined степени = NaN', () => {
    expect(pow(2, undefined)).toBe(NaN);
});

test('undefined в 2 степени = NaN', () => {
    expect(pow(undefined, 2)).toBe(NaN);
});

test('NaN в 2 степени = NaN', () => {
    expect(pow(NaN, 2)).toBe(NaN);
});

test('-2 в 3 степени = 8', () => {
    expect(pow(-2, 3)).toBe(-8);
});

test('-2 в 2 степени = 4', () => {
    expect(pow(-2, 2)).toBe(4);
});

test('-2 в -2 степени = 0.25', () => {
    expect(pow(-2, -2)).toBe(0.25);
});

test('-2 в -3 степени = -0.125', () => {
    expect(pow(-2, -3)).toBe(-0.125);
});