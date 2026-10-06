const NAV = [
  { hash: "#/", icon: "🏠", key: "home" },
  { hash: "#/add", icon: "➕", key: "add" },
  { hash: "#/offers", icon: "🔁", key: "offers" },
  { hash: "#/me", icon: "👤", key: "me" }
];

function renderChrome() {
  document.title = t("app");
  document.getElementById("logo").textContent = t("app");
  document.getElementById("langBtn").textContent = t("langBtn");
  const cur = location.hash || "#/";
  document.getElementById("nav").innerHTML = NAV.map(n =>
    `<a href="${n.hash}" class="${cur === n.hash ? "on" : ""}"><b>${n.icon}</b>${t(n.key)}</a>`
  ).join("");
}

function route() {
  const h = location.hash || "#/";
  document.getElementById("sheet").hidden = true;
  if (h.startsWith("#/item/")) viewItem(Number(h.split("/")[2]));
  else if (h === "#/") viewHome();
  else if (h === "#/add") viewAdd();
  else viewSoon();
  renderChrome();
  window.scrollTo(0, 0);
}

document.getElementById("langBtn").onclick = () => {
  setLang(lang === "ar" ? "en" : "ar");
  route();
};

setLang(lang);
window.addEventListener("hashchange", route);
route();
