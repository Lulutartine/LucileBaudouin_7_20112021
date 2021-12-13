/* eslint-disable no-prototype-builtins */
// Exporte la classe pour "recipeFactory.js".
export default class CardBottom {
  constructor(data) {
    // eslint-disable-next-line object-curly-newline
    const { name, time, ingredients, description } = data;
    this.bottom = this.cardBottom(name, time, ingredients, description);
  }

  // eslint-disable-next-line class-methods-use-this
  cardBottom(name, time, ingredients, description) {
    const bottom = document.createElement('article');
    bottom.className = 'section-bottom';

    const title_Duration = document.createElement('div');
    title_Duration.className = 'bottom-title-time';
    const title = document.createElement('div');
    title.className = 'bottom-title';
    title.innerText = name;
    const duration = document.createElement('div');
    duration.className = 'bottom-time';
    const timeIcon = document.createElement('img');
    timeIcon.src = 'Images/Temps.png';
    timeIcon.id = 'temps';
    timeIcon.setAttribute('alt', 'Durée');
    const timeText = document.createElement('span');
    timeText.innerText = `${time} mn`;
    title_Duration.appendChild(title);
    duration.appendChild(timeIcon);
    duration.appendChild(timeText);
    title_Duration.appendChild(duration);
    bottom.appendChild(title_Duration);

    const ingredients_Recipe = document.createElement('div');
    ingredients_Recipe.className = 'bottom-descr';
    const ingr = document.createElement('div');
    ingr.className = 'bottom-ingr';
    // eslint-disable-next-line no-restricted-syntax
    for (const ingred of ingredients) {
      const each_Ingr = document.createElement('span');
      if (ingred.hasOwnProperty('quantity')) {
        if (ingred.hasOwnProperty('unit')) {
          each_Ingr.innerText = `${ingred.ingredient} : ${ingred.quantity} ${ingred.unit}`;
        }
        else {
          each_Ingr.innerText = `${ingred.ingredient} : ${ingred.quantity}`;
        }
      }
      else {
        each_Ingr.innerText = ingred.ingredient;
      }
      ingr.appendChild(each_Ingr);
    }

    const recipe = document.createElement('div');
    recipe.className = 'bottom-recipe';
    if (description.length > 207) {
      const shortRecipe = description.substring(0, 207);
      recipe.innerText = `${shortRecipe} ...`;
    }
    else {
      recipe.innerText = description;
    }
    ingredients_Recipe.appendChild(ingr);
    ingredients_Recipe.appendChild(recipe);
    bottom.appendChild(ingredients_Recipe);
    return bottom;
  }

  toHTML() {
    return this.bottom;
  }
}
