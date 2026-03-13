let paths = [
  'Testing/TestingDeep/Prakash.pdf',
  'Testing/prakash.pdf',
  'Testing/resume.pdf',
  'Testing/TestingOver/TestingDeep/Prakash.pdf',
];

const pathSet = new Set();

for (const p of paths) {
  const parts = p.split('/');

  let current = '';

  for (let i = 0; i < parts.length - 1; i++) {
    current = current ? `${current}/${parts[i]}` : parts[i];
    pathSet.add(current);
  }
}

console.log([...pathSet]);

let set = [
  'Testing',
  'Testing/TestingDeep',
  'Testing/TestingOver',
  'Testing/TestingOver/TestingDeep',
];

let map = new Map();

for (const path of s) {
  let folders = path.split('/');
}
