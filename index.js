class Classificacao {
    constructor(){
        this.pessoa = []
    }

    addPessoa(item){
        this.pessoa.push({ nome: item.nome, sexo: item.sexo, idade: item.idade })
        this.mostrar()
    }

    mostrar() {
        var f = 0;
        var m = 0;
        var a = 0;
        var ad = 0;
        var cr = 0;
        var i = 0;
        for(let c = 0; c < this.pessoa.length; c++){
            
            if(this.pessoa[c].sexo == "F"){
                f++;
            } else {
                m++
            }

            if(this.pessoa[c].idade >= 60){
                i++
            } else if(this.pessoa[c].idade > 18){
                a++;
            } else if(this.pessoa[c].idade >= 14){
                ad++;
            } else if(this.pessoa[c].idade < 14) {
                cr++;
            }
        }

        let a1 = document.querySelector("#fem");
        let a2 = document.querySelector("#masc");
        let a3 = document.querySelector("#adu");
        let a4 = document.querySelector("#cr");
        let a5 = document.querySelector("#ad");
        let a6 = document.querySelector("#i");

        a1.textContent = f;
        a2.textContent = m;
        a3.textContent = a;
        a4.textContent = cr;
        a5.textContent = ad;
        a6.textContent = i;
    }
}

class Pessoa {
    constructor(nome, sexo, idade){
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
    }
}

var c = new Classificacao();

function adicionar() {

    let nome = document.querySelector("#nome").value
    let sexo = document.querySelector("input[type=radio]:checked").value
    let idade = parseInt(document.querySelector("#idade").value)

    let p = new Pessoa(nome, sexo, idade)

    c.addPessoa(p)

}