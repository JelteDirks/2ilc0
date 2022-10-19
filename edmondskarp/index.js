function find_augmenting_path(G, s, t) {
  let Q = [[s]]
  while (Q.length > 0) {
    let next = Q.shift();
    if (next.length > G.length) {
      console.log("max simple path length exceeded, stop");
      break;
    }
    let last = next[next.length - 1]
    if (last === t) {
      return [...next];
    }
    for (let i = 0 ; i < G[last].length; i++) {
      if (G[last][i] < Infinity) {
        Q.push([...next, i]);
      }
    }
  }
}

let G = []

for (let i = 0 ; i < 11; i++) {
  if (!G[i]) {
    G.push([])
  }
  for (let j = 0; j < 11; j++) {
    G[i][j] = Infinity
  }
}

let edges = [
  [0,1],
  [1,2],
  [1,3],
  [0,4],
  [4,2],
  [4,6],
  [0,5],
  [5,6],
  [0,7],
  [7,8],
  [0,9],
  [9,8],
  [2,10],
  [3,10],
  [6,10],
  [8,10],
]

for (let [u,v] of edges) {
  G[u][v] = 1
}

function key(u,v) {
  return "u=" + u + " v=" + v;
}

for (let i = 0 ; i < 5; i++) {
  let path = find_augmenting_path(G, 0, 10)
  if (!path) {
    console.log("done");
    break;
  }
  console.log(path);
  while (path.length > 1) {
    let [u,v] = [path[0],path[1]]
    G[u][v] = Infinity
    G[v][u] = 1
    path.shift();
  }
}


