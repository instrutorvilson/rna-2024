const {soma, subtrair, dividir} = require("../calculadora")

test('soma 2 + 2 = 4',()=>{
    expect(soma(2,2)).toBe(4)
})

test('subtrair 2 - 2 = 0',()=>{
    expect(subtrair(2,2)).toBe(0)
})

test('dividir 2 / 2 = 1',()=>{
    expect(dividir(2,2)).toBe(1)
})


test('dividir 2 / 0 = 1',()=>{
    expect(() => dividir(2,0)).toThrow('Não é possivel dividir por zero')
})