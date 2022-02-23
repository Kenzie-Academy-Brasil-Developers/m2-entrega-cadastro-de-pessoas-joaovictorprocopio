class Pessoa {
    constructor(nome, sobrenome, dataDeNascimento, email, contato, telefone, cargo){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._dataDeNascimento = dataDeNascimento;
        this._email = email;
        this._contato = contato;
        this._telefone = telefone;
        this._cargo = cargo;
    };
    get nome(){
        return this._nome;
    };
    set nome(valor){
        this._nome = valor;
    };

    get sobrenome(){
        return this._sobrenome;
    };
    set sobrenome(valor){
        this._sobrenome = valor;
    };

    get dataDeNascimento(){
        return this._dataDeNascimento;
    };
    set dataDeNascimento(valor){
        this._dataDeNascimento = valor;
    };

    get email(){
        return this._email;
    };
    set email(valor){
        this._email = valor;
    };

    get contato(){
        return this._contato;
    };
    set contato(valor){
        this._contato = valor; 
    };

    get telefone(){
        return this._telefone;
    };
    set telefone(valor){
        this._telefone = valor;
    };

    get cargo(){
        return this._cargo;
    };
    set cargo(valor){
        this._cargo = valor;
    };
};

let pessoas = [];

const button = document.getElementById("register-button");

const nome = document.querySelector("#nome");

const sobrenome = document.querySelector("#sobrenome");

const dataDeNascimento = document.querySelector("#dataNascimento");

const labelEmail = document.querySelector("#labelEmail");
const email = document.querySelector("#email");
email.addEventListener('blur', event => {
    const check = pessoas.some(someEmail => someEmail.email === email.value);
    if(check === true){
        labelEmail.innerHTML = "Email<p id = 'invalido'>*Email já cadastrado</p>"
        const p = document.querySelector("#invalido")
        p.style.color = "red"
        p.style.fontSize = "9px"
    }else{
        labelEmail.innerHTML = "Email"
    }
})

const contato = document.querySelector("#contato");

const telefone = document.querySelector("#telefone");

const cargo = document.querySelector("#cargo");

button.addEventListener("click", event =>{
    event.preventDefault();
    cadastrar();
});

const totalPessoas = document.querySelector("#total-alunos");
totalPessoas.innerText = pessoas.length;

const cadastrar = () =>{
    const check = pessoas.some(someEmail => someEmail.email === email.value);
    if(check === false){
        const novaPessoa = new Pessoa(nome.value, sobrenome.value, dataDeNascimento.value, email.value, contato.value, telefone.value, cargo.value);
        pessoas.push(novaPessoa);
        totalPessoas.innerText = pessoas.length;
        console.log(pessoas);
    }else{
        body.appendChild(modelContainer);
    }
}

const body = document.querySelector('body');

const modelContainer = document.createElement("div");
modelContainer.classList.add('model--container');

const model = document.createElement("div");
model.classList.add('model');

const aviso = document.createElement('h3');
aviso.innerText = "Email já cadastrado, por favor, insira um email diferente.";

const btn = document.createElement('button');
btn.innerText = "Ok";

model.appendChild(aviso);
model.appendChild(btn);
modelContainer.appendChild(model);

btn.addEventListener('click', event => {
    body.removeChild(modelContainer);
});

const cargoOption = document.querySelector("#cargoOption");

const buttonPesquisar = document.querySelector("#btn");

const listaDePessoas = document.querySelector("#lista-de-alunos");

buttonPesquisar.addEventListener('click', event => {
    limparPesquisa();
    pessoas.forEach(pessoa => {
        if(cargoOption.value === "Todos"){
            const li = document.createElement('li');
            const pessoaNome = document.createElement('spam');
            pessoaNome.innerText = pessoa.nome + " " + pessoa.sobrenome;
            const pessoaEmail = document.createElement('spam');
            pessoaEmail.innerText = pessoa.email;
            const pessoaCargo = document.createElement('spam');
            pessoaCargo.innerText = pessoa.cargo;
            li.appendChild(pessoaNome);
            li.appendChild(pessoaEmail);
            li.appendChild(pessoaCargo);
            listaDePessoas.appendChild(li);
        }
        else if(pessoa.cargo === cargoOption.value){
            const li = document.createElement('li');
            const pessoaNome = document.createElement('spam');
            pessoaNome.innerText = pessoa.nome + " " + pessoa.sobrenome;
            const pessoaEmail = document.createElement('spam');
            pessoaEmail.innerText = pessoa.email;
            const pessoaCargo = document.createElement('spam');
            pessoaCargo.innerText = pessoa.cargo;
            li.appendChild(pessoaNome);
            li.appendChild(pessoaEmail);
            li.appendChild(pessoaCargo);
            listaDePessoas.appendChild(li);
        }
    })
})

const limparPesquisa = () => {
    while(listaDePessoas.lastElementChild){
        listaDePessoas.removeChild(listaDePessoas.lastElementChild);
    };
};

