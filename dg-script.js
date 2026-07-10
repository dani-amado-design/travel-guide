// Trip data is inlined so the site works when opened as a local file
// (fetch() is blocked on file:// URLs) and also works unmodified on GitHub Pages.
const TRIP_DATA = {"meta": {"title": "Denise & Gino's Euro Trip", "subtitle": "Frankfurt to Switzerland and back — Germany, deep dive", "dateRange": {"start": "2026-07-25", "end": "2026-08-14"}}, "entries": [{"id": "d01", "date": "2026-07-25", "destination": "Frankfurt, Alemania", "type": "flight", "title": "Flight: Australia → Frankfurt", "notes": "Add your flight details here (airline, times, booking ref) — not in the source sheet.", "links": [], "cost": null, "currency": null, "payer": "Denise y Gino", "paid": null, "linkWarning": false, "placeholder": true}, {"id": "d02", "date": "2026-07-26", "destination": "Frankfurt, Alemania", "type": "hotel", "title": "Stay: Premier Inn Frankfurt City Centre", "notes": "7 Elbestraße, Bahnhofsviertel · Closest station: Frankfurt Main Hbf (7 min walk)", "links": ["https://www.booking.com/hotel/de/premier-inn-frankfurt-city-centre.html"], "cost": 172.0, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false, "paymentNote": "Pay at the property"}, {"id": "d03", "date": "2026-07-27", "destination": "Mannheim, Alemania", "type": "hotel", "title": "Stay: Nähe Uni-Paradeplatz Mannheim", "notes": "B2 8, Mannheim · Closest station: Mannheim Hbf (20 min walk)", "links": ["https://www.airbnb.com.au/rooms/1153324196555354789"], "cost": null, "currency": null, "payer": "All (shared)", "paid": null, "linkWarning": false, "paymentNote": "Paid as part of shared 'All' cost (676 AUD total, 9 Jul)"}, {"id": "d12", "date": "2026-07-27", "destination": "Frankfurt, Alemania", "type": "transport", "title": "Train: Frankfurt → Mannheim", "notes": "Duration: 45 min", "links": [], "cost": 46.0, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false}, {"id": "d04", "date": "2026-07-30", "destination": "Gaggenau, Alemania", "type": "hotel", "title": "Stay: Ferienwohnung Magnolie", "notes": "Gutenbergstraße 24, Gaggenau · Closest station: Gaggenau Bf (10 min walk)", "links": ["https://www.booking.com/hotel/de/magnolie-gaggenau.de.html"], "cost": null, "currency": null, "payer": "All (shared)", "paid": null, "linkWarning": false, "paymentNote": "Paid as part of shared 'All' cost (682 AUD total, 6 Jul)"}, {"id": "d13", "date": "2026-07-30", "destination": "Mannheim, Alemania", "type": "transport", "title": "Train: Mannheim → Gaggenau", "notes": "Duration: 1h 20m", "links": [], "cost": 184.0, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false}, {"id": "d05", "date": "2026-08-02", "destination": "Bern, Suiza", "type": "hotel", "title": "Stay: Prize by Radisson, Bern City", "notes": "Viktoriastrasse 21, Bern · Closest station: Bern Bahnhofplatz (25 min walk)", "links": ["https://www.booking.com/hotel/ch/prizeotel-bern-city.html"], "cost": 426.68, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false, "paymentNote": "Paid on 6 Jul"}, {"id": "d06", "date": "2026-08-02", "destination": "Munich, Alemania", "type": "hotel", "title": "Stay: Numa Munich Viktoria", "notes": "Hanauer Str. 105, Munich · Closest station: Olympia-Einkaufszentrum (5 min walk)", "links": ["https://www.booking.com/hotel/de/numa-munich-viktoria.en-gb.html"], "cost": 217.33, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false, "paymentNote": "Paid on 6 Jul"}, {"id": "d14", "date": "2026-08-02", "destination": "Gaggenau, Alemania", "type": "transport", "title": "Train: Gaggenau → Bern", "notes": "Duration: 3h 49m", "links": [], "cost": 245.0, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false}, {"id": "d21", "date": "2026-08-03", "destination": "Zermatt, Suiza", "type": "activity", "title": "Day trip: Zermatt", "notes": "Round trip from Bern — no overnight stay. Travel cost approx.", "links": [], "cost": 500.0, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false}, {"id": "d20", "date": "2026-08-04", "destination": "Bern, Suiza", "type": "transport", "title": "Train: Bern → Munich", "notes": "Duration: 4h 45m", "links": [], "cost": 225.0, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false}, {"id": "d07", "date": "2026-08-05", "destination": "Freilassing, Alemania", "type": "hotel", "title": "Stay: Fewo BOHO mit eigenem Garten nähe Salzburg", "notes": "10 Egerländerstraße, Freilassing · Closest station: Freilassing (25 min walk)", "links": ["https://www.booking.com/hotel/de/ferienwohnung-mit-eigenem-garten.html"], "cost": null, "currency": null, "payer": "All (shared)", "paid": null, "linkWarning": false, "paymentNote": "Paid as part of shared 'All' cost (957.41 AUD total, 6 Jul)"}, {"id": "d15", "date": "2026-08-05", "destination": "Munich, Alemania", "type": "transport", "title": "Train: Munich → Freilassing", "notes": "Duration: 2h 21m", "links": [], "cost": 109.0, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false}, {"id": "d08", "date": "2026-08-08", "destination": "Berlin, Alemania", "type": "hotel", "title": "Stay: TITANIC Comfort Kurfürstendamm", "notes": "9-12 Kleiststraße, Berlin · Closest station: Wittenbergplatz (7 min walk)", "links": ["https://www.booking.com/hotel/de/titanic-comfort-kurfurstendamm.html"], "cost": null, "currency": null, "payer": "All (shared)", "paid": null, "linkWarning": false, "paymentNote": "Paid as part of shared 'All' cost (380 AUD total, 7 Jul)"}, {"id": "d16", "date": "2026-08-08", "destination": "Freilassing, Alemania", "type": "transport", "title": "Car: Freilassing → Berlin", "notes": "Duration: 8h approx", "links": [], "cost": 420.0, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false}, {"id": "d09", "date": "2026-08-09", "destination": "Berlin, Alemania", "type": "hotel", "title": "Stay: Lauenburger Platz 4", "notes": "Lauenburger Platz 4, Berlin · Closest station: U Walther-Schreiber-Platz (12 min walk)", "links": ["https://www.airbnb.com/rooms/1115734708581966507"], "cost": null, "currency": null, "payer": "All (shared)", "paid": null, "linkWarning": false, "paymentNote": "Paid as part of shared 'All' cost (904.78 AUD total, half paid 13 May/25 Jul)"}, {"id": "d17", "date": "2026-08-09", "destination": "Berlin, Alemania", "type": "transport", "title": "Transfer: Berlin (Kurfürstendamm → Lauenburger Platz)", "notes": "Duration: 32m", "links": [], "cost": null, "currency": null, "payer": "Gino y Denise", "paid": null, "linkWarning": false}, {"id": "d10", "date": "2026-08-12", "destination": "Hamburg, Alemania", "type": "hotel", "title": "Stay: HUB Apartments St Georg", "notes": "35 Knoopstraße, Hamburg · Closest station: Harburg Rathaus (7 min walk)", "links": ["https://www.booking.com/hotel/de/hub-apartments.html"], "cost": 230.0, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false, "paymentNote": "Pay on 9 Aug"}, {"id": "d18", "date": "2026-08-12", "destination": "Berlin, Alemania", "type": "transport", "title": "Train: Berlin → Hamburg", "notes": "Duration: 3h 6m", "links": [], "cost": 180.0, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false}, {"id": "d11", "date": "2026-08-13", "destination": "Frankfurt, Alemania", "type": "hotel", "title": "Stay: Premier Inn Frankfurt City Centre", "notes": "7 Elbestraße, Bahnhofsviertel · Closest station: Frankfurt Main Hbf (7 min walk)", "links": ["https://www.booking.com/hotel/de/premier-inn-frankfurt-city-centre.html"], "cost": 157.0, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false, "paymentNote": "Pay at the property"}, {"id": "d19", "date": "2026-08-13", "destination": "Hamburg, Alemania", "type": "transport", "title": "Train: Hamburg → Frankfurt", "notes": "Duration: 4h 5m", "links": [], "cost": 110.0, "currency": "AUD", "payer": "Gino y Denise", "paid": null, "linkWarning": false}, {"id": "d22", "date": "2026-08-14", "destination": "Frankfurt, Alemania", "type": "flight", "title": "Flight: Frankfurt → Australia", "notes": "Add your flight details here (airline, times, booking ref) — not in the source sheet.", "links": [], "cost": null, "currency": null, "payer": "Denise y Gino", "paid": null, "linkWarning": false, "placeholder": true}], "byDate": {"2026-07-25": ["d01"], "2026-07-26": ["d02"], "2026-07-27": ["d03", "d12"], "2026-07-30": ["d04", "d13"], "2026-08-02": ["d05", "d06", "d14"], "2026-08-03": ["d21"], "2026-08-04": ["d20"], "2026-08-05": ["d07", "d15"], "2026-08-08": ["d08", "d16"], "2026-08-09": ["d09", "d17"], "2026-08-12": ["d10", "d18"], "2026-08-13": ["d11", "d19"], "2026-08-14": ["d22"]}, "byType": {"flight": {"ids": ["d01", "d22"], "count": 2}, "hotel": {"ids": ["d02", "d03", "d04", "d05", "d06", "d07", "d08", "d09", "d10", "d11"], "count": 10}, "transport": {"ids": ["d12", "d13", "d14", "d20", "d15", "d16", "d17", "d18", "d19"], "count": 9}, "activity": {"ids": ["d21"], "count": 1}}, "byDestination": {"Frankfurt, Alemania": ["d01", "d02", "d12", "d11", "d22"], "Mannheim, Alemania": ["d03", "d13"], "Gaggenau, Alemania": ["d04", "d14"], "Bern, Suiza": ["d05", "d20"], "Munich, Alemania": ["d06", "d15"], "Zermatt, Suiza": ["d21"], "Freilassing, Alemania": ["d07", "d16"], "Berlin, Alemania": ["d08", "d09", "d17", "d18"], "Hamburg, Alemania": ["d10", "d19"]}, "totals": {"entryCount": 22, "costByCurrency": {"AUD": 3222.01}, "destinationsInOrder": ["Frankfurt, Alemania", "Mannheim, Alemania", "Gaggenau, Alemania", "Bern, Suiza", "Munich, Alemania", "Zermatt, Suiza", "Freilassing, Alemania", "Berlin, Alemania", "Hamburg, Alemania"], "dateRange": {"start": "2026-07-25", "end": "2026-08-14"}}};

