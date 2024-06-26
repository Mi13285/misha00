let bag = [
  {
    name: "TV",

    coast: 300,

    delivery: 250,
  },

  {
    name: "Pc",

    coast: 100,

    delivery: 220,
  },

  {
    name: "Lamp",

    coast: 20,

    delivery: 150,
  },
];
let sum = bag.map((bag) => bag.coast + bag.delivery);
console.log(sum);
let sumOne = sum.reduce((sum, current) => sum + current, 0);
console.log(sumOne);
