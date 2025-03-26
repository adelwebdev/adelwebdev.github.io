// ============== TRANSLATION SYSTEM ==============
const translations = {
  en: {
    welcome_header: "Welcome to Vertex NeuralForge Security",
    welcome_subheader: "AI-powered offense for unbreakable defense",
    home: "Home",
    services: "Services",
    case_studies: "Case Studies",
    blog: "Blog",
    forum: "Forum",
    about_us_menu: "About Us",
    contact_menu: "Contact",
    hero: "Redefining Cybersecurity with AI-Driven Offense",
    hero_paragraphe:
      "We simulate real-world attacks to fortify your defenses. Are you ready to test your limits?",
    get_started: "Get Started",
    case_studies: "Case Studies",
    title1: "Financial Sector Breach Simulation",
    text1: "How we helped a leading bank uncover critical vulnerabilities.",
    title2: "Cloud Infrastructure Penetration Test",
    text2: "Securing a global SaaS provider’s cloud environment.",
    What_they_say: "What Our Clients Say",
    wts1: "Vertex NeuralForge helped us uncover critical vulnerabilities we didn’t even know existed. Highly recommend their red teaming services!",
    wts1a: "John Doe, CTO at SecureCorp",
    wts2: "Their AI-driven simulations are next-level. Our defenses are stronger than ever thanks to their expertise.",
    wts2a: "Jane Smith, CISO at FinTech Inc.",
    founder_note: "A Message from Our Founder",
    founder_note_text:
      "Cybersecurity is not just about defending systems—it’s about staying one step ahead of the attackers. At Vertex NeuralForge Security, we use AI and offensive security to help organizations build unbreakable defenses. I’m proud to lead a team that’s passionate about innovation and committed to excellence.",
    footer: "Adel Bouatta, Founder and CEO",
    services_title: "Our Cybersecurity Services",
    service_text:
      "Protecting your business with cutting-edge offensive security solutions.",
    service_pen_test: "Penetration Testing",
    service_pen_test_text:
      "Simulate real-world attacks to identify vulnerabilities in your systems.",
    service_pen_test_t1: "Network, Web App, and Cloud Testing",
    service_pen_test_t2: "Detailed Vulnerability Report",
    service_pen_test_t3: "Remediation Recommendations",
    service_pen_test_price: "Starting at $2,000",
    service_red_team: "Red Teaming",
    contact_title: "Contact Us",
    faq: "Frequently Asked Questions",
    q1: "What is red teaming?",
    a1: "Red teaming is a full-scope simulation of real-world attacks to test an organization’s defenses.",
    q2: "How does AI enhance offensive security?",
    a2: "AI helps us emulate evolving attack techniques and identify vulnerabilities faster.",
    about_us: "About Us",
    about_us_text1:
      "At Vertex NeuralForge Security, we combine cutting-edge AI with offensive security expertise to help organizations stay ahead of threats. Our team of ethical hackers and red teamers is dedicated to making your systems unbreakable.",
    about_us_text2:
      "Founder and CEO of Vertex NeuralForge Security, brings over a decade of experience in cybersecurity, penetration testing, and AI-driven threat simulations. With a passion for innovation and a commitment to excellence, Adel leads our mission to redefine cybersecurity.",
    contact_us: "Contact Us",
    contact_us_p:
      "Have questions or want to discuss your security needs? Use the form below or reach out to us at: ",
    contact_us_name: "Name:",
    contact_us_email: "Email:",
    contact_us_message: "Message:",
    contact_us_send: "Send",
    footer2: "2023 Vertex NeuralForge Security. All rights reserved.",
    footer2_text: "Contact the CEO:",
  },
  fr: {
    welcome_header: "Bienvenue chez Vertex NeuralForge Security",
    welcome_subheader: "Offensive basée sur l'IA pour une défense inviolable",
    home: "Accueil",
    services: "Services",
    case_studies: "Études de cas",
    blog: "Blog",
    forum: "Forum",
    about_us_menu: "À propos",
    contact_menu: "Contact",
    hero: "Redéfinir la cybersécurité grâce à l'attaque pilotée par l'IA",
    hero_paragraphe:
      "Nous simulons des attaques réelles pour renforcer vos défenses. Êtes-vous prêt à tester vos limites ?",
    get_started: "Commencer",
    case_studies: "Études de cas",
    title1: "Simulation de faille de sécurité dans le secteur financier",
    text1:
      "Comment nous avons aidé une banque de premier plan à découvrir des vulnérabilités critiques.",
    title2: "Test d'intrusion dans l'infrastructure cloud",
    text2:
      "Sécurisation de l'environnement cloud d'un fournisseur SaaS mondial.",
    What_they_say: "Témoignages de nos clients",
    wts1: "Vertex NeuralForge nous a aidés à découvrir des vulnérabilités critiques dont nous ignorions l'existence. Je recommande vivement leurs services de red teaming!",
    wts1a: "John Doe, CTO chez SecureCorp",
    wts2: "Leurs simulations basées sur l'IA sont d'une qualité supérieure. Grâce à leur expertise, nos défenses sont plus solides que jamais.",
    wts2a: "Jane Smith, RSSI chez FinTech Inc.",
    founder_note: "Un message de notre fondateur ",
    founder_note_text:
      "La cybersécurité ne se limite pas à défendre les systèmes, il s’agit de garder une longueur d’avance sur les attaquants. Chez Vertex NeuralForge Security, nous utilisons l’IA et la sécurité offensive pour aider les organisations à construire des défenses inviolables. Je suis fier de diriger une équipe passionnée par l’innovation et engagée envers l’excellence.",
    footer: "Adel Bouatta, fondateur et PDG",
    services_title: "Nos Services",
    service_text:
      "Protégez votre entreprise avec des solutions de sécurité offensives de pointe.",
    service_pen_test: "Test d'Intrusion",
    service_pen_test_text:
      "Simulez des attaques réelles pour identifier les vulnérabilités de vos systèmes.",
    service_pen_test_t1: "Tests réseau, applications web et cloud",
    service_pen_test_t2: "Rapport détaillé sur les vulnérabilités",
    service_pen_test_t3: "Recommandations de correction",
    service_pen_test_price: "À partir de $2,000",
    service_red_team: "Équipe Rouge",
    contact_title: "Contactez-Nous",
    faq: "Foire aux questions",
    q1: "Qu'est-ce que le red teaming ?",
    a1: "Le red teaming est une simulation complète d'attaques réelles visant à tester les défenses d'une organisation.",
    q2: "Comment l'IA améliore-t-elle la sécurité offensive ?",
    a2: "L'IA nous aide à imiter les techniques d'attaque en constante évolution et à identifier plus rapidement les vulnérabilités.",
    about_us: "À propos de nous",
    about_us_text1:
      "Chez Vertex NeuralForge Security, nous combinons une IA de pointe et une expertise en sécurité offensive pour aider les organisations à anticiper les menaces. Notre équipe de hackers éthiques et de Red Teamers s'engage à rendre vos systèmes invulnérables.",
    about_us_text2:
      "Fondateur et PDG de Vertex NeuralForge Security, Adel possède plus de dix ans d'expérience en cybersécurité, tests d'intrusion et simulations de menaces basées sur l'IA. Passionné d'innovation et engagé envers l'excellence, il mène notre mission : redéfinir la cybersécurité.",
    contact_us: "Contactez-nous",
    contact_us_p:
      "Vous avez des questions ou souhaitez discuter de vos besoins en matière de sécurité ? Utilisez le formulaire ci-dessous ou contactez-nous à l'adresse: ",
    contact_us_name: "Nom:",
    contact_us_email: "Email:",
    contact_us_message: "Message:",
    contact_us_send: "Envoyer",
    footer2: "2023 Vertex NeuralForge Security. Tous droits réservés.",
    footer2_text: "Contacter le PDG :",
  },
  ru: {
    welcome_header: "Добро пожаловать в Vertex NeuralForge Security",
    welcome_subheader: "Защита с искусственным интеллектом",
    home: "Главная",
    services: "Услуги",
    case_studies: "Исследования случаев",
    blog: "Блог",
    forum: "Форумm",
    about_us_menu: "О нас",
    contact_menu: "Контакты",
    hero: "Переосмысление кибербезопасности с помощью атаки на основе ИИ",
    hero_paragraphe:
      "Мы моделируем реальные атаки, чтобы укрепить вашу защиту. Вы готовы проверить свои пределы?",
    get_started: "Начать",
    case_studies: "Практические примеры",
    title1: "Моделирование взлома финансового сектора",
    text1: "Как мы помогли ведущему банку обнаружить критические уязвимости.",
    title2: "Тест на проникновение в облачную инфраструктуру",
    text2: "Защита облачной среды глобального поставщика SaaS.",
    What_they_say: "Что говорят наши клиенты",
    wts1: "Vertex NeuralForge помог нам обнаружить критические уязвимости, о существовании которых мы даже не знали. Настоятельно рекомендую их услуги red teaming!",
    wts1a: "Джон Доу, технический директор SecureCorp",
    wts2: "Их симуляции на основе искусственного интеллекта — это новый уровень. Благодаря их опыту наша защита сильнее, чем когда-либо.",
    wts2a: "Джейн Смит, директор по информационной безопасности FinTech Inc.",
    founder_note: "Сообщение от нашего основателя",
    founder_note_text:
      "Кибербезопасность — это не просто защита систем, это возможность быть на шаг впереди злоумышленников. В Vertex NeuralForge Security мы используем ИИ и наступательную безопасность, чтобы помочь организациям создать нерушимую защиту. Я горжусь тем, что возглавляю команду, которая увлечена инновациями и стремится к совершенству.",
    footer: "Адел Буатта, основатель и генеральный директор",
    services_title: "Наши Услуги",
    service_text:
      "Защитите свой бизнес с помощью передовых решений по наступательной безопасности.",
    service_pen_test: "Тестирование на проникновение",
    service_pen_test_text:
      "Моделируйте реальные атаки, чтобы выявить уязвимости в ваших системах.",
    service_pen_test_t1: "Тестирование сети, веб-приложений и облака",
    service_pen_test_t2: "Подробный отчет об уязвимостях",
    service_pen_test_t3: "Рекомендации по исправлению",
    service_pen_test_price: "Начиная с $2,000",
    service_red_team: "Красная команда",
    contact_title: "Свяжитесь с нами",
    faq: "Часто задаваемые вопросы",
    q1: "Что такое red teaming?",
    a1: "Red teaming — это полномасштабная симуляция реальных атак для проверки защиты организации.",
    q2: "Как ИИ повышает наступательную безопасность?",
    a2: "ИИ помогает нам эмулировать развивающиеся методы атак и быстрее выявлять уязвимости.",
    about_us: "О нас",
    about_us_text1:
      "В Vertex NeuralForge Security мы объединяем передовой ИИ с экспертизой в области наступательной безопасности, чтобы помочь организациям опережать угрозы. Наша команда этичных хакеров и сотрудников Red Team стремится сделать ваши системы неуязвимыми.",
    about_us_text2:
      "Основатель и генеральный директор Vertex NeuralForge Security обладает более чем десятилетним опытом в области кибербезопасности, тестирования на проникновение и моделирования угроз с использованием ИИ. Благодаря своей страсти к инновациям и стремлению к совершенству Адел возглавляет нашу миссию по переосмыслению кибербезопасности.",
    contact_us: "Свяжитесь с нами",
    contact_us_p:
      "Есть вопросы или хотите обсудить ваши потребности в безопасности? Используйте форму ниже или свяжитесь с нами по адресу: ",
    contact_us_name: "Имя:",
    contact_us_email: "Электронная почта:",
    contact_us_message: "Сообщение:",
    contact_us_send: "Отправить",
    footer2: "2023 Vertex NeuralForge Security. Все права защищены.",
    footer2_text: "Свяжитесь с генеральным директором:",
  },
  ar: {
    welcome_header: "مرحبًا بكم في Vertex NeuralForge Security",
    welcome_subheader: "هجوم مدعوم بالذكاء الاصطناعي لدفاع منيع",
    home: " الصفحة الرئيسية",
    services: "الخدمات",
    case_studies: " دراسات الحالة",
    blog: "المدونة- Blog",
    forum: "المنتدى- Forum",
    about_us_menu: "عناانبذة",
    contact_menu: "للتواصل",
    hero: "إعادة تعريف الأمن السيبراني من خلال الهجوم المُدار بالذكاء الاصطناعي",
    hero_paragraphe:
      "نُحاكي هجمات واقعية لتعزيز دفاعاتكم. هل أنتم مستعدون لاختبار قدراتكم؟",
    get_started: "البدء",
    case_studies: "دراسات الحالة",
    title1: "محاكاة اختراق القطاع المالي",
    text1: "كيف ساعدنا بنكًا رائدًا في اكتشاف ثغرات أمنية حرجة؟",
    title2: "اختبار اختراق البنية التحتية السحابية",
    text2: ".تأمين بيئة سحابية لمزود خدمات برمجيات كخدمة عالمي",
    What_they_say: "آراء عملائنا",
    wts1: "ساعدتنا Vertex NeuralForge في الكشف عن ثغرات أمنية حرجة لم نكن نعرف بوجودها. نوصي بشدة بخدماتهم في مجال بناء فرق العمل الحمراء!",
    wts1a: "جون دو، المدير التقني في SecureCorp",
    wts2: ".محاكاة الذكاء الاصطناعي التي يقدمونها متطورة للغاية. بفضل خبرتهم، أصبحت دفاعاتنا أقوى من أي وقت مضى",
    wts2a: "جين سميث، مديرة أمن المعلومات في FinTech Inc.",
    founder_note: "رسالة من مؤسسنا",
    founder_note_text:
      "الأمن السيبراني لا يقتصر على حماية الأنظمة، بل يشمل أيضًا البقاء متقدمًا بخطوة على المهاجمين. في شركة فيرتكس نيورال فورج للأمن، نستخدم الذكاء الاصطناعي والأمن الهجومي لمساعدة المؤسسات على بناء دفاعات حصينة. أفخر بقيادة فريق شغوف بالابتكار وملتزم بالتميز",
    footer: "عادل بوعطة، المؤسس والرئيس التنفيذي",
    services_title: "خدماتنا",
    service_text: "حماية أعمالك باستخدام حلول أمنية هجومية متطورة.",
    service_pen_test: "اختبار الاختراق",
    service_pen_test_text: "محاكاة هجمات واقعية لتحديد نقاط الضعف في أنظمتك.",
    service_pen_test_t1: "اختبار الشبكات وتطبيقات الويب والسحابة",
    service_pen_test_t2: "تقرير مفصل عن نقاط الضعف",
    service_pen_test_t3: "توصيات للمعالجة",
    service_pen_test_price: " ابتداءً من 2000 دولار",
    service_red_team: "اختبار الفريق الأحمر",
    contact_title: "اتصل بنا",
    faq: "الأسئلة الشائعة",
    q1: "ما هو فريق العمل الأحمر؟",
    a1: "فريق العمل الأحمر هو محاكاة شاملة لهجمات واقعية لاختبار دفاعات المؤسسة",
    q2: "كيف يُحسّن الذكاء الاصطناعي الأمن الهجومي؟",
    a2: "يساعدنا الذكاء الاصطناعي على محاكاة تقنيات الهجوم المتطورة وتحديد نقاط الضعف بشكل أسرع",
    about_us: "نبذة عنا",
    about_us_text1:
      "في شركة فيرتكس نيورال فورج للأمن، نجمع بين أحدث تقنيات الذكاء الاصطناعي وخبرة الأمن الهجومي لمساعدة المؤسسات على استباق التهديدات. فريقنا من القراصنة الأخلاقيين وفرق الأمن الحمراء ملتزم بجعل أنظمتكم عصية على الاختراق",
    about_us_text2:
      ".يتمتع عادل، المؤسس والرئيس التنفيذي لشركة فيرتكس نيورال فورج للأمن، بخبرة تزيد عن عقد في مجال الأمن السيبراني، واختبار الاختراق، ومحاكاة التهديدات المدعومة بالذكاء الاصطناعي. بشغفه بالابتكار والتزامه بالتميز، يقود رسالتنا لإعادة تعريف الأمن السيبراني",
    contact_us: "تواصل معنا",
    contact_us_p:
      ":هل لديك أسئلة أو ترغب في مناقشة احتياجاتك الأمنية؟ استخدم النموذج أدناه أو تواصل معنا على",
    contact_us_name: "الاسم:",
    contact_us_email: " بريد إلكتروني:",
    contact_us_message: "الرسالة:",
    contact_us_send: "إرسال",
    footer2: ".جميع الحقوق محفوظة لشركة فيرتكس نيورال فورج سيكيوريتي ٢٠٢٣",
    footer2_text: "للتواصل مع الرئيس التنفيذي:",
  },
};

let currentLanguage = "en";

function loadTranslations(lang) {
  // Set RTL for Arabic
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // Update all translatable elements
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Update active language button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  currentLanguage = lang;
  localStorage.setItem("preferredLanguage", lang);
}

// ============== EXISTING FUNCTIONALITY ==============
// Your existing functions (contact form, animations, etc.)
function setupContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Your existing form handling logic here
      alert("Form submitted!"); // Placeholder
    });
  }
}

function initAnimations() {
  // Your existing animation code here
}

// ============== INITIALIZATION ==============
document.addEventListener("DOMContentLoaded", function () {
  // Initialize translations
  const savedLang = localStorage.getItem("preferredLanguage");
  const browserLang = navigator.language.split("-")[0];
  const defaultLang = translations[savedLang]
    ? savedLang
    : translations[browserLang]
    ? browserLang
    : "en";

  loadTranslations(defaultLang);

  // Initialize existing functionality
  setupContactForm();
  initAnimations();

  // Language switcher event listeners
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      if (translations[lang]) {
        loadTranslations(lang);
      }
    });
  });
});
