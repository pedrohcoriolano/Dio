function validar(lista, num) {
    try {
        if(!lista && !num) {
            var erro_vazio =  new ReferenceError('Parametros não informados!')
            throw erro_vazio
        }else if(typeof(lista) != 'object') {
            var erro_objeto = new TypeError('O tipo da lista não é objeto!')
            throw erro_objeto
        } else if(typeof(num) != 'number') {
            var erro_numero = new TypeError('O tipo do num não é number!')
            throw erro_numero
        } else if(lista.length != num) {
            var erro_tamanho = new RangeError('O tamnho informado não coincide com o da lista!')
            throw erro_tamanho
        }
        return lista
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é um referenceError')
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log('Este erro é um typeError')
            console.log(e.message)
        } else if (e instanceof RangeError){
            console.log('Este erro é um rangeError')
            console.log(e.message)
        } else {
            console.log('Ocorreu um erro inesperado' + e)
        }
    }
}

console.log(validar([1,2], 2))