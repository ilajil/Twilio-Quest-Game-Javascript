// Create a one dimensional array 
// capable of storing 3 objects
let  letters = new Array(3); // Indices 0,1,2
  
  
// Loop through the array, adding a 
// new array to each location
for (let i = 0; i < letters.length; i++) { 
    letters[i] = new Array(3);// new array of 3 locations
} 
// Put items in the 2D array
letters[0][0]='a';
letters[0][1]='f';
letters[0][2]='k';
letters[1][0]='b';
letters[1][1]='g';
letters[1][2]='l';
letters[2][0]='c';
letters[2][1]='h';
letters[2][2]='m';
// Display the 2D Array
console.table(letters);
console.log(letters);