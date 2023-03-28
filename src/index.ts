// string, boolean, number, etc.
let x: number = 10;
x = 12
console.log(x);

// inferencia x annotation

// Desse modo, o typescript irá automaticamente tipar a variável "y" como um número
// Essa tipagem será feita por inferência
let y = 12;

// O typescript não irá compilar para JavaScript caso você
// tente mudar a variável para string, por exemplo:
// y = "teste"

// Nesse caso, estamos tipando a variável "z" como um número,
// mas vamos reforçar essa informação através do annotation
let z: number = 12;

// Tipos básicos
let firstName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;

// "String" é diferente de "string"
console.log(typeof firstName);
firstName = "João";
console.log(firstName);

// Objeto
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
//console.log(myNumbers.toUpperCase());
console.log(firstName.toUpperCase());
myNumbers.push(5);

console.log(myNumbers);

// Tuplas
// No exemplo a seguir, estamos definindo o tipo de cada item
// dentro do array;
// O 1º elemento será um "number", o 2º será uma "string" e o 3º será um "array de strings"
let myTuple: [number, string, string[]];

// Exemplo que não será compilado pelo TS
// myTuple = [true, false, true]

// object literals -> {pro: value}
const user: {name: string, age: number} = {
    name: "Pedro",
    age: 18,
};

console.log(user);
console.log(user.name);

// any -> Qualquer tipo de dado
let a:any = 0;

// Ambas as variáveis serão compiladas
// contudo, isso foge um pouco da filosofia do TypeScript.
// Apenas utilize o "any" quando o tipo da variável realmente
// não afetar a proposta desejada.
a = "teste";
a = true;
a = [];

// Union type
// Uma solução para o any, onde é possível fazer a tipagem
// de múltiplos tipos de forma mais adequada
let id: string | number = "10";
id = 200;

// type alias
// Caso a mesma tipagem anterior se repita (string | number),
// é possível criar um "alias" para repetir esse padrão
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

// enum
// Será utilizado para enumerar uma coleção, onde você
// poderá utilizar dados complexos de forma mais simples.
// Exemplo:
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
}

const camisa = { 
    name: "Camise gola V",
    size: Size.G,
}

console.log(camisa);

// Literal types
// Na tipagem, você pode especificar que a variável terá somente um valor específico,
let teste: "autenticado" | null;
teste = "autenticado"
teste = null;
// teste = "outrovalor" -> será questionado pelo TypeScript

//funções
function sum(a: number, b: number){
    return a + b;
}
console.log(sum(12, 12));
// console.log(sum("12", true))

function sayHelloTo(name: string): string{
    return `Hello ${name}`
}
console.log(sayHelloTo("Matheus"));

function logger(msg: string): void{
    console.log(msg);
}

logger("Teste");

function greeting(name: string, greet?:string){
    if(greet){
        console.log(`Olá ${greet} ¨${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}

greeting("José");
greeting("Pedro", "Sir");

//interfaces
interface MathFunctionParams{
    n1: number,
    n2: number,
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1
}

