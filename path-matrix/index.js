const _ = require("lodash");

function special_dot(A, B) {
  let aRows = A.length;
  let aCols = A[0].length;
  let bRows = B.length;
  let bCols = B[0].length;
  let C = new Array(aRows);

  if (aCols !== bRows) {
    throw new Error("incompatible matrices");
  }

  for (let r = 0 ; r < aRows; r++) {
    C[r] = new Array(bCols);
    for (let c = 0 ; c < bCols; c++) {
      C[r][c] = 0;
      let v = 0;
      for (let i = 0 ; i < aCols; i++) {
        v = Math.max(v, Math.log2(A[r][i] * B[i][c]));
      }
      C[r][c] = v;
    }
  }
  return C;
}

function dot(A, B) {
  let aRows = A.length;
  let aCols = A[0].length;
  let bRows = B.length;
  let bCols = B[0].length;
  let C = new Array(aRows);

  if (aCols !== bRows) {
    throw new Error("incompatible matrices");
  }

  for (let r = 0 ; r < aRows; r++) {
    C[r] = new Array(bCols);
    for (let c = 0 ; c < bCols; c++) {
      C[r][c] = 0;
      for (let i = 0 ; i < aCols; i++) {
        C[r][c] += A[r][i] * B[i][c];
      }
    }
  }
  return C;
}

function matrix_path_length(G, k) {
  let original = _.cloneDeep(G);
  let ops = 0;
  while (k > 1) {
    ops++;
    if ((k % 2) === 0) {
      k =  k / 2;
      G = special_dot(G,G);
    } else {
      ops++;
      k = k / 2;
      k = k - 1;
      G = special_dot(special_dot(G, original), G);
    }
  }
  console.log(ops, "operations");
  return G;
}
const G = [
  [0,1,0,0,0],
  [0,0,0,1,1],
  [0,1,0,0,0],
  [1,0,1,0,1],
  [0,0,1,0,0]
]

const money2 = [
  [1,49,(1 / .0107)],
  [1,1,2],
  [1,1,1],
];

const money = [
  [1,         49        ,(1 / .0107)],
  [(1/49),    1         ,2],
  [.107,      (1/2)     ,1],
];

const expected_2 = [
  [0 , 1/49, 1/.0107],
  [1 , 0, 1],
  [1 , 1, 0],
];

const unit = [
  [1,1,1],
  [1,1,1],
  [1,1,1],
];

for (let i = 1 ; i <= 3 ; i++) {
  let power = i;
  let l = matrix_path_length(money, power);
  console.log("power", power);
  console.log(l.map(x => x.map(y => {
    return Math.pow(2, y);
  })));
}
