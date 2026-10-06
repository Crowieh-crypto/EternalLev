const dict = {
  en: {
    "strip-text": "Prefer browsing in Bulgarian?",
    "strip-btn": "Продължи на български 🇧🇬",
    "nav-concept": "Concept",
    "nav-tokenomics": "Mechanics",
    "nav-path": "The Path",
    "nav-buy": "Trade $LEV",
    "hero-badge": "Preserving History • Uniting People",
    "hero-heading-1": "The Bulgarian Lev",
    "hero-heading-2": "Remains Eternal On-Chain.",
    "hero-desc": "The Lev is now a piece of history, but its concept deserves to live on. We are transitioning the classic 1 Lev coin into the Web3 era—not just as a digital relic, but as a genuine gathering point for crypto enthusiasts. No empty promises, just a solid community deciding its own future.",
    "btn-join": "Join on Pump.fun",
    "ca-label": "SMART CONTRACT (SOLANA)",
    "parity-tag": "Reference Benchmark",
    "parity-title": "Goal: 0.51 € (Historical Parity)",
    "parity-note-1": "Fair Launch Bonding Curve",
    "parity-note-2": "Fixed Supply: 1,955,830 $LEV",
    "concept-kicker": "The Philosophy",
    "concept-heading": "Why We Built This",
    "card1-title": "One Lev Is Still One Lev",
    "card1-text": "We all carried this coin in our pockets. Today, the Lev is out of circulation, but rather than letting it gather dust in a drawer, we preserve its essence on the blockchain. It's straightforward: a digital asset carrying the historical weight and a reference value of 51 euro cents.",
    "card2-title": "Community Over Hype",
    "card2-text": "The crypto space is full of projects promising the impossible on day one. We take a grounded approach. First, we gather people passionate about Web3. Then, as liquidity and trust grow, we will collaboratively vote on directing funds toward meaningful, real-world causes.",
    "roadmap-kicker": "Organic Evolution",
    "roadmap-heading": "The Path Forward",
    "step1-title": "The Foundation",
    "step1-text": "A transparent launch on Pump.fun. No hidden allocations. We begin by assembling the core group of enthusiasts on X and Telegram.",
    "step2-title": "Consolidation",
    "step2-text": "Fostering open discussions on markets and technology, observing the organic growth, and solidifying the community's trust.",
    "step3-title": "Collective Impact",
    "step3-text": "Once momentum is established, we implement decentralized voting to fund charitable causes chosen entirely by the holders.",
    "footer-motto": "Preserving legacy. Building the future of Web3.",
    "footer-disclaimer": "Disclaimer: $LEV is a digital tribute and community project. It is not legal tender or a financial security. Always act responsibly."
  },
  bg: {
    "strip-text": "Предпочитате английски език?",
    "strip-btn": "Switch to English 🇬🇧",
    "nav-concept": "Идеологията",
    "nav-tokenomics": "Механика",
    "nav-path": "Пътят",
    "nav-buy": "Търгувай $LEV",
    "hero-badge": "Пазим историята • Обединяваме хората",
    "hero-heading-1": "Българският лев",
    "hero-heading-2": "Остава вечен в блокчейна.",
    "hero-desc": "Левът вече е история, но няма причина просто да изчезне. Пренасяме концепцията за старата монета от 1 лев в днешния Web3 свят. Не предлагаме празни обещания, а реално пространство, където хората с интерес към крипто и децентрализация да се съберат, да обменят идеи и заедно да решават бъдещето на проекта.",
    "btn-join": "Влез през Pump.fun",
    "ca-label": "СМАРТ КОНТРАКТ (SOLANA)",
    "parity-tag": "Исторически ориентир",
    "parity-title": "Цел: 0,51 € (Оригиналният курс)",
    "parity-note-1": "Справедлив старт (Fair Launch)",
    "parity-note-2": "Лимитирано предлагане: 1,955,830 $LEV",
    "concept-kicker": "Философията",
    "concept-heading": "Защо създадохме това?",
    "card1-title": "Един лев си остава един лев",
    "card1-text": "Всички сме израснали с тази монета. Днес левът вече го няма в обращение, но вместо да остане забравен по старите чекмеджета, запазваме концепцията му жива в блокчейна. Чисто и просто: дигитален актив, носещ духа на лева с референтна стойност от 51 евроцента.",
    "card2-title": "Общността преди хайпа",
    "card2-text": "Крипто пространството е пълно с проекти, обещаващи чудеса от ден първи. Нашият подход е стъпил на земята. Първо събираме съмишленици, а когато се натрупа доверие и ликвидност, заедно ще гласуваме и ще решаваме кои реални дарителски каузи да подкрепим.",
    "roadmap-kicker": "Органично развитие",
    "roadmap-heading": "Какви са стъпките",
    "step1-title": "Основата",
    "step1-text": "Прозрачен старт в Pump.fun без скрити уговорки. Започваме със събирането на първите хора в Telegram и X (Twitter).",
    "step2-title": "Сплотяване",
    "step2-text": "Говорим си свободно за пазари и технологии. Следим органичния интерес и изграждаме доверие вътре в общността.",
    "step3-title": "Общо действие",
    "step3-text": "Когато сме достатъчно стабилни, въвеждаме децентрализирано гласуване, за да финансираме обществени каузи, избрани изцяло от вас.",
    "footer-motto": "Пазим миналото. Градим бъдещето на Web3.",
    "footer-disclaimer": "Отказ от отговорност: $LEV е дигитален трибют и общностен експеримент, а не официално платежно средство или обещание за печалба. Участвайте разумно."
  }
};

let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'bg' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[currentLang][key]) {
      el.innerHTML = dict[currentLang][key]; // innerHTML allows bold/em tags to render
    }
  });

  document.getElementById('stripText').textContent = dict[currentLang]['strip-text'];
  document.getElementById('stripBtnText').textContent = dict[currentLang]['strip-btn'];
  document.getElementById('navLangToggle').textContent = currentLang === 'en' ? 'EN' : 'BG';
}

// Ultra-smooth 3D Parallax Tilt
const stage = document.getElementById('coinStage');
const card = document.getElementById('coinCard');

if (stage && card) {
  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Dampened rotation for heavier, premium feel
    const rotX = (-y / (rect.height / 2)) * 15;
    const rotY = (x / (rect.width / 2)) * 15;

    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  });

  stage.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  });
}

// CA Copy Feedback
function copyCA() {
  const hash = document.getElementById('caHash').innerText;
  navigator.clipboard.writeText(hash).then(() => {
    const btn = document.querySelector('.ca-copy-btn i');
    btn.className = 'fa-solid fa-check';
    btn.style.color = '#D4AF37';
    
    setTimeout(() => {
      btn.className = 'fa-regular fa-copy';
      btn.style.color = '';
    }, 2000);
  });
}