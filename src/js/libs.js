/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    var c = [], d = a.document, e = Object.getPrototypeOf, f = c.slice, g = c.concat, h = c.push, i = c.indexOf, j = {}, k = j.toString, l = j.hasOwnProperty, m = l.toString, n = m.call(Object), o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }

    var q = "3.1.1", r = function (a, b) {
        return new r.fn.init(a, b)
    }, s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t = /^-ms-/, u = /-([a-z])/g, v = function (a, b) {
        return b.toUpperCase()
    };
    r.fn = r.prototype = {
        jquery: q, constructor: r, length: 0, toArray: function () {
            return f.call(this)
        }, get: function (a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        }, pushStack: function (a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        }, each: function (a) {
            return r.each(this, a)
        }, map: function (a) {
            return this.pushStack(r.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(f.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: h, sort: c.sort, splice: c.splice
    }, r.extend = r.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === r.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        }, isPlainObject: function (a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            p(a)
        }, camelCase: function (a) {
            return a.replace(t, "ms-").replace(u, v)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++) if (b.call(a[d], d, a[d]) === !1) break
            } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(s, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, e, f = 0, h = [];
            if (w(a)) for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e); else for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        }, guid: 1, proxy: function (a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }, e.guid = a.guid = a.guid || r.guid++, e
        }, now: Date.now, support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });

    function w(a) {
        var b = !!a && "length" in a && a.length, c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    var x = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
                return a === b && (l = !0), 0
            }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
                return -1
            }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N), U = new RegExp("^" + L + "$"),
            V = {ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")}, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function (a, b) {
                return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            }, da = function () {
                m()
            }, ea = ta(function (a) {
                return a.disabled === !0 && ("form" in a || "label" in a)
            }, {dir: "parentNode", next: "legend"});
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
                    if (9 === w) {
                        if (!(j = b.getElementById(f))) return d;
                        if (j.id === f) return d.push(j), d
                    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                } else {
                    if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                    if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a; else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) {
                    } finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"), e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function (b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function pa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.filter.ID = function (a) {
                var b = a.replace(_, aa);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }, d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (d.filter.ID = function (a) {
                var b = a.replace(_, aa);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++]) if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {
            }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function (a) {
            return (a + "").replace(ba, ca)
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            }, filter: {
                TAG: function (a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [w, n, t];
                                    break
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            }, pseudos: {
                not: ia(function (a) {
                    var b = [], c = [], d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }), contains: ia(function (a) {
                    return a = a.replace(_, aa), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ia(function (a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: oa(!1), disabled: oa(!0), checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return X.test(a.nodeName)
                }, input: function (a) {
                    return W.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: pa(function () {
                    return [0]
                }), last: pa(function (a, b) {
                    return [b - 1]
                }), eq: pa(function (a, b, c) {
                    return [c < 0 ? c + b : c]
                }), even: pa(function (a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }), odd: pa(function (a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }), lt: pa(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }), gt: pa(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) d.pseudos[b] = ma(b);
        for (b in {submit: !0, reset: !0}) d.pseudos[b] = na(b);

        function ra() {
        }

        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({value: c, type: e[0].replace(P, " ")}), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({value: c, type: g, matches: e}), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = x++;
            return b.first ? function (b, c, e) {
                while (b = b[d]) if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function (b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d]) if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else while (b = b[d]) if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b; else {
                    if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                    if (k[f] = m, m[2] = a(b, c, i)) return !0
                }
                return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                return a === b
            }, h, !0), l = ta(function (a) {
                return I(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; i < f; i++) if (c = d.relative[a[i].type]) m = [ta(ua(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
                    return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                }
                m.push(c)
            }
            return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                        while (q = a[o++]) if (q(l, g || n, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--, f && t.push(l))
                }
                if (r += s, c && s !== r) {
                    o = 0;
                    while (q = b[o++]) q(t, u, g, h);
                    if (f) {
                        if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));
                        u = wa(u)
                    }
                    G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = y, j = v), t
            };
            return c ? ia(f) : f
        }

        return h = ga.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function (a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function (a, b, c) {
        var d = [], e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
            if (e && r(a).is(c)) break;
            d.push(a)
        }
        return d
    }, z = function (a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c
    }, A = r.expr.match.needsContext, B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, C = /^.[^:#\[\.,]*$/;

    function D(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function (a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c
        }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }

    r.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function (a) {
            var b, c, d = this.length, e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
                for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        }, filter: function (a) {
            return this.pushStack(D(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(D(this, a || [], !0))
        }, is: function (a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, G = r.fn.init = function (a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || E, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
    };
    G.prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/, I = {children: !0, contents: !0, next: !0, prev: !0};
    r.fn.extend({
        has: function (a) {
            var b = r(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0
            })
        }, closest: function (a, b) {
            var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a);
            if (!A.test(a)) for (; d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a
    }

    r.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return y(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return y(a, "parentNode", c)
        }, next: function (a) {
            return J(a, "nextSibling")
        }, prev: function (a) {
            return J(a, "previousSibling")
        }, nextAll: function (a) {
            return y(a, "nextSibling")
        }, prevAll: function (a) {
            return y(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return y(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return y(a, "previousSibling", c)
        }, siblings: function (a) {
            return z((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return z(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || r.merge([], a.childNodes)
        }
    }, function (a, b) {
        r.fn[a] = function (c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var K = /[^\x20\t\r\n\f]+/g;

    function L(a) {
        var b = {};
        return r.each(a.match(K) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    r.Callbacks = function (a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function () {
            for (e = a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
            }
            a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
        }, j = {
            add: function () {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    r.each(b, function (b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                    })
                }(arguments), c && !b && i()), this
            }, remove: function () {
                return r.each(arguments, function (a, b) {
                    var c;
                    while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                }), this
            }, has: function (a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0
            }, empty: function () {
                return f && (f = []), this
            }, disable: function () {
                return e = g = [], f = c = "", this
            }, disabled: function () {
                return !f
            }, lock: function () {
                return e = g = [], c || b || (f = c = ""), this
            }, locked: function () {
                return !!e
            }, fireWith: function (a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
            }, fire: function () {
                return j.fireWith(this, arguments), this
            }, fired: function () {
                return !!d
            }
        };
        return j
    };

    function M(a) {
        return a
    }

    function N(a) {
        throw a
    }

    function O(a, b, c) {
        var d;
        try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
        } catch (a) {
            c.call(void 0, a)
        }
    }

    r.extend({
        Deferred: function (b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]], d = "pending", e = {
                state: function () {
                    return d
                }, always: function () {
                    return f.done(arguments).fail(arguments), this
                }, "catch": function (a) {
                    return e.then(null, a)
                }, pipe: function () {
                    var a = arguments;
                    return r.Deferred(function (b) {
                        r.each(c, function (c, d) {
                            var e = r.isFunction(a[d[4]]) && a[d[4]];
                            f[d[1]](function () {
                                var a = e && e.apply(this, arguments);
                                a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, then: function (b, d, e) {
                    var f = 0;

                    function g(b, c, d, e) {
                        return function () {
                            var h = this, i = arguments, j = function () {
                                var a, j;
                                if (!(b < f)) {
                                    if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                    j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                }
                            }, k = e ? j : function () {
                                try {
                                    j()
                                } catch (a) {
                                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i))
                                }
                            };
                            b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                        }
                    }

                    return r.Deferred(function (a) {
                        c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N))
                    }).promise()
                }, promise: function (a) {
                    return null != a ? r.extend(a, e) : e
                }
            }, f = {};
            return r.each(c, function (a, b) {
                var g = b[2], h = b[5];
                e[b[1]] = g.add, h && g.add(function () {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        }, when: function (a) {
            var b = arguments.length, c = b, d = Array(c), e = f.call(arguments), g = r.Deferred(), h = function (a) {
                return function (c) {
                    d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                }
            };
            if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) O(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, r.readyException = function (b) {
        a.setTimeout(function () {
            throw b
        })
    };
    var Q = r.Deferred();
    r.fn.ready = function (a) {
        return Q.then(a)["catch"](function (a) {
            r.readyException(a)
        }), this
    }, r.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? r.readyWait++ : r.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
        }
    }), r.ready.then = Q.then;

    function R() {
        d.removeEventListener("DOMContentLoaded", R),
            a.removeEventListener("load", R), r.ready()
    }

    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === r.type(c)) {
            e = !0;
            for (h in c) S(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(r(a), c)
        })), b)) for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, T = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function U() {
        this.expando = r.expando + U.uid++
    }

    U.uid = 1, U.prototype = {
        cache: function (a) {
            var b = a[this.expando];
            return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {value: b, configurable: !0}))), b
        }, set: function (a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c; else for (d in b) e[r.camelCase(d)] = b[d];
            return e
        }, get: function (a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        }, access: function (a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;
                    while (c--) delete d[b[c]]
                }
                (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        }, hasData: function (a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var V = new U, W = new U, X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Y = /[A-Z]/g;

    function Z(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a)
    }

    function $(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = Z(c)
            } catch (e) {
            }
            W.set(a, b, c)
        } else c = void 0;
        return c
    }

    r.extend({
        hasData: function (a) {
            return W.hasData(a) || V.hasData(a)
        }, data: function (a, b, c) {
            return W.access(a, b, c)
        }, removeData: function (a, b) {
            W.remove(a, b)
        }, _data: function (a, b, c) {
            return V.access(a, b, c)
        }, _removeData: function (a, b) {
            V.remove(a, b)
        }
    }), r.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                W.set(this, a)
            }) : S(this, function (b) {
                var c;
                if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c) return c;
                    if (c = $(f, a), void 0 !== c) return c
                } else this.each(function () {
                    W.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                W.remove(this, a)
            })
        }
    }), r.extend({
        queue: function (a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = r.queue(a, b), d = c.length, e = c.shift(), f = r._queueHooks(a, b), g = function () {
                r.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return V.get(a, c) || V.access(a, c, {
                empty: r.Callbacks("once memory").add(function () {
                    V.remove(a, [b + "queue", c])
                })
            })
        }
    }), r.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                r.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"), ba = ["Top", "Right", "Bottom", "Left"], ca = function (a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
    }, da = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };

    function ea(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function () {
            return d.cur()
        } : function () {
            return r.css(a, b, "")
        }, i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"), k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    var fa = {};

    function ga(a) {
        var b, c = a.ownerDocument, d = a.nodeName, e = fa[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e)
    }

    function ha(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }

    r.fn.extend({
        show: function () {
            return ha(this, !0)
        }, hide: function () {
            return ha(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                ca(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ia = /^(?:checkbox|radio)$/i, ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ka = /^$|\/(?:java|ecma)script/i, la = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;

    function ma(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c
    }

    function na(a, b) {
        for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"))
    }

    var oa = /<|&#?\w+;/;

    function pa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f); else if (oa.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++]) if (d && r.inArray(f, d) > -1) e && e.push(f); else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
            k = 0;
            while (f = g[k++]) ka.test(f.type || "") && c.push(f)
        }
        return l
    }

    !function () {
        var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var qa = d.documentElement, ra = /^key/, sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ta = /^([^.]*)(?:\.(.+)|)/;

    function ua() {
        return !0
    }

    function va() {
        return !1
    }

    function wa() {
        try {
            return d.activeElement
        } catch (a) {
        }
    }

    function xa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) xa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va; else if (!e) return a;
        return 1 === f && (g = e, e = function (a) {
            return r().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
            r.event.add(this, b, e, d, c)
        })
    }

    r.event = {
        global: {}, add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(K) || [""], j = b.length;
                while (j--) h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".")}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
            }
        }, remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;
                while (j--) if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events")
            }
        }, dispatch: function (a) {
            var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (V.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        }, handlers: function (a, b) {
            var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                f.length && h.push({elem: j, handlers: f})
            }
            return j = this, i < b.length && h.push({elem: j, handlers: b.slice(i)}), h
        }, addProp: function (a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[a]
                }, set: function (b) {
                    Object.defineProperty(this, a, {enumerable: !0, configurable: !0, writable: !0, value: b})
                }
            })
        }, fix: function (a) {
            return a[r.expando] ? a : new r.Event(a)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== wa() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === wa() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1
                }, _default: function (a) {
                    return r.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function (a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event, isDefaultPrevented: va, isPropagationStopped: va, isImmediatePropagationStopped: va, isSimulated: !1, preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault()
        }, stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation()
        }, stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
        altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (a) {
            var b = a.button;
            return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (a, b) {
        r.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function (a, b, c, d) {
            return xa(this, a, b, c, d)
        }, one: function (a, b, c, d) {
            return xa(this, a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function () {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, za = /<script|<style|<link/i, Aa = /checked\s*(?:[^=]|=\s*.checked.)/i, Ba = /^true\/(.*)/, Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Da(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function Ea(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Fa(a) {
        var b = Ba.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ga(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i))
        }
    }

    function Ha(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function Ia(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function (e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d)
        });
        if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
            if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k))
        }
        return a
    }

    function Ja(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    r.extend({
        htmlPrefilter: function (a) {
            return a.replace(ya, "<$1></$2>")
        }, clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
            if (b) if (c) for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]); else Ga(a, h);
            return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h
        }, cleanData: function (a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) if (T(c)) {
                if (b = c[V.expando]) {
                    if (b.events) for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                    c[V.expando] = void 0
                }
                c[W.expando] && (c[W.expando] = void 0)
            }
        }
    }), r.fn.extend({
        detach: function (a) {
            return Ja(this, a, !0)
        }, remove: function (a) {
            return Ja(this, a)
        }, text: function (a) {
            return S(this, function (a) {
                return void 0 === a ? r.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return Ia(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return Ia(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return Ia(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return Ia(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return r.clone(this, a, b)
            })
        }, html: function (a) {
            return S(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = [];
            return Ia(this, arguments, function (b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
        r.fn[a] = function (a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ka = /^margin/, La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"), Ma = function (b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    };
    !function () {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null
            }
        }

        var c, e, f, g, h = d.createElement("div"), i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function () {
                return b(), c
            }, boxSizingReliable: function () {
                return b(), e
            }, pixelMarginRight: function () {
                return b(), f
            }, reliableMarginLeft: function () {
                return b(), g
            }
        }))
    }();

    function Na(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Oa(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    var Pa = /^(none|table(?!-c[ea]).+)/, Qa = {position: "absolute", visibility: "hidden", display: "block"}, Ra = {letterSpacing: "0", fontWeight: "400"}, Sa = ["Webkit", "Moz", "ms"], Ta = d.createElement("div").style;

    function Ua(a) {
        if (a in Ta) return a;
        var b = a[0].toUpperCase() + a.slice(1), c = Sa.length;
        while (c--) if (a = Sa[c] + b, a in Ta) return a
    }

    function Va(a, b, c) {
        var d = aa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Wa(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
        return g
    }

    function Xa(a, b, c) {
        var d, e = !0, f = Ma(a), g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
            if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }

    r.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Na(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        }, cssNumber: {animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": "cssFloat"}, style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b), i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        }, css: function (a, b, c, d) {
            var e, f, g, h = r.camelCase(b);
            return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function (a, b) {
        r.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function () {
                    return Xa(a, b, d)
                })
            }, set: function (a, c, d) {
                var e, f = d && Ma(a), g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) {
        if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, {marginLeft: 0}, function () {
            return a.getBoundingClientRect().left
        })) + "px"
    }), r.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        r.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ka.test(a) || (r.cssHooks[a + b].set = Va)
    }), r.fn.extend({
        css: function (a, b) {
            return S(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (r.isArray(b)) {
                    for (d = Ma(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function Ya(a, b, c, d, e) {
        return new Ya.prototype.init(a, b, c, d, e)
    }

    r.Tween = Ya, Ya.prototype = {
        constructor: Ya, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Ya.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ya.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Ya.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this
        }
    }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            }, set: function (a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }, _default: "swing"
    }, r.fx = Ya.prototype.init, r.fx.step = {};
    var Za, $a, _a = /^(?:toggle|show|hide)$/, ab = /queueHooks$/;

    function bb() {
        $a && (a.requestAnimationFrame(bb), r.fx.tick())
    }

    function cb() {
        return a.setTimeout(function () {
            Za = void 0
        }), Za = r.now()
    }

    function db(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ba[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function eb(a, b, c) {
        for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d
    }

    function fb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, p = a.nodeType && ca(a), q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
            g.unqueued || h()
        }), g.unqueued++, m.always(function () {
            m.always(function () {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b) if (e = b[d], _a.test(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0
            }
            n[d] = q && q[d] || r.style(a, d)
        }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", {display: j}), f && (q.hidden = !p), p && ha([a], !0), m.done(function () {
                p || ha([a]), V.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d])
            })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function gb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function hb(a, b, c) {
        var d, e, f = 0, g = hb.prefilters.length, h = r.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return !1;
            for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a, props: r.extend({}, b), opts: r.extend(!0, {specialEasing: {}, easing: r.easing._default}, c), originalProperties: b, originalOptions: c, startTime: Za || cb(), duration: c.duration, tweens: [], createTween: function (b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            }, stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; c < d; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (gb(k, j.opts.specialEasing); f < g; f++) if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, {elem: a, anim: j, queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    r.Animation = r.extend(hb, {
        tweeners: {
            "*": [function (a, b) {
                var c = this.createTween(a, b);
                return ea(c.elem, a, aa.exec(b), c), c
            }]
        }, tweener: function (a, b) {
            r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b)
        }, prefilters: [fb], prefilter: function (a, b) {
            b ? hb.prefilters.unshift(a) : hb.prefilters.push(a)
        }
    }), r.speed = function (a, b, c) {
        var e = a && "object" == typeof a ? r.extend({}, a) : {complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b};
        return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
            r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue)
        }, e
    }, r.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(ca).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = r.isEmptyObject(a), f = r.speed(b, c, d), g = function () {
                var b = hb(this, r.extend({}, a), f);
                (e || V.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = r.timers, g = V.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || r.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = V.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0;
                for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), r.each(["toggle", "show", "hide"], function (a, b) {
        var c = r.fn[b];
        r.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e)
        }
    }), r.each({slideDown: db("show"), slideUp: db("hide"), slideToggle: db("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
        r.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), r.timers = [], r.fx.tick = function () {
        var a, b = 0, c = r.timers;
        for (Za = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || r.fx.stop(), Za = void 0
    }, r.fx.timer = function (a) {
        r.timers.push(a), a() ? r.fx.start() : r.timers.pop()
    }, r.fx.interval = 13, r.fx.start = function () {
        $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval))
    }, r.fx.stop = function () {
        a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null
    }, r.fx.speeds = {slow: 600, fast: 200, _default: 400}, r.fn.delay = function (b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
                a.clearTimeout(e)
            }
        })
    }, function () {
        var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option"));
        a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
    }();
    var ib, jb = r.expr.attrHandle;
    r.fn.extend({
        attr: function (a, b) {
            return S(this, r.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)),
                void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d))
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }, removeAttr: function (a, b) {
            var c, d = 0, e = b && b.match(K);
            if (e && 1 === a.nodeType) while (c = e[d++]) a.removeAttribute(c)
        }
    }), ib = {
        set: function (a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = jb[b] || r.find.attr;
        jb[b] = function (a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i, lb = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function (a, b) {
            return S(this, r.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), o.optSelected || (r.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }, set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        r.propFix[this.toLowerCase()] = this
    });

    function mb(a) {
        var b = a.match(K) || [];
        return b.join(" ")
    }

    function nb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    r.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function (b) {
                r(this).addClass(a.call(this, b, nb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++]) if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                    g = 0;
                    while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = mb(d), e !== h && c.setAttribute("class", h)
                }
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function (b) {
                r(this).removeClass(a.call(this, b, nb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++]) if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                    g = 0;
                    while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                    h = mb(d), e !== h && c.setAttribute("class", h)
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                r(this).toggleClass(a.call(this, c, nb(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(K) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""))
            })
        }, hasClass: function (a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var ob = /\r/g;
    r.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : mb(r.text(a))
                }
            }, select: {
                get: function (a) {
                    var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++) if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                        if (b = r(c).val(), g) return b;
                        h.push(b)
                    }
                    return h
                }, set: function (a, b) {
                    var c, d, e = a.options, f = r.makeArray(b), g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function () {
        r.valHooks[this] = {
            set: function (a, b) {
                if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
            }
        }, o.checkOn || (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function (b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d], p = l.call(b, "type") ? b.type : b, q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        }, simulate: function (a, b, c) {
            var d = r.extend(new r.Event, c, {type: a, isSimulated: !0});
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                r.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0)
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        r.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = V.access(d, b);
                e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b))
            }
        }
    });
    var qb = a.location, rb = r.now(), sb = /\?/;
    r.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var tb = /\[\]$/, ub = /\r?\n/g, vb = /^(?:submit|button|image|reset|file)$/i, wb = /^(?:input|select|textarea|keygen)/i;

    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b)) r.each(b, function (b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== r.type(b)) d(a, b); else for (e in b) xb(a + "[" + e + "]", b[e], c, d)
    }

    r.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            var c = r.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
        };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) xb(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function () {
            return r.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a))
            }).map(function (a, b) {
                var c = r(this).val();
                return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
                    return {name: b.name, value: a.replace(ub, "\r\n")}
                }) : {name: b.name, value: c.replace(ub, "\r\n")}
            }).get()
        }
    });
    var yb = /%20/g, zb = /#.*$/, Ab = /([?&])_=[^&]*/, Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Db = /^(?:GET|HEAD)$/, Eb = /^\/\//, Fb = {}, Gb = {}, Hb = "*/".concat("*"), Ib = d.createElement("a");
    Ib.href = qb.href;

    function Jb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Kb(a, b, c, d) {
        var e = {}, f = a === Gb;

        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Lb(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }

    function Mb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Nb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    r.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a)
        }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function (b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = {
                readyState: 0, getResponseHeader: function (a) {
                    var b;
                    if (k) {
                        if (!h) {
                            h = {};
                            while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2]
                        }
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null : b
                }, getAllResponseHeaders: function () {
                    return k ? g : null
                }, setRequestHeader: function (a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                }, overrideMimeType: function (a) {
                    return null == k && (o.mimeType = a), this
                }, statusCode: function (a) {
                    var b;
                    if (a) if (k) y.always(a[y.status]); else for (b in a) u[b] = [u[b], a[b]];
                    return this
                }, abort: function (a) {
                    var b = a || x;
                    return e && e.abort(b), A(0, b), this
                }
            };
            if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }

            return y
        }, getJSON: function (a, b, c) {
            return r.get(a, b, c, "json")
        }, getScript: function (a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function (a, b) {
        r[b] = function (a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({url: a, type: b, dataType: e, data: c, success: d}, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function (a) {
        return r.ajax({url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, r.fn.extend({
        wrapAll: function (a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this
        }, wrapInner: function (a) {
            return r.isFunction(a) ? this.each(function (b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = r(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = r.isFunction(a);
            return this.each(function (c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function (a) {
            return this.parent(a).not("body").each(function () {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function (a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    };
    var Ob = {0: 200, 1223: 204}, Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
        var c, d;
        if (o.cors || Pb && !b.crossDomain) return {
            send: function (e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function (a) {
                    return function () {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {binary: h.response} : {text: h.responseText}, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            }, abort: function () {
                c && c()
            }
        }
    }), r.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /\b(?:java|ecma)script\b/}, converters: {
            "text script": function (a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (e, f) {
                    b = r("<script>").prop({charset: a.scriptCharset, src: a.url}).on("load error", c = function (a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Qb = [], Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Qb.pop() || r.expando + "_" + rb++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), o.createHTMLDocument = function () {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    }, r.fn.load = function (a, b, c) {
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({url: a, type: e || "GET", dataType: "html", data: b}).done(function (a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        r.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function (a) {
        return r.grep(r.timers, function (b) {
            return a === b.elem
        }).length
    };

    function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    r.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, {top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft}) : d) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = {top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0)}), {top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0)}
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || qa
            })
        }
    }), r.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function (d) {
            return S(this, function (a, d, e) {
                var f = Sb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function (a, b) {
        r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) {
            if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c
        })
    }), r.each({Height: "height", Width: "width"}, function (a, b) {
        r.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            r.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e), h = c || (e === !0 || f === !0 ? "margin" : "border");
                return S(this, function (b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return r
    });
    var Tb = a.jQuery, Ub = a.$;
    return r.noConflict = function (b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r
    }, b || (a.jQuery = a.$ = r), r
});

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () {
    }, u = !!window.jQuery, v = a(window), w = function (a, c) {
        b.ev.on(o + a + p, c)
    }, x = function (b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    }, y = function (c, d) {
        b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    }, z = function (c) {
        return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
    }, A = function () {
        a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
    }, B = function () {
        var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition) return !0;
        for (; b.length;) if (b.pop() + "Transition" in a) return !0;
        return !1
    };
    t.prototype = {
        constructor: t, init: function () {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        }, open: function (c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                    b.index = e;
                    break
                }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY}) : b.wrap.css({top: v.scrollTop(), position: "absolute"}), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({height: d.height(), position: "absolute"}), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function () {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(), n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        }, close: function () {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
                b._close()
            }, b.st.removalDelay)) : b._close())
        }, _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {marginRight: ""};
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        }, updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        }, updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        }, appendContent: function (a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        }, parseEl: function (c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {el: a(e)} : (d = e.type, e = {data: e, src: e.src}), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) {
                    d = f[g];
                    break
                }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        }, addGroup: function (a, c) {
            var d = function (d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        }, _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g) if (a.isFunction(g)) {
                    if (!g.call(b)) return !0
                } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        }, updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {status: a, text: d};
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        }, _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        }, _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        }, _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        }, _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        }, _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        }, _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        }, _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null, proto: t.prototype, modules: [], open: function (b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        }, close: function () {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        }, registerModule: function (b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        }, defaults: {disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0}
    }, a.fn.magnificPopup = function (c) {
        A();
        var d = a(this);
        if ("string" == typeof c) if ("open" === c) {
            var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
            f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({mfpEl: e}, d, f)
        } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline", G = function () {
        E && (D.after(E.addClass(C)).detach(), E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"}, proto: {
            initInline: function () {
                b.types.push(F), w(h + "." + F, function () {
                    G()
                })
            }, getInline: function (c, d) {
                if (G(), c.src) {
                    var e = b.st.inline, f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax", J = function () {
        H && a(document.body).removeClass(H)
    }, K = function () {
        J(), b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.'}, proto: {
            initAjax: function () {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            }, getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src, success: function (d, e, f) {
                        var g = {data: d, xhr: f};
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    }, error: function () {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function (c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.'}, proto: {
            initImage: function () {
                var c = b.st.image, d = ".image";
                b.types.push("image"), w(m + d, function () {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            }, resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            }, _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            }, findImageSize: function (a) {
                var c = 0, d = a.img[0], e = function (f) {
                    L && clearInterval(L), L = setInterval(function () {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            }, getImage: function (c, d) {
                var e = 0, f = function () {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                }, g = function () {
                    c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                }, h = b.st.image, i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {title: M(c), img_replaceWith: c.img}, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function () {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }
        }, proto: {
            initZoom: function () {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function (a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = {position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden"}, f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                    }, k = function () {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                                f.css(b._getOffset(!0)), e = setTimeout(function () {
                                    k(), setTimeout(function () {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function () {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === b.currItem.type
            }, _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1
            }, _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f};
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe", Q = "//about:blank", R = function (a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: {youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"}, vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"}, gmaps: {index: "//maps.google.", src: "%id%&output=embed"}}}, proto: {
            initIframe: function () {
                b.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function () {
                    R()
                })
            }, getIframe: function (c, d) {
                var e = c.src, f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function (a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }, T = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%"}, proto: {
            initGallery: function () {
                var c = b.st.gallery, e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function (a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function (a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function (a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function () {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function () {
                            b.prev()
                        }), f.click(function () {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function () {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function () {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            }, next: function () {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            }, prev: function () {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            }, goTo: function (a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            }, preloadNearbyImages: function () {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            }, _preloadItem: function (c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        d.hasSize = !0
                    }).on("error.mfploader", function () {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina, c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
                        b.img.css({"max-width": b.img[0].naturalWidth / c, width: "100%"})
                    }), w("ElementParse." + U, function (b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        root.jquery_mmenu_all_js = factory(root.jQuery);
    }
}(this, function (jQuery) {
    /*
     * jQuery mmenu v7.0.3
     * @requires jQuery 1.7.0 or later
     *
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     * www.frebsite.nl
     *
     * License: CC-BY-NC-4.0
     * http://creativecommons.org/licenses/by-nc/4.0/
     */
    !function (e) {
        function t() {
            e[n].glbl || (l = {$wndw: e(window), $docu: e(document), $html: e("html"), $body: e("body")}, s = {}, a = {}, r = {}, e.each([s, a, r], function (e, t) {
                t.add = function (e) {
                    e = e.split(" ");
                    for (var n = 0, i = e.length; n < i; n++) t[e[n]] = t.mm(e[n])
                }
            }), s.mm = function (e) {
                return "mm-" + e
            }, s.add("wrapper menu panels panel nopanel navbar listview nolistview listitem btn hidden"), s.umm = function (e) {
                return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
            }, a.mm = function (e) {
                return "mm-" + e
            }, a.add("parent child title"), r.mm = function (e) {
                return e + ".mm"
            }, r.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"), e[n]._c = s, e[n]._d = a, e[n]._e = r, e[n].glbl = l)
        }

        var n = "mmenu", i = "7.0.3";
        if (!(e[n] && e[n].version > i)) {
            e[n] = function (e, t, n) {
                return this.$menu = e, this._api = ["bind", "getInstance", "initPanels", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.opts = t, this.conf = n, this.vars = {}, this.cbck = {}, this.mtch = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initHooks(), this._initWrappers(), this._initAddons(), this._initExtensions(), this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(), this._initMatchMedia(), "function" == typeof this.___debug && this.___debug(), this
            }, e[n].version = i, e[n].uniqueId = 0, e[n].wrappers = {}, e[n].addons = {}, e[n].defaults = {hooks: {}, extensions: [], wrappers: [], navbar: {add: !0, title: "Menu", titleLink: "parent"}, onClick: {setSelected: !0}, slidingSubmenus: !0}, e[n].configuration = {classNames: {divider: "Divider", inset: "Inset", nolistview: "NoListview", nopanel: "NoPanel", panel: "Panel", selected: "Selected", spacer: "Spacer", vertical: "Vertical"}, clone: !1, openingInterval: 25, panelNodetype: "ul, ol, div", transitionDuration: 400}, e[n].prototype = {
                getInstance: function () {
                    return this
                }, initPanels: function (e) {
                    this._initPanels(e)
                }, openPanel: function (t, i) {
                    if (this.trigger("openPanel:before", t), t && t.length && (t.is("." + s.panel) || (t = t.closest("." + s.panel)), t.is("." + s.panel))) {
                        var r = this;
                        if ("boolean" != typeof i && (i = !0), t.parent("." + s.listitem + "_vertical").length) t.parents("." + s.listitem + "_vertical").addClass(s.listitem + "_opened").children("." + s.panel).removeClass(s.hidden), this.openPanel(t.parents("." + s.panel).not(function () {
                            return e(this).parent("." + s.listitem + "_vertical").length
                        }).first()), this.trigger("openPanel:start", t), this.trigger("openPanel:finish", t); else {
                            if (t.hasClass(s.panel + "_opened")) return;
                            var l = this.$pnls.children("." + s.panel), o = this.$pnls.children("." + s.panel + "_opened");
                            if (!e[n].support.csstransitions) return o.addClass(s.hidden).removeClass(s.panel + "_opened"), t.removeClass(s.hidden).addClass(s.panel + "_opened"), this.trigger("openPanel:start", t), void this.trigger("openPanel:finish", t);
                            l.not(t).removeClass(s.panel + "_opened-parent");
                            for (var d = t.data(a.parent); d;) d = d.closest("." + s.panel), d.parent("." + s.listitem + "_vertical").length || d.addClass(s.panel + "_opened-parent"), d = d.data(a.parent);
                            l.removeClass(s.panel + "_highest").not(o).not(t).addClass(s.hidden), t.removeClass(s.hidden);
                            var c = function () {
                                o.removeClass(s.panel + "_opened"), t.addClass(s.panel + "_opened"), t.hasClass(s.panel + "_opened-parent") ? (o.addClass(s.panel + "_highest"), t.removeClass(s.panel + "_opened-parent")) : (o.addClass(s.panel + "_opened-parent"), t.addClass(s.panel + "_highest")), r.trigger("openPanel:start", t)
                            }, h = function () {
                                o.removeClass(s.panel + "_highest").addClass(s.hidden), t.removeClass(s.panel + "_highest"), r.trigger("openPanel:finish", t)
                            };
                            i && !t.hasClass(s.panel + "_noanimation") ? setTimeout(function () {
                                r.__transitionend(t, function () {
                                    h()
                                }, r.conf.transitionDuration), c()
                            }, r.conf.openingInterval) : (c(), h())
                        }
                        this.trigger("openPanel:after", t)
                    }
                }, closePanel: function (e) {
                    this.trigger("closePanel:before", e);
                    var t = e.parent();
                    t.hasClass(s.listitem + "_vertical") && (t.removeClass(s.listitem + "_opened"), e.addClass(s.hidden), this.trigger("closePanel", e)), this.trigger("closePanel:after", e)
                }, closeAllPanels: function (e) {
                    this.trigger("closeAllPanels:before"), this.$pnls.find("." + s.listview).children().removeClass(s.listitem + "_selected").filter("." + s.listitem + "_vertical").removeClass(s.listitem + "_opened");
                    var t = this.$pnls.children("." + s.panel), n = e && e.length ? e : t.first();
                    this.$pnls.children("." + s.panel).not(n).removeClass(s.panel + "_opened").removeClass(s.panel + "_opened-parent").removeClass(s.panel + "_highest").addClass(s.hidden), this.openPanel(n, !1), this.trigger("closeAllPanels:after")
                }, togglePanel: function (e) {
                    var t = e.parent();
                    t.hasClass(s.listitem + "_vertical") && this[t.hasClass(s.listitem + "_opened") ? "closePanel" : "openPanel"](e)
                }, setSelected: function (e) {
                    this.trigger("setSelected:before", e), this.$menu.find("." + s.listitem + "_selected").removeClass(s.listitem + "_selected"), e.addClass(s.listitem + "_selected"), this.trigger("setSelected:after", e)
                }, bind: function (e, t) {
                    this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(t)
                }, trigger: function () {
                    var e = this, t = Array.prototype.slice.call(arguments), n = t.shift();
                    if (this.cbck[n]) for (var i = 0, s = this.cbck[n].length; i < s; i++) this.cbck[n][i].apply(e, t)
                }, matchMedia: function (e, t, n) {
                    var i = {yes: t, no: n};
                    this.mtch[e] = this.mtch[e] || [], this.mtch[e].push(i)
                }, _initHooks: function () {
                    for (var e in this.opts.hooks) this.bind(e, this.opts.hooks[e])
                }, _initWrappers: function () {
                    this.trigger("initWrappers:before");
                    for (var t = 0; t < this.opts.wrappers.length; t++) {
                        var i = e[n].wrappers[this.opts.wrappers[t]];
                        "function" == typeof i && i.call(this)
                    }
                    this.trigger("initWrappers:after")
                }, _initAddons: function () {
                    this.trigger("initAddons:before");
                    var t;
                    for (t in e[n].addons) e[n].addons[t].add.call(this), e[n].addons[t].add = function () {
                    };
                    for (t in e[n].addons) e[n].addons[t].setup.call(this);
                    this.trigger("initAddons:after")
                }, _initExtensions: function () {
                    this.trigger("initExtensions:before");
                    var e = this;
                    this.opts.extensions.constructor === Array && (this.opts.extensions = {all: this.opts.extensions});
                    for (var t in this.opts.extensions) this.opts.extensions[t] = this.opts.extensions[t].length ? s.menu + "_" + this.opts.extensions[t].join(" " + s.menu + "_") : "", this.opts.extensions[t] && !function (t) {
                        e.matchMedia(t, function () {
                            this.$menu.addClass(this.opts.extensions[t])
                        }, function () {
                            this.$menu.removeClass(this.opts.extensions[t])
                        })
                    }(t);
                    this.trigger("initExtensions:after")
                }, _initMenu: function () {
                    this.trigger("initMenu:before");
                    this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function () {
                        e(this).attr("id", s.mm(e(this).attr("id")))
                    })), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = e('<div class="' + s.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.addClass(s.menu).parent().addClass(s.wrapper), this.trigger("initMenu:after")
                }, _initPanels: function (t) {
                    this.trigger("initPanels:before", t), t = t || this.$pnls.children(this.conf.panelNodetype);
                    var n = e(), i = this, a = function (t) {
                        t.filter(i.conf.panelNodetype).each(function (t) {
                            var r = i._initPanel(e(this));
                            if (r) {
                                i._initNavbar(r), i._initListview(r), n = n.add(r);
                                var l = r.children("." + s.listview).children("li").children(i.conf.panelNodeType).add(r.children("." + i.conf.classNames.panel));
                                l.length && a(l)
                            }
                        })
                    };
                    a(t), this.trigger("initPanels:after", n)
                }, _initPanel: function (e) {
                    this.trigger("initPanel:before", e);
                    if (e.hasClass(s.panel)) return e;
                    if (this.__refactorClass(e, this.conf.classNames.panel, s.panel), this.__refactorClass(e, this.conf.classNames.nopanel, s.nopanel), this.__refactorClass(e, this.conf.classNames.inset, s.listview + "_inset"), e.filter("." + s.listview + "_inset").addClass(s.nopanel), e.hasClass(s.nopanel)) return !1;
                    var t = e.hasClass(this.conf.classNames.vertical) || !this.opts.slidingSubmenus;
                    e.removeClass(this.conf.classNames.vertical);
                    var n = e.attr("id") || this.__getUniqueId();
                    e.is("ul, ol") && (e.removeAttr("id"), e.wrap("<div />"), e = e.parent()), e.attr("id", n), e.addClass(s.panel + " " + s.hidden);
                    var i = e.parent("li");
                    return t ? i.addClass(s.listitem + "_vertical") : e.appendTo(this.$pnls), i.length && (i.data(a.child, e), e.data(a.parent, i)), this.trigger("initPanel:after", e), e
                }, _initNavbar: function (t) {
                    if (this.trigger("initNavbar:before", t), !t.children("." + s.navbar).length) {
                        var n = t.data(a.parent), i = e('<div class="' + s.navbar + '" />'), r = this.__getPanelTitle(t, this.opts.navbar.title), l = "";
                        if (n && n.length) {
                            if (n.hasClass(s.listitem + "_vertical")) return;
                            if (n.parent().is("." + s.listview)) var o = n.children("a, span").not("." + s.btn + "_next"); else var o = n.closest("." + s.panel).find('a[href="#' + t.attr("id") + '"]');
                            o = o.first(), n = o.closest("." + s.panel);
                            var d = n.attr("id");
                            switch (r = this.__getPanelTitle(t, e("<span>" + o.text() + "</span>").text()), this.opts.navbar.titleLink) {
                                case"anchor":
                                    l = o.attr("href");
                                    break;
                                case"parent":
                                    l = "#" + d
                            }
                            i.append('<a class="' + s.btn + " " + s.btn + "_prev " + s.navbar + '__btn" href="#' + d + '" />')
                        } else if (!this.opts.navbar.title) return;
                        this.opts.navbar.add && t.addClass(s.panel + "_has-navbar"), i.append('<a class="' + s.navbar + '__title"' + (l.length ? ' href="' + l + '"' : "") + ">" + r + "</a>").prependTo(t), this.trigger("initNavbar:after", t)
                    }
                }, _initListview: function (t) {
                    this.trigger("initListview:before", t);
                    var n = this.__childAddBack(t, "ul, ol");
                    this.__refactorClass(n, this.conf.classNames.nolistview, s.nolistview);
                    var i = n.not("." + s.nolistview).addClass(s.listview).children().addClass(s.listitem);
                    this.__refactorClass(i, this.conf.classNames.selected, s.listitem + "_selected"), this.__refactorClass(i, this.conf.classNames.divider, s.listitem + "_divider"), this.__refactorClass(i, this.conf.classNames.spacer, s.listitem + "_spacer");
                    var r = t.data(a.parent);
                    if (r && r.is("." + s.listitem) && !r.children("." + s.btn + "_next").length) {
                        var l = r.children("a, span").first(), o = e('<a class="' + s.btn + '_next" href="#' + t.attr("id") + '" />').insertBefore(l);
                        l.is("span") && o.addClass(s.btn + "_fullwidth")
                    }
                    this.trigger("initListview:after", t)
                }, _initOpened: function () {
                    this.trigger("initOpened:before");
                    var e = this.$pnls.find("." + s.listitem + "_selected").removeClass(s.listitem + "_selected").last().addClass(s.listitem + "_selected"), t = e.length ? e.closest("." + s.panel) : this.$pnls.children("." + s.panel).first();
                    this.openPanel(t, !1), this.trigger("initOpened:after")
                }, _initAnchors: function () {
                    this.trigger("initAnchors:before");
                    var t = this;
                    l.$body.on(r.click + "-oncanvas", "a[href]", function (i) {
                        var a = e(this), r = a.attr("href"), l = t.$menu.find(a).length, o = a.is("." + s.listitem + " > a"), d = a.is('[rel="external"]') || a.is('[target="_blank"]');
                        if (l && r.length > 1 && "#" == r.slice(0, 1)) try {
                            var c = t.$menu.find(r);
                            if (c.is("." + s.panel)) return t[a.parent().hasClass(s.listitem + "_vertical") ? "togglePanel" : "openPanel"](c), void i.preventDefault()
                        } catch (h) {
                        }
                        var f = {close: null, setSelected: null, preventDefault: "#" == r.slice(0, 1)};
                        for (var p in e[n].addons) {
                            var u = e[n].addons[p].clickAnchor.call(t, a, l, o, d);
                            if (u) {
                                if ("boolean" == typeof u) return void i.preventDefault();
                                "object" == typeof u && (f = e.extend({}, f, u))
                            }
                        }
                        l && o && !d && (t.__valueOrFn(a, t.opts.onClick.setSelected, f.setSelected) && t.setSelected(e(i.target).parent()), t.__valueOrFn(a, t.opts.onClick.preventDefault, f.preventDefault) && i.preventDefault(), t.__valueOrFn(a, t.opts.onClick.close, f.close) && t.opts.offCanvas && "function" == typeof t.close && t.close())
                    }), this.trigger("initAnchors:after")
                }, _initMatchMedia: function () {
                    var e = this;
                    for (var t in this.mtch) !function () {
                        var n = t, i = window.matchMedia(n);
                        e._fireMatchMedia(n, i), i.addListener(function (t) {
                            e._fireMatchMedia(n, t)
                        })
                    }()
                }, _fireMatchMedia: function (e, t) {
                    for (var n = t.matches ? "yes" : "no", i = 0; i < this.mtch[e].length; i++) this.mtch[e][i][n].call(this)
                }, _getOriginalMenuId: function () {
                    var e = this.$menu.attr("id");
                    return this.conf.clone && e && e.length && (e = s.umm(e)), e
                }, __api: function () {
                    var t = this, n = {};
                    return e.each(this._api, function (e) {
                        var i = this;
                        n[i] = function () {
                            var e = t[i].apply(t, arguments);
                            return "undefined" == typeof e ? n : e
                        }
                    }), n
                }, __valueOrFn: function (e, t, n) {
                    if ("function" == typeof t) {
                        var i = t.call(e[0]);
                        if ("undefined" != typeof i) return i
                    }
                    return "function" != typeof t && "undefined" != typeof t || "undefined" == typeof n ? t : n
                }, __getPanelTitle: function (t, i) {
                    var s;
                    return "function" == typeof this.opts.navbar.title && (s = this.opts.navbar.title.call(t[0])), "undefined" == typeof s && (s = t.data(a.title)), "undefined" != typeof s ? s : "string" == typeof i ? e[n].i18n(i) : e[n].i18n(e[n].defaults.navbar.title)
                }, __refactorClass: function (e, t, n) {
                    return e.filter("." + t).removeClass(t).addClass(n)
                }, __findAddBack: function (e, t) {
                    return e.find(t).add(e.filter(t))
                }, __childAddBack: function (e, t) {
                    return e.children(t).add(e.filter(t))
                }, __filterListItems: function (e) {
                    return e.not("." + s.listitem + "_divider").not("." + s.hidden)
                }, __filterListItemAnchors: function (e) {
                    return this.__filterListItems(e).children("a").not("." + s.btn + "_next")
                }, __openPanelWoAnimation: function (e) {
                    e.hasClass(s.panel + "_noanimation") || (e.addClass(s.panel + "_noanimation"), this.__transitionend(e, function () {
                        e.removeClass(s.panel + "_noanimation")
                    }, this.conf.openingInterval), this.openPanel(e))
                }, __transitionend: function (e, t, n) {
                    var i = !1, s = function (n) {
                        "undefined" != typeof n && n.target != e[0] || (i || (e.off(r.transitionend), e.off(r.webkitTransitionEnd), t.call(e[0])), i = !0)
                    };
                    e.on(r.transitionend, s), e.on(r.webkitTransitionEnd, s), setTimeout(s, 1.1 * n)
                }, __getUniqueId: function () {
                    return s.mm(e[n].uniqueId++)
                }
            }, e.fn[n] = function (i, s) {
                t(), i = e.extend(!0, {}, e[n].defaults, i), s = e.extend(!0, {}, e[n].configuration, s);
                var a = e();
                return this.each(function () {
                    var t = e(this);
                    if (!t.data(n)) {
                        var r = new e[n](t, i, s);
                        r.$menu.data(n, r.__api()), a = a.add(r.$menu)
                    }
                }), a
            }, e[n].i18n = function () {
                var t = {};
                return function (n) {
                    switch (typeof n) {
                        case"object":
                            return e.extend(t, n), t;
                        case"string":
                            return t[n] || n;
                        case"undefined":
                        default:
                            return t
                    }
                }
            }(), e[n].support = {
                touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1, csstransitions: function () {
                    return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransitions || Modernizr.csstransitions
                }(), csstransforms: function () {
                    return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms || Modernizr.csstransforms
                }(), csstransforms3d: function () {
                    return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms3d || Modernizr.csstransforms3d
                }()
            };
            var s, a, r, l
        }
    }(jQuery);
    /*
     * jQuery mmenu offCanvas add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (e) {
        var t = "mmenu", n = "offCanvas";
        e[t].addons[n] = {
            setup: function () {
                if (this.opts[n]) {
                    var i = this.opts[n], s = this.conf[n];
                    r = e[t].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), "object" != typeof i && (i = {}), i = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], i), "string" != typeof s.pageSelector && (s.pageSelector = "> " + s.pageNodetype), this.vars.opened = !1;
                    var a = [o.menu + "_offcanvas"];
                    e[t].support.csstransforms || a.push(o["no-csstransforms"]), e[t].support.csstransforms3d || a.push(o["no-csstransforms3d"]), this.bind("initMenu:after", function () {
                        var e = this;
                        this.setPage(r.$page), this._initBlocker(), this["_initWindow_" + n](), this.$menu.addClass(a.join(" ")).parent("." + o.wrapper).removeClass(o.wrapper), this.$menu[s.menuInsertMethod](s.menuInsertSelector);
                        var t = window.location.hash;
                        if (t) {
                            var i = this._getOriginalMenuId();
                            i && i == t.slice(1) && setTimeout(function () {
                                e.open()
                            }, 1e3)
                        }
                    }), this.bind("open:start:sr-aria", function () {
                        this.__sr_aria(this.$menu, "hidden", !1)
                    }), this.bind("close:finish:sr-aria", function () {
                        this.__sr_aria(this.$menu, "hidden", !0)
                    }), this.bind("initMenu:after:sr-aria", function () {
                        this.__sr_aria(this.$menu, "hidden", !0)
                    })
                }
            }, add: function () {
                o = e[t]._c, i = e[t]._d, s = e[t]._e, o.add("slideout page no-csstransforms3d"), i.add("style")
            }, clickAnchor: function (e, t) {
                var i = this;
                if (this.opts[n]) {
                    var s = this._getOriginalMenuId();
                    if (s && e.is('[href="#' + s + '"]')) {
                        if (t) return this.open(), !0;
                        var a = e.closest("." + o.menu);
                        if (a.length) {
                            var p = a.data("mmenu");
                            if (p && p.close) return p.close(), i.__transitionend(a, function () {
                                i.open()
                            }, i.conf.transitionDuration), !0
                        }
                        return this.open(), !0
                    }
                    if (r.$page) return s = r.$page.first().attr("id"), s && e.is('[href="#' + s + '"]') ? (this.close(), !0) : void 0
                }
            }
        }, e[t].defaults[n] = {blockUI: !0, moveBackground: !0}, e[t].configuration[n] = {pageNodetype: "div", pageSelector: null, noPageSelector: [], wrapPageIfNeeded: !0, menuInsertMethod: "prependTo", menuInsertSelector: "body"}, e[t].prototype.open = function () {
            if (this.trigger("open:before"), !this.vars.opened) {
                var e = this;
                this._openSetup(), setTimeout(function () {
                    e._openFinish()
                }, this.conf.openingInterval), this.trigger("open:after")
            }
        }, e[t].prototype._openSetup = function () {
            var t = this, a = this.opts[n];
            this.closeAllOthers(), r.$page.each(function () {
                e(this).data(i.style, e(this).attr("style") || "")
            }), r.$wndw.trigger(s.resize + "-" + n, [!0]);
            var p = [o.wrapper + "_opened"];
            a.blockUI && p.push(o.wrapper + "_blocking"), "modal" == a.blockUI && p.push(o.wrapper + "_modal"), a.moveBackground && p.push(o.wrapper + "_background"), r.$html.addClass(p.join(" ")), setTimeout(function () {
                t.vars.opened = !0
            }, this.conf.openingInterval), this.$menu.addClass(o.menu + "_opened")
        }, e[t].prototype._openFinish = function () {
            var e = this;
            this.__transitionend(r.$page.first(), function () {
                e.trigger("open:finish")
            }, this.conf.transitionDuration), this.trigger("open:start"), r.$html.addClass(o.wrapper + "_opening")
        }, e[t].prototype.close = function () {
            if (this.trigger("close:before"), this.vars.opened) {
                var t = this;
                this.__transitionend(r.$page.first(), function () {
                    t.$menu.removeClass(o.menu + "_opened");
                    var n = [o.wrapper + "_opened", o.wrapper + "_blocking", o.wrapper + "_modal", o.wrapper + "_background"];
                    r.$html.removeClass(n.join(" ")), r.$page.each(function () {
                        e(this).attr("style", e(this).data(i.style))
                    }), t.vars.opened = !1, t.trigger("close:finish")
                }, this.conf.transitionDuration), this.trigger("close:start"), r.$html.removeClass(o.wrapper + "_opening"), this.trigger("close:after")
            }
        }, e[t].prototype.closeAllOthers = function () {
            r.$body.find("." + o.menu + "_offcanvas").not(this.$menu).each(function () {
                var n = e(this).data(t);
                n && n.close && n.close()
            })
        }, e[t].prototype.setPage = function (t) {
            this.trigger("setPage:before", t);
            var i = this, s = this.conf[n];
            t && t.length || (t = r.$body.find(s.pageSelector), s.noPageSelector.length && (t = t.not(s.noPageSelector.join(", "))), t.length > 1 && s.wrapPageIfNeeded && (t = t.wrapAll("<" + this.conf[n].pageNodetype + " />").parent())), t.each(function () {
                e(this).attr("id", e(this).attr("id") || i.__getUniqueId())
            }), t.addClass(o.page + " " + o.slideout), r.$page = t, this.trigger("setPage:after", t)
        }, e[t].prototype["_initWindow_" + n] = function () {
            r.$wndw.off(s.keydown + "-" + n).on(s.keydown + "-" + n, function (e) {
                if (r.$html.hasClass(o.wrapper + "_opened") && 9 == e.keyCode) return e.preventDefault(), !1
            });
            var e = 0;
            r.$wndw.off(s.resize + "-" + n).on(s.resize + "-" + n, function (t, n) {
                if (1 == r.$page.length && (n || r.$html.hasClass(o.wrapper + "_opened"))) {
                    var i = r.$wndw.height();
                    (n || i != e) && (e = i, r.$page.css("minHeight", i))
                }
            })
        }, e[t].prototype._initBlocker = function () {
            var t = this;
            this.opts[n].blockUI && (r.$blck || (r.$blck = e('<div class="' + o.page + "__blocker " + o.slideout + '" />')), r.$blck.appendTo(r.$body).off(s.touchstart + "-" + n + " " + s.touchmove + "-" + n).on(s.touchstart + "-" + n + " " + s.touchmove + "-" + n, function (e) {
                e.preventDefault(), e.stopPropagation(), r.$blck.trigger(s.mousedown + "-" + n)
            }).off(s.mousedown + "-" + n).on(s.mousedown + "-" + n, function (e) {
                e.preventDefault(), r.$html.hasClass(o.wrapper + "_modal") || (t.closeAllOthers(), t.close())
            }))
        };
        var o, i, s, r
    }(jQuery);
    /*
     * jQuery mmenu screenReader add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (t) {
        var i = "mmenu", n = "screenReader";
        t[i].addons[n] = {
            setup: function () {
                var a = this, o = this.opts[n], h = this.conf[n];
                s = t[i].glbl, "boolean" == typeof o && (o = {aria: o, text: o}), "object" != typeof o && (o = {}), o = this.opts[n] = t.extend(!0, {}, t[i].defaults[n], o), o.aria && (this.bind("initAddons:after", function () {
                    this.bind("initMenu:after", function () {
                        this.trigger("initMenu:after:sr-aria")
                    }), this.bind("initNavbar:after", function () {
                        this.trigger("initNavbar:after:sr-aria", arguments[0])
                    }), this.bind("openPanel:start", function () {
                        this.trigger("openPanel:start:sr-aria", arguments[0])
                    }), this.bind("close:start", function () {
                        this.trigger("close:start:sr-aria")
                    }), this.bind("close:finish", function () {
                        this.trigger("close:finish:sr-aria")
                    }), this.bind("open:start", function () {
                        this.trigger("open:start:sr-aria")
                    }), this.bind("initOpened:after", function () {
                        this.trigger("initOpened:after:sr-aria")
                    })
                }), this.bind("updateListview", function () {
                    this.$pnls.find("." + e.listview).children().each(function () {
                        a.__sr_aria(t(this), "hidden", t(this).is("." + e.hidden))
                    })
                }), this.bind("openPanel:start", function (t) {
                    var i = this.$menu.find("." + e.panel).not(t).not(t.parents("." + e.panel)), n = t.add(t.find("." + e.listitem + "_vertical ." + e.listitem + "_opened").children("." + e.panel));
                    this.__sr_aria(i, "hidden", !0), this.__sr_aria(n, "hidden", !1)
                }), this.bind("closePanel", function (t) {
                    this.__sr_aria(t, "hidden", !0)
                }), this.bind("initPanels:after", function (i) {
                    var n = i.find("." + e.btn).each(function () {
                        a.__sr_aria(t(this), "owns", t(this).attr("href").replace("#", ""))
                    });
                    this.__sr_aria(n, "haspopup", !0)
                }), this.bind("initNavbar:after", function (t) {
                    var i = t.children("." + e.navbar);
                    this.__sr_aria(i, "hidden", !t.hasClass(e.panel + "_has-navbar"))
                }), o.text && (this.bind("initlistview:after", function (t) {
                    var i = t.find("." + e.listview).find("." + e.btn + "_fullwidth").parent().children("span");
                    this.__sr_aria(i, "hidden", !0)
                }), "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", function (t) {
                    var i = t.children("." + e.navbar), n = !!i.children("." + e.btn + "_prev").length;
                    this.__sr_aria(i.children("." + e.title), "hidden", n)
                }))), o.text && (this.bind("initAddons:after", function () {
                    this.bind("setPage:after", function () {
                        this.trigger("setPage:after:sr-text", arguments[0])
                    })
                }), this.bind("initNavbar:after", function (n) {
                    var r = n.children("." + e.navbar), a = r.children("." + e.title).text(), s = t[i].i18n(h.text.closeSubmenu);
                    a && (s += " (" + a + ")"), r.children("." + e.btn + "_prev").html(this.__sr_text(s))
                }), this.bind("initListview:after", function (n) {
                    var s = n.data(r.parent);
                    if (s && s.length) {
                        var o = s.children("." + e.btn + "_next"), d = o.nextAll("span, a").first().text(), l = t[i].i18n(h.text[o.parent().is("." + e.listitem + "_vertical") ? "toggleSubmenu" : "openSubmenu"]);
                        d && (l += " (" + d + ")"), o.html(a.__sr_text(l))
                    }
                }))
            }, add: function () {
                e = t[i]._c, r = t[i]._d, a = t[i]._e, e.add("sronly")
            }, clickAnchor: function (t, i) {
            }
        }, t[i].defaults[n] = {aria: !0, text: !0}, t[i].configuration[n] = {text: {closeMenu: "Close menu", closeSubmenu: "Close submenu", openSubmenu: "Open submenu", toggleSubmenu: "Toggle submenu"}}, t[i].prototype.__sr_aria = function (t, i, n) {
            t.prop("aria-" + i, n)[n ? "attr" : "removeAttr"]("aria-" + i, n)
        }, t[i].prototype.__sr_role = function (t, i) {
            t.prop("role", i)[i ? "attr" : "removeAttr"]("role", i)
        }, t[i].prototype.__sr_text = function (t) {
            return '<span class="' + e.sronly + '">' + t + "</span>"
        };
        var e, r, a, s
    }(jQuery);
    /*
     * jQuery mmenu scrollBugFix add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (o) {
        var t = "mmenu", n = "scrollBugFix";
        o[t].addons[n] = {
            setup: function () {
                var r = this.opts[n];
                this.conf[n];
                i = o[t].glbl, o[t].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof r && (r = {fix: r}), "object" != typeof r && (r = {}), r = this.opts[n] = o.extend(!0, {}, o[t].defaults[n], r), r.fix && (this.bind("open:start", function () {
                    this.$pnls.children("." + e.panel + "_opened").scrollTop(0)
                }), this.bind("initMenu:after", function () {
                    this["_initWindow_" + n]()
                })))
            }, add: function () {
                e = o[t]._c, r = o[t]._d, s = o[t]._e
            }, clickAnchor: function (o, t) {
            }
        }, o[t].defaults[n] = {fix: !0}, o[t].prototype["_initWindow_" + n] = function () {
            var t = this;
            i.$docu.off(s.touchmove + "-" + n).on(s.touchmove + "-" + n, function (o) {
                i.$html.hasClass(e.wrapper + "_opened") && o.preventDefault()
            });
            var r = !1;
            i.$body.off(s.touchstart + "-" + n).on(s.touchstart + "-" + n, "." + e.panels + "> ." + e.panel, function (o) {
                i.$html.hasClass(e.wrapper + "_opened") && (r || (r = !0, 0 === o.currentTarget.scrollTop ? o.currentTarget.scrollTop = 1 : o.currentTarget.scrollHeight === o.currentTarget.scrollTop + o.currentTarget.offsetHeight && (o.currentTarget.scrollTop -= 1), r = !1))
            }).off(s.touchmove + "-" + n).on(s.touchmove + "-" + n, "." + e.panels + "> ." + e.panel, function (t) {
                i.$html.hasClass(e.wrapper + "_opened") && o(this)[0].scrollHeight > o(this).innerHeight() && t.stopPropagation()
            }), i.$wndw.off(s.orientationchange + "-" + n).on(s.orientationchange + "-" + n, function () {
                t.$pnls.children("." + e.panel + "_opened").scrollTop(0).css({"-webkit-overflow-scrolling": "auto"}).css({"-webkit-overflow-scrolling": "touch"})
            })
        };
        var e, r, s, i
    }(jQuery);
    /*
     * jQuery mmenu autoHeight add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (t) {
        var e = "mmenu", i = "autoHeight";
        t[e].addons[i] = {
            setup: function () {
                var h = this.opts[i];
                this.conf[i];
                if (a = t[e].glbl, "boolean" == typeof h && h && (h = {height: "auto"}), "string" == typeof h && (h = {height: h}), "object" != typeof h && (h = {}), h = this.opts[i] = t.extend(!0, {}, t[e].defaults[i], h), "auto" == h.height || "highest" == h.height) {
                    this.bind("initMenu:after", function () {
                        this.$menu.addClass(n.menu + "_autoheight")
                    });
                    var s = function (e) {
                        if (!this.opts.offCanvas || this.vars.opened) {
                            var i = Math.max(parseInt(this.$pnls.css("top"), 10), 0) || 0, s = Math.max(parseInt(this.$pnls.css("bottom"), 10), 0) || 0, a = 0;
                            this.$menu.addClass(n.menu + "_autoheight-measuring"), "auto" == h.height ? (e = e || this.$pnls.children("." + n.panel + "_opened"), e.parent("." + n.listitem + "_vertical").length && (e = e.parents("." + n.panel).not(function () {
                                return t(this).parent("." + n.listitem + "_vertical").length
                            })), e.length || (e = this.$pnls.children("." + n.panel)), a = e.first().outerHeight()) : "highest" == h.height && this.$pnls.children("." + n.panel).each(function () {
                                var e = t(this);
                                e.parent("." + n.listitem + "_vertical").length && (e = e.parents("." + n.panel).not(function () {
                                    return t(this).parent("." + n.listitem + "_vertical").length
                                })), a = Math.max(a, e.first().outerHeight())
                            }), this.$menu.height(a + i + s).removeClass(n.menu + "_autoheight-measuring")
                        }
                    };
                    this.opts.offCanvas && this.bind("open:start", s), "highest" == h.height && this.bind("initPanels:after", s), "auto" == h.height && (this.bind("updateListview", s), this.bind("openPanel:start", s), this.bind("closePanel", s))
                }
            }, add: function () {
                n = t[e]._c, h = t[e]._d, s = t[e]._e, s.add("resize")
            }, clickAnchor: function (t, e) {
            }
        }, t[e].defaults[i] = {height: "default"};
        var n, h, s, a
    }(jQuery);
    /*
     * jQuery mmenu backButton add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (n) {
        var t = "mmenu", o = "backButton";
        n[t].addons[o] = {
            setup: function () {
                function e() {
                    l = [c], this.$pnls.children("." + i.panel + "_opened-parent").add(s.$pnls.children("." + i.panel + "_opened")).each(function () {
                        l.push("#" + n(this).attr("id"))
                    })
                }

                if (this.opts.offCanvas) {
                    var s = this, h = this.opts[o];
                    this.conf[o];
                    a = n[t].glbl, "boolean" == typeof h && (h = {close: h}), "object" != typeof h && (h = {}), h = n.extend(!0, {}, n[t].defaults[o], h);
                    var c = "#" + this.$menu.attr("id");
                    if (h.close) {
                        var l = [];
                        this.bind("open:finish", function () {
                            history.pushState(null, document.title, c)
                        }), this.bind("open:finish", e), this.bind("openPanel:finish", e), this.bind("close:finish", function () {
                            l = [], history.back(), history.pushState(null, document.title, location.pathname + location.search)
                        }), n(window).on("popstate", function (t) {
                            if (s.vars.opened && l.length) {
                                l = l.slice(0, -1);
                                var o = l[l.length - 1];
                                o == c ? s.close() : (s.openPanel(n(o)), history.pushState(null, document.title, c))
                            }
                        })
                    }
                    h.open && n(window).on("popstate", function (n) {
                        s.vars.opened || location.hash != c || s.open()
                    })
                }
            }, add: function () {
                return window.history && window.history.pushState ? (i = n[t]._c, e = n[t]._d, void (s = n[t]._e)) : void (n[t].addons[o].setup = function () {
                })
            }, clickAnchor: function (n, t) {
            }
        }, n[t].defaults[o] = {close: !1, open: !1};
        var i, e, s, a
    }(jQuery);
    /*
     * jQuery mmenu columns add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (e) {
        var n = "mmenu", i = "columns";
        e[n].addons[i] = {
            setup: function () {
                function l(e) {
                    var n = e.data(s.parent);
                    if (n && (n = n.closest("." + a.panel), n.length)) {
                        var i = n.attr("class");
                        if (i && (i = i.split(a.panel + "_columns-")[1])) for (i = parseInt(i.split(" ")[0], 10) + 1; i > 0;) {
                            var l = this.$pnls.children("." + a.panel + "_columns-" + i);
                            if (!l.length) {
                                i = -1;
                                break
                            }
                            i++, l.removeClass(r).addClass(a.hidden)
                        }
                    }
                }

                var o = this.opts[i];
                this.conf[i];
                if (t = e[n].glbl, "boolean" == typeof o && (o = {add: o}), "number" == typeof o && (o = {add: !0, visible: o}), "object" != typeof o && (o = {}), "number" == typeof o.visible && (o.visible = {min: o.visible, max: o.visible}), o = this.opts[i] = e.extend(!0, {}, e[n].defaults[i], o), o.add) {
                    o.visible.min = Math.max(1, Math.min(6, o.visible.min)), o.visible.max = Math.max(o.visible.min, Math.min(6, o.visible.max));
                    for (var d = "", p = "", m = 0; m <= o.visible.max; m++) d += " " + a.menu + "_columns-" + m, p += " " + a.panel + "_columns-" + m;
                    d.length && (d = d.slice(1), p = p.slice(1));
                    var r = p + " " + a.panel + "_opened " + a.panel + "_opened-parent " + a.panel + "_highest", c = function (n) {
                        var i = this.$pnls.children("." + a.panel + "_opened-parent").length;
                        n.hasClass(a.panel + "_opened-parent") || i++, i = Math.min(o.visible.max, Math.max(o.visible.min, i)), this.$menu.removeClass(d).addClass(a.menu + "_columns-" + i), this.$pnls.children("." + a.panel).removeClass(p).filter("." + a.panel + "_opened-parent").add(n).slice(-o.visible.max).each(function (n) {
                            e(this).addClass(a.panel + "_columns-" + n)
                        })
                    };
                    this.bind("openPanel:before", l), this.bind("openPanel:start", c)
                }
            }, add: function () {
                a = e[n]._c, s = e[n]._d, l = e[n]._e
            }, clickAnchor: function (e, n) {
            }
        }, e[n].defaults[i] = {add: !1, visible: {min: 1, max: 3}};
        var a, s, l, t
    }(jQuery);
    /*
     * jQuery mmenu counters add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (t) {
        var e = "mmenu", n = "counters";
        t[e].addons[n] = {
            setup: function () {
                var s = this, d = this.opts[n];
                this.conf[n];
                if (c = t[e].glbl, "boolean" == typeof d && (d = {add: d, update: d}), "object" != typeof d && (d = {}), d = this.opts[n] = t.extend(!0, {}, t[e].defaults[n], d), this.bind("initListview:after", function (t) {
                    var e = this.conf.classNames[n].counter;
                    this.__refactorClass(t.find("." + e), e, i.counter)
                }), d.add && this.bind("initListview:after", function (e) {
                    var n;
                    switch (d.addTo) {
                        case"panels":
                            n = e;
                            break;
                        default:
                            n = e.filter(d.addTo)
                    }
                    n.each(function () {
                        var e = t(this).data(a.parent);
                        e && (e.children("." + i.counter).length || e.prepend(t('<em class="' + i.counter + '" />')))
                    })
                }), d.update) {
                    var r = function (e) {
                        e = e || this.$pnls.children("." + i.panel), e.each(function () {
                            var e = t(this), n = e.data(a.parent);
                            if (n) {
                                var c = n.children("em." + i.counter);
                                c.length && (e = e.children("." + i.listview), e.length && c.html(s.__filterListItems(e.children()).length))
                            }
                        })
                    };
                    this.bind("initListview:after", r), this.bind("updateListview", r)
                }
            }, add: function () {
                i = t[e]._c, a = t[e]._d, s = t[e]._e, i.add("counter")
            }, clickAnchor: function (t, e) {
            }
        }, t[e].defaults[n] = {add: !1, addTo: "panels", count: !1}, t[e].configuration.classNames[n] = {counter: "Counter"};
        var i, a, s, c
    }(jQuery);
    /*
     * jQuery mmenu dividers add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (i) {
        var e = "mmenu", t = "dividers";
        i[e].addons[t] = {
            setup: function () {
                var s = this, a = this.opts[t];
                this.conf[t];
                if (l = i[e].glbl, "boolean" == typeof a && (a = {add: a, fixed: a}), "object" != typeof a && (a = {}), a = this.opts[t] = i.extend(!0, {}, i[e].defaults[t], a), a.type && this.bind("initMenu:after", function () {
                    this.$menu.addClass(n.menu + "_" + t + "-" + a.type)
                }), a.add && this.bind("initListview:after", function (e) {
                    var t;
                    switch (a.addTo) {
                        case"panels":
                            t = e;
                            break;
                        default:
                            t = e.filter(a.addTo)
                    }
                    t.length && (t.children("." + n.listitem + "_divider").remove(), t.find("." + n.listview).each(function () {
                        var e = "";
                        s.__filterListItems(i(this).children()).each(function () {
                            var t = i.trim(i(this).children("a, span").text()).slice(0, 1).toLowerCase();
                            t != e && t.length && (e = t, i('<li class="' + n.listitem + " " + n.listitem + '_divider">' + t + "</li>").insertBefore(this))
                        })
                    }))
                }), a.fixed) {
                    this.bind("initPanels:after", function () {
                        "undefined" == typeof this.$fixeddivider && (this.$fixeddivider = i('<ul class="' + n.listview + " " + n.listview + '_fixeddivider"><li class="' + n.listitem + " " + n.listitem + '_divider"></li></ul>').appendTo(this.$pnls).children())
                    });
                    var o = function (e) {
                        if (e = e || this.$pnls.children("." + n.panel + "_opened"), !e.is(":hidden")) {
                            var t = e.find("." + n.listitem + "_divider").not("." + n.hidden), s = e.scrollTop() || 0, d = "";
                            t.each(function () {
                                i(this).position().top + s < s + 1 && (d = i(this).text())
                            }), this.$fixeddivider.text(d), this.$pnls[d.length ? "addClass" : "removeClass"](n.panel + "_dividers")
                        }
                    };
                    this.bind("open:start", o), this.bind("openPanel:start", o), this.bind("updateListview", o), this.bind("initPanel:after", function (i) {
                        i.off(d.scroll + "-" + t + " " + d.touchmove + "-" + t).on(d.scroll + "-" + t + " " + d.touchmove + "-" + t, function (e) {
                            i.hasClass(n.panel + "_opened") && o.call(s, i)
                        })
                    })
                }
            }, add: function () {
                n = i[e]._c, s = i[e]._d, d = i[e]._e, d.add("scroll")
            }, clickAnchor: function (i, e) {
            }
        }, i[e].defaults[t] = {add: !1, addTo: "panels", fixed: !1, type: null};
        var n, s, d, l
    }(jQuery);
    /*
     * jQuery mmenu drag add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (e) {
        function n(e, n, t) {
            return e < n && (e = n), e > t && (e = t), e
        }

        function t(t, o, i) {
            var r, p, d, f = this, u = {events: "panleft panright", typeLower: "x", typeUpper: "X", open_dir: "right", close_dir: "left", negative: !1}, c = "width", l = u.open_dir, m = function (e) {
                e <= t.maxStartPos && (g = 1)
            }, h = function () {
                return e("." + s.slideout)
            }, g = 0, _ = 0, v = 0, b = this.opts.extensions.all, w = "undefined" == typeof b ? "left" : b.indexOf(s.menu + "_position-right") > -1 ? "right" : b.indexOf(s.menu + "_position-top") > -1 ? "top" : b.indexOf(s.menu + "_position-bottom") > -1 ? "bottom" : "left", y = "undefined" == typeof b ? "back" : b.indexOf(s.menu + "_position-top") > -1 || b.indexOf(s.menu + "_position-bottom") > -1 || b.indexOf(s.menu + "_position-front") > -1 ? "front" : "back";
            switch (w) {
                case"top":
                case"bottom":
                    u.events = "panup pandown", u.typeLower = "y", u.typeUpper = "Y", c = "height"
            }
            switch (w) {
                case"right":
                case"bottom":
                    u.negative = !0, m = function (e) {
                        e >= i.$wndw[c]() - t.maxStartPos && (g = 1)
                    }
            }
            switch (w) {
                case"right":
                    u.open_dir = "left", u.close_dir = "right";
                    break;
                case"top":
                    u.open_dir = "down", u.close_dir = "up";
                    break;
                case"bottom":
                    u.open_dir = "up", u.close_dir = "down"
            }
            switch (y) {
                case"front":
                    h = function () {
                        return f.$menu
                    }
            }
            var x, O = this.__valueOrFn(this.$menu, t.node, i.$page);
            "string" == typeof O && (O = e(O));
            var $ = new Hammer(O[0], this.opts[a].vendors.hammer);
            $.on("panstart", function (e) {
                m(e.center[u.typeLower]), x = h(), l = u.open_dir
            }), $.on(u.events + " panend", function (e) {
                g > 0 && e.preventDefault()
            }), $.on(u.events, function (e) {
                if (r = e["delta" + u.typeUpper], u.negative && (r = -r), r != _ && (l = r >= _ ? u.open_dir : u.close_dir), _ = r, _ > t.threshold && 1 == g) {
                    if (i.$html.hasClass(s.wrapper + "_opened")) return;
                    g = 2, f._openSetup(), f.trigger("open:start"), i.$html.addClass(s.dragging), v = n(i.$wndw[c]() * o[c].perc, o[c].min, o[c].max)
                }
                2 == g && (p = n(_, 10, v) - ("front" == y ? v : 0), u.negative && (p = -p), d = "translate" + u.typeUpper + "(" + p + "px )", x.css({"-webkit-transform": "-webkit-" + d, transform: d}))
            }), $.on("panend", function (e) {
                2 == g && (i.$html.removeClass(s.dragging), x.css("transform", ""), f[l == u.open_dir ? "_openFinish" : "close"]()), g = 0
            })
        }

        function o(e, n, t, o) {
            var i = this, p = e.data(r.parent);
            if (p) {
                p = p.closest("." + s.panel);
                var d = new Hammer(e[0], i.opts[a].vendors.hammer), f = null;
                d.on("panright", function (e) {
                    f || (i.openPanel(p), f = setTimeout(function () {
                        clearTimeout(f), f = null
                    }, i.conf.openingInterval + i.conf.transitionDuration))
                })
            }
        }

        var i = "mmenu", a = "drag";
        e[i].addons[a] = {
            setup: function () {
                if (this.opts.offCanvas) {
                    var n = this.opts[a], s = this.conf[a];
                    d = e[i].glbl, "boolean" == typeof n && (n = {menu: n, panels: n}), "object" != typeof n && (n = {}), "boolean" == typeof n.menu && (n.menu = {open: n.menu}), "object" != typeof n.menu && (n.menu = {}), "boolean" == typeof n.panels && (n.panels = {close: n.panels}), "object" != typeof n.panels && (n.panels = {}), n = this.opts[a] = e.extend(!0, {}, e[i].defaults[a], n), n.menu.open && this.bind("setPage:after", function () {
                        t.call(this, n.menu, s.menu, d)
                    }), n.panels.close && this.bind("initPanel:after", function (e) {
                        o.call(this, e, n.panels, s.panels, d)
                    })
                }
            }, add: function () {
                return "function" != typeof Hammer || Hammer.VERSION < 2 ? (e[i].addons[a].add = function () {
                }, void (e[i].addons[a].setup = function () {
                })) : (s = e[i]._c, r = e[i]._d, p = e[i]._e, void s.add("dragging"))
            }, clickAnchor: function (e, n) {
            }
        }, e[i].defaults[a] = {menu: {open: !1, maxStartPos: 100, threshold: 50}, panels: {close: !1}, vendors: {hammer: {}}}, e[i].configuration[a] = {menu: {width: {perc: .8, min: 140, max: 440}, height: {perc: .8, min: 140, max: 880}}, panels: {}};
        var s, r, p, d
    }(jQuery);
    /*
     * jQuery mmenu dropdown add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (t) {
        var o = "mmenu", e = "dropdown";
        t[o].addons[e] = {
            setup: function () {
                if (this.opts.offCanvas) {
                    var r = this, f = this.opts[e], p = this.conf[e];
                    if (a = t[o].glbl, "boolean" == typeof f && f && (f = {drop: f}), "object" != typeof f && (f = {}), "string" == typeof f.position && (f.position = {of: f.position}), f = this.opts[e] = t.extend(!0, {}, t[o].defaults[e], f), f.drop) {
                        var l;
                        this.bind("initMenu:after", function () {
                            if (this.$menu.addClass(i.menu + "_" + e), "string" != typeof f.position.of) {
                                var o = this._getOriginalMenuId();
                                o && o.length && (f.position.of = '[href="#' + o + '"]')
                            }
                            "string" == typeof f.position.of && (l = t(f.position.of), f.event = f.event.split(" "), 1 == f.event.length && (f.event[1] = f.event[0]), "hover" == f.event[0] && l.on(s.mouseenter + "-" + e, function () {
                                r.open()
                            }), "hover" == f.event[1] && this.$menu.on(s.mouseleave + "-" + e, function () {
                                r.close()
                            }))
                        }), this.bind("open:start", function () {
                            this.$menu.data(n.style, this.$menu.attr("style") || ""), a.$html.addClass(i.wrapper + "_dropdown")
                        }), this.bind("close:finish", function () {
                            this.$menu.attr("style", this.$menu.data(n.style)), a.$html.removeClass(i.wrapper + "_dropdown")
                        });
                        var h = function (t, o) {
                            var e = o[0], n = o[1], s = "x" == t ? "scrollLeft" : "scrollTop", r = "x" == t ? "outerWidth" : "outerHeight", h = "x" == t ? "left" : "top", u = "x" == t ? "right" : "bottom", d = "x" == t ? "width" : "height", c = "x" == t ? "maxWidth" : "maxHeight", m = null, v = a.$wndw[s](), x = l.offset()[h] -= v, b = x + l[r](), w = a.$wndw[d](), g = p.offset.button[t] + p.offset.viewport[t];
                            if (f.position[t]) switch (f.position[t]) {
                                case"left":
                                case"bottom":
                                    m = "after";
                                    break;
                                case"right":
                                case"top":
                                    m = "before"
                            }
                            null === m && (m = x + (b - x) / 2 < w / 2 ? "after" : "before");
                            var $, y;
                            return "after" == m ? ($ = "x" == t ? x : b, y = w - ($ + g), e[h] = $ + p.offset.button[t], e[u] = "auto", f.tip && n.push(i.menu + "_tip-" + ("x" == t ? "left" : "top"))) : ($ = "x" == t ? b : x, y = $ - g, e[u] = "calc( 100% - " + ($ - p.offset.button[t]) + "px )", e[h] = "auto", f.tip && n.push(i.menu + "_tip-" + ("x" == t ? "right" : "bottom"))), e[c] = Math.min(p[d].max, y), [e, n]
                        }, u = function (t) {
                            if (this.vars.opened) {
                                this.$menu.attr("style", this.$menu.data(n.style));
                                var o = [{}, []];
                                o = h.call(this, "y", o), o = h.call(this, "x", o), this.$menu.css(o[0]), f.tip && this.$menu.removeClass(i.tipleft + " " + i.tipright + " " + i.tiptop + " " + i.tipbottom).addClass(o[1].join(" "))
                            }
                        };
                        this.bind("open:start", u), a.$wndw.on(s.resize + "-" + e, function (t) {
                            u.call(r)
                        }), this.opts.offCanvas.blockUI || a.$wndw.on(s.scroll + "-" + e, function (t) {
                            u.call(r)
                        })
                    }
                }
            }, add: function () {
                i = t[o]._c, n = t[o]._d, s = t[o]._e, i.add("dropdown"), s.add("mouseenter mouseleave resize scroll")
            }, clickAnchor: function (t, o) {
            }
        }, t[o].defaults[e] = {drop: !1, event: "click", position: {}, tip: !0}, t[o].configuration[e] = {offset: {button: {x: -5, y: 5}, viewport: {x: 20, y: 20}}, height: {max: 880}, width: {max: 440}};
        var i, n, s, a
    }(jQuery);
    /*
     * jQuery mmenu fixedElements add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (s) {
        var t = "mmenu", i = "fixedElements";
        s[t].addons[i] = {
            setup: function () {
                if (this.opts.offCanvas) {
                    var n = (this.opts[i], this.conf[i]);
                    c = s[t].glbl;
                    var o = function (t) {
                        var o = this.conf.classNames[i].fixed, f = t.find("." + o);
                        this.__refactorClass(f, o, e.slideout), f[n.elemInsertMethod](n.elemInsertSelector);
                        var a = this.conf.classNames[i].sticky, r = t.find("." + a);
                        this.__refactorClass(r, a, e.sticky), r = t.find("." + e.sticky), r.length && (this.bind("open:start", function () {
                            if ("hidden" == c.$html.css("overflow")) {
                                var t = c.$wndw.scrollTop() + n.sticky.offset;
                                r.each(function () {
                                    s(this).css("top", parseInt(s(this).css("top"), 10) + t)
                                })
                            }
                        }), this.bind("close:finish", function () {
                            r.css("top", "")
                        }))
                    };
                    this.bind("setPage:after", o)
                }
            }, add: function () {
                e = s[t]._c, n = s[t]._d, o = s[t]._e, e.add("sticky")
            }, clickAnchor: function (s, t) {
            }
        }, s[t].configuration[i] = {sticky: {offset: 0}, elemInsertMethod: "appendTo", elemInsertSelector: "body"}, s[t].configuration.classNames[i] = {fixed: "Fixed", sticky: "Sticky"};
        var e, n, o, c
    }(jQuery);
    /*
     * jQuery mmenu iconbar add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (a) {
        var t = "mmenu", n = "iconbar";
        a[t].addons[n] = {
            setup: function () {
                function s(a) {
                    f.removeClass(e.iconbar + "__tab_selected");
                    var t = f.filter('[href="#' + a.attr("id") + '"]');
                    if (t.length) t.addClass(e.iconbar + "__tab_selected"); else {
                        var n = a.data(i.parent);
                        n && n.length && s(n.closest("." + e.panel))
                    }
                }

                var d = this, c = this.opts[n];
                this.conf[n];
                if (r = a[t].glbl, c instanceof Array && (c = {add: !0, top: c}), c.add) {
                    var l = null;
                    if (a.each(["top", "bottom"], function (t, n) {
                        var i = c[n];
                        i instanceof Array || (i = [i]);
                        for (var o = a('<div class="' + e.iconbar + "__" + n + '" />'), r = 0, s = i.length; r < s; r++) o.append(i[r]);
                        o.children().length && (l || (l = a('<div class="' + e.iconbar + '" />')), l.append(o))
                    }), l && (this.bind("initMenu:after", function () {
                        this.$menu.addClass(e.menu + "_iconbar-" + c.size).prepend(l)
                    }), "tabs" == c.type)) {
                        l.addClass(e.iconbar + "_tabs");
                        var f = l.find("a");
                        f.on(o.click + "-" + n, function (t) {
                            var n = a(this);
                            if (n.hasClass(e.iconbar + "__tab_selected")) return void t.stopImmediatePropagation();
                            try {
                                var i = a(n.attr("href"));
                                i.hasClass(e.panel) && (t.preventDefault(), t.stopImmediatePropagation(), d.__openPanelWoAnimation(i))
                            } catch (o) {
                            }
                        }), this.bind("openPanel:start", s)
                    }
                }
            }, add: function () {
                e = a[t]._c, i = a[t]._d, o = a[t]._e, e.add(n)
            }, clickAnchor: function (a, t) {
            }
        }, a[t].defaults[n] = {add: !1, size: 40, top: [], bottom: []}, a[t].configuration[n] = {};
        var e, i, o, r
    }(jQuery);
    /*
     * jQuery mmenu iconPanels add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (e) {
        var i = "mmenu", n = "iconPanels";
        e[i].addons[n] = {
            setup: function () {
                var a = this, l = this.opts[n], d = (this.conf[n], !1);
                if (s = e[i].glbl, "boolean" == typeof l && (l = {add: l}), "number" != typeof l && "string" != typeof l || (l = {add: !0, visible: l}), "object" != typeof l && (l = {}), "first" == l.visible && (d = !0, l.visible = 1), l = this.opts[n] = e.extend(!0, {}, e[i].defaults[n], l), l.visible = Math.min(3, Math.max(1, l.visible)), l.visible++, l.add) {
                    for (var r = "", o = 0; o <= l.visible; o++) r += " " + t.panel + "_iconpanel-" + o;
                    r.length && (r = r.slice(1));
                    var c = function (i) {
                        if (!i.parent("." + t.listitem + "_vertical").length) {
                            var n = a.$pnls.children("." + t.panel).removeClass(r);
                            d && n.removeClass(t.panel + "_iconpanel-first").first().addClass(t.panel + "_iconpanel-first"), n.filter("." + t.panel + "_opened-parent").removeClass(t.hidden).not(function () {
                                return e(this).parent("." + t.listitem + "_vertical").length
                            }).add(i).slice(-l.visible).each(function (i) {
                                e(this).addClass(t.panel + "_iconpanel-" + i)
                            })
                        }
                    };
                    this.bind("initMenu:after", function () {
                        var e = [t.menu + "_iconpanel-" + l.size];
                        l.hideNavbar && e.push(t.menu + "_hidenavbar"), l.hideDivider && e.push(t.menu + "_hidedivider"), this.$menu.addClass(e.join(" "))
                    }), this.bind("openPanel:start", c), this.bind("initPanels:after", function (e) {
                        c.call(a, a.$pnls.children("." + t.panel + "_opened"))
                    }), this.bind("initListview:after", function (e) {
                        !l.blockPanel || e.parent("." + t.listitem + "_vertical").length || e.children("." + t.panel + "__blocker").length || e.prepend('<a href="#' + e.closest("." + t.panel).attr("id") + '" class="' + t.panel + '__blocker" />')
                    })
                }
            }, add: function () {
                t = e[i]._c, a = e[i]._d, l = e[i]._e
            }, clickAnchor: function (e, i) {
            }
        }, e[i].defaults[n] = {add: !1, blockPanel: !0, hideDivider: !1, hideNavbar: !0, size: 40, visible: 3};
        var t, a, l, s
    }(jQuery);
    /*
     * jQuery mmenu keyboardNavigation add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (n) {
        function e(e, t) {
            e = e || this.$pnls.children("." + i.panel + "_opened");
            var a = n(), s = this.$menu.children("." + i.mm("navbars_top") + ", ." + i.mm("navbars_bottom")).children("." + i.navbar);
            s.find(r).filter(":focus").length || ("default" == t && (a = e.children("." + i.listview).find("a[href]").not("." + i.hidden), a.length || (a = e.find(r).not("." + i.hidden)), a.length || (a = s.find(r).not("." + i.hidden))), a.length || (a = this.$menu.children("." + i.tabstart)), a.first().focus())
        }

        var t = "mmenu", a = "keyboardNavigation";
        n[t].addons[a] = {
            setup: function () {
                if (!n[t].support.touch) {
                    var s = this.opts[a];
                    this.conf[a];
                    if (d = n[t].glbl, "boolean" != typeof s && "string" != typeof s || (s = {enable: s}), "object" != typeof s && (s = {}), s = this.opts[a] = n.extend(!0, {}, n[t].defaults[a], s), s.enable) {
                        var o = n('<button class="' + i.tabstart + '" tabindex="0" type="button" />'), r = n('<button class="' + i.tabend + '" tabindex="0" type="button" />');
                        this.bind("initMenu:after", function () {
                            s.enhance && this.$menu.addClass(i.menu + "_keyboardfocus"), this["_initWindow_" + a](s.enhance)
                        }), this.bind("initOpened:before", function () {
                            this.$menu.prepend(o).append(r).children("." + i.mm("navbars-top") + ", ." + i.mm("navbars-bottom")).children("." + i.navbar).children("a." + i.title).attr("tabindex", -1)
                        }), this.bind("open:finish", function () {
                            e.call(this, null, s.enable)
                        }), this.bind("openPanel:finish", function (n) {
                            e.call(this, n, s.enable)
                        }), this.bind("initOpened:after:sr-aria", function () {
                            var n = this.$menu.children("." + i.tabstart + ", ." + i.tabend);
                            this.__sr_aria(n, "hidden", !0), this.__sr_role(n, "presentation")
                        })
                    }
                }
            }, add: function () {
                i = n[t]._c, s = n[t]._d, o = n[t]._e, i.add("tabstart tabend"), o.add("focusin keydown")
            }, clickAnchor: function (n, e) {
            }
        }, n[t].defaults[a] = {enable: !1, enhance: !1}, n[t].configuration[a] = {}, n[t].prototype["_initWindow_" + a] = function (e) {
            d.$wndw.off(o.keydown + "-offCanvas"), d.$wndw.off(o.focusin + "-" + a).on(o.focusin + "-" + a, function (e) {
                if (d.$html.hasClass(i.wrapper + "_opened")) {
                    var t = n(e.target);
                    t.is("." + i.tabend) && t.parent().find("." + i.tabstart).focus()
                }
            }), d.$wndw.off(o.keydown + "-" + a).on(o.keydown + "-" + a, function (e) {
                var t = n(e.target), a = t.closest("." + i.menu);
                if (a.length) {
                    a.data("mmenu");
                    if (t.is("input, textarea")) ; else switch (e.keyCode) {
                        case 13:
                            (t.is(".mm-toggle") || t.is(".mm-check")) && t.trigger(o.click);
                            break;
                        case 32:
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                            e.preventDefault()
                    }
                }
            }), e && d.$wndw.off(o.keydown + "-" + a).on(o.keydown + "-" + a, function (e) {
                var t = n(e.target), a = t.closest("." + i.menu);
                if (a.length) {
                    var o = a.data("mmenu");
                    if (t.is("input")) switch (e.keyCode) {
                        case 27:
                            t.val("")
                    } else switch (e.keyCode) {
                        case 8:
                            var d = a.find("." + i.panel + "_opened").data(s.parent);
                            d && d.length && o.openPanel(d.closest("." + i.panel));
                            break;
                        case 27:
                            a.hasClass(i.menu + "_offcanvas") && o.close()
                    }
                }
            })
        };
        var i, s, o, d, r = "input, select, textarea, button, label, a[href]"
    }(jQuery);
    /*
     * jQuery mmenu lazySubmenus add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (n) {
        var e = "mmenu", i = "lazySubmenus";
        n[e].addons[i] = {
            setup: function () {
                var t = this.opts[i];
                this.conf[i];
                a = n[e].glbl, "boolean" == typeof t && (t = {load: t}), "object" != typeof t && (t = {}), t = this.opts[i] = n.extend(!0, {}, n[e].defaults[i], t), t.load && (this.bind("initMenu:after", function () {
                    this.$pnls.find("li").children(this.conf.panelNodetype).not("." + l.inset).not("." + l.nolistview).not("." + l.nopanel).addClass(l.panel + "_lazysubmenu " + l.nolistview + " " + l.nopanel)
                }), this.bind("initPanels:before", function (n) {
                    n = n || this.$pnls.children(this.conf.panelNodetype), this.__findAddBack(n, "." + l.panel + "_lazysubmenu").not("." + l.panel + "_lazysubmenu ." + l.panel + "_lazysubmenu").removeClass(l.panel + "_lazysubmenu " + l.nolistview + " " + l.nopanel)
                }), this.bind("initOpened:before", function () {
                    var n = this.$pnls.find("." + this.conf.classNames.selected).parents("." + l.panel + "_lazysubmenu");
                    n.length && (n.removeClass(l.panel + "_lazysubmenu " + l.nolistview + " " + l.nopanel), this.initPanels(n.last()))
                }), this.bind("openPanel:before", function (n) {
                    var e = this.__findAddBack(n, "." + l.panel + "_lazysubmenu").not("." + l.panel + "_lazysubmenu ." + l.panel + "_lazysubmenu");
                    e.length && this.initPanels(e)
                }))
            }, add: function () {
                l = n[e]._c, t = n[e]._d, s = n[e]._e
            }, clickAnchor: function (n, e) {
            }
        }, n[e].defaults[i] = {load: !1}, n[e].configuration[i] = {};
        var l, t, s, a
    }(jQuery);
    /*
     * jQuery mmenu navbar add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (n) {
        var t = "mmenu", a = "navbars";
        n[t].addons[a] = {
            setup: function () {
                var o = this, r = this.opts[a], i = this.conf[a];
                if (s = n[t].glbl, "undefined" != typeof r) {
                    r instanceof Array || (r = [r]);
                    var c = {}, d = {};
                    r.length && (n.each(r, function (s) {
                        var f = r[s];
                        "boolean" == typeof f && f && (f = {}), "object" != typeof f && (f = {}), "undefined" == typeof f.content && (f.content = ["prev", "title"]), f.content instanceof Array || (f.content = [f.content]), f = n.extend(!0, {}, o.opts.navbar, f);
                        var l = n('<div class="' + e.navbar + '" />'), u = f.height;
                        "number" != typeof u ? u = 1 : (u = Math.min(4, Math.max(1, u)), u > 1 && l.addClass(e.navbar + "_size-" + u));
                        var v = f.position;
                        switch (v) {
                            case"bottom":
                                break;
                            default:
                                v = "top"
                        }
                        c[v] || (c[v] = 0), c[v] += u, d[v] || (d[v] = n('<div class="' + e.navbars + "_" + v + '" />')), d[v].append(l);
                        for (var p = 0, b = f.content.length; p < b; p++) {
                            var h = n[t].addons[a][f.content[p]] || null;
                            h ? h.call(o, l, f, i) : (h = f.content[p], h instanceof n || (h = n(f.content[p])), l.append(h))
                        }
                        var m = n[t].addons[a][f.type] || null;
                        m && m.call(o, l, f, i), l.children("." + e.btn).length && l.addClass(e.navbar + "_has-btns")
                    }), this.bind("initMenu:after", function () {
                        for (var n in c) this.$menu.addClass(e.menu + "_navbar_" + n + "-" + c[n]), this.$menu["bottom" == n ? "append" : "prepend"](d[n])
                    }))
                }
            }, add: function () {
                e = n[t]._c, o = n[t]._d, r = n[t]._e, e.add(a)
            }, clickAnchor: function (n, t) {
            }
        }, n[t].configuration[a] = {breadcrumbs: {separator: "/", removeFirst: !1}}, n[t].configuration.classNames[a] = {};
        var e, o, r, s
    }(jQuery);
    /*
     * jQuery mmenu pageScroll add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (t) {
        function e(t) {
            a && a.length && a.is(":visible") && o.$html.add(o.$body).animate({scrollTop: a.offset().top + t}), a = !1
        }

        function i(t) {
            try {
                return !("#" == t || "#" != t.slice(0, 1) || !o.$page.find(t).length)
            } catch (e) {
                return !1
            }
        }

        var s = "mmenu", n = "pageScroll";
        t[s].addons[n] = {
            setup: function () {
                var r = this, a = this.opts[n], c = this.conf[n];
                if (o = t[s].glbl, "boolean" == typeof a && (a = {scroll: a}), a = this.opts[n] = t.extend(!0, {}, t[s].defaults[n], a), a.scroll && this.bind("close:finish", function () {
                    e(c.scrollOffset)
                }), a.update) {
                    var r = this, d = [], h = [];
                    r.bind("initListview:after", function (e) {
                        r.__filterListItemAnchors(e.find("." + l.listview).children("li")).each(function () {
                            var e = t(this).attr("href");
                            i(e) && d.push(e)
                        }), h = d.reverse()
                    });
                    var p = -1;
                    o.$wndw.on(f.scroll + "-" + n, function (e) {
                        for (var i = o.$wndw.scrollTop(), s = 0; s < h.length; s++) if (t(h[s]).offset().top < i + c.updateOffset) {
                            p !== s && (p = s, r.setSelected(r.__filterListItemAnchors(r.$pnls.children("." + l.panel + "_opened").find("." + l.listview).children("li")).filter('[href="' + h[s] + '"]').parent()));
                            break
                        }
                    })
                }
            }, add: function () {
                l = t[s]._c, r = t[s]._d, f = t[s]._e
            }, clickAnchor: function (s, r, f) {
                if (a = !1, r && f && this.opts.offCanvas && this.opts[n].scroll && o.$page && o.$page.length) {
                    var c = s.attr("href");
                    if (i(c)) {
                        if (a = t(c), !this.$menu.hasClass(l.mm("sidebar-expanded")) || !o.$html.is('[class*="' + l.mm("sidebar-expanded") + '"]')) return {close: !0};
                        e(this.conf[n].scrollOffset)
                    }
                }
            }
        }, t[s].defaults[n] = {scroll: !1, update: !1}, t[s].configuration[n] = {scrollOffset: 0, updateOffset: 50};
        var l, r, f, o, a = !1
    }(jQuery);
    /*
     * jQuery mmenu RTL add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (t) {
        var e = "mmenu", n = "rtl";
        t[e].addons[n] = {
            setup: function () {
                var u = this.opts[n];
                this.conf[n];
                i = t[e].glbl, "object" != typeof u && (u = {use: u}), u = this.opts[n] = t.extend(!0, {}, t[e].defaults[n], u), "boolean" != typeof u.use && (u.use = "rtl" == (i.$html.attr("dir") || "").toLowerCase()), u.use && this.bind("initMenu:after", function () {
                    this.$menu.addClass(s.menu + "_rtl")
                })
            }, add: function () {
                s = t[e]._c, u = t[e]._d, o = t[e]._e
            }, clickAnchor: function (t, e) {
            }
        }, t[e].defaults[n] = {use: "detect"};
        var s, u, o, i
    }(jQuery);
    /*
     * jQuery mmenu searchfield add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (e) {
        function n(e, n) {
            if (n) for (var s in n) e.attr(s, n[s])
        }

        function s(e) {
            switch (e) {
                case 9:
                case 16:
                case 17:
                case 18:
                case 37:
                case 38:
                case 39:
                case 40:
                    return !0
            }
            return !1
        }

        var a = "mmenu", t = "searchfield";
        e[a].addons[t] = {
            setup: function () {
                var n = this, s = this.opts[t], i = this.conf[t];
                r = e[a].glbl, "boolean" == typeof s && (s = {add: s}), "object" != typeof s && (s = {}), "boolean" == typeof s.panel && (s.panel = {add: s.panel}), "object" != typeof s.panel && (s.panel = {}), s.add && ("panel" == s.addTo && (s.panel.add = !0), s.panel.add && (s.showSubPanels = !1, s.panel.splash && (s.cancel = !0)), s = this.opts[t] = e.extend(!0, {}, e[a].defaults[t], s), i = this.conf[t] = e.extend(!0, {}, e[a].configuration[t], i), this.bind("close:start", function () {
                    this.$menu.find("." + l.searchfield).children("input").blur()
                }), this.bind("initPanels:after", function (a) {
                    var t = e();
                    s.panel.add && (t = this._initSearchPanel(a));
                    var l;
                    switch (s.addTo) {
                        case"panels":
                            l = a;
                            break;
                        case"panel":
                            l = t;
                            break;
                        default:
                            l = this.$menu.find(s.addTo)
                    }
                    if (l.each(function () {
                        var a = n._initSearchfield(e(this));
                        s.search && n._initSearching(a)
                    }), s.noResults) {
                        var i = s.panel.add ? t : a;
                        i.each(function () {
                            n._initNoResultsMsg(e(this))
                        })
                    }
                }))
            }, add: function () {
                l = e[a]._c, i = e[a]._d, d = e[a]._e, l.add("searchfield"), i.add("searchfield"), d.add("input focus blur")
            }, clickAnchor: function (e, n) {
                if (e.hasClass(l.searchfield + "__btn")) {
                    if (e.hasClass(l.btn + "_clear")) {
                        var s = e.closest("." + l.searchfield).find("input");
                        return s.val(""), this.search(s), !0
                    }
                    if (e.hasClass(l.btn + "_next")) return e.closest("." + l.searchfield).submit(), !0
                }
            }
        }, e[a].defaults[t] = {add: !1, addTo: "panels", noResults: "No results found.", placeholder: "Search", panel: {add: !1, dividers: !0, fx: "none", id: null, splash: null, title: "Search"}, search: !0, showTextItems: !1, showSubPanels: !0}, e[a].configuration[t] = {clear: !1, form: !1, input: !1, submit: !1};
        var l, i, d, r;
        e[a].prototype._initSearchPanel = function (n) {
            var s = this.opts[t];
            this.conf[t];
            if (this.$pnls.children("." + l.panel + "_search").length) return e();
            var a = e('<div class="' + l.panel + '_search " />').append("<ul />").appendTo(this.$pnls);
            switch (s.panel.id && a.attr("id", s.panel.id), s.panel.title && a.attr("data-mm-title", s.panel.title), s.panel.fx) {
                case!1:
                    break;
                case"none":
                    a.addClass(l.panel + "_noanimation");
                    break;
                default:
                    a.addClass(l.panel + "_fx-" + s.panel.fx)
            }
            return s.panel.splash && a.append('<div class="' + l.panel + '__searchsplash">' + s.panel.splash + "</div>"), this._initPanels(a), a
        }, e[a].prototype._initSearchfield = function (s) {
            var i = this.opts[t], d = this.conf[t];
            if (!s.parent("." + l.listitem + "_vertical").length && !s.find("." + l.searchfield).length) {
                var r = e("<" + (d.form ? "form" : "div") + ' class="' + l.searchfield + '" />'), h = e('<div class="' + l.searchfield + '__input" />'), c = e('<input placeholder="' + e[a].i18n(i.placeholder) + '" type="text" autocomplete="off" />');
                return h.append(c).appendTo(r), s.hasClass(l.searchfield) ? s.replaceWith(r) : (s.prepend(r), s.hasClass(l.panel) && s.addClass(l.panel + "_has-searchfield")), n(c, d.input), d.clear && e('<a class="' + l.btn + " " + l.btn + "_clear " + l.searchfield + '__btn" href="#" />').appendTo(h), n(r, d.form), d.form && d.submit && !d.clear && e('<a class="' + l.btn + " " + l.btn + "_next " + l.searchfield + '__btn" href="#" />').appendTo(h), i.cancel && e('<a href="#" class="' + l.searchfield + '__cancel">' + e[a].i18n("cancel") + "</a>").appendTo(r), r
            }
        }, e[a].prototype._initSearching = function (n) {
            var a = this, r = this.opts[t], h = (this.conf[t], {});
            n.closest("." + l.panel + "_search").length ? (h.$pnls = this.$pnls.find("." + l.panel), h.$nrsp = n.closest("." + l.panel)) : n.closest("." + l.panel).length ? (h.$pnls = n.closest("." + l.panel), h.$nrsp = h.$pnls) : (h.$pnls = this.$pnls.find("." + l.panel), h.$nrsp = this.$menu), r.panel.add && (h.$pnls = h.$pnls.not("." + l.panel + "_search"));
            var c = n.find("input"), p = n.find("." + l.searchfield + "__cancel"), o = this.$pnls.children("." + l.panel + "_search"), f = h.$pnls.find("." + l.listitem);
            h.$itms = f.not("." + l.listitem + "_divider"), h.$dvdr = f.filter("." + l.listitem + "_divider"), r.panel.add && r.panel.splash && c.off(d.focus + "-" + t + "-splash").on(d.focus + "-" + t + "-splash", function (e) {
                a.openPanel(o)
            }), r.cancel && (c.off(d.focus + "-" + t + "-cancel").on(d.focus + "-" + t + "-cancel", function (e) {
                p.addClass(l.searchfield + "__cancel-active")
            }), p.off(d.click + "-" + t + "-splash").on(d.click + "-" + t + "-splash", function (n) {
                n.preventDefault(), e(this).removeClass(l.searchfield + "__cancel-active"), o.hasClass(l.panel + "_opened") && a.openPanel(a.$pnls.children("." + l.panel + "_opened-parent").last())
            })), r.panel.add && "panel" == r.addTo && this.bind("openPanel:finish", function (e) {
                e[0] === o[0] && c.focus()
            }), c.data(i.searchfield, h).off(d.input + "-" + t).on(d.input + "-" + t, function (e) {
                s(e.keyCode) || a.search(c)
            }), this.search(c)
        }, e[a].prototype._initNoResultsMsg = function (n) {
            var s = this.opts[t];
            this.conf[t];
            if (n.closest("." + l.panel).length || (n = this.$pnls.children("." + l.panel).first()), !n.children("." + l.panel + "__noresultsmsg").length) {
                var i = n.children("." + l.listview).first(), d = e('<div class="' + l.panel + "__noresultsmsg " + l.hidden + '" />').append(e[a].i18n(s.noResults));
                i.length ? d.insertAfter(i) : d.prependTo(n)
            }
        }, e[a].prototype.search = function (n, s) {
            var a = this, d = this.opts[t];
            this.conf[t];
            n = n || this.$menu.find("." + l.searchfield).chidren("input").first(), s = s || n.val(), s = s.toLowerCase().trim();
            var r = "a", h = "a, span", c = n.data(i.searchfield), p = n.closest("." + l.searchfield), o = p.find("." + l.btn), f = this.$pnls.children("." + l.panel + "_search"), u = c.$pnls, _ = c.$itms, v = c.$dvdr, m = c.$nrsp;
            if (_.removeClass(l.listitem + "_nosubitems").find("." + l.btn + "_fullwidth-search").removeClass(l.btn + "_fullwidth-search " + l.btn + "_fullwidth"), f.children("." + l.listview).empty(), u.scrollTop(0), s.length) {
                if (_.add(v).addClass(l.hidden), _.each(function () {
                    var n = e(this), a = r;
                    (d.showTextItems || d.showSubPanels && n.find("." + l.btn + "_next")) && (a = h), n.children(a).not("." + l.btn + "_next").text().toLowerCase().indexOf(s) > -1 && n.removeClass(l.hidden)
                }), d.panel.add) {
                    var b = e();
                    u.each(function () {
                        var n = a.__filterListItems(e(this).find("." + l.listitem)).clone(!0);
                        n.length && (d.panel.dividers && (b = b.add('<li class="' + l.listitem + " " + l.listitem + '_divider">' + e(this).find("." + l.navbar + "__title").text() + "</li>")), b = b.add(n))
                    }), b.find("." + l.mm("toggle")).remove().end().find("." + l.mm("check")).remove().end().find("." + l.btn).remove(), f.children("." + l.listview).append(b), this.openPanel(f)
                } else d.showSubPanels && u.each(function (n) {
                    var s = e(this);
                    a.__filterListItems(s.find("." + l.listitem)).each(function () {
                        var n = e(this), s = n.data(i.child);
                        s && s.find("." + l.listview).children().removeClass(l.hidden)
                    })
                }), e(u.get().reverse()).each(function (s) {
                    var t = e(this), d = t.data(i.parent);
                    d && (a.__filterListItems(t.find("." + l.listitem)).length ? d.hasClass(l.hidden) && d.removeClass(l.hidden).children("." + l.btn + "_next").not("." + l.btn + "_fullwidth").addClass(l.btn + "_fullwidth").addClass(l.btn + "_fullwidth-search") : n.closest("." + l.panel).length || ((t.hasClass(l.panel + "_opened") || t.hasClass(l.panel + "_opened-parent")) && setTimeout(function () {
                        a.openPanel(d.closest("." + l.panel))
                    }, (s + 1) * (1.5 * a.conf.openingInterval)), d.addClass(l.listitem + "_nosubitems")))
                }), this.__filterListItems(u.find("." + l.listitem)).each(function () {
                    e(this).prevAll("." + l.listitem + "_divider").first().removeClass(l.hidden)
                });
                o.removeClass(l.hidden), m.find("." + l.panel + "__noresultsmsg")[_.not("." + l.hidden).length ? "addClass" : "removeClass"](l.hidden), d.panel.add && (d.panel.splash && f.find("." + l.panel + "__searchsplash").addClass(l.hidden), _.add(v).removeClass(l.hidden))
            } else _.add(v).removeClass(l.hidden), o.addClass(l.hidden), m.find("." + l.panel + "__noresultsmsg").addClass(l.hidden), d.panel.add && (d.panel.splash ? f.find("." + l.panel + "__searchsplash").removeClass(l.hidden) : n.closest("." + l.panel + "_search").length || this.openPanel(this.$pnls.children("." + l.panel + "_opened-parent").last()));
            this.trigger("updateListview")
        }
    }(jQuery);
    /*
     * jQuery mmenu sectionIndexer add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (e) {
        var a = "mmenu", n = "sectionIndexer";
        e[a].addons[n] = {
            setup: function () {
                var r = this, d = this.opts[n];
                this.conf[n];
                s = e[a].glbl, "boolean" == typeof d && (d = {add: d}), "object" != typeof d && (d = {}), d = this.opts[n] = e.extend(!0, {}, e[a].defaults[n], d);
                var h = null;
                this.bind("initPanels:after", function (a) {
                    if (d.add) {
                        var s;
                        switch (d.addTo) {
                            case"panels":
                                s = a;
                                break;
                            default:
                                s = e(d.addTo, this.$menu).filter("." + i.panel)
                        }
                        s.find("." + i.listitem + "_divider").closest("." + i.panel).addClass(i.panel + "_has-sectionindexer"), h || (h = e('<div class="' + i.sectionindexer + '" />').prependTo(this.$menu).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), h.on(t.mouseover + "-" + n + " " + t.touchstart + "-" + n, "a", function (a) {
                            var n = e(a.target).attr("href").slice(1), t = r.$pnls.children("." + i.panel + "_opened"), s = t.find("." + i.listview), d = -1, h = t.scrollTop();
                            t.scrollTop(0), s.children("." + i.listitem + "_divider").not("." + i.hidden).each(function () {
                                d < 0 && n == e(this).text().slice(0, 1).toLowerCase() && (d = e(this).position().top)
                            }), t.scrollTop(d > -1 ? d : h)
                        }));
                        var o = function (e) {
                            e = e || this.$pnls.children("." + i.panel + "_opened"), this.$menu[(e.hasClass(i.panel + "_has-sectionindexer") ? "add" : "remove") + "Class"](i.menu + "_has-sectionindexer")
                        };
                        this.bind("openPanel:start", o), this.bind("initPanels:after", o)
                    }
                })
            }, add: function () {
                i = e[a]._c, r = e[a]._d, t = e[a]._e, i.add("sectionindexer"), t.add("mouseover")
            }, clickAnchor: function (e, a) {
                if (e.parent().is("." + i.indexer)) return !0
            }
        }, e[a].defaults[n] = {add: !1, addTo: "panels"};
        var i, r, t, s
    }(jQuery);
    /*
     * jQuery mmenu setSelected add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (e) {
        var t = "mmenu", n = "setSelected";
        e[t].addons[n] = {
            setup: function () {
                var a = this, r = this.opts[n];
                this.conf[n];
                if (l = e[t].glbl, "boolean" == typeof r && (r = {hover: r, parent: r}), "object" != typeof r && (r = {}), r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r), "detect" == r.current) {
                    var d = function (e) {
                        e = e.split("?")[0].split("#")[0];
                        var t = a.$menu.find('a[href="' + e + '"], a[href="' + e + '/"]');
                        t.length ? a.setSelected(t.parent(), !0) : (e = e.split("/").slice(0, -1), e.length && d(e.join("/")))
                    };
                    this.bind("initMenu:after", function () {
                        d(window.location.href)
                    })
                } else r.current || this.bind("initListview:after", function (e) {
                    e.find("." + i.listview).children("." + i.listitem + "_selected").removeClass(i.listitem + "_selected")
                });
                r.hover && this.bind("initMenu:after", function () {
                    this.$menu.addClass(i.menu + "_selected-hover")
                }), r.parent && (this.bind("openPanel:finish", function (e) {
                    this.$pnls.find("." + i.listview).find("." + i.listitem + "_selected-parent").removeClass(i.listitem + "_selected-parent");
                    for (var t = e.data(s.parent); t;) t.not("." + i.listitem + "_vertical").addClass(i.listitem + "_selected-parent"), t = t.closest("." + i.panel).data(s.parent)
                }), this.bind("initMenu:after", function () {
                    this.$menu.addClass(i.menu + "_selected-parent")
                }))
            }, add: function () {
                i = e[t]._c, s = e[t]._d, a = e[t]._e
            }, clickAnchor: function (e, t) {
            }
        }, e[t].defaults[n] = {current: !0, hover: !1, parent: !1};
        var i, s, a, l
    }(jQuery);
    /*
     * jQuery mmenu sidebar add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (e) {
        var s = "mmenu", d = "sidebar";
        e[s].addons[d] = {
            setup: function () {
                if (this.opts.offCanvas) {
                    var n = this.opts[d];
                    this.conf[d];
                    l = e[s].glbl, ("string" == typeof n || "boolean" == typeof n && n || "number" == typeof n) && (n = {expanded: n}), "object" != typeof n && (n = {}), "boolean" == typeof n.collapsed && n.collapsed && (n.collapsed = "all"), "string" != typeof n.collapsed && "number" != typeof n.collapsed || (n.collapsed = {use: n.collapsed}), "object" != typeof n.collapsed && (n.collapsed = {}), "number" == typeof n.collapsed.use && (n.collapsed.use = "(min-width: " + n.collapsed.use + "px)"), "boolean" == typeof n.expanded && n.expanded && (n.expanded = "all"), "string" != typeof n.expanded && "number" != typeof n.expanded || (n.expanded = {use: n.expanded}), "object" != typeof n.expanded && (n.expanded = {}), "number" == typeof n.expanded.use && (n.expanded.use = "(min-width: " + n.expanded.use + "px)"), n = this.opts[d] = e.extend(!0, {}, e[s].defaults[d], n);
                    var t = a.wrapper + "_sidebar-collapsed-" + n.collapsed.size, i = a.wrapper + "_sidebar-expanded-" + n.expanded.size;
                    n.collapsed.use && (this.bind("initMenu:after", function () {
                        this.$menu.addClass(a.menu + "_sidebar-collapsed"), n.collapsed.blockMenu && this.opts.offCanvas && !this.$menu.children("." + a.menu + "__blocker").length && this.$menu.prepend('<a class="' + a.menu + '__blocker" href="#' + this.$menu.attr("id") + '" />'), n.collapsed.hideNavbar && this.$menu.addClass(a.menu + "_hidenavbar"), n.collapsed.hideDivider && this.$menu.addClass(a.menu + "_hidedivider")
                    }), "boolean" == typeof n.collapsed.use ? this.bind("initMenu:after", function () {
                        l.$html.addClass(t)
                    }) : this.matchMedia(n.collapsed.use, function () {
                        l.$html.addClass(t)
                    }, function () {
                        l.$html.removeClass(t)
                    })), n.expanded.use && (this.bind("initMenu:after", function () {
                        this.$menu.addClass(a.menu + "_sidebar-expanded")
                    }), "boolean" == typeof n.expanded.use ? this.bind("initMenu:after", function () {
                        l.$html.addClass(i), this.open()
                    }) : this.matchMedia(n.expanded.use, function () {
                        l.$html.addClass(i), l.$html.hasClass(a.wrapper + "_sidebar-closed") || this.open()
                    }, function () {
                        l.$html.removeClass(i), this.close()
                    }), this.bind("close:start", function () {
                        l.$html.hasClass(i) && l.$html.addClass(a.wrapper + "_sidebar-closed")
                    }), this.bind("open:start", function () {
                        l.$html.removeClass(a.wrapper + "_sidebar-closed")
                    }))
                }
            }, add: function () {
                a = e[s]._c, n = e[s]._d, t = e[s]._e
            }, clickAnchor: function (e, s, n) {
                if (this.opts[d].expanded.use && l.$html.is('[class*="' + a.wrapper + '_sidebar-expanded-"]') && s && n) return {close: !1}
            }
        }, e[s].defaults[d] = {collapsed: {use: !1, size: 40, blockMenu: !0, hideDivider: !1, hideNavbar: !0}, expanded: {use: !1, size: 30}}, e[s].configuration[d] = {};
        var a, n, t, l
    }(jQuery);
    /*
     * jQuery mmenu toggles add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (t) {
        var e = "mmenu", c = "toggles";
        t[e].addons[c] = {
            setup: function () {
                var s = this;
                this.opts[c], this.conf[c];
                a = t[e].glbl, this.bind("initPanels:after", function (e) {
                    this.__refactorClass(e.find("input"), this.conf.classNames[c].toggle, n.toggle), this.__refactorClass(e.find("input"), this.conf.classNames[c].check, n.check), e.find("input." + n.toggle + ", input." + n.check).each(function () {
                        var e = t(this), c = e.closest("li"), i = e.hasClass(n.toggle) ? "toggle" : "check", a = e.attr("id") || s.__getUniqueId();
                        c.children('label[for="' + a + '"]').length || (e.attr("id", a), c.prepend(e), t('<label for="' + a + '" class="' + n[i] + '"></label>').insertBefore(c.children("a, span").last()))
                    })
                })
            }, add: function () {
                n = t[e]._c, s = t[e]._d, i = t[e]._e, n.add("toggle check")
            }, clickAnchor: function (t, e) {
            }
        }, t[e].configuration.classNames[c] = {toggle: "Toggle", check: "Check"};
        var n, s, i, a
    }(jQuery);
    /*
     * jQuery mmenu navbar add-on breadcrumbs content
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (a) {
        var r = "mmenu", n = "navbars", e = "breadcrumbs";
        a[r].addons[n][e] = function (n, e, s) {
            var t = this, i = a[r]._c, b = a[r]._d;
            i.add("separator");
            var c = a('<span class="' + i.navbar + '__breadcrumbs" />').appendTo(n);
            this.bind("initNavbar:after", function (r) {
                if (!r.children("." + i.navbar).children("." + i.navbar + "__breadcrumbs").length) {
                    r.removeClass(i.panel + "_has-navbar");
                    for (var n = [], e = a('<span class="' + i.navbar + '__breadcrumbs"></span>'), t = r, c = !0; t && t.length;) {
                        if (t.is("." + i.panel) || (t = t.closest("." + i.panel)), !t.parent("." + i.listitem + "_vertical").length) {
                            var d = t.children("." + i.navbar).children("." + i.navbar + "__title").text();
                            d.length && n.unshift(c ? "<span>" + d + "</span>" : '<a href="#' + t.attr("id") + '">' + d + "</a>"), c = !1
                        }
                        t = t.data(b.parent)
                    }
                    s.breadcrumbs.removeFirst && n.shift(), e.append(n.join('<span class="' + i.separator + '">' + s.breadcrumbs.separator + "</span>")).appendTo(r.children("." + i.navbar))
                }
            }), this.bind("openPanel:start", function (a) {
                var r = a.find("." + i.navbar + "__breadcrumbs");
                r.length && c.html(r.html() || "")
            }), this.bind("initNavbar:after:sr-aria", function (r) {
                r.children("." + i.navbar).children("." + i.breadcrumbs).children("a").each(function () {
                    t.__sr_aria(a(this), "owns", a(this).attr("href").slice(1))
                })
            })
        }
    }(jQuery);
    /*
     * jQuery mmenu navbar add-on close content
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (t) {
        var e = "mmenu", n = "navbars", a = "close";
        t[e].addons[n][a] = function (n, a) {
            var s = t[e]._c;
            t[e].glbl;
            s.add("close");
            var r = t('<a class="' + s.btn + " " + s.btn + "_close " + s.navbar + '__btn" href="#" />').appendTo(n);
            this.bind("setPage:after", function (t) {
                r.attr("href", "#" + t.attr("id"))
            }), this.bind("setPage:after:sr-text", function (n) {
                r.html(this.__sr_text(t[e].i18n(this.conf.screenReader.text.closeMenu))), this.__sr_aria(r, "owns", r.attr("href").slice(1))
            })
        }
    }(jQuery);
    /*
     * jQuery mmenu navbar add-on next content
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (a) {
        var n = "mmenu", t = "navbars", e = "next";
        a[n].addons[t][e] = function (e, s) {
            var r, i, h, d = a[n]._c, o = a('<a class="' + d.btn + " " + d.btn + "_next " + d.navbar + '__btn" href="#" />').appendTo(e);
            this.bind("openPanel:start", function (a) {
                r = a.find("." + this.conf.classNames[t].panelNext), i = r.attr("href"), h = r.html(), i ? o.attr("href", i) : o.removeAttr("href"), o[i || h ? "removeClass" : "addClass"](d.hidden), o.html(h)
            }), this.bind("openPanel:start:sr-aria", function (a) {
                this.__sr_aria(o, "hidden", o.hasClass(d.hidden)), this.__sr_aria(o, "owns", (o.attr("href") || "").slice(1))
            })
        }, a[n].configuration.classNames[t].panelNext = "Next"
    }(jQuery);
    /*
     * jQuery mmenu navbar add-on prev content
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (a) {
        var n = "mmenu", r = "navbars", e = "prev";
        a[n].addons[r][e] = function (e, t) {
            var i = a[n]._c, s = a('<a class="' + i.btn + " " + i.btn + "_prev " + i.navbar + '__btn" href="#" />').appendTo(e);
            this.bind("initNavbar:after", function (a) {
                a.removeClass(i.panel + "_has-navbar")
            });
            var h, l, d;
            this.bind("openPanel:start", function (a) {
                a.parent("." + i.listitem + "_vertical").length || (h = a.find("." + this.conf.classNames[r].panelPrev), h.length || (h = a.children("." + i.navbar).children("." + i.btn + "_prev")), l = h.attr("href"), d = h.html(), l ? s.attr("href", l) : s.removeAttr("href"), s[l || d ? "removeClass" : "addClass"](i.hidden), s.html(d))
            }), this.bind("initNavbar:after:sr-aria", function (a) {
                var n = a.children("." + i.navbar);
                this.__sr_aria(n, "hidden", !0)
            }), this.bind("openPanel:start:sr-aria", function (a) {
                this.__sr_aria(s, "hidden", s.hasClass(i.hidden)), this.__sr_aria(s, "owns", (s.attr("href") || "").slice(1))
            })
        }, a[n].configuration.classNames[r].panelPrev = "Prev"
    }(jQuery);
    /*
     * jQuery mmenu navbar add-on searchfield content
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (s) {
        var e = "mmenu", a = "navbars", d = "searchfield";
        s[e].addons[a][d] = function (a, d) {
            var i = s[e]._c, t = s('<div class="' + i.searchfield + '" />').appendTo(a);
            "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = t
        }
    }(jQuery);
    /*
     * jQuery mmenu navbar add-on tabs content
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (a) {
        var t = "mmenu", e = "navbars", n = "tabs";
        a[t].addons[e][n] = function (n, s, r) {
            function i(a) {
                c.removeClass(d.navbar + "__tab_selected");
                var t = c.filter('[href="#' + a.attr("id") + '"]');
                if (t.length) t.addClass(d.navbar + "__tab_selected"); else {
                    var e = a.data(l.parent);
                    e && e.length && i(e.closest("." + d.panel))
                }
            }

            var d = a[t]._c, l = a[t]._d, o = a[t]._e, _ = this, c = n.children("a");
            n.addClass(d.navbar + "_tabs").parent().addClass(d.navbars + "_has-tabs"), c.on(o.click + "-" + e, function (t) {
                t.preventDefault();
                var e = a(this);
                if (e.hasClass(d.navbar + "__tab_selected")) return void t.stopImmediatePropagation();
                try {
                    _.__openPanelWoAnimation(a(e.attr("href"))), t.stopImmediatePropagation()
                } catch (n) {
                }
            }), this.bind("openPanel:start", i)
        }
    }(jQuery);
    /*
     * jQuery mmenu navbar add-on title content
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (t) {
        var a = "mmenu", e = "navbars", n = "title";
        t[a].addons[e][n] = function (n, i) {
            var r, s, l, h = t[a]._c, d = t('<a class="' + h.navbar + '__title" />').appendTo(n);
            this.bind("openPanel:start", function (t) {
                t.parent("." + h.listitem + "_vertical").length || (l = t.find("." + this.conf.classNames[e].panelTitle), l.length || (l = t.children("." + h.navbar).children("." + h.navbar + "__title")), r = l.attr("href"), s = l.html() || i.title, r ? d.attr("href", r) : d.removeAttr("href"), d[r || s ? "removeClass" : "addClass"](h.hidden), d.html(s))
            });
            var o;
            this.bind("openPanel:start:sr-aria", function (t) {
                if (this.opts.screenReader.text && (o || (o = this.$menu.children("." + h.navbars + "_top, ." + h.navbars + "_bottom").children("." + h.navbar).children("." + h.btn + "_prev")), o.length)) {
                    var a = !0;
                    "parent" == this.opts.navbar.titleLink && (a = !o.hasClass(h.hidden)), this.__sr_aria(d, "hidden", a)
                }
            })
        }, t[a].configuration.classNames[e].panelTitle = "Title"
    }(jQuery);
    /*
     * jQuery mmenu Angular wrapper
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (e) {
        var n = "mmenu", t = "angular";
        e[n].wrappers[t] = function () {
            this.opts.onClick = {close: !0, preventDefault: !1, setSelected: !0}
        }
    }(jQuery);
    /*
     * jQuery mmenu Bootstrap 3 wrapper
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (n) {
        var e = "mmenu", a = "bootstrap3";
        n[e].wrappers[a] = function () {
            this.$menu.hasClass("navbar-collapse") && (this.conf.classNames.selected = "active", this.conf.classNames.divider = "divider", this.conf.clone = !0, this.opts.initMenu = function (n) {
                for (var e = "", a = ["nav-tabs", "nav-pills", "navbar-nav"], t = 0; t < a.length; t++) if (n.find("." + a[t]).length) {
                    e = a[t];
                    break
                }
                e.length && (i.menu.call(this), i.dropdown.call(this), i[e.split("nav-").join("").split("-nav").join("")].call(this))
            })
        };
        var i = {
            menu: function () {
                this.$menu.children().removeClass("nav").find(".sr-only").remove().end().find(".divider:empty").remove();
                for (var n = ["role", "aria-haspopup", "aria-expanded"], e = 0; e < n.length; e++) this.$menu.find("[" + n[e] + "]").removeAttr(n[e])
            }, dropdown: function () {
                var e = this.$menu.find(".dropdown");
                e.removeClass("dropdown"), e.children(".dropdown-toggle").find(".caret").remove().end().each(function () {
                    n(this).replaceWith("<span>" + n(this).html() + "</span>")
                }), e.children(".dropdown-menu").removeClass("dropdown-menu")
            }, tabs: function () {
                this.$menu.children().removeClass("nav-tabs")
            }, pills: function () {
                this.$menu.children().removeClass("nav-pills")
            }, navbar: function () {
                var n = this;
                this.$menu.removeClass("collapse navbar-collapse").wrapInner("<div />").children().children().removeClass("navbar-left navbar-right navbar-nav navbar-text navbar-btn");
                var e = this.$menu.find(".navbar-form");
                this.conf.searchform = {form: {action: e.attr("action"), method: e.attr("method")}, input: {name: e.find("input").attr("name")}, submit: !0}, e.remove(), (this.$orig || this.$menu).closest(".navbar").find(".navbar-header").find(".navbar-toggle").off("click").on("click", function (e) {
                    n.open(), e.stopImmediatePropagation(), e.preventDefault()
                })
            }
        }
    }(jQuery);
    /*
     * jQuery mmenu Bootstrap 4 wrapper
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (n) {
        function e(e) {
            for (var a = n("<a />"), t = ["href", "title", "target"], r = 0; r < t.length; r++) "undefined" != typeof e.attr(t[r]) && a.attr(t[r], e.attr(t[r]));
            return a.html(e.html()), a.find(".sr-only").remove(), a
        }

        function a(a) {
            var t = n("<ul />");
            return a.find(".dropdown-item, .dropdown-divider").each(function () {
                var a = n(this), r = n("<li />");
                a.hasClass("dropdown-divider") ? r.addClass("Divider") : r.append(e(a)), t.append(r)
            }), t
        }

        function t(t) {
            var r = n("<ul />");
            return t.find(".nav-item").each(function () {
                var t = n(this), i = n("<li />");
                if (t.hasClass("active") && i.addClass("Selected"), !t.hasClass("nav-link")) {
                    var o = t.children(".dropdown-menu");
                    o.length && i.append(a(o)), t = t.children(".nav-link")
                }
                i.prepend(e(t)), r.append(i)
            }), r
        }

        var r = "mmenu", i = "bootstrap4";
        n[r].wrappers[i] = function () {
            var e = this;
            if (this.$menu.hasClass("navbar-collapse")) {
                this.conf.clone = !1;
                var r = n("<nav />"), i = n("<div />");
                r.append(i), this.$menu.children().each(function () {
                    var r = n(this);
                    switch (!0) {
                        case r.hasClass("navbar-nav"):
                            i.append(t(r));
                            break;
                        case r.hasClass("dropdown-menu"):
                            i.append(a(r));
                            break;
                        case r.hasClass("form-inline"):
                            e.conf.searchfield.form = {action: r.attr("action") || null, method: r.attr("method") || null}, e.conf.searchfield.input = {name: r.find("input").attr("name") || null}, e.conf.searchfield.clear = !1, e.conf.searchfield.submit = !0;
                            break;
                        default:
                            i.append(r.clone(!0))
                    }
                }), this.bind("initMenu:before", function () {
                    r.prependTo("body"), this.$menu = r
                }), this.$menu.parent().find(".navbar-toggler").removeAttr("data-target").removeAttr("aria-controls").off("click").on("click", function (n) {
                    n.preventDefault(), n.stopImmediatePropagation(), e.open()
                })
            }
        }
    }(jQuery);
    /*
     * jQuery mmenu jQuery Mobile wrapper
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (e) {
        var n = "mmenu", t = "jqueryMobile";
        e[n].wrappers[t] = function () {
            var n = this;
            this.opts.onClick.close = !1, this.conf.offCanvas.pageSelector = "div.ui-page-active", e("body").on("pagecontainerchange", function (e, t) {
                "function" == typeof n.close && (n.close(), n.setPage(t.toPage))
            }), this.bind("initAnchors:after", function () {
                e("body").on("click", ".mm-listview a", function (n) {
                    n.isDefaultPrevented() || (n.preventDefault(), e("body").pagecontainer("change", this.href))
                })
            })
        }
    }(jQuery);
    /*
     * jQuery mmenu Magento wrapper
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (e) {
        var n = "mmenu", a = "magento";
        e[n].wrappers[a] = function () {
            this.conf.classNames.selected = "active"
        }
    }(jQuery);
    /*
     * jQuery mmenu Olark wrapper
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (n) {
        var o = "mmenu", a = "olark";
        n[o].wrappers[a] = function () {
            this.conf.offCanvas.noPageSelector.push("#olark")
        }
    }(jQuery);
    /*
     * jQuery mmenu Turbolinks wrapper
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (n) {
        var t = "mmenu", o = "turbolinks";
        n[t].wrappers[o] = function () {
            var o, r;
            n(document).on("turbolinks:before-visit", function () {
                r = n("html"), o = r.attr("class"), o = n.grep(o.split(/\s+/), function (n) {
                    return !/mm-/.test(n)
                }).join(" ")
            }).on("turbolinks:load", function () {
                "undefined" != typeof r && (r.attr("class", o), n[t].glbl = !1)
            })
        }
    }(jQuery);
    /*
     * jQuery mmenu WordPress wrapper
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    !function (s) {
        var e = "mmenu", n = "wordpress";
        s[e].wrappers[n] = function () {
            this.conf.classNames.selected = "current-menu-item", s("#wpadminbar").css("position", "fixed").addClass("mm-slideout")
        }
    }(jQuery);
    return true;
}));

/* jQuery Custom Scroll plugin v0.6.6 | (c) 2015 Mostovoy Andrey | https://github.com/standy/custom-scroll/blob/master/LICENSE */
(function ($) {
    $.fn.customScroll = function (options) {
        if (!this.length) {
            return $.extend(defaultOptions, options);
        }
        if (options === 'destroy') {
            this.each(function () {
                var cs = $(this).data('custom-scroll');
                if (cs) cs.destroy();
            });
            return this;
        }
        if (this.length === 1) return customScroll(this, options);
        this.each(function () {
            customScroll($(this), options);
        });
    };


    var defaultOptions = {
        prefix: 'custom-scroll_',
        barMinHeight: 10,
        barMinWidth: 10,
        offsetTop: 0,
        offsetBottom: 0,
        offsetLeft: 0,
        offsetRight: 0,
        trackWidth: 10,
        trackHeight: 10,
        barHtml: '<div />',
        vertical: true,
        horizontal: true,
        preventParentScroll: true
    };

    var DIRS_VERTICAL = {
//      axis: 'y',
        dim: 'height',
        Dim: 'Height',
        dir: 'top',
        Dir: 'Top',
        dir2: 'bottom',
        Dir2: 'Bottom',
        clientAxis: 'clientY',
        suffix: '-y'
    };
    var DIRS_HORIZONTAL = {
//      axis: 'x',
        dim: 'width',
        Dim: 'Width',
        dir: 'left',
        Dir: 'Left',
        dir2: 'right',
        Dir2: 'Right',
        clientAxis: 'clientX',
        suffix: '-x'
    };

    function customScroll($container, options) {
        var cs = $container.data('custom-scroll');
        if (cs) options = cs.options;
        else options = $.extend({}, defaultOptions, options);
        var dirs = {};
        var lastDims = {};

        var isBarHidden = {
            x: +options.vertical,
            y: +options.horizontal
        };

        if (options.horizontal) {
            dirs.x = DIRS_HORIZONTAL;
            lastDims.x = {};
        }
        if (options.vertical) {
            dirs.y = DIRS_VERTICAL;
            lastDims.y = {};
        }

        if ($container.hasClass(options.prefix + 'container') && cs) {
            cs.updateBars();
            return cs;
        }
        var $inner = $container.children('.' + options.prefix + 'inner');
        if (!$inner.length) {
            $inner = $container.wrapInner('<div class="' + options.prefix + 'inner' + '"></div>').children();
        }

        $container.addClass(options.prefix + 'container');


        // scroll dimensions in case of hidden element
        var tmp = $('<div class="' + options.prefix + 'inner" />').width(100).height(100).appendTo('body').css({overflow: 'scroll'})[0];
        var scrollWidth = tmp.offsetWidth - tmp.clientWidth;
        var scrollHeight = tmp.offsetHeight - tmp.clientHeight;
        tmp.parentElement.removeChild(tmp);

        if (options.vertical) {
            $inner.css({
                /* save the padding */
                paddingLeft: $container.css('paddingLeft'),
                paddingRight: $container.css('paddingRight'),
                /* hide scrolls */
                marginRight: -scrollWidth + 'px'

            });
            $container.css({
                paddingLeft: 0,
                paddingRight: 0
            });
        } else {
            $inner.css({overflowY: 'hidden'})
        }
        if (options.horizontal) {
            $inner.css({
                /* hide scrolls */
                marginBottom: -scrollHeight + 'px',
                paddingBottom: scrollHeight + 'px'
            });
            $container.css({
                paddingTop: 0,
                paddingBottom: 0
            });
        } else {
            $inner.css({overflowX: 'hidden'})
        }

        /* in case of max-height */
        var maxHeight = $container.css('maxHeight');
        if (parseInt(maxHeight)) {
            $container.css('maxHeight', 'none');
            $inner.css('maxHeight', maxHeight);
        }


        $container.scrollTop(0);


        var $body = $('body');

        var $bars = {};
        $.each(dirs, initBar);

        $inner.on('scroll', updateBars);
        updateBars();
        if (options.preventParentScroll) preventParentScroll();

        var data = {
            $container: $container,
            $bar: $bars.y,
            $barX: $bars.x,
            $inner: $inner,
            destroy: destroy,
            updateBars: updateBars,
            options: options
        };
        $container.data('custom-scroll', data);
        return data;


        function preventParentScroll() {
            $inner.on('DOMMouseScroll mousewheel', function (e) {
                var $this = $(this);
                var scrollTop = this.scrollTop;
                var scrollHeight = this.scrollHeight;
                var height = $this.height();
                var delta = (e.type == 'DOMMouseScroll' ? e.originalEvent.detail * -40 : e.originalEvent.wheelDelta);
                var up = delta > 0;

                if (up ? scrollTop === 0 : scrollTop === scrollHeight - height) {
                    e.preventDefault();
                }
            });
        }

        function initBar(dirKey, dir) {
//          console.log('initBar', dirKey, dir)
//          var dir = DIRS[dirKey];
            $container['scroll' + dir.Dir](0);

            var cls = options.prefix + 'bar' + dir.suffix;
            var $bar = $container.children('.' + cls);
            if (!$bar.length) {
                $bar = $(options.barHtml).addClass(cls).appendTo($container);
            }

            $bar.on('mousedown touchstart', function (e) {
                e.preventDefault(); // stop scrolling in ie9
                var scrollStart = $inner['scroll' + dir.Dir]();
                var posStart = e[dir.clientAxis] || e.originalEvent.changedTouches && e.originalEvent.changedTouches[0][dir.clientAxis];
                var ratio = getDims(dirKey, dir).ratio;

                $body.on('mousemove.custom-scroll touchmove.custom-scroll', function (e) {
                    e.preventDefault(); // stop scrolling
                    var pos = e[dir.clientAxis] || e.originalEvent.changedTouches && e.originalEvent.changedTouches[0][dir.clientAxis];
                    $inner['scroll' + dir.Dir](scrollStart + (pos - posStart) / ratio);
                });
                $body.on('mouseup.custom-scroll touchend.custom-scroll', function () {
                    $body.off('.custom-scroll');
                });
            });
            $bars[dirKey] = $bar;
        }

        function getDims(dirKey, dir) {
//          console.log('getDims', dirKey, dir)
            var total = $inner.prop('scroll' + dir.Dim) | 0;
            var dim = $container['inner' + dir.Dim]();
            var inner = $inner['inner' + dir.Dim]();
            var scroll = dim - options['offset' + dir.Dir] - options['offset' + dir.Dir2];
            if (!isBarHidden[dirKey == 'x' ? 'y' : 'x']) scroll -= options['track' + dir.Dim];

            var bar = Math.max((scroll * dim / total) | 0, options['barMin' + dir.Dim]);
            var ratio = (scroll - bar) / (total - inner);
//          if (dirKey == 'y' && $container.is('#example-hard')) console.log('dim', dim, inner, scroll, total, bar, ratio)

            return {
                ratio: ratio,
                dim: dim,
                scroll: scroll,
                total: total,
                bar: bar
            }
        }

        function updateBars() {
            $.each(dirs, updateBar);
        }

        function updateBar(dirKey, dir) {
//          var dir = DIRS[dirKey];
            var dims = getDims(dirKey, dir);
            if (!dims.total) return;

            var scrollPos = $inner['scroll' + dir.Dir]();
            if (
                lastDims[dirKey].scrollPos === scrollPos &&
                lastDims[dirKey].scroll === dims.scroll &&
                lastDims[dirKey].total === dims.total
            ) return;
            lastDims[dirKey] = dims;
            lastDims[dirKey].scrollPos = scrollPos;


            var isHide = dims.bar >= dims.scroll;
            if (isHide !== isBarHidden[dirKey]) {
                $container.toggleClass(options.prefix + 'hidden' + dir.suffix, isHide);
                isBarHidden[dirKey] = isHide;
            }
            var barPos = scrollPos * dims.ratio;
//          console.log('upd', scrollPos, dims.ratio, barPos)
            //if (dirKey === 'y') console.log(barPos, dims.scroll, dims.bar, dims)
            if (barPos < 0) barPos = 0;
            if (barPos > dims.scroll - dims.bar) barPos = dims.scroll - dims.bar;
            $bars[dirKey][dir.dim](dims.bar)
                .css(dir.dir, options['offset' + dir.Dir] + barPos);
        }

        function destroy() {
            $.each(dirs, function (key) {
                $bars[key].remove();
            });
            $container
                .removeClass(options.prefix + 'container')
                .removeData('custom-scroll')
                .css({padding: '', maxHeight: ''});
            $inner.contents().appendTo($container);
            $inner.remove();
        }
    }
})(jQuery);

/*! nouislider - 12.1.0 - 10/25/2018 */
!function (t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t()
}(function () {
    "use strict";
    var et = "12.1.0";

    function s(t) {
        return null != t
    }

    function rt(t) {
        t.preventDefault()
    }

    function i(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t)
    }

    function nt(t, e, r) {
        0 < r && (at(t, e), setTimeout(function () {
            st(t, e)
        }, r))
    }

    function it(t) {
        return Math.max(Math.min(t, 100), 0)
    }

    function ot(t) {
        return Array.isArray(t) ? t : [t]
    }

    function e(t) {
        var e = (t = String(t)).split(".");
        return 1 < e.length ? e[1].length : 0
    }

    function at(t, e) {
        t.classList ? t.classList.add(e) : t.className += " " + e
    }

    function st(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }

    function lt(t) {
        var e = void 0 !== window.pageXOffset, r = "CSS1Compat" === (t.compatMode || "");
        return {x: e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft, y: e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop}
    }

    function c(t, e) {
        return 100 / (e - t)
    }

    function p(t, e) {
        return 100 * e / (t[1] - t[0])
    }

    function f(t, e) {
        for (var r = 1; t >= e[r];) r += 1;
        return r
    }

    function r(t, e, r) {
        if (r >= t.slice(-1)[0]) return 100;
        var n, i, o = f(r, t), a = t[o - 1], s = t[o], l = e[o - 1], u = e[o];
        return l + (i = r, p(n = [a, s], n[0] < 0 ? i + Math.abs(n[0]) : i - n[0]) / c(l, u))
    }

    function n(t, e, r, n) {
        if (100 === n) return n;
        var i, o, a = f(n, t), s = t[a - 1], l = t[a];
        return r ? (l - s) / 2 < n - s ? l : s : e[a - 1] ? t[a - 1] + (i = n - t[a - 1], o = e[a - 1], Math.round(i / o) * o) : n
    }

    function o(t, e, r) {
        var n;
        if ("number" == typeof e && (e = [e]), !Array.isArray(e)) throw new Error("noUiSlider (" + et + "): 'range' contains invalid value.");
        if (!i(n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !i(e[0])) throw new Error("noUiSlider (" + et + "): 'range' value isn't numeric.");
        r.xPct.push(n), r.xVal.push(e[0]), n ? r.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (r.xSteps[0] = e[1]), r.xHighestCompleteStep.push(0)
    }

    function a(t, e, r) {
        if (!e) return !0;
        r.xSteps[t] = p([r.xVal[t], r.xVal[t + 1]], e) / c(r.xPct[t], r.xPct[t + 1]);
        var n = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t], i = Math.ceil(Number(n.toFixed(3)) - 1), o = r.xVal[t] + r.xNumSteps[t] * i;
        r.xHighestCompleteStep[t] = o
    }

    function l(t, e, r) {
        var n;
        this.xPct = [], this.xVal = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
        var i = [];
        for (n in t) t.hasOwnProperty(n) && i.push([t[n], n]);
        for (i.length && "object" == typeof i[0][0] ? i.sort(function (t, e) {
            return t[0][0] - e[0][0]
        }) : i.sort(function (t, e) {
            return t[0] - e[0]
        }), n = 0; n < i.length; n++) o(i[n][1], i[n][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) a(n, this.xNumSteps[n], this)
    }

    l.prototype.getMargin = function (t) {
        var e = this.xNumSteps[0];
        if (e && t / e % 1 != 0) throw new Error("noUiSlider (" + et + "): 'limit', 'margin' and 'padding' must be divisible by step.");
        return 2 === this.xPct.length && p(this.xVal, t)
    }, l.prototype.toStepping = function (t) {
        return t = r(this.xVal, this.xPct, t)
    }, l.prototype.fromStepping = function (t) {
        return function (t, e, r) {
            if (100 <= r) return t.slice(-1)[0];
            var n, i = f(r, e), o = t[i - 1], a = t[i], s = e[i - 1], l = e[i];
            return n = [o, a], (r - s) * c(s, l) * (n[1] - n[0]) / 100 + n[0]
        }(this.xVal, this.xPct, t)
    }, l.prototype.getStep = function (t) {
        return t = n(this.xPct, this.xSteps, this.snap, t)
    }, l.prototype.getNearbySteps = function (t) {
        var e = f(t, this.xPct);
        return {stepBefore: {startValue: this.xVal[e - 2], step: this.xNumSteps[e - 2], highestStep: this.xHighestCompleteStep[e - 2]}, thisStep: {startValue: this.xVal[e - 1], step: this.xNumSteps[e - 1], highestStep: this.xHighestCompleteStep[e - 1]}, stepAfter: {startValue: this.xVal[e], step: this.xNumSteps[e], highestStep: this.xHighestCompleteStep[e]}}
    }, l.prototype.countStepDecimals = function () {
        var t = this.xNumSteps.map(e);
        return Math.max.apply(null, t)
    }, l.prototype.convert = function (t) {
        return this.getStep(this.toStepping(t))
    };
    var u = {
        to: function (t) {
            return void 0 !== t && t.toFixed(2)
        }, from: Number
    };

    function d(t) {
        if ("object" == typeof (e = t) && "function" == typeof e.to && "function" == typeof e.from) return !0;
        var e;
        throw new Error("noUiSlider (" + et + "): 'format' requires 'to' and 'from' methods.")
    }

    function h(t, e) {
        if (!i(e)) throw new Error("noUiSlider (" + et + "): 'step' is not numeric.");
        t.singleStep = e
    }

    function m(t, e) {
        if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (" + et + "): 'range' is not an object.");
        if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + et + "): Missing 'min' or 'max' in 'range'.");
        if (e.min === e.max) throw new Error("noUiSlider (" + et + "): 'range' 'min' and 'max' cannot be equal.");
        t.spectrum = new l(e, t.snap, t.singleStep)
    }

    function g(t, e) {
        if (e = ot(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (" + et + "): 'start' option is incorrect.");
        t.handles = e.length, t.start = e
    }

    function v(t, e) {
        if ("boolean" != typeof (t.snap = e)) throw new Error("noUiSlider (" + et + "): 'snap' option must be a boolean.")
    }

    function b(t, e) {
        if ("boolean" != typeof (t.animate = e)) throw new Error("noUiSlider (" + et + "): 'animate' option must be a boolean.")
    }

    function S(t, e) {
        if ("number" != typeof (t.animationDuration = e)) throw new Error("noUiSlider (" + et + "): 'animationDuration' option must be a number.")
    }

    function w(t, e) {
        var r, n = [!1];
        if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
            for (r = 1; r < t.handles; r++) n.push(e);
            n.push(!1)
        } else {
            if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + et + "): 'connect' option doesn't match handle count.");
            n = e
        }
        t.connect = n
    }

    function x(t, e) {
        switch (e) {
            case"horizontal":
                t.ort = 0;
                break;
            case"vertical":
                t.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + et + "): 'orientation' option is invalid.")
        }
    }

    function y(t, e) {
        if (!i(e)) throw new Error("noUiSlider (" + et + "): 'margin' option must be numeric.");
        if (0 !== e && (t.margin = t.spectrum.getMargin(e), !t.margin)) throw new Error("noUiSlider (" + et + "): 'margin' option is only supported on linear sliders.")
    }

    function E(t, e) {
        if (!i(e)) throw new Error("noUiSlider (" + et + "): 'limit' option must be numeric.");
        if (t.limit = t.spectrum.getMargin(e), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + et + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
    }

    function C(t, e) {
        if (!i(e) && !Array.isArray(e)) throw new Error("noUiSlider (" + et + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (Array.isArray(e) && 2 !== e.length && !i(e[0]) && !i(e[1])) throw new Error("noUiSlider (" + et + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (0 !== e) {
            if (Array.isArray(e) || (e = [e, e]), !(t.padding = [t.spectrum.getMargin(e[0]), t.spectrum.getMargin(e[1])]) === t.padding[0] || !1 === t.padding[1]) throw new Error("noUiSlider (" + et + "): 'padding' option is only supported on linear sliders.");
            if (t.padding[0] < 0 || t.padding[1] < 0) throw new Error("noUiSlider (" + et + "): 'padding' option must be a positive number(s).");
            if (100 <= t.padding[0] + t.padding[1]) throw new Error("noUiSlider (" + et + "): 'padding' option must not exceed 100% of the range.")
        }
    }

    function N(t, e) {
        switch (e) {
            case"ltr":
                t.dir = 0;
                break;
            case"rtl":
                t.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + et + "): 'direction' option was not recognized.")
        }
    }

    function U(t, e) {
        if ("string" != typeof e) throw new Error("noUiSlider (" + et + "): 'behaviour' must be a string containing options.");
        var r = 0 <= e.indexOf("tap"), n = 0 <= e.indexOf("drag"), i = 0 <= e.indexOf("fixed"), o = 0 <= e.indexOf("snap"), a = 0 <= e.indexOf("hover"), s = 0 <= e.indexOf("unconstrained");
        if (i) {
            if (2 !== t.handles) throw new Error("noUiSlider (" + et + "): 'fixed' behaviour must be used with 2 handles");
            y(t, t.start[1] - t.start[0])
        }
        if (s && (t.margin || t.limit)) throw new Error("noUiSlider (" + et + "): 'unconstrained' behaviour cannot be used with margin or limit");
        t.events = {tap: r || o, drag: n, fixed: i, snap: o, hover: a, unconstrained: s}
    }

    function k(t, e) {
        if (!1 !== e) if (!0 === e) {
            t.tooltips = [];
            for (var r = 0; r < t.handles; r++) t.tooltips.push(!0)
        } else {
            if (t.tooltips = ot(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + et + "): must pass a formatter for all handles.");
            t.tooltips.forEach(function (t) {
                if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + et + "): 'tooltips' must be passed a formatter or 'false'.")
            })
        }
    }

    function P(t, e) {
        d(t.ariaFormat = e)
    }

    function A(t, e) {
        d(t.format = e)
    }

    function M(t, e) {
        if ("boolean" != typeof (t.keyboardSupport = e)) throw new Error("noUiSlider (" + et + "): 'keyboardSupport' option must be a boolean.")
    }

    function V(t, e) {
        t.documentElement = e
    }

    function O(t, e) {
        if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider (" + et + "): 'cssPrefix' must be a string or `false`.");
        t.cssPrefix = e
    }

    function L(t, e) {
        if ("object" != typeof e) throw new Error("noUiSlider (" + et + "): 'cssClasses' must be an object.");
        if ("string" == typeof t.cssPrefix) for (var r in t.cssClasses = {}, e) e.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + e[r]); else t.cssClasses = e
    }

    function ut(e) {
        var r = {margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, ariaFormat: u, format: u}, n = {step: {r: !1, t: h}, start: {r: !0, t: g}, connect: {r: !0, t: w}, direction: {r: !0, t: N}, snap: {r: !1, t: v}, animate: {r: !1, t: b}, animationDuration: {r: !1, t: S}, range: {r: !0, t: m}, orientation: {r: !1, t: x}, margin: {r: !1, t: y}, limit: {r: !1, t: E}, padding: {r: !1, t: C}, behaviour: {r: !0, t: U}, ariaFormat: {r: !1, t: P}, format: {r: !1, t: A}, tooltips: {r: !1, t: k}, keyboardSupport: {r: !0, t: M}, documentElement: {r: !1, t: V}, cssPrefix: {r: !0, t: O}, cssClasses: {r: !0, t: L}},
            i = {connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: !0, cssPrefix: "noUi-", cssClasses: {target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", connects: "connects", ltr: "ltr", rtl: "rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub"}};
        e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(n).forEach(function (t) {
            if (!s(e[t]) && void 0 === i[t]) {
                if (n[t].r) throw new Error("noUiSlider (" + et + "): '" + t + "' is required.");
                return !0
            }
            n[t].t(r, s(e[t]) ? e[t] : i[t])
        }), r.pips = e.pips;
        var t = document.createElement("div"), o = void 0 !== t.style.msTransform, a = void 0 !== t.style.transform;
        r.transformRule = a ? "transform" : o ? "msTransform" : "webkitTransform";
        return r.style = [["left", "top"], ["right", "bottom"]][r.dir][r.ort], r
    }

    function z(t, f, o) {
        var l, u, s, a, c, e, p, i, d = window.navigator.pointerEnabled ? {start: "pointerdown", move: "pointermove", end: "pointerup"} : window.navigator.msPointerEnabled ? {start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp"} : {start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend"}, h = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function () {
            var t = !1;
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function () {
                        t = !0
                    }
                });
                window.addEventListener("test", null, e)
            } catch (t) {
            }
            return t
        }(), y = t, m = [], g = [], v = 0, E = f.spectrum, b = [], S = {}, w = t.ownerDocument, x = f.documentElement || w.documentElement, C = w.body, N = -1, U = 0, k = 1, P = 2, A = "rtl" === w.dir || 1 === f.ort ? 0 : 100;

        function M(t, e) {
            var r = w.createElement("div");
            return e && at(r, e), t.appendChild(r), r
        }

        function V(t, e) {
            return !!e && M(t, f.cssClasses.connect)
        }

        function r(t, e) {
            return !!f.tooltips[e] && M(t.firstChild, f.cssClasses.tooltip)
        }

        function O(e, i, o) {
            var a = w.createElement("div"), s = [];
            s[U] = f.cssClasses.valueNormal, s[k] = f.cssClasses.valueLarge, s[P] = f.cssClasses.valueSub;
            var l = [];
            l[U] = f.cssClasses.markerNormal, l[k] = f.cssClasses.markerLarge, l[P] = f.cssClasses.markerSub;
            var u = [f.cssClasses.valueHorizontal, f.cssClasses.valueVertical], c = [f.cssClasses.markerHorizontal, f.cssClasses.markerVertical];

            function p(t, e) {
                var r = e === f.cssClasses.value, n = r ? s : l;
                return e + " " + (r ? u : c)[f.ort] + " " + n[t]
            }

            return at(a, f.cssClasses.pips), at(a, 0 === f.ort ? f.cssClasses.pipsHorizontal : f.cssClasses.pipsVertical), Object.keys(e).forEach(function (t) {
                !function (t, e, r) {
                    if ((r = i ? i(e, r) : r) !== N) {
                        var n = M(a, !1);
                        n.className = p(r, f.cssClasses.marker), n.style[f.style] = t + "%", U < r && ((n = M(a, !1)).className = p(r, f.cssClasses.value), n.setAttribute("data-value", e), n.style[f.style] = t + "%", n.innerHTML = o.to(e))
                    }
                }(t, e[t][0], e[t][1])
            }), a
        }

        function L() {
            var t;
            c && ((t = c).parentElement.removeChild(t), c = null)
        }

        function z(t) {
            L();
            var m, g, v, b, e, r, S, w, x, n = t.mode, i = t.density || 1, o = t.filter || !1, a = function (t, e, r) {
                if ("range" === t || "steps" === t) return E.xVal;
                if ("count" === t) {
                    if (e < 2) throw new Error("noUiSlider (" + et + "): 'values' (>= 2) required for mode 'count'.");
                    var n = e - 1, i = 100 / n;
                    for (e = []; n--;) e[n] = n * i;
                    e.push(100), t = "positions"
                }
                return "positions" === t ? e.map(function (t) {
                    return E.fromStepping(r ? E.getStep(t) : t)
                }) : "values" === t ? r ? e.map(function (t) {
                    return E.fromStepping(E.getStep(E.toStepping(t)))
                }) : e : void 0
            }(n, t.values || !1, t.stepped || !1), s = (m = i, g = n, v = a, b = {}, e = E.xVal[0], r = E.xVal[E.xVal.length - 1], w = S = !1, x = 0, (v = v.slice().sort(function (t, e) {
                return t - e
            }).filter(function (t) {
                return !this[t] && (this[t] = !0)
            }, {}))[0] !== e && (v.unshift(e), S = !0), v[v.length - 1] !== r && (v.push(r), w = !0), v.forEach(function (t, e) {
                var r, n, i, o, a, s, l, u, c, p, f = t, d = v[e + 1], h = "steps" === g;
                if (h && (r = E.xNumSteps[e]), r || (r = d - f), !1 !== f && void 0 !== d) for (r = Math.max(r, 1e-7), n = f; n <= d; n = (n + r).toFixed(7) / 1) {
                    for (u = (a = (o = E.toStepping(n)) - x) / m, p = a / (c = Math.round(u)), i = 1; i <= c; i += 1) b[(s = x + i * p).toFixed(5)] = [E.fromStepping(s), 0];
                    l = -1 < v.indexOf(n) ? k : h ? P : U, !e && S && (l = 0), n === d && w || (b[o.toFixed(5)] = [n, l]), x = o
                }
            }), b), l = t.format || {to: Math.round};
            return c = y.appendChild(O(s, o, l))
        }

        function j() {
            var t = l.getBoundingClientRect(), e = "offset" + ["Width", "Height"][f.ort];
            return 0 === f.ort ? t.width || l[e] : t.height || l[e]
        }

        function F(n, i, o, a) {
            var e = function (t) {
                return !!(t = function (t, e, r) {
                    var n, i, o = 0 === t.type.indexOf("touch"), a = 0 === t.type.indexOf("mouse"), s = 0 === t.type.indexOf("pointer");
                    0 === t.type.indexOf("MSPointer") && (s = !0);
                    if (o) {
                        var l = function (t) {
                            return t.target === r || r.contains(t.target)
                        };
                        if ("touchstart" === t.type) {
                            var u = Array.prototype.filter.call(t.touches, l);
                            if (1 < u.length) return !1;
                            n = u[0].pageX, i = u[0].pageY
                        } else {
                            var c = Array.prototype.find.call(t.changedTouches, l);
                            if (!c) return !1;
                            n = c.pageX, i = c.pageY
                        }
                    }
                    e = e || lt(w), (a || s) && (n = t.clientX + e.x, i = t.clientY + e.y);
                    return t.pageOffset = e, t.points = [n, i], t.cursor = a || s, t
                }(t, a.pageOffset, a.target || i)) && (!(y.hasAttribute("disabled") && !a.doNotReject) && (e = y, r = f.cssClasses.tap, !((e.classList ? e.classList.contains(r) : new RegExp("\\b" + r + "\\b").test(e.className)) && !a.doNotReject) && (!(n === d.start && void 0 !== t.buttons && 1 < t.buttons) && ((!a.hover || !t.buttons) && (h || t.preventDefault(), t.calcPoint = t.points[f.ort], void o(t, a))))));
                var e, r
            }, r = [];
            return n.split(" ").forEach(function (t) {
                i.addEventListener(t, e, !!h && {passive: !0}), r.push([t, e])
            }), r
        }

        function H(t) {
            var e, r, n, i, o, a, s = 100 * (t - (e = l, r = f.ort, n = e.getBoundingClientRect(), i = e.ownerDocument, o = i.documentElement, a = lt(i), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (a.x = 0), r ? n.top + a.y - o.clientTop : n.left + a.x - o.clientLeft)) / j();
            return s = it(s), f.dir ? 100 - s : s
        }

        function D(t, e) {
            "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && R(t, e)
        }

        function T(t, e) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return R(t, e);
            var r = (f.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
            $(0 < r, 100 * r / e.baseSize, e.locations, e.handleNumbers)
        }

        function R(t, e) {
            e.handle && (st(e.handle, f.cssClasses.active), v -= 1), e.listeners.forEach(function (t) {
                x.removeEventListener(t[0], t[1])
            }), 0 === v && (st(y, f.cssClasses.drag), J(), t.cursor && (C.style.cursor = "", C.removeEventListener("selectstart", rt))), e.handleNumbers.forEach(function (t) {
                Y("change", t), Y("set", t), Y("end", t)
            })
        }

        function q(t, e) {
            var r;
            if (1 === e.handleNumbers.length) {
                var n = u[e.handleNumbers[0]];
                if (n.hasAttribute("disabled")) return !1;
                r = n.children[0], v += 1, at(r, f.cssClasses.active)
            }
            t.stopPropagation();
            var i = [], o = F(d.move, x, T, {target: t.target, handle: r, listeners: i, startCalcPoint: t.calcPoint, baseSize: j(), pageOffset: t.pageOffset, handleNumbers: e.handleNumbers, buttonsProperty: t.buttons, locations: m.slice()}), a = F(d.end, x, R, {target: t.target, handle: r, listeners: i, doNotReject: !0, handleNumbers: e.handleNumbers}), s = F("mouseout", x, D, {target: t.target, handle: r, listeners: i, doNotReject: !0, handleNumbers: e.handleNumbers});
            i.push.apply(i, o.concat(a, s)), t.cursor && (C.style.cursor = getComputedStyle(t.target).cursor, 1 < u.length && at(y, f.cssClasses.drag), C.addEventListener("selectstart", rt, !1)), e.handleNumbers.forEach(function (t) {
                Y("start", t)
            })
        }

        function n(t) {
            t.stopPropagation();
            var n, i, o, e = H(t.calcPoint), r = (n = e, o = !(i = 100), u.forEach(function (t, e) {
                if (!t.hasAttribute("disabled")) {
                    var r = Math.abs(m[e] - n);
                    (r < i || 100 === r && 100 === i) && (o = e, i = r)
                }
            }), o);
            if (!1 === r) return !1;
            f.events.snap || nt(y, f.cssClasses.tap, f.animationDuration), K(r, e, !0, !0), J(), Y("slide", r, !0), Y("update", r, !0), Y("change", r, !0), Y("set", r, !0), f.events.snap && q(t, {handleNumbers: [r]})
        }

        function B(t) {
            var e = H(t.calcPoint), r = E.getStep(e), n = E.fromStepping(r);
            Object.keys(S).forEach(function (t) {
                "hover" === t.split(".")[0] && S[t].forEach(function (t) {
                    t.call(a, n)
                })
            })
        }

        function X(t, e) {
            S[t] = S[t] || [], S[t].push(e), "update" === t.split(".")[0] && u.forEach(function (t, e) {
                Y("update", e)
            })
        }

        function Y(r, n, i) {
            Object.keys(S).forEach(function (t) {
                var e = t.split(".")[0];
                r === e && S[t].forEach(function (t) {
                    t.call(a, b.map(f.format.to), n, b.slice(), i || !1, m.slice())
                })
            })
        }

        function _(t) {
            return t + "%"
        }

        function I(t, e, r, n, i, o) {
            return 1 < u.length && !f.events.unconstrained && (n && 0 < e && (r = Math.max(r, t[e - 1] + f.margin)), i && e < u.length - 1 && (r = Math.min(r, t[e + 1] - f.margin))), 1 < u.length && f.limit && (n && 0 < e && (r = Math.min(r, t[e - 1] + f.limit)), i && e < u.length - 1 && (r = Math.max(r, t[e + 1] - f.limit))), f.padding && (0 === e && (r = Math.max(r, f.padding[0])), e === u.length - 1 && (r = Math.min(r, 100 - f.padding[1]))), !((r = it(r = E.getStep(r))) === t[e] && !o) && r
        }

        function W(t, e) {
            var r = f.ort;
            return (r ? e : t) + ", " + (r ? t : e)
        }

        function $(t, n, r, e) {
            var i = r.slice(), o = [!t, t], a = [t, !t];
            e = e.slice(), t && e.reverse(), 1 < e.length ? e.forEach(function (t, e) {
                var r = I(i, t, i[t] + n, o[e], a[e], !1);
                !1 === r ? n = 0 : (n = r - i[t], i[t] = r)
            }) : o = a = [!0];
            var s = !1;
            e.forEach(function (t, e) {
                s = K(t, r[t] + n, o[e], a[e]) || s
            }), s && e.forEach(function (t) {
                Y("update", t), Y("slide", t)
            })
        }

        function G(t, e) {
            return f.dir ? 100 - t - e : t
        }

        function J() {
            g.forEach(function (t) {
                var e = 50 < m[t] ? -1 : 1, r = 3 + (u.length + e * t);
                u[t].style.zIndex = r
            })
        }

        function K(t, e, r, n) {
            return !1 !== (e = I(m, t, e, r, n, !1)) && (function (t, e) {
                m[t] = e, b[t] = E.fromStepping(e);
                var r = "translate(" + W(_(G(e, 0) - A), "0") + ")";
                u[t].style[f.transformRule] = r, Q(t), Q(t + 1)
            }(t, e), !0)
        }

        function Q(t) {
            if (s[t]) {
                var e = 0, r = 100;
                0 !== t && (e = m[t - 1]), t !== s.length - 1 && (r = m[t]);
                var n = r - e, i = "translate(" + W(_(G(e, n)), "0") + ")", o = "scale(" + W(n / 100, "1") + ")";
                s[t].style[f.transformRule] = i + " " + o
            }
        }

        function Z(t, e) {
            var n = ot(t), r = void 0 === m[0];
            e = void 0 === e || !!e, f.animate && !r && nt(y, f.cssClasses.tap, f.animationDuration), g.forEach(function (t) {
                var e, r;
                K(t, (e = n[t], r = t, null === e || !1 === e || void 0 === e ? m[r] : ("number" == typeof e && (e = String(e)), e = f.format.from(e), !1 === (e = E.toStepping(e)) || isNaN(e) ? m[r] : e)), !0, !1)
            }), g.forEach(function (t) {
                K(t, m[t], !0, !0)
            }), J(), g.forEach(function (t) {
                Y("update", t), null !== n[t] && e && Y("set", t)
            })
        }

        function tt() {
            var t = b.map(f.format.to);
            return 1 === t.length ? t[0] : t
        }

        return at(e = y, f.cssClasses.target), 0 === f.dir ? at(e, f.cssClasses.ltr) : at(e, f.cssClasses.rtl), 0 === f.ort ? at(e, f.cssClasses.horizontal) : at(e, f.cssClasses.vertical), l = M(e, f.cssClasses.base), function (t, e) {
            var r, n, i, o = M(e, f.cssClasses.connects);
            u = [], (s = []).push(V(o, t[0]));
            for (var a = 0; a < f.handles; a++) u.push((r = a, i = void 0, n = M(e, f.cssClasses.origin), (i = M(n, f.cssClasses.handle)).setAttribute("data-handle", r), f.keyboardSupport && i.setAttribute("tabindex", "0"), i.setAttribute("role", "slider"), i.setAttribute("aria-orientation", f.ort ? "vertical" : "horizontal"), 0 === r ? at(i, f.cssClasses.handleLower) : r === f.handles - 1 && at(i, f.cssClasses.handleUpper), n)), g[a] = a, s.push(V(o, t[a + 1]))
        }(f.connect, l), (p = f.events).fixed || u.forEach(function (t, e) {
            F(d.start, t.children[0], q, {handleNumbers: [e]})
        }), p.tap && F(d.start, l, n, {}), p.hover && F(d.move, l, B, {hover: !0}), p.drag && s.forEach(function (t, e) {
            if (!1 !== t && 0 !== e && e !== s.length - 1) {
                var r = u[e - 1], n = u[e], i = [t];
                at(t, f.cssClasses.draggable), p.fixed && (i.push(r.children[0]), i.push(n.children[0])), i.forEach(function (t) {
                    F(d.start, t, q, {handles: [r, n], handleNumbers: [e - 1, e]})
                })
            }
        }), Z(f.start), a = {
            destroy: function () {
                for (var t in f.cssClasses) f.cssClasses.hasOwnProperty(t) && st(y, f.cssClasses[t]);
                for (; y.firstChild;) y.removeChild(y.firstChild);
                delete y.noUiSlider
            }, steps: function () {
                return m.map(function (t, e) {
                    var r = E.getNearbySteps(t), n = b[e], i = r.thisStep.step, o = null;
                    !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n), o = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep, 100 === t ? i = null : 0 === t && (o = null);
                    var a = E.countStepDecimals();
                    return null !== i && !1 !== i && (i = Number(i.toFixed(a))), null !== o && !1 !== o && (o = Number(o.toFixed(a))), [o, i]
                })
            }, on: X, off: function (t) {
                var n = t && t.split(".")[0], i = n && t.substring(n.length);
                Object.keys(S).forEach(function (t) {
                    var e = t.split(".")[0], r = t.substring(e.length);
                    n && n !== e || i && i !== r || delete S[t]
                })
            }, get: tt, set: Z, setHandle: function (t, e, r) {
                var n = [];
                if (!(0 <= (t = Number(t)) && t < g.length)) throw new Error("noUiSlider (" + et + "): invalid handle number, got: " + t);
                for (var i = 0; i < g.length; i++) n[i] = null;
                n[t] = e, Z(n, r)
            }, reset: function (t) {
                Z(f.start, t)
            }, __moveHandles: function (t, e, r) {
                $(t, e, m, r)
            }, options: o, updateOptions: function (e, t) {
                var r = tt(), n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                n.forEach(function (t) {
                    void 0 !== e[t] && (o[t] = e[t])
                });
                var i = ut(o);
                n.forEach(function (t) {
                    void 0 !== e[t] && (f[t] = i[t])
                }), E = i.spectrum, f.margin = i.margin, f.limit = i.limit, f.padding = i.padding, f.pips && z(f.pips), m = [], Z(e.start || r, t)
            }, target: y, removePips: L, pips: z
        }, f.pips && z(f.pips), f.tooltips && (i = u.map(r), X("update", function (t, e, r) {
            if (i[e]) {
                var n = t[e];
                !0 !== f.tooltips[e] && (n = f.tooltips[e].to(r[e])), i[e].innerHTML = n
            }
        })), X("update", function (t, e, a, r, s) {
            g.forEach(function (t) {
                var e = u[t], r = I(m, t, 0, !0, !0, !0), n = I(m, t, 100, !0, !0, !0), i = s[t], o = f.ariaFormat.to(a[t]);
                r = E.fromStepping(r).toFixed(1), n = E.fromStepping(n).toFixed(1), i = E.fromStepping(i).toFixed(1), e.children[0].setAttribute("aria-valuemin", r), e.children[0].setAttribute("aria-valuemax", n), e.children[0].setAttribute("aria-valuenow", i), e.children[0].setAttribute("aria-valuetext", o)
            })
        }), a
    }

    return {
        __spectrum: l, version: et, create: function (t, e) {
            if (!t || !t.nodeName) throw new Error("noUiSlider (" + et + "): create requires a single element, got: " + t);
            if (t.noUiSlider) throw new Error("noUiSlider (" + et + "): Slider was already initialized.");
            var r = z(t, ut(e), e);
            return t.noUiSlider = r
        }
    }
});
//# sourceMappingURL=swiper.min.js.map

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {
        }
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {},
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling $.cookie().
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;

        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');

            if (key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, {expires: -1}));
        return !$.cookie(key);
    };

}));

(function (factory) {

    if (typeof define === 'function' && define.amd) {

        // AMD. Register as an anonymous module.
        define([], factory);

    } else if (typeof exports === 'object') {

        // Node/CommonJS
        module.exports = factory();

    } else {

        // Browser globals
        window.wNumb = factory();
    }

}(function () {

    'use strict';

    var FormatOptions = [
        'decimals',
        'thousand',
        'mark',
        'prefix',
        'suffix',
        'encoder',
        'decoder',
        'negativeBefore',
        'negative',
        'edit',
        'undo'
    ];

// General

    // Reverse a string
    function strReverse(a) {
        return a.split('').reverse().join('');
    }

    // Check if a string starts with a specified prefix.
    function strStartsWith(input, match) {
        return input.substring(0, match.length) === match;
    }

    // Check is a string ends in a specified suffix.
    function strEndsWith(input, match) {
        return input.slice(-1 * match.length) === match;
    }

    // Throw an error if formatting options are incompatible.
    function throwEqualError(F, a, b) {
        if ((F[a] || F[b]) && (F[a] === F[b])) {
            throw new Error(a);
        }
    }

    // Check if a number is finite and not NaN
    function isValidNumber(input) {
        return typeof input === 'number' && isFinite(input);
    }

    // Provide rounding-accurate toFixed method.
    // Borrowed: http://stackoverflow.com/a/21323330/775265
    function toFixed(value, exp) {
        value = value.toString().split('e');
        value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
        value = value.toString().split('e');
        return (+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp))).toFixed(exp);
    }


// Formatting

    // Accept a number as input, output formatted string.
    function formatTo(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {

        var originalInput = input, inputIsNegative, inputPieces, inputBase, inputDecimals = '', output = '';

        // Apply user encoder to the input.
        // Expected outcome: number.
        if (encoder) {
            input = encoder(input);
        }

        // Stop if no valid number was provided, the number is infinite or NaN.
        if (!isValidNumber(input)) {
            return false;
        }

        // Rounding away decimals might cause a value of -0
        // when using very small ranges. Remove those cases.
        if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
            input = 0;
        }

        // Formatting is done on absolute numbers,
        // decorated by an optional negative symbol.
        if (input < 0) {
            inputIsNegative = true;
            input = Math.abs(input);
        }

        // Reduce the number of decimals to the specified option.
        if (decimals !== false) {
            input = toFixed(input, decimals);
        }

        // Transform the number into a string, so it can be split.
        input = input.toString();

        // Break the number on the decimal separator.
        if (input.indexOf('.') !== -1) {
            inputPieces = input.split('.');

            inputBase = inputPieces[0];

            if (mark) {
                inputDecimals = mark + inputPieces[1];
            }

        } else {

            // If it isn't split, the entire number will do.
            inputBase = input;
        }

        // Group numbers in sets of three.
        if (thousand) {
            inputBase = strReverse(inputBase).match(/.{1,3}/g);
            inputBase = strReverse(inputBase.join(strReverse(thousand)));
        }

        // If the number is negative, prefix with negation symbol.
        if (inputIsNegative && negativeBefore) {
            output += negativeBefore;
        }

        // Prefix the number
        if (prefix) {
            output += prefix;
        }

        // Normal negative option comes after the prefix. Defaults to '-'.
        if (inputIsNegative && negative) {
            output += negative;
        }

        // Append the actual number.
        output += inputBase;
        output += inputDecimals;

        // Apply the suffix.
        if (suffix) {
            output += suffix;
        }

        // Run the output through a user-specified post-formatter.
        if (edit) {
            output = edit(output, originalInput);
        }

        // All done.
        return output;
    }

    // Accept a sting as input, output decoded number.
    function formatFrom(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {

        var originalInput = input, inputIsNegative, output = '';

        // User defined pre-decoder. Result must be a non empty string.
        if (undo) {
            input = undo(input);
        }

        // Test the input. Can't be empty.
        if (!input || typeof input !== 'string') {
            return false;
        }

        // If the string starts with the negativeBefore value: remove it.
        // Remember is was there, the number is negative.
        if (negativeBefore && strStartsWith(input, negativeBefore)) {
            input = input.replace(negativeBefore, '');
            inputIsNegative = true;
        }

        // Repeat the same procedure for the prefix.
        if (prefix && strStartsWith(input, prefix)) {
            input = input.replace(prefix, '');
        }

        // And again for negative.
        if (negative && strStartsWith(input, negative)) {
            input = input.replace(negative, '');
            inputIsNegative = true;
        }

        // Remove the suffix.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
        if (suffix && strEndsWith(input, suffix)) {
            input = input.slice(0, -1 * suffix.length);
        }

        // Remove the thousand grouping.
        if (thousand) {
            input = input.split(thousand).join('');
        }

        // Set the decimal separator back to period.
        if (mark) {
            input = input.replace(mark, '.');
        }

        // Prepend the negative symbol.
        if (inputIsNegative) {
            output += '-';
        }

        // Add the number
        output += input;

        // Trim all non-numeric characters (allow '.' and '-');
        output = output.replace(/[^0-9\.\-.]/g, '');

        // The value contains no parse-able number.
        if (output === '') {
            return false;
        }

        // Covert to number.
        output = Number(output);

        // Run the user-specified post-decoder.
        if (decoder) {
            output = decoder(output);
        }

        // Check is the output is valid, otherwise: return false.
        if (!isValidNumber(output)) {
            return false;
        }

        return output;
    }


// Framework

    // Validate formatting options
    function validate(inputOptions) {

        var i, optionName, optionValue,
            filteredOptions = {};

        if (inputOptions['suffix'] === undefined) {
            inputOptions['suffix'] = inputOptions['postfix'];
        }

        for (i = 0; i < FormatOptions.length; i += 1) {

            optionName = FormatOptions[i];
            optionValue = inputOptions[optionName];

            if (optionValue === undefined) {

                // Only default if negativeBefore isn't set.
                if (optionName === 'negative' && !filteredOptions.negativeBefore) {
                    filteredOptions[optionName] = '-';
                    // Don't set a default for mark when 'thousand' is set.
                } else if (optionName === 'mark' && filteredOptions.thousand !== '.') {
                    filteredOptions[optionName] = '.';
                } else {
                    filteredOptions[optionName] = false;
                }

                // Floating points in JS are stable up to 7 decimals.
            } else if (optionName === 'decimals') {
                if (optionValue >= 0 && optionValue < 8) {
                    filteredOptions[optionName] = optionValue;
                } else {
                    throw new Error(optionName);
                }

                // These options, when provided, must be functions.
            } else if (optionName === 'encoder' || optionName === 'decoder' || optionName === 'edit' || optionName === 'undo') {
                if (typeof optionValue === 'function') {
                    filteredOptions[optionName] = optionValue;
                } else {
                    throw new Error(optionName);
                }

                // Other options are strings.
            } else {

                if (typeof optionValue === 'string') {
                    filteredOptions[optionName] = optionValue;
                } else {
                    throw new Error(optionName);
                }
            }
        }

        // Some values can't be extracted from a
        // string if certain combinations are present.
        throwEqualError(filteredOptions, 'mark', 'thousand');
        throwEqualError(filteredOptions, 'prefix', 'negative');
        throwEqualError(filteredOptions, 'prefix', 'negativeBefore');

        return filteredOptions;
    }

    // Pass all options as function arguments
    function passAll(options, method, input) {
        var i, args = [];

        // Add all options in order of FormatOptions
        for (i = 0; i < FormatOptions.length; i += 1) {
            args.push(options[FormatOptions[i]]);
        }

        // Append the input, then call the method, presenting all
        // options as arguments.
        args.push(input);
        return method.apply('', args);
    }

    function wNumb(options) {

        if (!(this instanceof wNumb)) {
            return new wNumb(options);
        }

        if (typeof options !== "object") {
            return;
        }

        options = validate(options);

        // Call 'formatTo' with proper arguments.
        this.to = function (input) {
            return passAll(options, formatTo, input);
        };

        // Call 'formatFrom' with proper arguments.
        this.from = function (input) {
            return passAll(options, formatFrom, input);
        };
    }

    return wNumb;

}));

/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    "use strict";

    function i(i, r, a) {
        function h(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function (t, h) {
                var u = a.data(h, i);
                if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var d = u[e];
                if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                var l = d.apply(u, n);
                o = void 0 === o ? l : o
            }), void 0 !== o ? o : t
        }

        function u(t, e) {
            t.each(function (t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
            })
        }

        a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return h(this, t, e)
            }
            return u(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }

    var o = Array.prototype.slice, r = t.console, s = "undefined" == typeof r ? function () {
    } : function (t) {
        r.error(t)
    };
    return n(e || t.jQuery), i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}, n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o], s = n && n[r];
                s && (this.off(t, r), delete n[r]), r.apply(this, e)
            }
            return this
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents
    }, t
}), function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
    "use strict";

    function t(t) {
        var e = parseFloat(t), i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function e() {
    }

    function i() {
        for (var t = {width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0}, e = 0; u > e; e++) {
            var i = h[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }

    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            s = 200 == Math.round(t(o.width)), r.isBoxSizeOuter = s, i.removeChild(e)
        }
    }

    function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                var c = h[l], f = r[c], m = parseFloat(f);
                a[c] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight, g = a.paddingTop + a.paddingBottom, y = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom, _ = a.borderLeftWidth + a.borderRightWidth, z = a.borderTopWidth + a.borderBottomWidth, E = d && s, b = t(r.width);
            b !== !1 && (a.width = b + (E ? 0 : p + _));
            var x = t(r.height);
            return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
        }
    }

    var s, a = "undefined" == typeof console ? e : function (t) {
        console.error(t)
    }, h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], u = h.length, d = !1;
    return r
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i], o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function (e, i) {
        return e[t](i)
    }
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
    var i = {};
    i.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function (t, e) {
        return (t % e + e) % e
    };
    var n = Array.prototype.slice;
    i.makeArray = function (t) {
        if (Array.isArray(t)) return t;
        if (null === t || void 0 === t) return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? n.call(t) : [t]
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;) if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
            }
        }), o
    }, i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var n = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[o];
            clearTimeout(t);
            var e = arguments, r = this;
            this[o] = setTimeout(function () {
                n.apply(r, e), delete r[o]
            }, i)
        }
    }, i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function (e, n) {
        i.docReady(function () {
            var r = i.toDashed(n), s = "data-" + r, a = document.querySelectorAll("[" + s + "]"), h = document.querySelectorAll(".js-" + r), u = i.makeArray(a).concat(i.makeArray(h)), d = s + "-options", l = t.jQuery;
            u.forEach(function (t) {
                var i, r = t.getAttribute(s) || t.getAttribute(d);
                try {
                    i = r && JSON.parse(r)
                } catch (a) {
                    return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + a))
                }
                var h = new e(t, i);
                l && l.data(t, n, h)
            })
        })
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    function o(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    var r = document.documentElement.style, s = "string" == typeof r.transition ? "transition" : "WebkitTransition", a = "string" == typeof r.transform ? "transform" : "WebkitTransform", h = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[s], u = {transform: a, transition: s, transitionDuration: s + "Duration", transitionProperty: s + "Property", transitionDelay: s + "Delay"}, d = n.prototype = Object.create(t.prototype);
    d.constructor = n, d._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function () {
        this.size = e(this.element)
    }, d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            var n = u[i] || i;
            e[n] = t[i]
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), n = t[e ? "left" : "right"], o = t[i ? "top" : "bottom"], r = parseFloat(n), s = parseFloat(o), a = this.layout.size;
        -1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s
    }, d.layoutPosition = function () {
        var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop"), o = i ? "paddingLeft" : "paddingRight", r = i ? "left" : "right", s = i ? "right" : "left", a = this.position.x + t[o];
        e[r] = this.getXValue(a), e[s] = "";
        var h = n ? "paddingTop" : "paddingBottom", u = n ? "top" : "bottom", d = n ? "bottom" : "top", l = this.position.y + t[h];
        e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x, n = this.position.y, o = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();
        var r = t - i, s = e - n, a = {};
        a.transform = this.getTranslate(r, s), this.transition({to: a, onTransitionEnd: {transform: this.layoutPosition}, isCleaning: !0})
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e)
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + o(a);
    d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0}), this.element.addEventListener(h, this, !1)
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var c = {"-webkit-transform": "transform"};
    d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, n = c[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this), delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var f = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
    return d.removeTransitionStyles = function () {
        this.css(f)
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, d.remove = function () {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e})
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e})
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, d.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, n, o) {
    "use strict";

    function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var o = ++l;
        this.element.outlayerGUID = o, c[o] = this, this._create();
        var r = this._getOption("initLayout");
        r && this.layout()
    }

    function s(t) {
        function e() {
            t.apply(this, arguments)
        }

        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], n = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o
    }

    var h = t.console, u = t.jQuery, d = function () {
    }, l = 0, c = {};
    r.namespace = "outlayer", r.Item = o, r.defaults = {containerStyle: {position: "relative"}, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: {opacity: 0, transform: "scale(0.001)"}, visibleStyle: {opacity: 1, transform: "scale(1)"}};
    var f = r.prototype;
    n.extend(f, e.prototype), f.option = function (t) {
        n.extend(this.options, t)
    }, f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, r.compatOptions = {initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer"}, f._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, f.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, f._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o], s = new i(r, this);
            n.push(s)
        }
        return n
    }, f._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, f.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    }, f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, f._init = f.layout, f._resetLayout = function () {
        this.getSize()
    }, f.getSize = function () {
        this.size = i(this.element)
    }, f._getMeasurement = function (t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    }, f.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    }, f._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function (t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, f._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, f._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, f.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, f._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    }, f._postLayout = function () {
        this.resizeContainer()
    }, f.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, f._getContainerSize = d, f._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, f._emitCompleteOnItems = function (t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            s++, s == r && i()
        }

        var o = this, r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function (e) {
            e.once(t, n)
        })
    }, f.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), u) if (this.$element = this.$element || u(this.element), e) {
            var o = u.Event(e);
            o.type = t, this.$element.trigger(o, i)
        } else this.$element.trigger(t, i)
    }, f.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, f.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, f.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, f.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, f._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, f._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)}
    }, f._manageStamp = d, f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), n = this._boundingRect, o = i(t), r = {left: e.left - n.left - o.marginLeft, top: e.top - n.top - o.marginTop, right: n.right - e.right - o.marginRight, bottom: n.bottom - e.bottom - o.marginBottom};
        return r
    }, f.handleEvent = n.handleEvent, f.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, f.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, f.onresize = function () {
        this.resize()
    }, n.debounceMethod(r, "onresize", 100), f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, f.needsResizeLayout = function () {
        var t = i(this.element), e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, f.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, f.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, f.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, f.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, f.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, f.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, f.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, f.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, f.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), n.removeFrom(this.items, t)
        }, this)
    }, f.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
    }, r.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e]
    }, r.create = function (t, e) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
    };
    var m = {ms: 1, s: 1e3};
    return r.Item = o, r
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, n.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, r = o / n, s = n - o % n, a = s && 1 > s ? "round" : "floor";
        r = Math[a](r), this.cols = Math.max(r, 1)
    }, n.getContainerWidth = function () {
        var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, n = e(i);
        this.containerWidth = n && n.innerWidth
    }, n._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, i = e && 1 > e ? "round" : "ceil", n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {x: this.columnWidth * r.col, y: r.y}, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) this.colYs[u] = a;
        return s
    }, n._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t), i = Math.min.apply(Math, e);
        return {col: e.indexOf(i), y: i}
    }, n._getTopColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
        return e
    }, n._getColGroupY = function (t, e) {
        if (2 > e) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, n._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols, n = t > 1 && i + t > this.cols;
        i = n ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {col: i, y: this._getColGroupY(i, t)}
    }, n._manageStamp = function (t) {
        var i = e(t), n = this._getElementOffset(t), o = this._getOption("originLeft"), r = o ? n.left : n.right, s = r + i.outerWidth, a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
        for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, n._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, n._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, n.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
});

