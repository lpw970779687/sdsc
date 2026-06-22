const { loadMaterials: loadMaterialsData, renderDetailCard, renderEmptyState } = window.MaterialsData;
const mount = document.querySelector('#detailMount');

async function renderDetail() {
  const materials = await loadMaterialsData();
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const item = materials.find(entry => String(entry.id) === String(id)) || materials[0];

  if (!item) {
    mount.innerHTML = renderEmptyState({
      title: '没有找到素材',
      message: '当前没有可显示的素材内容，请返回素材列表。',
      actionHref: './index.html#materials',
      actionText: '返回素材列表'
    });
    return;
  }

  mount.innerHTML = renderDetailCard(item);
}

renderDetail();
