let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaCliente(cliente) {
    if(typeof cliente === 'string'){
        clientesTrybeBank.push(cliente);
        return 'Cliente adicionada(o) com sucesso!';
    } else {
        return 'O parâmetro passado deve ser do tipo "string"' 
    }
}

console.log(adicionaCliente(true)); // O parâmetro passado deve ser do tipo "string"
console.log(adicionaCliente('Joaquim')); // Cliente adicionada(o) com sucesso
console.log(clientesTrybeBank); // [ 'Ada', 'John', 'Gus', 'Joaquim' ]

function removeCliente(cliente) {
    if (typeof cliente === 'string'){
        clientesTrybeBank.pop(cliente);
        return 'Cliente removido com sucesso!'
    } else {
        return 'O parâmetro passado deve ser do tipo "string"'
    }
}

console.log(removeCliente(true)); // O parâmetro passado deve ser do tipo "string"
console.log(removeCliente('Joaquim')); // Cliente adicionada(o) com sucesso
console.log(clientesTrybeBank); // [ 'Ada', 'John', 'Gus', 'Joaquim' ]