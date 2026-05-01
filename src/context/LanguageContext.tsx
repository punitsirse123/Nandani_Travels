"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi" | "gu";

type Translations = {
  [key in Language]: {
    brandName: string;
    pickupCity: string;
    dropoffCity: string;
    oneWay: string;
    roundTrip: string;
    selectCar: string;
    ratePerKm: string;
    estimatedFare: string;
    phoneNumber: string;
    confirmBooking: string;
    adminLogin: string;
    fleetManagement: string;
    bookingLog: string;
    pickupLocationFixed: string;
    enterDropoff: string;
    enterPhone: string;
    addCar: string;
    carName: string;
    imageUrl: string;
    saveCar: string;
    noCarsAvailable: string;
    calculating: string;
    heroTitle: string;
    heroSubtitle: string;
    adminLink: string;
    processing: string;
    loadingMaps: string;
    alertFillFields: string;
    alertBookingFailed: string;
    navHome: string;
    navAbout: string;
    navContact: string;
    featuresTitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    howItWorksTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    aboutTitle: string;
    aboutContent1: string;
    aboutContent2: string;
    contactTitle: string;
    contactSubtitle: string;
    addressLabel: string;
    addressValue: string;
    emailLabel: string;
    emailValue: string;
    phoneLabel: string;
    phoneValue: string;
    trustBarFleet: string;
    trustBarDrivers: string;
    trustBarCoverage: string;
    trustBarCharges: string;
    trustBarAvailability: string;
    popularRoutesTitle: string;
    popularRoutesSubtitle: string;
    distanceLabel: string;
    startingFromLabel: string;
    bookNowLabel: string;
    differentDestLabel: string;
    callUsLabel: string;
    testimonialsTitle: string;
    footerDesc: string;
  };
};

