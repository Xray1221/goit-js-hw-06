const categoriesRef = document.querySelectorAll('#categories li.item');
console.log('Number of categories: ' + categoriesRef.length);

categoriesRef.forEach(categoryRef => {
    console.log('Category: ' + categoryRef.querySelector('h2').innerText);
    console.log('Elements: ' + categoryRef.querySelectorAll('ul li').length);
}) 