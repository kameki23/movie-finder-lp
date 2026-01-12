// Language Resources
const translations = {
    en: {
        header_btn: "App Store",
        hero_new: "New Release 2026",
        hero_title: "Stop Searching.<br><span class=\"text-gradient\">Start Watching.</span>",
        hero_sub: "Netflix / Prime / Disney+ / U-NEXT...<br>Search them all in one tap.<br>Your movie night is saved.",
        hero_cta: "Download for Free",
        feature_search_title: "Cross-Platform Search",
        feature_search_desc: "Find where your movie is streaming instantly. Covers Netflix, Amazon Prime, Disney+, Hulu, U-NEXT, and more.",
        feature_history_title: "Never lose a 'Watch Later'",
        feature_history_desc: "Add to favorites with one tap. No more 'What was that movie?' moments.",
        feature_random_title: "Meet your Destiny",
        feature_random_desc: "Can't decide? Let the Random Picker decide your night's fate.",
        feature_lang_title: "Use in Your Language",
        feature_lang_desc: "Fully localized for your convenience. Switch languages instantly from the settings.",
        prob_title: "Movie night decided.<br><span class=\"text-orange\">But where to watch?</span>",
        prob_1: "Opening apps one by one...",
        prob_2: "Thought it was rental, actually free...",
        prob_3: "20 mins wasted searching...",
        sol_text: "Movie & TV Finder.<br><strong class=\"text-teal\">Just type title. 3 sec result.</strong>",
        premium_title: "Upgrade to <span class=\"text-gold\">Premium</span>",
        premium_sub: "First Class Experience.",
        plan_badge: "Most Popular",
        plan_free_name: "Free Plan",
        plan_free_price: "Free",
        plan_monthly_name: "Monthly Plan",
        plan_yearly_name: "Yearly Plan",
        plan_badge: "Best Value",
        price_sub_monthly: "/ month",
        price_sub_yearly: "/ year",
        benefit_basic_search: "Basic Search",
        benefit_random: "Random Picker",
        benefit_ads: "Ad Supported",
        benefit_1: "Unlimited Favorites",
        benefit_2: "Advanced Filters",
        benefit_3: "Ad-Free",
        benefit_4: "Family Sharing",
        benefit_save: "Save 2 months",
        btn_free: "Current Plan",
        btn_upgrade: "Upgrade",
        cancel_note: "Cancel anytime.",
        faq_title: "FAQ",
        faq_1_q: "Is it free?",
        faq_1_a: "Yes! Basic search and browsing are 100% Free.",
        faq_2_q: "Which services?",
        faq_2_a: "Major global & local platforms: Netflix, Prime, Disney+, Hulu, U-NEXT, etc.",
        faq_3_q: "Can I watch in app?",
        faq_3_a: "No, we are a search engine. We link you directly to the streaming apps.",
        cta_title: "Decide tonight's movie<br>in 3 seconds.",
        cta_note_free: "Basic features are Free forever.",
        cta_note_premium: "Premium plans available: Monthly $4.99 / Yearly $44.99 (Rates vary by region)",
        footer_contact: "Contact",
        footer_privacy: "Privacy",
        footer_terms: "Terms"
    },
    ja: {
        header_btn: "App Store",
        hero_new: "New Release 2026",
        hero_title: "どの配信で観れるか、<br><span class=\"text-gradient\">もう迷わない。</span>",
        hero_sub: "Netflix / Prime / Disney+ / U-NEXT…<br>全部まとめて一発検索。<br>あなたの「映画タイム」を、探す時間から解放します。",
        hero_cta: "無料でダウンロード",
        feature_search_title: "全配信サイトを横断検索",
        feature_search_desc: "主要な配信サービス（Netflix, Amazon Prime, Disney+, U-NEXT, Huluなど）を網羅。見たい作品が「今」どこで観れるか速攻チェック。",
        feature_history_title: "「あとで観よう」を逃さない",
        feature_history_desc: "気になった作品はワンタップでお気に入りへ。「あれ、なんだっけ？」が無くなります。",
        feature_random_title: "運命の作品に出会う",
        feature_random_desc: "何を観るか決まらない夜は、ランダム機能にお任せ。予想外の名作が、あなたを待っています。",
        feature_lang_title: "好きな言語で利用可能",
        feature_lang_desc: "英語、日本語、フランス語、スペイン語など、多数の言語に完全対応。あなたの使いやすい言語でアプリをご利用いただけます。",
        prob_title: "「作品は決まった。<br>でも、<span class=\"text-orange\">どこで配信してる？</span>」",
        prob_1: "アプリを一つひとつ開いて検索…",
        prob_2: "レンタルだと思って諦めたら、実は見放題だった…",
        prob_3: "探している間に20分経過…",
        sol_text: "Movie & TV Finderなら、<br><strong class=\"text-teal\">タイトルを入れるだけ。3秒で解決。</strong>",
        premium_title: "Premiumに <span class=\"text-gold\">アップグレード</span>",
        premium_sub: "映画体験を、ファーストクラスへ。",
        plan_free_name: "フリープラン",
        plan_free_price: "無料",
        plan_monthly_name: "月額プラン",
        plan_yearly_name: "年額プラン",
        plan_badge: "一番お得",
        price_sub_monthly: "/ 月",
        price_sub_yearly: "/ 年",
        benefit_basic_search: "横断検索",
        benefit_random: "ランダム機能",
        benefit_ads: "広告あり",
        benefit_1: "お気に入り登録 無制限",
        benefit_2: "高度な検索フィルター",
        benefit_3: "広告完全非表示",
        benefit_4: "ファミリー共有対応",
        benefit_save: "2ヶ月分お得",
        btn_free: "現在のプラン",
        btn_upgrade: "アップグレード",
        cancel_note: "いつでも解約可能です",
        faq_title: "よくある質問",
        faq_1_q: "無料で使えますか？",
        faq_1_a: "はい、基本的な検索機能と作品情報の閲覧は完全に無料でご利用いただけます。",
        faq_2_q: "どの配信サービスに対応していますか？",
        faq_2_a: "Netflix, Amazon Prime Video, Disney+, Hulu, U-NEXT, Leminoなど、日本国内の主要なサービスに対応しています。",
        faq_3_q: "アプリ内で映画を再生できますか？",
        faq_3_a: "いいえ、再生は各配信サービスのアプリで行われます。当アプリは「どこで観れるか」を探すための検索エンジンです。",
        cta_title: "今夜観る作品、<br>3秒で決めよう。",
        cta_note_free: "基本機能はずっと無料。",
        cta_note_premium: "プレミアムプラン: 月額 ¥500 / 年額 ¥5,000 (地域により異なります)",
        footer_contact: "お問い合わせ",
        footer_privacy: "プライバシーポリシー",
        footer_terms: "利用規約"
    }
};

