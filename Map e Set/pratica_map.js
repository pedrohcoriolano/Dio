function getAdmins (map) {

    let adm = []

    for([key, value] of map) {

        if(value === 'ADMIN'){

            adm.push(key)

        }

    }

    return `Os seguintes funcionarios são ADM ${adm}`

}

var nomes = new Map()

nomes.set('Luis', 'ADMIN')
nomes.set('Pedro', 'ADMIN')
nomes.set('Leo', 'GERENTE')
nomes.set('Lucas', 'REPRESENTANTE')
nomes.set('Bruno', 'FUNCIONARIO')

console.log(getAdmins(nomes))