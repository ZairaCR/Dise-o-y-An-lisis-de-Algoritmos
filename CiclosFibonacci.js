function Fibonacci(n) {
   
    var fibonacc = [0, 1];
    for (var i = 2; i <= n; i++) {
      fibonacc[i] = fibonacc[i - 1] + fibonacc[i - 2];
    }
    return fibonacc[n];
  
}

console.log(Fibonacci(5))

