// Classe que representa um herói
class Heroi {
    // Construtor para inicializar as propriedades do herói
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar que exibe a mensagem de ataque com base no tipo do herói
    atacar() {
        let ataque;

        // Estrutura de decisão para determinar o tipo de ataque
        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        } else {
            ataque = "usou um ataque desconhecido"; // Caso o tipo não seja reconhecido
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
heroi1.atacar(); 

const heroi2 = new Heroi("Gandalf", 150, "mago");
heroi2.atacar(); 

const heroi3 = new Heroi("Akuma", 40, "monge");
heroi3.atacar(); 

const heroi4 = new Heroi("Naruto", 20, "ninja");
heroi4.atacar(); 