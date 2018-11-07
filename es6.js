let f1 = {
  name: 1
};
let f2 = new Object();

function getName() {
  return this.name;
}
console.log(f1.getName);
console.log(f2.getName);