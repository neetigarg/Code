console.log('Starting notes.js');
module.exports.age = 20;
// console.log(module);
module.exports.addNote =() => {
    console.log('addNote');
    return 'New note';
};
module.exports.add = (a,b) => {
  console.log('Adding 2 variables');
  // var c;
  c = a+b;
  console.log('Adding two variables '+c);
  // return a+b;
}
