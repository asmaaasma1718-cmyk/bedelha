// Demo data. Later this file will be replaced by Supabase calls.
const ITEMS = [
  { id: 1, icon: "☕", name: { ar: "آلة قهوة", en: "Coffee machine" }, city: { ar: "وهران", en: "Oran" },
    desc: { ar: "تعمل بشكل ممتاز، استعملتها لمدة سنة.", en: "Works great, used for one year." },
    tags: { ar: ["قهوة", "مطبخ"], en: ["coffee", "kitchen"] } },
  { id: 2, icon: "🍭", name: { ar: "آلة غزل البنات", en: "Cotton candy machine" }, city: { ar: "سطيف", en: "Sétif" },
    desc: { ar: "استعملتها مرتين فقط، مع الأعواد.", en: "Used only twice, sticks included." },
    tags: { ar: ["حلويات", "أعراس"], en: ["sweets", "parties"] } },
  { id: 3, icon: "📺", name: { ar: "تلفزيون قديم", en: "Old TV" }, city: { ar: "قسنطينة", en: "Constantine" },
    desc: { ar: "شاشة سليمة وتعمل جيداً.", en: "Screen is fine and it works well." },
    tags: { ar: ["شاشة", "إلكترونيات"], en: ["screen", "electronics"] } },
  { id: 4, icon: "🚲", name: { ar: "دراجة هوائية", en: "Bicycle" }, city: { ar: "عنابة", en: "Annaba" },
    desc: { ar: "دراجة للكبار بحالة جيدة.", en: "Adult bike in good condition." },
    tags: { ar: ["رياضة", "دراجة"], en: ["sport", "bike"] } }
];

const MY_ITEMS = [
  { id: 101, icon: "📚", name: { ar: "مجموعة كتب", en: "Book set" } },
  { id: 102, icon: "🎧", name: { ar: "سماعات", en: "Headphones" } }
];

const WILAYAS = ("أدرار|Adrar,الشلف|Chlef,الأغواط|Laghouat,أم البواقي|Oum El Bouaghi,باتنة|Batna,بجاية|Béjaïa,بسكرة|Biskra,بشار|Béchar,البليدة|Blida,البويرة|Bouira,"
+"تمنراست|Tamanrasset,تبسة|Tébessa,تلمسان|Tlemcen,تيارت|Tiaret,تيزي وزو|Tizi Ouzou,الجزائر|Algiers,الجلفة|Djelfa,جيجل|Jijel,سطيف|Sétif,سعيدة|Saïda,"
+"سكيكدة|Skikda,سيدي بلعباس|Sidi Bel Abbès,عنابة|Annaba,قالمة|Guelma,قسنطينة|Constantine,المدية|Médéa,مستغانم|Mostaganem,المسيلة|M'Sila,معسكر|Mascara,"
+"ورقلة|Ouargla,وهران|Oran,البيض|El Bayadh,إليزي|Illizi,برج بوعريريج|Bordj Bou Arréridj,بومرداس|Boumerdès,الطارف|El Tarf,تندوف|Tindouf,"
+"تيسمسيلت|Tissemsilt,الوادي|El Oued,خنشلة|Khenchela,سوق أهراس|Souk Ahras,تيبازة|Tipaza,ميلة|Mila,عين الدفلى|Aïn Defla,النعامة|Naâma,"
+"عين تموشنت|Aïn Témouchent,غرداية|Ghardaïa,غليزان|Relizane,تيميمون|Timimoun,برج باجي مختار|Bordj Badji Mokhtar,أولاد جلال|Ouled Djellal,"
+"بني عباس|Béni Abbès,عين صالح|In Salah,عين قزام|In Guezzam,تقرت|Touggourt,جانت|Djanet,المغير|El M'Ghair,المنيعة|El Menia").split(",");
