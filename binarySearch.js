// Éste ejercicio no se encuentra dentro del curso de freeCodeCamp,
// pero me parece buena para empezar con recursión ya que es básica y fácil de comprender.
// Para que funcione el algoritmo de busqueda binaria, es necesario que el array esté ordenado.

function binarySearch(arr, l, r, x) {
  //caso base, si no encuentra el número dentro del array
  if (l > r) return -1;

  //calculo el pivote (punto medio) en cada llamado de la función
  const m = Math.floor((l + r) / 2);

  //si encuentra el número, devuelve el índice donde se encuentra
  if (arr[m] === x) return m;

  //Si el valor en el pivote es menor al número buscado, se corre el extremo izquierdo hasta el pivote, reduciendo a la mitad el array
  // De lo contrario  se corre el extremo derecho hasta el pivote, también reduciendo a la mitad el array
  if (arr[m] < x) {
    return binarySearch(arr, m + 1, r, x);
  } else {
    return binarySearch(arr, l, m - 1, x);
  }
}

const arr = [3, 6, 12, 40, 42, 58, 120, 165, 177, 264, 290];
console.log(binarySearch(arr, 0, arr.length - 1, 58));
