/* ── IMAGES (게임 내에서 사용할 이미지 경로 정의) ── */
window.IMG = {
    chaek: "img/chaek.png",
    momo: "img/momo.png",
    meora: "img/meora.png",
    moon: "img/moon.png",
    feedback: "img/feedback.png",
    line: "img/line.png",
    story: "img/story.png"
};

/* ── CHARACTERS (피드백 화면에 등장할 캐릭터들의 정보) ── */
window.CHARACTERS = [
    { id: "chaekchaekie", name: "책책이", role: "연결자", img: window.IMG.chaek, ring: "#81C784" },
    { id: "momo", name: "모모", role: "응원단", img: window.IMG.momo, ring: "#F48FB1" },
    { id: "meora", name: "머라카노사우르스", role: "단어 박사", img: window.IMG.meora, ring: "#FFD54F" },
    { id: "moonbaksa", name: "문박사", role: "질문자", img: window.IMG.moon, ring: "#90CAF9" },
];

/* ── BOOK EXCERPT (교재에서 발췌한 기본 문장) ── */
window.BOOK_EXCERPT = "배가 고팠던 호랑이는 맛있는 냄새를 따라 아이들이 있는 산골 집에 도착했지.";

/* ── SENTENCE POOL (AI가 동화 이야기를 만들 때 사용할 문장 꾸러미) ── */
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

/* ── STORY GENERATOR (선택된 단어와 어조에 맞춰 이야기를 완성하는 함수) ── */
window.generateStory = function (chosen, tone) {
    const t = tone || 'base';
    const parts = [];
    (chosen || []).forEach(word => {
        if (window.SENTENCE_POOL.words[word]) parts.push(window.SENTENCE_POOL.words[word][t]);
    });
    parts.push(window.SENTENCE_POOL.outro[t]);
    return parts.join(' ');
};

/* ── TONE OPTIONS (이야기 어조 선택지 구성) ── */
window.TONE_OPTIONS = [
    { id: "fun", icon: "img/icon_01.png", label: "더 재미있고 유쾌하게", desc: "통통 튀는 이야기로!" },
    { id: "tense", icon: "img/icon_02.png", label: "더 긴장감 넘치게", desc: "두근두근 스릴 가득!" },
    { id: "warm", icon: "img/icon_03.png", label: "더 따뜻하고 뭉클하게", desc: "가슴이 뭉클해지는 이야기로" },
];

/* ── GRID DATA (첫 번째 단어 찾기 게임에서 쓰이는 7x7 글자판 정보) ── */
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

