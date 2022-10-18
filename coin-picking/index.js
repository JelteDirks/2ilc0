function coins(A, t) {
  let T = {};
  for (let i = 1 ; i <= A.length; i++) {
    T[key(i,0)] = 0
  }
  for (let x = 1; x <= t ; x++) {
    T[key(0,x)] = Infinity
  }
  return T;
}

function key (i,x) {
  return i + "-" + x;
}


let coin_set = [1,5,20,25]
let target = 40
let t = coins(coin_set, target)
console.log(t);
