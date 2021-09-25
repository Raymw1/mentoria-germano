// =============== CÓDIGO ANTIGO =================
// function test() {
//   console.log(a);
//   console.log(foo()); 
  
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }

// =============== EXPLICAÇÃO =================
// A questão da função funcionar, mesmo ser definida após a execução
// é pelo fato de funções declaradas assim ter o hoist, movendo para
// o topo do escopo
// Já variável a, ela também possui o hoist, porém ela só recebe o
// valor quando passa por aquela linha. Poderíamos evitar o
// undefined atribuindo um valor antes

// =============== CÓDIGO NOVE =================
function test() {
  a = 1;
  console.log(a);
  console.log(foo()); 
  
  var a;
  function foo() {
    return 2;
  }
}

test()
