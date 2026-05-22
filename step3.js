/**
 * step3.js — step3.html 전용 오버라이드
 *
 * common.js 로드 후 이 파일을 로드하세요.
 * common.js는 수정하지 않고, 이 파일에서 step3에 필요한
 * 기능만 덮어씁니다 (window 객체 확장/재정의 방식).
 */

/* ── 1. 분위기별 이야기 이미지 (step3 좌측 영역) ── */
window.IMG.storyByTone = {
    base: "img/story.default.png",
    fun: "img/story.fun.png",
    tense: "img/story.tensity.png",
    warm: "img/story.warm.png"
};

/* ── 2. getDynamicComments 오버라이드 ── */
// momo/meora의 emoji를 이미지 이모티콘 객체로 교체하고,
// seed 파라미터를 활용한 랜덤 로직을 유지합니다.
window.getDynamicComments = function (chosen, tone, seed) {
    const words = chosen && chosen.length > 0 ? chosen : ['호랑이', '창호지', '산골집'];
    const t = tone || 'base';
    const s = seed || 0;

    function rnd(key, range) {
        let h = 0;
        const str = String(s) + key + t;
        for (let i = 0; i < str.length; i++) h = (((h << 5) - h) + str.charCodeAt(i)) | 0;
        return Math.abs(h) % range;
    }

    /* 분위기별 이미지 이모티콘 — momo */
    const MOMO_EMOTI = {
        base: { src: 'img/emoti.momo.default.png', isImg: true },
        fun: { src: 'img/emoti.momo.fun.png', isImg: true },
        tense: { src: 'img/emoti.momo.tensity.png', isImg: true },
        warm: { src: 'img/emoti.momo.warm.png', isImg: true },
    };

    /* 분위기별 이미지 이모티콘 — 머라카노사우르스 */
    const MEORA_EMOTI = {
        base: { src: 'img/emoti.meora.default.png', isImg: true },
        fun: { src: 'img/emoti.meora.fun.png', isImg: true },
        tense: { src: 'img/emoti.meora.tensity.png', isImg: true },
        warm: { src: 'img/emoti.meora.warm.png', isImg: true },
    };

    const EMOJI_POOL = {
        chaekchaekie: ['📚✨', '📖💕', '🌟📚', '💫📖'],
        moonbaksa: ['🔍💭', '❓✨', '🤔💡', '🧐🌟'],
    };

    // 1. 책책이: 책과 이야기 연결 (차분, 상냥, 몽글몽글)
    const CHAEK_TEXTS = {
        base: '이 글을 읽으니까 명작 동화인 "해와 달이 된 오누이"가 바로 생각나! 남매의 용기가 마음을 몽글몽글하게 만들어주네.',
        fun: '이 글을 읽으니까 유쾌한 재미와 교훈이 가득한 전래동화 "흥부와 놀부"가 바로 생각나! 오빠의 재치 넘치는 대사 덕분에 한참 웃었어.',
        tense: '콩쥐를 도와주던 착한 동물들이 나오는 전래동화 "콩쥐 팥쥐"처럼, 이번 남매의 밤도 조마조마하고 흥미진진해서 손에 땀을 쥐며 읽었어!',
        warm: '마치 따뜻한 그림책 "강아지 똥"을 읽었을 때처럼, 쓸쓸한 산골집 밤을 비추는 훈훈한 사랑이 느껴져.'
    };

    // 2. 모모: 응원과 찬사 (텐션 짱짱, 리액션 최고, 귀염뽀짝)
    const MOMO_TEXTS = {
        base: '대박대박!! 단어 연결 진짜 대단하다!! 읽자마자 감동받아서 박수 오만 번 쳤어! 완전 우주 최고 작가님이야!!',
        fun: '꺄하핫! 너무 웃기고 귀여워서 배꼽 날아갈 뻔!! 역시 넌 모두를 행복하게 만드는 글쓰기 천재가 분명해!',
        tense: '후덜덜.. 읽는 내내 숨 쉬는 것도 깜빡하고 주먹 꼭 쥐고 봤잖아! 몰입감이 진짜 영화보다 더 짜릿했어!',
        warm: '우와.. 코끝이 찡하고 따뜻해졌어. 서로 손 꼭 잡아주는 남매 모습에 온몸에 솜사탕 온기가 가득 찬 기분이야!'
    };

    // 3. 머라카노사우르스: 단어의 유래와 우리말 특징 (정겹고 친근한 공룡 박사 말투)
    const wordIdx = rnd('meora_pick', words.length);
    const chosenWord = words[wordIdx] || '호랑이';

    function getWordDialogue(word) {
        if (word === '호랑이') return '공룡 선배로서 말해주자면 "호랑이"는 범 호(虎)와 이리 랑(狼)이 합쳐진 정겨운 이름이란다! 이야기 속 호랑이가 참 매력적이네!';
        if (word === '창호지') return '창호지는 얇지만 질긴 명품 한지야! 밤바람은 철벽 방어하고 은은한 달빛은 통과시켜주는 조상님들의 초친환경 웰빙 과학이지!';
        if (word === '산골집') return '산골집은 깊은 산속의 포근하고 한적한 집을 정겹게 부르는 우리말이야. 단어 하나로 숲속 별장 느낌을 200% 살렸어!';
        if (word === '감자') return '감자는 척박한 땅에서도 알차게 자라준 눈물겨운 역사적 식량이야! 화롯불에 호호 불어먹는 묘사가 참 군침 도는구나!';
        if (word === '남매') return '남매는 오누이를 정겹게 부르는 순우리말 호칭이야! 투닥거리다가도 위기엔 손 꼭 잡는 동생 사랑이 가득 묻어나네!';
        if (word === '부부') return '부부는 기쁜 일도 힘든 일도 평생 나란히 나누는 인생 최고의 짝꿍이야! 가족의 든든한 사랑을 예쁘게 그려냈네!';
        if (word === '오빠') return '오빠는 여동생을 아끼고 지켜주는 든든한 버팀목이자 멋진 우리말 가족 이름이야! 듬직한 매력이 듬뿍 느껴지는구나!';
        return `오늘 고른 "${word}" 단어는 우리 문장에 찰떡같이 녹아들어서 이야기의 영양가를 아주 듬뿍 높여주는 핵심 비타민이란다!`;
    }
    const meoraText = getWordDialogue(chosenWord);

    function getSimilarWords(word) {
        const map = {
            '호랑이': ['범', '칡범', '산군(山君)', '호구(虎口)'],
            '창호지': ['한지', '창문종이', '문창지', '창문지'],
            '산골집': ['오두막', '토담집', '귀틀집', '외딴집'],
            '감자': ['하지감자', '마령서(馬鈴薯)', '북감저', '감저'],
            '남매': ['오누이', '동생과 오빠', '누이와 올아비', '형제자매'],
            '부부': ['내외(內外)', '부처(夫妻)', '반려자', '부부간'],
            '오빠': ['오라버니', '오라버님', '형님(방언)', '오라비']
        };
        return map[word] || ['비슷한 낱말'];
    }

    // 4. 문박사: 호기심과 생각할 거리 질문
    const MOON_QUESTIONS = {
        base: `만약 이야기 속 호랑이가 요술을 부리는 착한 동물이었다면, 남매에게 어떤 신비한 선물을 주고 떠났을까?`,
        fun: `만약 호랑이가 남매를 보고 깜짝 놀라 마당에서 엉뚱한 댄스파티를 벌였다면 어땠을까? 상상만 해도 발랄하지!`,
        tense: `창호지 문 밖에서 낯선 발소리가 뚜벅뚜벅 들렸을 때, 오빠가 동생에게 귓속말로 건넨 진짜 용기의 한마디는 뭐였을까?`,
        warm: `길고 무서운 밤이 가고 눈부신 아침 햇살이 비쳤을 때, 남매가 서로에게 가장 먼저 건넨 따스한 인사는 무엇이었을까?`
    };

    return {
        chaekchaekie: {
            emoji: EMOJI_POOL.chaekchaekie[rnd('chaek_em', EMOJI_POOL.chaekchaekie.length)],
            content: CHAEK_TEXTS[t] || CHAEK_TEXTS.base,
            book: t === 'base' ? '해와 달이 된 오누이' : t === 'fun' ? '흥부와 놀부' : t === 'tense' ? '콩쥐 팥쥐' : '강아지 똥'
        },
        momo: {
            emoji: MOMO_EMOTI[t] || MOMO_EMOTI.base,   // 이미지 이모티콘 객체 { src, isImg }
            content: MOMO_TEXTS[t] || MOMO_TEXTS.base
        },
        meora: {
            emoji: MEORA_EMOTI[t] || MEORA_EMOTI.base, // 이미지 이모티콘 객체 { src, isImg }
            content: meoraText,
            word: chosenWord,
            similarWords: getSimilarWords(chosenWord)
        },
        moonbaksa: {
            emoji: EMOJI_POOL.moonbaksa[rnd('moon_em', EMOJI_POOL.moonbaksa.length)],
            content: MOON_QUESTIONS[t] || MOON_QUESTIONS.base
        }
    };
};

