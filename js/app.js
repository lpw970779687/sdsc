const state = {
  materials: [],
  category: '全部',
  keyword: ''
};

const grid = document.querySelector('#materialGrid');
const searchInput = document.querySelector('#searchInput');
const categoryButtons = document.querySelector('#categoryButtons');
const emptyText = document.querySelector('#emptyText');
const totalCount = document.querySelector('#totalCount');
const modal = document.querySelector('#modal');

async function loadMaterials() {
  const res = await fetch('./materials.json');
  state.materials = await res.json();
  totalCount.textContent = state.materials.length;
  renderCategories();
  renderMaterials();
}

function renderCategories() {
  const categories = ['全部', ...new Set(state.materials.map(item => item.category))];
  categoryButtons.innerHTML = categories.map(cat => `
    <button class="category-btn ${cat === state.category ? 'active' : ''}" data-category="${cat}">${cat}</button>
  `).join('');
}

function getFilteredMaterials() {
  const keyword = state.keyword.trim().toLowerCase();
  return state.materials.filter(item => {
    const matchCategory = state.category === '全部' || item.category === state.category;
    const text = `${item.title} ${item.desc} ${item.category} ${item.tags.join(' ')}`.toLowerCase();
    const matchKeyword = !keyword || text.includes(keyword);
    return matchCategory && matchKeyword;
  });
}

function renderMaterials() {
  const list = getFilteredMaterials();
  emptyText.classList.toggle('hidden', list.length > 0);
  grid.innerHTML = list.map(item => `
    <article class="card" data-id="${item.id}">
      <div class="thumb"><img src="${item.preview}" alt="${item.title}" loading="lazy"></div>
      <div class="card-body">
        <span class="badge">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="tag-list">${item.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}</div>
      </div>
    </article>
  `).join('');
}

function openModal(item) {
  document.querySelector('#modalImage').src = item.preview;
  document.querySelector('#modalTitle').textContent = item.title;
  document.querySelector('#modalCategory').textContent = item.category;
  document.querySelector('#modalDesc').textContent = item.desc;
  document.querySelector('#modalTags').innerHTML = item.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');
  document.querySelector('#modalDownload').href = item.download;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

categoryButtons.addEventListener('click', event => {
  const btn = event.target.closest('[data-category]');
  if (!btn) return;
  state.category = btn.dataset.category;
  renderCategories();
  renderMaterials();
});

searchInput.addEventListener('input', event => {
  state.keyword = event.target.value;
  renderMaterials();
});

grid.addEventListener('click', event => {
  const card = event.target.closest('[data-id]');
  if (!card) return;
  const item = state.materials.find(m => String(m.id) === card.dataset.id);
  if (item) openModal(item);
});

modal.addEventListener('click', event => {
  if (event.target.dataset.close) closeModal();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});

document.querySelector('#year').textContent = new Date().getFullYear();
loadMaterials();
