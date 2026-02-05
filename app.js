const i18n = {
  en: {
    brand: 'Linear Algebra Compass',
    brand_sub: 'Learn concepts. Recall ideas. Connect the map.',
    hero_title: 'Your bilingual linear algebra companion',
    hero_body:
      'English is primary, Chinese is here to bridge intuition. Explore the knowledge map, trigger recall, and keep a personal notebook — no drill problems, just concept clarity.',
    hero_cta: "Shuffle today's recall",
    daily_title: 'Daily recall',
    map_title: 'Knowledge map',
    map_body: 'A curated list of concepts. Each card includes a quick recall focus.',
    recall_title: 'Quick recall cards',
    recall_body: 'Tap to flip. Use these when you want to refresh a concept in 60 seconds.',
    formula_title: 'Core formulas & definitions',
    formula_body: 'Short, practical statements that build intuition and memory.',
    connections_title: 'Concept connections',
    connections_body: 'See how topics lean on each other. Use this to choose what to review next.',
    plan_title: 'Study flow',
    plan_body: 'A lightweight rhythm you can repeat each week.',
    notes_title: 'My linear algebra notebook',
    notes_body: 'Write your own summaries or mental images. Everything stays in your browser.',
    footer: 'Made for calm, focused learning. Update the topics as your course evolves.',
    notes_placeholder: 'Write your notes here...',
    recall_tag: 'Recall',
    tap_to_flip: 'Tap to flip',
    app_back: 'Back to study flow',
    app_eyebrow: 'Application room',
    app_title: 'Connect ideas to the real world',
    app_body:
      'Pick one case, read the linear algebra lens, and write a two-sentence bridge. These are memory anchors, not exercises.',
    app_bridge_title: 'Bridge checklist',
    app_booster_title: 'Learning boosters',
    app_pitfall_title: 'Common pitfalls',
    app_prompt_title: 'Mini prompts',
    topics: [
      {
        tag: 'Foundations',
        title: 'Vectors & geometry',
        body: 'Magnitude, direction, span, and how dot products reveal angles.',
        focus: 'Recall: what does the dot product measure geometrically?'
      },
      {
        tag: 'Systems',
        title: 'Linear systems',
        body: 'Row operations, pivots, and when a system is consistent.',
        focus: 'Recall: what does a pivot column tell you about solutions?'
      },
      {
        tag: 'Structure',
        title: 'Vector spaces',
        body: 'Subspaces, span, basis, and the meaning of dimension.',
        focus: 'Recall: what makes a set a basis?'
      },
      {
        tag: 'Maps',
        title: 'Linear transformations',
        body: 'Matrices as functions that preserve linear combinations.',
        focus: 'Recall: how does a matrix transform a basis?'
      },
      {
        tag: 'Determinants',
        title: 'Determinants',
        body: 'Area/volume scaling and invertibility in one number.',
        focus: 'Recall: what does det(A)=0 mean geometrically?'
      },
      {
        tag: 'Spectral',
        title: 'Eigenvalues & eigenvectors',
        body: 'Directions that stay on their own line after transformation.',
        focus: 'Recall: why do eigenvectors matter in dynamics?'
      },
      {
        tag: 'Orthogonality',
        title: 'Orthogonality & projections',
        body: 'Decompose vectors into perpendicular pieces for clarity.',
        focus: 'Recall: what is the geometric meaning of a projection?'
      },
      {
        tag: 'Decompositions',
        title: 'Matrix factorizations',
        body: 'LU, QR, SVD as lenses for computation and insight.',
        focus: 'Recall: what does SVD tell you about a matrix?'
      },
      {
        tag: 'Approximation',
        title: 'Least squares',
        body: 'Best-fit solutions when exact ones do not exist.',
        focus: 'Recall: why is the error orthogonal to the column space?'
      },
      {
        tag: 'Applications',
        title: 'Data & signals',
        body: 'PCA, compression, and stability through linear structure.',
        focus: 'Recall: how does PCA use eigenvectors?'
      }
    ],
    recall: [
      {
        question: 'What is a basis in one sentence?',
        answer: 'A minimal set of vectors that spans the space and is linearly independent.'
      },
      {
        question: 'When is a linear system Ax=b consistent?',
        answer: 'When b lies in the column space of A (no contradictory row).' 
      },
      {
        question: 'What does the rank of A tell you?',
        answer: 'The dimension of the column space, and the number of pivots.'
      },
      {
        question: 'What does det(A) = 0 imply?',
        answer: 'The transformation collapses volume; A is not invertible.'
      },
      {
        question: 'Why are orthogonal bases convenient?',
        answer: 'Coordinates become independent and projections are easy.'
      },
      {
        question: 'What is an eigenvector?',
        answer: 'A nonzero vector whose direction is preserved by a linear map.'
      },
      {
        question: 'What does the SVD decompose?',
        answer: 'A matrix into rotations/reflections, scaling, and another rotation.'
      },
      {
        question: 'What is the geometric meaning of Ax?',
        answer: 'It is the linear transformation applied to vector x.'
      }
    ],
    formulas: [
      {
        title: 'Dot product',
        body: 'a · b = ||a|| ||b|| cos(θ), measures alignment.'
      },
      {
        title: 'Projection onto u',
        body: 'proj_u(v) = (v·u / u·u) u.'
      },
      {
        title: 'Eigen equation',
        body: 'A v = λ v, with v ≠ 0.'
      },
      {
        title: 'Orthogonal matrix',
        body: 'QᵀQ = I, so Q preserves lengths and angles.'
      },
      {
        title: 'Rank-nullity',
        body: 'rank(A) + nullity(A) = number of columns.'
      },
      {
        title: 'Least squares condition',
        body: 'Aᵀ(Ax) = Aᵀb, error is orthogonal to column space.'
      }
    ],
    connections: [
      'Row space ↔ Column space via transpose',
      'Eigenvectors explain repeated application of a map',
      'SVD generalizes eigen-decomposition for any matrix',
      'Orthogonality simplifies least squares',
      'Determinant encodes volume + orientation',
      'Rank links systems, spaces, and dimensions'
    ],
    steps: [
      {
        title: 'Warm recall (5 min)',
        body: 'Flip 3–5 cards and restate each idea in your own words.'
      },
      {
        title: 'Map the concept',
        body: 'Place the new topic inside the knowledge map: what depends on it?'
      },
      {
        title: 'Work one clean example',
        body: 'Use a tiny 2×2 or 3×3 example to see the geometry.'
      },
      {
        id: 'applications',
        title: 'Connect to applications',
        body: 'Name one real context: data, physics, graphics, or systems.',
        cta: 'Click to open the application room.'
      },
      {
        title: 'Write a summary',
        body: 'Create a two-sentence summary in English, add a Chinese note if helpful.'
      },
      {
        title: 'Mini self-check',
        body: 'Ask: what would break if one assumption changed?'
      }
    ],
    applications: {
      cases: [
        {
          tag: 'Transformations',
          title: 'Computer graphics',
          body: 'Matrices rotate, scale, and project; eigenvectors mark stable directions.'
        },
        {
          tag: 'SVD',
          title: 'Data compression',
          body: 'Singular values rank importance; truncate for low-rank approximation.'
        },
        {
          tag: 'Least squares',
          title: 'Machine learning',
          body: 'Linear regression minimizes squared error; normal equations show geometry.'
        },
        {
          tag: 'Orthogonality',
          title: 'Signal processing',
          body: 'Fourier bases separate frequencies; projections isolate components.'
        },
        {
          tag: 'Eigenvalues',
          title: 'Networks & graphs',
          body: 'Spectral methods reveal clusters and diffusion rates.'
        },
        {
          tag: 'Dynamics',
          title: 'Physics & systems',
          body: 'Eigenvalues describe stability modes; diagonalization simplifies evolution.'
        }
      ],
      bridge: [
        {
          title: 'Identify the objects',
          body: 'What are the vectors, matrices, or linear maps in this story?'
        },
        {
          title: 'Name the space',
          body: 'Are we in column space, row space, or a subspace?'
        },
        {
          title: 'Check invariants',
          body: 'What is preserved: length, angle, volume, rank?'
        },
        {
          title: 'Read columns as actions',
          body: 'Each column shows where a basis vector moves.'
        },
        {
          title: 'Translate to geometry',
          body: 'State the geometric meaning: rotation, projection, scaling.'
        }
      ],
      boosters: [
        {
          title: 'Draw a tiny example',
          body: 'Use a 2×2 or 3×3 matrix to see the shape change.'
        },
        {
          title: 'Dimension sanity check',
          body: 'Verify dimensions before interpreting any equation.'
        },
        {
          title: 'One-sentence summary',
          body: 'Explain the concept without symbols.'
        },
        {
          title: 'Compare cousins',
          body: 'Eigen vs singular values: when do they differ?'
        },
        {
          title: 'What if rank drops?',
          body: 'Predict what information is lost.'
        },
        {
          title: 'Link to a formula',
          body: 'Connect the idea to one formula you can recall.'
        }
      ],
      pitfalls: [
        {
          title: 'Mixing spaces',
          body: 'Row space and column space are different; track which you need.'
        },
        {
          title: 'Eigen vs singular confusion',
          body: 'Eigenvalues need square matrices; SVD works for any matrix.'
        },
        {
          title: 'Hidden assumptions',
          body: 'Invertibility, symmetry, or orthogonality must be stated.'
        },
        {
          title: 'Least squares as exact',
          body: 'It is a best-fit approximation, not a true solution.'
        },
        {
          title: 'Ignoring geometry',
          body: 'Always say what the transformation does visually.'
        }
      ],
      prompts: [
        {
          title: 'Bridge sentence',
          body: '“In this application, the matrix represents …”'
        },
        {
          title: 'Focus question',
          body: 'Which direction is amplified or compressed the most?'
        },
        {
          title: 'Invariant check',
          body: 'What stays unchanged after the transformation?'
        },
        {
          title: 'Data lens',
          body: 'If I keep only top k singular values, what remains?'
        }
      ]
    }
  },
  zh: {
    brand: '线性代数指南针',
    brand_sub: '学概念、做回忆、连接知识地图。',
    hero_title: '你的双语线性代数伙伴',
    hero_body:
      '通过知识点梳理、快速回忆和个人笔记来学习线性代数。',
    hero_cta: '随机今日回忆',
    daily_title: '今日回忆',
    map_title: '知识地图',
    map_body: '整理好的知识点列表。每张卡片都有快速回忆提示。',
    recall_title: '快速回忆卡片',
    recall_body: '点击翻转。用于 60 秒内唤醒概念。',
    formula_title: '核心公式与定义',
    formula_body: '简短、实用的记忆锚点。',
    connections_title: '概念连接',
    connections_body: '看看哪些概念相互依赖，决定下一次复习。',
    plan_title: '学习节奏',
    plan_body: '每周可以重复的小流程。',
    notes_title: '我的线性代数笔记本',
    notes_body: '写下自己的总结或直觉图像，保存在浏览器里。',
    footer: '为安静、专注的学习而设计。可根据课程调整内容。',
    notes_placeholder: '在这里写笔记…',
    recall_tag: '回忆',
    tap_to_flip: '点击翻转',
    app_back: '返回学习节奏',
    app_eyebrow: '应用场景',
    app_title: '把概念连接到真实世界',
    app_body: '选择一个场景，读懂线代视角，然后写两句话的“连接桥”。这是记忆锚点，不是做题。',
    app_bridge_title: '连接清单',
    app_booster_title: '学习助推器',
    app_pitfall_title: '常见误区',
    app_prompt_title: '迷你提示',
    topics: [
      {
        tag: '基础',
        title: '向量与几何',
        body: '模、方向、张成与点积所表达的角度关系。',
        focus: '回忆：点积在几何上衡量什么？'
      },
      {
        tag: '方程组',
        title: '线性方程组',
        body: '行变换、主元、何时有解。',
        focus: '回忆：主元列告诉你什么？'
      },
      {
        tag: '结构',
        title: '向量空间',
        body: '子空间、张成、基与维数。',
        focus: '回忆：基的两个条件是什么？'
      },
      {
        tag: '映射',
        title: '线性变换',
        body: '矩阵是保持线性组合的函数。',
        focus: '回忆：矩阵对基向量意味着什么？'
      },
      {
        tag: '行列式',
        title: '行列式',
        body: '体积缩放与可逆性的一句描述。',
        focus: '回忆：det(A)=0 在几何上意味着？'
      },
      {
        tag: '特征',
        title: '特征值与特征向量',
        body: '变换后方向不变的向量。',
        focus: '回忆：为什么特征向量在动力系统中重要？'
      },
      {
        tag: '正交',
        title: '正交与投影',
        body: '把向量分解为互相垂直的部分。',
        focus: '回忆：投影的几何意义是什么？'
      },
      {
        tag: '分解',
        title: '矩阵分解',
        body: 'LU、QR、SVD 提供计算与理解的视角。',
        focus: '回忆：SVD 能告诉你什么？'
      },
      {
        tag: '逼近',
        title: '最小二乘',
        body: '无精确解时的最佳拟合。',
        focus: '回忆：误差为何与列空间正交？'
      },
      {
        tag: '应用',
        title: '数据与信号',
        body: 'PCA、压缩与稳定性。',
        focus: '回忆：PCA 如何利用特征向量？'
      }
    ],
    recall: [
      {
        question: '一句话描述什么是基？',
        answer: '最小的张成集合，且向量线性无关。'
      },
      {
        question: '什么时候 Ax=b 有解？',
        answer: '当 b 在 A 的列空间里（没有矛盾行）。'
      },
      {
        question: '秩告诉你什么？',
        answer: '列空间的维数，也等于主元数量。'
      },
      {
        question: 'det(A)=0 说明什么？',
        answer: '体积被压扁，矩阵不可逆。'
      },
      {
        question: '为什么正交基很方便？',
        answer: '坐标彼此独立，投影公式简单。'
      },
      {
        question: '什么是特征向量？',
        answer: '经过线性变换后方向不变的非零向量。'
      },
      {
        question: 'SVD 在做什么？',
        answer: '把矩阵分成旋转/反射 + 缩放 + 再旋转。'
      },
      {
        question: 'Ax 的几何意义？',
        answer: '线性变换作用在向量 x 上。'
      }
    ],
    formulas: [
      {
        title: '点积',
        body: 'a · b = ||a|| ||b|| cos(θ)，表示方向一致程度。'
      },
      {
        title: '投影到 u',
        body: 'proj_u(v) = (v·u / u·u) u。'
      },
      {
        title: '特征方程',
        body: 'A v = λ v，v ≠ 0。'
      },
      {
        title: '正交矩阵',
        body: 'QᵀQ = I，保持长度与角度。'
      },
      {
        title: '秩-零度定理',
        body: 'rank(A) + nullity(A) = 列数。'
      },
      {
        title: '最小二乘条件',
        body: 'Aᵀ(Ax) = Aᵀb，误差与列空间正交。'
      }
    ],
    connections: [
      '行空间 ↔ 列空间（转置连接）',
      '特征向量解释重复变换的行为',
      'SVD 将特征分解推广到任意矩阵',
      '正交让最小二乘更清晰',
      '行列式体现体积与方向',
      '秩连接方程组、空间与维数'
    ],
    steps: [
      {
        title: '热身回忆（5 分钟）',
        body: '翻 3–5 张卡片，用自己的话复述。'
      },
      {
        title: '定位概念',
        body: '把新概念放进知识地图：依赖哪些内容？'
      },
      {
        title: '做一个小例子',
        body: '用 2×2 或 3×3 例子理解几何意义。'
      },
      {
        id: 'applications',
        title: '连接应用',
        body: '说出一个实际场景：数据、物理、图形或系统。',
        cta: '点击进入应用场景。'
      },
      {
        title: '写总结',
        body: '用英文写两句话，再补充中文提示。'
      },
      {
        title: '小自检',
        body: '想想：若一个假设改变，会发生什么？'
      }
    ],
    applications: {
      cases: [
        {
          tag: '变换',
          title: '计算机图形',
          body: '矩阵做旋转、缩放、投影；特征向量是稳定方向。'
        },
        {
          tag: 'SVD',
          title: '数据压缩',
          body: '奇异值衡量重要性，截断得到低秩近似。'
        },
        {
          tag: '最小二乘',
          title: '机器学习',
          body: '线性回归最小化平方误差，法方程体现几何。'
        },
        {
          tag: '正交',
          title: '信号处理',
          body: '傅里叶基分离频率，投影隔离成分。'
        },
        {
          tag: '特征值',
          title: '网络与图',
          body: '谱方法发现聚类与扩散速度。'
        },
        {
          tag: '动力学',
          title: '物理与系统',
          body: '特征值描述稳定模式，对角化简化演化。'
        }
      ],
      bridge: [
        {
          title: '识别对象',
          body: '这里的向量、矩阵或线性映射是什么？'
        },
        {
          title: '命名空间',
          body: '是在列空间、行空间还是子空间？'
        },
        {
          title: '看不变量',
          body: '保持什么：长度、角度、体积、秩？'
        },
        {
          title: '列向量动作',
          body: '每一列代表基向量被映射到哪里。'
        },
        {
          title: '几何翻译',
          body: '用“旋转/投影/缩放”等词描述。'
        }
      ],
      boosters: [
        {
          title: '画一个小例子',
          body: '用 2×2 或 3×3 观察形状变化。'
        },
        {
          title: '维度检查',
          body: '先检查维度再解释公式。'
        },
        {
          title: '一句话总结',
          body: '不用符号也能说明白。'
        },
        {
          title: '对比近亲',
          body: '特征值 vs 奇异值，何时不同？'
        },
        {
          title: '秩下降会怎样',
          body: '预测丢失的信息。'
        },
        {
          title: '绑定公式',
          body: '把概念对应到一个公式。'
        }
      ],
      pitfalls: [
        {
          title: '空间混淆',
          body: '行空间和列空间不同；明确你需要哪一个。'
        },
        {
          title: '特征/奇异混淆',
          body: '特征值要求方阵，SVD 适用于任意矩阵。'
        },
        {
          title: '假设缺失',
          body: '可逆、对称、正交等条件必须说明。'
        },
        {
          title: '最小二乘当作精确解',
          body: '它是最佳拟合，不是真解。'
        },
        {
          title: '忽略几何',
          body: '总要说清变换的视觉意义。'
        }
      ],
      prompts: [
        {
          title: '连接句',
          body: '“在这个应用里，矩阵表示……”'
        },
        {
          title: '聚焦问题',
          body: '哪个方向被放大或压缩得最多？'
        },
        {
          title: '不变量',
          body: '变换后什么保持不变？'
        },
        {
          title: '数据视角',
          body: '只保留前 k 个奇异值后还剩下什么？'
        }
      ]
    }
  }
};

