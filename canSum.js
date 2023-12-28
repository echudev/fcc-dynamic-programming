// En este problema aprendo:
// 1- Siempre? puedo usar un arbol binario para resolver
// 2- Aplicar recursión con arbol binario
// 3- Como quedan las funciones apiladas en el callstack al ser llamadsa
// 4- Como se van las funciones del callstack al llegar al return
// 5- Llamar una función dentro de un bucle para ejecutarla n veces

const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  // recorro el array numbers en la primer función canSum()
  for (let num of numbers) {
    //guardo la resta del target menos el número actual del ciclo
    const remainder = targetSum - num;
    //
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
};

const canSumM = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};
console.log(canSumM(5000, [2, 3, 5, 9, 10])); //true
console.log(canSum(5000, [2, 3, 5, 9, 10])); //true
// console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSumM(7, [2, 4])); //false
// console.log(canSum(7, [2, 3, 5])); //true
