
// Code smells for ESLint to detect
var x = 1;   // no-var
eval('bad'); // no-eval

function unusedParam(a, b, c) {  // no-unused-vars
  console.log(a);
  return a;
}

const obj = { key: 'value' };
if (obj == null) { }  // eqeqeq: use === not ==
  