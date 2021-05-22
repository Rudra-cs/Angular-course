/*2. Take an array as input like the following
If array is [ ] then it should print ‘Nothing available to Print’
If array is [‘Ironman’] then its should print ‘Ironman
If Array is [‘Ironman,’Captain America’] then it should print ‘Ironman and Captain 
America’
If Array is [‘Ironman’,’Captain Amaerica’,’Hulk’] then it should print ‘Ironman, Captain 
America and Hulk’
If Array is [‘ironman’,’Captain America’,’Hulk’,’Thor’] then it should print ‘Ironman, 
Cpatain America and Others’ */

let arr = [];

let check = () => {
  if (arr.length > 3) {
    console.log(arr[0] + ", " + arr[1] + " and Others");
  } else if (arr.length === 3) {
    console.log(arr[0] + ", " + arr[1] + " and " + arr[2]);
  } else if (arr.length === 2) {
    console.log(arr[0] + " and " + arr[1]);
  } else if (arr.length === 1) console.log(arr[0]);
  else console.log("Nothing available to Print");
};

check(); //empty array

arr.push("Ironman");
check(); //one input

arr.push("Captain America");
check(); //2 input

arr.push("Hulk");
check(); //3 input

arr.push("Thor");
check(); //4 Input
