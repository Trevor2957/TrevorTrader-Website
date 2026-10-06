/* TrevorTrader · Evidence over time (simplified view)
   Reads data/evidence-history.json and draws one card per engine.
   Default view: account change, one plain summary line, a P&L-over-time chart,
   and a pending warning only when needed. The full evidence record sits in
   a collapsed "Evidence details" section. Missing values stay missing. */
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg", W = 360, H = 222, L = 50, R = 14, T = 22, B = 44;
  var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  function money(v) {
    var s = "$" + Math.abs(v).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (Math.abs(v) < 0.005) return s;
    return (v < 0 ? "\u2212" : "+") + s;
  }
  function pct(v) { return (v < -0.005 ? "\u2212" : v > 0.005 ? "+" : "") + Math.abs(v).toFixed(2) + "%"; }
  function plainMoney(v) { return money(v).replace("+", ""); }
  function shortMoney(v) {
    var a = Math.abs(v), s = a >= 1000 ? (a / 1000).toFixed(1) + "k" : String(Math.round(a));
    return (v < 0 ? "\u2212$" : "$") + s;
  }
  function day(iso) { var p = iso.split("-"); return MONTHS[+p[1] - 1] + " " + (+p[2]); }
  function longDay(iso) { return day(iso) + ", " + iso.slice(0, 4); }
  function sign(v) { return v > 0.005 ? "win" : v < -0.005 ? "loss" : "flat"; }
  function tone(v) { return v > 0.005 ? "pos" : v < -0.005 ? "neg" : "flat"; }
  function state(t) { return t.status === "reconciled" ? "reconciled" : t.status === "broker_matched" ? "broker-matched" : "pending"; }
  function pending(t) { return state(t) === "pending"; }
  function sum(list) { return list.reduce(function (s, t) { return s + t.gross; }, 0); }
  function plural(n, word) { return n + " " + word + (n === 1 ? "" : "s"); }
  function el(name, attrs, parent) {
    var n = document.createElementNS(NS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function h(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function niceStep(span) {
    var raw = span / 3, mag = Math.pow(10, Math.floor(Math.log10(raw || 1))), f = raw / mag;
    return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * mag;
  }

  function prepare(data) {
    return data.engines.map(function (eng) {
      var trades = data.trades.filter(function (t) { return t.engine === eng.id; })
        .sort(function (a, b) { return (a.session + a.exit_pt).localeCompare(b.session + b.exit_pt); });
      var run = 0;
      trades.forEach(function (t, i) { run += t.gross; t.n = i + 1; t.running = Math.round(run * 100) / 100; });
      return { eng: eng, trades: trades };
    });
  }

  // P&L over time: running gross P&L, one point per completed trade,
  // each trading session its own segment, trades placed by actual Pacific time.
  function drawChart(wrap, eng, trades, readout) {
    var w = W - L - R, ih = H - T - B;
    var svg = el("svg", { viewBox: "0 0 " + W + " " + H, role: "img",
      "aria-label": eng.name + " trade P&L over time, gross before fees" });
    var vals = trades.map(function (t) { return t.running; });
    var lo = Math.min(0, Math.min.apply(null, vals)), hi = Math.max(0, Math.max.apply(null, vals));
    if (hi - lo < 1) { hi += 1; lo -= 1; }
    var pad = (hi - lo) * 0.08; if (hi > 0) hi += pad; if (lo < 0) lo -= pad;
    var step = niceStep(hi - lo); lo = Math.floor(lo / step) * step; hi = Math.ceil(hi / step) * step;
    function y(v) { return T + (hi - v) / (hi - lo) * ih; }

    var sessions = (eng.sessions || []).map(function (s) { return s.date; }), seen = {};
    sessions.forEach(function (s) { seen[s] = 1; });
    trades.forEach(function (t) { if (!seen[t.session]) { sessions.push(t.session); seen[t.session] = 1; } });
    sessions.sort();
    var bounds = eng.id === "surge" ? [1, 13] : [6.5, 13], gap = 12;
    var segW = (w - gap * (sessions.length - 1)) / Math.max(1, sessions.length);
    function mins(t) { var p = t.exit_pt.split(":"); return +p[0] * 60 + (+p[1]) + (+p[2] / 60); }
    function x(t) {
      var si = Math.max(0, sessions.indexOf(t.session)), start = bounds[0] * 60, end = bounds[1] * 60;
      var f = Math.max(0, Math.min(1, (mins(t) - start) / (end - start)));
      return L + si * (segW + gap) + f * segW;
    }

    for (var v = lo; v <= hi + 1e-9; v += step)
      el("text", { x: L - 8, y: y(v) + 4, "text-anchor": "end", "class": "tick" }, svg).textContent = shortMoney(v);
    el("line", { x1: L, x2: L + w, y1: T + ih, y2: T + ih, "class": "axis" }, svg);
    el("line", { x1: L, x2: L + w, y1: y(0), y2: y(0), "class": "zero" }, svg);
    el("line", { x1: L, x2: L, y1: T, y2: T + ih, "class": "axis" }, svg);
    el("text", { x: L - 8, y: T - 9, "text-anchor": "end", "class": "axis-title" }, svg).textContent = "P&L ($)";
    el("text", { x: L + w, y: T - 9, "text-anchor": "end", "class": "axis-title" }, svg).textContent = "Time (PT) \u2192";

    sessions.forEach(function (s, si) {
      var sx = L + si * (segW + gap), mid = sx + segW / 2;
      if (si) el("line", { x1: sx - gap / 2, x2: sx - gap / 2, y1: T, y2: T + ih, "class": "session" }, svg);
      // Time ticks (Pacific) inside each session, date label underneath.
      var hrs = eng.id === "surge" ? [2, 6, 10] : [7, 9, 11];
      hrs.forEach(function (hr) {
        var tx = sx + (hr - bounds[0]) / (bounds[1] - bounds[0]) * segW;
        el("line", { x1: tx, x2: tx, y1: T + ih, y2: T + ih + 4, "class": "axis" }, svg);
        el("text", { x: tx, y: T + ih + 15, "text-anchor": "middle", "class": "time-tick" }, svg).textContent =
          (hr > 12 ? hr - 12 : hr) + (hr >= 12 ? "p" : "a");
      });
      el("text", { x: mid, y: H - 6, "text-anchor": "middle", "class": "session-label" }, svg).textContent = day(s);
      var hasTrades = trades.some(function (t) { return t.session === s; });
      if (!hasTrades)
        el("text", { x: mid, y: T + ih / 2, "text-anchor": "middle", "class": "empty-session" }, svg).textContent = "No trades";
    });

    function describe(t) {
      var st = state(t) === "pending" ? "Pending reconciliation" : state(t) === "broker-matched" ? "Broker-matched" : "Reconciled";
      return "<strong>" + t.symbol + "</strong> \u00b7 " + day(t.session) + " \u00b7 closed " + t.exit_pt + " PT \u00b7 " + t.reason +
        "<br><strong>" + money(t.gross) + "</strong> this trade \u00b7 <strong>" + money(t.running) + "</strong> running total \u00b7 " + st;
    }
    function bind(node, t) {
      node.setAttribute("tabindex", "0");
      el("title", {}, node).textContent = t.symbol + ": " + money(t.gross) + " gross";
      var show = function () { readout.innerHTML = describe(t); };
      node.addEventListener("mouseenter", show);
      node.addEventListener("focus", show);
      node.addEventListener("click", show);
    }

    var d = "", lastY = y(0);
    trades.forEach(function (t, i) {
      var xx = x(t), yy = y(t.running);
      if (i === 0 || t.session !== trades[i - 1].session) d += (d ? " M" : "M") + xx.toFixed(1) + " " + lastY.toFixed(1);
      d += " H" + xx.toFixed(1) + " V" + yy.toFixed(1);
      lastY = yy;
    });
    el("path", { d: d, "class": "line" }, svg);
    trades.forEach(function (t) {
      bind(el("circle", { cx: x(t), cy: y(t.running), r: 5,
        "class": "pt " + sign(t.gross) + (pending(t) ? " pending" : "") }, svg), t);
    });
    wrap.appendChild(svg);
  }

  function statsList(rows, cls) {
    var dl = h("dl", cls);
    rows.forEach(function (r) {
      var d = h("div"); d.appendChild(h("dt", null, r[0])); d.appendChild(h("dd", null, r[1])); dl.appendChild(d);
    });
    return dl;
  }

  function panel(item, data) {
    var eng = item.eng, trades = item.trades, n = trades.length;
    var p = h("article", "eot-panel");
    p.style.setProperty("--engine", eng.color || "#56aeff");
    var head = h("header");
    head.appendChild(h("h3", null, eng.name));
    head.appendChild(h("span", "eot-role", eng.role));
    p.appendChild(head);
    var since = n ? trades[0].session : ((eng.sessions || [])[0] || {}).date;
    p.appendChild(h("p", "eot-exp", eng.experiment + (since ? " \u00b7 since " + longDay(since) : "")));
    if (!n) { p.appendChild(h("p", "eot-pending", "No completed trades in the record yet.")); return p; }

    var total = trades[n - 1].running;
    var startBal = typeof eng.starting_balance === "number" ? eng.starting_balance : null;
    var currentBal = typeof eng.current_balance === "number" ? eng.current_balance : null;
    var acctChange = (startBal !== null && currentBal !== null) ? currentBal - startBal : null;
    var wins = trades.filter(function (t) { return t.gross > 0.005; }).length;
    var losses = trades.filter(function (t) { return t.gross < -0.005; }).length;
    var pen = trades.filter(pending);

    // 1. One headline number: account change and return.
    var hl = h("div", "eot-headline");
    if (acctChange !== null) {
      hl.appendChild(h("span", "eot-total " + tone(acctChange), money(acctChange)));
      hl.appendChild(h("span", "eot-return " + tone(acctChange), pct(acctChange / startBal * 100)));
      p.appendChild(hl);
      p.appendChild(h("p", "eot-total-label", "Paper account change \u00b7 " + plainMoney(startBal) + " \u2192 " + plainMoney(currentBal)));
    } else {
      hl.appendChild(h("span", "eot-total " + tone(total), money(total)));
      p.appendChild(hl);
      p.appendChild(h("p", "eot-total-label", "Recorded trade P&L \u00b7 gross before fees"));
    }

    // 2. One plain line.
    p.appendChild(h("p", "eot-summary-line",
      plural(n, "trade") + " \u00b7 " + plural(wins, "win") + " \u00b7 " + plural(losses, "loss").replace("losss", "losses")));

    // 4. Warning only when needed.
    if (pen.length)
      p.appendChild(h("p", "eot-warn", "Includes " + plural(pen.length, "trade") + " (" + money(sum(pen)) +
        ") still pending reconciliation. Hollow points on the chart."));

    // 3. One simple chart: P&L over time.
    p.appendChild(h("p", "eot-chart-title", "Trade P&L over time \u00b7 gross before fees"));
    var chart = h("div", "eot-chart"), readout = h("p", "eot-readout", "Tap or hover a point to see the trade.");
    readout.setAttribute("aria-live", "polite");
    drawChart(chart, eng, trades, readout);
    p.appendChild(chart);
    p.appendChild(readout);
    p.appendChild(h("p", "eot-sample-line", "Early sample \u00b7 too few trades to judge an edge."));

    // Everything else: collapsed evidence details.
    var det = h("details", "eot-details");
    det.appendChild(h("summary", null, "Evidence details"));

    if (startBal !== null) {
      det.appendChild(statsList([
        [eng.balance_note ? "Baseline (user-designated)" : "Starting balance", plainMoney(startBal)],
        ["Current balance", plainMoney(currentBal)],
        ["Account change", money(acctChange)],
        ["Recorded trade P&L (gross)", money(total)]
      ], "eot-balance"));
      if (eng.balance_note) det.appendChild(h("p", "eot-detail-note", eng.balance_note));
      if (Math.abs(acctChange - total) > 0.005)
        det.appendChild(h("p", "eot-detail-note", "Account change and recorded gross trade P&L differ by " +
          money(acctChange - total) + ". Fee/adjustment attribution remains pending; no cause is assumed."));
    }

    var rec = trades.filter(function (t) { return state(t) === "reconciled"; });
    var bm = trades.filter(function (t) { return state(t) === "broker-matched"; });
    var split = h("div", "eot-status-split");
    if (rec.length) split.appendChild(h("div", "reconciled", "Reconciled " + money(sum(rec)) + " \u00b7 " + plural(rec.length, "trade")));
    if (bm.length) split.appendChild(h("div", "broker-matched", "Broker-matched " + money(sum(bm)) + " \u00b7 " + plural(bm.length, "trade")));
    if (pen.length) split.appendChild(h("div", "pending", "Pending " + money(sum(pen)) + " \u00b7 " + plural(pen.length, "trade")));
    det.appendChild(h("strong", "eot-detail-head", "Evidence status"));
    det.appendChild(split);

    var sessionsWithTrades = {}; trades.forEach(function (t) { sessionsWithTrades[t.session] = 1; });
    var sessionsRun = (eng.sessions || []).length || Object.keys(sessionsWithTrades).length;
    var feesKnown = trades.every(function (t) { return typeof t.fees === "number"; });
    var net = feesKnown ? trades.reduce(function (s, t) { return s + t.gross - t.fees; }, 0) : null;
    det.appendChild(statsList([
      ["Win rate", (wins / n * 100).toFixed(1) + "%"],
      ["Avg / trade (gross)", money(total / n)],
      ["Sessions run", sessionsRun + " \u00b7 with trades " + Object.keys(sessionsWithTrades).length],
      ["After fees", net === null ? "Pending" : money(net)]
    ], "eot-stats"));

    var builds = eng.builds || [], latest = builds[builds.length - 1];
    if (builds.length) {
      var bh = h("div", "eot-build-history");
      bh.appendChild(h("strong", null, "Build history"));
      builds.forEach(function (b) {
        var used = trades.filter(function (t) { return t.build === b.id; }).length;
        if (used || b === latest)
          bh.appendChild(h("span", null, b.label + (b.installed ? " \u00b7 " + longDay(b.installed) : "") +
            " \u00b7 " + (used ? plural(used, "trade") : "no trades yet")));
      });
      det.appendChild(bh);
    }
    p.appendChild(det);
    return p;
  }

  function render(root, data) {
    var grid = root.querySelector(".eot-grid");
    grid.innerHTML = "";
    prepare(data).forEach(function (item) { grid.appendChild(panel(item, data)); });
  }

  function init(root) {
    var src = root.getAttribute("data-src") || "data/evidence-history.json";
    var bar = h("div", "eot-bar"), basis = h("span", "eot-basis", "Paper trading");
    bar.appendChild(basis);
    root.appendChild(bar);
    root.appendChild(h("div", "eot-grid"));
    var note = h("p", "eot-note");
    root.appendChild(note);
    fetch(src, { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (data) {
        basis.textContent = "Paper trading \u00b7 updated " + longDay(data.updated);
        note.innerHTML = "<strong>How to read this.</strong> The big number is the change in each paper account's broker balance. " +
          "The chart shows recorded trade P&L over time, gross before fees: one point per completed trade, each trading day its own section. " +
          "Hollow points are still pending reconciliation. Open <em>Evidence details</em> on any card for balances, evidence status and build history. " +
          (data.note ? data.note + " " : "") + "Paper fills may be better than live fills. These results are a record, not a validated edge.";
        render(root, data);
      })
      .catch(function () {
        root.querySelector(".eot-grid").innerHTML = "";
        root.querySelector(".eot-grid").appendChild(h("p", "eot-error",
          "The evidence record could not be loaded. Check that " + src + " is published with the site."));
        note.remove();
      });
  }

  function start() {
    var roots = document.querySelectorAll("[data-eot-root]");
    for (var i = 0; i < roots.length; i++) init(roots[i]);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();