const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);
const categoriesArray = [...categories.children];
categoriesArray.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryLength = category.querySelectorAll("ul li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryLength}`);
});