/* ── CROSSWORD DATA (두 번째 빈칸 십자말풀이 게임에서 쓰이는 정보) ── */
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
    // 화면에 보여줄 낱글자 카드 목록
    cards: [
        { id: 'c5', syl: '오' }, { id: 'c8', syl: '두' }, { id: 'c3', syl: '산' }, { id: 'c6', syl: '감' },
        { id: 'c2', syl: '랑' }, { id: 'c7', syl: '남' }, { id: 'c4', syl: '부' },
        { id: 'c9', syl: '무' }, { id: 'c1', syl: '창' }
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

/* ── FEEDBACK COMMENTS (네 가지 캐릭터들이 남겨줄 동적 AI 피드백 텍스트 생성) ── */
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

/* ── STATE HELPERS (sessionStorage를 사용하여 게임 진행 상황 유지) ── */
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

/* ── HEADER (화면 상단에 노출될 스텝 네비게이션 헤더 바) ── */
window.StepHeader = function ({ stepIdx }) {
    const { useState, useEffect } = React;
    
    // 사운드 상태는 localStorage와 연동하여 상태를 정의합니다 (기본값: 켜짐)
    const [isMuted, setIsMuted] = useState(() => {
        return localStorage.getItem('app_sound_enabled') === 'false';
    });

    // 다른 창이나 탭에서 소리 설정을 변경했을 때 동기화되도록 리스너를 설정합니다.
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'app_sound_enabled') {
                setIsMuted(e.newValue === 'false');
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    // 소리 제어 버튼 클릭 시 호출되는 함수입니다.
    const toggleMute = () => {
        const nextMuted = !isMuted;
        setIsMuted(nextMuted);
        if (window.SoundEffects) {
            window.SoundEffects.setEnabled(!nextMuted);
            if (!nextMuted) {
                // 음소거 해제 시 '뿅' 소리를 들려주어 켜졌음을 인지시킵니다.
                window.SoundEffects.play('click');
            }
        }
    };

    const goTo = (i) => {
        if (window.SoundEffects) window.SoundEffects.play('click');
        if (i === 0) location.href = 'step1.html';
        else if (i === 1) location.href = 'step2.html';
        else if (i === 2) location.href = 'step3.html';
    };
    const handleReset = () => {
        if (window.SoundEffects) window.SoundEffects.play('reset');
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
                        onMouseLeave: e => { e.currentTarget.style.background = 'rgba(13, 148, 136, 0.08)'; e.currentTarget.style.color = '#0D9488' }
                    }, '↺ 처음부터 다시하기'),
                    // 🔊 사운드 ON/OFF 제어 토글 버튼 (동그란 형태, 헤더의 가장 우측에 위치)
                    React.createElement('button', {
                        onClick: toggleMute,
                        title: isMuted ? '소리 켜기' : '소리 끄기',
                        style: {
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            border: isMuted ? '1.5px solid #CBD5E1' : '1.5px solid rgba(79, 70, 229, 0.3)',
                            background: isMuted ? '#F8FAFC' : 'rgba(79, 70, 229, 0.06)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s ease',
                            padding: 0,
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                            flexShrink: 0,
                            outline: 'none'
                        },
                        onMouseEnter: e => {
                            e.currentTarget.style.transform = 'scale(1.08)';
                            if (isMuted) {
                                e.currentTarget.style.background = '#E2E8F0';
                            } else {
                                e.currentTarget.style.background = 'rgba(79, 70, 229, 0.12)';
                                e.currentTarget.style.borderColor = 'rgba(79, 70, 229, 0.6)';
                            }
                        },
                        onMouseLeave: e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            if (isMuted) {
                                e.currentTarget.style.background = '#F8FAFC';
                            } else {
                                e.currentTarget.style.background = 'rgba(79, 70, 229, 0.06)';
                                e.currentTarget.style.borderColor = 'rgba(79, 70, 229, 0.3)';
                            }
                        }
                    },
                        // 뮤트 상태에 따른 동적 SVG 아이콘 렌더링
                        isMuted 
                        ? React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: '#64748B', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
                             React.createElement('path', { d: 'M11 5L6 9H2v6h4l5 4V5z' }),
                             React.createElement('line', { x1: 23, y1: 9, x2: 17, y2: 15 }),
                             React.createElement('line', { x1: 17, y1: 9, x2: 23, y2: 15 })
                          )
                        : React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: '#4F46E5', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
                             React.createElement('path', { d: 'M11 5L6 9H2v6h4l5 4V5z' }),
                             React.createElement('path', { d: 'M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07' })
                          )
                    )
                )
            )
        )
    );
};

/* ── FULLSCREEN SUPPORT (브라우저 전체화면 기능 제어) ── */
window.requestAppFullscreen = function () {
    const docEl = document.documentElement;
    const doc = document;

    if (!doc.fullscreenElement && !doc.webkitFullscreenElement && !doc.mozFullScreenElement && !doc.msFullscreenElement) {
        if (docEl.requestFullscreen) {
            docEl.requestFullscreen().catch(err => { });
        } else if (docEl.webkitRequestFullscreen) {
            docEl.webkitRequestFullscreen().catch(err => { });
        } else if (docEl.mozRequestFullScreen) {
            docEl.mozRequestFullScreen().catch(err => { });
        } else if (docEl.msRequestFullscreen) {
            docEl.msRequestFullscreen();
        }
    }
};

