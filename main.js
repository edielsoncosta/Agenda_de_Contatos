const form = document.getElementById('formulario')
let linhas = '';
const nomes = [];
const numero = [];

form.addEventListener('submit', function(e){
    e.preventDefault()

        validacao()

})

function validacao(){
    
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('telefone');

    if((nomes.includes(inputNome.value))){
        alert('esse nome já existe!')
        return
    }else if(numero.includes(inputNumero.value)){
        alert('esse número já existe')
    }else{

        nomes.push(inputNome.value)
        numero.push(inputNumero.value)
    
        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNumero.value}</td>`
        linha += `</tr>`
    
        linhas += linha;
        
        const corpoTabela = document.querySelector('tbody')
        corpoTabela.innerHTML = linhas;
        return
    }
}

