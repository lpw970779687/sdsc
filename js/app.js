const state = {
  materials: [],
  category: '水浒传',
  keyword: '',
  page: 1
};

const pageSize = 20;

const { categories, loadMaterials: loadMaterialsData, renderMaterialCard, renderEmptyState } = window.MaterialsData;

const grid = document.querySelector('#materialGrid');
const searchInput = document.querySelector('#searchInput');
const categoryButtons = document.querySelector('#categoryButtons');
const emptyText = document.querySelector('#emptyText');
const pagination = document.querySelector('#pagination');

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

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    pagination.classList.add('hidden');
    pagination.innerHTML = '';
    return;
  }

  pagination.classList.remove('hidden');
  const prevDisabled = state.page <= 1;
  const nextDisabled = state.page >= totalPages;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  pagination.innerHTML = `
    <button class="page-btn" data-page="prev" ${prevDisabled ? 'disabled' : ''}>上一页</button>
    ${pages.map(page => `
      <button class="page-btn ${page === state.page ? 'active' : ''}" data-page="${page}" aria-current="${page === state.page ? 'page' : 'false'}">${page}</button>
    `).join('')}
    <button class="page-btn" data-page="next" ${nextDisabled ? 'disabled' : ''}>下一页</button>
  `;
}

function renderMaterials() {
  const list = getFilteredMaterials();
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  if (state.page > totalPages) state.page = totalPages;

  const start = (state.page - 1) * pageSize;
  const pageItems = list.slice(start, start + pageSize);

  emptyText.classList.toggle('hidden', list.length > 0);
  emptyText.innerHTML = renderEmptyState({
    title: '没有找到相关素材',
    message: state.category === '西游记' && !state.keyword.trim()
      ? '西游记素材暂未上传。'
      : '没有找到相关素材。',
    actionHref: '#materials',
    actionText: '返回列表'
  });
  grid.innerHTML = pageItems.map(renderMaterialCard).join('');
  renderPagination(list.length === 0 ? 1 : totalPages);
}

categoryButtons.addEventListener('click', event => {
  const btn = event.target.closest('[data-category]');
  if (!btn) return;
  state.category = btn.dataset.category;
  state.page = 1;
  renderCategories();
  renderMaterials();
});

searchInput.addEventListener('input', event => {
  state.keyword = event.target.value;
  state.page = 1;
  renderMaterials();
});

pagination.addEventListener('click', event => {
  const btn = event.target.closest('[data-page]');
  if (!btn || btn.disabled) return;

  const list = getFilteredMaterials();
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));

  if (btn.dataset.page === 'prev') {
    state.page = Math.max(1, state.page - 1);
  } else if (btn.dataset.page === 'next') {
    state.page = Math.min(totalPages, state.page + 1);
  } else {
    const page = Number(btn.dataset.page);
    if (Number.isFinite(page)) state.page = page;
  }

  renderMaterials();
});

grid.addEventListener('click', event => {
  const card = event.target.closest('[data-id]');
  if (!card) return;
  const item = state.materials.find(m => String(m.id) === card.dataset.id);
  if (!item) return;

  const url = `./detail.html?id=${encodeURIComponent(item.id)}`;
  const opened = window.open(url, '_blank', 'noopener,noreferrer');
  if (opened) opened.opener = null;
});

document.querySelector('#year').textContent = new Date().getFullYear();
renderCategories();
initMaterials();
