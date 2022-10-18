function lcs(A,B) {
  let a = A.length;
  let b = B.length;

  return [[],[]];
}

let words = [
  ["YPWAIETOAENRMHMGEN", "MIVWDMKDTCBANGBFKW"],
];

for (let v = 0 ; v < words.length; v++) {
  let [left, right] = words[v];
  let [c,p] = lcs(left, right);
  let print = "";
  for (let row = 0; row < c.length; row++) {
    for (let column = 0 ; column < c[row].length; column++) {
      print += c[row][column] + " ";
    }
    print += "\n";
  }
  console.log(print);
}