/* ── SOUND EFFECTS SYSTEM (Web Audio API 기반 효과음 시스템) ── */
class SoundEffectsManager {
    constructor() {
        this.ctx = null;
        // 로컬 스토리지에서 사운드 활성화 여부를 조회합니다 (기본값: true)
        this.enabled = localStorage.getItem('app_sound_enabled') !== 'false';
        
        // 배경음악(BGM) 오디오 객체를 담을 변수를 생성자에 선언합니다.
        this.bgm = null;
        // 현재 재생 중인 배경음악(BGM)의 파일 경로를 추적합니다.
        this.bgmUrl = "";
        
        // 오토플레이 우회를 위한 전역 제스처 리스너 등록 상태 관리 변수들입니다.
        this.hasGestureListener = false;
        this.gestureHandler = null;
        
        // 🔊 어린이 환호소리 효과음 MP3를 캐싱하여 로드 지연(딜레이)을 완벽히 없애기 위해 미리 오디오 객체를 로드해 둡니다.
        try {
            this.cheerAudio = new Audio("https://raw.githubusercontent.com/nicole-learn/PostShotClarity/main/kids-cheering-yay-applause.mp3");
            this.cheerAudio.preload = "auto";
            this.cheerAudio.load();
        } catch (e) {
            console.warn("Audio preloading failed", e);
            this.cheerAudio = null;
        }
    }

    // 브라우저의 오디오 컨텍스트를 동적으로 초기화합니다.
    // 사용자 제스처(클릭 등) 이후에 실행해야 자동재생 제약에 걸리지 않습니다.
    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    // 사운드 활성화/비활성화 상태를 업데이트하고 저장합니다.
    setEnabled(enabled) {
        this.enabled = enabled;
        localStorage.setItem('app_sound_enabled', enabled ? 'true' : 'false');
        
        // 사용자가 헤더의 소리 버튼으로 음소거를 변경할 때, BGM 재생 상태도 동기화합니다.
        if (enabled) {
            this.playBGM(this.bgmUrl);
        } else {
            this.stopBGM();
            this.removeGestureListeners();
        }
    }

    // BGM을 루프로 재생하는 메서드입니다. 경로를 주면 해당 경로의 음악을 재생하고, 없으면 기본 BGM을 재생합니다.
    playBGM(url) {
        // 인자가 주어지지 않은 경우의 기본 BGM 설정 (Seesaw Synth Loop.mp3)
        const targetUrl = url || "sound/Seesaw Synth Loop.mp3";

        // 기존에 재생 중이던 음악 파일과 다른 음악 파일이 요청된 경우, 기존 음악을 중지하고 갈아끼웁니다.
        if (this.bgm && this.bgmUrl !== targetUrl) {
            this.bgm.pause();
            this.bgm = null;
        }

        // 현재 설정한 배경음악 경로를 기록해 둡니다.
        this.bgmUrl = targetUrl;

        if (!this.bgm) {
            this.bgm = new Audio(targetUrl);
            this.bgm.loop = true; // 무한 반복 설정
            this.bgm.volume = 0.25; // 배경음악 볼륨 조절
            this.bgm.preload = "auto"; // 브라우저가 사전에 오디오 소스를 로드하도록 설정
        }
        
        if (this.enabled) {
            // 이미 재생 중이라면 중복 실행하지 않습니다.
            if (!this.bgm.paused) return;

            // 브라우저의 오토플레이 제약으로 플레이가 막힐 경우를 감지하여 대응합니다.
            this.bgm.play().then(() => {
                // 성공적으로 즉시 재생되면 불필요한 제스처 리스너가 등록되지 않도록 정리합니다.
                this.removeGestureListeners();
            }).catch(err => {
                console.warn("BGM autoplay blocked. Fallback interaction listener registered.", err);
                // 브라우저의 오토플레이 제한에 걸렸다면 일회성 제스처 리스너를 바인딩하여 대비합니다.
                this.registerGestureListeners();
            });
        }
    }