const COUNTRY_TIPS = {
  "Alemania": [
    "Trains are punctual but delays happen — leave buffer time between connections.",
    "Many places (especially smaller towns) are still cash-preferred — carry euros.",
    "Sundays are quiet: most shops are closed nationwide."
  ],
  "Suiza": [
    "Everything runs on Swiss francs (CHF), not euros — have some on hand outside big cities.",
    "Public transport is excellent but pricey — a Swiss Travel Pass can save money on multi-city legs.",
    "Switzerland is expensive by European standards — budget accordingly for meals and transport."
  ],
  "_default": [
    "Keep transit tickets/receipts until you're fully off each leg — spot checks happen.",
    "Pack for variable weather — Central Europe summers can swing from hot to cool fast."
  ]
};

// Visa/entry requirements for Australian passport holders (Denise & Gino travel on Australian passports).
// Every stop on this trip is in the Schengen Area (Germany) or Schengen-associated (Switzerland),
// so the same core rule applies throughout: visa-free tourism up to 90 days per 180-day period,
// with an ETIAS pre-travel authorization layering on top from late 2026.
const VISA_INFO = {
  "_schengen_default": {
    note: "Schengen Area / Schengen-associated — same rule for every stop on this trip.",
    items: [
      "Visa-free for Australian passport holders for tourism, up to 90 days within any 180-day period.",
      "ETIAS (European Travel Information and Authorisation System) is expected to launch in Q4 2026, with a short grace period after that before it's strictly enforced. Check the exact date close to departure — it has shifted before.",
      "Switzerland isn't in the EU but is part of the Schengen Area for border purposes — the same 90/180 visa-free rule and upcoming ETIAS requirement apply there too.",
      "Passport must be valid at least 3 months beyond the planned departure date from the Schengen Area.",
      "Carry proof of onward travel and accommodation — occasionally requested at the border even when visa-free."
    ]
  }
};
VISA_INFO["Alemania"] = VISA_INFO["Suiza"] = VISA_INFO["_schengen_default"];

