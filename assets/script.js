const search = document.querySelector('#search');
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.article-card');
const empty = document.querySelector('.empty');
let category = 'all';
function updateCards() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matches = (category === 'all' || card.dataset.category === category) && card.dataset.search.toLowerCase().includes(query);
    card.hidden = !matches;
    if (matches) visible++;
  });
  empty.hidden = visible > 0;
}
filters.forEach(button => button.addEventListener('click', () => {
  category = button.dataset.filter;
  filters.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  updateCards();
}));
search.addEventListener('input', updateCards);
