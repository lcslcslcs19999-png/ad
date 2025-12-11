// ============================================
// Language Switcher System
// ============================================

const translations = {
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About",
        navServices: "Services",
        navProjects: "Projects",
        navSafety: "HSE",
        navContact: "Contact",
        
        // Logo
        logoText: "AD GROUP",
        logoTagline: "Oil & Gas Excellence",
        
        // Hero Section
        heroTitle: "Powering the Future",
        heroSubtitle: "Integrated Oil & Gas Solutions",
        heroDescription: "Leading provider of comprehensive oil & gas services, delivering innovative solutions in drilling, completion, production, and engineering operations worldwide",
        heroBtn1: "Our Services",
        heroBtn2: "Contact Us",
        statProjects: "Completed Projects",
        statYears: "Years of Experience",
        statSatisfaction: "Client Satisfaction",
        
        // About Section
        aboutTag: "Who We Are",
        aboutTitle: "About AD Group",
        aboutDescription: "A trusted partner in the oil and gas industry, committed to operational excellence and sustainable practices.",
        aboutHeading: "Industry Leadership",
        aboutPara1: "AD Group stands at the forefront of oil and gas services, delivering cutting-edge solutions that drive efficiency and maximize value for our clients. With decades of combined expertise, our team brings unparalleled knowledge to every project.",
        aboutPara2: "We specialize in the full spectrum of oilfield services, from exploration and drilling to production optimization and decommissioning. Our commitment to innovation, safety, and environmental stewardship sets us apart in the industry.",
        feature1Title: "Mission-Driven",
        feature1Desc: "Delivering excellence in every operation",
        feature2Title: "Global Reach",
        feature2Desc: "Operating across major oil & gas regions",
        feature3Title: "Innovation First",
        feature3Desc: "Leveraging latest technologies & methods",
        
        // Services Section
        servicesTag: "What We Offer",
        servicesTitle: "Comprehensive Oil & Gas Services",
        servicesDescription: "End-to-end solutions tailored to your operational needs",
        
        // Service Cards
        service1Title: "Drilling Services",
        service1Desc: "Complete drilling solutions including directional drilling, horizontal drilling, and well planning with state-of-the-art equipment and experienced crews.",
        service1Item1: "Directional & Horizontal Drilling",
        service1Item2: "Drilling Optimization",
        service1Item3: "Wellbore Positioning",
        service1Item4: "Drilling Fluids Management",
        
        service2Title: "Well Completion",
        service2Desc: "Expert completion services to ensure optimal well performance, from perforation to installation of production equipment.",
        service2Item1: "Perforation Services",
        service2Item2: "Tubing & Casing Installation",
        service2Item3: "Wellhead Equipment",
        service2Item4: "Sand Control Solutions",
        
        service3Title: "Well Intervention",
        service3Desc: "Comprehensive workover and intervention services to maintain and enhance well productivity throughout the lifecycle.",
        service3Item1: "Coiled Tubing Services",
        service3Item2: "Wireline Operations",
        service3Item3: "Well Stimulation",
        service3Item4: "Fishing & Remedial Work",
        
        service4Title: "Production Services",
        service4Desc: "Optimize production rates and maximize recovery with our advanced production enhancement solutions and monitoring systems.",
        service4Item1: "Production Optimization",
        service4Item2: "Artificial Lift Systems",
        service4Item3: "Flow Assurance",
        service4Item4: "Production Monitoring",
        
        service5Title: "Equipment Rental",
        service5Desc: "Extensive fleet of premium oilfield equipment available for short and long-term rental with full technical support.",
        service5Item1: "Drilling Equipment",
        service5Item2: "Pumping Units",
        service5Item3: "Pressure Control Equipment",
        service5Item4: "Testing Equipment",
        
        service6Title: "Inspection Services",
        service6Desc: "Advanced inspection and integrity management to ensure safe and compliant operations across all assets.",
        service6Item1: "Pipeline Inspection",
        service6Item2: "NDT Services",
        service6Item3: "Corrosion Monitoring",
        service6Item4: "Integrity Management",
        
        service7Title: "Engineering & Consulting",
        service7Desc: "Expert engineering solutions and strategic consulting to optimize your operations and overcome technical challenges.",
        service7Item1: "Reservoir Engineering",
        service7Item2: "Facility Design",
        service7Item3: "Project Management",
        service7Item4: "Technical Consulting",
        
        service8Title: "Maintenance Services",
        service8Desc: "Comprehensive maintenance programs to ensure optimal performance, minimize downtime, and extend asset life.",
        service8Item1: "Preventive Maintenance",
        service8Item2: "Equipment Overhaul",
        service8Item3: "Emergency Repairs",
        service8Item4: "Spare Parts Supply",
        
        service9Title: "Logistics & Supply Chain",
        service9Desc: "Efficient logistics management and supply chain solutions ensuring timely delivery of materials and equipment.",
        service9Item1: "Material Management",
        service9Item2: "Transportation Services",
        service9Item3: "Warehouse Solutions",
        service9Item4: "Inventory Management",
        
        // Projects Section
        projectsTag: "Our Work",
        projectsTitle: "Featured Projects",
        projectsDescription: "Showcasing excellence in execution across diverse operations",
        
        project1Title: "Deep Water Exploration",
        project1Desc: "Successfully completed 12-well drilling campaign in challenging offshore environment, achieving 99% operational efficiency.",
        project1Stat1: "12 Wells",
        project1Stat2: "6 Months",
        project1Stat3: "$50M Value",
        project1Category: "Offshore Drilling",
        
        project2Title: "Field Optimization Program",
        project2Desc: "Implemented comprehensive production optimization increasing field output by 35% through advanced intervention techniques.",
        project2Stat1: "45 Wells",
        project2Stat2: "+35% Output",
        project2Stat3: "12 Months",
        project2Category: "Production Enhancement",
        
        project3Title: "Pipeline Integrity Management",
        project3Desc: "Comprehensive inspection and maintenance program for 500km pipeline network ensuring safe and reliable operations.",
        project3Stat1: "500km Network",
        project3Stat2: "100% Safety",
        project3Stat3: "Ongoing",
        project3Category: "Infrastructure",
        
        // Safety Section
        safetyTag: "Safety First",
        safetyTitle: "Health, Safety & Environment",
        safetyPara: "At AD Group, safety is not just a priority—it's our core value. We maintain the highest standards of health, safety, and environmental protection across all operations.",
        safety1Title: "🎯 Zero Harm Philosophy",
        safety1Desc: "Committed to zero incidents through rigorous safety protocols and continuous training",
        safety2Title: "📋 Compliance Excellence",
        safety2Desc: "Full compliance with international HSE standards including ISO 45001 and ISO 14001",
        safety3Title: "🌱 Environmental Stewardship",
        safety3Desc: "Minimizing environmental impact through sustainable practices and green technologies",
        safety4Title: "👷 Workforce Development",
        safety4Desc: "Comprehensive training programs ensuring every team member is equipped for safe operations",
        metricHours: "Man-Hours Without LTI",
        metricCompliance: "Safety Compliance Rate",
        metricTraining: "Safety Training Hours/Year",
        
        // Contact Section
        contactTag: "Get In Touch",
        contactTitle: "Contact Us",
        contactDescription: "Ready to discuss your project? Our team is here to help.",
        contactAddress: "Office Address",
        contactAddressText: "Energy Tower, Level 24<br>Oil & Gas District<br>Houston, TX 77002",
        contactPhone: "Phone",
        contactPhoneText: "+1 (555) 123-4567<br>+1 (555) 123-4568",
        contactEmail: "Email",
        contactEmailText: "info@adgroup-oil.com<br>sales@adgroup-oil.com",
        contactHours: "Business Hours",
        contactHoursText: "Monday - Friday: 8:00 AM - 6:00 PM<br>24/7 Emergency Support Available",
        
        // Contact Form
        formName: "Your Name",
        formEmail: "Your Email",
        formPhone: "Phone Number",
        formService: "Select Service Interest",
        formMessage: "Tell us about your project...",
        formSubmit: "Send Message",
        formSuccess: "Thank you for your message! We'll get back to you soon.",
        formError: "Please fill in all required fields.",
        
        // Footer
        footerDesc: "Your trusted partner in comprehensive oil and gas services, delivering excellence across every aspect of energy operations.",
        footerQuickLinks: "Quick Links",
        footerServices: "Services",
        footerConnect: "Connect",
        footerCareers: "Careers",
        footerNews: "News & Updates",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerCookie: "Cookie Policy",
        footerCopyright: "© 2024 AD Group. All rights reserved."
    },
    ar: {
        // Navigation
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "خدماتنا",
        navProjects: "مشاريعنا",
        navSafety: "السلامة",
        navContact: "اتصل بنا",
        
        // Logo
        logoText: "مجموعة AD",
        logoTagline: "التميز في النفط والغاز",
        
        // Hero Section
        heroTitle: "نحو مستقبل الطاقة",
        heroSubtitle: "حلول متكاملة للنفط والغاز",
        heroDescription: "المزود الرائد لخدمات النفط والغاز الشاملة، نقدم حلولاً مبتكرة في الحفر والإكمال والإنتاج والعمليات الهندسية عالمياً",
        heroBtn1: "خدماتنا",
        heroBtn2: "تواصل معنا",
        statProjects: "مشروع منجز",
        statYears: "عام من الخبرة",
        statSatisfaction: "رضا العملاء",
        
        // About Section
        aboutTag: "من نحن",
        aboutTitle: "عن مجموعة AD",
        aboutDescription: "شريك موثوق في صناعة النفط والغاز، ملتزمون بالتميز التشغيلي والممارسات المستدامة.",
        aboutHeading: "الريادة في الصناعة",
        aboutPara1: "تقف مجموعة AD في طليعة خدمات النفط والغاز، حيث نقدم حلولاً متطورة تدفع الكفاءة وتعظم القيمة لعملائنا. مع عقود من الخبرة المجمعة، يقدم فريقنا معرفة لا مثيل لها في كل مشروع.",
        aboutPara2: "نتخصص في الطيف الكامل لخدمات الحقول النفطية، من الاستكشاف والحفر إلى تحسين الإنتاج والتخلص من الخدمة. إن التزامنا بالابتكار والسلامة والإشراف البيئي يميزنا في الصناعة.",
        feature1Title: "مدفوعون بالمهمة",
        feature1Desc: "تقديم التميز في كل عملية",
        feature2Title: "انتشار عالمي",
        feature2Desc: "العمل في مناطق النفط والغاز الرئيسية",
        feature3Title: "الابتكار أولاً",
        feature3Desc: "الاستفادة من أحدث التقنيات والأساليب",
        
        // Services Section
        servicesTag: "ما نقدمه",
        servicesTitle: "خدمات النفط والغاز الشاملة",
        servicesDescription: "حلول شاملة مصممة لتلبية احتياجاتك التشغيلية",
        
        // Service Cards
        service1Title: "خدمات الحفر",
        service1Desc: "حلول حفر كاملة تشمل الحفر الاتجاهي والأفقي وتخطيط الآبار بمعدات حديثة وطواقم ذات خبرة.",
        service1Item1: "الحفر الاتجاهي والأفقي",
        service1Item2: "تحسين الحفر",
        service1Item3: "تحديد موضع بئر الحفر",
        service1Item4: "إدارة سوائل الحفر",
        
        service2Title: "إكمال الآبار",
        service2Desc: "خدمات إكمال متخصصة لضمان الأداء الأمثل للآبار، من الثقب إلى تركيب معدات الإنتاج.",
        service2Item1: "خدمات الثقب",
        service2Item2: "تركيب الأنابيب والغلاف",
        service2Item3: "معدات رأس البئر",
        service2Item4: "حلول التحكم في الرمال",
        
        service3Title: "تدخل الآبار",
        service3Desc: "خدمات شاملة للصيانة والتدخل للحفاظ على إنتاجية الآبار وتعزيزها طوال دورة الحياة.",
        service3Item1: "خدمات الأنابيب الملفوفة",
        service3Item2: "عمليات الأسلاك",
        service3Item3: "تحفيز الآبار",
        service3Item4: "الصيد والأعمال العلاجية",
        
        service4Title: "خدمات الإنتاج",
        service4Desc: "تحسين معدلات الإنتاج وتعظيم الاستخلاص من خلال حلول تعزيز الإنتاج المتقدمة وأنظمة المراقبة.",
        service4Item1: "تحسين الإنتاج",
        service4Item2: "أنظمة الرفع الصناعي",
        service4Item3: "ضمان التدفق",
        service4Item4: "مراقبة الإنتاج",
        
        service5Title: "تأجير المعدات",
        service5Desc: "أسطول واسع من معدات الحقول النفطية المتميزة متاح للإيجار قصير وطويل الأجل مع دعم فني كامل.",
        service5Item1: "معدات الحفر",
        service5Item2: "وحدات الضخ",
        service5Item3: "معدات التحكم في الضغط",
        service5Item4: "معدات الاختبار",
        
        service6Title: "خدمات التفتيش",
        service6Desc: "تفتيش متقدم وإدارة السلامة لضمان عمليات آمنة ومتوافقة عبر جميع الأصول.",
        service6Item1: "فحص خطوط الأنابيب",
        service6Item2: "خدمات الفحص غير الإتلافي",
        service6Item3: "مراقبة التآكل",
        service6Item4: "إدارة السلامة",
        
        service7Title: "الهندسة والاستشارات",
        service7Desc: "حلول هندسية متخصصة واستشارات استراتيجية لتحسين عملياتك والتغلب على التحديات التقنية.",
        service7Item1: "هندسة المكامن",
        service7Item2: "تصميم المنشآت",
        service7Item3: "إدارة المشاريع",
        service7Item4: "الاستشارات الفنية",
        
        service8Title: "خدمات الصيانة",
        service8Desc: "برامج صيانة شاملة لضمان الأداء الأمثل وتقليل التوقف عن العمل وإطالة عمر الأصول.",
        service8Item1: "الصيانة الوقائية",
        service8Item2: "إصلاح المعدات",
        service8Item3: "الإصلاحات الطارئة",
        service8Item4: "توريد قطع الغيار",
        
        service9Title: "اللوجستيات وسلسلة التوريد",
        service9Desc: "إدارة لوجستية فعالة وحلول سلسلة التوريد لضمان التسليم في الوقت المناسب للمواد والمعدات.",
        service9Item1: "إدارة المواد",
        service9Item2: "خدمات النقل",
        service9Item3: "حلول المستودعات",
        service9Item4: "إدارة المخزون",
        
        // Projects Section
        projectsTag: "أعمالنا",
        projectsTitle: "مشاريع مميزة",
        projectsDescription: "عرض التميز في التنفيذ عبر عمليات متنوعة",
        
        project1Title: "استكشاف المياه العميقة",
        project1Desc: "إنجاز حملة حفر 12 بئرًا بنجاح في بيئة بحرية صعبة، وتحقيق كفاءة تشغيلية بنسبة 99٪.",
        project1Stat1: "12 بئر",
        project1Stat2: "6 أشهر",
        project1Stat3: "قيمة 50 مليون دولار",
        project1Category: "الحفر البحري",
        
        project2Title: "برنامج تحسين الحقل",
        project2Desc: "تنفيذ تحسين إنتاج شامل زاد من إنتاج الحقل بنسبة 35٪ من خلال تقنيات التدخل المتقدمة.",
        project2Stat1: "45 بئر",
        project2Stat2: "+35٪ إنتاج",
        project2Stat3: "12 شهرًا",
        project2Category: "تعزيز الإنتاج",
        
        project3Title: "إدارة سلامة خطوط الأنابيب",
        project3Desc: "برنامج شامل للفحص والصيانة لشبكة خطوط أنابيب بطول 500 كم لضمان عمليات آمنة وموثوقة.",
        project3Stat1: "شبكة 500 كم",
        project3Stat2: "100٪ أمان",
        project3Stat3: "مستمر",
        project3Category: "البنية التحتية",
        
        // Safety Section
        safetyTag: "السلامة أولاً",
        safetyTitle: "الصحة والسلامة والبيئة",
        safetyPara: "في مجموعة AD، السلامة ليست مجرد أولوية - إنها قيمتنا الأساسية. نحافظ على أعلى معايير الصحة والسلامة والحماية البيئية في جميع العمليات.",
        safety1Title: "🎯 فلسفة عدم الضرر",
        safety1Desc: "ملتزمون بعدم وقوع حوادث من خلال بروتوكولات السلامة الصارمة والتدريب المستمر",
        safety2Title: "📋 التميز في الامتثال",
        safety2Desc: "الامتثال الكامل للمعايير الدولية للصحة والسلامة والبيئة بما في ذلك ISO 45001 و ISO 14001",
        safety3Title: "🌱 الإشراف البيئي",
        safety3Desc: "تقليل التأثير البيئي من خلال الممارسات المستدامة والتقنيات الخضراء",
        safety4Title: "👷 تطوير القوى العاملة",
        safety4Desc: "برامج تدريبية شاملة تضمن أن كل عضو في الفريق مجهز للعمليات الآمنة",
        metricHours: "ساعات عمل بدون إصابات",
        metricCompliance: "معدل الامتثال للسلامة",
        metricTraining: "ساعات تدريب على السلامة/سنة",
        
        // Contact Section
        contactTag: "تواصل معنا",
        contactTitle: "اتصل بنا",
        contactDescription: "هل أنت مستعد لمناقشة مشروعك؟ فريقنا هنا للمساعدة.",
        contactAddress: "عنوان المكتب",
        contactAddressText: "برج الطاقة، المستوى 24<br>منطقة النفط والغاز<br>هيوستن، تكساس 77002",
        contactPhone: "الهاتف",
        contactPhoneText: "+1 (555) 123-4567<br>+1 (555) 123-4568",
        contactEmail: "البريد الإلكتروني",
        contactEmailText: "info@adgroup-oil.com<br>sales@adgroup-oil.com",
        contactHours: "ساعات العمل",
        contactHoursText: "الإثنين - الجمعة: 8:00 صباحًا - 6:00 مساءً<br>دعم طوارئ على مدار الساعة",
        
        // Contact Form
        formName: "اسمك",
        formEmail: "بريدك الإلكتروني",
        formPhone: "رقم الهاتف",
        formService: "اختر الخدمة المطلوبة",
        formMessage: "أخبرنا عن مشروعك...",
        formSubmit: "إرسال الرسالة",
        formSuccess: "شكراً لرسالتك! سنعود إليك قريباً.",
        formError: "يرجى ملء جميع الحقول المطلوبة.",
        
        // Footer
        footerDesc: "شريكك الموثوق في خدمات النفط والغاز الشاملة، نقدم التميز في كل جانب من جوانب عمليات الطاقة.",
        footerQuickLinks: "روابط سريعة",
        footerServices: "الخدمات",
        footerConnect: "تواصل",
        footerCareers: "الوظائف",
        footerNews: "الأخبار والتحديثات",
        footerPrivacy: "سياسة الخصوصية",
        footerTerms: "شروط الخدمة",
        footerCookie: "سياسة ملفات تعريف الارتباط",
        footerCopyright: "© 2024 مجموعة AD. جميع الحقوق محفوظة."
    }
};

// Current language (default: Arabic)
let currentLang = localStorage.getItem('language') || 'ar';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    // Language switcher click event
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', toggleLanguage);
    }
});

// Toggle between English and Arabic
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(currentLang);
    localStorage.setItem('language', currentLang);
}

// Set language and update all text
function setLanguage(lang) {
    const html = document.documentElement;
    const t = translations[lang];
    
    // Update HTML language attribute only (keep RTL direction)
    html.setAttribute('lang', lang);
    // Direction stays RTL always - no flip
    
    // Update language switcher button
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = lang === 'en' ? 'AR' : 'EN';
    }
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.innerHTML = t[key];
            }
        }
    });
    
    // Update navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        const enText = link.getAttribute('data-en');
        const arText = link.getAttribute('data-ar');
        if (lang === 'en' && enText) {
            link.textContent = enText;
        } else if (lang === 'ar' && arText) {
            link.textContent = arText;
        }
    });
}

// Export for use in other scripts
window.currentLanguage = () => currentLang;
window.getTranslation = (key) => translations[currentLang][key];