function appendVisaBlock(card, country) {
  const visa = VISA_INFO[country];
  if (!visa) return;
  const h4 = document.createElement("h4");
  h4.className = "visa-heading";
  h4.textContent = "Visa & entry — Australian passport";
  const p = document.createElement("p");
  p.className = "visa-note";
  p.textContent = visa.note;
  card.appendChild(h4);
  card.appendChild(p);
  if (visa.items.length) {
    const ul = document.createElement("ul");
    ul.className = "visa-list";
    visa.items.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      ul.appendChild(li);
    });
    card.appendChild(ul);
  }
}

const TYPE_LABELS = { flight: "Flight", transport: "Transport", hotel: "Stay", activity: "Activity" };

function fmtDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

function fmtCost(cost, currency) {
  if (cost == null || !currency) return null;
  const n = cost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  return n + " " + currency;
}

function entryById(id) { return TRIP_DATA.entries.find(e => e.id === id); }

let activeTypes = new Set(Object.keys(TRIP_DATA.byType));
let activeDest = "";

function renderTypeFilters() {
  const wrap = document.getElementById("typeFilters");
  wrap.innerHTML = "";
  Object.keys(TRIP_DATA.byType).forEach(type => {
    const btn = document.createElement("button");
    btn.className = "chip active";
    btn.textContent = (TYPE_LABELS[type] || type) + " (" + TRIP_DATA.byType[type].count + ")";
    btn.dataset.type = type;
    btn.addEventListener("click", () => {
      if (activeTypes.has(type)) { activeTypes.delete(type); btn.classList.remove("active"); }
      else { activeTypes.add(type); btn.classList.add("active"); }
      renderTimeline();
    });
    wrap.appendChild(btn);
  });
}

