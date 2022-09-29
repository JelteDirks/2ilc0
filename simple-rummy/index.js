        // 0 1 2 3 4 5 6 7  8 9
const _R = [,2,3,4,5,7,8,9,10,11];
        // 0 1 2 3 4 5
const _B = [,2,4,5,6,7];
        // 0 1 2 3 4 5
const _G = [,2,7,8,9,10];

function valid_run(i, j, C) {
  for (i = i + 1 ; i <= j; i++) {
    if (C[i] !== C[i-1] + 1) {
      return false;
    }
  }
  return true;
}
function simple_rummy(R, B, G) {
  let table = new Array(R.length);
  for (let i = 0 ; i < table.length; ++i) {
    table[i] = new Array(B.length);
    for (let j = 0 ; j < table[i].length; j++) {
      table[i][j] = new Array(G.length);
    }
  }

  table[0][0][0] = true;
  table[0][0][1] = false;
  table[0][1][0] = false;
  table[0][1][1] = false;
  table[1][0][0] = false;
  table[1][0][1] = false;
  table[1][1][0] = false;

  for (let i = 1 ; i < R.length; ++i) {
    for (let j = 1 ; j < B.length; ++j) {
      for (let k = 1 ; k < G.length; ++k) {
        if (R[i] === B[j] && B[j] === G[k]) {
          table[i][j][k] = table[i-1][j-1][k-1];
        }

        let a = Math.max(i-5, 1);
        while (a <= (i - 2) && !table[i][j][k]) {
          table[i][j][k] = table[a-1][j][k] && valid_run(a,i,R);
          console.log("disjunctR" + [a, i, j, k].join("-"));
          a++;
        }

        a = Math.max(j-5, 1);
        while (a <= (j - 2) && !table[i][j][k]) {
          table[i][j][k] = table[i][a - 1][k] && valid_run(a,j,B);
          console.log("disjunctB" + [a, i, j, k].join("-"));
          a++;
        }

        a = Math.max(k-5, 1);
        while (a <= (k - 2) && !table[i][j][k]) {
          table[i][j][k] = table[i][j][a-1] && valid_run(a,k,G);
          console.log("disjunctG" + [a, i, j, k].join("-"));
          a++;
        }
        console.log(`table[${i},${j},${k}]`, table[i][j][k]);
      }
    }
  }

  return table[R.length - 1][B.length - 1][G.length - 1];
}

console.log(simple_rummy(_R, _B, _G));

/*
const result = simple_rummy(_R,_B,_G);
for (let i = 1 ; i < _R.length; ++i) {
  for (let j = 1 ; j < _B.length; ++j) {
    for (let k = 1 ; k < _G.length; ++k) {
      console.log(`[${i},${j},${k}]`,result[i][j][k]);
    }
  }
}
  */






