var numTrees = function(n) {
  const G = Array.from({ length: n + 1 }).fill(0)
  G[0] = 1
  G[1] = 1
  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      G[i] += G[j - 1] * G[i - j]
    }
  }
  return G[n]
};

const res = numTrees(3)