function renderDestFilter() {
  const sel = document.getElementById("destFilter");
  TRIP_DATA.totals.destinationsInOrder.forEach(dest => {
    const opt = document.createElement("option");
    opt.value = dest;
    opt.textContent = dest;
    sel.appendChild(opt);
  });
  sel.addEventListener("change", () => { activeDest = sel.value; renderTimeline(); });
}

function renderTimeline() {
  const container = document.getElementById("timeline");
  container.innerHTML = "";
  let shown = 0;
  const dates = Object.keys(TRIP_DATA.byDate).sort();
  dates.forEach(date => {
    let ids = TRIP_DATA.byDate[date].filter(id => {
      const e = entryById(id);
      if (!activeTypes.has(e.type)) return false;
      if (activeDest && e.destination !== activeDest) return false;
      return true;
    });
    if (ids.length === 0) return;
    shown += ids.length;
    const group = document.createElement("div");
    group.className = "day-group";
    const heading = document.createElement("div");
    heading.className = "day-heading";
    heading.textContent = fmtDate(date);
    group.appendChild(heading);
    ids.forEach(id => group.appendChild(renderEntry(entryById(id))));
    container.appendChild(group);
  });
  document.getElementById("emptyState").hidden = shown > 0;
}

function renderEntry(e) {
  const art = document.createElement("article");
  art.className = "entry" + (e.placeholder ? " placeholder" : "");

  const top = document.createElement("div");
  top.className = "entry-top";
  const left = document.createElement("div");
  if (e.placeholder) {
    const flag = document.createElement("span");
    flag.className = "placeholder-flag";
    flag.textContent = "⚑ ADD DETAILS";
    left.appendChild(flag);
  }
  const h3 = document.createElement("p");
  h3.className = "entry-title";
  h3.textContent = e.title;
  const dest = document.createElement("p");
  dest.className = "entry-dest";
  dest.textContent = e.destination;
  left.appendChild(h3);
  left.appendChild(dest);
  const badge = document.createElement("span");
  badge.className = "badge " + e.type;
  badge.textContent = TYPE_LABELS[e.type] || e.type;
  top.appendChild(left);
  top.appendChild(badge);
  art.appendChild(top);

  if (e.notes) {
    const notes = document.createElement("p");
    notes.className = "entry-notes";
    notes.textContent = e.notes;
    art.appendChild(notes);
  }

  const meta = document.createElement("div");
  meta.className = "entry-meta";
  const costStr = fmtCost(e.cost, e.currency);
  if (costStr) {
    const span = document.createElement("span");
    span.textContent = "$ " + costStr + (e.paid === false ? " (unpaid)" : "");
    meta.appendChild(span);
  }
  if (e.payer) {
    const span = document.createElement("span");
    span.textContent = "> " + e.payer;
    meta.appendChild(span);
  }
  if (e.paymentNote) {
    const span = document.createElement("span");
    span.textContent = "! " + e.paymentNote;
    meta.appendChild(span);
  }
  if (meta.children.length) art.appendChild(meta);

  if (e.links && e.links.length) {
    const linkWrap = document.createElement("div");
    linkWrap.className = "entry-links";
    e.links.forEach((url, i) => {
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = e.links.length > 1 ? "Booking link " + (i + 1) : "Booking link";
      if (e.linkWarning) a.classList.add("link-warning");
      linkWrap.appendChild(a);
    });
    art.appendChild(linkWrap);
  }

  return art;
}

