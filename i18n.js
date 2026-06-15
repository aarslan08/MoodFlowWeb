// ================= i18n =================
// Client-side translations for the MoodFlow marketing site.
// Default: English. Toggle: data-i18n="key" or data-i18n-attr="key:attr"
// To add a new key: add to both `en` and `tr` objects.

const TRANSLATIONS = {
  en: {
    // Nav
    'nav.features': 'Features',
    'nav.premium': 'Premium',
    'nav.privacy': 'Privacy',
    'nav.download': 'Get App',
    'nav.lang': 'EN',

    // Hero
    'hero.badge': 'Now with weekly insights',
    'hero.title.1': 'Your emotions,',
    'hero.title.2': 'beautifully',
    'hero.title.3': 'understood.',
    'hero.desc': 'MoodFlow is the privacy-first mood tracker that helps you recognize patterns, build healthy habits, and nurture your emotional wellbeing.',
    'hero.cta.primary': 'Download Free',
    'hero.cta.secondary': 'See how it works',
    'hero.meta.rating': 'App Store',
    'hero.meta.users': 'Happy users',
    'hero.meta.moods': 'Moods tracked',

    // Trust
    'trust.text': 'Trusted by mindful people worldwide',

    // Features
    'features.eyebrow': "What you'll love",
    'features.title': 'Built for the way you <em>actually</em> feel',
    'features.desc': 'Six thoughtful features designed to make emotional tracking feel natural, not clinical.',
    'feature.1.tag': '01',
    'feature.1.title': 'One-tap mood logging',
    'feature.1.desc': 'Pick how you feel, add intensity, and you\'re done. No lengthy questionnaires, no friction.',
    'feature.2.tag': '02',
    'feature.2.title': 'Smart insights',
    'feature.2.desc': 'Discover patterns in your week, month, and year.',
    'feature.3.tag': '03',
    'feature.3.title': 'Gentle reminders',
    'feature.3.desc': 'Customizable nudges that respect your day.',
    'feature.4.tag': '04',
    'feature.4.title': 'Privacy by design',
    'feature.4.desc': 'Your data stays on your device. Period.',
    'feature.5.tag': '05',
    'feature.5.title': 'Beautiful statistics',
    'feature.5.desc': 'Detailed charts, streaks, and habit correlations that actually make sense at a glance.',
    'feature.6.tag': '06',
    'feature.6.title': 'Achievements',
    'feature.6.desc': 'Unlock milestones as you build the habit.',

    // Showcase
    'showcase.eyebrow': 'Designed to delight',
    'showcase.title': 'A look you\'ll <em>actually</em> enjoy',
    'showcase.desc': 'Every pixel crafted to feel calm, focused, and genuinely yours.',
    'showcase.1.title': 'Capture every feeling',
    'showcase.1.desc': 'Six moods, infinite nuance.',
    'showcase.2.title': 'Beautiful insights',
    'showcase.2.desc': 'Patterns revealed, beautifully.',
    'showcase.3.title': 'Streak tracking',
    'showcase.3.desc': 'Build the habit, day by day.',

    // Premium
    'premium.eyebrow': 'MoodFlow Premium',
    'premium.title': 'Unlock your <em>full</em> potential',
    'premium.desc': 'Take your emotional wellness journey further with powerful insights, unlimited storage, and a completely ad-free experience.',
    'premium.cta.subscribe': 'Subscribe in App',
    'premium.cta.note': 'Available in the App Store. Cancel anytime.',
    'premium.feature.1': 'Ad-free experience',
    'premium.feature.2': 'AI-powered insights',
    'premium.feature.3': 'Unlimited photo attachments',
    'premium.feature.4': 'Voice notes',
    'premium.feature.5': 'Face ID & PIN lock',
    'premium.feature.6': 'Home Screen widget',
    'premium.feature.7': 'Yearly heatmap & trends',
    'premium.feature.8': 'Export to CSV & JSON',
    'premium.feature.9': 'Backdate entries',
    'premium.feature.10': 'Premium support',

    // Privacy (home section)
    'privacy.eyebrow': 'Privacy & compliance',
    'privacy.title': 'Your data, your <em>control</em>',
    'privacy.desc': 'Built on a foundation of privacy. We\'re compliant with KVKK, GDPR, and Apple/Google privacy guidelines.',
    'privacy.card.1.title': 'Local-first storage',
    'privacy.card.1.desc': 'All data lives on your device by default. We can\'t read your entries — even if we wanted to.',
    'privacy.card.2.title': 'You control retention',
    'privacy.card.2.desc': 'Delete your data in a single tap. No backups, no archives, no exceptions.',
    'privacy.card.3.title': 'Full KVKK & GDPR',
    'privacy.card.3.desc': 'Compliant with Turkish Personal Data Protection Law (KVKK) and EU GDPR regulations.',
    'privacy.read.policy': 'Read full Privacy Policy',
    'privacy.read.terms': 'Read Terms of Use',

    // Download
    'download.eyebrow': 'Get started today',
    'download.title': 'Your emotional journey<br>starts with one tap.',
    'download.desc': 'Join 50,000+ people building a healthier relationship with their emotions.',
    'download.ios.small': 'Download on the',
    'download.ios.strong': 'App Store',
    'download.android.small': 'Get it on',
    'download.android.strong': 'Google Play',
    'download.cancel': 'Cancel anytime from App Store settings.',

    // Footer
    'footer.tagline': 'Your emotional wellness companion. Privacy-first, beautifully designed.',
    'footer.col.product': 'Product',
    'footer.col.legal': 'Legal',
    'footer.col.contact': 'Contact',
    'footer.link.features': 'Features',
    'footer.link.premium': 'Premium',
    'footer.link.showcase': 'Showcase',
    'footer.link.download': 'Download',
    'footer.link.privacy': 'Privacy Policy',
    'footer.link.terms': 'Terms of Use',
    'footer.link.kvkk': 'KVKK',
    'footer.link.hello': 'General inquiries',
    'footer.link.privacy.email': 'Data Protection Officer',
    'footer.copyright': '© 2026 MoodFlow. Made with care for emotional wellbeing.',

    // Privacy page
    'privacy.page.title': 'Privacy Policy',
    'privacy.page.lead': 'At MoodFlow, we believe emotional data is deeply personal. This policy explains exactly what we collect and why.',
    'privacy.page.collect.title': 'Data we collect',
    'privacy.page.collect.item.1': 'Only the mood entries, notes, and preferences you voluntarily provide.',
    'privacy.page.collect.item.2': 'Where it\'s stored: Locally on your device. Cloud sync is opt-in and end-to-end encrypted.',
    'privacy.page.collect.item.3': 'Third parties: We never sell, share, or trade your personal data. Ever.',
    'privacy.page.collect.item.4': 'Analytics: We collect anonymous, aggregated usage stats to improve the app. No personal content is included.',
    'privacy.page.collect.item.5': 'Your rights: Access, modify, export, or delete your data at any time from Settings.',
    'privacy.page.kvkk.title': 'KVKK Aydınlatma Metni (Turkey)',
    'privacy.page.kvkk.lead': 'Under the Personal Data Protection Law No. 6698:',
    'privacy.page.kvkk.item.1': 'Your personal data is processed only with your explicit consent.',
    'privacy.page.kvkk.item.2': 'You have the right to learn whether your data is being processed.',
    'privacy.page.kvkk.item.3': 'You may request correction, deletion, or anonymization of your data.',
    'privacy.page.kvkk.item.4': 'Data is processed only for specific, legitimate purposes.',
    'privacy.page.kvkk.item.5': 'Appropriate security measures are in place to prevent unauthorized access.',
    'privacy.page.contact.lead': 'Questions? Email our Data Protection Officer at',
    'privacy.page.updated': 'Last updated',

    // Terms page
    'terms.page.title': 'Terms of Use',
    'terms.page.lead': 'By using MoodFlow, you agree to these terms. Please read them carefully.',
    'terms.page.section.1.title': '1. Acceptance of Terms',
    'terms.page.section.1.body': 'By downloading, installing, or using MoodFlow, you agree to be bound by these Terms of Use. If you do not agree, please do not use the app.',
    'terms.page.section.2.title': '2. License',
    'terms.page.section.2.body': 'MoodFlow grants you a personal, non-exclusive, non-transferable license to use the app for your personal, non-commercial purposes.',
    'terms.page.section.3.title': '3. Subscriptions & Payments',
    'terms.page.section.3.body': 'MoodFlow Premium is offered as an auto-renewable subscription. Payment is charged to your Apple ID account at confirmation of purchase. Subscription auto-renews unless cancelled at least 24 hours before the end of the current period. You can manage and cancel subscriptions in your App Store account settings.',
    'terms.page.section.4.title': '4. Refunds',
    'terms.page.section.4.body': 'All purchases are processed by Apple. Refund requests are subject to Apple\'s refund policy and can be initiated from the App Store.',
    'terms.page.section.5.title': '5. User Content',
    'terms.page.section.5.body': 'You retain all rights to the mood entries, notes, and content you create. We do not claim ownership over your personal data.',
    'terms.page.section.6.title': '6. Limitation of Liability',
    'terms.page.section.6.body': 'MoodFlow is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the app.',
    'terms.page.section.7.title': '7. Changes to Terms',
    'terms.page.section.7.body': 'We may update these terms from time to time. Continued use of the app after changes constitutes acceptance of the new terms.',
    'terms.page.section.8.title': '8. Contact',
    'terms.page.section.8.body': 'For questions about these terms, please contact us at',
    'terms.page.contact.lead': 'For questions about these terms, please contact us at',
  },

  tr: {
    // Nav
    'nav.features': 'Özellikler',
    'nav.premium': 'Premium',
    'nav.privacy': 'Gizlilik',
    'nav.download': 'İndir',
    'nav.lang': 'TR',

    // Hero
    'hero.badge': 'Haftalık içgörülerle',
    'hero.title.1': 'Duygularınız,',
    'hero.title.2': 'güzelce',
    'hero.title.3': 'anlaşıldı.',
    'hero.desc': 'MoodFlow, gizliliği ön planda tutan bir mood takipçisidir. Duygusal örüntülerinizi tanımanıza, sağlıklı alışkanlıklar geliştirmenize ve duygusal refahınızı beslemenize yardımcı olur.',
    'hero.cta.primary': 'Ücretsiz İndir',
    'hero.cta.secondary': 'Nasıl çalıştığını gör',
    'hero.meta.rating': 'App Store',
    'hero.meta.users': 'Mutlu kullanıcı',
    'hero.meta.moods': 'Mood kaydı',

    // Trust
    'trust.text': 'Dünya genelinde bilinçli insanlar tarafından tercih ediliyor',

    // Features
    'features.eyebrow': 'Seveceksiniz',
    'features.title': 'Duygularınızı <em>gerçekten</em> nasıl hissettiğinize göre tasarlandı',
    'features.desc': 'Duygusal takibi doğal hissettiren, klinik olmayan altı özenli özellik.',
    'feature.1.tag': '01',
    'feature.1.title': 'Tek dokunuşla mood kaydı',
    'feature.1.desc': 'Nasıl hissettiğini seç, yoğunluğu ekle, bitti. Uzun anketler yok, sürtünme yok.',
    'feature.2.tag': '02',
    'feature.2.title': 'Akıllı içgörüler',
    'feature.2.desc': 'Haftanız, ayınız, yılınızdaki örüntüleri keşfedin.',
    'feature.3.tag': '03',
    'feature.3.title': 'Nazik hatırlatmalar',
    'feature.3.desc': 'Gününüze saygı gösteren özelleştirilebilir bildirimler.',
    'feature.4.tag': '04',
    'feature.4.title': 'Gizlilik odaklı tasarım',
    'feature.4.desc': 'Verileriniz cihazınızda kalır. Nokta.',
    'feature.5.tag': '05',
    'feature.5.title': 'Güzel istatistikler',
    'feature.5.desc': 'Bir bakışta anlaşılan detaylı grafikler, seriler ve alışkanlık korelasyonları.',
    'feature.6.tag': '06',
    'feature.6.title': 'Başarımlar',
    'feature.6.desc': 'Alışkanlık oluşturdukça kilometre taşlarının kilidini açın.',

    // Showcase
    'showcase.eyebrow': 'Memnun etmek için tasarlandı',
    'showcase.title': 'Gerçekten <em>keyif alacağınız</em> bir görünüm',
    'showcase.desc': 'Sakin, odaklı ve gerçekten sizin gibi hissettirmek için tasarlanan her piksel.',
    'showcase.1.title': 'Her duyguyu yakalayın',
    'showcase.1.desc': 'Altı mood, sonsuz nüans.',
    'showcase.2.title': 'Güzel içgörüler',
    'showcase.2.desc': 'Örüntüler güzellikle ortaya çıkar.',
    'showcase.3.title': 'Seri takibi',
    'showcase.3.desc': 'Alışkanlığı günden güne inşa edin.',

    // Premium
    'premium.eyebrow': 'MoodFlow Premium',
    'premium.title': 'Tüm <em>potansiyelinizi</em> açığa çıkarın',
    'premium.desc': 'Duygusal refah yolculuğunuzu güçlü içgörüler, sınırsız depolama ve tamamen reklamsız bir deneyimle bir adım ileriye taşıyın.',
    'premium.cta.subscribe': "App'ten Abone Ol",
    'premium.cta.note': "App Store'da mevcut. İstediğiniz an iptal edin.",
    'premium.feature.1': 'Reklamsız deneyim',
    'premium.feature.2': 'Yapay zekâ destekli içgörüler',
    'premium.feature.3': 'Sınırsız fotoğraf',
    'premium.feature.4': 'Sesli not',
    'premium.feature.5': 'Face ID ve PIN kilidi',
    'premium.feature.6': 'Ana Ekran widget\'ı',
    'premium.feature.7': 'Yıllık ısı haritası ve trendler',
    'premium.feature.8': 'CSV ve JSON olarak dışa aktarma',
    'premium.feature.9': 'Geçmişe kayıt ekleme',
    'premium.feature.10': 'Öncelikli destek',

    // Privacy (home section)
    'privacy.eyebrow': 'Gizlilik ve uyumluluk',
    'privacy.title': 'Verileriniz, sizin <em>kontrolünüz</em>',
    'privacy.desc': 'Gizlilik temeli üzerine inşa edildi. KVKK, GDPR ve Apple/Google gizlilik yönergelerine uyumluyuz.',
    'privacy.card.1.title': 'Yerel öncelikli depolama',
    'privacy.card.1.desc': 'Tüm veriler varsayılan olarak cihazınızda yaşar. İstersek bile kayıtlarınızı okuyamayız.',
    'privacy.card.2.title': 'Saklama süresini siz kontrol edersiniz',
    'privacy.card.2.desc': 'Verilerinizi tek dokunuşla silin. Yedek yok, arşiv yok, istisna yok.',
    'privacy.card.3.title': 'Tam KVKK ve GDPR',
    'privacy.card.3.desc': 'Türk Kişisel Verilerin Korunması Kanunu (KVKK) ve AB GDPR düzenlemelerine uyumlu.',
    'privacy.read.policy': 'Gizlilik Politikasının tamamını oku',
    'privacy.read.terms': 'Kullanım Koşullarını oku',

    // Download
    'download.eyebrow': 'Bugün başlayın',
    'download.title': 'Duygusal yolculuğunuz<br>tek bir dokunuşla başlar.',
    'download.desc': 'Duygularıyla daha sağlıklı bir ilişki kuran 50.000+ kişiye katılın.',
    'download.ios.small': 'İndir',
    'download.ios.strong': 'App Store',
    'download.android.small': 'Edin',
    'download.android.strong': 'Google Play',
    'download.cancel': 'İstediğiniz an App Store ayarlarından iptal edin.',

    // Footer
    'footer.tagline': 'Duygusal refah yoldaşınız. Gizlilik öncelikli, güzel tasarlanmış.',
    'footer.col.product': 'Ürün',
    'footer.col.legal': 'Yasal',
    'footer.col.contact': 'İletişim',
    'footer.link.features': 'Özellikler',
    'footer.link.premium': 'Premium',
    'footer.link.showcase': 'Ekran görüntüleri',
    'footer.link.download': 'İndir',
    'footer.link.privacy': 'Gizlilik Politikası',
    'footer.link.terms': 'Kullanım Koşulları',
    'footer.link.kvkk': 'KVKK',
    'footer.link.hello': 'Genel sorular',
    'footer.link.privacy.email': 'Veri Koruma Sorumlusu',
    'footer.copyright': '© 2026 MoodFlow. Duygusal refah için özenle yapıldı.',

    // Privacy page
    'privacy.page.title': 'Gizlilik Politikası',
    'privacy.page.lead': 'MoodFlow olarak duygusal verilerin derinden kişisel olduğuna inanıyoruz. Bu politika, tam olarak neyi topladığımızı ve neden topladığımızı açıklar.',
    'privacy.page.collect.title': 'Topladığımız veriler',
    'privacy.page.collect.item.1': 'Yalnızca gönüllü olarak sağladığınız mood kayıtları, notlar ve tercihler.',
    'privacy.page.collect.item.2': 'Nerede saklanır: Cihazınızda yerel olarak. Bulut senkronizasyonu isteğe bağlıdır ve uçtan uca şifrelenir.',
    'privacy.page.collect.item.3': 'Üçüncü taraflar: Kişisel verilerinizi asla satmaz, paylaşmaz veya takas etmeyiz.',
    'privacy.page.collect.item.4': 'Analitik: Uygulamayı geliştirmek için anonim, toplu kullanım istatistikleri topluyoruz. Hiçbir kişisel içerik dahil edilmez.',
    'privacy.page.collect.item.5': 'Haklarınız: Verilerinize Ayarlar\'dan istediğiniz zaman erişebilir, değiştirebilir, dışa aktarabilir veya silebilirsiniz.',
    'privacy.page.kvkk.title': 'KVKK Aydınlatma Metni (Türkiye)',
    'privacy.page.kvkk.lead': '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında:',
    'privacy.page.kvkk.item.1': 'Kişisel verileriniz yalnızca açık rızanızla işlenmektedir.',
    'privacy.page.kvkk.item.2': 'Verilerinizin işlenip işlenmediğini öğrenme hakkına sahipsiniz.',
    'privacy.page.kvkk.item.3': 'Verilerinizin düzeltilmesini, silinmesini veya anonimleştirilmesini talep edebilirsiniz.',
    'privacy.page.kvkk.item.4': 'Veriler yalnızca belirli, meşru amaçlar için işlenmektedir.',
    'privacy.page.kvkk.item.5': 'Yetkisiz erişimi önlemek için uygun güvenlik önlemleri uygulanmaktadır.',
    'privacy.page.contact.lead': 'Sorularınız mı var? Veri Koruma Sorumlumuzla iletişime geçin:',
    'privacy.page.updated': 'Son güncelleme',

    // Terms page
    'terms.page.title': 'Kullanım Koşulları',
    'terms.page.lead': 'MoodFlow\'u kullanarak bu koşulları kabul etmiş olursunuz. Lütfen dikkatlice okuyun.',
    'terms.page.section.1.title': '1. Koşulların Kabulü',
    'terms.page.section.1.body': 'MoodFlow\'u indirerek, yükleyerek veya kullanarak, bu Kullanım Koşullarına bağlı olmayı kabul edersiniz. Kabul etmiyorsanız, lütfen uygulamayı kullanmayın.',
    'terms.page.section.2.title': '2. Lisans',
    'terms.page.section.2.body': 'MoodFlow size uygulamayı kişisel, ticari olmayan amaçlarınız için kullanmanız için kişisel, münhasır olmayan, devredilemez bir lisans verir.',
    'terms.page.section.3.title': '3. Abonelikler ve Ödemeler',
    'terms.page.section.3.body': 'MoodFlow Premium, otomatik yenilenen bir abonelik olarak sunulur. Ödeme, satın alma onayında Apple ID hesabınızdan tahsil edilir. Mevcut dönemin bitiminden en az 24 saat önce iptal edilmediği sürece abonelik otomatik olarak yenilenir. Abonelikleri App Store hesap ayarlarınızdan yönetebilir ve iptal edebilirsiniz.',
    'terms.page.section.4.title': '4. İadeler',
    'terms.page.section.4.body': 'Tüm satın alımlar Apple tarafından işlenir. İade talepleri Apple\'ın iade politikasına tabidir ve App Store\'dan başlatılabilir.',
    'terms.page.section.5.title': '5. Kullanıcı İçeriği',
    'terms.page.section.5.body': 'Oluşturduğunuz mood kayıtları, notlar ve içerik üzerindeki tüm haklar saklıdır. Kişisel verileriniz üzerinde hak iddia etmeyiz.',
    'terms.page.section.6.title': '6. Sorumluluk Sınırlaması',
    'terms.page.section.6.body': 'MoodFlow, herhangi bir garanti verilmeden "olduğu gibi" sağlanır. Uygulamayı kullanmanızdan kaynaklanan dolaylı, arızi veya sonuç olarak ortaya çıkan zararlardan sorumlu değiliz.',
    'terms.page.section.7.title': '7. Koşullardaki Değişiklikler',
    'terms.page.section.7.body': 'Bu koşulları zaman zaman güncelleyebiliriz. Değişikliklerden sonra uygulamanın kullanılmaya devam edilmesi, yeni koşulların kabul edildiğini oluşturur.',
    'terms.page.section.8.title': '8. İletişim',
    'terms.page.section.8.body': 'Bu koşullarla ilgili sorularınız için bizimle iletişime geçin:',
    'terms.page.contact.lead': 'Bu koşullarla ilgili sorularınız için bizimle iletişime geçin:',
  },
};

