// Object spread operator 
const animals = {
  tiger: 23,
  lion: 5, 
  monkey: 2,
  bird: 30
}  

function objectSpread(p1, p2, p3) {
  console.log(p1) 
  console.log(p2) 
  console.log(p3)
} 

const { tiger, lion, ...rest } = animals;

objectSpreat(tiger, lion, rest); 
