const person3: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple
} = {
  name: 'kitae',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};


person.role.push('admin');
person.role[0] = 10;

console.log(person)


let favoriteActivities: any[];
favoriteActivities = ['Sports', 1];

console.log(person.hobbies[0]);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}