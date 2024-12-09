// Print out into the console the entire SOCBook object
console.log(SOCBook);

// Take a look at it in the console
// Notice the shape of the data, and all of the different information contained in it
// Try and play to print out the different parts of the data into the console

// For all the following tasks, access/select the data required through the SOCBook object

// For the Tasks 1, 2, and 3 you will look at the object and find your desired data manually. Then, simply select it from the object
// e.g. object.path[2].data.I.want

// Task 1
// Complete the function so it returns Liz Rios' favourite fruit

function lizRiosFavFruit() {
  // Your code goes here...
  return SOCBook.data.people[10].favoriteFruit;
}

console.log("Liz Rios' favourite fruit is:", lizRiosFavFruit());

// Task 2
// Complete the function so it returns Marie David's 2nd friend's name

function marieDavid2ndFriend() {
  // Your code goes here...
  return SOCBook.data.people[15].friends[1].name;
}

console.log("Marie David's 2nd friend is:", marieDavid2ndFriend());

// Task 3
// Complete the function so Cooper Brady's greeting message is shown in the p tag with the id of "message"
// We've helped start breaking down the plan!

function cooperBradyGreeting() {
  // Your code goes here...
  // Select Cooper Brady's greeting message from the object
  const myP = document.getElementById("message");
  myP.textContent = SOCBook.data.people[18].greeting;

  // Select the p tag with the id of message
  // Set the text of the p tag to be the greeting message
}

cooperBradyGreeting();

// For Tasks 4, 5, 6, and 7 you will be getting much more programmatic with how you interact with the data, rather than manually finding and selecting

// Task 4
// Complete the following function
// In it, we want to take in an email as a parameter, and loop through search for the person who has that email
// If we find them, return the person
// If we don't, return null

function findPersonByEmail(email) {
  // Your code goes in here...
  
  for (let person of SOCBook.data.people) {
    //console.log(`checking ${person.name}`);
    if (person.email == email) {
      return person;
    }
  }
  // we didn't find a match
  return null;

}

const found = findPersonByEmail("carversalinas@comtent.com");
console.log("What I found:", found);

// Task 5
// Make a list containing only the people's names who's favourite fruit is a mango

function getMangoLovers() {
  let mangoLovers = [];
  // Your code goes here...
  for (let person of SOCBook.data.people) {
    if (person.favoriteFruit == "mango") {
      mangoLovers.push(person.name);
    }
  }
  return mangoLovers;
}

console.log("Who loves mango?", getMangoLovers());

// Task 6
// Complete the function. Try and return the address of the person in the position in the array we've been handed

function getAddress(positionInArray) {
  // Your code goes here...
  return SOCBook.data.people[positionInArray]["full address"];
}

console.log(getAddress(0));

// Task 7
// Show a profile for each person in the ul with id "profiles"
// A profile should include a person's name, age, and their image
// Remember, break this down and tackle it step by step!

//Your work goes here:

// MY PLAN:
// Grab the ul element that's already in the html and assign to a variable
// Get one person from the book
// Create a new li element
// Create a span element
// Set the span's text to include the name and age of the person
// Append the span as a child of the li
// Append the image of the person as a child of the li
// Append the li as a child of the ul
// Repeat with next person
 
const profileList = document.getElementById("profiles");

for (let person of SOCBook.data.people) {

  //person = SOCBook.data.people[1];
  let profileLI = document.createElement("li");
  let profileHeader = document.createElement("h2");
  let profileImage = document.createElement("img");
  profileHeader.textContent = `${person.name}, age ${person.age}`;
  profileImage.src = person.picture;
  profileLI.appendChild(profileHeader);
  profileLI.appendChild(profileImage);
  profileList.appendChild(profileLI);

}

// Oh wow it actually worked! I am buzzing.
// Really could do with some CSS now to make it pretty...
