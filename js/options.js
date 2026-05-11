(() => {
  var t = {
      5: (t) => {
        t.exports = (function () {
          return {
            t: "bllist",
            o: 2,
            _: "ads_last_backend_fetch_at",
            i: "mp4",
            l: "policy_accepted",
            u: "jpg",
            $: "i",
            h: "be13233562af2d229b008d2976b998b5",
            m: "M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z",
            p: "2efa04f61586458cef44441f474eee7c",
            v: "M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z",
            S: "is",
            I: "M5.888 22.5a3.46 3.46 0 0 1-1.721-.46l-.003-.002a3.451 3.451 0 0 1-1.72-2.982V4.943a3.445 3.445 0 0 1 5.163-2.987l12.226 7.059a3.444 3.444 0 0 1-.001 5.967l-12.22 7.056a3.462 3.462 0 0 1-1.724.462Z",
            P: "https://sites.google.com/view/ulti-downloader",
            A: "aas",
            T: "promotional_allowed",
            U: "ads_last_event",
            k: "M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z",
            M: 1,
            R: 8,
            L: "c",
            F: "igt",
            H: "uid",
          };
        })();
      },
      7: (t, e, n) => {
        const o = n(5);
        t.exports = (function () {
          return {
            B: 1,
            C: 2,
            N: 0,
            O: function (t, e) {
              return t.takenAt < e.takenAt ? 1 : t.takenAt > e.takenAt ? -1 : 0;
            },
            V: function (t, e) {
              let n = t.width || t.config_width || null,
                o = e.width || e.config_width || null,
                r = t.height || t.config_height || null,
                _ = e.height || e.config_height || null;
              return n && o && n !== r && o !== _
                ? n !== o
                  ? o > n
                    ? 1
                    : -1
                  : _ > r
                    ? 1
                    : -1
                : 0;
            },
            G(t) {
              t.length > 28 && (t = t.substr(0, t.length - 28));
              const e = "abcdefghijklmnopqrstuvwxyz",
                n = e.toUpperCase() + e + "0123456789-_";
              let o = BigInt(0);
              for (let e of t) {
                let t = n.indexOf(e);
                ((o *= BigInt(64)), (o += BigInt(t)));
              }
              return o.toString();
            },
            D(t) {
              const e = "abcdefghijklmnopqrstuvwxyz",
                n = e.toUpperCase() + e + "0123456789-_";
              let o = BigInt(t),
                r = "";
              for (; o > 0; ) {
                const t = o % BigInt(64);
                ((r = n[Number(t)] + r), (o /= BigInt(64)));
              }
              return r;
            },
            Y: function (t) {
              if (
                document.querySelector(
                  `a[href*="${t}/followers/"], a[href*="${t}/following/"]`,
                )
              )
                return !0;
              let e = document.querySelector("main header section");
              return e && e.innerText && e.innerText.toLowerCase().includes(t);
            },
            K: function () {
              let t = location.pathname.match("(?<=/).+?(?=/)|(?<=/).+?(?=/)"),
                e = (t && t[0]) || null;
              return (
                e ||
                  ((t = location.pathname.match(/\/([^/]+)\/?$/)),
                  (e = (t && t[1]) || null)),
                e
              );
            },
            j: function () {
              let t = location.href.match(/(?<=\/reels\/).+?(?=\/)/);
              return (t && t[0]) || null;
            },
            q: function () {
              let t = location.pathname.match(
                /(?<=\/stories\/).+?(?=\/)|((?<=\/stories\/).+)/,
              );
              return t && t[0];
            },
            J: function () {
              let t = location.pathname.match(
                /(?<=\/stories\/highlights\/).+?(?=\/$)/,
              );
              return t && t[0];
            },
            X: function () {
              let t = location.pathname.match(
                /(?<=\/explore\/tags\/).+?(?=\/$)/,
              );
              return t && t[0];
            },
            Z: function () {
              let t = location.pathname.match(
                /(?<=\/explore\/locations\/).+?(?=\/$)/,
              );
              return t && t[0];
            },
            W: function () {
              let t = location.pathname.match(/(?<=\/saved\/*.+\/).*?(?=\/)/);
              return t && t[0];
            },
            tt: function () {
              let t = location.pathname.match(/\/reels\/audio\/([^\/]+)\/?$/);
              return t && t[1];
            },
            et: function () {
              let t = location.pathname.match(
                /(?<=\/(p|reel)\/)[^\/]+(?=\/?$)/,
              );
              return t && t[0];
            },
            nt: function () {
              return "/explore/" === location.pathname;
            },
            ot: function () {
              return /(^\/stories\/highlights\/[0-9]+\/$)/.test(
                location.pathname,
              );
            },
            rt: function () {
              return /(^\/stories\/.+\/[0-9]+\/$)|(^\/stories\/.+\/$)/.test(
                location.pathname,
              );
            },
            _t: function () {
              return "/" === location.pathname;
            },
            it: function () {
              function t(t, e) {
                return Math.floor(Math.random() * (1 + e - t)) + t;
              }
              return t(1, 9e9);
            },
            lt: function (t) {
              let e,
                n,
                o = this,
                r = o.K();
              if (!r) return t(!1);
              function _() {
                (e && clearInterval(e),
                  (e = null),
                  n && clearTimeout(n),
                  (n = null));
              }
              function i() {
                return !(!r || !o.Y(r) || (_(), t("explore" !== r), 0));
              }
              i() ||
                (_(),
                (e = setInterval(i, 10)),
                (n = setTimeout(function () {
                  return (clearInterval(e), (e = null), t(!1));
                }, 1e4)));
            },
            ut: function () {
              return /\/*.+\/saved\/$/.test(location.pathname);
            },
            ct: function () {
              return /\/*.+\/saved\/all-posts\/$/.test(location.pathname);
            },
            st: function () {
              return /\/saved\/*.+\/[0-9]+\/$/.test(location.pathname);
            },
            ft: function () {
              return /.+\/tagged\/$/.test(location.pathname);
            },
            $t: function () {
              return /.+\/reels\/$/.test(location.pathname);
            },
            dt: function () {
              return /(^\/reels\/.+\/$)|(^\/reels\/$)/.test(location.pathname);
            },
            gt: function () {
              return /^\/reels\/audio\/.+\/?$/.test(location.pathname);
            },
            ht: function () {
              return /(^\/reels\/.+$)/.test(location.pathname);
            },
            vt: function () {
              return /(^\/reel\/[^\/]+\/?$)|(^\/p\/[^\/]+\/?$)/.test(
                location.pathname,
              );
            },
            St: function () {
              return /\/explore\/locations\/.*\/+/.test(location.pathname);
            },
            yt: function () {
              return /\/explore\/tags\/.*\/$/.test(location.pathname);
            },
            It: function () {
              return /(\/.+\/guide\/.+)|(\/.+\/guides\/$)/.test(
                location.pathname,
              );
            },
            Pt: function (t) {
              chrome.runtime.sendMessage(
                { title: "get_download_status" },
                function (e) {
                  t(e);
                },
              );
            },
            At: function (t) {
              return chrome.runtime.sendMessage(t);
            },
            Et: function (t, e) {
              let n = this,
                o = new Date();
              o.setMonth(o.getMonth() - 1);
              let r = o.getTime() / 1e3;
              chrome.storage.local.get("inputDate", function (o) {
                if (!o || !o.inputDate) return e(r);
                function _() {
                  if (!t) return e(r);
                  let _ = n.K();
                  if (_ && n.Y(_)) {
                    let n = _ + "_" + t;
                    return o.inputDate[n] ? e(o.inputDate[n]) : e(r);
                  }
                }
                _();
              });
            },
            Tt: function () {
              let t = document.querySelector(`svg path[d*="${o.m}"]`) || null;
              if (!t) return;
              let e = (t && t.closest("button")) || null;
              e ? e.click() : t.parentElement.parentElement.click();
            },
            Ut: function () {
              let t = document.querySelector(`svg path[d*="${o.I}"]`) || null;
              if (!t) return;
              let e = (t && t.closest("button")) || null;
              e ? e.click() : t.parentElement.parentElement.click();
            },
            kt: function (t, e) {
              let n = t.match(/\/([^\/?]+)(?:$|\?)/);
              return ((n = n && n[1]), n ? e + "_" + n : null);
            },
            bt: function () {
              return Array.from(document.querySelectorAll("section")).find(
                (t) => !t.closest("[hidden]"),
              );
            },
            Mt: function () {
              const t = this.bt();
              return Array.from(t.querySelectorAll("div")).find((t) => {
                let e = t.clientHeight || t.offsetHeight;
                if (e > 0 && e < 6) return t.parentElement;
              });
            },
            Rt: function () {
              const t = this.Mt();
              if (!t) return 0;
              let e = t.querySelectorAll("div[style]"),
                n;
              return e && e.length
                ? ((e = e[e.length - 1].parentElement || null),
                  null == e
                    ? 0
                    : (t.children && Array.from(t.children).indexOf(e)) || 0)
                : 0;
            },
            Lt: function () {
              let t = this.Mt();
              return (t && t.children && t.children.length) || 1;
            },
            Ft: function (t) {
              let e = t.querySelector("svg path");
              return (
                !(!e || !e.hasAttribute("d")) && e.getAttribute("d") == o.v
              );
            },
            Ht: function (t, e) {
              e && !Array.isArray(e) && (e = [e]);
              for (
                var n = [],
                  o = { "{": 0, "[": 0 },
                  r = { "}": "{", "]": "[" },
                  _ = /[{}\]\[":0-9.,-]/,
                  i = /[\r\n\s\t]/,
                  l = "",
                  u = 0,
                  c;
                (c = t[u]);
                u++
              )
                if ('"' !== c)
                  _.test(c)
                    ? ((l += c),
                      "{" === c || "[" === c
                        ? (o["{"] || o["["] || (l = c), o[c]++)
                        : ("}" !== c && "]" !== c) ||
                          (o[r[c]]--, o["{"] || o["["] || n.push(l)))
                    : "t" === c && "true" === t.substr(u, 4)
                      ? ((l += "true"), (u += 3))
                      : "f" === c && "false" === t.substr(u, 5)
                        ? ((l += "false"), (u += 4))
                        : "n" === c && "null" === t.substr(u, 4)
                          ? ((l += "null"), (u += 3))
                          : i.test(c) || ((o["{"] = 0), (o["["] = 0), (l = ""));
                else {
                  for (var a = u; -1 !== a && (a === u || "\\" === t[a - 1]); )
                    a = t.indexOf('"', a + 1);
                  (-1 === a && (a = t.length - 1),
                    (l += t.substr(u, a - u + 1)),
                    (u = a));
                }
              for (var s = [], u = 0, f; (f = n[u]); u++)
                if ("{}" !== f && "[]" !== f)
                  try {
                    e
                      ? e.every(function (t) {
                          return t.test(f);
                        }) && s.push(JSON.parse(f))
                      : s.push(JSON.parse(f));
                  } catch (t) {}
              return s;
            },
          };
        })();
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var _ = (e[o] = { exports: {} });
    return (t[o](_, _.exports, n), _.exports);
  }
  const o = n(5),
    r = n(7);
  function _() {
    for (
      var t = document.getElementsByTagName("html"), e = 0;
      e < t.length;
      e++
    ) {
      var n = t[e],
        o = n.innerHTML.toString(),
        r = o.replace(/__MSG_(\w+)__/g, function (t, e) {
          return e ? chrome.i18n.getMessage(e) : "";
        });
      r != o && (n.innerHTML = r);
    }
  }
  function i() {
    _();
    let t = document.querySelector(".options .promotional") || null;
    t &&
      chrome.storage.sync.get(null).then((e) => {
        let n;
        e && e[o.T] && (t.checked = !0);
        let r = document.querySelector(".save");
        r && r.addEventListener("click", l);
      });
  }
  function l(t) {
    let e = document.querySelector(".options .promotional") || null;
    if (!e) return;
    let n = e.checked || !1;
    r.At({ title: "policy_accept_by_user", value: n });
  }
  i();
})();
