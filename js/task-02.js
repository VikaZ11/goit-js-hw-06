const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredientsRef = document.querySelector("#ingredients");

const listItem = ingredients.map((element) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = element;
  itemRef.classList.add("item");
  return itemRef;
});

listIngredientsRef.append(...listItem);
