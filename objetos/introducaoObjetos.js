// OO ~ orientação de objeto
// aula mais conceitual

// conceito procedural ~ vc tem processamento manipulando dados

// conceito de oo ~ vc tem um objeto com valores e funções, e vc invoca essas funções a partir do objeto

// o mundo é formado por objetos, esses objetos possuem atributos e comportamentos e esses objetos se relacionam uns com os outros ~ um objeto pode ter vários objetos, um objeto pode ter uma relação de parentesco (herança)
// exemplo: o objeto principal é o objeto pai, o objeto filho herda certas caracteristicas desse objeto pai
// o foco passou a ser o objeto

// principios: abstração ~ traduzir um objeto do mundo real como um objeto no sistema
// exemplo: carro: um carro tem peso, altura, largura, comprimento, velocidade minima e maxima, velocidade atual, metodo ligar/desligar, metodo ligar som... Mas, por acaso, vc trabalha no DETRAN. Vc realmente precisa de todas as minucias de informações? ~ a ideia é simplificar com informações que sejam pertinentes ao seu contexto

// o mesmo objeto pode ser abstraido, simplificado, de várias formas, para necessidades diferentes

// encapsulamento: ter detalhes daquele objeto 'escondidos' e fazer com que seja exibido numa interface simples
// o que vc PRECISA saber para usar o carro? saber lidar com a direção, marcha, ligar e desligar, enteider que depois de x tempo o carro precisa de combustivel... mas quantos cavalos tem, como é feita a combustão, são exemplos que devem ficar encapsulados, pois não fazem tanta diferenç para o usuário, sendo relevante apenas o que voce deve fazer, e o nivel de abstração de carro pra carro podem ser diferentes. o que voce sempre tem que saber é a interface de comunicação.

// herança (prototype) ~ vc recebe caracteristicas, atributos e comportamentos de um atributo pai ("é um") ~ exemplo: o ser humano é um mamifero, mamifero é um animal... todo mamifero é um animal, mas nem todo animal é mamifero
// foco em priorizar o "tem um" do que o "é um"

// polimorfismo: vc usa o conceito de carro em varios carros, tipo um carro é uma ferrari, mas também é um uno ~ funciona mais com linguagem tipada (typescript é um exemplo)
