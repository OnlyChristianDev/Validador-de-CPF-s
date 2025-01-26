class Cpf{
    constructor(cpf){
        this.cpf = cpf;
    }

    verificarNumero1(){ 
        const cpf = this.cpf.replace(/[.\-]/g, "").slice(0, -2)
        const cpfArray = cpf.split('').map(Number)
        let multiplicador = 10
        const cpfArrayMultiplicado = cpfArray.map((item) => {
            const result = item * multiplicador
            multiplicador--
            return result
        })
        return cpfArrayMultiplicado
    }

    verificarNumero2(){ 
        const cpf = this.cpf.replace(/[.\-]/g, "").slice(0, -1)
        const cpfArray = cpf.split('').map(Number)
        let multiplicador = 11
        const cpfArrayMultiplicado = cpfArray.map((item) => {
            const result = item * multiplicador
            multiplicador--
            return result
        })
        return cpfArrayMultiplicado
    }


    somaPrimeroDigito(){
        const soma = this.verificarNumero1().reduce((acc, item) => acc + item)
        const soma2 = soma % 11
        const soma3 = 11 - soma2
        if (soma3 > 9){
            return 0
        }
        return soma3
    }

    somaSegundoDigito(){
        const soma = this.verificarNumero2().reduce((acc, item) => acc + item)
        const soma2 = soma % 11
        const soma3 = 11 - soma2
        if (soma3 > 9){
            return 0
        }
        return soma3
    }

    validaCpf(){
        const cpf = this.cpf.slice(0, -2)
        this.somaPrimeroDigito()
        this.somaSegundoDigito()
        const cpf2 = cpf + this.somaPrimeroDigito() + this.somaSegundoDigito()
        if (this.cpf === cpf2){
            return true
        }
        return false
    }
}

const cpf = new Cpf("083.247.394-40")

console.log(cpf.validaCpf())