const translations: Translations = {
  en: {
    brandName: "Nandani Travels",
    pickupCity: "Pickup City",
    dropoffCity: "Drop-off City",
    oneWay: "One-Way",
    roundTrip: "Round Trip",
    selectCar: "Select Car",
    ratePerKm: "Rate/KM",
    estimatedFare: "Estimated Fare",
    phoneNumber: "Phone Number",
    confirmBooking: "Confirm Booking",
    adminLogin: "Admin Login",
    fleetManagement: "Fleet Management",
    bookingLog: "Booking Log",
    pickupLocationFixed: "Ahmedabad",
    enterDropoff: "Enter drop-off city",
    enterPhone: "Enter your phone number",
    addCar: "Add New Car",
    carName: "Car Name",
    imageUrl: "Image URL",
    saveCar: "Save Car",
    noCarsAvailable: "No cars available at the moment.",
    calculating: "Calculating...",
    heroTitle: "Ahmedabad to Anywhere in India Cab Service",
    heroSubtitle: "Outstation cab service from Ahmedabad to Mumbai, Udaipur, Jaipur, Delhi and across India. Clean AC cars, experienced drivers, affordable rates, and easy booking.",
    adminLink: "Admin",
    processing: "Processing...",
    loadingMaps: "Loading maps...",
    alertFillFields: "Please complete all fields with a valid 10-digit phone number and destination.",
    alertBookingFailed: "Failed to submit booking.",
    navHome: "Home",
    navAbout: "About Us",
    navContact: "Contact",
    featuresTitle: "Why Travelers Choose Nandani Travels",
    feature1Title: "Experienced Drivers",
    feature1Desc: "Our drivers are familiar with intercity routes across India, punctual, and trained to make your journey comfortable and stress-free.",
    feature2Title: "Well-Maintained Cars",
    feature2Desc: "Every vehicle is regularly serviced and cleaned before your trip. Sedans and SUVs available — all air-conditioned and road-ready.",
    feature3Title: "Transparent Pricing",
    feature3Desc: "Your fare is calculated upfront before you confirm. No surge pricing, no surprise charges at the end of your trip.",
    feature4Title: "Easy WhatsApp Booking",
    feature4Desc: "Skip apps and lengthy sign-ups. Book your cab instantly via WhatsApp and get a prompt confirmation.",
    howItWorksTitle: "How to Book Your Cab",
    step1Title: "Enter Your Route",
    step1Desc: "Select your destination from Ahmedabad — one-way or round trip. The form instantly calculates the distance and route for you.",
    step2Title: "Choose Your Car",
    step2Desc: "Pick from our available sedans and SUVs. Your fare estimate is shown upfront — no hidden costs.",
    step3Title: "Confirm on WhatsApp",
    step3Desc: "Add your phone number and confirm. We'll send your driver's details on WhatsApp before your pickup time.",
    aboutTitle: "About Nandani Travels",
    aboutContent1: "Nandani Travels was started in Ahmedabad with a simple goal, to fix the common problems people face during intercity travel. Unreliable drivers, poorly maintained cars, and fares that change at the last minute make travel stressful. We built our service around what actually matters, clean and well-maintained vehicles, experienced drivers you can trust, and clear pricing that stays the same after booking. Today, we provide outstation cab services from Ahmedabad to destinations across India, covering everything from nearby cities like Surat and Vadodara to longer routes like Mumbai, Jaipur, and Udaipur.",
    aboutContent2: "What sets us apart is how seriously we take the basics. Our drivers are selected for their experience, route knowledge, and professionalism, and are trained to be punctual, respectful, and focused on safe driving at all times. We show up on time, share driver details in advance, and ensure every vehicle is clean, air-conditioned, and road-ready before your trip. We don’t believe in overpromising, we focus on being dependable, delivering comfortable and hassle-free travel that customers can rely on every time.",
    contactTitle: "Get in Touch",
    contactSubtitle: "We are here to assist you 24/7. Reach out to us for any custom booking requirements or general inquiries.",
    addressLabel: "Our Address",
    addressValue: "Parth B.No. 7/B, Vishwanagar Society, Hotel Cambay Sapphire, Jivraj Park, Ahmedabad - 380051",
    emailLabel: "Email Us",
    emailValue: "priyasirse@gmail.com",
    phoneLabel: "Call Us",
    phoneValue: "+91 94265 90305",
    trustBarFleet: "Well-Maintained AC Fleet",
    trustBarDrivers: "Experienced, Verified Drivers",
    trustBarCoverage: "Pan-India Coverage",
    trustBarCharges: "No Hidden Charges",
    trustBarAvailability: "24/7 Available",
    popularRoutesTitle: "Popular Routes from Ahmedabad",
    popularRoutesSubtitle: "One-way and round trip available on all routes.",
    distanceLabel: "Distance:",
    startingFromLabel: "Starting from",
    bookNowLabel: "Book Now →",
    differentDestLabel: "Need a different destination? We travel anywhere in India.",
    callUsLabel: "Call us:",
    testimonialsTitle: "What Our Passengers Say",
    footerDesc: "Nandani Travels provides outstation cab service from Ahmedabad to cities across India. Clean cars, experienced drivers, and honest pricing — available 24/7 for one-way and round trips.",
  },
  hi: {
    brandName: "नंदनी ट्रेवल्स",
    pickupCity: "पिकअप शहर",
    dropoffCity: "ड्रॉप-ऑफ शहर",
    oneWay: "एकतरफा (One-Way)",
    roundTrip: "आने-जाने का (Round Trip)",
    selectCar: "कार चुनें",
    ratePerKm: "दर/किमी",
    estimatedFare: "अनुमानित किराया",
    phoneNumber: "फ़ोन नंबर",
    confirmBooking: "बुकिंग पक्की करें",
    adminLogin: "एडमिन लॉगिन",
    fleetManagement: "फ़्लीट प्रबंधन",
    bookingLog: "बुकिंग लॉग",
    pickupLocationFixed: "अहमदाबाद",
    enterDropoff: "ड्रॉप-ऑफ शहर दर्ज करें",
    enterPhone: "अपना फ़ोन नंबर दर्ज करें",
    addCar: "नई कार जोड़ें",
    carName: "कार का नाम",
    imageUrl: "छवि URL",
    saveCar: "कार सहेजें",
    noCarsAvailable: "अभी कोई कार उपलब्ध नहीं है।",
    calculating: "गणना हो रही है...",
    heroTitle: "अहमदाबाद से पूरे भारत में कहीं भी कैब सर्विस",
    heroSubtitle: "अहमदाबाद से मुंबई, उदयपुर, जयपुर, दिल्ली और पूरे भारत के लिए आउटस्टेशन कैब सेवा। साफ एसी कारें, अनुभवी ड्राइवर, किफायती दरें और आसान बुकिंग।",
    adminLink: "एडमिन",
    processing: "प्रोसेस हो रहा है...",
    loadingMaps: "नक्शा लोड हो रहा है...",
    alertFillFields: "कृपया 10 अंकों के वैध फ़ोन नंबर और गंतव्य के साथ सभी फ़ील्ड भरें।",
    alertBookingFailed: "बुकिंग सबमिट करने में विफल।",
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navContact: "संपर्क",
    featuresTitle: "यात्री नंदनी ट्रेवल्स को क्यों चुनते हैं",
    feature1Title: "अनुभवी ड्राइवर",
    feature1Desc: "हमारे ड्राइवर पूरे भारत में इंटरसिटी मार्गों से परिचित हैं, समय के पाबंद हैं, और आपकी यात्रा को आरामदायक और तनावमुक्त बनाने के लिए प्रशिक्षित हैं।",
    feature2Title: "अच्छी तरह से जांची गई कारें",
    feature2Desc: "आपकी यात्रा से पहले हर वाहन की नियमित रूप से सर्विस और सफाई की जाती है। सेडान और एसयूवी उपलब्ध हैं - सभी वातानुकूलित और यात्रा के लिए तैयार।",
    feature3Title: "पारदर्शी मूल्य निर्धारण",
    feature3Desc: "आपके कन्फर्म करने से पहले आपके किराए की गणना की जाती है। आपकी यात्रा के अंत में कोई सर्ज प्राइसिंग नहीं, कोई सरप्राइज चार्ज नहीं।",
    feature4Title: "आसान व्हाट्सएप बुकिंग",
    feature4Desc: "ऐप्स और लंबी साइन-अप प्रक्रिया छोड़ें। व्हाट्सएप के माध्यम से तुरंत अपनी कैब बुक करें और त्वरित पुष्टि प्राप्त करें।",
    howItWorksTitle: "अपनी कैब कैसे बुक करें",
    step1Title: "अपना रूट दर्ज करें",
    step1Desc: "अहमदाबाद से अपना गंतव्य चुनें — वन-वे या राउंड ट्रिप। फॉर्म तुरंत आपके लिए दूरी और मार्ग की गणना करता है।",
    step2Title: "अपनी कार चुनें",
    step2Desc: "हमारे उपलब्ध सेडान और एसयूवी में से चुनें। आपके किराए का अनुमान पहले ही दिखाया जाता है — कोई छिपी हुई लागत नहीं।",
    step3Title: "व्हाट्सएप पर पुष्टि करें",
    step3Desc: "अपना फोन नंबर जोड़ें और पुष्टि करें। हम आपके पिकअप समय से पहले व्हाट्सएप पर आपके ड्राइवर का विवरण भेजेंगे।",
    aboutTitle: "नंदनी ट्रेवल्स के बारे में",
    aboutContent1: "नंदानी ट्रैवल्स की शुरुआत अहमदाबाद में एक सरल उद्देश्य के साथ की गई थी, इंटरसिटी यात्रा के दौरान लोगों को होने वाली आम समस्याओं को दूर करना। अविश्वसनीय ड्राइवर, खराब मेंटेन की गई गाड़ियां, और आखिरी समय में बदलते किराए यात्रा को तनावपूर्ण बना देते हैं। हमने अपनी सेवा को उन चीजों पर केंद्रित किया जो वास्तव में मायने रखती हैं, साफ और अच्छी तरह मेंटेन की गई गाड़ियां, भरोसेमंद और अनुभवी ड्राइवर, और पारदर्शी कीमतें जो बुकिंग के बाद नहीं बदलतीं। आज हम अहमदाबाद से पूरे भारत में आउटस्टेशन कैब सेवाएं प्रदान करते हैं, जिसमें सूरत और वडोदरा जैसे नजदीकी शहरों से लेकर मुंबई, जयपुर और उदयपुर जैसे लंबे रूट शामिल हैं।",
    aboutContent2: "हमारी सबसे बड़ी खासियत यह है कि हम बुनियादी चीजों को बहुत गंभीरता से लेते हैं। हमारे ड्राइवरों का चयन उनके अनुभव, रूट की समझ और पेशेवर व्यवहार के आधार पर किया जाता है, और उन्हें समय की पाबंदी, सम्मानजनक व्यवहार और सुरक्षित ड्राइविंग के लिए प्रशिक्षित किया जाता है। हम समय पर पहुंचते हैं, यात्रा से पहले ड्राइवर की पूरी जानकारी साझा करते हैं, और सुनिश्चित करते हैं कि हर गाड़ी साफ, एयर-कंडीशन्ड और पूरी तरह से यात्रा के लिए तैयार हो।",
    contactTitle: "संपर्क करें",
    contactSubtitle: "हम 24/7 आपकी सहायता के लिए यहां हैं। किसी भी कस्टम बुकिंग आवश्यकताओं या सामान्य पूछताछ के लिए हमसे संपर्क करें।",
    addressLabel: "मुख्यालय",
    addressValue: "पार्थ, बी. नं. 7/बी, विश्वनगर सोसाइटी, होटल कैम्बे सैफायर के पास, जीवराज पार्क, अहमदाबाद - 380051",
    emailLabel: "हमें ईमेल करें",
    emailValue: "bookings@nandanitravels.com",
    phoneLabel: "हमें कॉल करें",
    phoneValue: "+91 95893 37752",
    trustBarFleet: "अच्छी तरह से जांची गई एसी फ़्लीट",
    trustBarDrivers: "अनुभवी, सत्यापित ड्राइवर",
    trustBarCoverage: "पैन-इंडिया कवरेज",
    trustBarCharges: "कोई छिपे हुए शुल्क नहीं",
    trustBarAvailability: "24/7 उपलब्ध",
    popularRoutesTitle: "अहमदाबाद से लोकप्रिय मार्ग",
    popularRoutesSubtitle: "सभी मार्गों पर वन-वे और राउंड ट्रिप उपलब्ध हैं।",
    distanceLabel: "दूरी:",
    startingFromLabel: "शुरुआती कीमत",
    bookNowLabel: "अभी बुक करें →",
    differentDestLabel: "एक अलग गंतव्य चाहिए? हम भारत में कहीं भी यात्रा करते हैं।",
    callUsLabel: "हमें कॉल करें:",
    testimonialsTitle: "हमारे यात्री क्या कहते हैं",
    footerDesc: "नंदनी ट्रेवल्स अहमदाबाद से पूरे भारत के शहरों के लिए आउटस्टेशन कैब सेवा प्रदान करता है। साफ कारें, अनुभवी ड्राइवर और ईमानदार मूल्य निर्धारण — वन-वे और राउंड ट्रिप के लिए 24/7 उपलब्ध।",
  },
  gu: {
    brandName: "નંદની ટ્રાવેલ્સ",
    pickupCity: "પિકઅપ શહેર",
    dropoffCity: "ડ્રોપ-ઓફ શહેર",
    oneWay: "વન-વે",
    roundTrip: "રાઉન્ડ ટ્રીપ",
    selectCar: "કાર પસંદ કરો",
    ratePerKm: "દર/કિમી",
    estimatedFare: "અંદાજિત ભાડું",
    phoneNumber: "ફોન નંબર",
    confirmBooking: "બુકિંગ કન્ફર્મ કરો",
    adminLogin: "એડમિન લૉગિન",
    fleetManagement: "ફ્લીટ મેનેજમેન્ટ",
    bookingLog: "બુકિંગ લોગ",
    pickupLocationFixed: "અમદાવાદ",
    enterDropoff: "ડ્રોપ-ઓફ શહેર દાખલ કરો",
    enterPhone: "તમારો ફોન નંબર દાખલ કરો",
    addCar: "નવી કાર ઉમેરો",
    carName: "કારનું નામ",
    imageUrl: "ઇમેજ URL",
    saveCar: "કાર સાચવો",
    noCarsAvailable: "હાલમાં કોઈ કાર ઉપલબ્ધ નથી.",
    calculating: "ગણતરી કરી રહ્યા છીએ...",
    heroTitle: "અમદાવાદથી સમગ્ર ભારતમાં કેબ સર્વિસ",
    heroSubtitle: "અમદાવાદથી મુંબઈ, ઉદયપુર, જયપુર, દિલ્હી અને સમગ્ર ભારતમાં આઉટસ્ટેશન કેબ સેવા. સ્વચ્છ એસી કાર, અનુભવી ડ્રાઇવરો, પોસાય તેવા દરો અને સરળ બુકિંગ.",
    adminLink: "એડમિન",
    processing: "પ્રક્રિયા થઈ રહી છે...",
    loadingMaps: "નકશા લોડ થઈ રહ્યા છે...",
    alertFillFields: "કૃપા કરીને માન્ય 10-અંકના ફોન નંબર અને ગંતવ્ય સાથે તમામ ક્ષેત્રો પૂર્ણ કરો.",
    alertBookingFailed: "બુકિંગ સબમિટ કરવામાં નિષ્ફળ.",
    navHome: "હોમ",
    navAbout: "અમારા વિશે",
    navContact: "સંપર્ક",
    featuresTitle: "પ્રવાસીઓ નંદની ટ્રાવેલ્સ શા માટે પસંદ કરે છે",
    feature1Title: "અનુભવી ડ્રાઇવરો",
    feature1Desc: "અમારા ડ્રાઇવરો સમગ્ર ભારતમાં ઇન્ટરસિટી માર્ગોથી પરિચિત છે, સમયના પાબંદ છે અને તમારી મુસાફરીને આરામદાયક અને તણાવમુક્ત બનાવવા માટે પ્રશિક્ષિત છે.",
    feature2Title: "સારી રીતે જાળવણીવાળી કાર",
    feature2Desc: "તમારી સફર પહેલાં દરેક વાહનની નિયમિત સેવા અને સફાઈ કરવામાં આવે છે. સેડાન અને એસયુવી ઉપલબ્ધ છે - તમામ એર-કન્ડિશન્ડ અને રોડ-રેડી.",
    feature3Title: "પારદર્શક ભાવો",
    feature3Desc: "તમે કન્ફર્મ કરો તે પહેલાં તમારું ભાડું ગણવામાં આવે છે. તમારી સફરના અંતે કોઈ સરપ્રાઈઝ ચાર્જ નથી.",
    feature4Title: "સરળ WhatsApp બુકિંગ",
    feature4Desc: "એપ્લિકેશનો અને લાંબી સાઇન-અપ પ્રક્રિયા છોડો. WhatsApp દ્વારા તરત જ તમારી કેબ બુક કરો અને તાત્કાલિક પુષ્ટિ મેળવો.",
    howItWorksTitle: "તમારી કેબ કેવી રીતે બુક કરવી",
    step1Title: "તમારો રૂટ દાખલ કરો",
    step1Desc: "અમદાવાદથી તમારું લક્ષ્યસ્થાન પસંદ કરો - વન-વે અથવા રાઉન્ડ ટ્રીપ. ફોર્મ તરત જ તમારા માટે અંતર અને માર્ગની ગણતરી કરે છે.",
    step2Title: "તમારી કાર પસંદ કરો",
    step2Desc: "અમારા ઉપલબ્ધ સેડાન અને એસયુવીમાંથી પસંદ કરો. તમારો ભાડાનો અંદાજ અગાઉથી બતાવવામાં આવે છે — કોઈ છુપી કિંમત નથી.",
    step3Title: "WhatsApp પર પુષ્ટિ કરો",
    step3Desc: "તમારો ફોન નંબર ઉમેરો અને પુષ્ટિ કરો. અમે તમારા પિકઅપ સમય પહેલા WhatsApp પર તમારા ડ્રાઇવરની વિગતો મોકલીશું.",
    aboutTitle: "નંદની ટ્રાવેલ્સ વિશે",
    aboutContent1: "નંદાની ટ્રાવેલ્સની શરૂઆત અમદાવાદમાં એક સરળ હેતુ સાથે કરવામાં આવી હતી, ઈન્ટરસિટી મુસાફરી દરમિયાન લોકોને આવતી સામાન્ય મુશ્કેલીઓ દૂર કરવા માટે। અવિશ્વસનીય ડ્રાઈવરો, યોગ્ય રીતે જાળવણી ન થયેલી કારો અને છેલ્લી ક્ષણે બદલાતા ભાડાં મુસાફરીને તણાવપૂર્ણ બનાવે છે। અમે અમારી સેવા તે બાબતો પર કેન્દ્રિત કરી છે જે ખરેખર મહત્વપૂર્ણ છે, સ્વચ્છ અને સારી રીતે જાળવેલી કારો, વિશ્વાસપાત્ર અને અનુભવી ડ્રાઈવરો, અને પારદર્શક ભાડું જે બુકિંગ પછી બદલાતું નથી। આજે અમે અમદાવાદથી સમગ્ર ભારતના વિવિધ શહેરોમાં આઉટસ્ટેશન કેબ સેવા પ્રદાન કરીએ છીએ, જેમાં સુરત અને વડોદરા જેવા નજીકના શહેરોથી લઈને મુંબઈ, જયપુર અને ઉદયપુર જેવા લાંબા રૂટ્સનો સમાવેશ થાય છે।",
    aboutContent2: "અમારી વિશેષતા એ છે કે અમે મૂળભૂત બાબતોને ખૂબ ગંભીરતાથી લઈએ છીએ। અમારા ડ્રાઈવરોની પસંદગી તેમના અનુભવ, માર્ગની જાણકારી અને વ્યવહારના આધારે કરવામાં આવે છે, અને તેમને સમયપાલન, સન્માનપૂર્ણ વર્તન અને સુરક્ષિત ડ્રાઈવિંગ માટે તાલીમ આપવામાં આવે છે। અમે સમયસર પહોંચીએ છીએ, મુસાફરી પહેલાં ડ્રાઈવર વિશે સંપૂર્ણ માહિતી આપીએ છીએ, અને ખાતરી કરીએ છીએ કે દરેક વાહન સ્વચ્છ, એર-કન્ડીશન્ડ અને મુસાફરી માટે સંપૂર્ણ રીતે તૈયાર હોય।",
    contactTitle: "સંપર્ક કરો",
    contactSubtitle: "અમે 24/7 તમારી સહાય માટે અહીં છીએ. કોઈપણ કસ્ટમ બુકિંગ આવશ્યકતાઓ અથવા સામાન્ય પૂછપરછ માટે અમારો સંપર્ક કરો.",
    addressLabel: "મુખ્યાલય",
    addressValue: "પાર્થ, બી. નં. 7/બી, વિશ્વનગર સોસાયટી, હોટેલ કેમ્બે સેફાયર પાસે, જીવરાજ પાર્ક, અમદાવાદ - 380051",
    emailLabel: "અમને ઇમેઇલ કરો",
    emailValue: "bookings@nandanitravels.com",
    phoneLabel: "અમને કૉલ કરો",
    phoneValue: "+91 95893 37752",
    trustBarFleet: "સારી રીતે જાળવણીવાળી એસી ફ્લીટ",
    trustBarDrivers: "અનુભવી, ચકાસાયેલ ડ્રાઇવરો",
    trustBarCoverage: "પાન-ઇન્ડિયા કવરેજ",
    trustBarCharges: "કોઈ છુપા શુલ્ક નથી",
    trustBarAvailability: "24/7 ઉપલબ્ધ",
    popularRoutesTitle: "અમદાવાદથી લોકપ્રિય રૂટ",
    popularRoutesSubtitle: "તમામ માર્ગો પર વન-વે અને રાઉન્ડ ટ્રીપ ઉપલબ્ધ છે.",
    distanceLabel: "અંતર:",
    startingFromLabel: "શરૂઆતની કિંમત",
    bookNowLabel: "હમણાં બુક કરો →",
    differentDestLabel: "અલગ ગંતવ્ય જોઈએ છે? અમે ભારતમાં ક્યાંય પણ મુસાફરી કરીએ છીએ.",
    callUsLabel: "અમને કૉલ કરો:",
    testimonialsTitle: "અમારા મુસાફરો શું કહે છે",
    footerDesc: "નંદની ટ્રાવેલ્સ અમદાવાદથી સમગ્ર ભારતના શહેરો માટે આઉટસ્ટેશન કેબ સેવા પૂરી પાડે છે. સ્વચ્છ કાર, અનુભવી ડ્રાઇવરો અને પ્રમાણિક કિંમત — વન-વે અને રાઉન્ડ ટ્રીપ માટે 24/7 ઉપલબ્ધ.",
  },
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations["en"];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
