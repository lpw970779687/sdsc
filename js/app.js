const state = {
  materials: [],
  category: '水浒传',
  keyword: ''
};

const { categories, loadMaterials: loadMaterialsData, renderMaterialCard, renderEmptyState } = window.MaterialsData;

const grid = document.querySelector('#materialGrid');
const searchInput = document.querySelector('#searchInput');
const categoryButtons = document.querySelector('#categoryButtons');
const emptyText = document.querySelector('#emptyText');

async function initMaterials() {
  state.materials = await loadMaterialsData();
  renderCategories();
  renderMaterials();
}

function renderCategories() {
  categoryButtons.innerHTML = categories.map(cat => `
    <button class="category-btn ${cat === state.category ? 'active' : ''}" data-category="${cat}">${cat}</button>
  `).join('');
}

function getFilteredMaterials() {
  const keyword = state.keyword.trim().toLowerCase();
  return state.materials.filter(item => {
    const matchCategory = item.category === state.category;
    const text = `${item.title} ${item.desc} ${item.category} ${item.tags.join(' ')}`.toLowerCase();
    const matchKeyword = !keyword || text.includes(keyword);
    return matchCategory && matchKeyword;
  });
}

function renderMaterials() {
  const list = getFilteredMaterials();
  emptyText.classList.toggle('hidden', list.length > 0);
  emptyText.innerHTML = renderEmptyState({
    title: '没有找到相关素材',
    message: state.category === '西游记' && !state.keyword.trim()
      ? '西游记素材暂未上传。'
      : '没有找到相关素材。',
    actionHref: '#materials',
    actionText: '返回列表'
  });
  grid.innerHTML = list.map(renderMaterialCard).join('');
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
  if (item) window.location.href = `./detail.html?id=${encodeURIComponent(item.id)}`;
});

document.querySelector('#year').textContent = new Date().getFullYear();
renderCategories();
initMaterials();
