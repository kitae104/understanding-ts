// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role2 {ADMIN = 5, READ_ONLY, AUTHOR};

const person4 = {
  name: 'kitae',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR,
};

console.log(person.role);

if(person.role === Role.AUTHOR) {
  console.log('is author');
}
