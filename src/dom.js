import { getCards, removeCard } from './data.js';

const createCardElement = (card, index) => {
    const template = document.getElementById('cardTemp');
    const clone = template.content.cloneNode(true);
    
    clone.querySelector('.card_title').textContent = card.title;
    clone.querySelector('.card_text').textContent = card.subtitle;
    clone.querySelector('.card_text2').textContent = card.subtitle2;

    clone.querySelector('.card_button_delete').addEventListener('click', () => {
        removeCard(index);
        renderCards();
    });
    
    return clone;
};

export const renderCards = () => {
    const container = document.querySelector('.cardList');
    container.innerHTML = '';
    getCards().forEach((card, index) => {
        container.appendChild(createCardElement(card, index));
    });
};