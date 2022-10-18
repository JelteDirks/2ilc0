function coins(A, t, T) {
  for (let i = 1 ; i < A.length; i++) {
    T[key(i,0)] = 0
  }
  for (let x = 1; x <= t ; x++) {
    T[key(0,x)] = Infinity
  }

  strategy(A,A.length,t,T)
}

function strategy(A,i,x,T) {
  for (let k = 1 ; k < i; k++) {
    for (let j = 1 ; j <=x ; j++) {
      if (A[k] > j) {
        T[key(k,j)] = T[key(k-1,j)]
      } else {
        T[key(k,j)] = Math.min(T[key(k, j - A[k])] + 1, T[key(k-1,j)])
      }
    }
  }
}

function key (i,x) {
  return "i=" + i + " x=" + x;
}


let coin_set = [,1,5,20,25]
let target = 5021
let T = {}
coins(coin_set, target, T)
console.log(T);