    // 오토플레이 우회를 위한 네이티브 사용자 제스처 리스너를 등록합니다.
    registerGestureListeners() {
        if (this.hasGestureListener) return; // 이미 등록되어 있다면 중복 등록 방지
        this.hasGestureListener = true;

        // 클릭이나 터치가 처음 일어났을 때 단 한 번만 실행될 안전한 핸들러입니다.
        this.gestureHandler = () => {
            if (this.enabled && this.bgm && this.bgm.paused) {
                this.init(); // Web Audio 컨텍스트를 동기식으로 확실히 깨워줍니다.
                this.bgm.play()
                    .then(() => {
                        // 성공적으로 소리가 나오기 시작하면 제스처 리스너를 완전히 청소합니다.
                        this.removeGestureListeners();
                    })
                    .catch(e => {
                        console.error("BGM play failed on gesture:", e);
                        // 재생에 완전히 실패한 경우에는 리스너를 살려두어 다음 클릭 시도 때 재생할 기회를 남깁니다.
                    });
            } else {
                this.removeGestureListeners();
            }
        };

        // passive: true 옵션으로 스크롤 성능 저하 없이 가볍고 안전하게 터치를 감지합니다.
        document.addEventListener('click', this.gestureHandler, { passive: true });
        document.addEventListener('touchstart', this.gestureHandler, { passive: true });
    }

    // 등록해 둔 제스처 리스너들을 메모리 누수 없이 깨끗하게 제거합니다.
    removeGestureListeners() {
        if (this.gestureHandler) {
            document.removeEventListener('click', this.gestureHandler);
            document.removeEventListener('touchstart', this.gestureHandler);
            this.gestureHandler = null;
        }
        this.hasGestureListener = false;
    }

    // BGM을 일시 정지하고 재생 시간을 맨 앞으로 초기화하는 메서드입니다.
    stopBGM() {
        if (this.bgm) {
            this.bgm.pause();
            this.bgm.currentTime = 0;
        }
    }

