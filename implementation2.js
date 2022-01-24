<<<<<<< Updated upstream:implementation2.js
=======
/* eslint-disable implicit-arrow-linebreak */
>>>>>>> Stashed changes:implementation1.js
// Ce fichier contient le code nécessaire à la mise en place de la deuxième implémentation
// de l'algorithme par le biais des propriétés de tableaux telles que filter().

// Récupération des données "recipes" du fichier.
import { recipes } from './recipes';

// Constante globale pour récupérer le contenu de l'input principal.
const searchInput = document.querySelector('#search-input');

// Crée la ligne du message "Aucune recette...".
const noRecipe = document.querySelector('#no-recipe');
const noRecipeLine = document.createElement('p');
noRecipeLine.className = 'no-recipe-line';
noRecipeLine.innerText = 'Aucune recette ne correspond au terme recherché...';
noRecipe.appendChild(noRecipeLine);

// Constante globale pour la partie affichant les recettes.
const mainSection = document.querySelector('#main-section');

// Variable globale pour le tableau des recettes triées par l'input principal.
let newRecipes = [];

// Cette fonction effectue le tri des recettes.
export default function triParFilter(callback) {
  mainSection.innerText = '';
  // Si 1 ou 2 caractères sont tapés.
    if (searchInput.value.length <= 2) {
    if (noRecipeLine.classList.contains('no-recipe-line-open')) {
      noRecipeLine.classList.replace('no-recipe-line-open', 'no-recipe-line');
    }
    callback();
    return;
  }
  // Si 3 caractères ou plus sont tapés.
<<<<<<< Updated upstream:implementation2.js
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes:implementation1.js
  // eslint-disable-next-line no-else-return
  else {
    // Le contenu de l'input est mis en minuscule et ses accents sont retirés.
    // La constante ci-dessous récupère ce contenu modifié.
    const lowerSearchInput = searchInput.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    mainSection.innerText = '';

    // La filtration se fait sur le nom ou sur la description ou sur les ingrédients.
<<<<<<< Updated upstream:implementation2.js
=======
  else {
    // Le contenu de l'input est mis en minuscule et ses accents sont retirés.
    // La constante récupère le contenu modifié.
    const lowerSearchInput = searchInput.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    mainSection.innerText = '';

    // Le filtre est appliqué sur le nom ou sur la description ou sur les ingrédients.
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes:implementation1.js
    newRecipes = recipes.filter((element) =>
      element.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(lowerSearchInput)
      || element.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(lowerSearchInput)
      || element.ingredients.map((ingr) => ingr.ingredient).some((ingredient) =>
        ingredient.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(lowerSearchInput)));

    // Si le tableau est vide, le message "Aucune recette..." apparait.
    if (newRecipes.length === 0) {
      noRecipeLine.classList.replace('no-recipe-line', 'no-recipe-line-open');
    }
    // Si le tableau n'est pas vide mais s'il l'a été précédemment, le message disparait.
    else if (noRecipeLine.classList.contains('no-recipe-line-open')) {
      noRecipeLine.classList.replace('no-recipe-line-open', 'no-recipe-line');
    }
  }
  callback(newRecipes);
}