// ================= LANGUAGE MANAGEMENT =================
const I18N_STORAGE_KEY = 'moodflow.lang';
const SUPPORTED_LANGS = ['en', 'tr'];
const DEFAULT_LANG = 'en';

function getCurrentLang() {
    const stored = localStorage.getItem(I18N_STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
    return DEFAULT_LANG;
}

function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    localStorage.setItem(I18N_STORAGE_KEY, lang);
    applyTranslations(lang);
    document.documentElement.lang = lang;
    // Dispatch custom event so pages can re-render dynamic content
    window.dispatchEvent(new CustomEvent('moodflow:langchange', { detail: { lang } }));
}

function t(key) {
    const lang = getCurrentLang();
    return TRANSLATIONS[lang][key] ?? TRANSLATIONS[DEFAULT_LANG][key] ?? key;
}

function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

    // 1. data-i18n="key" → innerHTML
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // 2. data-i18n-attr="key:attr" → setAttribute
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        const spec = el.getAttribute('data-i18n-attr');
        const [key, attr] = spec.split(':');
        if (dict[key] !== undefined && attr) {
            el.setAttribute(attr, dict[key]);
        }
    });

    // 3. data-i18n-placeholder="key" → placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // 4. Update lang toggle button label
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        const label = dict['nav.lang'] || (lang === 'en' ? 'EN' : 'TR');
        langBtn.querySelector('.lang-label').textContent = label;
    }
}