const state = {
  lang: localStorage.getItem('lang') || 'en'
};

const els = {
  topicGrid: document.getElementById('topic-grid'),
  recallGrid: document.getElementById('recall-grid'),
  formulaList: document.getElementById('formula-list'),
  connections: document.getElementById('connections'),
  studySteps: document.getElementById('study-steps'),
  dailyQuestion: document.getElementById('daily-question'),
  dailyAnswer: document.getElementById('daily-answer'),
  notes: document.getElementById('notes'),
  shuffle: document.getElementById('shuffle-review'),
  appView: document.getElementById('applications-view'),
  appBack: document.getElementById('app-back'),
  appCases: document.getElementById('app-cases'),
  appBridge: document.getElementById('app-bridge'),
  appBoosters: document.getElementById('app-boosters'),
  appPitfalls: document.getElementById('app-pitfalls'),
  appPrompts: document.getElementById('app-prompts')
};

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    node.textContent = i18n[lang][key];
  });
  els.notes.placeholder = i18n[lang].notes_placeholder;
  renderSections();
  setActiveToggle();
}

function setActiveToggle() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === state.lang);
  });
}

function renderSections() {
  const content = i18n[state.lang];

  els.topicGrid.innerHTML = '';
  content.topics.forEach((topic, idx) => {
    const card = document.createElement('div');
    card.className = 'card reveal';
    card.style.animationDelay = `${idx * 60}ms`;
    card.innerHTML = `
      <div class="card-tag">${topic.tag}</div>
      <div class="card-title">${topic.title}</div>
      <div class="card-body">${topic.body}</div>
      <div class="card-body" style="margin-top:12px; color: var(--sea);">${topic.focus}</div>
    `;
    els.topicGrid.appendChild(card);
  });

  els.recallGrid.innerHTML = '';
  content.recall.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'card flip-card reveal';
    card.style.animationDelay = `${idx * 60}ms`;
    card.innerHTML = `
      <div class="card-tag">${content.recall_tag}</div>
      <div class="card-question">${item.question}</div>
      <div class="card-answer">${item.answer}</div>
      <div class="card-body">${content.tap_to_flip}</div>
    `;
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
    els.recallGrid.appendChild(card);
  });

  els.formulaList.innerHTML = '';
  content.formulas.forEach((formula, idx) => {
    const item = document.createElement('div');
    item.className = 'list-item reveal';
    item.style.animationDelay = `${idx * 60}ms`;
    item.innerHTML = `
      <div class="list-title">${formula.title}</div>
      <div class="list-body">${formula.body}</div>
    `;
    els.formulaList.appendChild(item);
  });

  els.connections.innerHTML = '';
  content.connections.forEach((text, idx) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.style.animationDelay = `${idx * 40}ms`;
    chip.textContent = text;
    els.connections.appendChild(chip);
  });

  els.studySteps.innerHTML = '';
  content.steps.forEach((step, idx) => {
    const item = document.createElement('div');
    const isAppStep = step.id === 'applications';
    item.className = `step reveal${isAppStep ? ' clickable' : ''}`;
    item.style.animationDelay = `${idx * 60}ms`;
    if (step.id) {
      item.dataset.step = step.id;
    }
    item.innerHTML = `
      <div class="step-title">${step.title}</div>
      <div class="step-body">${step.body}</div>
      ${step.cta ? `<div class="step-cta">${step.cta}</div>` : ''}
    `;
    if (isAppStep) {
      item.addEventListener('click', openApplications);
    }
    els.studySteps.appendChild(item);
  });

  renderApplications();
  shuffleDaily();
}

