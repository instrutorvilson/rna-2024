export function soma(n1:number, n2:number): number{
    return n1 + n2
}

export function multiplicacao(n1:number, n2:number): number{
    return n1 * n2 
}

export function divide(n1:number, n2:number): number{
    if(n2 == 0){
        throw new Error("Não é possivel dividir por zero")
    }
    return n1 / n2
}

