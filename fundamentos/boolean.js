let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo); // negação = falso = ! negação da negação (o que torna verdadeiro) = !!

// !!true = true, !!false=false
// !true = false, !false=true

console.log("VERDADEIROS");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); //valor da atribuição

console.log("FALSOS");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

let nome = "Marianna";
console.log(nome || "Desconhecido");

// no caso de uma string vazia, ele o console procura outro valor, ou printa o nome ou printa "desconhecido"
let nome2 = "";
console.log(nome2 || "Desconhecido");