function renderList(target, items) {
  target.innerHTML = '';
  items.forEach((item, idx) => {
    const node = document.createElement('div');
    node.className = 'list-item reveal';
    node.style.animationDelay = `${idx * 60}ms`;
    node.innerHTML = `
      <div class="list-title">${item.title}</div>
      <div class="list-body">${item.body}</div>
    `;
    target.appendChild(node);
  });
}

function renderApplications() {
  const content = i18n[state.lang];
  const data = content.applications;
  if (!data) return;

  els.appCases.innerHTML = '';
  data.cases.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'app-card reveal';
    card.style.animationDelay = `${idx * 60}ms`;
    card.innerHTML = `
      <div class="card-tag">${item.tag}</div>
      <div class="card-title">${item.title}</div>
      <div class="card-body">${item.body}</div>
    `;
    els.appCases.appendChild(card);
  });

  renderList(els.appBridge, data.bridge);
  renderList(els.appBoosters, data.boosters);
  renderList(els.appPitfalls, data.pitfalls);

  els.appPrompts.innerHTML = '';
  data.prompts.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'app-card reveal';
    card.style.animationDelay = `${idx * 60}ms`;
    card.innerHTML = `
      <div class="card-title">${item.title}</div>
      <div class="card-body">${item.body}</div>
    `;
    els.appPrompts.appendChild(card);
  });
}

function openApplications() {
  document.body.classList.add('app-open');
  els.appView.setAttribute('aria-hidden', 'false');
  renderApplications();
}

function closeApplications() {
  document.body.classList.remove('app-open');
  els.appView.setAttribute('aria-hidden', 'true');
}

function shuffleDaily() {
  const content = i18n[state.lang];
  const pick = content.recall[Math.floor(Math.random() * content.recall.length)];
  els.dailyQuestion.textContent = pick.question;
  els.dailyAnswer.textContent = pick.answer;
}

els.shuffle.addEventListener('click', shuffleDaily);
els.appBack.addEventListener('click', closeApplications);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.classList.contains('app-open')) {
    closeApplications();
  }
});

els.notes.value = localStorage.getItem('la_notes') || '';
els.notes.addEventListener('input', (event) => {
  localStorage.setItem('la_notes', event.target.value);
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  setLanguage(state.lang);
});
