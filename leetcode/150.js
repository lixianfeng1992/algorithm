var evalRPN = function(tokens) {
  const queue = [];
  for (let token of tokens) {
    if (token !== '+' && token !== '-' && token !== '*' && token !== '/') {
      queue.push(token);
    } else {
      const right = queue.pop();
      const left = queue.pop();
      if (token === '+') {
        queue.push((+left) + (+right));
      } else if (token === '-') {
        queue.push((+left) - (+right));
      } else if (token === '*') {
        queue.push((+left) * (+right));
      } else if (token === '/') {
        queue.push(Number.parseInt((+left) / (+right)));
      }
    }
  }
  return queue[0];
};

evalRPN(["4","13","5","/","+"])