function renderAlerts() {
  const list = document.getElementById("alertsList");
  list.innerHTML = "";
  const withNotes = TRIP_DATA.entries.filter(e => e.paymentNote || e.placeholder);
  if (withNotes.length === 0) {
    list.innerHTML = '<p class="empty-state">No pending alerts right now.</p>';
  }
  withNotes.forEach(e => {
    const card = document.createElement("div");
    const isPending = e.placeholder;
    card.className = "alert-card " + (isPending ? "pending" : "soft");
    const title = document.createElement("p");
    title.className = "alert-title";
    title.textContent = (e.placeholder ? "⚑ " : "$ ") + e.title;
    const detail = document.createElement("p");
    detail.className = "alert-detail";
    const costStr = fmtCost(e.cost, e.currency);
    detail.textContent = (e.paymentNote || e.notes || "") + (costStr ? " · " + costStr : "");
    card.appendChild(title);
    card.appendChild(detail);
    list.appendChild(card);
  });
  document.getElementById("alertCount").textContent = withNotes.length || "";

  const sharedList = document.getElementById("sharedList");
  if (sharedList) {
    sharedList.innerHTML = "";
    const shared = TRIP_DATA.entries.filter(e => e.payer === "All (shared)");
    shared.forEach(e => {
      const card = document.createElement("div");
      card.className = "baggage-card";
      const dest = document.createElement("span");
      dest.className = "bag-dest";
      dest.textContent = e.title;
      const note = document.createElement("span");
      note.className = "bag-note";
      note.textContent = e.paymentNote || "Shared cost, not split per person";
      card.appendChild(dest);
      card.appendChild(note);
      sharedList.appendChild(card);
    });
  }
}

