function fib() {
  var firstnum = 0;
  var nextnum = 1;
  var sum = 0;
  function nacci() {
    console.log(nextnum);

    sum = firstnum + nextnum;
    firstnum = nextnum;
    nextnum = sum;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
fibCounter()
fibCounter()
