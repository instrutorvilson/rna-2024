import { multiplicacao, soma } from "./soma";

test('adds 1 + 2 to equal 3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('Multiplicar 10 + 3 to equal 30', () => {
    expect(multiplicacao(10, 3)).toBe(30);
  });