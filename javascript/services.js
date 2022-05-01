// Récupère l'intégralité du fichier "recipes.json".
async function getAll() {
  const data = await fetch('recipes.json').then((res) => res.json());
  return data;
}

// Récupère l'intégralité du tableau "recipes" du fichier.
// eslint-disable-next-line import/prefer-default-export
export const getRecipes = async () => {
  const { recipes } = await getAll();
  return recipes;
};

