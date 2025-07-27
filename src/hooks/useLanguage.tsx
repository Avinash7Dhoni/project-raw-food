import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'te' | 'ta' | 'mr' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.suppliers': 'Suppliers',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.joinNow': 'Join Now',
    'nav.announcement': 'Group orders now get up to 25% discount! Join today.',

    // Hero
    'hero.title1': 'Street Food',
    'hero.title2': 'Market',
    'hero.title3': 'Revolution',
    'hero.subtitle': 'Raw Material Sourcing for Street Food Vendors',
    'hero.description': 'Connect with trusted suppliers. Get bulk discounts through group orders. AI-powered suggestions in your local language.',
    'hero.stats.vendors': 'Active Vendors',
    'hero.stats.saved': 'Saved Monthly',
    'hero.stats.discount': 'Avg. Discount',
    'hero.vendor': "I'm a Vendor",
    'hero.supplier': "I'm a Supplier",

    // Features
    'features.title': 'Why Choose RawMandi?',
    'features.subtitle': 'Everything you need to source raw materials efficiently',
    'features.groupBuying': 'Group Buying Power',
    'features.groupBuyingDesc': 'Join with nearby vendors for bulk purchases and get better rates',
    'features.aiSuggestions': 'AI-Powered Suggestions',
    'features.aiSuggestionsDesc': 'Smart recommendations based on your location and order history',
    'features.multilingual': 'Multilingual Support',
    'features.multilingualDesc': 'Voice and text support in Hindi, Tamil, Telugu, Bengali, Marathi',
    'features.liveTracking': 'Live Order Tracking',
    'features.liveTrackingDesc': 'Real-time updates from order placement to delivery',
    'features.trustedSuppliers': 'Verified Suppliers',
    'features.trustedSuppliersDesc': 'All suppliers are verified with ratings and reviews',
    'features.flexiblePayment': 'Flexible Payments',
    'features.flexiblePaymentDesc': 'UPI, Bank Transfer, or Cash on Delivery options',

    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that works for your business',
    'pricing.basic': 'Basic',
    'pricing.basicDesc': 'Perfect for small vendors',
    'pricing.pro': 'Pro',
    'pricing.proDesc': 'Best for growing businesses',
    'pricing.enterprise': 'Enterprise',
    'pricing.enterpriseDesc': 'For large operations',
    'pricing.getStarted': 'Get Started',
    'pricing.contactSales': 'Contact Sales',

    // Footer
    'footer.tagline': 'Empowering street food vendors across India',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': '© 2024 RawMandi. All rights reserved.',
  },
  hi: {
    // Navigation
    'nav.features': 'विशेषताएं',
    'nav.pricing': 'मूल्य निर्धारण',
    'nav.suppliers': 'आपूर्तिकर्ता',
    'nav.contact': 'संपर्क',
    'nav.login': 'लॉगिन',
    'nav.joinNow': 'अभी जुड़ें',
    'nav.announcement': 'समूहिक ऑर्डर पर अब 25% तक छूट! आज ही जुड़ें।',

    // Hero
    'hero.title1': 'सड़क के',
    'hero.title2': 'स्वाद का',
    'hero.title3': 'बाज़ार',
    'hero.subtitle': 'स्ट्रीट फूड विक्रेताओं के लिए कच्चा माल सोर्सिंग',
    'hero.description': 'विश्वसनीय आपूर्तिकर्ताओं से जुड़ें। समूहिक ऑर्डर के माध्यम से थोक छूट प्राप्त करें। आपकी स्थानीय भाषा में AI-संचालित सुझाव।',
    'hero.stats.vendors': 'सक्रिय विक्रेता',
    'hero.stats.saved': 'मासिक बचत',
    'hero.stats.discount': 'औसत छूट',
    'hero.vendor': 'मैं एक विक्रेता हूं',
    'hero.supplier': 'मैं एक आपूर्तिकर्ता हूं',

    // Features
    'features.title': 'RawMandi क्यों चुनें?',
    'features.subtitle': 'कच्चा माल कुशलता से प्राप्त करने के लिए आपको जो कुछ भी चाहिए',
    'features.groupBuying': 'समूहिक खरीदारी शक्ति',
    'features.groupBuyingDesc': 'थोक खरीदारी के लिए आस-पास के विक्रेताओं के साथ जुड़ें',
    'features.aiSuggestions': 'AI-संचालित सुझाव',
    'features.aiSuggestionsDesc': 'आपके स्थान और ऑर्डर इतिहास के आधार पर स्मार्ट सिफारिशें',
    'features.multilingual': 'बहुभाषी समर्थन',
    'features.multilingualDesc': 'हिंदी, तमिल, तेलुगु, बंगाली, मराठी में आवाज और पाठ समर्थन',
    'features.liveTracking': 'लाइव ऑर्डर ट्रैकिंग',
    'features.liveTrackingDesc': 'ऑर्डर प्लेसमेंट से डिलीवरी तक रियल-टाइम अपडेट',
    'features.trustedSuppliers': 'सत्यापित आपूर्तिकर्ता',
    'features.trustedSuppliersDesc': 'सभी आपूर्तिकर्ता रेटिंग और समीक्षाओं के साथ सत्यापित हैं',
    'features.flexiblePayment': 'लचीला भुगतान',
    'features.flexiblePaymentDesc': 'UPI, बैंक ट्रांसफर, या कैश ऑन डिलीवरी विकल्प',

    // Pricing
    'pricing.title': 'सरल, पारदर्शी मूल्य निर्धारण',
    'pricing.subtitle': 'वह योजना चुनें जो आपके व्यवसाय के लिए काम करे',
    'pricing.basic': 'बेसिक',
    'pricing.basicDesc': 'छोटे विक्रेताओं के लिए बिल्कुल सही',
    'pricing.pro': 'प्रो',
    'pricing.proDesc': 'बढ़ते व्यवसायों के लिए सबसे अच्छा',
    'pricing.enterprise': 'एंटरप्राइज़',
    'pricing.enterpriseDesc': 'बड़े संचालन के लिए',
    'pricing.getStarted': 'शुरू करें',
    'pricing.contactSales': 'सेल्स से संपर्क करें',

    // Footer
    'footer.tagline': 'भारत भर के स्ट्रीट फूड विक्रेताओं को सशक्त बनाना',
    'footer.features': 'विशेषताएं',
    'footer.pricing': 'मूल्य निर्धारण',
    'footer.about': 'हमारे बारे में',
    'footer.contact': 'संपर्क',
    'footer.support': 'सहायता',
    'footer.legal': 'कानूनी',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'सेवा की शर्तें',
    'footer.rights': '© 2024 RawMandi। सभी अधिकार सुरक्षित।',
  },
  te: {
    // Navigation
    'nav.features': 'లక్షణాలు',
    'nav.pricing': 'ధర నిర్ణయం',
    'nav.suppliers': 'సరఫరాదారులు',
    'nav.contact': 'సంప్రదించండి',
    'nav.login': 'లాగిన్',
    'nav.joinNow': 'ఇప్పుడే చేరండి',
    'nav.announcement': 'గ్రూప్ ఆర్డర్లపై ఇప్పుడు 25% వరకు తగ్గింపు! ఈరోజే చేరండి.',

    // Hero
    'hero.title1': 'వీధి',
    'hero.title2': 'ఆహార',
    'hero.title3': 'మార్కెట్',
    'hero.subtitle': 'స్ట్రీట్ ఫుడ్ వెండర్లకు ముడిసరుకుల సోర్సింగ్',
    'hero.description': 'విశ్వసనీय సరఫరాదారులతో కనెక్ట్ అవ్వండి. గ్రూప్ ఆర్డర్ల ద్వారా భారీ తగ్గింపులు పొందండి. మీ స్థానిక భాషలో AI-శక్తితో కూడిన సూచనలు.',
    'hero.stats.vendors': 'క్రియాశీల వెండర్లు',
    'hero.stats.saved': 'నెలవారీ ఆదా',
    'hero.stats.discount': 'సగటు తగ్గింపు',
    'hero.vendor': 'నేను వెండర్ని',
    'hero.supplier': 'నేను సరఫరాదారుని',

    // Features
    'features.title': 'RawMandi ను ఎందుకు ఎంచుకోవాలి?',
    'features.subtitle': 'ముడిసరుకులను సమర్థవంతంగా సోర్స్ చేయడానికి మీకు అవసరమైనవన్నీ',
    'features.groupBuying': 'గ్రూప్ కొనుగోలు శక్తి',
    'features.groupBuyingDesc': 'భారీ కొనుగోళ్లకు సమీపంలోని వెండర్లతో చేరండి',
    'features.aiSuggestions': 'AI-శక్తితో కూడిన సూచనలు',
    'features.aiSuggestionsDesc': 'మీ స్థానం మరియు ఆర్డర్ చరిత్ర ఆధారంగా స్మార్ట్ సిఫార్సులు',
    'features.multilingual': 'బహుభాషా మద్దతు',
    'features.multilingualDesc': 'తెలుగు, హిందీ, తమిళం, బెంగాలీ, మరాఠీలో వాయిస్ మరియు టెక్స్ట్ మద్దతు',
    'features.liveTracking': 'లైవ్ ఆర్డర్ ట్రాకింగ్',
    'features.liveTrackingDesc': 'ఆర్డర్ ప్లేస్మెంట్ నుండి డెలివరీ వరకు రియల్-టైమ్ అప్డేట్లు',
    'features.trustedSuppliers': 'ధృవీకరించబడిన సరఫరాదారులు',
    'features.trustedSuppliersDesc': 'అన్ని సరఫరాదారులు రేటింగ్లు మరియు సమీక్షలతో ధృవీకరించబడ్డారు',
    'features.flexiblePayment': 'సౌకర్యవంతమైన చెల్లింపులు',
    'features.flexiblePaymentDesc': 'UPI, బ్యాంక్ బదిలీ, లేదా క్యాష్ ఆన్ డెలివరీ ఎంపికలు',

    // Pricing
    'pricing.title': 'సరళమైన, పారదర్శక ధర నির్ణయం',
    'pricing.subtitle': 'మీ వ్యాపారానికి పనికొచ్చే ప్లాన్ని ఎంచుకోండి',
    'pricing.basic': 'బేసిక్',
    'pricing.basicDesc': 'చిన్న వెండర్లకు సరైనది',
    'pricing.pro': 'ప్రో',
    'pricing.proDesc': 'అభివృద్ధి చెందుతున్న వ్యాపారాలకు ఉత్తమమైనది',
    'pricing.enterprise': 'ఎంటర్‌ప్రైజ్',
    'pricing.enterpriseDesc': 'పెద్ద కార్యకలాపాలకు',
    'pricing.getStarted': 'ప్రారంభించండి',
    'pricing.contactSales': 'విక్రయాలను సంప్రదించండి',

    // Footer
    'footer.tagline': 'భారతదేశం అంతటా స్ట్రీట్ ఫుడ్ వెండర్లను శక్తివంతం చేయడం',
    'footer.features': 'లక్షణాలు',
    'footer.pricing': 'ధర నిర్ణయం',
    'footer.about': 'మా గురించి',
    'footer.contact': 'సంప్రదించండి',
    'footer.support': 'మద్దతు',
    'footer.legal': 'చట్టపరమైన',
    'footer.privacy': 'గోప్యతా విధానం',
    'footer.terms': 'సేవా నిబంధనలు',
    'footer.rights': '© 2024 RawMandi. అన్ని హక్కులు సమర్పితం.',
  },
  ta: {
    // Navigation
    'nav.features': 'அம்சங்கள்',
    'nav.pricing': 'விலை நிர்ணயம்',
    'nav.suppliers': 'சப்ளையர்கள்',
    'nav.contact': 'தொடர்பு',
    'nav.login': 'உள்நுழைய',
    'nav.joinNow': 'இப்போதே சேரவும்',
    'nav.announcement': 'குழு ஆர்டர்களில் இப்போது 25% வரை தள்ளுபடி! இன்றே சேரவும்.',

    // Hero
    'hero.title1': 'தெரு',
    'hero.title2': 'உணவு',
    'hero.title3': 'சந்தை',
    'hero.subtitle': 'தெரு உணவு விற்பனையாளர்களுக்கான மூலப்பொருள் ஆதாரம்',
    'hero.description': 'நம்பகமான சப்ளையர்களுடன் இணைந்திருங்கள். குழு ஆர்டர்கள் மூலம் மொத்த தள்ளுபடிகளைப் பெறுங்கள். உங்கள் உள்ளூர் மொழியில் AI-இயக்கப்படும் பரிந்துரைகள்.',
    'hero.stats.vendors': 'செயலில் உள்ள விற்பனையாளர்கள்',
    'hero.stats.saved': 'மாதாந்திர சேமிப்பு',
    'hero.stats.discount': 'சராசரி தள்ளுபடி',
    'hero.vendor': 'நான் ஒரு விற்பனையாளர்',
    'hero.supplier': 'நான் ஒரு சப்ளையர்',

    // Features
    'features.title': 'RawMandi ஐ ஏன் தேர்வு செய்ய வேண்டும்?',
    'features.subtitle': 'மூலப்பொருட்களை திறமையாக பெறுவதற்கு உங்களுக்கு தேவையான அனைத்தும்',
    'features.groupBuying': 'குழு வாங்கும் சக்தி',
    'features.groupBuyingDesc': 'மொத்த வாங்குதலுக்காக அருகில் உள்ள விற்பனையாளர்களுடன் சேர்ந்திருங்கள்',
    'features.aiSuggestions': 'AI-இயக்கப்படும் பரிந்துரைகள்',
    'features.aiSuggestionsDesc': 'உங்கள் இடம் மற்றும் ஆர்டர் வரலாற்றின் அடிப்படையில் ஸ்மார்ட் பரிந்துரைகள்',
    'features.multilingual': 'பல மொழி ஆதரவு',
    'features.multilingualDesc': 'தமிழ், ஹிந்தி, தெலுங்கு, பெங்காலி, மராத்தியில் குரல் மற்றும் உரை ஆதரவு',
    'features.liveTracking': 'நேரடி ஆர்டர் கண்காணிப்பு',
    'features.liveTrackingDesc': 'ஆர்டர் வைப்பது முதல் டெலிவரி வரை நேரடி புதுப்பிப்புகள்',
    'features.trustedSuppliers': 'சரிபார்க்கப்பட்ட சப்ளையர்கள்',
    'features.trustedSuppliersDesc': 'அனைத்து சப்ளையர்களும் மதிப்பீடுகள் மற்றும் மதிப்புரைகளுடன் சரிபார்க்கப்பட்டுள்ளனர்',
    'features.flexiblePayment': 'நெகிழ்வான கட்டணங்கள்',
    'features.flexiblePaymentDesc': 'UPI, வங்கி பரிமாற்றம், அல்லது கேஷ் ஆன் டெலிவரி விருப்பங்கள்',

    // Pricing
    'pricing.title': 'எளிய, வெளிப்படையான விலை நிர்ணயம்',
    'pricing.subtitle': 'உங்கள் வணிகத்திற்கு பயனுள்ள திட்டத்தை தேர்ந்தெடுக்கவும்',
    'pricing.basic': 'அடிப்படை',
    'pricing.basicDesc': 'சிறிய விற்பனையாளர்களுக்கு ஏற்றது',
    'pricing.pro': 'ப்ரோ',
    'pricing.proDesc': 'வளர்ந்து வரும் வணிகங்களுக்கு சிறந்தது',
    'pricing.enterprise': 'எண்டர்பிரைஸ்',
    'pricing.enterpriseDesc': 'பெரிய செயல்பாடுகளுக்கு',
    'pricing.getStarted': 'தொடங்குங்கள்',
    'pricing.contactSales': 'விற்பனையைத் தொடர்பு கொள்ளவும்',

    // Footer
    'footer.tagline': 'இந்தியா முழுவதும் தெரு உணவு விற்பனையாளர்களை அதிகாரப்படுத்துதல்',
    'footer.features': 'அம்சங்கள்',
    'footer.pricing': 'விலை நிர்ணயம்',
    'footer.about': 'எங்களைப் பற்றி',
    'footer.contact': 'தொடர்பு',
    'footer.support': 'ஆதரவு',
    'footer.legal': 'சட்டப்பூர்வ',
    'footer.privacy': 'தனியுரிமை கொள்கை',
    'footer.terms': 'சேவை விதிமுறைகள்',
    'footer.rights': '© 2024 RawMandi. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.',
  },
  mr: {
    // Navigation
    'nav.features': 'वैशिष्ट्ये',
    'nav.pricing': 'किंमत',
    'nav.suppliers': 'पुरवठादार',
    'nav.contact': 'संपर्क',
    'nav.login': 'लॉगिन',
    'nav.joinNow': 'आत्ता सामील व्हा',
    'nav.announcement': 'ग्रुप ऑर्डरवर आता 25% पर्यंत सूट! आजच सामील व्हा.',

    // Hero
    'hero.title1': 'रस्त्यावरील',
    'hero.title2': 'अन्नाचा',
    'hero.title3': 'बाजार',
    'hero.subtitle': 'स्ट्रीट फूड विक्रेत्यांसाठी कच्चा माल स्त्रोत',
    'hero.description': 'विश्वसनीय पुरवठादारांशी कनेक्ट व्हा. ग्रुप ऑर्डरद्वारे मोठ्या प्रमाणात सूट मिळवा. तुमच्या स्थानिक भाषेतील AI-चालित सूचना.',
    'hero.stats.vendors': 'सक्रिय विक्रेते',
    'hero.stats.saved': 'मासिक बचत',
    'hero.stats.discount': 'सरासरी सूट',
    'hero.vendor': 'मी एक विक्रेता आहे',
    'hero.supplier': 'मी एक पुरवठादार आहे',

    // Features
    'features.title': 'RawMandi का निवड करायची?',
    'features.subtitle': 'कच्चा माल कार्यक्षमतेने मिळवण्यासाठी तुम्हाला जे काही हवे',
    'features.groupBuying': 'ग्रुप खरेदी शक्ती',
    'features.groupBuyingDesc': 'मोठ्या प्रमाणात खरेदीसाठी जवळच्या विक्रेत्यांसह सामील व्हा',
    'features.aiSuggestions': 'AI-चालित सूचना',
    'features.aiSuggestionsDesc': 'तुमचे स्थान आणि ऑर्डर इतिहासावर आधारित स्मार्ट शिफारसी',
    'features.multilingual': 'बहुभाषिक समर्थन',
    'features.multilingualDesc': 'मराठी, हिंदी, तमिळ, तेलुगू, बंगालीमध्ये आवाज आणि मजकूर समर्थन',
    'features.liveTracking': 'लाइव्ह ऑर्डर ट्रॅकिंग',
    'features.liveTrackingDesc': 'ऑर्डर देण्यापासून डिलिव्हरीपर्यंत रिअल-टाइम अपडेट्स',
    'features.trustedSuppliers': 'सत्यापित पुरवठादार',
    'features.trustedSuppliersDesc': 'सर्व पुरवठादार रेटिंग आणि पुनरावलोकनांसह सत्यापित आहेत',
    'features.flexiblePayment': 'लवचिक पेमेंट',
    'features.flexiblePaymentDesc': 'UPI, बँक ट्रान्सफर, किंवा कॅश ऑन डिलिव्हरी पर्याय',

    // Pricing
    'pricing.title': 'सोपी, पारदर्शक किंमत',
    'pricing.subtitle': 'तुमच्या व्यवसायासाठी योग्य प्लॅन निवडा',
    'pricing.basic': 'बेसिक',
    'pricing.basicDesc': 'छोट्या विक्रेत्यांसाठी परिपूर्ण',
    'pricing.pro': 'प्रो',
    'pricing.proDesc': 'वाढत्या व्यवसायांसाठी सर्वोत्तम',
    'pricing.enterprise': 'एंटरप्राइझ',
    'pricing.enterpriseDesc': 'मोठ्या ऑपरेशनसाठी',
    'pricing.getStarted': 'सुरू करा',
    'pricing.contactSales': 'सेल्सशी संपर्क साधा',

    // Footer
    'footer.tagline': 'भारतभरातील स्ट्रीट फूड विक्रेत्यांना सक्षम करणे',
    'footer.features': 'वैशिष्ट्ये',
    'footer.pricing': 'किंमत',
    'footer.about': 'आमच्याबद्दल',
    'footer.contact': 'संपर्क',
    'footer.support': 'समर्थन',
    'footer.legal': 'कायदेशीर',
    'footer.privacy': 'गोपनीयता धोरण',
    'footer.terms': 'सेवा अटी',
    'footer.rights': '© 2024 RawMandi. सर्व हक्क राखीव.',
  },
  bn: {
    // Navigation
    'nav.features': 'বৈশিষ্ট্য',
    'nav.pricing': 'মূল্য নির্ধারণ',
    'nav.suppliers': 'সরবরাহকারী',
    'nav.contact': 'যোগাযোগ',
    'nav.login': 'লগইন',
    'nav.joinNow': 'এখনই যোগ দিন',
    'nav.announcement': 'গ্রুপ অর্ডারে এখন ২৫% পর্যন্ত ছাড়! আজই যোগ দিন।',

    // Hero
    'hero.title1': 'রাস্তার',
    'hero.title2': 'খাবারের',
    'hero.title3': 'বাজার',
    'hero.subtitle': 'স্ট্রিট ফুড বিক্রেতাদের জন্য কাঁচামাল সোর্সিং',
    'hero.description': 'বিশ্বস্ত সরবরাহকারীদের সাথে সংযুক্ত হন। গ্রুপ অর্ডারের মাধ্যমে বাল্ক ডিসকাউন্ট পান। আপনার স্থানীয় ভাষায় AI-চালিত পরামর্শ।',
    'hero.stats.vendors': 'সক্রিয় বিক্রেতা',
    'hero.stats.saved': 'মাসিক সঞ্চয়',
    'hero.stats.discount': 'গড় ছাড়',
    'hero.vendor': 'আমি একজন বিক্রেতা',
    'hero.supplier': 'আমি একজন সরবরাহকারী',

    // Features
    'features.title': 'কেন RawMandi বেছে নেবেন?',
    'features.subtitle': 'কাঁচামাল দক্ষতার সাথে সংগ্রহ করতে আপনার যা যা দরকার',
    'features.groupBuying': 'গ্রুপ ক্রয় শক্তি',
    'features.groupBuyingDesc': 'বাল্ক ক্রয়ের জন্য কাছাকাছি বিক্রেতাদের সাথে যোগ দিন',
    'features.aiSuggestions': 'AI-চালিত পরামর্শ',
    'features.aiSuggestionsDesc': 'আপনার অবস্থান এবং অর্ডার ইতিহাসের ভিত্তিতে স্মার্ট সুপারিশ',
    'features.multilingual': 'বহুভাষিক সহায়তা',
    'features.multilingualDesc': 'বাংলা, হিন্দি, তামিল, তেলুগু, মারাঠিতে ভয়েস এবং টেক্সট সহায়তা',
    'features.liveTracking': 'লাইভ অর্ডার ট্র্যাকিং',
    'features.liveTrackingDesc': 'অর্ডার প্লেসমেন্ট থেকে ডেলিভারি পর্যন্ত রিয়েল-টাইম আপডেট',
    'features.trustedSuppliers': 'যাচাইকৃত সরবরাহকারী',
    'features.trustedSuppliersDesc': 'সমস্ত সরবরাহকারী রেটিং এবং পর্যালোচনা সহ যাচাইকৃত',
    'features.flexiblePayment': 'নমনীয় পেমেন্ট',
    'features.flexiblePaymentDesc': 'UPI, ব্যাংক ট্রান্সফার, বা ক্যাশ অন ডেলিভারি বিকল্প',

    // Pricing
    'pricing.title': 'সহজ, স্বচ্ছ মূল্য নির্ধারণ',
    'pricing.subtitle': 'আপনার ব্যবসার জন্য কাজ করে এমন পরিকল্পনা বেছে নিন',
    'pricing.basic': 'বেসিক',
    'pricing.basicDesc': 'ছোট বিক্রেতাদের জন্য নিখুঁত',
    'pricing.pro': 'প্রো',
    'pricing.proDesc': 'ক্রমবর্ধমান ব্যবসার জন্য সেরা',
    'pricing.enterprise': 'এন্টারপ্রাইজ',
    'pricing.enterpriseDesc': 'বড় অপারেশনের জন্য',
    'pricing.getStarted': 'শুরু করুন',
    'pricing.contactSales': 'বিক্রয়ের সাথে যোগাযোগ করুন',

    // Footer
    'footer.tagline': 'ভারত জুড়ে স্ট্রিট ফুড বিক্রেতাদের ক্ষমতায়ন',
    'footer.features': 'বৈশিষ্ট্য',
    'footer.pricing': 'মূল্য নির্ধারণ',
    'footer.about': 'আমাদের সম্পর্কে',
    'footer.contact': 'যোগাযোগ',
    'footer.support': 'সহায়তা',
    'footer.legal': 'আইনগত',
    'footer.privacy': 'গোপনীয়তা নীতি',
    'footer.terms': 'সেবার শর্তাবলী',
    'footer.rights': '© 2024 RawMandi। সকল অধিকার সংরক্ষিত।',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};