const STR = {
  ar: {
    app: "بدّلها", search: "ابحث عن غرض", home: "الرئيسية", add: "إضافة",
    offers: "العروض", me: "حسابي", available: "متاح للمقايضة",
    propose: "اقترح مقايضة", choose: "اختر غرضاً من أغراضك", send: "إرسال العرض",
    sent: "تم إرسال العرض", back: "رجوع", none: "لا توجد نتائج",
    soon: "هذه الصفحة قادمة في الخطوة التالية", langBtn: "English"
  },
  en: {
    app: "Baddelha", search: "Search for an item", home: "Home", add: "Add",
    offers: "Offers", me: "Profile", available: "Open to swap",
    propose: "Propose a swap", choose: "Choose one of your items", send: "Send offer",
    sent: "Offer sent", back: "Back", none: "No results",
    soon: "This page is coming in the next step", langBtn: "العربية"
  }
};

let lang = "ar";
try { lang = localStorage.getItem("lang") || "ar"; } catch (e) {}

function t(key) { return STR[lang][key] || key; }

function setLang(l) {
  lang = l;
  try { localStorage.setItem("lang", l); } catch (e) {}
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
}