    // 지정된 효과음을 신디사이저 방식으로 즉석 생성하여 출력합니다.
    play(type) {
        if (!this.enabled) return;
        
        try {
            this.init();
            if (!this.ctx) return;
            
            const now = this.ctx.currentTime;
            
            if (type === 'click') {
                // 1. 맑고 깨끗한 '뿅' 소리 (버튼 클릭 / 카드 선택)
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.type = 'sine';
                // 400Hz에서 1200Hz로 짧게 상승시킵니다.
                osc.frequency.setValueAtTime(400, now);
                osc.frequency.exponentialRampToValueAtTime(1200, now + 0.08);
                
                gain.gain.setValueAtTime(0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
                
                osc.start(now);
                osc.stop(now + 0.08);
                
            } else if (type === 'correct') {
                // 2. 경쾌하게 도-미-솔-도 순서로 올라가는 정답음
                const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
                notes.forEach((freq, idx) => {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    
                    osc.type = 'triangle'; // 조금 더 마일드하고 레트로한 음색
                    osc.frequency.setValueAtTime(freq, now + idx * 0.07);
                    
                    gain.gain.setValueAtTime(0.1, now + idx * 0.07);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.07 + 0.18);
                    
                    osc.start(now + idx * 0.07);
                    osc.stop(now + idx * 0.07 + 0.18);
                });
                
            } else if (type === 'wrong') {
                // 3. 묵직하고 나직하게 하강하는 경고 오답음 (부드러운 로우패스 필터 사용)
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();
                
                osc.connect(filter);
                filter.connect(gain);
                gain.connect(this.ctx.destination);
                
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(800, now);
                
                osc.type = 'sawtooth';
                // 220Hz에서 110Hz로 무겁게 떨어집니다.
                osc.frequency.setValueAtTime(220, now);
                osc.frequency.linearRampToValueAtTime(110, now + 0.22);
                
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
                
                osc.start(now);
                osc.stop(now + 0.22);
                
            } else if (type === 'reset') {
                // 4. 물결치며 맑게 흘러가는 다시하기 리셋음
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.type = 'sine';
                // 300Hz에서 850Hz로 천천히 부드럽게 훑어 올라갑니다.
                osc.frequency.setValueAtTime(300, now);
                osc.frequency.exponentialRampToValueAtTime(850, now + 0.25);
                
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
                
                osc.start(now);
                osc.stop(now + 0.25);
                
            } else if (type === 'cheer') {
                // 5. 파티클이 흩날릴 때 함께 재생할 어린이 환호소리 및 영롱한 실로폰 팡파르
                
                // 🔊 극도로 밝고 청명한 닌텐도 풍 크리스탈 실로폰 멜로디를 실시간 합성하여 재생합니다. (딜레이 0ms 보장)
                const playXylophoneMelody = () => {
                    const notes = [
                        { f: 523.25, t: 0.00 },  // 도 (C5)
                        { f: 659.25, t: 0.05 },  // 미 (E5)
                        { f: 783.99, t: 0.10 },  // 솔 (G5)
                        { f: 1046.50, t: 0.15 }, // 도 (C6)
                        { f: 1318.51, t: 0.20 }, // 미 (E6)
                        { f: 1567.98, t: 0.25 }, // 솔 (G6)
                        { f: 2093.00, t: 0.30 }  // 도 (C7) - 가장 높은 맑은 음
                    ];

                    notes.forEach((note) => {
                        const playTime = now + note.t;
                        
                        // 맑은 소리를 내는 Sine 오실레이터와 약간의 배음을 더하는 Triangle 오실레이터를 조합합니다.
                        const oscSine = this.ctx.createOscillator();
                        const oscTri = this.ctx.createOscillator();
                        const gainNode = this.ctx.createGain();
                        
                        oscSine.connect(gainNode);
                        oscTri.connect(gainNode);
                        gainNode.connect(this.ctx.destination);
                        
                        oscSine.type = 'sine';
                        oscSine.frequency.setValueAtTime(note.f, playTime);
                        
                        oscTri.type = 'triangle';
                        oscTri.frequency.setValueAtTime(note.f, playTime);
                        
                        // 통통 튀는 스타카토 질감을 위해 아주 짧은 볼륨 엔벨로프를 설계합니다.
                        gainNode.gain.setValueAtTime(0, playTime);
                        // 0.01초 만에 최대로 커졌다가
                        gainNode.gain.linearRampToValueAtTime(0.06, playTime + 0.01);
                        // 0.15초에 걸쳐 부드럽게 사라집니다.
                        gainNode.gain.exponentialRampToValueAtTime(0.001, playTime + 0.15);
                        
                        oscSine.start(playTime);
                        oscSine.stop(playTime + 0.15);
                        oscTri.start(playTime);
                        oscTri.stop(playTime + 0.15);
                    });

                    // 멜로디의 끝부분에 따뜻하게 퍼지는 메이저 화음 잔향을 추가하여 완성도를 높입니다.
                    const chord = [1046.50, 1318.51, 1567.98, 2093.00]; // C6 메이저 코드
                    chord.forEach((freq, idx) => {
                        const playTime = now + 0.35 + idx * 0.02;
                        const osc = this.ctx.createOscillator();
                        const gainNode = this.ctx.createGain();
                        
                        osc.connect(gainNode);
                        gainNode.connect(this.ctx.destination);
                        
                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(freq, playTime);
                        
                        gainNode.gain.setValueAtTime(0, playTime);
                        gainNode.gain.linearRampToValueAtTime(0.04, playTime + 0.02);
                        gainNode.gain.exponentialRampToValueAtTime(0.001, playTime + 0.5);
                        
                        osc.start(playTime);
                        osc.stop(playTime + 0.5);
                    });
                };

                // 실시간 실로폰 멜로디는 딜레이 없이 즉각 실행시킵니다.
                playXylophoneMelody();

                // 동시에 이미 프리로드 시도를 해둔 외부 어린이 환호 MP3 재생을 트리거합니다.
                try {
                    if (this.cheerAudio) {
                        this.cheerAudio.volume = 0.35;
                        this.cheerAudio.currentTime = 0;
                        this.cheerAudio.play().catch(err => {
                            console.warn("Preloaded Audio play 거부됨. Web Audio API 실로폰 사운드로만 대체 재생되었습니다.", err);
                        });
                    } else {
                        // 만약 클래스 내부 오디오 객체가 준비되어 있지 않았다면 임시 생성하여 재생
                        const audioUrl = "https://raw.githubusercontent.com/nicole-learn/PostShotClarity/main/kids-cheering-yay-applause.mp3";
                        const audio = new Audio(audioUrl);
                        audio.volume = 0.35;
                        audio.play().catch(e => {});
                    }
                } catch (audioErr) {
                    console.warn("오디오 객체 실행 불가. Web Audio API Fallback 실로폰 사운드로만 재생되었습니다.", audioErr);
                }
            } else if (type === 'count') {
                // 6. 3초 카운트다운 진행 시 재생할 시계 초침 틱(Tick) 사운드 (우드블록 스타일 타격음)
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.type = 'triangle'; // 단단하고 포근한 음색을 만드는 삼각파 파형
                // 1200Hz에서 200Hz로 0.1초 동안 아주 빠르게 주파수를 떨어뜨려 "톡!" 하는 타격감을 줍니다.
                osc.frequency.setValueAtTime(1200, now);
                osc.frequency.exponentialRampToValueAtTime(200, now + 0.1);
                
                // 볼륨을 0.28로 늘려 확실하게 들리도록 개선합니다.
                gain.gain.setValueAtTime(0.28, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
                
                osc.start(now);
                osc.stop(now + 0.1);
                
            } else if (type === 'start') {
                // 7. 카운트다운이 끝나고 게임이 "시작!"될 때 재생할 맑고 영롱한 차임벨 아르페지오 화음 (닌텐도풍 띠리링)
                const notes = [523.25, 659.25, 783.99, 1046.50]; // C5(도), E5(미), G5(솔), C6(도)
                notes.forEach((freq, idx) => {
                    const playTime = now + idx * 0.04; // 0.04초 간격으로 순차적 아르페지오 재생
                    const osc = this.ctx.createOscillator();
                    const gainNode = this.ctx.createGain();
                    
                    osc.connect(gainNode);
                    gainNode.connect(this.ctx.destination);
                    
                    // 맑은 Sine 파형과 부드러운 Triangle 파형을 절반씩 섞는 느낌을 위해 triangle을 선택
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, playTime);
                    
                    // 각 음이 시작될 때 시원하게 볼륨을 0.32로 주고 0.3초 동안 사르륵 사라지는 잔향 설계
                    gainNode.gain.setValueAtTime(0.32, playTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.001, playTime + 0.3);
                    
                    osc.start(playTime);
                    osc.stop(playTime + 0.3);
                });
            } else if (type === 'warning_tick') {
                // 8. 시간 임박 시 재생할 빠르게 째깍이는 시계 소리 (리얼 아날로그 Tick-Tock 교차 사운드)
                // 째깍-째깍 교차를 위해 tickToggle 상태를 관리합니다.
                if (this.tickToggle === undefined) {
                    this.tickToggle = false;
                }
                this.tickToggle = !this.tickToggle;
                
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                // 건조하고 포근한 기계 마찰음을 내기 위한 삼각파(Triangle)
                osc.type = 'triangle';
                
                // Tick(째)은 조금 높은 하이 피치 음, Tock(깍)은 내부 톱니 울림에 대응하는 미들 피치 음을 설정합니다.
                const startFreq = this.tickToggle ? 3200 : 2000;
                const endFreq = this.tickToggle ? 800 : 400;
                
                osc.frequency.setValueAtTime(startFreq, now);
                // 0.02초(20ms) 동안 매우 빠르게 소리를 떨어뜨려 "틱" 하는 바늘 튕김을 리얼하게 구현합니다.
                osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.02);
                
                // 시계 소리는 잔향 없이 깔끔하게 끊어져야 하므로 빠르게 볼륨을 소멸시킵니다.
                gain.gain.setValueAtTime(this.tickToggle ? 0.16 : 0.12, now); // 피치에 따른 볼륨 밸런스 조정
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
                
                osc.start(now);
                osc.stop(now + 0.02);
            }
        } catch (e) {
            console.error('Audio play error:', e);
        }
    }
}

// 전역 객체로 사운드 매니저를 생성하여 등록합니다.
window.SoundEffects = new SoundEffectsManager();
