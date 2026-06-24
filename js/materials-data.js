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
    },
    {
      id: 7,
      title: '公孙胜',
      category: '水浒传',
      desc: '《水浒传》人物公孙胜角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT公孙胜.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '公孙胜', '梁山', '人物']
    },
    {
      id: 8,
      title: '卢俊义',
      category: '水浒传',
      desc: '《水浒传》人物卢俊义角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT卢俊义.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '卢俊义', '梁山', '人物']
    },
    {
      id: 9,
      title: '吴用',
      category: '水浒传',
      desc: '《水浒传》人物吴用角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT吴用.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '吴用', '梁山', '人物']
    },
    {
      id: 10,
      title: '关胜',
      category: '水浒传',
      desc: '《水浒传》人物关胜角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT关胜.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '关胜', '梁山', '人物']
    },
    {
      id: 11,
      title: '林冲',
      category: '水浒传',
      desc: '《水浒传》人物林冲角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT林冲.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '林冲', '梁山', '人物']
    },
    {
      id: 12,
      title: '呼延灼',
      category: '水浒传',
      desc: '《水浒传》人物呼延灼角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT呼延灼.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '呼延灼', '梁山', '人物']
    },
    {
      id: 13,
      title: '张清',
      category: '水浒传',
      desc: '《水浒传》人物张清角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT张清.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '张清', '梁山', '人物']
    },
    {
      id: 14,
      title: '李应',
      category: '水浒传',
      desc: '《水浒传》人物李应角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT李应.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '李应', '梁山', '人物']
    },
    {
      id: 15,
      title: '柴进',
      category: '水浒传',
      desc: '《水浒传》人物柴进角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT柴进.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '柴进', '梁山', '人物']
    },
    {
      id: 16,
      title: '秦明',
      category: '水浒传',
      desc: '《水浒传》人物秦明角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT秦明.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '秦明', '梁山', '人物']
    },
    {
      id: 17,
      title: '董平',
      category: '水浒传',
      desc: '《水浒传》人物董平角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT董平.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '董平', '梁山', '人物']
    },
    {
      id: 18,
      title: '花荣',
      category: '水浒传',
      desc: '《水浒传》人物花荣角色素材，适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT花荣.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '花荣', '梁山', '人物']
    },
    {
      id: 19,
      title: '武松（版本2）',
      category: '水浒传',
      desc: '《水浒传》人物武松角色素材（版本2），适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT武松1.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '武松', '梁山', '人物', '版本2']
    },
    {
      id: 20,
      title: '鲁智深（版本2）',
      category: '水浒传',
      desc: '《水浒传》人物鲁智深角色素材（版本2），适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT鲁智深1.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '鲁智深', '梁山', '人物', '版本2']
    },
    {
      id: 21,
      title: '吴用（版本2）',
      category: '水浒传',
      desc: '《水浒传》人物吴用角色素材（版本2），适合人物介绍、剧情分镜和专题展示。',
      preview: './assets/images/水浒传/GPT吴用2.png',
      download: './assets/downloads/demo-material.zip',
      tags: ['水浒传', '吴用', '梁山', '人物', '版本2']
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
