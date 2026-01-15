"use strict";

// Data
const characters = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 }
];

// Broken data
const brokenCharacters = [
  { id: 1, age: 30 },
  { id: 2 },
  { id: 3, name: "Valid Name", age: 25 }
];

// Helpers
function renderList(array, targetId, errorTargetId = null) {
  const list = document.getElementById(targetId);
  list.innerHTML = "";

  array.forEach(item => {
    if (!item.name) {
      const msg = "Error: object missing name property";
      console.error(msg);

      if (errorTargetId) {
        const errorDiv = document.getElementById(errorTargetId);
        const p = document.createElement("p");
        p.className = "error-message";
        p.textContent = msg;
        errorDiv.appendChild(p);
      }
      return;
    }

    const li = document.createElement("li");
    li.textContent = item.name;
    list.appendChild(li);
  });
}

// Exercise 1
console.log("Exercise 1");
characters.forEach(c => console.log(c.name));
renderList(characters, "names-list");

// Exercise 2
console.log("Exercise 2");
const under40 = characters.filter(c => c.age < 40);
under40.forEach(c => console.log(c.name));
renderList(under40, "young-characters-list");

// Exercise 3
renderList(characters, "function-list");

// Exercise 4
const ageFilter = characters.filter(c => c.age < 40);
renderList(ageFilter, "age-filter-list");

// Exercise 5 & 6
renderList(characters, "error-handling-list", "error-messages");
renderList(brokenCharacters, "broken-array-list", "broken-array-errors");
