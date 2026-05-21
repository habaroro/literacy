/* ── IMAGES ── */
window.IMG = {
    chaek: "img/chaek.png",
    momo: "img/momo.png",
    meora: "img/meora.png",
    moon: "img/moon.png",
    feedback: "img/feedback.png",
    line: "img/line.png",
    story: "img/story.png"
};

/* ── CHARACTERS ── */
window.CHARACTERS = [
    { id: "chaekchaekie", name: "책책이", role: "연결자", img: window.IMG.chaek, ring: "#81C784" },
    { id: "momo", name: "모모", role: "응원단", img: window.IMG.momo, ring: "#F48FB1" },
    { id: "meora", name: "머라카노사우르스", role: "단어 박사", img: window.IMG.meora, ring: "#FFD54F" },
    { id: "moonbaksa", name: "문박사", role: "질문자", img: window.IMG.moon, ring: "#90CAF9" },
];

/* ── BOOK EXCERPT ── */
window.BOOK_EXCERPT = "배가 고팠던 호랑이는 맛있는 냄새를 따라 아이들이 있는 산골 집에 도착했지.";

/* ── SENTENCE POOL ── */
window.SENTENCE_POOL = {
    intro: {
        base: '어느 가을날 밤, 조용한 산골 마을에서 이야기가 시작됐어요.',
        fun: '자, 이제 깜짝 놀랄 만큼 신나는 이야기가 펼쳐질 거예요!',
        tense: '어둠이 산을 뒤덮던 그날 밤, 무언가가 천천히 다가오고 있었어요.',
        warm: '달빛이 포근하게 내려앉은 고요한 가을밤이었어요.',
    },
    words: {
        '호랑이': {
            base: '배가 고팠던 호랑이는 맛있는 냄새를 따라 산길을 어슬렁거렸어요.',
            fun: '호랑이는 배에서 \'꼬르륵!\' 소리를 내며 두 눈을 반짝였지요.',
            tense: '호랑이의 커다란 발소리가 점점, 점점 가까워졌어요.',
            warm: '사실 호랑이도 그 따뜻한 냄새가 너무나 그리웠던 거였어요.',
        },
        '창호지': {
            base: '창호지 문 너머로 아이들의 작은 숨소리가 들렸어요.',
            fun: '창호지에 비친 커다란 그림자를 보고 오빠는 배꼽을 잡았지요!',
            tense: '창호지 문이 부들부들 흔들릴 때마다 심장이 쿵 내려앉았어요.',
            warm: '창호지 문 사이로 새어 드는 달빛이 두 아이를 포근히 감쌌어요.',
        },
        '산골집': {
            base: '산골집은 그날 밤 작지만 용감한 요새가 되었어요.',
            fun: '산골집에서 들려오는 소동에 숲속 동물들도 귀를 쫑긋 세웠어요.',
            tense: '산골집을 둘러싼 숲이 숨을 죽인 채 고요히 기다리고 있었어요.',
            warm: '산골집의 작은 화롯불이 두 아이를 따뜻하게 지켜 주었어요.',
        },
        '부부': {
            base: '부부는 이튿날 아이들의 이야기를 듣고 크게 놀랐어요.',
            fun: '부부는 \'이런, 우리 용감한 아이들!\' 하며 배를 잡고 웃었어요.',
            tense: '부부가 없는 집, 두 아이는 오직 서로만 의지해야 했어요.',
            warm: '부부는 돌아오자마자 두 아이를 꼭 안으며 눈물을 흘렸어요.',
        },
        '오빠': {
            base: '오빠는 영리한 바늘 작전으로 동생을 씩씩하게 지켜냈어요.',
            fun: '오빠는 \'간질간질 작전 시작!\' 을 외치며 의기양양하게 나섰어요.',
            tense: '오빠는 온 힘을 다해 떨리는 마음을 꾹 누르며 버텼어요.',
            warm: '오빠는 동생의 손을 꼭 쥐며 \'내가 지켜줄게\' 라고 속삭였어요.',
        },
        '감자': {
            base: '화롯불에 달궈진 감자 냄새가 집 안 가득 퍼져 나갔어요.',
            fun: '감자 냄새에 홀린 호랑이는 코를 킁킁대다가 앞발을 찔리고 말았지요!',
            tense: '탁탁 타오르는 화롯불 위 감자만이 긴 침묵을 깨고 있었어요.',
            warm: '호호 불어가며 나눠 먹는 감자가 그 어느 때보다 달고 포근했어요.',
        },
        '남매': {
            base: '남매는 힘을 합쳐 무서운 밤을 씩씩하게 넘겼어요.',
            fun: '남매는 결국 배를 잡고 깔깔대며 서로의 얼굴을 바라봤어요.',
            tense: '남매는 서로를 꼭 붙들고 마지막까지 포기하지 않았어요.',
            warm: '남매는 서로의 온기로 기나긴 밤을 오롯이 함께 버텨냈어요.',
        },
    },
    outro: {
        base: '그날의 이야기는 오래도록 두 아이의 마음속에 남았답니다.',
        fun: '정말 잊지 못할 대소동이었죠? 다음 편도 기대해 주세요!',
        tense: '마침내 새벽빛이 산 너머로 밝아오자, 모든 것이 끝났어요.',
        warm: '그 밤 이후로, 남매의 가슴속에는 따뜻한 용기 한 조각이 영원히 남았어요.',
    },
};