const pricing = {
    en: { yearly: "$44.99", monthly: "$4.99" },
    ja: { yearly: "¥5,000", monthly: "¥500" }
};

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-zoom');
    const scrollReveal = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', scrollReveal);
    scrollReveal();

    // Language Logic
    const menuBtn = document.getElementById('menu-btn');
    const menuModal = document.getElementById('menu-modal');
    const closeMenu = document.getElementById('close-menu');
    const langOptions = document.querySelectorAll('.lang-option');

    // Check User Language or Default to English
    const userLang = navigator.language || navigator.userLanguage;
    let currentLang = userLang.startsWith('ja') ? 'ja' : 'en';

    // Apply Language
    updateContent(currentLang);

    // Menu Toggle
    menuBtn.addEventListener('click', () => {
        menuModal.classList.add('open');
    });
    closeMenu.addEventListener('click', () => {
        menuModal.classList.remove('open');
    });

    // Language Switch
    langOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
            currentLang = e.target.dataset.lang;
            updateContent(currentLang);
            menuModal.classList.remove('open');

            // Active visual state
            langOptions.forEach(o => o.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    function updateContent(lang) {
        // Text Content
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Pricing
        // Pricing
        const pyVal = document.getElementById('price-val-y');
        const pmVal = document.getElementById('price-val-m');

        if (pyVal) {
            pyVal.innerText = pricing[lang].yearly;
            pmVal.innerText = pricing[lang].monthly;
        }

        // Image Swapping (Premium Settings)
        const premiumImg = document.getElementById('premium-ui-img');
        if (premiumImg) {
            if (lang === 'ja') {
                premiumImg.src = './images/ui_settings_ja.png';
            } else {
                premiumImg.src = './images/ui_settings_en.png';
            }
        }

        // HTML lang attribute
        document.documentElement.lang = lang;
    }
});
