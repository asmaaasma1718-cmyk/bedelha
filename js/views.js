const app = () => document.getElementById("app");

function cardHTML(i) {
  return `<a class="card" href="#/item/${i.id}">
    <div class="img">${i.icon}</div>
    <div class="c"><b>${i.name[lang]}</b><small>${i.city[lang]}</small></div>
  </a>`;
}

function matches(i, q) {
  q = q.trim().toLowerCase();
  if (!q) return true;
  const text = [i.name.ar, i.name.en, i.city.ar, i.city.en, ...i.tags.ar, ...i.tags.en].join(" ").toLowerCase();
  return text.includes(q);
}

function gridHTML(q) {
  const list = ITEMS.filter(i => matches(i, q));
  return list.length
    ? list.map(cardHTML).join("")
    : `<p class="empty" style="grid-column:1/-1">${t("none")}</p>`;
}

function viewHome() {
  app().innerHTML = `
    <input class="search" id="q" type="search" placeholder="${t("search")}">
    <div class="grid" id="grid">${gridHTML("")}</div>`;
  document.getElementById("q").addEventListener("input", e => {
    document.getElementById("grid").innerHTML = gridHTML(e.target.value);
  });
}

function viewItem(id) {
  const i = ITEMS.find(x => x.id === id);
  if (!i) return viewHome();
  app().innerHTML = `
    <button class="back" onclick="history.back()">${lang === "ar" ? "→" : "←"} ${t("back")}</button>
    <div class="big">${i.icon}</div>
    <h2>${i.name[lang]}</h2>
    <span class="badge">${t("available")}</span>
    <p class="muted">${i.city[lang]}</p>
    <p style="margin-top:8px">${i.desc[lang]}</p>
    <div class="tags">${i.tags[lang].map(x => `<span>${x}</span>`).join("")}</div>
    <button class="cta" id="propose">${t("propose")}</button>`;
  document.getElementById("propose").onclick = () => openSheet(i);
}

function openSheet(target) {
  const s = document.getElementById("sheet");
  s.hidden = false;
  s.innerHTML = `<div class="panel">
    <b>${t("choose")}</b>
    ${MY_ITEMS.map((m, n) => `<label class="opt">
      <input type="radio" name="mine" value="${m.id}" ${n === 0 ? "checked" : ""}>
      <span style="font-size:26px">${m.icon}</span><span>${m.name[lang]}</span></label>`).join("")}
    <button class="cta" id="send">${t("send")}</button>
  </div>`;
  s.onclick = e => { if (e.target === s) s.hidden = true; };
  document.getElementById("send").onclick = () => { s.hidden = true; showToast(t("sent")); };
}

function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.hidden = false;
  setTimeout(() => (el.hidden = true), 2000);
}

function viewSoon() {
  app().innerHTML = `<p class="empty">${t("soon")}</p>`;
}
