function inserirNome(){
let nomeUsuario = prompt("Qual o seu nome");
 let elemento = document.querySelector("#nome-usuario);
 console.log(elemento);
 elemento.textContent = nomeUsuario;
}

const lista = document.querySelector('#lista')

lista.textContent=linguagens[0];
lista.textContent=linguagens[1];
lista.textContent=linguagens[2];

let aluno1={
    nome:'Gabrieli',
    idade:17,
    anoLetivo:'Cursando o ensino médio',
    materiaFavoritas:['Biologio', 'Educação Física', 'Matemática II']
}
console.log(alunos1.nome);
console.log(aluno1.idade);
console.log(aluno1.materiasFavoritas);
console.log(aluno1.materiasFavoritas[1]);


const ojeto = document.querySelector('#aluno');
objeto.textContent = aluno1.nome;
objeto.textContent = aluno1.idade;
objeto.textContent = aluno1.materiasFavoritas[1];


