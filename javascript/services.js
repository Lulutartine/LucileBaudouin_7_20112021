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

/*
// Récupère le photographe concerné par l'id demandé.
export const getPhotographer = async (id) => {
  const photographers = await getPhotographers();
  const photographer = photographers.find((data) => data.id == id);
  return photographer;
};

// Récupère les médias concernés par le photographe demandé.
export const getMediasByPhotographers = async (id) => {
  const { media } = await getAll();
  const medias = media.filter((data) => data.photographerId == id);
  return medias;
};
*/
