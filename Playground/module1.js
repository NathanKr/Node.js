function max(a, b) {
  return a > b ? a : b;
}

// --- export the function max as max
exports.max = max;

const text2 = 'this cannot be used outside this module';
const text = 'hello world';

// --- export the variable text as t1
exports.t1 = text;
