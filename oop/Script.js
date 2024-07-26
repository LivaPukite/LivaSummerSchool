const Person = require('./Person');
const Animal = require('./Animal');


let student = new Person('Marta', 'Ziedite', 49, 'Gardener', false);
let anotherStudent = new Person('Olivia', 'Amerikaniete', 28, 'Bartender', true);

let ani = new Animal('cat', 'rudza', 2, '29cm', 0,9);
let anim = new Animal('snake', 'pitons', 6, '23m', 7);

student.calcAge();
anotherStudent.introduce();
ani.language();
anim.language();