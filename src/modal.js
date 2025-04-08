import { getCards, updateCard } from './data.js';
import { renderCards } from './dom.js';

const modal = document.getElementById('editModal');
const closeBtn = modal.querySelector('.close');

export const openEditModal = (index) => {
  const card = getCards()[index];
  const form = modal.querySelector('form');
  
  form.dataset.index = index;
  form.elements.title.value = card.title;
  form.elements.subtitle.value = card.subtitle;
  form.elements.subtitle2.value = card.subtitle2;
  
  modal.style.display = 'block';
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const index = e.target.dataset.index;
  const updatedCard = {
    title: e.target.elements.title.value,
    subtitle: e.target.elements.subtitle.value,
    subtitle2: e.target.elements.subtitle2.value
  };
  
  updateCard(index, updatedCard);
  renderCards();
  modal.style.display = 'none';
};

modal.querySelector('form').addEventListener('submit', handleFormSubmit);
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});