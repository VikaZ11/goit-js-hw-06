'use strict';

const listCategoriesRef = document.querySelector("#categories");
console.log("Number of categories:", listCategoriesRef.children.length);

const itemRef = listCategoriesRef.querySelectorAll(".item");
itemRef.forEach((item) => {
    const titleRef = item.querySelector('h2');
    const listRef = item.querySelector('ul');

    console.log(`Category: ${titleRef.textContent}`);
    console.log(`Elements: ${listRef.children.length}`);
});
