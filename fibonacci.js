// https://www.youtube.com/watch?v=oBt53YbR9Kk

//Fibonacci recursivo sin memorización
//crea un arbol binario, ya que cada fib() luego del return devuelve otros 2 fib() hasta llegar al caso base
//el caso base devuelve 1 cuando n es igual o menor a 2
//cada fib() al llegar a 2 o 1, devuelve 1 y se suma al otro nodo, y así subiendo cada rama del arbol binario
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

//Fibonacci recursivo con memorización
const fibm = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibm(n - 1, memo) + fibm(n - 2, memo);
  return memo[n];
};

let res = fibm(10);
console.log(res);
