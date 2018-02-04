function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strangel loop.`)
  }
  return array;
}

function whileLoop(n) {
  while (n !== 'done') {
    n--;
    if (n === 0) {
      n = 'done'
    } else{
      console.log(n)
    }
  }
  return n;
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length)
  return array;
}