window.generateStory = function (chosen, tone) {
    const t = tone || 'base';
    const parts = [];
    (chosen || []).forEach(word => {
        if (window.SENTENCE_POOL.words[word]) parts.push(window.SENTENCE_POOL.words[word][t]);
    });
    parts.push(window.SENTENCE_POOL.outro[t]);
    return parts.join(' ');
};

window.TONE_OPTIONS = [
    { id: "fun", icon: "img/icon_01.png", label: "더 재미있고 유쾌하게", desc: "통통 튀는 이야기로!" },
    { id: "tense", icon: "img/icon_02.png", label: "더 긴장감 넘치게", desc: "두근두근 스릴 가득!" },
    { id: "warm", icon: "img/icon_03.png", label: "더 따뜻하고 뭉클하게", desc: "가슴이 뭉클해지는 이야기로" },
];

/* ── GRID DATA ── */
window.GRID_DATA = {
    cells: [
        ['창', '두', '화', '무', '들', '산', '마'],
        ['호', '랑', '이', '야', '고', '골', '들'],
        ['지', '새', '마', '우', '무', '집', '화'],
        ['들', '무', '고', '화', '마', '두', '들'],
        ['무', '감', '자', '새', '들', '마', '남'],
        ['들', '화', '마', '들', '무', '화', '매'],
        ['무', '부', '부', '마', '오', '빠', '새'],
    ],
    targets: [
        { word: '창호지', cells: [[0, 0], [1, 0], [2, 0]], color: '#7C3AED', bg: '#EDE9FE', label: '사물' },
        { word: '호랑이', cells: [[1, 0], [1, 1], [1, 2]], color: '#E11D48', bg: '#FFE4E6', label: '인물' },
        { word: '산골집', cells: [[0, 5], [1, 5], [2, 5]], color: '#4361EE', bg: '#EEF0FF', label: '배경' },
        { word: '감자', cells: [[4, 1], [4, 2]], color: '#EA580C', bg: '#FED7AA', label: '사건' },
        { word: '남매', cells: [[4, 6], [5, 6]], color: '#D97706', bg: '#FEF3C7', label: '관계' },
        { word: '부부', cells: [[6, 1], [6, 2]], color: '#DB2777', bg: '#FCE7F3', label: '관계' },
        { word: '오빠', cells: [[6, 4], [6, 5]], color: '#0284C7', bg: '#E0F2FE', label: '인물' },
    ],
};

