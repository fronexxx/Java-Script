// Task-2
let mainDiv = document.getElementById('main');

fetch('https://dummyjson.com/recipes')
    .then((response) => response.json())
    .then((recipesObjects) => {
        let {recipes} = recipesObjects;

        for (const recipe of recipes) {
            let div = document.createElement('div');
            div.classList.add('recipe');
            let divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
            "id": ${recipe.id},
            "userId": ${recipe.userId},
            "rating": ${recipe.rating},
            "reviewCount": ${recipe.reviewCount},
            "mealType": ${recipe.mealType},
            "instructions": ${recipe.instructions},
            "prepTimeMinutes": ${recipe.prepTimeMinutes},
            "cookTimeMinutes": ${recipe.cookTimeMinutes},
            "servings": ${recipe.servings},
            "difficulty": ${recipe.difficulty},
            "cuisine": ${recipe.cuisine},
            "caloriesPerServing": ${recipe.caloriesPerServing},
            "tags": ${recipe.tags},
            `
            let img = document.createElement('img');
            img.src = recipe.image;
            let h3 = document.createElement('h3');
            h3.innerText = 'Ingredients:';

            let ul = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
                let li = document.createElement('li');
                    li.innerText = ingredient;
                    ul.appendChild(li);
            }
            let hr = document.createElement('hr');


            div.append(divWithInfo, img, h3, ul, hr)
            mainDiv.appendChild(div);
        }
    });
