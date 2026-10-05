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