/* ── CROSSWORD DATA ── */
window.CW = {
    cols: 8,
    rows: 5,
    cells: (() => {
        const a = Array(40).fill(null);
        const idx = (r, c) => r * 8 + c;
        a[idx(0, 0)] = { kind: 'blank', id: 'b_cha', expected: '창', word: '창호지' };
        a[idx(1, 0)] = { kind: 'fixed', syl: '호' };
        a[idx(2, 0)] = { kind: 'fixed', syl: '지' };
        a[idx(1, 1)] = { kind: 'blank', id: 'b_rang', expected: '랑', word: '호랑이' };
        a[idx(1, 2)] = { kind: 'fixed', syl: '이' };
        a[idx(0, 4)] = { kind: 'blank', id: 'b_san', expected: '산', word: '산골집' };
        a[idx(1, 4)] = { kind: 'fixed', syl: '골' };
        a[idx(2, 4)] = { kind: 'fixed', syl: '집' };
        a[idx(1, 6)] = { kind: 'blank', id: 'b_o', expected: '오', word: '오빠' };
        a[idx(1, 7)] = { kind: 'fixed', syl: '빠' };
        a[idx(4, 0)] = { kind: 'blank', id: 'b_bu', expected: '부', word: '부부' };
        a[idx(4, 1)] = { kind: 'fixed', syl: '부' };
        a[idx(4, 3)] = { kind: 'blank', id: 'b_gam', expected: '감', word: '감자' };
        a[idx(4, 4)] = { kind: 'fixed', syl: '자' };
        a[idx(4, 6)] = { kind: 'blank', id: 'b_nam', expected: '남', word: '남매' };
        a[idx(4, 7)] = { kind: 'fixed', syl: '매' };
        return a;
    })(),
    cards: [
        { id: 'c5', syl: '오' }, { id: 'c8', syl: '두' }, { id: 'c3', syl: '산' }, { id: 'c6', syl: '감' },
        { id: 'c2', syl: '랑' }, { id: 'c7', syl: '남' }, { id: 'c4', syl: '부' },
        { id: 'c9', syl: '무' }, { id: 'c1', syl: '창' }, { id: 'c10', syl: '화' },
    ],
    hints: [
        '🐯 산속 동물 「호 ⬚ 이」',
        '📜 문에 바르는 종이 「⬚ 호지」',
        '🏠 산속 작은 집 「⬚ 골집」',
        '👫 결혼한 두 사람 「⬚ 부」',
        '👦 동생을 지킨 「⬚ 빠」',
        '🥔 화롯불에 구운 「⬚ 자」',
        '👫 오누이를 다른 말로 「⬚ 매」',
    ],
    wordMap: { b_cha: '창호지', b_rang: '호랑이', b_san: '산골집', b_bu: '부부', b_o: '오빠', b_gam: '감자', b_nam: '남매' },
};