function renderTips() {
  const list = document.getElementById("tipsList");
  list.innerHTML = "";
  const countriesVisited = [...new Set(TRIP_DATA.totals.destinationsInOrder.map(d => d.split(", ")[1]))];
  countriesVisited.forEach(country => {
    const tips = COUNTRY_TIPS[country] || COUNTRY_TIPS["_default"];
    const card = document.createElement("div");
    card.className = "tip-card";
    const h3 = document.createElement("h3");
    h3.textContent = country;
    const ul = document.createElement("ul");
    tips.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      ul.appendChild(li);
    });
    card.appendChild(h3);
    card.appendChild(ul);
    appendVisaBlock(card, country);
    list.appendChild(card);
  });
}

function renderTotals() {
  const list = document.getElementById("totalsList");
  list.innerHTML = "";
  Object.entries(TRIP_DATA.totals.costByCurrency).forEach(([currency, total]) => {
    const card = document.createElement("div");
    card.className = "totals-card";
    const label = document.createElement("span");
    label.textContent = "Total tracked (" + currency + ")";
    const val = document.createElement("strong");
    val.textContent = fmtCost(total, currency);
    card.appendChild(label);
    card.appendChild(val);
    list.appendChild(card);
  });
  const countCard = document.createElement("div");
  countCard.className = "totals-card";
  countCard.innerHTML = "<span>Total itinerary entries</span><strong>" + TRIP_DATA.totals.entryCount + "</strong>";
  list.appendChild(countCard);
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById("view-" + tab.dataset.view).classList.add("active");
    });
  });
}

function setupStickyTabs() {
  const sentinel = document.getElementById("tabsSentinel");
  const tabsNav = document.getElementById("tabsNav");
  if (!sentinel || !tabsNav || typeof IntersectionObserver === "undefined") return;
  const observer = new IntersectionObserver(
    ([entry]) => { tabsNav.classList.toggle("stuck", !entry.isIntersecting); },
    { threshold: 0, rootMargin: "0px" }
  );
  observer.observe(sentinel);
}

// --- "Today" view ---

function buildLegs() {
  const dates = Object.keys(TRIP_DATA.byDate).sort();
  const legs = [];
  dates.forEach(date => {
    const ids = TRIP_DATA.byDate[date];
    const dest = entryById(ids[0]).destination;
    if (!legs.length || legs[legs.length - 1].destination !== dest) {
      legs.push({ destination: dest, start: date, end: date });
    } else {
      legs[legs.length - 1].end = date;
    }
  });
  for (let i = 0; i < legs.length - 1; i++) {
    const nextStart = new Date(legs[i + 1].start + "T00:00:00");
    nextStart.setDate(nextStart.getDate() - 1);
    if (nextStart >= new Date(legs[i].start + "T00:00:00")) {
      legs[i].end = nextStart.toISOString().slice(0, 10);
    }
  }
  legs[legs.length - 1].end = TRIP_DATA.totals.dateRange.end;
  return legs;
}
const TRIP_LEGS = buildLegs();

