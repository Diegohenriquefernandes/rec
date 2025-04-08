//Declaração de variáveis
let nome ="Diego";//variável que pode mudar
const idade =17; //variável constante
var cidade="almirante tamandare"; //método antigo de declarar variável
//operadores matemáticos
let a =10;
let b =5;
let soma = a+b;
let subtracao =a-b;
let multiplicacao = a*b
let divisao = a/b;
let resto = a%b;
let potencia  = a**b;
let incremento = ++a;
let decremento = --b;
//operadores de comparação
let igual =(a==b);
let diferente= (a!=b);
let maior=(a>b);
let menor=(a<b);
let maiorouigual=(a>=b);
let menorouigual =(a<=b);
//operadores lógicos
let eLogico = (a>5 && b<10);
let oulogico = (a>5||b>10);
let naologico=!(a>5);
//operadores de atribuição
let c=10;
c+=5;//c=c+5
c-=3;//c=c-3
c*=2;//c=c*2
c/=4//c=c/4
c%=3;//c=c%3
c**=2;//c=c**2
//operadores de concatenação (uniaõ de textos)
let mensagem="olá,meu nome é"+nome+",tenho"+idade+"anos e mora em"+cidade+".";
//exibir resultados no console
console.log("soma:"+soma);
console.log("subtração:"+subtracao);
console.log("multiplicação:"+multiplicacao);
console.log("divisão:"+divisao);
console.log("resto da divisão:"+resto);
console.log("potência:"+potencia);
console.log("incremento de a:"+incremento);
console.log("decremento de b:"+decremento);
console.log("igualdade:"+igual);
console.log("diferença:"+diferente);
console.log("maior que :"+maior);
console.log("menor que :"+menor);
console.log("maior ou igual:"+maiorouigual);
console.log("menor ou igual:"+menorouigual);
console.log("E lógico:"+eLogico);
console.log("ou lógico:"+oulogico);
console.log("negação lógica:"+naologico);
console.log("valor de c após atribução:"+c);
console.log(mensagem)