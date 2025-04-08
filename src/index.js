import '../src/styles/style.css'; 
import { addCard } from './data.js';
import { renderCards } from './dom.js';

document.getElementById('addCardForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  addCard({
    title: formData.get('title'),
    subtitle: formData.get('subtitle'),
    subtitle2: formData.get('subtitle2')
  });
  
  e.target.reset();
  renderCards();
});

// Инициализация
renderCards();