function findLegForDate(iso) { return TRIP_LEGS.find(leg => iso >= leg.start && iso <= leg.end); }
function daysBetween(a, b) {
  const d1 = new Date(a + "T00:00:00");
  const d2 = new Date(b + "T00:00:00");
  return Math.round((d2 - d1) / 86400000);
}
function todayISO() {
  const input = document.getElementById("previewDate");
  if (input && input.value) return input.value;
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function renderToday() {
  const iso = todayISO();
  const statusEl = document.getElementById("todayStatus");
  const heading = document.getElementById("todayHeading");
  const isRealToday = !document.getElementById("previewDate").value ||
    document.getElementById("previewDate").value === (new Date()).toISOString().slice(0, 10);
  heading.textContent = isRealToday ? "Today — " + fmtDate(iso) : "Previewing — " + fmtDate(iso);

  const { start, end } = TRIP_DATA.totals.dateRange;
  statusEl.className = "today-status";
  let leg = findLegForDate(iso);

  if (iso < start) {
    statusEl.classList.add("outside");
    statusEl.textContent = "Trip starts in " + daysBetween(iso, start) + " day(s), on " + fmtDate(start) + ".";
    leg = TRIP_LEGS[0];
  } else if (iso > end) {
    statusEl.classList.add("outside");
    statusEl.textContent = "Trip wrapped up on " + fmtDate(end) + ". Hope it was a good one!";
    leg = TRIP_LEGS[TRIP_LEGS.length - 1];
  } else {
    statusEl.textContent = "You're in " + leg.destination + " right now.";
  }

  document.getElementById("todayCityName").textContent = leg ? leg.destination : "—";

  const scheduleEl = document.getElementById("todaySchedule");
  scheduleEl.innerHTML = "";
  const ids = TRIP_DATA.byDate[iso] || [];
  if (ids.length === 0) {
    const p = document.createElement("p");
    p.className = "empty-state";
    p.textContent = (iso >= start && iso <= end)
      ? "No scheduled items today — you're settled in " + (leg ? leg.destination : "") + "."
      : "Nothing scheduled for this date.";
    scheduleEl.appendChild(p);
  } else {
    ids.forEach(id => scheduleEl.appendChild(renderEntry(entryById(id))));
  }

  const tipsEl = document.getElementById("todayTips");
  tipsEl.innerHTML = "";
  if (leg) {
    const country = leg.destination.split(", ")[1];
    const tips = COUNTRY_TIPS[country] || COUNTRY_TIPS["_default"];
    const card = document.createElement("div");
    card.className = "tip-card";
    const ul = document.createElement("ul");
    tips.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      ul.appendChild(li);
    });
    card.appendChild(ul);
    appendVisaBlock(card, country);
    tipsEl.appendChild(card);
  }

  const alertsEl = document.getElementById("todayAlerts");
  alertsEl.innerHTML = "";
  const relevant = [];
  TRIP_DATA.entries.forEach(e => {
    if (e.placeholder) {
      const diff = daysBetween(iso, e.date);
      if (diff >= -3 && diff <= 3) relevant.push(e);
    } else if (e.paymentNote) {
      const diff = daysBetween(iso, e.date);
      if (diff >= -3 && diff <= 3) relevant.push(e);
    }
  });
  if (relevant.length === 0) {
    const p = document.createElement("p");
    p.className = "empty-state";
    p.textContent = "No urgent payment or flight alerts right now.";
    alertsEl.appendChild(p);
  } else {
    relevant.forEach(e => {
      const card = document.createElement("div");
      card.className = "alert-card " + (e.placeholder ? "pending" : "soft");
      const title = document.createElement("p");
      title.className = "alert-title";
      title.textContent = (e.placeholder ? "⚑ " : "$ ") + e.title;
      const detail = document.createElement("p");
      detail.className = "alert-detail";
      const costStr = fmtCost(e.cost, e.currency);
      detail.textContent = (e.paymentNote || e.notes || "") + (costStr ? " · " + costStr : "");
      card.appendChild(title);
      card.appendChild(detail);
      alertsEl.appendChild(card);
    });
  }
}

renderTypeFilters();
renderDestFilter();
renderTimeline();
renderAlerts();
renderTips();
renderTotals();
renderToday();
setupTabs();
setupStickyTabs();
setupPreviewDate();

function setupPreviewDate() {
  const input = document.getElementById("previewDate");
  const btn = document.getElementById("previewBtn");
  const resetBtn = document.getElementById("previewResetBtn");
  const realTodayISO = (new Date()).toISOString().slice(0, 10);

  btn.addEventListener("click", () => {
    if (typeof input.showPicker === "function") { input.showPicker(); }
    else { input.focus(); input.click(); }
  });

  input.addEventListener("change", () => {
    resetBtn.hidden = !input.value || input.value === realTodayISO;
    renderToday();
  });

  resetBtn.addEventListener("click", () => {
    input.value = "";
    resetBtn.hidden = true;
    renderToday();
  });
}