/* ── FEEDBACK COMMENTS ── */
window.getDynamicComments = function (chosen, tone) {
    const words = chosen && chosen.length > 0 ? chosen : ['호랑이', '창호지', '산골집'];
    const t = tone || 'base';
    let chaekText = "";
    if (words.includes('호랑이')) {
        chaekText = `이야기 속에 '호랑이'가 나오는 걸 보니 우리 옛이야기 '팥죽 할멈과 호랑이'가 떠올라! 거기서도 약한 친구들이 힘을 합쳐 무서운 호랑이를 물리쳤거든 📚`;
    } else if (words.includes('남매') || words.includes('오빠')) {
        chaekText = `남매가 서로를 지켜주는 용기 있는 모습이 전래동화 '해와 달이 된 오누이' 이야기랑 아주 비슷해! 서로를 믿는 힘이 느껴지는 책 한 편을 읽은 것 같아 📚`;
    } else {
        const wordList = words.slice(0, 2).join('와(과) ');
        chaekText = `네가 고른 '${wordList}' 단어들로 완성한 문장을 읽으니, 옛날 우리 조상들의 지혜가 담긴 따뜻한 옛날이야기 책이 생각나는구나 📚`;
    }
    let momoText = "";
    const wordListMomo = words.map(w => `'${w}'`).join(', ');
    if (t === 'fun') {
        momoText = `꺄아아 너무 유쾌해!! 😂 ${wordListMomo} 단어들로 만화 영화처럼 신나는 장면을 그려내다니 센스가 대단해! 깔깔 웃으면서 끝까지 읽었어 🌟🎉`;
    } else if (t === 'tense') {
        momoText = `우와아... 심장이 진짜 쿵쾅거렸어! 😳 ${wordListMomo} 단어가 어우러져서 조마조마한 긴장감이 백배가 되었어! 너 정말 긴장감 넘치는 스토리를 잘 쓰는구나! 🌟🔥`;
    } else if (t === 'warm') {
        momoText = `아아 너무 따스해... 🥺 ${wordListMomo} 단어로 빚어낸 포근하고 뭉클한 사랑 덕분에 내 가슴까지 말랑말랑 훈훈해지는 기분이야! 🌟💕`;
    } else {
        momoText = `우와아!! ${wordListMomo} 단어들의 조합이 정말 센스 넘쳐! 단어들을 엮어낸 문장이 너무 귀엽고 찰떡같아서 한참 동안 즐겁게 읽었어! 🌟💕`;
    }
    let meoraText = "";
    const focusWord = words[0] || '호랑이';
    if (focusWord === '창호지') meoraText = `'창호지'는 옛날 우리 전통 문에 붙이던 한지란다. 얇지만 겨울바람을 막아주고 달빛이 문 너머로 은은하게 비치도록 돕는 지혜가 담긴 종이지 🦕`;
    else if (focusWord === '산골집') meoraText = `'산골집'은 깊은 산속 외딴곳에 지어진 소박한 집을 뜻한단다. 고즈넉하고 자연과 하나 되는 풍경을 담은 아름다운 순우리말 단어야 🦕`;
    else if (focusWord === '남매') meoraText = `'남매'는 누이와 남자 형제를 아울러 이르는 정다운 말이란다. 너의 이야기 속에서도 서로를 배려하는 따스한 정이 듬뿍 느껴지는구나 🦕`;
    else if (focusWord === '부부') meoraText = `'부부'는 남편과 아내를 아울러 이르는 말이란다. 서로 인생의 든든한 동반자가 되어 깊은 신뢰와 사랑을 나누는 소중한 사이를 뜻하지 🦕`;
    else if (focusWord === '감자') meoraText = `'감자'는 땅속에서 풍성하게 자라나는 구황작물이란다. 추운 겨울이나 배고픈 시절에 우리 조상들의 배를 든든하게 채워주던 고마운 식량이었지 🦕`;
    else if (focusWord === '호랑이') meoraText = `'호랑이'는 아주 오랜 옛날부터 전래동화에 가장 단골로 등장하며, 무섭기도 하지만 때로는 신령스럽고 친근하게 묘사되는 고유의 동물이지 🦕`;
    else if (focusWord === '오빠') meoraText = `'오빠'는 여동생이 자기보다 나이가 많은 남자 형제를 정답게 부르는 호칭이란다. 동생을 든든하게 지켜주려는 믿음직함이 느껴지는구나 🦕`;
    else meoraText = `네가 문장에 잘 녹여낸 '${focusWord}' 단어는 글의 분위기를 살려주는 훌륭한 핵심어였어! 이야기의 뼈대를 튼튼하게 만들어 준 일등 공신이란다 🦕`;
    let moonText = "";
    const word1 = words[0] || '호랑이';
    const word2 = words[1] || '창호지';
    if (t === 'fun') moonText = `만약 이야기 속 '${word1}'가(이) 갑자기 날개를 달고 날아가 버렸다면 어떤 우스꽝스러운 소동이 벌어졌을까? 상상만 해도 재미있는 그 다음 장면을 떠올려봐! 🔍`;
    else if (t === 'tense') moonText = `'${word1}'와(과) '${word2}' 사이에서 예상치 못한 반전이나 또 다른 인물이 숨어있었다면 긴장감이 어떻게 바뀌었을까? 심장이 졸깃해지는 순간을 그려봐! 🔍`;
    else if (t === 'warm') moonText = `이야기가 끝난 후, 아이들이 '${word1}'를(을) 품에 안고 활짝 웃었을 때 부모님은 어떤 표정이셨을까? 가장 사랑스러운 가족의 얼굴을 상상해보자! 🔍`;
    else moonText = `만약 이야기 속에 나온 '${word1}'가(이) 말을 하거나 특별한 요술을 부릴 수 있었다면 어떤 대화가 오갔을까? 주인공들의 입장이 되어서 창의적인 생각을 펼쳐봐! 🔍`;
    return { chaekchaekie: chaekText, momo: momoText, meora: meoraText, moonbaksa: moonText };
};

