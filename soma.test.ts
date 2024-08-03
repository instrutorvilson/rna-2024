import { divide, multiplicacao, soma } from "./soma";

test('adds 1 + 2 to equal 3', () => {
    expect(soma(1, 2)).toBe(3);
});

test('Multiplicar 10 + 3 to equal 30', () => {
    expect(multiplicacao(10, 3)).toBe(30);
});

test('Dividir 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('Dividir 10 / 0 should throw Error', () => {
    expect(() => divide(10, 0)).toThrow('Não é possivel dividir por zero');
});