/* ── 3. TONE_OPTIONS 오버라이드 (step3 전용) ── */
// common.js에는 base 옵션이 없으므로, step3 팝업에서
// '일반으로 돌아가기' 버튼이 표시되도록 여기서 재정의합니다.
window.TONE_OPTIONS = [
    { id: "base", emoji: "📖", label: "기본으로 돌아가기", desc: "처음 기본 분위기로" },
    { id: "fun", icon: "img/icon_01.png", label: "더 재미있고 유쾌하게", desc: "통통 튀는 이야기로!" },
    { id: "tense", icon: "img/icon_02.png", label: "더 긴장감 넘치게", desc: "두근두근 스릴 가득!" },
    { id: "warm", icon: "img/icon_03.png", label: "더 따뜻하고 뭉클하게", desc: "가슴이 뭉클해지는 이야기로" },
];

/* ── 4. CHARACTERS 역할명 오버라이드 (step3 전용) ── */
// common.js에 영향을 주지 않고 step3 화면에서만 캐릭터 역할을 덮어씁니다.
if (window.CHARACTERS) {
    const chaek = window.CHARACTERS.find(c => c.id === 'chaekchaekie');
    if (chaek) chaek.role = '책소개왕';

    const moon = window.CHARACTERS.find(c => c.id === 'moonbaksa');
    if (moon) moon.role = '질문 대장';

    const meora = window.CHARACTERS.find(c => c.id === 'meora');
    if (meora) meora.role = '단어 대장';
}
