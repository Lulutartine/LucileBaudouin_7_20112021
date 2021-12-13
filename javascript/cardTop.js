// Exporte la classe pour "recipeFactory.js".
export default class CardTop {
  constructor() {
    this.top = this.cardTop();
  }

  // eslint-disable-next-line class-methods-use-this
  cardTop() {
    const top = document.createElement('article');
    top.className = 'section-top';
    return top;
  }

  toHTML() {
    return this.top;
  }
}