function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

!function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    var e = function () {
        function e() {
            var e = this, n = function () {
                var n = ["br-wrapper"];
                "" !== e.options.theme && n.push("br-theme-" + e.options.theme), e.$elem.wrap(t("<div />", {"class": n.join(" ")}))
            }, i = function () {
                e.$elem.unwrap()
            }, a = function (n) {
                return t.isNumeric(n) && (n = Math.floor(n)), t('option[value="' + n + '"]', e.$elem)
            }, r = function () {
                var n = e.options.initialRating;
                return n ? a(n) : t("option:selected", e.$elem)
            }, o = function () {
                var n = e.$elem.find('option[value="' + e.options.emptyValue + '"]');
                return !n.length && e.options.allowEmpty ? (n = t("<option />", {value: e.options.emptyValue}), n.prependTo(e.$elem)) : n
            }, l = function (t) {
                var n = e.$elem.data("barrating");
                return "undefined" != typeof t ? n[t] : n
            }, s = function (t, n) {
                null !== n && "object" == typeof n ? e.$elem.data("barrating", n) : e.$elem.data("barrating")[t] = n
            }, u = function () {
                var t = r(), n = o(), i = t.val(), a = t.data("html") ? t.data("html") : t.text(), l = null !== e.options.allowEmpty ? e.options.allowEmpty : !!n.length, u = n.length ? n.val() : null, d = n.length ? n.text() : null;
                s(null, {userOptions: e.options, ratingValue: i, ratingText: a, originalRatingValue: i, originalRatingText: a, allowEmpty: l, emptyRatingValue: u, emptyRatingText: d, readOnly: e.options.readonly, ratingMade: !1})
            }, d = function () {
                e.$elem.removeData("barrating")
            }, c = function () {
                return l("ratingText")
            }, f = function () {
                return l("ratingValue")
            }, g = function () {
                var n = t("<div />", {"class": "br-widget"});
                return e.$elem.find("option").each(function () {
                    var i, a, r, o;
                    i = t(this).val(), i !== l("emptyRatingValue") && (a = t(this).text(), r = t(this).data("html"), r && (a = r), o = t("<a />", {href: "#", "data-rating-value": i, "data-rating-text": a, html: e.options.showValues ? a : ""}), n.append(o))
                }), e.options.showSelectedRating && n.append(t("<div />", {text: "", "class": "br-current-rating"})), e.options.reverse && n.addClass("br-reverse"), e.options.readonly && n.addClass("br-readonly"), n
            }, p = function () {
                return l("userOptions").reverse ? "nextAll" : "prevAll"
            }, h = function (t) {
                a(t).prop("selected", !0), l("userOptions").triggerChange && e.$elem.change()
            }, m = function () {
                t("option", e.$elem).prop("selected", function () {
                    return this.defaultSelected
                }), l("userOptions").triggerChange && e.$elem.change()
            }, v = function (t) {
                t = t ? t : c(), t == l("emptyRatingText") && (t = ""), e.options.showSelectedRating && e.$elem.parent().find(".br-current-rating").text(t)
            }, y = function (t) {
                return Math.round(Math.floor(10 * t) / 10 % 1 * 100)
            }, b = function () {
                e.$widget.find("a").removeClass(function (t, e) {
                    return (e.match(/(^|\s)br-\S+/g) || []).join(" ")
                })
            }, w = function () {
                var n, i, a = e.$widget.find('a[data-rating-value="' + f() + '"]'), r = l("userOptions").initialRating, o = t.isNumeric(f()) ? f() : 0, s = y(r);
                if (b(), a.addClass("br-selected br-current")[p()]().addClass("br-selected"), !l("ratingMade") && t.isNumeric(r)) {
                    if (o >= r || !s) return;
                    n = e.$widget.find("a"), i = a.length ? a[l("userOptions").reverse ? "prev" : "next"]() : n[l("userOptions").reverse ? "last" : "first"](), i.addClass("br-fractional"), i.addClass("br-fractional-" + s)
                }
            }, $ = function (t) {
                return l("allowEmpty") && l("userOptions").deselectable ? f() == t.attr("data-rating-value") : !1
            }, x = function (n) {
                n.on("click.barrating", function (n) {
                    var i, a, r = t(this), o = l("userOptions");
                    return n.preventDefault(), i = r.attr("data-rating-value"), a = r.attr("data-rating-text"), $(r) && (i = l("emptyRatingValue"), a = l("emptyRatingText")), s("ratingValue", i), s("ratingText", a), s("ratingMade", !0), h(i), v(a), w(), o.onSelect.call(e, f(), c(), n), !1
                })
            }, C = function (e) {
                e.on("mouseenter.barrating", function () {
                    var e = t(this);
                    b(), e.addClass("br-active")[p()]().addClass("br-active"), v(e.attr("data-rating-text"))
                })
            }, O = function (t) {
                e.$widget.on("mouseleave.barrating blur.barrating", function () {
                    v(), w()
                })
            }, R = function (e) {
                e.on("touchstart.barrating", function (e) {
                    e.preventDefault(), e.stopPropagation(), t(this).click()
                })
            }, V = function (t) {
                t.on("click.barrating", function (t) {
                    t.preventDefault()
                })
            }, S = function (t) {
                x(t), e.options.hoverState && (C(t), O(t))
            }, T = function (t) {
                t.off(".barrating")
            }, j = function (t) {
                var n = e.$widget.find("a");
                l("userOptions").fastClicks && R(n), t ? (T(n), V(n)) : S(n)
            };
            this.show = function () {
                l() || (n(), u(), e.$widget = g(), e.$widget.insertAfter(e.$elem), w(), v(), j(e.options.readonly), e.$elem.hide())
            }, this.readonly = function (t) {
                "boolean" == typeof t && l("readOnly") != t && (j(t), s("readOnly", t), e.$widget.toggleClass("br-readonly"))
            }, this.set = function (t) {
                var n = l("userOptions");
                0 !== e.$elem.find('option[value="' + t + '"]').length && (s("ratingValue", t), s("ratingText", e.$elem.find('option[value="' + t + '"]').text()), s("ratingMade", !0), h(f()), v(c()), w(), n.silent || n.onSelect.call(this, f(), c()))
            }, this.clear = function () {
                var t = l("userOptions");
                s("ratingValue", l("originalRatingValue")), s("ratingText", l("originalRatingText")), s("ratingMade", !1), m(), v(c()), w(), t.onClear.call(this, f(), c())
            }, this.destroy = function () {
                var t = f(), n = c(), a = l("userOptions");
                T(e.$widget.find("a")), e.$widget.remove(), d(), i(), e.$elem.show(), a.onDestroy.call(this, t, n)
            }
        }

        return e.prototype.init = function (e, n) {
            return this.$elem = t(n), this.options = t.extend({}, t.fn.barrating.defaults, e), this.options
        }, e
    }();
    t.fn.barrating = function (n, i) {
        return this.each(function () {
            var a = new e;
            if (t(this).is("select") || t.error("Sorry, this plugin only works with select fields."), a.hasOwnProperty(n)) {
                if (a.init(i, this), "show" === n) return a.show(i);
                if (a.$elem.data("barrating")) return a.$widget = t(this).next(".br-widget"), a[n](i)
            } else {
                if ("object" == typeof n || !n) return i = n, a.init(i, this), a.show();
                t.error("Method " + n + " does not exist on jQuery.barrating")
            }
        })
    }, t.fn.barrating.defaults = {
        theme: "", initialRating: null, allowEmpty: null, emptyValue: "", showValues: !1, showSelectedRating: !0, deselectable: !0, reverse: !1, readonly: !1, fastClicks: !0, hoverState: !0, silent: !1, triggerChange: !0, onSelect: function (t, e, n) {
        }, onClear: function (t, e) {
        }, onDestroy: function (t, e) {
        }
    }, t.fn.barrating.BarRating = e
});