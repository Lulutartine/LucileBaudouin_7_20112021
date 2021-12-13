// Importation des classes nécessaires pour la classe générale.
import CardTop from './cardTop';
import CardBottom from './cardBottom';

// Cette classe permet de construire la carte pour chaque recette dans la page d'accueil.
export default class RecipeFactory {
  constructor(type, data) {
    if (!data) {
      throw new Error('Vous avez oublié des éléments !');
    }
    switch (type) {
      case 'top':
        return new CardTop();
      case 'bottom':
        return new CardBottom(data);
      default:
        throw new Error('Type de données non reconnu !');
    }
  }
}
