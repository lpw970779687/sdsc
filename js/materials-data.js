window.MaterialsData = (() => {
  const categories = ['水浒传', '西游记'];
  const materials = [
    {
      id: 1,
      title: '宋江',
      category: '水浒传',
      desc: '《水浒传》主角宋江角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT宋江.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '宋江', '梁山', '人物']
    },
    {
      id: 2,
      title: '鲁智深',
      category: '水浒传',
      desc: '《水浒传》人物鲁智深角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT鲁智深.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '鲁智深', '梁山', '人物']
    },
    {
      id: 3,
      title: '武松',
      category: '水浒传',
      desc: '《水浒传》人物武松角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT武松.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '武松', '梁山', '人物']
    },
    {
      id: 4,
      title: '武大郎',
      category: '水浒传',
      desc: '《水浒传》人物武大郎角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT武大郎.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '武大郎', '梁山', '人物']
    },
    {
      id: 5,
      title: '潘金莲',
      category: '水浒传',
      desc: '《水浒传》人物潘金莲角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT潘金莲.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '潘金莲', '梁山', '人物']
    },
    {
      id: 6,
      title: '孙二娘',
      category: '水浒传',
      desc: '《水浒传》人物孙二娘角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT孙二娘.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '孙二娘', '梁山', '人物']
    }
  ];

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  async function loadMaterials() {
    return materials.filter(item => categories.includes(item.category));
  }

  function renderTags(tags) {
    return tags.map(tag => `<span class="tag">#${escapeHtml(tag)}</span>`).join('');
  }

  function renderMaterialCard(item) {
    const title = escapeHtml(item.title);
    const category = escapeHtml(item.category);
    const desc = escapeHtml(item.desc);
    const preview = escapeHtml(item.preview);

    return `
      <article class="card" data-id="${item.id}">
        <div class="thumb">
          <img src="${preview}" alt="${title}" loading="lazy">
          <span class="thumb-watermark">版权</span>
        </div>
        <div class="card-body">
          <span class="badge">${category}</span>
          <h3>${title}</h3>
          <p>${desc}</p>
          <div class="tag-list">${renderTags(item.tags)}</div>
        </div>
      </article>
    `;
  }

  function renderDetailCard(item) {
    const title = escapeHtml(item.title);
    const category = escapeHtml(item.category);
    const desc = escapeHtml(item.desc);
    const preview = escapeHtml(item.preview);
    const download = escapeHtml(item.download);

    return `
      <section class="detail-card">
        <img class="detail-image" src="${preview}" alt="${title}" />
        <div class="detail-meta">
          <span class="badge">${category}</span>
          <h1 class="detail-title">${title}</h1>
          <p class="detail-desc">${desc}</p>
          <div class="tag-list">${renderTags(item.tags)}</div>
          <div class="detail-actions">
            <a class="btn primary" href="${download}" download>下载素材</a>
            <a class="btn ghost" href="./index.html#materials">返回列表</a>
          </div>
        </div>
      </section>
    `;
  }

  function renderEmptyState({ title, message, actionHref, actionText }) {
    return `
      <section class="empty-state">
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(message)}</p>
        <a class="btn primary" href="${escapeHtml(actionHref)}">${escapeHtml(actionText)}</a>
      </section>
    `;
  }

  return {
    categories,
    escapeHtml,
    loadMaterials,
    renderTags,
    renderMaterialCard,
    renderDetailCard,
    renderEmptyState
  };
})();