/* ── STATE HELPERS (sessionStorage) ── */
window.AppState = {
    get(key, fallback) {
        try {
            const v = sessionStorage.getItem(key);
            return v ? JSON.parse(v) : fallback;
        } catch (e) { return fallback; }
    },
    set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    reset() {
        sessionStorage.clear();
    }
};

/* ── HEADER (shared step nav) ── */
window.StepHeader = function ({ stepIdx }) {
    const { useState } = React;
    const goTo = (i) => {
        if (i === 0) location.href = 'step1.html';
        else if (i === 1) location.href = 'step2.html';
        else if (i === 2) location.href = 'step3.html';
    };
    const handleReset = () => {
        window.AppState.reset();
        location.href = 'index.html';
    };
    return (
        React.createElement('header', { style: { background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--gray-light)', padding: '0 32px', position: 'sticky', top: 0, zIndex: 100 } },
            React.createElement('div', { style: { maxWidth: 1376, margin: '0 auto', height: window.innerHeight < 800 ? 56 : 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
                React.createElement('span', { className: 'font-h', style: { color: 'var(--navy-dark)', fontSize: window.innerHeight < 800 ? 18 : 20, flexShrink: 0, whiteSpace: 'nowrap' } }, '🐯 방아 찧는 호랑이'),
                React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0 } },
                    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 12 } },
                        ['단어 플레이', '문장 플레이', 'AI 피드백'].map((l, i) =>
                            React.createElement(React.Fragment, { key: i },
                                React.createElement('div', {
                                    style: { display: 'flex', alignItems: 'center', gap: 8, color: stepIdx >= i ? 'var(--blue)' : '#CBD5E1', cursor: 'pointer', flexShrink: 0 },
                                    onClick: () => goTo(i)
                                },
                                    React.createElement('div', { style: { width: 28, height: 28, minWidth: 28, minHeight: 28, flexShrink: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, background: stepIdx >= i ? 'var(--blue)' : 'var(--gray-light)', color: stepIdx >= i ? '#fff' : '#94A3B8', boxShadow: stepIdx >= i ? '0 4px 12px rgba(79,70,229,0.2)' : 'none', transition: 'all 0.3s' } }, i + 1),
                                    React.createElement('span', { style: { fontSize: 15, fontWeight: 700, whiteSpace: 'nowrap' } }, l)
                                ),
                                i < 2 && React.createElement('div', { style: { width: 32, height: 2, flexShrink: 0, borderRadius: 2, background: stepIdx > i ? 'var(--blue)' : 'var(--gray-light)', transition: 'background 0.3s' } })
                            )
                        )
                    ),
                    React.createElement('button', {
                        className: 'font-h',
                        onClick: handleReset,
                        style: { display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(13, 148, 136, 0.08)', border: '1.5px solid rgba(13, 148, 136, 0.2)', color: '#0D9488', padding: '8px 16px', borderRadius: 16, fontSize: 14, cursor: 'pointer', transition: 'all 0.2s ease' },
                        onMouseEnter: e => { e.currentTarget.style.background = '#0D9488'; e.currentTarget.style.color = '#FFF'; },
                        onMouseLeave: e => { e.currentTarget.style.background = 'rgba(13, 148, 136, 0.08)'; e.currentTarget.style.color = '#0D9488'; }
                    }, '↺ 처음부터 다시하기')
                )
            )
        )
    );
};

/* ── FULLSCREEN SUPPORT ── */
window.requestAppFullscreen = function() {
    const docEl = document.documentElement;
    const doc = document;
    
    // 이미 전체화면 모드인지 검증 (표준 및 브라우저 엔진별 속성 대응)
    if (!doc.fullscreenElement && !doc.webkitFullscreenElement && !doc.mozFullScreenElement && !doc.msFullscreenElement) {
        if (docEl.requestFullscreen) {
            docEl.requestFullscreen().catch(err => {});
        } else if (docEl.webkitRequestFullscreen) {
            docEl.webkitRequestFullscreen().catch(err => {});
        } else if (docEl.mozRequestFullScreen) {
            docEl.mozRequestFullScreen().catch(err => {});
        } else if (docEl.msRequestFullscreen) {
            docEl.msRequestFullscreen();
        }
    }
};






