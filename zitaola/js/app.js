(function() {
  function e(e, t) {
    if (e !== t) {
      var n = null === e,
        i = e === b,
        a = e === e,
        r = null === t,
        s = t === b,
        o = t === t;
      if (e > t && !r || !a || n && !s && o || i && o) return 1;
      if (t > e && !n || !o || r && !i && a || s && a) return -1
    }
    return 0
  }

  function t(e, t, n) {
    for (var i = e.length, a = n ? i : -1; n ? a-- : ++a < i;)
      if (t(e[a], a, e)) return a;
    return -1
  }

  function n(e, t, n) {
    if (t !== t) return p(e, n);
    n -= 1;
    for (var i = e.length; ++n < i;)
      if (e[n] === t) return n;
    return -1
  }

  function i(e) {
    return "function" == typeof e || !1
  }

  function a(e) {
    return "string" == typeof e ? e : null == e ? "" : e + ""
  }

  function r(e, t) {
    for (var n = -1, i = e.length; ++n < i && -1 < t.indexOf(e.charAt(n)););
    return n
  }

  function s(e, t) {
    for (var n = e.length; n-- && -1 < t.indexOf(e.charAt(n)););
    return n
  }

  function o(t, n) {
    return e(t.a, n.a) || t.b - n.b
  }

  function l(e) {
    return jt[e]
  }

  function u(e) {
    return Dt[e]
  }

  function c(e) {
    return "\\" + Rt[e]
  }

  function p(e, t, n) {
    var i = e.length;
    for (t += n ? 0 : -1; n ? t-- : ++t < i;) {
      var a = e[t];
      if (a !== a) return t
    }
    return -1
  }

  function d(e) {
    return !!e && "object" == typeof e
  }

  function h(e) {
    return 160 >= e && e >= 9 && 13 >= e || 32 == e || 160 == e || 5760 == e || 6158 == e || e >= 8192 && (8202 >= e || 8232 == e || 8233 == e || 8239 == e || 8287 == e || 12288 == e || 65279 == e)
  }

  function _(e, t) {
    for (var n = -1, i = e.length, a = -1, r = []; ++n < i;) e[n] === t && (e[n] = B, r[++a] = n);
    return r
  }

  function m(e) {
    for (var t = -1, n = e.length; ++t < n && h(e.charCodeAt(t)););
    return t
  }

  function f(e) {
    for (var t = e.length; t-- && h(e.charCodeAt(t)););
    return t
  }

  function g(e) {
    return $t[e]
  }

  function v(h) {
    function jt(e) {
      if (d(e) && !(Fs(e) || e instanceof Bt)) {
        if (e instanceof $t) return e;
        if (tr.call(e, "__chain__") && tr.call(e, "__wrapped__")) return Ni(e)
      }
      return new $t(e)
    }

    function Dt() {}

    function $t(e, t, n) {
      this.__wrapped__ = e, this.__actions__ = n || [], this.__chain__ = !!t
    }

    function Bt(e) {
      this.__wrapped__ = e, this.__actions__ = null, this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = null, this.__takeCount__ = Ar, this.__views__ = null
    }

    function Rt() {
      this.__data__ = {}
    }

    function Nt(e) {
      var t = e ? e.length : 0;
      for (this.data = {
          hash: br(null),
          set: new hr
        }; t--;) this.push(e[t])
    }

    function Ut(e, t) {
      var n = e.data;
      return ("string" == typeof t || ma(t) ? n.set.has(t) : n.hash[t]) ? 0 : -1
    }

    function Vt(e, t) {
      var n = -1,
        i = e.length;
      for (t || (t = Na(i)); ++n < i;) t[n] = e[n];
      return t
    }

    function Ot(e, t) {
      for (var n = -1, i = e.length; ++n < i && !1 !== t(e[n], n, e););
      return e
    }

    function zt(e, t) {
      for (var n = -1, i = e.length; ++n < i;)
        if (!t(e[n], n, e)) return !1;
      return !0
    }

    function Yt(e, t) {
      for (var n = -1, i = e.length, a = -1, r = []; ++n < i;) {
        var s = e[n];
        t(s, n, e) && (r[++a] = s)
      }
      return r
    }

    function qt(e, t) {
      for (var n = -1, i = e.length, a = Na(i); ++n < i;) a[n] = t(e[n], n, e);
      return a
    }

    function Kt(e, t, n, i) {
      var a = -1,
        r = e.length;
      for (i && r && (n = e[++a]); ++a < r;) n = t(n, e[a], a, e);
      return n
    }

    function Xt(e, t) {
      for (var n = -1, i = e.length; ++n < i;)
        if (t(e[n], n, e)) return !0;
      return !1
    }

    function Jt(e, t) {
      return e === b ? t : e
    }

    function Zt(e, t, n, i) {
      return e !== b && tr.call(i, n) ? e : t
    }

    function Qt(e, t, n) {
      for (var i = -1, a = Vs(t), r = a.length; ++i < r;) {
        var s = a[i],
          o = e[s],
          l = n(o, t[s], s, e, t);
        (l === l ? l === o : o !== o) && (o !== b || s in e) || (e[s] = l)
      }
      return e
    }

    function en(e, t) {
      return null == t ? e : nn(t, Vs(t), e)
    }

    function tn(e, t) {
      for (var n = -1, i = null == e, a = !i && Wi(e), r = a ? e.length : 0, s = t.length, o = Na(s); ++n < s;) {
        var l = t[n];
        o[n] = a ? xi(l, r) ? e[l] : b : i ? b : e[l]
      }
      return o
    }

    function nn(e, t, n) {
      n || (n = {});
      for (var i = -1, a = t.length; ++i < a;) {
        var r = t[i];
        n[r] = e[r]
      }
      return n
    }

    function an(e, t, n) {
      var i = typeof e;
      return "function" == i ? t === b ? e : Nn(e, t, n) : null == e ? ja : "object" == i ? wn(e) : t === b ? Ra(e) : kn(e, t)
    }

    function rn(e, t, n, i, a, r, s) {
      var o;
      if (n && (o = a ? n(e, i, a) : n(e)), o !== b) return o;
      if (!ma(e)) return e;
      if (i = Fs(e)) {
        if (o = Si(e), !t) return Vt(e, o)
      } else {
        var l = ir.call(e),
          u = l == z;
        if (l != G && l != R && (!u || a)) return Mt[l] ? Pi(e, l, t) : a ? e : {};
        if (o = Ci(u ? {} : e), !t) return en(o, e)
      }
      for (r || (r = []), s || (s = []), a = r.length; a--;)
        if (r[a] == e) return s[a];
      return r.push(e), s.push(o), (i ? Ot : _n)(e, function(i, a) {
        o[a] = rn(i, t, n, a, e, r, s)
      }), o
    }

    function sn(e, t, n) {
      if ("function" != typeof e) throw new Ka($);
      return _r(function() {
        e.apply(b, n)
      }, t)
    }

    function on(e, t) {
      var i = e ? e.length : 0,
        a = [];
      if (!i) return a;
      var r = -1,
        s = yi(),
        o = s == n,
        l = o && 200 <= t.length ? Or(t) : null,
        u = t.length;
      l && (s = Ut, o = !1, t = l);
      e: for (; ++r < i;)
        if (l = e[r], o && l === l) {
          for (var c = u; c--;)
            if (t[c] === l) continue e;
          a.push(l)
        } else 0 > s(t, l, 0) && a.push(l);
      return a
    }

    function ln(e, t) {
      var n = !0;
      return Br(e, function(e, i, a) {
        return n = !!t(e, i, a)
      }), n
    }

    function un(e, t, n, i) {
      var a = i,
        r = a;
      return Br(e, function(e, s, o) {
        s = +t(e, s, o), (n(s, a) || s === i && s === r) && (a = s, r = e)
      }), r
    }

    function cn(e, t) {
      var n = [];
      return Br(e, function(e, i, a) {
        t(e, i, a) && n.push(e)
      }), n
    }

    function pn(e, t, n, i) {
      var a;
      return n(e, function(e, n, r) {
        return t(e, n, r) ? (a = i ? n : e, !1) : void 0
      }), a
    }

    function dn(e, t, n) {
      for (var i = -1, a = e.length, r = -1, s = []; ++i < a;) {
        var o = e[i];
        if (d(o) && Wi(o) && (n || Fs(o) || pa(o))) {
          t && (o = dn(o, t, n));
          for (var l = -1, u = o.length; ++l < u;) s[++r] = o[l]
        } else n || (s[++r] = o)
      }
      return s
    }

    function hn(e, t) {
      Nr(e, t, Ca)
    }

    function _n(e, t) {
      return Nr(e, t, Vs)
    }

    function mn(e, t) {
      return Ur(e, t, Vs)
    }

    function fn(e, t) {
      for (var n = -1, i = t.length, a = -1, r = []; ++n < i;) {
        var s = t[n];
        Ls(e[s]) && (r[++a] = s)
      }
      return r
    }

    function gn(e, t, n) {
      if (null != e) {
        n !== b && n in Bi(e) && (t = [n]), n = 0;
        for (var i = t.length; null != e && i > n;) e = e[t[n++]];
        return n && n == i ? e : b
      }
    }

    function vn(e, t, n, i, a, r) {
      if (e === t) e = !0;
      else if (null == e || null == t || !ma(e) && !ma(t)) e = e !== e && t !== t;
      else e: {
        var s = vn,
          o = Fs(e),
          l = Fs(t),
          u = N,
          c = N;
        o || (u = ir.call(e), u == R ? u = G : u != G && (o = ya(e))), l || (c = ir.call(t), c == R ? c = G : c != G && ya(t));
        var p = u == G,
          l = c == G,
          c = u == c;
        if (!c || o || p) {
          if (!i && (u = p && tr.call(e, "__wrapped__"), l = l && tr.call(t, "__wrapped__"), u || l)) {
            e = s(u ? e.value() : e, l ? t.value() : t, n, i, a, r);
            break e
          }
          if (c) {
            for (a || (a = []), r || (r = []), u = a.length; u--;)
              if (a[u] == e) {
                e = r[u] == t;
                break e
              }
            a.push(e), r.push(t), e = (o ? mi : gi)(e, t, s, n, i, a, r), a.pop(), r.pop()
          } else e = !1
        } else e = fi(e, t, u)
      }
      return e
    }

    function bn(e, t, n) {
      var i = t.length,
        a = i,
        r = !n;
      if (null == e) return !a;
      for (e = Bi(e); i--;) {
        var s = t[i];
        if (r && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
      }
      for (; ++i < a;) {
        var s = t[i],
          o = s[0],
          l = e[o],
          u = s[1];
        if (r && s[2]) {
          if (l === b && !(o in e)) return !1
        } else if (s = n ? n(l, u, o) : b, s === b ? !vn(u, l, n, !0) : !s) return !1
      }
      return !0
    }

    function yn(e, t) {
      var n = -1,
        i = Wi(e) ? Na(e.length) : [];
      return Br(e, function(e, a, r) {
        i[++n] = t(e, a, r)
      }), i
    }

    function wn(e) {
      var t = wi(e);
      if (1 == t.length && t[0][2]) {
        var n = t[0][0],
          i = t[0][1];
        return function(e) {
          return null == e ? !1 : e[n] === i && (i !== b || n in Bi(e))
        }
      }
      return function(e) {
        return bn(e, t)
      }
    }

    function kn(e, t) {
      var n = Fs(e),
        i = Fi(e) && t === t && !ma(t),
        a = e + "";
      return e = Ri(e),
        function(r) {
          if (null == r) return !1;
          var s = a;
          if (r = Bi(r), !(!n && i || s in r)) {
            if (r = 1 == e.length ? r : gn(r, An(e, 0, -1)), null == r) return !1;
            s = Hi(e), r = Bi(r)
          }
          return r[s] === t ? t !== b || s in r : vn(t, r[s], b, !0)
        }
    }

    function Sn(e, t, n, i, a) {
      if (!ma(e)) return e;
      var r = Wi(t) && (Fs(t) || ya(t)),
        s = r ? null : Vs(t);
      return Ot(s || t, function(o, l) {
        if (s && (l = o, o = t[l]), d(o)) {
          i || (i = []), a || (a = []);
          e: {
            for (var u = l, c = i, p = a, h = c.length, _ = t[u]; h--;)
              if (c[h] == _) {
                e[u] = p[h];
                break e
              }
            var h = e[u],
              m = n ? n(h, _, u, e, t) : b,
              f = m === b;
            f && (m = _, Wi(_) && (Fs(_) || ya(_)) ? m = Fs(h) ? h : Wi(h) ? Vt(h) : [] : Ms(_) || pa(_) ? m = pa(h) ? ka(h) : Ms(h) ? h : {} : f = !1), c.push(_), p.push(m), f ? e[u] = Sn(m, _, n, c, p) : (m === m ? m !== h : h === h) && (e[u] = m)
          }
        } else u = e[l], c = n ? n(u, o, l, e, t) : b, (p = c === b) && (c = o), c === b && (!r || l in e) || !p && (c === c ? c === u : u !== u) || (e[l] = c)
      }), e
    }

    function Cn(e) {
      return function(t) {
        return null == t ? b : t[e]
      }
    }

    function Pn(e) {
      var t = e + "";
      return e = Ri(e),
        function(n) {
          return gn(n, e, t)
        }
    }

    function Tn(e, t) {
      for (var n = e ? t.length : 0; n--;) {
        var i = t[n];
        if (i != a && xi(i)) {
          var a = i;
          mr.call(e, i, 1)
        }
      }
    }

    function Wn(e, t) {
      return e + cr(xr() * (t - e + 1))
    }

    function xn(e, t, n, i, a) {
      return a(e, function(e, a, r) {
        n = i ? (i = !1, e) : t(n, e, a, r)
      }), n
    }

    function An(e, t, n) {
      var i = -1,
        a = e.length;
      for (t = null == t ? 0 : +t || 0, 0 > t && (t = -t > a ? 0 : a + t), n = n === b || n > a ? a : +n || 0, 0 > n && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0, n = Na(a); ++i < a;) n[i] = e[i + t];
      return n
    }

    function Fn(e, t) {
      var n;
      return Br(e, function(e, i, a) {
        return n = t(e, i, a), !n
      }), !!n
    }

    function In(e, t) {
      var n = e.length;
      for (e.sort(t); n--;) e[n] = e[n].c;
      return e
    }

    function Ln(t, n, i) {
      var a = vi(),
        r = -1;
      return n = qt(n, function(e) {
        return a(e)
      }), t = yn(t, function(e) {
        return {
          a: qt(n, function(t) {
            return t(e)
          }),
          b: ++r,
          c: e
        }
      }), In(t, function(t, n) {
        var a;
        e: {
          a = -1;
          for (var r = t.a, s = n.a, o = r.length, l = i.length; ++a < o;) {
            var u = e(r[a], s[a]);
            if (u) {
              a = l > a ? u * (i[a] ? 1 : -1) : u;
              break e
            }
          }
          a = t.b - n.b
        }
        return a
      })
    }

    function Mn(e, t) {
      var n = 0;
      return Br(e, function(e, i, a) {
        n += +t(e, i, a) || 0
      }), n
    }

    function En(e, t) {
      var i = -1,
        a = yi(),
        r = e.length,
        s = a == n,
        o = s && r >= 200,
        l = o ? Or() : null,
        u = [];
      l ? (a = Ut, s = !1) : (o = !1, l = t ? [] : u);
      e: for (; ++i < r;) {
        var c = e[i],
          p = t ? t(c, i, e) : c;
        if (s && c === c) {
          for (var d = l.length; d--;)
            if (l[d] === p) continue e;
          t && l.push(p), u.push(c)
        } else 0 > a(l, p, 0) && ((t || o) && l.push(p), u.push(c))
      }
      return u
    }

    function jn(e, t) {
      for (var n = -1, i = t.length, a = Na(i); ++n < i;) a[n] = e[t[n]];
      return a
    }

    function Dn(e, t, n, i) {
      for (var a = e.length, r = i ? a : -1;
        (i ? r-- : ++r < a) && t(e[r], r, e););
      return n ? An(e, i ? 0 : r, i ? r + 1 : a) : An(e, i ? r + 1 : 0, i ? a : r)
    }

    function $n(e, t) {
      var n = e;
      n instanceof Bt && (n = n.value());
      for (var i = -1, a = t.length; ++i < a;) {
        var n = [n],
          r = t[i];
        dr.apply(n, r.args), n = r.func.apply(r.thisArg, n)
      }
      return n
    }

    function Bn(e, t, n) {
      var i = 0,
        a = e ? e.length : i;
      if ("number" == typeof t && t === t && Ir >= a) {
        for (; a > i;) {
          var r = i + a >>> 1,
            s = e[r];
          (n ? t >= s : t > s) && null !== s ? i = r + 1 : a = r
        }
        return a
      }
      return Rn(e, t, ja, n)
    }

    function Rn(e, t, n, i) {
      t = n(t);
      for (var a = 0, r = e ? e.length : 0, s = t !== t, o = null === t, l = t === b; r > a;) {
        var u = cr((a + r) / 2),
          c = n(e[u]),
          p = c !== b,
          d = c === c;
        (s ? d || i : o ? d && p && (i || null != c) : l ? d && (i || p) : null == c ? 0 : i ? t >= c : t > c) ? a = u + 1: r = u
      }
      return Cr(r, Fr)
    }

    function Nn(e, t, n) {
      if ("function" != typeof e) return ja;
      if (t === b) return e;
      switch (n) {
        case 1:
          return function(n) {
            return e.call(t, n)
          };
        case 3:
          return function(n, i, a) {
            return e.call(t, n, i, a)
          };
        case 4:
          return function(n, i, a, r) {
            return e.call(t, n, i, a, r)
          };
        case 5:
          return function(n, i, a, r, s) {
            return e.call(t, n, i, a, r, s)
          }
      }
      return function() {
        return e.apply(t, arguments)
      }
    }

    function Un(e) {
      return or.call(e, 0)
    }

    function Vn(e, t, n) {
      for (var i = n.length, a = -1, r = Sr(e.length - i, 0), s = -1, o = t.length, l = Na(r + o); ++s < o;) l[s] = t[s];
      for (; ++a < i;) l[n[a]] = e[a];
      for (; r--;) l[s++] = e[a++];
      return l
    }

    function On(e, t, n) {
      for (var i = -1, a = n.length, r = -1, s = Sr(e.length - a, 0), o = -1, l = t.length, u = Na(s + l); ++r < s;) u[r] = e[r];
      for (s = r; ++o < l;) u[s + o] = t[o];
      for (; ++i < a;) u[s + n[i]] = e[r++];
      return u
    }

    function zn(e, t) {
      return function(n, i, a) {
        var r = t ? t() : {};
        if (i = vi(i, a, 3), Fs(n)) {
          a = -1;
          for (var s = n.length; ++a < s;) {
            var o = n[a];
            e(r, o, i(o, a, n), n)
          }
        } else Br(n, function(t, n, a) {
          e(r, t, i(t, n, a), a)
        });
        return r
      }
    }

    function Hn(e) {
      return ua(function(t, n) {
        var i = -1,
          a = null == t ? 0 : n.length,
          r = a > 2 ? n[a - 2] : b,
          s = a > 2 ? n[2] : b,
          o = a > 1 ? n[a - 1] : b;
        for ("function" == typeof r ? (r = Nn(r, o, 5), a -= 2) : (r = "function" == typeof o ? o : b, a -= r ? 1 : 0), s && Ai(n[0], n[1], s) && (r = 3 > a ? b : r, a = 1); ++i < a;)(s = n[i]) && e(t, s, r);
        return t
      })
    }

    function Gn(e, t) {
      return function(n, i) {
        var a = n ? Hr(n) : 0;
        if (!Li(a)) return e(n, i);
        for (var r = t ? a : -1, s = Bi(n);
          (t ? r-- : ++r < a) && !1 !== i(s[r], r, s););
        return n
      }
    }

    function Yn(e) {
      return function(t, n, i) {
        var a = Bi(t);
        i = i(t);
        for (var r = i.length, s = e ? r : -1; e ? s-- : ++s < r;) {
          var o = i[s];
          if (!1 === n(a[o], o, a)) break
        }
        return t
      }
    }

    function qn(e, t) {
      function n() {
        return (this && this !== Ht && this instanceof n ? i : e).apply(t, arguments)
      }
      var i = Xn(e);
      return n
    }

    function Kn(e) {
      return function(t) {
        var n = -1;
        t = La(Wa(t));
        for (var i = t.length, a = ""; ++n < i;) a = e(a, t[n], n);
        return a
      }
    }

    function Xn(e) {
      return function() {
        var t = arguments;
        switch (t.length) {
          case 0:
            return new e;
          case 1:
            return new e(t[0]);
          case 2:
            return new e(t[0], t[1]);
          case 3:
            return new e(t[0], t[1], t[2]);
          case 4:
            return new e(t[0], t[1], t[2], t[3]);
          case 5:
            return new e(t[0], t[1], t[2], t[3], t[4])
        }
        var n = $r(e.prototype),
          t = e.apply(n, t);
        return ma(t) ? t : n
      }
    }

    function Jn(e) {
      function t(n, i, a) {
        return a && Ai(n, i, a) && (i = null), n = _i(n, e, null, null, null, null, null, i), n.placeholder = t.placeholder, n
      }
      return t
    }

    function Zn(e, t) {
      return function(n, i, a) {
        if (a && Ai(n, i, a) && (i = null), i = vi(i, a, 3), 1 == i.length) {
          a = n = $i(n);
          for (var r = i, s = -1, o = a.length, l = t, u = l; ++s < o;) {
            var c = a[s],
              p = +r(c);
            e(p, l) && (l = p, u = c)
          }
          if (a = u, !n.length || a !== t) return a
        }
        return un(n, i, e, t)
      }
    }

    function Qn(e, n) {
      return function(i, a, r) {
        return a = vi(a, r, 3), Fs(i) ? (a = t(i, a, n), a > -1 ? i[a] : b) : pn(i, a, e)
      }
    }

    function ei(e) {
      return function(n, i, a) {
        return n && n.length ? (i = vi(i, a, 3), t(n, i, e)) : -1
      }
    }

    function ti(e) {
      return function(t, n, i) {
        return n = vi(n, i, 3), pn(t, n, e, !0)
      }
    }

    function ni(e) {
      return function() {
        for (var t, n = arguments.length, i = e ? n : -1, a = 0, r = Na(n); e ? i-- : ++i < n;) {
          var s = r[a++] = arguments[i];
          if ("function" != typeof s) throw new Ka($);
          !t && $t.prototype.thru && "wrapper" == bi(s) && (t = new $t([]))
        }
        for (i = t ? -1 : n; ++i < n;) {
          var s = r[i],
            a = bi(s),
            o = "wrapper" == a ? zr(s) : null;
          t = o && Ii(o[0]) && o[1] == (x | C | T | A) && !o[4].length && 1 == o[9] ? t[bi(o[0])].apply(t, o[3]) : 1 == s.length && Ii(s) ? t[a]() : t.thru(s)
        }
        return function() {
          var e = arguments;
          if (t && 1 == e.length && Fs(e[0])) return t.plant(e[0]).value();
          for (var i = 0, e = n ? r[i].apply(this, e) : e[0]; ++i < n;) e = r[i].call(this, e);
          return e
        }
      }
    }

    function ii(e, t) {
      return function(n, i, a) {
        return "function" == typeof i && a === b && Fs(n) ? e(n, i) : t(n, Nn(i, a, 3))
      }
    }

    function ai(e) {
      return function(t, n, i) {
        return ("function" != typeof n || i !== b) && (n = Nn(n, i, 3)), e(t, n, Ca)
      }
    }

    function ri(e) {
      return function(t, n, i) {
        return ("function" != typeof n || i !== b) && (n = Nn(n, i, 3)), e(t, n)
      }
    }

    function si(e) {
      return function(t, n, i) {
        var a = {};
        return n = vi(n, i, 3), _n(t, function(t, i, r) {
          r = n(t, i, r), i = e ? r : i, t = e ? t : r, a[i] = t
        }), a
      }
    }

    function oi(e) {
      return function(t, n, i) {
        return t = a(t), (e ? t : "") + pi(t, n, i) + (e ? "" : t)
      }
    }

    function li(e) {
      var t = ua(function(n, i) {
        var a = _(i, t.placeholder);
        return _i(n, e, null, i, a)
      });
      return t
    }

    function ui(e, t) {
      return function(n, i, a, r) {
        var s = 3 > arguments.length;
        return "function" == typeof i && r === b && Fs(n) ? e(n, i, a, s) : xn(n, vi(i, r, 4), a, s, t)
      }
    }

    function ci(e, t, n, i, a, r, s, o, l, u) {
      function c() {
        for (var y = arguments.length, S = y, C = Na(y); S--;) C[S] = arguments[S];
        if (i && (C = Vn(C, i, a)), r && (C = On(C, r, s)), m || g) {
          var S = c.placeholder,
            P = _(C, S),
            y = y - P.length;
          if (u > y) {
            var x = o ? Vt(o) : null,
              y = Sr(u - y, 0),
              A = m ? P : null,
              P = m ? null : P,
              F = m ? C : null,
              C = m ? null : C;
            return t |= m ? T : W, t &= ~(m ? W : T), f || (t &= ~(w | k)), C = [e, t, n, F, A, C, P, x, l, y], x = ci.apply(b, C), Ii(e) && Gr(x, C), x.placeholder = S, x
          }
        }
        if (S = d ? n : this, x = h ? S[e] : e, o)
          for (y = C.length, A = Cr(o.length, y), P = Vt(C); A--;) F = o[A], C[A] = xi(F, y) ? P[F] : b;
        return p && l < C.length && (C.length = l), this && this !== Ht && this instanceof c && (x = v || Xn(e)), x.apply(S, C)
      }
      var p = t & x,
        d = t & w,
        h = t & k,
        m = t & C,
        f = t & S,
        g = t & P,
        v = h ? null : Xn(e);
      return c
    }

    function pi(e, t, n) {
      return e = e.length, t = +t, t > e && wr(t) ? (t -= e, n = null == n ? " " : n + "", Fa(n, lr(t / n.length)).slice(0, t)) : ""
    }

    function di(e, t, n, i) {
      function a() {
        for (var t = -1, o = arguments.length, l = -1, u = i.length, c = Na(o + u); ++l < u;) c[l] = i[l];
        for (; o--;) c[l++] = arguments[++t];
        return (this && this !== Ht && this instanceof a ? s : e).apply(r ? n : this, c)
      }
      var r = t & w,
        s = Xn(e);
      return a
    }

    function hi(e) {
      return function(t, n, i, a) {
        var r = vi(i);
        return null == i && r === an ? Bn(t, n, e) : Rn(t, n, r(i, a, 1), e)
      }
    }

    function _i(e, t, n, i, a, r, s, o) {
      var l = t & k;
      if (!l && "function" != typeof e) throw new Ka($);
      var u = i ? i.length : 0;
      if (u || (t &= ~(T | W), i = a = null), u -= a ? a.length : 0, t & W) {
        var c = i,
          p = a;
        i = a = null
      }
      var d = l ? null : zr(e);
      return n = [e, t, n, i, a, c, p, r, s, o], d && (i = n[1], t = d[1], o = i | t, a = t == x && i == C || t == x && i == A && n[7].length <= d[8] || t == (x | A) && i == C, (x > o || a) && (t & w && (n[2] = d[2], o |= i & w ? 0 : S), (i = d[3]) && (a = n[3], n[3] = a ? Vn(a, i, d[4]) : Vt(i), n[4] = a ? _(n[3], B) : Vt(d[4])), (i = d[5]) && (a = n[5], n[5] = a ? On(a, i, d[6]) : Vt(i), n[6] = a ? _(n[5], B) : Vt(d[6])), (i = d[7]) && (n[7] = Vt(i)), t & x && (n[8] = null == n[8] ? d[8] : Cr(n[8], d[8])), null == n[9] && (n[9] = d[9]), n[0] = d[0], n[1] = o), t = n[1], o = n[9]), n[9] = null == o ? l ? 0 : e.length : Sr(o - u, 0) || 0, (d ? Vr : Gr)(t == w ? qn(n[0], n[2]) : t != T && t != (w | T) || n[4].length ? ci.apply(b, n) : di.apply(b, n), n)
    }

    function mi(e, t, n, i, a, r, s) {
      var o = -1,
        l = e.length,
        u = t.length;
      if (l != u && (!a || l >= u)) return !1;
      for (; ++o < l;) {
        var c = e[o],
          u = t[o],
          p = i ? i(a ? u : c, a ? c : u, o) : b;
        if (p !== b) {
          if (p) continue;
          return !1
        }
        if (a) {
          if (!Xt(t, function(e) {
              return c === e || n(c, e, i, a, r, s)
            })) return !1
        } else if (c !== u && !n(c, u, i, a, r, s)) return !1
      }
      return !0
    }

    function fi(e, t, n) {
      switch (n) {
        case U:
        case V:
          return +e == +t;
        case O:
          return e.name == t.name && e.message == t.message;
        case H:
          return e != +e ? t != +t : e == +t;
        case Y:
        case q:
          return e == t + ""
      }
      return !1
    }

    function gi(e, t, n, i, a, r, s) {
      var o = Vs(e),
        l = o.length,
        u = Vs(t).length;
      if (l != u && !a) return !1;
      for (u = l; u--;) {
        var c = o[u];
        if (!(a ? c in t : tr.call(t, c))) return !1
      }
      for (var p = a; ++u < l;) {
        var c = o[u],
          d = e[c],
          h = t[c],
          _ = i ? i(a ? h : d, a ? d : h, c) : b;
        if (_ === b ? !n(d, h, i, a, r, s) : !_) return !1;
        p || (p = "constructor" == c)
      }
      return p || (n = e.constructor, i = t.constructor, !(n != i && "constructor" in e && "constructor" in t) || "function" == typeof n && n instanceof n && "function" == typeof i && i instanceof i) ? !0 : !1
    }

    function vi(e, t, n) {
      var i = jt.callback || Ma,
        i = i === Ma ? an : i;
      return n ? i(e, t, n) : i
    }

    function bi(e) {
      for (var t = e.name, n = jr[t], i = n ? n.length : 0; i--;) {
        var a = n[i],
          r = a.func;
        if (null == r || r == e) return a.name
      }
      return t
    }

    function yi(e, t, i) {
      var a = jt.indexOf || zi,
        a = a === zi ? n : a;
      return e ? a(e, t, i) : a
    }

    function wi(e) {
      e = Pa(e);
      for (var t = e.length; t--;) {
        var n = e[t][1];
        e[t][2] = n === n && !ma(n)
      }
      return e
    }

    function ki(e, t) {
      var n = null == e ? b : e[t];
      return fa(n) ? n : b
    }

    function Si(e) {
      var t = e.length,
        n = new e.constructor(t);
      return t && "string" == typeof e[0] && tr.call(e, "index") && (n.index = e.index, n.input = e.input), n
    }

    function Ci(e) {
      return e = e.constructor, "function" == typeof e && e instanceof e || (e = Ga), new e
    }

    function Pi(e, t, n) {
      var i = e.constructor;
      switch (t) {
        case K:
          return Un(e);
        case U:
        case V:
          return new i(+e);
        case X:
        case J:
        case Z:
        case Q:
        case et:
        case tt:
        case nt:
        case it:
        case at:
          return t = e.buffer, new i(n ? Un(t) : t, e.byteOffset, e.length);
        case H:
        case q:
          return new i(e);
        case Y:
          var a = new i(e.source, St.exec(e));
          a.lastIndex = e.lastIndex
      }
      return a
    }

    function Ti(e, t, n) {
      return null == e || Fi(t, e) || (t = Ri(t), e = 1 == t.length ? e : gn(e, An(t, 0, -1)), t = Hi(t)), t = null == e ? e : e[t], null == t ? b : t.apply(e, n)
    }

    function Wi(e) {
      return null != e && Li(Hr(e))
    }

    function xi(e, t) {
      return e = "number" == typeof e ? e : parseFloat(e), t = null == t ? Mr : t, e > -1 && 0 == e % 1 && t > e
    }

    function Ai(e, t, n) {
      if (!ma(n)) return !1;
      var i = typeof t;
      return ("number" == i ? Wi(n) && xi(t, n.length) : "string" == i && t in n) ? (t = n[t], e === e ? e === t : t !== t) : !1
    }

    function Fi(e, t) {
      var n = typeof e;
      return "string" == n && ft.test(e) || "number" == n ? !0 : Fs(e) ? !1 : !mt.test(e) || null != t && e in Bi(t)
    }

    function Ii(e) {
      var t = bi(e);
      return !!t && e === jt[t] && t in Bt.prototype
    }

    function Li(e) {
      return "number" == typeof e && e > -1 && 0 == e % 1 && Mr >= e
    }

    function Mi(e, t) {
      e = Bi(e);
      for (var n = -1, i = t.length, a = {}; ++n < i;) {
        var r = t[n];
        r in e && (a[r] = e[r])
      }
      return a
    }

    function Ei(e, t) {
      var n = {};
      return hn(e, function(e, i, a) {
        t(e, i, a) && (n[i] = e)
      }), n
    }

    function ji(e) {
      var t;
      if (!d(e) || ir.call(e) != G || !(tr.call(e, "constructor") || (t = e.constructor, "function" != typeof t || t instanceof t))) return !1;
      var n;
      return hn(e, function(e, t) {
        n = t
      }), n === b || tr.call(e, n)
    }

    function Di(e) {
      for (var t = Ca(e), n = t.length, i = n && e.length, a = !!i && Li(i) && (Fs(e) || pa(e)), r = -1, s = []; ++r < n;) {
        var o = t[r];
        (a && xi(o, i) || tr.call(e, o)) && s.push(o)
      }
      return s
    }

    function $i(e) {
      return null == e ? [] : Wi(e) ? ma(e) ? e : Ga(e) : Ta(e)
    }

    function Bi(e) {
      return ma(e) ? e : Ga(e)
    }

    function Ri(e) {
      if (Fs(e)) return e;
      var t = [];
      return a(e).replace(gt, function(e, n, i, a) {
        t.push(i ? a.replace(wt, "$1") : n || e)
      }), t
    }

    function Ni(e) {
      return e instanceof Bt ? e.clone() : new $t(e.__wrapped__, e.__chain__, Vt(e.__actions__))
    }

    function Ui(e, t, n) {
      return e && e.length ? ((n ? Ai(e, t, n) : null == t) && (t = 1), An(e, 0 > t ? 0 : t)) : []
    }

    function Vi(e, t, n) {
      var i = e ? e.length : 0;
      return i ? ((n ? Ai(e, t, n) : null == t) && (t = 1), t = i - (+t || 0), An(e, 0, 0 > t ? 0 : t)) : []
    }

    function Oi(e) {
      return e ? e[0] : b
    }

    function zi(e, t, i) {
      var a = e ? e.length : 0;
      if (!a) return -1;
      if ("number" == typeof i) i = 0 > i ? Sr(a + i, 0) : i;
      else if (i) return i = Bn(e, t), e = e[i], (t === t ? t === e : e !== e) ? i : -1;
      return n(e, t, i || 0)
    }

    function Hi(e) {
      var t = e ? e.length : 0;
      return t ? e[t - 1] : b
    }

    function Gi(e) {
      return Ui(e, 1)
    }

    function Yi(e, t, i, a) {
      if (!e || !e.length) return [];
      null != t && "boolean" != typeof t && (a = i, i = Ai(e, t, a) ? null : t, t = !1);
      var r = vi();
      if ((null != i || r !== an) && (i = r(i, a, 3)), t && yi() == n) {
        t = i;
        var s;
        i = -1, a = e.length;
        for (var r = -1, o = []; ++i < a;) {
          var l = e[i],
            u = t ? t(l, i, e) : l;
          i && s === u || (s = u, o[++r] = l)
        }
        e = o
      } else e = En(e, i);
      return e
    }

    function qi(e) {
      if (!e || !e.length) return [];
      var t = -1,
        n = 0;
      e = Yt(e, function(e) {
        return Wi(e) ? (n = Sr(e.length, n), !0) : void 0
      });
      for (var i = Na(n); ++t < n;) i[t] = qt(e, Cn(t));
      return i
    }

    function Ki(e, t, n) {
      return e && e.length ? (e = qi(e), null == t ? e : (t = Nn(t, n, 4), qt(e, function(e) {
        return Kt(e, t, b, !0)
      }))) : []
    }

    function Xi(e, t) {
      var n = -1,
        i = e ? e.length : 0,
        a = {};
      for (!i || t || Fs(e[0]) || (t = []); ++n < i;) {
        var r = e[n];
        t ? a[r] = t[n] : r && (a[r[0]] = r[1])
      }
      return a
    }

    function Ji(e) {
      return e = jt(e), e.__chain__ = !0, e
    }

    function Zi(e, t, n) {
      return t.call(n, e)
    }

    function Qi(e, t, n) {
      var i = Fs(e) ? zt : ln;
      return n && Ai(e, t, n) && (t = null), ("function" != typeof t || n !== b) && (t = vi(t, n, 3)), i(e, t)
    }

    function ea(e, t, n) {
      var i = Fs(e) ? Yt : cn;
      return t = vi(t, n, 3), i(e, t)
    }

    function ta(e, t, n, i) {
      var a = e ? Hr(e) : 0;
      return Li(a) || (e = Ta(e), a = e.length), a ? (n = "number" != typeof n || i && Ai(t, n, i) ? 0 : 0 > n ? Sr(a + n, 0) : n || 0, "string" == typeof e || !Fs(e) && ba(e) ? a > n && -1 < e.indexOf(t, n) : -1 < yi(e, t, n)) : !1
    }

    function na(e, t, n) {
      var i = Fs(e) ? qt : yn;
      return t = vi(t, n, 3), i(e, t)
    }

    function ia(e, t, n) {
      return (n ? Ai(e, t, n) : null == t) ? (e = $i(e), t = e.length, t > 0 ? e[Wn(0, t - 1)] : b) : (e = aa(e), e.length = Cr(0 > t ? 0 : +t || 0, e.length), e)
    }

    function aa(e) {
      e = $i(e);
      for (var t = -1, n = e.length, i = Na(n); ++t < n;) {
        var a = Wn(0, t);
        t != a && (i[t] = i[a]), i[a] = e[t]
      }
      return i
    }

    function ra(e, t, n) {
      var i = Fs(e) ? Xt : Fn;
      return n && Ai(e, t, n) && (t = null), ("function" != typeof t || n !== b) && (t = vi(t, n, 3)), i(e, t)
    }

    function sa(e, t) {
      var n;
      if ("function" != typeof t) {
        if ("function" != typeof e) throw new Ka($);
        var i = e;
        e = t, t = i
      }
      return function() {
        return 0 < --e && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
      }
    }

    function oa(e, t, n) {
      function i() {
        var n = t - (gs() - u);
        0 >= n || n > t ? (o && ur(o), n = d, o = p = d = b, n && (h = gs(), l = e.apply(c, s), p || o || (s = c = null))) : p = _r(i, n)
      }

      function a() {
        p && ur(p), o = p = d = b, (m || _ !== t) && (h = gs(), l = e.apply(c, s), p || o || (s = c = null))
      }

      function r() {
        if (s = arguments, u = gs(), c = this, d = m && (p || !f), !1 === _) var n = f && !p;
        else {
          o || f || (h = u);
          var r = _ - (u - h),
            g = 0 >= r || r > _;
          g ? (o && (o = ur(o)), h = u, l = e.apply(c, s)) : o || (o = _r(a, r))
        }
        return g && p ? p = ur(p) : p || t === _ || (p = _r(i, t)), n && (g = !0, l = e.apply(c, s)), !g || p || o || (s = c = null), l
      }
      var s, o, l, u, c, p, d, h = 0,
        _ = !1,
        m = !0;
      if ("function" != typeof e) throw new Ka($);
      if (t = 0 > t ? 0 : +t || 0, !0 === n) var f = !0,
        m = !1;
      else ma(n) && (f = n.leading, _ = "maxWait" in n && Sr(+n.maxWait || 0, t), m = "trailing" in n ? n.trailing : m);
      return r.cancel = function() {
        p && ur(p), o && ur(o), o = p = d = b
      }, r
    }

    function la(e, t) {
      function n() {
        var i = arguments,
          a = t ? t.apply(this, i) : i[0],
          r = n.cache;
        return r.has(a) ? r.get(a) : (i = e.apply(this, i), n.cache = r.set(a, i), i)
      }
      if ("function" != typeof e || t && "function" != typeof t) throw new Ka($);
      return n.cache = new la.Cache, n
    }

    function ua(e, t) {
      if ("function" != typeof e) throw new Ka($);
      return t = Sr(t === b ? e.length - 1 : +t || 0, 0),
        function() {
          for (var n = arguments, i = -1, a = Sr(n.length - t, 0), r = Na(a); ++i < a;) r[i] = n[t + i];
          switch (t) {
            case 0:
              return e.call(this, r);
            case 1:
              return e.call(this, n[0], r);
            case 2:
              return e.call(this, n[0], n[1], r)
          }
          for (a = Na(t + 1), i = -1; ++i < t;) a[i] = n[i];
          return a[t] = r, e.apply(this, a)
        }
    }

    function ca(e, t) {
      return e > t
    }

    function pa(e) {
      return d(e) && Wi(e) && ir.call(e) == R
    }

    function da(e) {
      return !!e && 1 === e.nodeType && d(e) && -1 < ir.call(e).indexOf("Element")
    }

    function ha(e, t, n, i) {
      return i = (n = "function" == typeof n ? Nn(n, i, 3) : b) ? n(e, t) : b, i === b ? vn(e, t, n) : !!i
    }

    function _a(e) {
      return d(e) && "string" == typeof e.message && ir.call(e) == O
    }

    function ma(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t)
    }

    function fa(e) {
      return null == e ? !1 : ir.call(e) == z ? rr.test(er.call(e)) : d(e) && Pt.test(e)
    }

    function ga(e) {
      return "number" == typeof e || d(e) && ir.call(e) == H
    }

    function va(e) {
      return d(e) && ir.call(e) == Y
    }

    function ba(e) {
      return "string" == typeof e || d(e) && ir.call(e) == q
    }

    function ya(e) {
      return d(e) && Li(e.length) && !!Lt[ir.call(e)]
    }

    function wa(e, t) {
      return t > e
    }

    function ka(e) {
      return nn(e, Ca(e))
    }

    function Sa(e) {
      return fn(e, Ca(e))
    }

    function Ca(e) {
      if (null == e) return [];
      ma(e) || (e = Ga(e));
      for (var t = e.length, t = t && Li(t) && (Fs(e) || pa(e)) && t || 0, n = e.constructor, i = -1, n = "function" == typeof n && n.prototype === e, a = Na(t), r = t > 0; ++i < t;) a[i] = i + "";
      for (var s in e) r && xi(s, t) || "constructor" == s && (n || !tr.call(e, s)) || a.push(s);
      return a
    }

    function Pa(e) {
      e = Bi(e);
      for (var t = -1, n = Vs(e), i = n.length, a = Na(i); ++t < i;) {
        var r = n[t];
        a[t] = [r, e[r]]
      }
      return a
    }

    function Ta(e) {
      return jn(e, Vs(e))
    }

    function Wa(e) {
      return (e = a(e)) && e.replace(Tt, l).replace(yt, "")
    }

    function xa(e) {
      return (e = a(e)) && bt.test(e) ? e.replace(vt, "\\$&") : e
    }

    function Aa(e, t, n) {
      return n && Ai(e, t, n) && (t = 0), Wr(e, t)
    }

    function Fa(e, t) {
      var n = "";
      if (e = a(e), t = +t, 1 > t || !e || !wr(t)) return n;
      do t % 2 && (n += e), t = cr(t / 2), e += e; while (t);
      return n
    }

    function Ia(e, t, n) {
      var i = e;
      return (e = a(e)) ? (n ? Ai(i, t, n) : null == t) ? e.slice(m(e), f(e) + 1) : (t += "", e.slice(r(e, t), s(e, t) + 1)) : e
    }

    function La(e, t, n) {
      return n && Ai(e, t, n) && (t = null), e = a(e), e.match(t || At) || []
    }

    function Ma(e, t, n) {
      return n && Ai(e, t, n) && (t = null), d(e) ? Da(e) : an(e, t)
    }

    function Ea(e) {
      return function() {
        return e
      }
    }

    function ja(e) {
      return e
    }

    function Da(e) {
      return wn(rn(e, !0))
    }

    function $a(e, t, n) {
      if (null == n) {
        var i = ma(t),
          a = i ? Vs(t) : null;
        ((a = a && a.length ? fn(t, a) : null) ? a.length : i) || (a = !1, n = t, t = e, e = this)
      }
      a || (a = fn(t, Vs(t)));
      var r = !0,
        i = -1,
        s = Ls(e),
        o = a.length;
      !1 === n ? r = !1 : ma(n) && "chain" in n && (r = n.chain);
      for (; ++i < o;) {
        n = a[i];
        var l = t[n];
        e[n] = l, s && (e.prototype[n] = function(t) {
          return function() {
            var n = this.__chain__;
            if (r || n) {
              var i = e(this.__wrapped__);
              return (i.__actions__ = Vt(this.__actions__)).push({
                func: t,
                args: arguments,
                thisArg: e
              }), i.__chain__ = n, i
            }
            return n = [this.value()], dr.apply(n, arguments), t.apply(e, n)
          }
        }(l))
      }
      return e
    }

    function Ba() {}

    function Ra(e) {
      return Fi(e) ? Cn(e) : Pn(e)
    }
    h = h ? Gt.defaults(Ht.Object(), h, Gt.pick(Ht, It)) : Ht;
    var Na = h.Array,
      Ua = h.Date,
      Va = h.Error,
      Oa = h.Function,
      za = h.Math,
      Ha = h.Number,
      Ga = h.Object,
      Ya = h.RegExp,
      qa = h.String,
      Ka = h.TypeError,
      Xa = Na.prototype,
      Ja = Ga.prototype,
      Za = qa.prototype,
      Qa = (Qa = h.window) ? Qa.document : null,
      er = Oa.prototype.toString,
      tr = Ja.hasOwnProperty,
      nr = 0,
      ir = Ja.toString,
      ar = h._,
      rr = Ya("^" + xa(er.call(tr)).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      sr = ki(h, "ArrayBuffer"),
      or = ki(sr && new sr(0), "slice"),
      lr = za.ceil,
      ur = h.clearTimeout,
      cr = za.floor,
      pr = ki(Ga, "getPrototypeOf"),
      dr = Xa.push,
      hr = ki(h, "Set"),
      _r = h.setTimeout,
      mr = Xa.splice,
      fr = ki(h, "Uint8Array"),
      gr = ki(h, "WeakMap"),
      vr = function() {
        try {
          var e = ki(h, "Float64Array"),
            t = new e(new sr(10), 0, 1) && e
        } catch (n) {}
        return t || null
      }(),
      br = ki(Ga, "create"),
      yr = ki(Na, "isArray"),
      wr = h.isFinite,
      kr = ki(Ga, "keys"),
      Sr = za.max,
      Cr = za.min,
      Pr = ki(Ua, "now"),
      Tr = ki(Ha, "isFinite"),
      Wr = h.parseInt,
      xr = za.random,
      Ar = Ha.POSITIVE_INFINITY,
      Fr = 4294967294,
      Ir = 2147483647,
      Lr = vr ? vr.BYTES_PER_ELEMENT : 0,
      Mr = 9007199254740991,
      Er = gr && new gr,
      jr = {},
      Dr = jt.support = {};
    ! function(e) {
      function t() {
        this.x = e
      }
      var n = [];
      t.prototype = {
        valueOf: e,
        y: e
      };
      for (var i in new t) n.push(i);
      try {
        Dr.dom = 11 === Qa.createDocumentFragment().nodeType
      } catch (a) {
        Dr.dom = !1
      }
    }(1, 0), jt.templateSettings = {
      escape: dt,
      evaluate: ht,
      interpolate: _t,
      variable: "",
      imports: {
        _: jt
      }
    };
    var $r = function() {
        function e() {}
        return function(t) {
          if (ma(t)) {
            e.prototype = t;
            var n = new e;
            e.prototype = null
          }
          return n || {}
        }
      }(),
      Br = Gn(_n),
      Rr = Gn(mn, !0),
      Nr = Yn(),
      Ur = Yn(!0),
      Vr = Er ? function(e, t) {
        return Er.set(e, t), e
      } : ja;
    or || (Un = sr && fr ? function(e) {
      var t = e.byteLength,
        n = vr ? cr(t / Lr) : 0,
        i = n * Lr,
        a = new sr(t);
      if (n) {
        var r = new vr(a, 0, n);
        r.set(new vr(e, 0, n))
      }
      return t != i && (r = new fr(a, i), r.set(new fr(e, i))), a
    } : Ea(null));
    var Or = br && hr ? function(e) {
        return new Nt(e)
      } : Ea(null),
      zr = Er ? function(e) {
        return Er.get(e)
      } : Ba,
      Hr = Cn("length"),
      Gr = function() {
        var e = 0,
          t = 0;
        return function(n, i) {
          var a = gs(),
            r = M - (a - t);
          if (t = a, r > 0) {
            if (++e >= L) return n
          } else e = 0;
          return Vr(n, i)
        }
      }(),
      Yr = ua(function(e, t) {
        return Wi(e) ? on(e, dn(t, !1, !0)) : []
      }),
      qr = ei(),
      Kr = ei(!0),
      Xr = ua(function(e) {
        for (var t = e.length, i = t, a = Na(c), r = yi(), s = r == n, o = []; i--;) {
          var l = e[i] = Wi(l = e[i]) ? l : [];
          a[i] = s && 120 <= l.length ? Or(i && l) : null
        }
        var s = e[0],
          u = -1,
          c = s ? s.length : 0,
          p = a[0];
        e: for (; ++u < c;)
          if (l = s[u], 0 > (p ? Ut(p, l) : r(o, l, 0))) {
            for (i = t; --i;) {
              var d = a[i];
              if (0 > (d ? Ut(d, l) : r(e[i], l, 0))) continue e
            }
            p && p.push(l), o.push(l)
          }
        return o
      }),
      Jr = ua(function(t, n) {
        n = dn(n);
        var i = tn(t, n);
        return Tn(t, n.sort(e)), i
      }),
      Zr = hi(),
      Qr = hi(!0),
      es = ua(function(e) {
        return En(dn(e, !1, !0))
      }),
      ts = ua(function(e, t) {
        return Wi(e) ? on(e, t) : []
      }),
      ns = ua(qi),
      is = ua(function(e) {
        var t = e.length,
          n = t > 2 ? e[t - 2] : b,
          i = t > 1 ? e[t - 1] : b;
        return t > 2 && "function" == typeof n ? t -= 2 : (n = t > 1 && "function" == typeof i ? (--t, i) : b, i = b), e.length = t, Ki(e, n, i)
      }),
      as = ua(function(e, t) {
        return tn(e, dn(t))
      }),
      rs = zn(function(e, t, n) {
        tr.call(e, n) ? ++e[n] : e[n] = 1
      }),
      ss = Qn(Br),
      os = Qn(Rr, !0),
      ls = ii(Ot, Br),
      us = ii(function(e, t) {
        for (var n = e.length; n-- && !1 !== t(e[n], n, e););
        return e
      }, Rr),
      cs = zn(function(e, t, n) {
        tr.call(e, n) ? e[n].push(t) : e[n] = [t]
      }),
      ps = zn(function(e, t, n) {
        e[n] = t
      }),
      ds = ua(function(e, t, n) {
        var i = -1,
          a = "function" == typeof t,
          r = Fi(t),
          s = Wi(e) ? Na(e.length) : [];
        return Br(e, function(e) {
          var o = a ? t : r && null != e ? e[t] : null;
          s[++i] = o ? o.apply(e, n) : Ti(e, t, n)
        }), s
      }),
      hs = zn(function(e, t, n) {
        e[n ? 0 : 1].push(t)
      }, function() {
        return [
          [],
          []
        ]
      }),
      _s = ui(Kt, Br),
      ms = ui(function(e, t, n, i) {
        var a = e.length;
        for (i && a && (n = e[--a]); a--;) n = t(n, e[a], a, e);
        return n
      }, Rr),
      fs = ua(function(e, t) {
        if (null == e) return [];
        var n = t[2];
        return n && Ai(t[0], t[1], n) && (t.length = 1), Ln(e, dn(t), [])
      }),
      gs = Pr || function() {
        return (new Ua).getTime()
      },
      vs = ua(function(e, t, n) {
        var i = w;
        if (n.length) var a = _(n, vs.placeholder),
          i = i | T;
        return _i(e, i, t, n, a)
      }),
      bs = ua(function(e, t) {
        t = t.length ? dn(t) : Sa(e);
        for (var n = -1, i = t.length; ++n < i;) {
          var a = t[n];
          e[a] = _i(e[a], w, e)
        }
        return e
      }),
      ys = ua(function(e, t, n) {
        var i = w | k;
        if (n.length) var a = _(n, ys.placeholder),
          i = i | T;
        return _i(t, i, e, n, a)
      }),
      ws = Jn(C),
      ks = Jn(P),
      Ss = ua(function(e, t) {
        return sn(e, 1, t)
      }),
      Cs = ua(function(e, t, n) {
        return sn(e, t, n)
      }),
      Ps = ni(),
      Ts = ni(!0),
      Ws = li(T),
      xs = li(W),
      As = ua(function(e, t) {
        return _i(e, A, null, null, null, dn(t))
      }),
      Fs = yr || function(e) {
        return d(e) && Li(e.length) && ir.call(e) == N
      };
    Dr.dom || (da = function(e) {
      return !!e && 1 === e.nodeType && d(e) && !Ms(e)
    });
    var Is = Tr || function(e) {
        return "number" == typeof e && wr(e)
      },
      Ls = i(/x/) || fr && !i(fr) ? function(e) {
        return ir.call(e) == z
      } : i,
      Ms = pr ? function(e) {
        if (!e || ir.call(e) != G) return !1;
        var t = ki(e, "valueOf"),
          n = t && (n = pr(t)) && pr(n);
        return n ? e == n || pr(e) == n : ji(e)
      } : ji,
      Es = Hn(function(e, t, n) {
        return n ? Qt(e, t, n) : en(e, t)
      }),
      js = ua(function(e) {
        var t = e[0];
        return null == t ? t : (e.push(Jt), Es.apply(b, e))
      }),
      Ds = ti(_n),
      $s = ti(mn),
      Bs = ai(Nr),
      Rs = ai(Ur),
      Ns = ri(_n),
      Us = ri(mn),
      Vs = kr ? function(e) {
        var t = null == e ? null : e.constructor;
        return "function" == typeof t && t.prototype === e || "function" != typeof e && Wi(e) ? Di(e) : ma(e) ? kr(e) : []
      } : Di,
      Os = si(!0),
      zs = si(),
      Hs = Hn(Sn),
      Gs = ua(function(e, t) {
        if (null == e) return {};
        if ("function" != typeof t[0]) return t = qt(dn(t), qa), Mi(e, on(Ca(e), t));
        var n = Nn(t[0], t[1], 3);
        return Ei(e, function(e, t, i) {
          return !n(e, t, i)
        })
      }),
      Ys = ua(function(e, t) {
        return null == e ? {} : "function" == typeof t[0] ? Ei(e, Nn(t[0], t[1], 3)) : Mi(e, dn(t))
      }),
      qs = Kn(function(e, t, n) {
        return t = t.toLowerCase(), e + (n ? t.charAt(0).toUpperCase() + t.slice(1) : t)
      }),
      Ks = Kn(function(e, t, n) {
        return e + (n ? "-" : "") + t.toLowerCase()
      }),
      Xs = oi(),
      Js = oi(!0);
    8 != Wr(Ft + "08") && (Aa = function(e, t, n) {
      return (n ? Ai(e, t, n) : null == t) ? t = 0 : t && (t = +t), e = Ia(e), Wr(e, t || (Ct.test(e) ? 16 : 10))
    });
    var Zs = Kn(function(e, t, n) {
        return e + (n ? "_" : "") + t.toLowerCase()
      }),
      Qs = Kn(function(e, t, n) {
        return e + (n ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1))
      }),
      eo = ua(function(e, t) {
        try {
          return e.apply(b, t)
        } catch (n) {
          return _a(n) ? n : new Va(n)
        }
      }),
      to = ua(function(e, t) {
        return function(n) {
          return Ti(n, e, t)
        }
      }),
      no = ua(function(e, t) {
        return function(n) {
          return Ti(e, n, t)
        }
      }),
      io = Zn(ca, -(1 / 0)),
      ao = Zn(wa, 1 / 0);
    return jt.prototype = Dt.prototype, $t.prototype = $r(Dt.prototype), $t.prototype.constructor = $t, Bt.prototype = $r(Dt.prototype), Bt.prototype.constructor = Bt, Rt.prototype["delete"] = function(e) {
      return this.has(e) && delete this.__data__[e]
    }, Rt.prototype.get = function(e) {
      return "__proto__" == e ? b : this.__data__[e]
    }, Rt.prototype.has = function(e) {
      return "__proto__" != e && tr.call(this.__data__, e)
    }, Rt.prototype.set = function(e, t) {
      return "__proto__" != e && (this.__data__[e] = t), this
    }, Nt.prototype.push = function(e) {
      var t = this.data;
      "string" == typeof e || ma(e) ? t.set.add(e) : t.hash[e] = !0
    }, la.Cache = Rt, jt.after = function(e, t) {
      if ("function" != typeof t) {
        if ("function" != typeof e) throw new Ka($);
        var n = e;
        e = t, t = n
      }
      return e = wr(e = +e) ? e : 0,
        function() {
          return 1 > --e ? t.apply(this, arguments) : void 0
        }
    }, jt.ary = function(e, t, n) {
      return n && Ai(e, t, n) && (t = null), t = e && null == t ? e.length : Sr(+t || 0, 0), _i(e, x, null, null, null, null, t)
    }, jt.assign = Es, jt.at = as, jt.before = sa, jt.bind = vs, jt.bindAll = bs, jt.bindKey = ys, jt.callback = Ma, jt.chain = Ji, jt.chunk = function(e, t, n) {
      t = (n ? Ai(e, t, n) : null == t) ? 1 : Sr(+t || 1, 1), n = 0;
      for (var i = e ? e.length : 0, a = -1, r = Na(lr(i / t)); i > n;) r[++a] = An(e, n, n += t);
      return r
    }, jt.compact = function(e) {
      for (var t = -1, n = e ? e.length : 0, i = -1, a = []; ++t < n;) {
        var r = e[t];
        r && (a[++i] = r)
      }
      return a
    }, jt.constant = Ea, jt.countBy = rs, jt.create = function(e, t, n) {
      var i = $r(e);
      return n && Ai(e, t, n) && (t = null), t ? en(i, t) : i
    }, jt.curry = ws, jt.curryRight = ks, jt.debounce = oa, jt.defaults = js, jt.defer = Ss, jt.delay = Cs, jt.difference = Yr, jt.drop = Ui, jt.dropRight = Vi, jt.dropRightWhile = function(e, t, n) {
      return e && e.length ? Dn(e, vi(t, n, 3), !0, !0) : []
    }, jt.dropWhile = function(e, t, n) {
      return e && e.length ? Dn(e, vi(t, n, 3), !0) : []
    }, jt.fill = function(e, t, n, i) {
      var a = e ? e.length : 0;
      if (!a) return [];
      for (n && "number" != typeof n && Ai(e, t, n) && (n = 0, i = a), a = e.length, n = null == n ? 0 : +n || 0, 0 > n && (n = -n > a ? 0 : a + n), i = i === b || i > a ? a : +i || 0, 0 > i && (i += a), a = n > i ? 0 : i >>> 0, n >>>= 0; a > n;) e[n++] = t;
      return e
    }, jt.filter = ea, jt.flatten = function(e, t, n) {
      var i = e ? e.length : 0;
      return n && Ai(e, t, n) && (t = !1), i ? dn(e, t) : []
    }, jt.flattenDeep = function(e) {
      return e && e.length ? dn(e, !0) : []
    }, jt.flow = Ps, jt.flowRight = Ts, jt.forEach = ls, jt.forEachRight = us, jt.forIn = Bs, jt.forInRight = Rs, jt.forOwn = Ns, jt.forOwnRight = Us, jt.functions = Sa, jt.groupBy = cs, jt.indexBy = ps, jt.initial = function(e) {
      return Vi(e, 1)
    }, jt.intersection = Xr, jt.invert = function(e, t, n) {
      n && Ai(e, t, n) && (t = null), n = -1;
      for (var i = Vs(e), a = i.length, r = {}; ++n < a;) {
        var s = i[n],
          o = e[s];
        t ? tr.call(r, o) ? r[o].push(s) : r[o] = [s] : r[o] = s
      }
      return r
    }, jt.invoke = ds, jt.keys = Vs, jt.keysIn = Ca, jt.map = na, jt.mapKeys = Os, jt.mapValues = zs, jt.matches = Da, jt.matchesProperty = function(e, t) {
      return kn(e, rn(t, !0))
    }, jt.memoize = la, jt.merge = Hs, jt.method = to, jt.methodOf = no, jt.mixin = $a, jt.negate = function(e) {
      if ("function" != typeof e) throw new Ka($);
      return function() {
        return !e.apply(this, arguments)
      }
    }, jt.omit = Gs, jt.once = function(e) {
      return sa(2, e)
    }, jt.pairs = Pa, jt.partial = Ws, jt.partialRight = xs, jt.partition = hs, jt.pick = Ys, jt.pluck = function(e, t) {
      return na(e, Ra(t))
    }, jt.property = Ra, jt.propertyOf = function(e) {
      return function(t) {
        return gn(e, Ri(t), t + "")
      }
    }, jt.pull = function() {
      var e = arguments,
        t = e[0];
      if (!t || !t.length) return t;
      for (var n = 0, i = yi(), a = e.length; ++n < a;)
        for (var r = 0, s = e[n]; - 1 < (r = i(t, s, r));) mr.call(t, r, 1);
      return t
    }, jt.pullAt = Jr, jt.range = function(e, t, n) {
      n && Ai(e, t, n) && (t = n = null), e = +e || 0, n = null == n ? 1 : +n || 0, null == t ? (t = e, e = 0) : t = +t || 0;
      var i = -1;
      t = Sr(lr((t - e) / (n || 1)), 0);
      for (var a = Na(t); ++i < t;) a[i] = e, e += n;
      return a
    }, jt.rearg = As, jt.reject = function(e, t, n) {
      var i = Fs(e) ? Yt : cn;
      return t = vi(t, n, 3), i(e, function(e, n, i) {
        return !t(e, n, i)
      })
    }, jt.remove = function(e, t, n) {
      var i = [];
      if (!e || !e.length) return i;
      var a = -1,
        r = [],
        s = e.length;
      for (t = vi(t, n, 3); ++a < s;) n = e[a], t(n, a, e) && (i.push(n), r.push(a));
      return Tn(e, r), i
    }, jt.rest = Gi, jt.restParam = ua, jt.set = function(e, t, n) {
      if (null == e) return e;
      var i = t + "";
      t = null != e[i] || Fi(t, e) ? [i] : Ri(t);
      for (var i = -1, a = t.length, r = a - 1, s = e; null != s && ++i < a;) {
        var o = t[i];
        ma(s) && (i == r ? s[o] = n : null == s[o] && (s[o] = xi(t[i + 1]) ? [] : {})), s = s[o]
      }
      return e
    }, jt.shuffle = aa, jt.slice = function(e, t, n) {
      var i = e ? e.length : 0;
      return i ? (n && "number" != typeof n && Ai(e, t, n) && (t = 0, n = i), An(e, t, n)) : []
    }, jt.sortBy = function(e, t, n) {
      if (null == e) return [];
      n && Ai(e, t, n) && (t = null);
      var i = -1;
      return t = vi(t, n, 3), e = yn(e, function(e, n, a) {
        return {
          a: t(e, n, a),
          b: ++i,
          c: e
        }
      }), In(e, o)
    }, jt.sortByAll = fs, jt.sortByOrder = function(e, t, n, i) {
      return null == e ? [] : (i && Ai(t, n, i) && (n = null), Fs(t) || (t = null == t ? [] : [t]), Fs(n) || (n = null == n ? [] : [n]), Ln(e, t, n))
    }, jt.spread = function(e) {
      if ("function" != typeof e) throw new Ka($);
      return function(t) {
        return e.apply(this, t)
      }
    }, jt.take = function(e, t, n) {
      return e && e.length ? ((n ? Ai(e, t, n) : null == t) && (t = 1), An(e, 0, 0 > t ? 0 : t)) : []
    }, jt.takeRight = function(e, t, n) {
      var i = e ? e.length : 0;
      return i ? ((n ? Ai(e, t, n) : null == t) && (t = 1), t = i - (+t || 0), An(e, 0 > t ? 0 : t)) : []
    }, jt.takeRightWhile = function(e, t, n) {
      return e && e.length ? Dn(e, vi(t, n, 3), !1, !0) : []
    }, jt.takeWhile = function(e, t, n) {
      return e && e.length ? Dn(e, vi(t, n, 3)) : []
    }, jt.tap = function(e, t, n) {
      return t.call(n, e), e
    }, jt.throttle = function(e, t, n) {
      var i = !0,
        a = !0;
      if ("function" != typeof e) throw new Ka($);
      return !1 === n ? i = !1 : ma(n) && (i = "leading" in n ? !!n.leading : i, a = "trailing" in n ? !!n.trailing : a), Et.leading = i, Et.maxWait = +t, Et.trailing = a, oa(e, t, Et)
    }, jt.thru = Zi, jt.times = function(e, t, n) {
      if (e = cr(e), 1 > e || !wr(e)) return [];
      var i = -1,
        a = Na(Cr(e, 4294967295));
      for (t = Nn(t, n, 1); ++i < e;) 4294967295 > i ? a[i] = t(i) : t(i);
      return a
    }, jt.toArray = function(e) {
      var t = e ? Hr(e) : 0;
      return Li(t) ? t ? Vt(e) : [] : Ta(e)
    }, jt.toPlainObject = ka, jt.transform = function(e, t, n, i) {
      var a = Fs(e) || ya(e);
      return t = vi(t, i, 4), null == n && (a || ma(e) ? (i = e.constructor, n = a ? Fs(e) ? new i : [] : $r(Ls(i) ? i.prototype : null)) : n = {}), (a ? Ot : _n)(e, function(e, i, a) {
        return t(n, e, i, a)
      }), n
    }, jt.union = es, jt.uniq = Yi, jt.unzip = qi, jt.unzipWith = Ki, jt.values = Ta, jt.valuesIn = function(e) {
      return jn(e, Ca(e))
    }, jt.where = function(e, t) {
      return ea(e, wn(t))
    }, jt.without = ts, jt.wrap = function(e, t) {
      return t = null == t ? ja : t, _i(t, T, null, [e], [])
    }, jt.xor = function() {
      for (var e = -1, t = arguments.length; ++e < t;) {
        var n = arguments[e];
        if (Wi(n)) var i = i ? on(i, n).concat(on(n, i)) : n
      }
      return i ? En(i) : []
    }, jt.zip = ns, jt.zipObject = Xi, jt.zipWith = is, jt.backflow = Ts, jt.collect = na, jt.compose = Ts, jt.each = ls, jt.eachRight = us, jt.extend = Es, jt.iteratee = Ma, jt.methods = Sa, jt.object = Xi, jt.select = ea, jt.tail = Gi, jt.unique = Yi, $a(jt, jt), jt.add = function(e, t) {
      return (+e || 0) + (+t || 0)
    }, jt.attempt = eo, jt.camelCase = qs, jt.capitalize = function(e) {
      return (e = a(e)) && e.charAt(0).toUpperCase() + e.slice(1)
    }, jt.clone = function(e, t, n, i) {
      return t && "boolean" != typeof t && Ai(e, t, n) ? t = !1 : "function" == typeof t && (i = n, n = t, t = !1), "function" == typeof n ? rn(e, t, Nn(n, i, 1)) : rn(e, t)
    }, jt.cloneDeep = function(e, t, n) {
      return "function" == typeof t ? rn(e, !0, Nn(t, n, 1)) : rn(e, !0)
    }, jt.deburr = Wa, jt.endsWith = function(e, t, n) {
      e = a(e), t += "";
      var i = e.length;
      return n = n === b ? i : Cr(0 > n ? 0 : +n || 0, i), n -= t.length, n >= 0 && e.indexOf(t, n) == n
    }, jt.escape = function(e) {
      return (e = a(e)) && pt.test(e) ? e.replace(ut, u) : e
    }, jt.escapeRegExp = xa, jt.every = Qi, jt.find = ss, jt.findIndex = qr, jt.findKey = Ds, jt.findLast = os, jt.findLastIndex = Kr, jt.findLastKey = $s, jt.findWhere = function(e, t) {
      return ss(e, wn(t))
    }, jt.first = Oi, jt.get = function(e, t, n) {
      return e = null == e ? b : gn(e, Ri(t), t + ""), e === b ? n : e
    }, jt.gt = ca, jt.gte = function(e, t) {
      return e >= t
    }, jt.has = function(e, t) {
      if (null == e) return !1;
      var n = tr.call(e, t);
      if (!n && !Fi(t)) {
        if (t = Ri(t), e = 1 == t.length ? e : gn(e, An(t, 0, -1)), null == e) return !1;
        t = Hi(t), n = tr.call(e, t)
      }
      return n || Li(e.length) && xi(t, e.length) && (Fs(e) || pa(e))
    }, jt.identity = ja, jt.includes = ta, jt.indexOf = zi, jt.inRange = function(e, t, n) {
      return t = +t || 0, "undefined" == typeof n ? (n = t, t = 0) : n = +n || 0, e >= Cr(t, n) && e < Sr(t, n)
    }, jt.isArguments = pa, jt.isArray = Fs, jt.isBoolean = function(e) {
      return !0 === e || !1 === e || d(e) && ir.call(e) == U
    }, jt.isDate = function(e) {
      return d(e) && ir.call(e) == V
    }, jt.isElement = da, jt.isEmpty = function(e) {
      return null == e ? !0 : Wi(e) && (Fs(e) || ba(e) || pa(e) || d(e) && Ls(e.splice)) ? !e.length : !Vs(e).length
    }, jt.isEqual = ha, jt.isError = _a, jt.isFinite = Is, jt.isFunction = Ls, jt.isMatch = function(e, t, n, i) {
      return n = "function" == typeof n ? Nn(n, i, 3) : b, bn(e, wi(t), n)
    }, jt.isNaN = function(e) {
      return ga(e) && e != +e
    }, jt.isNative = fa, jt.isNull = function(e) {
      return null === e
    }, jt.isNumber = ga, jt.isObject = ma, jt.isPlainObject = Ms, jt.isRegExp = va, jt.isString = ba, jt.isTypedArray = ya, jt.isUndefined = function(e) {
      return e === b
    }, jt.kebabCase = Ks, jt.last = Hi, jt.lastIndexOf = function(e, t, n) {
      var i = e ? e.length : 0;
      if (!i) return -1;
      var a = i;
      if ("number" == typeof n) a = (0 > n ? Sr(i + n, 0) : Cr(n || 0, i - 1)) + 1;
      else if (n) return a = Bn(e, t, !0) - 1, e = e[a], (t === t ? t === e : e !== e) ? a : -1;
      if (t !== t) return p(e, a, !0);
      for (; a--;)
        if (e[a] === t) return a;
      return -1
    }, jt.lt = wa, jt.lte = function(e, t) {
      return t >= e
    }, jt.max = io, jt.min = ao, jt.noConflict = function() {
      return h._ = ar, this
    }, jt.noop = Ba, jt.now = gs, jt.pad = function(e, t, n) {
      e = a(e), t = +t;
      var i = e.length;
      return t > i && wr(t) ? (i = (t - i) / 2, t = cr(i), i = lr(i), n = pi("", i, n), n.slice(0, t) + e + n) : e
    }, jt.padLeft = Xs, jt.padRight = Js, jt.parseInt = Aa, jt.random = function(e, t, n) {
      n && Ai(e, t, n) && (t = n = null);
      var i = null == e,
        a = null == t;
      return null == n && (a && "boolean" == typeof e ? (n = e, e = 1) : "boolean" == typeof t && (n = t, a = !0)), i && a && (t = 1, a = !1), e = +e || 0, a ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1 ? (n = xr(), Cr(e + n * (t - e + parseFloat("1e-" + ((n + "").length - 1))), t)) : Wn(e, t)
    }, jt.reduce = _s, jt.reduceRight = ms, jt.repeat = Fa, jt.result = function(e, t, n) {
      var i = null == e ? b : e[t];
      return i === b && (null == e || Fi(t, e) || (t = Ri(t), e = 1 == t.length ? e : gn(e, An(t, 0, -1)), i = null == e ? b : e[Hi(t)]), i = i === b ? n : i), Ls(i) ? i.call(e) : i
    }, jt.runInContext = v, jt.size = function(e) {
      var t = e ? Hr(e) : 0;
      return Li(t) ? t : Vs(e).length
    }, jt.snakeCase = Zs, jt.some = ra, jt.sortedIndex = Zr, jt.sortedLastIndex = Qr, jt.startCase = Qs, jt.startsWith = function(e, t, n) {
      return e = a(e), n = null == n ? 0 : Cr(0 > n ? 0 : +n || 0, e.length), e.lastIndexOf(t, n) == n
    }, jt.sum = function(e, t, n) {
      n && Ai(e, t, n) && (t = null);
      var i = vi(),
        a = null == t;
      if (a && i === an || (a = !1, t = i(t, n, 3)), a) {
        for (e = Fs(e) ? e : $i(e), t = e.length, n = 0; t--;) n += +e[t] || 0;
        e = n
      } else e = Mn(e, t);
      return e
    }, jt.template = function(e, t, n) {
      var i = jt.templateSettings;
      n && Ai(e, t, n) && (t = n = null), e = a(e), t = Qt(en({}, n || t), i, Zt), n = Qt(en({}, t.imports), i.imports, Zt);
      var r, s, o = Vs(n),
        l = jn(n, o),
        u = 0;
      n = t.interpolate || Wt;
      var p = "__p+='";
      n = Ya((t.escape || Wt).source + "|" + n.source + "|" + (n === _t ? kt : Wt).source + "|" + (t.evaluate || Wt).source + "|$", "g");
      var d = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";
      if (e.replace(n, function(t, n, i, a, o, l) {
          return i || (i = a), p += e.slice(u, l).replace(xt, c), n && (r = !0, p += "'+__e(" + n + ")+'"), o && (s = !0, p += "';" + o + ";\n__p+='"), i && (p += "'+((__t=(" + i + "))==null?'':__t)+'"), u = l + t.length, t
        }), p += "';", (t = t.variable) || (p = "with(obj){" + p + "}"), p = (s ? p.replace(rt, "") : p).replace(st, "$1").replace(ot, "$1;"), p = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (r ? ",__e=_.escape" : "") + (s ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + p + "return __p}", t = eo(function() {
          return Oa(o, d + "return " + p).apply(b, l)
        }), t.source = p, _a(t)) throw t;
      return t
    }, jt.trim = Ia, jt.trimLeft = function(e, t, n) {
      var i = e;
      return (e = a(e)) ? e.slice((n ? Ai(i, t, n) : null == t) ? m(e) : r(e, t + "")) : e
    }, jt.trimRight = function(e, t, n) {
      var i = e;
      return (e = a(e)) ? (n ? Ai(i, t, n) : null == t) ? e.slice(0, f(e) + 1) : e.slice(0, s(e, t + "") + 1) : e
    }, jt.trunc = function(e, t, n) {
      n && Ai(e, t, n) && (t = null);
      var i = F;
      if (n = I, null != t)
        if (ma(t)) {
          var r = "separator" in t ? t.separator : r,
            i = "length" in t ? +t.length || 0 : i;
          n = "omission" in t ? a(t.omission) : n
        } else i = +t || 0;
      if (e = a(e), i >= e.length) return e;
      if (i -= n.length, 1 > i) return n;
      if (t = e.slice(0, i), null == r) return t + n;
      if (va(r)) {
        if (e.slice(i).search(r)) {
          var s, o = e.slice(0, i);
          for (r.global || (r = Ya(r.source, (St.exec(r) || "") + "g")), r.lastIndex = 0; e = r.exec(o);) s = e.index;
          t = t.slice(0, null == s ? i : s)
        }
      } else e.indexOf(r, i) != i && (r = t.lastIndexOf(r), r > -1 && (t = t.slice(0, r)));
      return t + n
    }, jt.unescape = function(e) {
      return (e = a(e)) && ct.test(e) ? e.replace(lt, g) : e
    }, jt.uniqueId = function(e) {
      var t = ++nr;
      return a(e) + t
    }, jt.words = La, jt.all = Qi, jt.any = ra, jt.contains = ta, jt.eq = ha, jt.detect = ss, jt.foldl = _s, jt.foldr = ms, jt.head = Oi, jt.include = ta, jt.inject = _s, $a(jt, function() {
      var e = {};
      return _n(jt, function(t, n) {
        jt.prototype[n] || (e[n] = t)
      }), e
    }(), !1), jt.sample = ia, jt.prototype.sample = function(e) {
      return this.__chain__ || null != e ? this.thru(function(t) {
        return ia(t, e)
      }) : ia(this.value())
    }, jt.VERSION = y, Ot("bind bindKey curry curryRight partial partialRight".split(" "), function(e) {
      jt[e].placeholder = jt
    }), Ot(["dropWhile", "filter", "map", "takeWhile"], function(e, t) {
      var n = t != D,
        i = t == E;
      Bt.prototype[e] = function(e, a) {
        var r = this.__filtered__,
          s = r && i ? new Bt(this) : this.clone();
        return (s.__iteratees__ || (s.__iteratees__ = [])).push({
          done: !1,
          count: 0,
          index: 0,
          iteratee: vi(e, a, 1),
          limit: -1,
          type: t
        }), s.__filtered__ = r || n, s
      }
    }), Ot(["drop", "take"], function(e, t) {
      var n = e + "While";
      Bt.prototype[e] = function(n) {
        var i = this.__filtered__,
          a = i && !t ? this.dropWhile() : this.clone();
        return n = null == n ? 1 : Sr(cr(n) || 0, 0), i ? t ? a.__takeCount__ = Cr(a.__takeCount__, n) : Hi(a.__iteratees__).limit = n : (a.__views__ || (a.__views__ = [])).push({
          size: n,
          type: e + (0 > a.__dir__ ? "Right" : "")
        }), a
      }, Bt.prototype[e + "Right"] = function(t) {
        return this.reverse()[e](t).reverse()
      }, Bt.prototype[e + "RightWhile"] = function(e, t) {
        return this.reverse()[n](e, t).reverse()
      }
    }), Ot(["first", "last"], function(e, t) {
      var n = "take" + (t ? "Right" : "");
      Bt.prototype[e] = function() {
        return this[n](1).value()[0]
      }
    }), Ot(["initial", "rest"], function(e, t) {
      var n = "drop" + (t ? "" : "Right");
      Bt.prototype[e] = function() {
        return this[n](1)
      }
    }), Ot(["pluck", "where"], function(e, t) {
      var n = t ? "filter" : "map",
        i = t ? wn : Ra;
      Bt.prototype[e] = function(e) {
        return this[n](i(e))
      }
    }), Bt.prototype.compact = function() {
      return this.filter(ja)
    }, Bt.prototype.reject = function(e, t) {
      return e = vi(e, t, 1), this.filter(function(t) {
        return !e(t)
      })
    }, Bt.prototype.slice = function(e, t) {
      e = null == e ? 0 : +e || 0;
      var n = this;
      return 0 > e ? n = this.takeRight(-e) : e && (n = this.drop(e)), t !== b && (t = +t || 0, n = 0 > t ? n.dropRight(-t) : n.take(t - e)), n
    }, Bt.prototype.toArray = function() {
      return this.drop(0)
    }, _n(Bt.prototype, function(e, t) {
      var n = jt[t];
      if (n) {
        var i = /^(?:filter|map|reject)|While$/.test(t),
          a = /^(?:first|last)$/.test(t);
        jt.prototype[t] = function() {
          function t(e) {
            return e = [e], dr.apply(e, r), n.apply(jt, e)
          }
          var r = arguments,
            s = this.__chain__,
            o = this.__wrapped__,
            l = !!this.__actions__.length,
            u = o instanceof Bt,
            c = r[0],
            p = u || Fs(o);
          return p && i && "function" == typeof c && 1 != c.length && (u = p = !1), u = u && !l, a && !s ? u ? e.call(o) : n.call(jt, this.value()) : p ? (o = e.apply(u ? o : new Bt(this), r), a || !l && !o.__actions__ || (o.__actions__ || (o.__actions__ = [])).push({
            func: Zi,
            args: [t],
            thisArg: jt
          }), new $t(o, s)) : this.thru(t)
        }
      }
    }), Ot("concat join pop push replace shift sort splice split unshift".split(" "), function(e) {
      var t = (/^(?:replace|split)$/.test(e) ? Za : Xa)[e],
        n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
        i = /^(?:join|pop|replace|shift)$/.test(e);
      jt.prototype[e] = function() {
        var e = arguments;
        return i && !this.__chain__ ? t.apply(this.value(), e) : this[n](function(n) {
          return t.apply(n, e)
        })
      }
    }), _n(Bt.prototype, function(e, t) {
      var n = jt[t];
      if (n) {
        var i = n.name;
        (jr[i] || (jr[i] = [])).push({
          name: t,
          func: n
        })
      }
    }), jr[ci(null, k).name] = [{
      name: "wrapper",
      func: null
    }], Bt.prototype.clone = function() {
      var e = this.__actions__,
        t = this.__iteratees__,
        n = this.__views__,
        i = new Bt(this.__wrapped__);
      return i.__actions__ = e ? Vt(e) : null, i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = t ? Vt(t) : null, i.__takeCount__ = this.__takeCount__, i.__views__ = n ? Vt(n) : null, i
    }, Bt.prototype.reverse = function() {
      if (this.__filtered__) {
        var e = new Bt(this);
        e.__dir__ = -1, e.__filtered__ = !0
      } else e = this.clone(), e.__dir__ *= -1;
      return e
    }, Bt.prototype.value = function() {
      var e = this.__wrapped__.value();
      if (!Fs(e)) return $n(e, this.__actions__);
      var t, n = this.__dir__,
        i = 0 > n;
      t = e.length;
      for (var a = this.__views__, r = 0, s = -1, o = a ? a.length : 0; ++s < o;) {
        var l = a[s],
          u = l.size;
        switch (l.type) {
          case "drop":
            r += u;
            break;
          case "dropRight":
            t -= u;
            break;
          case "take":
            t = Cr(t, r + u);
            break;
          case "takeRight":
            r = Sr(r, t - u)
        }
      }
      t = {
        start: r,
        end: t
      }, a = t.start, r = t.end, t = r - a, a = i ? r : a - 1, r = Cr(t, this.__takeCount__), o = (s = this.__iteratees__) ? s.length : 0, l = 0, u = [];
      e: for (; t-- && r > l;) {
        for (var a = a + n, c = -1, p = e[a]; ++c < o;) {
          var d = s[c],
            h = d.iteratee,
            _ = d.type;
          if (_ == E) {
            if (d.done && (i ? a > d.index : a < d.index) && (d.count = 0, d.done = !1), d.index = a, !(d.done || (_ = d.limit, d.done = _ > -1 ? d.count++ >= _ : !h(p)))) continue e
          } else if (d = h(p), _ == D) p = d;
          else if (!d) {
            if (_ == j) continue e;
            break e
          }
        }
        u[l++] = p
      }
      return u
    }, jt.prototype.chain = function() {
      return Ji(this)
    }, jt.prototype.commit = function() {
      return new $t(this.value(), this.__chain__)
    }, jt.prototype.plant = function(e) {
      for (var t, n = this; n instanceof Dt;) {
        var i = Ni(n);
        t ? a.__wrapped__ = i : t = i;
        var a = i,
          n = n.__wrapped__
      }
      return a.__wrapped__ = e, t
    }, jt.prototype.reverse = function() {
      var e = this.__wrapped__;
      return e instanceof Bt ? (this.__actions__.length && (e = new Bt(this)), new $t(e.reverse(), this.__chain__)) : this.thru(function(e) {
        return e.reverse()
      })
    }, jt.prototype.toString = function() {
      return this.value() + ""
    }, jt.prototype.run = jt.prototype.toJSON = jt.prototype.valueOf = jt.prototype.value = function() {
      return $n(this.__wrapped__, this.__actions__)
    }, jt.prototype.collect = jt.prototype.map, jt.prototype.head = jt.prototype.first, jt.prototype.select = jt.prototype.filter, jt.prototype.tail = jt.prototype.rest, jt
  }
  var b, y = "3.9.0",
    w = 1,
    k = 2,
    S = 4,
    C = 8,
    P = 16,
    T = 32,
    W = 64,
    x = 128,
    A = 256,
    F = 30,
    I = "...",
    L = 150,
    M = 16,
    E = 0,
    j = 1,
    D = 2,
    $ = "Expected a function",
    B = "__lodash_placeholder__",
    R = "[object Arguments]",
    N = "[object Array]",
    U = "[object Boolean]",
    V = "[object Date]",
    O = "[object Error]",
    z = "[object Function]",
    H = "[object Number]",
    G = "[object Object]",
    Y = "[object RegExp]",
    q = "[object String]",
    K = "[object ArrayBuffer]",
    X = "[object Float32Array]",
    J = "[object Float64Array]",
    Z = "[object Int8Array]",
    Q = "[object Int16Array]",
    et = "[object Int32Array]",
    tt = "[object Uint8Array]",
    nt = "[object Uint8ClampedArray]",
    it = "[object Uint16Array]",
    at = "[object Uint32Array]",
    rt = /\b__p\+='';/g,
    st = /\b(__p\+=)''\+/g,
    ot = /(__e\(.*?\)|\b__t\))\+'';/g,
    lt = /&(?:amp|lt|gt|quot|#39|#96);/g,
    ut = /[&<>"'`]/g,
    ct = RegExp(lt.source),
    pt = RegExp(ut.source),
    dt = /<%-([\s\S]+?)%>/g,
    ht = /<%([\s\S]+?)%>/g,
    _t = /<%=([\s\S]+?)%>/g,
    mt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
    ft = /^\w*$/,
    gt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
    vt = /[.*+?^${}()|[\]\/\\]/g,
    bt = RegExp(vt.source),
    yt = /[\u0300-\u036f\ufe20-\ufe23]/g,
    wt = /\\(\\)?/g,
    kt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    St = /\w*$/,
    Ct = /^0[xX]/,
    Pt = /^\[object .+?Constructor\]$/,
    Tt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
    Wt = /($^)/,
    xt = /['\n\r\u2028\u2029\\]/g,
    At = RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+", "g"),
    Ft = " 	\fÂ ï»¿\n\r\u2028\u2029áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€",
    It = "Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout document isFinite parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap window".split(" "),
    Lt = {};
  Lt[X] = Lt[J] = Lt[Z] = Lt[Q] = Lt[et] = Lt[tt] = Lt[nt] = Lt[it] = Lt[at] = !0, Lt[R] = Lt[N] = Lt[K] = Lt[U] = Lt[V] = Lt[O] = Lt[z] = Lt["[object Map]"] = Lt[H] = Lt[G] = Lt[Y] = Lt["[object Set]"] = Lt[q] = Lt["[object WeakMap]"] = !1;
  var Mt = {};
  Mt[R] = Mt[N] = Mt[K] = Mt[U] = Mt[V] = Mt[X] = Mt[J] = Mt[Z] = Mt[Q] = Mt[et] = Mt[H] = Mt[G] = Mt[Y] = Mt[q] = Mt[tt] = Mt[nt] = Mt[it] = Mt[at] = !0, Mt[O] = Mt[z] = Mt["[object Map]"] = Mt["[object Set]"] = Mt["[object WeakMap]"] = !1;
  var Et = {
      leading: !1,
      maxWait: 0,
      trailing: !1
    },
    jt = {
      Ã€: "A",
      Ã: "A",
      Ã‚: "A",
      Ãƒ: "A",
      Ã„: "A",
      Ã…: "A",
      Ã: "a",
      Ã¡: "a",
      Ã¢: "a",
      Ã£: "a",
      Ã¤: "a",
      Ã¥: "a",
      Ã‡: "C",
      Ã§: "c",
      Ã: "D",
      Ã°: "d",
      Ãˆ: "E",
      Ã‰: "E",
      ÃŠ: "E",
      Ã‹: "E",
      Ã¨: "e",
      Ã©: "e",
      Ãª: "e",
      Ã«: "e",
      ÃŒ: "I",
      Ã: "I",
      ÃŽ: "I",
      Ã: "I",
      Ã¬: "i",
      Ã­: "i",
      Ã®: "i",
      Ã¯: "i",
      Ã‘: "N",
      Ã±: "n",
      Ã’: "O",
      Ã“: "O",
      Ã”: "O",
      Ã•: "O",
      Ã–: "O",
      Ã˜: "O",
      Ã²: "o",
      Ã³: "o",
      Ã´: "o",
      Ãµ: "o",
      Ã¶: "o",
      Ã¸: "o",
      Ã™: "U",
      Ãš: "U",
      Ã›: "U",
      Ãœ: "U",
      Ã¹: "u",
      Ãº: "u",
      Ã»: "u",
      Ã¼: "u",
      Ã: "Y",
      Ã½: "y",
      Ã¿: "y",
      Ã†: "Ae",
      Ã¦: "ae",
      Ãž: "Th",
      Ã¾: "th",
      ÃŸ: "ss"
    },
    Dt = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "`": "&#96;"
    },
    $t = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'",
      "&#96;": "`"
    },
    Bt = {
      "function": !0,
      object: !0
    },
    Rt = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    },
    Nt = Bt[typeof exports] && exports && !exports.nodeType && exports,
    Ut = Bt[typeof module] && module && !module.nodeType && module,
    Vt = Bt[typeof self] && self && self.Object && self,
    Ot = Bt[typeof window] && window && window.Object && window,
    zt = Ut && Ut.exports === Nt && Nt,
    Ht = Nt && Ut && "object" == typeof global && global && global.Object && global || Ot !== (this && this.window) && Ot || Vt || this,
    Gt = v();
  "function" == typeof define && "object" == typeof define.amd && define.amd ? (Ht._ = Gt, define(function() {
    return Gt
  })) : Nt && Ut ? zt ? (Ut.exports = Gt)._ = Gt : Nt._ = Gt : Ht._ = Gt
}).call(this),
  function(e) {
    var t = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
    if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(n, i, a) {
      t.Backbone = e(t, a, n, i)
    });
    else if ("undefined" != typeof exports) {
      var n, i = require("underscore");
      try {
        n = require("jquery")
      } catch (a) {}
      e(t, exports, i, n)
    } else t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
  }(function(e, t, n, i) {
    var a = e.Backbone,
      r = [],
      s = r.slice;
    t.VERSION = "1.2.0", t.$ = i, t.noConflict = function() {
      return e.Backbone = a, this
    }, t.emulateHTTP = !1, t.emulateJSON = !1;
    var o = t.Events = {},
      l = /\s+/,
      u = function(e, t, i, a, r) {
        var s, o = 0;
        if (i && "object" == typeof i)
          for (s = n.keys(i); o < s.length; o++) t = e(t, s[o], i[s[o]], r);
        else if (i && l.test(i))
          for (s = i.split(l); o < s.length; o++) t = e(t, s[o], a, r);
        else t = e(t, i, a, r);
        return t
      };
    o.on = function(e, t, n) {
      return c(this, e, t, n)
    };
    var c = function(e, t, n, i, a) {
      if (e._events = u(p, e._events || {}, t, n, {
          context: i,
          ctx: e,
          listening: a
        }), a) {
        var r = e._listeners || (e._listeners = {});
        r[a.id] = a
      }
      return e
    };
    o.listenTo = function(e, t, i) {
      if (!e) return this;
      var a = e._listenId || (e._listenId = n.uniqueId("l")),
        r = this._listeningTo || (this._listeningTo = {}),
        s = r[a];
      if (!s) {
        var o = this._listenId || (this._listenId = n.uniqueId("l"));
        s = r[a] = {
          obj: e,
          objId: a,
          id: o,
          listeningTo: r,
          count: 0
        }
      }
      return c(e, t, i, this, s), this
    };
    var p = function(e, t, n, i) {
      if (n) {
        var a = e[t] || (e[t] = []),
          r = i.context,
          s = i.ctx,
          o = i.listening;
        o && o.count++, a.push({
          callback: n,
          context: r,
          ctx: r || s,
          listening: o
        })
      }
      return e
    };
    o.off = function(e, t, n) {
      return this._events ? (this._events = u(d, this._events, e, t, {
        context: n,
        listeners: this._listeners
      }), this) : this
    }, o.stopListening = function(e, t, i) {
      var a = this._listeningTo;
      if (!a) return this;
      for (var r = e ? [e._listenId] : n.keys(a), s = 0; s < r.length; s++) {
        var o = a[r[s]];
        if (!o) break;
        o.obj.off(t, i, this)
      }
      return n.isEmpty(a) && (this._listeningTo = void 0), this
    };
    var d = function(e, t, i, a) {
      if (e) {
        var r, s = 0,
          o = a.context,
          l = a.listeners;
        if (t || i || o) {
          for (var u = t ? [t] : n.keys(e); s < u.length; s++) {
            t = u[s];
            var c = e[t];
            if (!c) break;
            for (var p = [], d = 0; d < c.length; d++) {
              var h = c[d];
              i && i !== h.callback && i !== h.callback._callback || o && o !== h.context ? p.push(h) : (r = h.listening, r && 0 === --r.count && (delete l[r.id], delete r.listeningTo[r.objId]))
            }
            p.length ? e[t] = p : delete e[t]
          }
          return n.size(e) ? e : void 0
        }
        for (var _ = n.keys(l); s < _.length; s++) r = l[_[s]], delete l[r.id], delete r.listeningTo[r.objId]
      }
    };
    o.once = function(e, t, i) {
      var a = u(h, {}, e, t, n.bind(this.off, this));
      return this.on(a, void 0, i)
    }, o.listenToOnce = function(e, t, i) {
      var a = u(h, {}, t, i, n.bind(this.stopListening, this, e));
      return this.listenTo(e, a)
    };
    var h = function(e, t, i, a) {
      if (i) {
        var r = e[t] = n.once(function() {
          a(t, r), i.apply(this, arguments)
        });
        r._callback = i
      }
      return e
    };
    o.trigger = function(e) {
      if (!this._events) return this;
      for (var t = Math.max(0, arguments.length - 1), n = Array(t), i = 0; t > i; i++) n[i] = arguments[i + 1];
      return u(_, this._events, e, void 0, n), this
    };
    var _ = function(e, t, n, i) {
        if (e) {
          var a = e[t],
            r = e.all;
          a && r && (r = r.slice()), a && m(a, i), r && m(r, [t].concat(i))
        }
        return e
      },
      m = function(e, t) {
        var n, i = -1,
          a = e.length,
          r = t[0],
          s = t[1],
          o = t[2];
        switch (t.length) {
          case 0:
            for (; ++i < a;)(n = e[i]).callback.call(n.ctx);
            return;
          case 1:
            for (; ++i < a;)(n = e[i]).callback.call(n.ctx, r);
            return;
          case 2:
            for (; ++i < a;)(n = e[i]).callback.call(n.ctx, r, s);
            return;
          case 3:
            for (; ++i < a;)(n = e[i]).callback.call(n.ctx, r, s, o);
            return;
          default:
            for (; ++i < a;)(n = e[i]).callback.apply(n.ctx, t);
            return
        }
      },
      f = function(e, t, i) {
        switch (e) {
          case 1:
            return function() {
              return n[t](this[i])
            };
          case 2:
            return function(e) {
              return n[t](this[i], e)
            };
          case 3:
            return function(e, a) {
              return n[t](this[i], e, a)
            };
          case 4:
            return function(e, a, r) {
              return n[t](this[i], e, a, r)
            };
          default:
            return function() {
              var e = s.call(arguments);
              return e.unshift(this[i]), n[t].apply(n, e)
            }
        }
      },
      g = function(e, t, i) {
        n.each(t, function(t, a) {
          n[a] && (e.prototype[a] = f(t, a, i))
        })
      };
    o.bind = o.on, o.unbind = o.off, n.extend(t, o);
    var v = t.Model = function(e, t) {
      var i = e || {};
      t || (t = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
    };
    n.extend(v.prototype, o, {
      changed: null,
      validationError: null,
      idAttribute: "id",
      cidPrefix: "c",
      initialize: function() {},
      toJSON: function() {
        return n.clone(this.attributes)
      },
      sync: function() {
        return t.sync.apply(this, arguments)
      },
      get: function(e) {
        return this.attributes[e]
      },
      escape: function(e) {
        return n.escape(this.get(e))
      },
      has: function(e) {
        return null != this.get(e)
      },
      matches: function(e) {
        return !!n.iteratee(e, this)(this.attributes)
      },
      set: function(e, t, i) {
        var a, r, s, o, l, u, c, p;
        if (null == e) return this;
        if ("object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i || (i = {}), !this._validate(r, i)) return !1;
        s = i.unset, l = i.silent, o = [], u = this._changing, this._changing = !0, u || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), p = this.attributes, c = this._previousAttributes, this.idAttribute in r && (this.id = r[this.idAttribute]);
        for (a in r) t = r[a], n.isEqual(p[a], t) || o.push(a), n.isEqual(c[a], t) ? delete this.changed[a] : this.changed[a] = t, s ? delete p[a] : p[a] = t;
        if (!l) {
          o.length && (this._pending = i);
          for (var d = 0; d < o.length; d++) this.trigger("change:" + o[d], this, p[o[d]], i)
        }
        if (u) return this;
        if (!l)
          for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
        return this._pending = !1, this._changing = !1, this
      },
      unset: function(e, t) {
        return this.set(e, void 0, n.extend({}, t, {
          unset: !0
        }))
      },
      clear: function(e) {
        var t = {};
        for (var i in this.attributes) t[i] = void 0;
        return this.set(t, n.extend({}, e, {
          unset: !0
        }))
      },
      hasChanged: function(e) {
        return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
      },
      changedAttributes: function(e) {
        if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
        var t, i = !1,
          a = this._changing ? this._previousAttributes : this.attributes;
        for (var r in e) n.isEqual(a[r], t = e[r]) || ((i || (i = {}))[r] = t);
        return i
      },
      previous: function(e) {
        return null != e && this._previousAttributes ? this._previousAttributes[e] : null
      },
      previousAttributes: function() {
        return n.clone(this._previousAttributes)
      },
      fetch: function(e) {
        e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
        var t = this,
          i = e.success;
        return e.success = function(n) {
          return t.set(t.parse(n, e), e) ? (i && i.call(e.context, t, n, e), t.trigger("sync", t, n, e), void 0) : !1
        }, N(this, e), this.sync("read", this, e)
      },
      save: function(e, t, i) {
        var a, r, s, o, l = this.attributes;
        if (null == e || "object" == typeof e ? (a = e, i = t) : (a = {})[e] = t, i = n.extend({
            validate: !0
          }, i), o = i.wait, a && !o) {
          if (!this.set(a, i)) return !1
        } else if (!this._validate(a, i)) return !1;
        a && o && (this.attributes = n.extend({}, l, a)), void 0 === i.parse && (i.parse = !0);
        var u = this,
          c = i.success;
        return i.success = function(e) {
          u.attributes = l;
          var t = i.parse ? u.parse(e, i) : e;
          return o && (t = n.extend(a || {}, t)), n.isObject(t) && !u.set(t, i) ? !1 : (c && c.call(i.context, u, e, i), u.trigger("sync", u, e, i), void 0)
        }, N(this, i), r = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" !== r || i.attrs || (i.attrs = a), s = this.sync(r, this, i), a && o && (this.attributes = l), s
      },
      destroy: function(e) {
        e = e ? n.clone(e) : {};
        var t = this,
          i = e.success,
          a = e.wait,
          r = function() {
            t.stopListening(), t.trigger("destroy", t, t.collection, e)
          };
        e.success = function(n) {
          a && r(), i && i.call(e.context, t, n, e), t.isNew() || t.trigger("sync", t, n, e)
        };
        var s = !1;
        return this.isNew() ? n.defer(e.success) : (N(this, e), s = this.sync("delete", this, e)), a || r(), s
      },
      url: function() {
        var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || R();
        if (this.isNew()) return e;
        var t = this.id || this.attributes[this.idAttribute];
        return e.replace(/([^\/])$/, "$1/") + encodeURIComponent(t)
      },
      parse: function(e) {
        return e
      },
      clone: function() {
        return new this.constructor(this.attributes)
      },
      isNew: function() {
        return !this.has(this.idAttribute)
      },
      isValid: function(e) {
        return this._validate({}, n.extend(e || {}, {
          validate: !0
        }))
      },
      _validate: function(e, t) {
        if (!t.validate || !this.validate) return !0;
        e = n.extend({}, this.attributes, e);
        var i = this.validationError = this.validate(e, t) || null;
        return i ? (this.trigger("invalid", this, i, n.extend(t, {
          validationError: i
        })), !1) : !0
      }
    });
    var b = {
      keys: 1,
      values: 1,
      pairs: 1,
      invert: 1,
      pick: 0,
      omit: 0,
      chain: 1,
      isEmpty: 1
    };
    g(v, b, "attributes");
    var y = t.Collection = function(e, t) {
        t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
          silent: !0
        }, t))
      },
      w = {
        add: !0,
        remove: !0,
        merge: !0
      },
      k = {
        add: !0,
        remove: !1
      };
    n.extend(y.prototype, o, {
      model: v,
      initialize: function() {},
      toJSON: function(e) {
        return this.map(function(t) {
          return t.toJSON(e)
        })
      },
      sync: function() {
        return t.sync.apply(this, arguments)
      },
      add: function(e, t) {
        return this.set(e, n.extend({
          merge: !1
        }, t, k))
      },
      remove: function(e, t) {
        var i, a = !n.isArray(e);
        return e = a ? [e] : n.clone(e), t || (t = {}), i = this._removeModels(e, t), !t.silent && i && this.trigger("update", this, t), a ? e[0] : e
      },
      set: function(e, t) {
        t = n.defaults({}, t, w), t.parse && (e = this.parse(e, t));
        var i = !n.isArray(e);
        e = i ? e ? [e] : [] : e.slice();
        var a, r, s, o, l, u = t.at;
        null != u && (u = +u), 0 > u && (u += this.length + 1);
        for (var c = this.comparator && null == u && t.sort !== !1, p = n.isString(this.comparator) ? this.comparator : null, d = [], h = [], _ = {}, m = t.add, f = t.merge, g = t.remove, v = !c && m && g ? [] : !1, b = !1, y = 0; y < e.length; y++) {
          if (s = e[y], o = this.get(s)) g && (_[o.cid] = !0), f && s !== o && (s = this._isModel(s) ? s.attributes : s, t.parse && (s = o.parse(s, t)), o.set(s, t), c && !l && o.hasChanged(p) && (l = !0)), e[y] = o;
          else if (m) {
            if (r = e[y] = this._prepareModel(s, t), !r) continue;
            d.push(r), this._addReference(r, t)
          }
          r = o || r, r && (a = this.modelId(r.attributes), !v || !r.isNew() && _[a] || (v.push(r), b = b || !this.models[y] || r.cid !== this.models[y].cid), _[a] = !0)
        }
        if (g) {
          for (var y = 0; y < this.length; y++) _[(r = this.models[y]).cid] || h.push(r);
          h.length && this._removeModels(h, t)
        }
        if (d.length || b)
          if (c && (l = !0), this.length += d.length, null != u)
            for (var y = 0; y < d.length; y++) this.models.splice(u + y, 0, d[y]);
          else {
            v && (this.models.length = 0);
            for (var k = v || d, y = 0; y < k.length; y++) this.models.push(k[y])
          }
        if (l && this.sort({
            silent: !0
          }), !t.silent) {
          for (var S = null != u ? n.clone(t) : t, y = 0; y < d.length; y++) null != u && (S.index = u + y), (r = d[y]).trigger("add", r, this, S);
          (l || b) && this.trigger("sort", this, t), (d.length || h.length) && this.trigger("update", this, t)
        }
        return i ? e[0] : e
      },
      reset: function(e, t) {
        t = t ? n.clone(t) : {};
        for (var i = 0; i < this.models.length; i++) this._removeReference(this.models[i], t);
        return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
          silent: !0
        }, t)), t.silent || this.trigger("reset", this, t), e
      },
      push: function(e, t) {
        return this.add(e, n.extend({
          at: this.length
        }, t))
      },
      pop: function(e) {
        var t = this.at(this.length - 1);
        return this.remove(t, e), t
      },
      unshift: function(e, t) {
        return this.add(e, n.extend({
          at: 0
        }, t))
      },
      shift: function(e) {
        var t = this.at(0);
        return this.remove(t, e), t
      },
      slice: function() {
        return s.apply(this.models, arguments)
      },
      get: function(e) {
        if (null == e) return void 0;
        var t = this.modelId(this._isModel(e) ? e.attributes : e);
        return this._byId[e] || this._byId[t] || this._byId[e.cid]
      },
      at: function(e) {
        return 0 > e && (e += this.length), this.models[e]
      },
      where: function(e, t) {
        var i = n.matches(e);
        return this[t ? "find" : "filter"](function(e) {
          return i(e.attributes)
        })
      },
      findWhere: function(e) {
        return this.where(e, !0)
      },
      sort: function(e) {
        if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
        return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
      },
      pluck: function(e) {
        return n.invoke(this.models, "get", e)
      },
      fetch: function(e) {
        e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
        var t = e.success,
          i = this;
        return e.success = function(n) {
          var a = e.reset ? "reset" : "set";
          i[a](n, e), t && t.call(e.context, i, n, e), i.trigger("sync", i, n, e)
        }, N(this, e), this.sync("read", this, e)
      },
      create: function(e, t) {
        t = t ? n.clone(t) : {};
        var i = t.wait;
        if (!(e = this._prepareModel(e, t))) return !1;
        i || this.add(e, t);
        var a = this,
          r = t.success;
        return t.success = function(e, t, n) {
          i && a.add(e, n), r && r.call(n.context, e, t, n)
        }, e.save(null, t), e
      },
      parse: function(e) {
        return e
      },
      clone: function() {
        return new this.constructor(this.models, {
          model: this.model,
          comparator: this.comparator
        })
      },
      modelId: function(e) {
        return e[this.model.prototype.idAttribute || "id"]
      },
      _reset: function() {
        this.length = 0, this.models = [], this._byId = {}
      },
      _prepareModel: function(e, t) {
        if (this._isModel(e)) return e.collection || (e.collection = this), e;
        t = t ? n.clone(t) : {}, t.collection = this;
        var i = new this.model(e, t);
        return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
      },
      _removeModels: function(e, t) {
        for (var n, i, a, r = !1, n = 0, s = 0; n < e.length; n++) {
          var a = e[n] = this.get(e[n]);
          if (a) {
            var o = this.modelId(a.attributes);
            null != o && delete this._byId[o], delete this._byId[a.cid];
            var i = this.indexOf(a);
            this.models.splice(i, 1), this.length--, t.silent || (t.index = i, a.trigger("remove", a, this, t)), e[s++] = a, this._removeReference(a, t), r = !0
          }
        }
        return e.length !== s && (e = e.slice(0, s)), r
      },
      _isModel: function(e) {
        return e instanceof v
      },
      _addReference: function(e) {
        this._byId[e.cid] = e;
        var t = this.modelId(e.attributes);
        null != t && (this._byId[t] = e), e.on("all", this._onModelEvent, this)
      },
      _removeReference: function(e) {
        this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
      },
      _onModelEvent: function(e, t, n, i) {
        if ("add" !== e && "remove" !== e || n === this) {
          if ("destroy" === e && this.remove(t, i), "change" === e) {
            var a = this.modelId(t.previousAttributes()),
              r = this.modelId(t.attributes);
            a !== r && (null != a && delete this._byId[a], null != r && (this._byId[r] = t))
          }
          this.trigger.apply(this, arguments)
        }
      }
    });
    var S = {
      forEach: 3,
      each: 3,
      map: 3,
      collect: 3,
      reduce: 4,
      foldl: 4,
      inject: 4,
      reduceRight: 4,
      foldr: 4,
      find: 3,
      detect: 3,
      filter: 3,
      select: 3,
      reject: 3,
      every: 3,
      all: 3,
      some: 3,
      any: 3,
      include: 2,
      contains: 2,
      invoke: 2,
      max: 3,
      min: 3,
      toArray: 1,
      size: 1,
      first: 3,
      head: 3,
      take: 3,
      initial: 3,
      rest: 3,
      tail: 3,
      drop: 3,
      last: 3,
      without: 0,
      difference: 0,
      indexOf: 3,
      shuffle: 1,
      lastIndexOf: 3,
      isEmpty: 1,
      chain: 1,
      sample: 3,
      partition: 3
    };
    g(y, S, "models");
    var C = ["groupBy", "countBy", "sortBy", "indexBy"];
    n.each(C, function(e) {
      n[e] && (y.prototype[e] = function(t, i) {
        var a = n.isFunction(t) ? t : function(e) {
          return e.get(t)
        };
        return n[e](this.models, a, i)
      })
    });
    var P = t.View = function(e) {
        this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, W)), this._ensureElement(), this.initialize.apply(this, arguments)
      },
      T = /^(\S+)\s*(.*)$/,
      W = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    n.extend(P.prototype, o, {
      tagName: "div",
      $: function(e) {
        return this.$el.find(e)
      },
      initialize: function() {},
      render: function() {
        return this
      },
      remove: function() {
        return this._removeElement(), this.stopListening(), this
      },
      _removeElement: function() {
        this.$el.remove()
      },
      setElement: function(e) {
        return this.undelegateEvents(), this._setElement(e), this.delegateEvents(), this
      },
      _setElement: function(e) {
        this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0]
      },
      delegateEvents: function(e) {
        if (!e && !(e = n.result(this, "events"))) return this;
        this.undelegateEvents();
        for (var t in e) {
          var i = e[t];
          if (n.isFunction(i) || (i = this[e[t]]), i) {
            var a = t.match(T);
            this.delegate(a[1], a[2], n.bind(i, this))
          }
        }
        return this
      },
      delegate: function(e, t, n) {
        this.$el.on(e + ".delegateEvents" + this.cid, t, n)
      },
      undelegateEvents: function() {
        return this.$el && this.$el.off(".delegateEvents" + this.cid), this
      },
      undelegate: function(e, t, n) {
        this.$el.off(e + ".delegateEvents" + this.cid, t, n)
      },
      _createElement: function(e) {
        return document.createElement(e)
      },
      _ensureElement: function() {
        if (this.el) this.setElement(n.result(this, "el"));
        else {
          var e = n.extend({}, n.result(this, "attributes"));
          this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(e)
        }
      },
      _setAttributes: function(e) {
        this.$el.attr(e)
      }
    }), t.sync = function(e, i, a) {
      var r = x[e];
      n.defaults(a || (a = {}), {
        emulateHTTP: t.emulateHTTP,
        emulateJSON: t.emulateJSON
      });
      var s = {
        type: r,
        dataType: "json"
      };
      if (a.url || (s.url = n.result(i, "url") || R()), null != a.data || !i || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(a.attrs || i.toJSON(a))), a.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
          model: s.data
        } : {}), a.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
        s.type = "POST", a.emulateJSON && (s.data._method = r);
        var o = a.beforeSend;
        a.beforeSend = function(e) {
          return e.setRequestHeader("X-HTTP-Method-Override", r), o ? o.apply(this, arguments) : void 0
        }
      }
      "GET" === s.type || a.emulateJSON || (s.processData = !1);
      var l = a.error;
      a.error = function(e, t, n) {
        a.textStatus = t, a.errorThrown = n, l && l.call(a.context, e, t, n)
      };
      var u = a.xhr = t.ajax(n.extend(s, a));
      return i.trigger("request", i, u, a), u
    };
    var x = {
      create: "POST",
      update: "PUT",
      patch: "PATCH",
      "delete": "DELETE",
      read: "GET"
    };
    t.ajax = function() {
      return t.$.ajax.apply(t.$, arguments)
    };
    var A = t.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
      },
      F = /\((.*?)\)/g,
      I = /(\(\?)?:\w+/g,
      L = /\*\w+/g,
      M = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(A.prototype, o, {
      initialize: function() {},
      route: function(e, i, a) {
        n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && (a = i, i = ""), a || (a = this[i]);
        var r = this;
        return t.history.route(e, function(n) {
          var s = r._extractParameters(e, n);
          r.execute(a, s, i) !== !1 && (r.trigger.apply(r, ["route:" + i].concat(s)), r.trigger("route", i, s), t.history.trigger("route", r, i, s))
        }), this
      },
      execute: function(e, t) {
        e && e.apply(this, t)
      },
      navigate: function(e, n) {
        return t.history.navigate(e, n), this
      },
      _bindRoutes: function() {
        if (this.routes) {
          this.routes = n.result(this, "routes");
          for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
        }
      },
      _routeToRegExp: function(e) {
        return e = e.replace(M, "\\$&").replace(F, "(?:$1)?").replace(I, function(e, t) {
          return t ? e : "([^/?]+)"
        }).replace(L, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
      },
      _extractParameters: function(e, t) {
        var i = e.exec(t).slice(1);
        return n.map(i, function(e, t) {
          return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
        })
      }
    });
    var E = t.History = function() {
        this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
      },
      j = /^[#\/]|\s+$/g,
      D = /^\/+|\/+$/g,
      $ = /#.*$/;
    E.started = !1, n.extend(E.prototype, o, {
      interval: 50,
      atRoot: function() {
        var e = this.location.pathname.replace(/[^\/]$/, "$&/");
        return e === this.root && !this.getSearch()
      },
      matchRoot: function() {
        var e = this.decodeFragment(this.location.pathname),
          t = e.slice(0, this.root.length - 1) + "/";
        return t === this.root
      },
      decodeFragment: function(e) {
        return decodeURI(e.replace(/%25/g, "%2525"))
      },
      getSearch: function() {
        var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
        return e ? e[0] : ""
      },
      getHash: function(e) {
        var t = (e || this).location.href.match(/#(.*)$/);
        return t ? t[1] : ""
      },
      getPath: function() {
        var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
        return "/" === e.charAt(0) ? e.slice(1) : e
      },
      getFragment: function(e) {
        return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), e.replace(j, "")
      },
      start: function(e) {
        if (E.started) throw new Error("Backbone.history has already been started");
        if (E.started = !0, this.options = n.extend({
            root: "/"
          }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window, this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(D, "/"), this._wantsHashChange && this._wantsPushState) {
          if (!this._hasPushState && !this.atRoot()) {
            var t = this.root.slice(0, -1) || "/";
            return this.location.replace(t + "#" + this.getPath()), !0
          }
          this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
            replace: !0
          })
        }
        if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
          var i = document.createElement("iframe");
          i.src = "javascript:0", i.style.display = "none", i.tabIndex = -1;
          var a = document.body;
          this.iframe = a.insertBefore(i, a.firstChild).contentWindow, this.iframe.document.open().close(), this.iframe.location.hash = "#" + this.fragment
        }
        var r = window.addEventListener || function(e, t) {
          return attachEvent("on" + e, t)
        };
        return this._usePushState ? r("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? r("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.options.silent ? void 0 : this.loadUrl()
      },
      stop: function() {
        var e = window.removeEventListener || function(e, t) {
          return detachEvent("on" + e, t)
        };
        this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe.frameElement), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), E.started = !1
      },
      route: function(e, t) {
        this.handlers.unshift({
          route: e,
          callback: t
        })
      },
      checkUrl: function() {
        var e = this.getFragment();
        return e === this.fragment && this.iframe && (e = this.getHash(this.iframe)), e === this.fragment ? !1 : (this.iframe && this.navigate(e), this.loadUrl(), void 0)
      },
      loadUrl: function(e) {
        return this.matchRoot() ? (e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) {
          return t.route.test(e) ? (t.callback(e), !0) : void 0
        })) : !1
      },
      navigate: function(e, t) {
        if (!E.started) return !1;
        t && t !== !0 || (t = {
          trigger: !!t
        }), e = this.getFragment(e || "");
        var n = this.root;
        ("" === e || "?" === e.charAt(0)) && (n = n.slice(0, -1) || "/");
        var i = n + e;
        if (e = this.decodeFragment(e.replace($, "")), this.fragment !== e) {
          if (this.fragment = e, this._usePushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i);
          else {
            if (!this._wantsHashChange) return this.location.assign(i);
            this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
          }
          return t.trigger ? this.loadUrl(e) : void 0
        }
      },
      _updateHash: function(e, t, n) {
        if (n) {
          var i = e.href.replace(/(javascript:|#).*$/, "");
          e.replace(i + "#" + t)
        } else e.hash = "#" + t
      }
    }), t.history = new E;
    var B = function(e, t) {
      var i, a = this;
      i = e && n.has(e, "constructor") ? e.constructor : function() {
        return a.apply(this, arguments)
      }, n.extend(i, a, t);
      var r = function() {
        this.constructor = i
      };
      return r.prototype = a.prototype, i.prototype = new r, e && n.extend(i.prototype, e), i.__super__ = a.prototype, i
    };
    v.extend = y.extend = A.extend = P.extend = E.extend = B;
    var R = function() {
        throw new Error('A "url" property or function must be specified')
      },
      N = function(e, t) {
        var n = t.error;
        t.error = function(i) {
          n && n.call(t.context, e, i, t), e.trigger("error", e, i, t)
        }
      };
    return t
  }),
  function(e) {
    function t(e, t, n) {
      switch (arguments.length) {
        case 2:
          return null != e ? e : t;
        case 3:
          return null != e ? e : null != t ? t : n;
        default:
          throw new Error("Implement me")
      }
    }

    function n(e, t) {
      return Wt.call(e, t)
    }

    function i() {
      return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1
      }
    }

    function a(e) {
      wt.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function r(e, t) {
      var n = !0;
      return _(function() {
        return n && (a(e), n = !1), t.apply(this, arguments)
      }, t)
    }

    function s(e, t) {
      bn[e] || (a(t), bn[e] = !0)
    }

    function o(e, t) {
      return function(n) {
        return g(e.call(this, n), t)
      }
    }

    function l(e, t) {
      return function(n) {
        return this.localeData().ordinal(e.call(this, n), t)
      }
    }

    function u(e, t) {
      var n, i, a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
        r = e.clone().add(a, "months");
      return 0 > t - r ? (n = e.clone().add(a - 1, "months"), i = (t - r) / (r - n)) : (n = e.clone().add(a + 1, "months"), i = (t - r) / (n - r)), -(a + i)
    }

    function c(e, t, n) {
      var i;
      return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (i = e.isPM(n), i && 12 > t && (t += 12), i || 12 !== t || (t = 0), t) : t
    }

    function p() {}

    function d(e, t) {
      t !== !1 && M(e), m(this, e), this._d = new Date(+e._d), wn === !1 && (wn = !0, wt.updateOffset(this), wn = !1)
    }

    function h(e) {
      var t = T(e),
        n = t.year || 0,
        i = t.quarter || 0,
        a = t.month || 0,
        r = t.week || 0,
        s = t.day || 0,
        o = t.hour || 0,
        l = t.minute || 0,
        u = t.second || 0,
        c = t.millisecond || 0;
      this._milliseconds = +c + 1e3 * u + 6e4 * l + 36e5 * o, this._days = +s + 7 * r, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = wt.localeData(), this._bubble()
    }

    function _(e, t) {
      for (var i in t) n(t, i) && (e[i] = t[i]);
      return n(t, "toString") && (e.toString = t.toString), n(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function m(e, t) {
      var n, i, a;
      if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = t._pf), "undefined" != typeof t._locale && (e._locale = t._locale), Dt.length > 0)
        for (n in Dt) i = Dt[n], a = t[i], "undefined" != typeof a && (e[i] = a);
      return e
    }

    function f(e) {
      return 0 > e ? Math.ceil(e) : Math.floor(e)
    }

    function g(e, t, n) {
      for (var i = "" + Math.abs(e), a = e >= 0; i.length < t;) i = "0" + i;
      return (a ? n ? "+" : "" : "-") + i
    }

    function v(e, t) {
      var n = {
        milliseconds: 0,
        months: 0
      };
      return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function b(e, t) {
      var n;
      return t = B(t, e), e.isBefore(t) ? n = v(e, t) : (n = v(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
    }

    function y(e, t) {
      return function(n, i) {
        var a, r;
        return null === i || isNaN(+i) || (s(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), r = n, n = i, i = r), n = "string" == typeof n ? +n : n, a = wt.duration(n, i), w(this, a, e), this
      }
    }

    function w(e, t, n, i) {
      var a = t._milliseconds,
        r = t._days,
        s = t._months;
      i = null == i ? !0 : i, a && e._d.setTime(+e._d + a * n), r && mt(e, "Date", _t(e, "Date") + r * n), s && ht(e, _t(e, "Month") + s * n), i && wt.updateOffset(e, r || s)
    }

    function k(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    }

    function S(e) {
      return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
    }

    function C(e, t, n) {
      var i, a = Math.min(e.length, t.length),
        r = Math.abs(e.length - t.length),
        s = 0;
      for (i = 0; a > i; i++)(n && e[i] !== t[i] || !n && x(e[i]) !== x(t[i])) && s++;
      return s + r
    }

    function P(e) {
      if (e) {
        var t = e.toLowerCase().replace(/(.)s$/, "$1");
        e = dn[e] || hn[t] || t
      }
      return e
    }

    function T(e) {
      var t, i, a = {};
      for (i in e) n(e, i) && (t = P(i), t && (a[t] = e[i]));
      return a
    }

    function W(t) {
      var n, i;
      if (0 === t.indexOf("week")) n = 7, i = "day";
      else {
        if (0 !== t.indexOf("month")) return;
        n = 12, i = "month"
      }
      wt[t] = function(a, r) {
        var s, o, l = wt._locale[t],
          u = [];
        if ("number" == typeof a && (r = a, a = e), o = function(e) {
            var t = wt().utc().set(i, e);
            return l.call(wt._locale, t, a || "")
          }, null != r) return o(r);
        for (s = 0; n > s; s++) u.push(o(s));
        return u
      }
    }

    function x(e) {
      var t = +e,
        n = 0;
      return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
    }

    function A(e, t) {
      return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }

    function F(e, t, n) {
      return ut(wt([e, 11, 31 + t - n]), t, n).week
    }

    function I(e) {
      return L(e) ? 366 : 365
    }

    function L(e) {
      return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }

    function M(e) {
      var t;
      e._a && -2 === e._pf.overflow && (t = e._a[At] < 0 || e._a[At] > 11 ? At : e._a[Ft] < 1 || e._a[Ft] > A(e._a[xt], e._a[At]) ? Ft : e._a[It] < 0 || e._a[It] > 24 || 24 === e._a[It] && (0 !== e._a[Lt] || 0 !== e._a[Mt] || 0 !== e._a[Et]) ? It : e._a[Lt] < 0 || e._a[Lt] > 59 ? Lt : e._a[Mt] < 0 || e._a[Mt] > 59 ? Mt : e._a[Et] < 0 || e._a[Et] > 999 ? Et : -1, e._pf._overflowDayOfYear && (xt > t || t > Ft) && (t = Ft), e._pf.overflow = t)
    }

    function E(t) {
      return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length && t._pf.bigHour === e)), t._isValid
    }

    function j(e) {
      return e ? e.toLowerCase().replace("_", "-") : e
    }

    function D(e) {
      for (var t, n, i, a, r = 0; r < e.length;) {
        for (a = j(e[r]).split("-"), t = a.length, n = j(e[r + 1]), n = n ? n.split("-") : null; t > 0;) {
          if (i = $(a.slice(0, t).join("-"))) return i;
          if (n && n.length >= t && C(a, n, !0) >= t - 1) break;
          t--
        }
        r++
      }
      return null
    }

    function $(e) {
      var t = null;
      if (!jt[e] && $t) try {
        t = wt.locale(), require("./locale/" + e), wt.locale(t)
      } catch (n) {}
      return jt[e]
    }

    function B(e, t) {
      var n, i;
      return t._isUTC ? (n = t.clone(), i = (wt.isMoment(e) || S(e) ? +e : +wt(e)) - +n, n._d.setTime(+n._d + i), wt.updateOffset(n, !1), n) : wt(e).local()
    }

    function R(e) {
      return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function N(e) {
      var t, n, i = e.match(Ut);
      for (t = 0, n = i.length; n > t; t++) i[t] = vn[i[t]] ? vn[i[t]] : R(i[t]);
      return function(a) {
        var r = "";
        for (t = 0; n > t; t++) r += i[t] instanceof Function ? i[t].call(a, e) : i[t];
        return r
      }
    }

    function U(e, t) {
      return e.isValid() ? (t = V(t, e.localeData()), _n[t] || (_n[t] = N(t)), _n[t](e)) : e.localeData().invalidDate()
    }

    function V(e, t) {
      function n(e) {
        return t.longDateFormat(e) || e
      }
      var i = 5;
      for (Vt.lastIndex = 0; i >= 0 && Vt.test(e);) e = e.replace(Vt, n), Vt.lastIndex = 0, i -= 1;
      return e
    }

    function O(e, t) {
      var n, i = t._strict;
      switch (e) {
        case "Q":
          return Qt;
        case "DDDD":
          return tn;
        case "YYYY":
        case "GGGG":
        case "gggg":
          return i ? nn : Ht;
        case "Y":
        case "G":
        case "g":
          return rn;
        case "YYYYYY":
        case "YYYYY":
        case "GGGGG":
        case "ggggg":
          return i ? an : Gt;
        case "S":
          if (i) return Qt;
        case "SS":
          if (i) return en;
        case "SSS":
          if (i) return tn;
        case "DDD":
          return zt;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
          return qt;
        case "a":
        case "A":
          return t._locale._meridiemParse;
        case "x":
          return Jt;
        case "X":
          return Zt;
        case "Z":
        case "ZZ":
          return Kt;
        case "T":
          return Xt;
        case "SSSS":
          return Yt;
        case "MM":
        case "DD":
        case "YY":
        case "GG":
        case "gg":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "ww":
        case "WW":
          return i ? en : Ot;
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
        case "w":
        case "W":
        case "e":
        case "E":
          return Ot;
        case "Do":
          return i ? t._locale._ordinalParse : t._locale._ordinalParseLenient;
        default:
          return n = new RegExp(Z(J(e.replace("\\", "")), "i"))
      }
    }

    function z(e) {
      e = e || "";
      var t = e.match(Kt) || [],
        n = t[t.length - 1] || [],
        i = (n + "").match(cn) || ["-", 0, 0],
        a = +(60 * i[1]) + x(i[2]);
      return "+" === i[0] ? a : -a
    }

    function H(e, t, n) {
      var i, a = n._a;
      switch (e) {
        case "Q":
          null != t && (a[At] = 3 * (x(t) - 1));
          break;
        case "M":
        case "MM":
          null != t && (a[At] = x(t) - 1);
          break;
        case "MMM":
        case "MMMM":
          i = n._locale.monthsParse(t, e, n._strict), null != i ? a[At] = i : n._pf.invalidMonth = t;
          break;
        case "D":
        case "DD":
          null != t && (a[Ft] = x(t));
          break;
        case "Do":
          null != t && (a[Ft] = x(parseInt(t.match(/\d{1,2}/)[0], 10)));
          break;
        case "DDD":
        case "DDDD":
          null != t && (n._dayOfYear = x(t));
          break;
        case "YY":
          a[xt] = wt.parseTwoDigitYear(t);
          break;
        case "YYYY":
        case "YYYYY":
        case "YYYYYY":
          a[xt] = x(t);
          break;
        case "a":
        case "A":
          n._meridiem = t;
          break;
        case "h":
        case "hh":
          n._pf.bigHour = !0;
        case "H":
        case "HH":
          a[It] = x(t);
          break;
        case "m":
        case "mm":
          a[Lt] = x(t);
          break;
        case "s":
        case "ss":
          a[Mt] = x(t);
          break;
        case "S":
        case "SS":
        case "SSS":
        case "SSSS":
          a[Et] = x(1e3 * ("0." + t));
          break;
        case "x":
          n._d = new Date(x(t));
          break;
        case "X":
          n._d = new Date(1e3 * parseFloat(t));
          break;
        case "Z":
        case "ZZ":
          n._useUTC = !0, n._tzm = z(t);
          break;
        case "dd":
        case "ddd":
        case "dddd":
          i = n._locale.weekdaysParse(t), null != i ? (n._w = n._w || {}, n._w.d = i) : n._pf.invalidWeekday = t;
          break;
        case "w":
        case "ww":
        case "W":
        case "WW":
        case "d":
        case "e":
        case "E":
          e = e.substr(0, 1);
        case "gggg":
        case "GGGG":
        case "GGGGG":
          e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = x(t));
          break;
        case "gg":
        case "GG":
          n._w = n._w || {}, n._w[e] = wt.parseTwoDigitYear(t)
      }
    }

    function G(e) {
      var n, i, a, r, s, o, l;
      n = e._w, null != n.GG || null != n.W || null != n.E ? (s = 1, o = 4, i = t(n.GG, e._a[xt], ut(wt(), 1, 4).year), a = t(n.W, 1), r = t(n.E, 1)) : (s = e._locale._week.dow, o = e._locale._week.doy, i = t(n.gg, e._a[xt], ut(wt(), s, o).year), a = t(n.w, 1), null != n.d ? (r = n.d, s > r && ++a) : r = null != n.e ? n.e + s : s), l = ct(i, a, r, o, s), e._a[xt] = l.year, e._dayOfYear = l.dayOfYear
    }

    function Y(e) {
      var n, i, a, r, s = [];
      if (!e._d) {
        for (a = K(e), e._w && null == e._a[Ft] && null == e._a[At] && G(e), e._dayOfYear && (r = t(e._a[xt], a[xt]), e._dayOfYear > I(r) && (e._pf._overflowDayOfYear = !0), i = rt(r, 0, e._dayOfYear), e._a[At] = i.getUTCMonth(), e._a[Ft] = i.getUTCDate()), n = 0; 3 > n && null == e._a[n]; ++n) e._a[n] = s[n] = a[n];
        for (; 7 > n; n++) e._a[n] = s[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
        24 === e._a[It] && 0 === e._a[Lt] && 0 === e._a[Mt] && 0 === e._a[Et] && (e._nextDay = !0, e._a[It] = 0), e._d = (e._useUTC ? rt : at).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[It] = 24)
      }
    }

    function q(e) {
      var t;
      e._d || (t = T(e._i), e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], Y(e))
    }

    function K(e) {
      var t = new Date;
      return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }

    function X(t) {
      if (t._f === wt.ISO_8601) return et(t), void 0;
      t._a = [], t._pf.empty = !0;
      var n, i, a, r, s, o = "" + t._i,
        l = o.length,
        u = 0;
      for (a = V(t._f, t._locale).match(Ut) || [], n = 0; n < a.length; n++) r = a[n], i = (o.match(O(r, t)) || [])[0], i && (s = o.substr(0, o.indexOf(i)), s.length > 0 && t._pf.unusedInput.push(s), o = o.slice(o.indexOf(i) + i.length), u += i.length), vn[r] ? (i ? t._pf.empty = !1 : t._pf.unusedTokens.push(r), H(r, i, t)) : t._strict && !i && t._pf.unusedTokens.push(r);
      t._pf.charsLeftOver = l - u, o.length > 0 && t._pf.unusedInput.push(o), t._pf.bigHour === !0 && t._a[It] <= 12 && (t._pf.bigHour = e), t._a[It] = c(t._locale, t._a[It], t._meridiem), Y(t), M(t)
    }

    function J(e) {
      return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, a) {
        return t || n || i || a
      })
    }

    function Z(e) {
      return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function Q(e) {
      var t, n, a, r, s;
      if (0 === e._f.length) return e._pf.invalidFormat = !0, e._d = new Date(0 / 0), void 0;
      for (r = 0; r < e._f.length; r++) s = 0, t = m({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._pf = i(), t._f = e._f[r], X(t), E(t) && (s += t._pf.charsLeftOver, s += 10 * t._pf.unusedTokens.length, t._pf.score = s, (null == a || a > s) && (a = s, n = t));
      _(e, n || t)
    }

    function et(e) {
      var t, n, i = e._i,
        a = sn.exec(i);
      if (a) {
        for (e._pf.iso = !0, t = 0, n = ln.length; n > t; t++)
          if (ln[t][1].exec(i)) {
            e._f = ln[t][0] + (a[6] || " ");
            break
          }
        for (t = 0, n = un.length; n > t; t++)
          if (un[t][1].exec(i)) {
            e._f += un[t][0];
            break
          }
        i.match(Kt) && (e._f += "Z"), X(e)
      } else e._isValid = !1
    }

    function tt(e) {
      et(e), e._isValid === !1 && (delete e._isValid, wt.createFromInputFallback(e))
    }

    function nt(e, t) {
      var n, i = [];
      for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
      return i
    }

    function it(t) {
      var n, i = t._i;
      i === e ? t._d = new Date : S(i) ? t._d = new Date(+i) : null !== (n = Bt.exec(i)) ? t._d = new Date(+n[1]) : "string" == typeof i ? tt(t) : k(i) ? (t._a = nt(i.slice(0), function(e) {
        return parseInt(e, 10)
      }), Y(t)) : "object" == typeof i ? q(t) : "number" == typeof i ? t._d = new Date(i) : wt.createFromInputFallback(t)
    }

    function at(e, t, n, i, a, r, s) {
      var o = new Date(e, t, n, i, a, r, s);
      return 1970 > e && o.setFullYear(e), o
    }

    function rt(e) {
      var t = new Date(Date.UTC.apply(null, arguments));
      return 1970 > e && t.setUTCFullYear(e), t
    }

    function st(e, t) {
      if ("string" == typeof e)
        if (isNaN(e)) {
          if (e = t.weekdaysParse(e), "number" != typeof e) return null
        } else e = parseInt(e, 10);
      return e
    }

    function ot(e, t, n, i, a) {
      return a.relativeTime(t || 1, !!n, e, i)
    }

    function lt(e, t, n) {
      var i = wt.duration(e).abs(),
        a = Tt(i.as("s")),
        r = Tt(i.as("m")),
        s = Tt(i.as("h")),
        o = Tt(i.as("d")),
        l = Tt(i.as("M")),
        u = Tt(i.as("y")),
        c = a < mn.s && ["s", a] || 1 === r && ["m"] || r < mn.m && ["mm", r] || 1 === s && ["h"] || s < mn.h && ["hh", s] || 1 === o && ["d"] || o < mn.d && ["dd", o] || 1 === l && ["M"] || l < mn.M && ["MM", l] || 1 === u && ["y"] || ["yy", u];
      return c[2] = t, c[3] = +e > 0, c[4] = n, ot.apply({}, c)
    }

    function ut(e, t, n) {
      var i, a = n - t,
        r = n - e.day();
      return r > a && (r -= 7), a - 7 > r && (r += 7), i = wt(e).add(r, "d"), {
        week: Math.ceil(i.dayOfYear() / 7),
        year: i.year()
      }
    }

    function ct(e, t, n, i, a) {
      var r, s, o = rt(e, 0, 1).getUTCDay();
      return o = 0 === o ? 7 : o, n = null != n ? n : a, r = a - o + (o > i ? 7 : 0) - (a > o ? 7 : 0), s = 7 * (t - 1) + (n - a) + r + 1, {
        year: s > 0 ? e : e - 1,
        dayOfYear: s > 0 ? s : I(e - 1) + s
      }
    }

    function pt(t) {
      var n, i = t._i,
        a = t._f;
      return t._locale = t._locale || wt.localeData(t._l), null === i || a === e && "" === i ? wt.invalid({
        nullInput: !0
      }) : ("string" == typeof i && (t._i = i = t._locale.preparse(i)), wt.isMoment(i) ? new d(i, !0) : (a ? k(a) ? Q(t) : X(t) : it(t), n = new d(t), n._nextDay && (n.add(1, "d"), n._nextDay = e), n))
    }

    function dt(e, t) {
      var n, i;
      if (1 === t.length && k(t[0]) && (t = t[0]), !t.length) return wt();
      for (n = t[0], i = 1; i < t.length; ++i) t[i][e](n) && (n = t[i]);
      return n
    }

    function ht(e, t) {
      var n;
      return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), A(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
    }

    function _t(e, t) {
      return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }

    function mt(e, t, n) {
      return "Month" === t ? ht(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }

    function ft(e, t) {
      return function(n) {
        return null != n ? (mt(this, e, n), wt.updateOffset(this, t), this) : _t(this, e)
      }
    }

    function gt(e) {
      return 400 * e / 146097
    }

    function vt(e) {
      return 146097 * e / 400
    }

    function bt(e) {
      wt.duration.fn[e] = function() {
        return this._data[e]
      }
    }

    function yt(e) {
      "undefined" == typeof ender && (kt = Pt.moment, Pt.moment = e ? r("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", wt) : wt)
    }
    for (var wt, kt, St, Ct = "2.9.0", Pt = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, Tt = Math.round, Wt = Object.prototype.hasOwnProperty, xt = 0, At = 1, Ft = 2, It = 3, Lt = 4, Mt = 5, Et = 6, jt = {}, Dt = [], $t = "undefined" != typeof module && module && module.exports, Bt = /^\/?Date\((\-?\d+)/i, Rt = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Nt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Ut = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Vt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ot = /\d\d?/, zt = /\d{1,3}/, Ht = /\d{1,4}/, Gt = /[+\-]?\d{1,6}/, Yt = /\d+/, qt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Kt = /Z|[\+\-]\d\d:?\d\d/gi, Xt = /T/i, Jt = /[\+\-]?\d+/, Zt = /[\+\-]?\d+(\.\d{1,3})?/, Qt = /\d/, en = /\d\d/, tn = /\d{3}/, nn = /\d{4}/, an = /[+-]?\d{6}/, rn = /[+-]?\d+/, sn = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, on = "YYYY-MM-DDTHH:mm:ssZ", ln = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
        ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
        ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d{2}/],
        ["YYYY-DDD", /\d{4}-\d{3}/]
      ], un = [
        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
      ], cn = /([\+\-]|\d\d)/gi, pn = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
      }), dn = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        Q: "quarter",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
      }, hn = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
      }, _n = {}, mn = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
      }, fn = "DDD w W M D d".split(" "), gn = "M D H h m s w W".split(" "), vn = {
        M: function() {
          return this.month() + 1
        },
        MMM: function(e) {
          return this.localeData().monthsShort(this, e)
        },
        MMMM: function(e) {
          return this.localeData().months(this, e)
        },
        D: function() {
          return this.date()
        },
        DDD: function() {
          return this.dayOfYear()
        },
        d: function() {
          return this.day()
        },
        dd: function(e) {
          return this.localeData().weekdaysMin(this, e)
        },
        ddd: function(e) {
          return this.localeData().weekdaysShort(this, e)
        },
        dddd: function(e) {
          return this.localeData().weekdays(this, e)
        },
        w: function() {
          return this.week()
        },
        W: function() {
          return this.isoWeek()
        },
        YY: function() {
          return g(this.year() % 100, 2)
        },
        YYYY: function() {
          return g(this.year(), 4)
        },
        YYYYY: function() {
          return g(this.year(), 5)
        },
        YYYYYY: function() {
          var e = this.year(),
            t = e >= 0 ? "+" : "-";
          return t + g(Math.abs(e), 6)
        },
        gg: function() {
          return g(this.weekYear() % 100, 2)
        },
        gggg: function() {
          return g(this.weekYear(), 4)
        },
        ggggg: function() {
          return g(this.weekYear(), 5)
        },
        GG: function() {
          return g(this.isoWeekYear() % 100, 2)
        },
        GGGG: function() {
          return g(this.isoWeekYear(), 4)
        },
        GGGGG: function() {
          return g(this.isoWeekYear(), 5)
        },
        e: function() {
          return this.weekday()
        },
        E: function() {
          return this.isoWeekday()
        },
        a: function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
          return this.hours()
        },
        h: function() {
          return this.hours() % 12 || 12
        },
        m: function() {
          return this.minutes()
        },
        s: function() {
          return this.seconds()
        },
        S: function() {
          return x(this.milliseconds() / 100)
        },
        SS: function() {
          return g(x(this.milliseconds() / 10), 2)
        },
        SSS: function() {
          return g(this.milliseconds(), 3)
        },
        SSSS: function() {
          return g(this.milliseconds(), 3)
        },
        Z: function() {
          var e = this.utcOffset(),
            t = "+";
          return 0 > e && (e = -e, t = "-"), t + g(x(e / 60), 2) + ":" + g(x(e) % 60, 2)
        },
        ZZ: function() {
          var e = this.utcOffset(),
            t = "+";
          return 0 > e && (e = -e, t = "-"), t + g(x(e / 60), 2) + g(x(e) % 60, 2)
        },
        z: function() {
          return this.zoneAbbr()
        },
        zz: function() {
          return this.zoneName()
        },
        x: function() {
          return this.valueOf()
        },
        X: function() {
          return this.unix()
        },
        Q: function() {
          return this.quarter()
        }
      }, bn = {}, yn = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], wn = !1; fn.length;) St = fn.pop(), vn[St + "o"] = l(vn[St], St);
    for (; gn.length;) St = gn.pop(), vn[St + St] = o(vn[St], 2);
    vn.DDDD = o(vn.DDD, 3), _(p.prototype, {
      set: function(e) {
        var t, n;
        for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
      },
      _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      months: function(e) {
        return this._months[e.month()]
      },
      _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      monthsShort: function(e) {
        return this._monthsShort[e.month()]
      },
      monthsParse: function(e, t, n) {
        var i, a, r;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
          if (a = wt.utc([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
          if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
          if (!n && this._monthsParse[i].test(e)) return i
        }
      },
      _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdays: function(e) {
        return this._weekdays[e.day()]
      },
      _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      weekdaysShort: function(e) {
        return this._weekdaysShort[e.day()]
      },
      _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      weekdaysMin: function(e) {
        return this._weekdaysMin[e.day()]
      },
      weekdaysParse: function(e) {
        var t, n, i;
        for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
          if (this._weekdaysParse[t] || (n = wt([2e3, 1]).day(t), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
      },
      _longDateFormat: {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY LT",
        LLLL: "dddd, MMMM D, YYYY LT"
      },
      longDateFormat: function(e) {
        var t = this._longDateFormat[e];
        return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
          return e.slice(1)
        }), this._longDateFormat[e] = t), t
      },
      isPM: function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
      },
      _meridiemParse: /[ap]\.?m?\.?/i,
      meridiem: function(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
      },
      _calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      calendar: function(e, t, n) {
        var i = this._calendar[e];
        return "function" == typeof i ? i.apply(t, [n]) : i
      },
      _relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      relativeTime: function(e, t, n, i) {
        var a = this._relativeTime[n];
        return "function" == typeof a ? a(e, t, n, i) : a.replace(/%d/i, e)
      },
      pastFuture: function(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
      },
      ordinal: function(e) {
        return this._ordinal.replace("%d", e)
      },
      _ordinal: "%d",
      _ordinalParse: /\d{1,2}/,
      preparse: function(e) {
        return e
      },
      postformat: function(e) {
        return e
      },
      week: function(e) {
        return ut(e, this._week.dow, this._week.doy).week
      },
      _week: {
        dow: 0,
        doy: 6
      },
      firstDayOfWeek: function() {
        return this._week.dow
      },
      firstDayOfYear: function() {
        return this._week.doy
      },
      _invalidDate: "Invalid date",
      invalidDate: function() {
        return this._invalidDate
      }
    }), wt = function(t, n, a, r) {
      var s;
      return "boolean" == typeof a && (r = a, a = e), s = {}, s._isAMomentObject = !0, s._i = t, s._f = n, s._l = a, s._strict = r, s._isUTC = !1, s._pf = i(), pt(s)
    }, wt.suppressDeprecationWarnings = !1, wt.createFromInputFallback = r("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
      e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), wt.min = function() {
      var e = [].slice.call(arguments, 0);
      return dt("isBefore", e)
    }, wt.max = function() {
      var e = [].slice.call(arguments, 0);
      return dt("isAfter", e)
    }, wt.utc = function(t, n, a, r) {
      var s;
      return "boolean" == typeof a && (r = a, a = e), s = {}, s._isAMomentObject = !0, s._useUTC = !0, s._isUTC = !0, s._l = a, s._i = t, s._f = n, s._strict = r, s._pf = i(), pt(s).utc()
    }, wt.unix = function(e) {
      return wt(1e3 * e)
    }, wt.duration = function(e, t) {
      var i, a, r, s, o = e,
        l = null;
      return wt.isDuration(e) ? o = {
        ms: e._milliseconds,
        d: e._days,
        M: e._months
      } : "number" == typeof e ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (l = Rt.exec(e)) ? (i = "-" === l[1] ? -1 : 1, o = {
        y: 0,
        d: x(l[Ft]) * i,
        h: x(l[It]) * i,
        m: x(l[Lt]) * i,
        s: x(l[Mt]) * i,
        ms: x(l[Et]) * i
      }) : (l = Nt.exec(e)) ? (i = "-" === l[1] ? -1 : 1, r = function(e) {
        var t = e && parseFloat(e.replace(",", "."));
        return (isNaN(t) ? 0 : t) * i
      }, o = {
        y: r(l[2]),
        M: r(l[3]),
        d: r(l[4]),
        h: r(l[5]),
        m: r(l[6]),
        s: r(l[7]),
        w: r(l[8])
      }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (s = b(wt(o.from), wt(o.to)), o = {}, o.ms = s.milliseconds, o.M = s.months), a = new h(o), wt.isDuration(e) && n(e, "_locale") && (a._locale = e._locale), a
    }, wt.version = Ct, wt.defaultFormat = on, wt.ISO_8601 = function() {}, wt.momentProperties = Dt, wt.updateOffset = function() {}, wt.relativeTimeThreshold = function(t, n) {
      return mn[t] === e ? !1 : n === e ? mn[t] : (mn[t] = n, !0)
    }, wt.lang = r("moment.lang is deprecated. Use moment.locale instead.", function(e, t) {
      return wt.locale(e, t)
    }), wt.locale = function(e, t) {
      var n;
      return e && (n = "undefined" != typeof t ? wt.defineLocale(e, t) : wt.localeData(e), n && (wt.duration._locale = wt._locale = n)), wt._locale._abbr
    }, wt.defineLocale = function(e, t) {
      return null !== t ? (t.abbr = e, jt[e] || (jt[e] = new p), jt[e].set(t), wt.locale(e), jt[e]) : (delete jt[e], null)
    }, wt.langData = r("moment.langData is deprecated. Use moment.localeData instead.", function(e) {
      return wt.localeData(e)
    }), wt.localeData = function(e) {
      var t;
      if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return wt._locale;
      if (!k(e)) {
        if (t = $(e)) return t;
        e = [e]
      }
      return D(e)
    }, wt.isMoment = function(e) {
      return e instanceof d || null != e && n(e, "_isAMomentObject")
    }, wt.isDuration = function(e) {
      return e instanceof h
    };
    for (St = yn.length - 1; St >= 0; --St) W(yn[St]);
    wt.normalizeUnits = function(e) {
      return P(e)
    }, wt.invalid = function(e) {
      var t = wt.utc(0 / 0);
      return null != e ? _(t._pf, e) : t._pf.userInvalidated = !0, t
    }, wt.parseZone = function() {
      return wt.apply(null, arguments).parseZone()
    }, wt.parseTwoDigitYear = function(e) {
      return x(e) + (x(e) > 68 ? 1900 : 2e3)
    }, wt.isDate = S, _(wt.fn = d.prototype, {
      clone: function() {
        return wt(this)
      },
      valueOf: function() {
        return +this._d - 6e4 * (this._offset || 0)
      },
      unix: function() {
        return Math.floor(+this / 1e3)
      },
      toString: function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
      },
      toDate: function() {
        return this._offset ? new Date(+this) : this._d
      },
      toISOString: function() {
        var e = wt(this).utc();
        return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : U(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : U(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
      },
      toArray: function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
      },
      isValid: function() {
        return E(this)
      },
      isDSTShifted: function() {
        return this._a ? this.isValid() && C(this._a, (this._isUTC ? wt.utc(this._a) : wt(this._a)).toArray()) > 0 : !1
      },
      parsingFlags: function() {
        return _({}, this._pf)
      },
      invalidAt: function() {
        return this._pf.overflow
      },
      utc: function(e) {
        return this.utcOffset(0, e)
      },
      local: function(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(this._dateUtcOffset(), "m")), this
      },
      format: function(e) {
        var t = U(this, e || wt.defaultFormat);
        return this.localeData().postformat(t)
      },
      add: y(1, "add"),
      subtract: y(-1, "subtract"),
      diff: function(e, t, n) {
        var i, a, r = B(e, this),
          s = 6e4 * (r.utcOffset() - this.utcOffset());
        return t = P(t), "year" === t || "month" === t || "quarter" === t ? (a = u(this, r), "quarter" === t ? a /= 3 : "year" === t && (a /= 12)) : (i = this - r, a = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - s) / 864e5 : "week" === t ? (i - s) / 6048e5 : i), n ? a : f(a)
      },
      from: function(e, t) {
        return wt.duration({
          to: this,
          from: e
        }).locale(this.locale()).humanize(!t)
      },
      fromNow: function(e) {
        return this.from(wt(), e)
      },
      calendar: function(e) {
        var t = e || wt(),
          n = B(t, this).startOf("day"),
          i = this.diff(n, "days", !0),
          a = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
        return this.format(this.localeData().calendar(a, this, wt(t)))
      },
      isLeapYear: function() {
        return L(this.year())
      },
      isDST: function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
      },
      day: function(e) {
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = st(e, this.localeData()), this.add(e - t, "d")) : t
      },
      month: ft("Month", !0),
      startOf: function(e) {
        switch (e = P(e)) {
          case "year":
            this.month(0);
          case "quarter":
          case "month":
            this.date(1);
          case "week":
          case "isoWeek":
          case "day":
            this.hours(0);
          case "hour":
            this.minutes(0);
          case "minute":
            this.seconds(0);
          case "second":
            this.milliseconds(0)
        }
        return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
      },
      endOf: function(t) {
        return t = P(t), t === e || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
      },
      isAfter: function(e, t) {
        var n;
        return t = P("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = wt.isMoment(e) ? e : wt(e), +this > +e) : (n = wt.isMoment(e) ? +e : +wt(e), n < +this.clone().startOf(t))
      },
      isBefore: function(e, t) {
        var n;
        return t = P("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = wt.isMoment(e) ? e : wt(e), +e > +this) : (n = wt.isMoment(e) ? +e : +wt(e), +this.clone().endOf(t) < n)
      },
      isBetween: function(e, t, n) {
        return this.isAfter(e, n) && this.isBefore(t, n)
      },
      isSame: function(e, t) {
        var n;
        return t = P(t || "millisecond"), "millisecond" === t ? (e = wt.isMoment(e) ? e : wt(e), +this === +e) : (n = +wt(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
      },
      min: r("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(e) {
        return e = wt.apply(null, arguments), this > e ? this : e
      }),
      max: r("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(e) {
        return e = wt.apply(null, arguments), e > this ? this : e
      }),
      zone: r("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
      }),
      utcOffset: function(e, t) {
        var n, i = this._offset || 0;
        return null != e ? ("string" == typeof e && (e = z(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && t && (n = this._dateUtcOffset()), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), i !== e && (!t || this._changeInProgress ? w(this, wt.duration(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, wt.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? i : this._dateUtcOffset()
      },
      isLocal: function() {
        return !this._isUTC
      },
      isUtcOffset: function() {
        return this._isUTC
      },
      isUtc: function() {
        return this._isUTC && 0 === this._offset
      },
      zoneAbbr: function() {
        return this._isUTC ? "UTC" : ""
      },
      zoneName: function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
      },
      parseZone: function() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(z(this._i)), this
      },
      hasAlignedHourOffset: function(e) {
        return e = e ? wt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0
      },
      daysInMonth: function() {
        return A(this.year(), this.month())
      },
      dayOfYear: function(e) {
        var t = Tt((wt(this).startOf("day") - wt(this).startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
      },
      quarter: function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
      },
      weekYear: function(e) {
        var t = ut(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == e ? t : this.add(e - t, "y")
      },
      isoWeekYear: function(e) {
        var t = ut(this, 1, 4).year;
        return null == e ? t : this.add(e - t, "y")
      },
      week: function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
      },
      isoWeek: function(e) {
        var t = ut(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
      },
      weekday: function(e) {
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
      },
      isoWeekday: function(e) {
        return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
      },
      isoWeeksInYear: function() {
        return F(this.year(), 1, 4)
      },
      weeksInYear: function() {
        var e = this.localeData()._week;
        return F(this.year(), e.dow, e.doy)
      },
      get: function(e) {
        return e = P(e), this[e]()
      },
      set: function(e, t) {
        var n;
        if ("object" == typeof e)
          for (n in e) this.set(n, e[n]);
        else e = P(e), "function" == typeof this[e] && this[e](t);
        return this
      },
      locale: function(t) {
        var n;
        return t === e ? this._locale._abbr : (n = wt.localeData(t), null != n && (this._locale = n), this)
      },
      lang: r("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
        return t === e ? this.localeData() : this.locale(t)
      }),
      localeData: function() {
        return this._locale
      },
      _dateUtcOffset: function() {
        return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
      }
    }), wt.fn.millisecond = wt.fn.milliseconds = ft("Milliseconds", !1), wt.fn.second = wt.fn.seconds = ft("Seconds", !1), wt.fn.minute = wt.fn.minutes = ft("Minutes", !1), wt.fn.hour = wt.fn.hours = ft("Hours", !0), wt.fn.date = ft("Date", !0), wt.fn.dates = r("dates accessor is deprecated. Use date instead.", ft("Date", !0)), wt.fn.year = ft("FullYear", !0), wt.fn.years = r("years accessor is deprecated. Use year instead.", ft("FullYear", !0)), wt.fn.days = wt.fn.day, wt.fn.months = wt.fn.month, wt.fn.weeks = wt.fn.week, wt.fn.isoWeeks = wt.fn.isoWeek, wt.fn.quarters = wt.fn.quarter, wt.fn.toJSON = wt.fn.toISOString, wt.fn.isUTC = wt.fn.isUtc, _(wt.duration.fn = h.prototype, {
      _bubble: function() {
        var e, t, n, i = this._milliseconds,
          a = this._days,
          r = this._months,
          s = this._data,
          o = 0;
        s.milliseconds = i % 1e3, e = f(i / 1e3), s.seconds = e % 60, t = f(e / 60), s.minutes = t % 60, n = f(t / 60), s.hours = n % 24, a += f(n / 24), o = f(gt(a)), a -= f(vt(o)), r += f(a / 30), a %= 30, o += f(r / 12), r %= 12, s.days = a, s.months = r, s.years = o
      },
      abs: function() {
        return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
      },
      weeks: function() {
        return f(this.days() / 7)
      },
      valueOf: function() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * x(this._months / 12)
      },
      humanize: function(e) {
        var t = lt(this, !e, this.localeData());
        return e && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t)
      },
      add: function(e, t) {
        var n = wt.duration(e, t);
        return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
      },
      subtract: function(e, t) {
        var n = wt.duration(e, t);
        return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
      },
      get: function(e) {
        return e = P(e), this[e.toLowerCase() + "s"]()
      },
      as: function(e) {
        var t, n;
        if (e = P(e), "month" === e || "year" === e) return t = this._days + this._milliseconds / 864e5, n = this._months + 12 * gt(t), "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(vt(this._months / 12)), e) {
          case "week":
            return t / 7 + this._milliseconds / 6048e5;
          case "day":
            return t + this._milliseconds / 864e5;
          case "hour":
            return 24 * t + this._milliseconds / 36e5;
          case "minute":
            return 24 * t * 60 + this._milliseconds / 6e4;
          case "second":
            return 24 * t * 60 * 60 + this._milliseconds / 1e3;
          case "millisecond":
            return Math.floor(24 * t * 60 * 60 * 1e3) + this._milliseconds;
          default:
            throw new Error("Unknown unit " + e)
        }
      },
      lang: wt.fn.lang,
      locale: wt.fn.locale,
      toIsoString: r("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
        return this.toISOString()
      }),
      toISOString: function() {
        var e = Math.abs(this.years()),
          t = Math.abs(this.months()),
          n = Math.abs(this.days()),
          i = Math.abs(this.hours()),
          a = Math.abs(this.minutes()),
          r = Math.abs(this.seconds() + this.milliseconds() / 1e3);
        return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (i || a || r ? "T" : "") + (i ? i + "H" : "") + (a ? a + "M" : "") + (r ? r + "S" : "") : "P0D"
      },
      localeData: function() {
        return this._locale
      },
      toJSON: function() {
        return this.toISOString()
      }
    }), wt.duration.fn.toString = wt.duration.fn.toISOString;
    for (St in pn) n(pn, St) && bt(St.toLowerCase());
    wt.duration.fn.asMilliseconds = function() {
      return this.as("ms")
    }, wt.duration.fn.asSeconds = function() {
      return this.as("s")
    }, wt.duration.fn.asMinutes = function() {
      return this.as("m")
    }, wt.duration.fn.asHours = function() {
      return this.as("h")
    }, wt.duration.fn.asDays = function() {
      return this.as("d")
    }, wt.duration.fn.asWeeks = function() {
      return this.as("weeks")
    }, wt.duration.fn.asMonths = function() {
      return this.as("M")
    }, wt.duration.fn.asYears = function() {
      return this.as("y")
    }, wt.locale("en", {
      ordinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(e) {
        var t = e % 10,
          n = 1 === x(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
        return e + n
      }
    }), $t ? module.exports = wt : "function" == typeof define && define.amd ? (define(function(e, t, n) {
      return n.config && n.config() && n.config().noGlobal === !0 && (Pt.moment = kt), wt
    }), yt(!0)) : yt()
  }.call(this), ! function(e, t, n, i) {
    "use strict";

    function a(e, t, n) {
      return setTimeout(c(e, n), t)
    }

    function r(e, t, n) {
      return Array.isArray(e) ? (s(e, n[t], n), !0) : !1
    }

    function s(e, t, n) {
      var a;
      if (e)
        if (e.forEach) e.forEach(t, n);
        else if (e.length !== i)
        for (a = 0; a < e.length;) t.call(n, e[a], a, e), a++;
      else
        for (a in e) e.hasOwnProperty(a) && t.call(n, e[a], a, e)
    }

    function o(e, t, n) {
      for (var a = Object.keys(t), r = 0; r < a.length;)(!n || n && e[a[r]] === i) && (e[a[r]] = t[a[r]]), r++;
      return e
    }

    function l(e, t) {
      return o(e, t, !0)
    }

    function u(e, t, n) {
      var i, a = t.prototype;
      i = e.prototype = Object.create(a), i.constructor = e, i._super = a, n && o(i, n)
    }

    function c(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }

    function p(e, t) {
      return typeof e == ct ? e.apply(t ? t[0] || i : i, t) : e
    }

    function d(e, t) {
      return e === i ? t : e
    }

    function h(e, t, n) {
      s(g(t), function(t) {
        e.addEventListener(t, n, !1)
      })
    }

    function _(e, t, n) {
      s(g(t), function(t) {
        e.removeEventListener(t, n, !1)
      })
    }

    function m(e, t) {
      for (; e;) {
        if (e == t) return !0;
        e = e.parentNode
      }
      return !1
    }

    function f(e, t) {
      return e.indexOf(t) > -1
    }

    function g(e) {
      return e.trim().split(/\s+/g)
    }

    function v(e, t, n) {
      if (e.indexOf && !n) return e.indexOf(t);
      for (var i = 0; i < e.length;) {
        if (n && e[i][n] == t || !n && e[i] === t) return i;
        i++
      }
      return -1
    }

    function b(e) {
      return Array.prototype.slice.call(e, 0)
    }

    function y(e, t, n) {
      for (var i = [], a = [], r = 0; r < e.length;) {
        var s = t ? e[r][t] : e[r];
        v(a, s) < 0 && i.push(e[r]), a[r] = s, r++
      }
      return n && (i = t ? i.sort(function(e, n) {
        return e[t] > n[t]
      }) : i.sort()), i
    }

    function w(e, t) {
      for (var n, a, r = t[0].toUpperCase() + t.slice(1), s = 0; s < lt.length;) {
        if (n = lt[s], a = n ? n + r : t, a in e) return a;
        s++
      }
      return i
    }

    function k() {
      return _t++
    }

    function S(e) {
      var t = e.ownerDocument;
      return t.defaultView || t.parentWindow
    }

    function C(e, t) {
      var n = this;
      this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
        p(e.options.enable, [e]) && n.handler(t)
      }, this.init()
    }

    function P(e) {
      var t, n = e.options.inputClass;
      return new(t = n ? n : gt ? R : vt ? V : ft ? z : B)(e, T)
    }

    function T(e, t, n) {
      var i = n.pointers.length,
        a = n.changedPointers.length,
        r = t & Ct && i - a === 0,
        s = t & (Tt | Wt) && i - a === 0;
      n.isFirst = !!r, n.isFinal = !!s, r && (e.session = {}), n.eventType = t, W(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
    }

    function W(e, t) {
      var n = e.session,
        i = t.pointers,
        a = i.length;
      n.firstInput || (n.firstInput = F(t)), a > 1 && !n.firstMultiple ? n.firstMultiple = F(t) : 1 === a && (n.firstMultiple = !1);
      var r = n.firstInput,
        s = n.firstMultiple,
        o = s ? s.center : r.center,
        l = t.center = I(i);
      t.timeStamp = ht(), t.deltaTime = t.timeStamp - r.timeStamp, t.angle = j(o, l), t.distance = E(o, l), x(n, t), t.offsetDirection = M(t.deltaX, t.deltaY), t.scale = s ? $(s.pointers, i) : 1, t.rotation = s ? D(s.pointers, i) : 0, A(n, t);
      var u = e.element;
      m(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u
    }

    function x(e, t) {
      var n = t.center,
        i = e.offsetDelta || {},
        a = e.prevDelta || {},
        r = e.prevInput || {};
      (t.eventType === Ct || r.eventType === Tt) && (a = e.prevDelta = {
        x: r.deltaX || 0,
        y: r.deltaY || 0
      }, i = e.offsetDelta = {
        x: n.x,
        y: n.y
      }), t.deltaX = a.x + (n.x - i.x), t.deltaY = a.y + (n.y - i.y)
    }

    function A(e, t) {
      var n, a, r, s, o = e.lastInterval || t,
        l = t.timeStamp - o.timeStamp;
      if (t.eventType != Wt && (l > St || o.velocity === i)) {
        var u = o.deltaX - t.deltaX,
          c = o.deltaY - t.deltaY,
          p = L(l, u, c);
        a = p.x, r = p.y, n = dt(p.x) > dt(p.y) ? p.x : p.y, s = M(u, c), e.lastInterval = t
      } else n = o.velocity, a = o.velocityX, r = o.velocityY, s = o.direction;
      t.velocity = n, t.velocityX = a, t.velocityY = r, t.direction = s
    }

    function F(e) {
      for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
        clientX: pt(e.pointers[n].clientX),
        clientY: pt(e.pointers[n].clientY)
      }, n++;
      return {
        timeStamp: ht(),
        pointers: t,
        center: I(t),
        deltaX: e.deltaX,
        deltaY: e.deltaY
      }
    }

    function I(e) {
      var t = e.length;
      if (1 === t) return {
        x: pt(e[0].clientX),
        y: pt(e[0].clientY)
      };
      for (var n = 0, i = 0, a = 0; t > a;) n += e[a].clientX, i += e[a].clientY, a++;
      return {
        x: pt(n / t),
        y: pt(i / t)
      }
    }

    function L(e, t, n) {
      return {
        x: t / e || 0,
        y: n / e || 0
      }
    }

    function M(e, t) {
      return e === t ? xt : dt(e) >= dt(t) ? e > 0 ? At : Ft : t > 0 ? It : Lt
    }

    function E(e, t, n) {
      n || (n = Dt);
      var i = t[n[0]] - e[n[0]],
        a = t[n[1]] - e[n[1]];
      return Math.sqrt(i * i + a * a)
    }

    function j(e, t, n) {
      n || (n = Dt);
      var i = t[n[0]] - e[n[0]],
        a = t[n[1]] - e[n[1]];
      return 180 * Math.atan2(a, i) / Math.PI
    }

    function D(e, t) {
      return j(t[1], t[0], $t) - j(e[1], e[0], $t)
    }

    function $(e, t) {
      return E(t[0], t[1], $t) / E(e[0], e[1], $t)
    }

    function B() {
      this.evEl = Rt, this.evWin = Nt, this.allow = !0, this.pressed = !1, C.apply(this, arguments)
    }

    function R() {
      this.evEl = Ot, this.evWin = zt, C.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function N() {
      this.evTarget = Gt, this.evWin = Yt, this.started = !1, C.apply(this, arguments)
    }

    function U(e, t) {
      var n = b(e.touches),
        i = b(e.changedTouches);
      return t & (Tt | Wt) && (n = y(n.concat(i), "identifier", !0)), [n, i]
    }

    function V() {
      this.evTarget = Kt, this.targetIds = {}, C.apply(this, arguments)
    }

    function O(e, t) {
      var n = b(e.touches),
        i = this.targetIds;
      if (t & (Ct | Pt) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
      var a, r, s = b(e.changedTouches),
        o = [],
        l = this.target;
      if (r = n.filter(function(e) {
          return m(e.target, l)
        }), t === Ct)
        for (a = 0; a < r.length;) i[r[a].identifier] = !0, a++;
      for (a = 0; a < s.length;) i[s[a].identifier] && o.push(s[a]), t & (Tt | Wt) && delete i[s[a].identifier], a++;
      return o.length ? [y(r.concat(o), "identifier", !0), o] : void 0
    }

    function z() {
      C.apply(this, arguments);
      var e = c(this.handler, this);
      this.touch = new V(this.manager, e), this.mouse = new B(this.manager, e)
    }

    function H(e, t) {
      this.manager = e, this.set(t)
    }

    function G(e) {
      if (f(e, tn)) return tn;
      var t = f(e, nn),
        n = f(e, an);
      return t && n ? nn + " " + an : t || n ? t ? nn : an : f(e, en) ? en : Qt
    }

    function Y(e) {
      this.id = k(), this.manager = null, this.options = l(e || {}, this.defaults), this.options.enable = d(this.options.enable, !0), this.state = rn, this.simultaneous = {}, this.requireFail = []
    }

    function q(e) {
      return e & cn ? "cancel" : e & ln ? "end" : e & on ? "move" : e & sn ? "start" : ""
    }

    function K(e) {
      return e == Lt ? "down" : e == It ? "up" : e == At ? "left" : e == Ft ? "right" : ""
    }

    function X(e, t) {
      var n = t.manager;
      return n ? n.get(e) : e
    }

    function J() {
      Y.apply(this, arguments)
    }

    function Z() {
      J.apply(this, arguments), this.pX = null, this.pY = null
    }

    function Q() {
      J.apply(this, arguments)
    }

    function et() {
      Y.apply(this, arguments), this._timer = null, this._input = null
    }

    function tt() {
      J.apply(this, arguments)
    }

    function nt() {
      J.apply(this, arguments)
    }

    function it() {
      Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function at(e, t) {
      return t = t || {}, t.recognizers = d(t.recognizers, at.defaults.preset), new rt(e, t)
    }

    function rt(e, t) {
      t = t || {}, this.options = l(t, at.defaults), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = e, this.input = P(this), this.touchAction = new H(this, this.options.touchAction), st(this, !0), s(t.recognizers, function(e) {
        var t = this.add(new e[0](e[1]));
        e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
      }, this)
    }

    function st(e, t) {
      var n = e.element;
      s(e.options.cssProps, function(e, i) {
        n.style[w(n.style, i)] = t ? e : ""
      })
    }

    function ot(e, n) {
      var i = t.createEvent("Event");
      i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
    }
    var lt = ["", "webkit", "moz", "MS", "ms", "o"],
      ut = t.createElement("div"),
      ct = "function",
      pt = Math.round,
      dt = Math.abs,
      ht = Date.now,
      _t = 1,
      mt = /mobile|tablet|ip(ad|hone|od)|android/i,
      ft = "ontouchstart" in e,
      gt = w(e, "PointerEvent") !== i,
      vt = ft && mt.test(navigator.userAgent),
      bt = "touch",
      yt = "pen",
      wt = "mouse",
      kt = "kinect",
      St = 25,
      Ct = 1,
      Pt = 2,
      Tt = 4,
      Wt = 8,
      xt = 1,
      At = 2,
      Ft = 4,
      It = 8,
      Lt = 16,
      Mt = At | Ft,
      Et = It | Lt,
      jt = Mt | Et,
      Dt = ["x", "y"],
      $t = ["clientX", "clientY"];
    C.prototype = {
      handler: function() {},
      init: function() {
        this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(S(this.element), this.evWin, this.domHandler)
      },
      destroy: function() {
        this.evEl && _(this.element, this.evEl, this.domHandler), this.evTarget && _(this.target, this.evTarget, this.domHandler), this.evWin && _(S(this.element), this.evWin, this.domHandler)
      }
    };
    var Bt = {
        mousedown: Ct,
        mousemove: Pt,
        mouseup: Tt
      },
      Rt = "mousedown",
      Nt = "mousemove mouseup";
    u(B, C, {
      handler: function(e) {
        var t = Bt[e.type];
        t & Ct && 0 === e.button && (this.pressed = !0), t & Pt && 1 !== e.which && (t = Tt), this.pressed && this.allow && (t & Tt && (this.pressed = !1), this.callback(this.manager, t, {
          pointers: [e],
          changedPointers: [e],
          pointerType: wt,
          srcEvent: e
        }))
      }
    });
    var Ut = {
        pointerdown: Ct,
        pointermove: Pt,
        pointerup: Tt,
        pointercancel: Wt,
        pointerout: Wt
      },
      Vt = {
        2: bt,
        3: yt,
        4: wt,
        5: kt
      },
      Ot = "pointerdown",
      zt = "pointermove pointerup pointercancel";
    e.MSPointerEvent && (Ot = "MSPointerDown", zt = "MSPointerMove MSPointerUp MSPointerCancel"), u(R, C, {
      handler: function(e) {
        var t = this.store,
          n = !1,
          i = e.type.toLowerCase().replace("ms", ""),
          a = Ut[i],
          r = Vt[e.pointerType] || e.pointerType,
          s = r == bt,
          o = v(t, e.pointerId, "pointerId");
        a & Ct && (0 === e.button || s) ? 0 > o && (t.push(e), o = t.length - 1) : a & (Tt | Wt) && (n = !0), 0 > o || (t[o] = e, this.callback(this.manager, a, {
          pointers: t,
          changedPointers: [e],
          pointerType: r,
          srcEvent: e
        }), n && t.splice(o, 1))
      }
    });
    var Ht = {
        touchstart: Ct,
        touchmove: Pt,
        touchend: Tt,
        touchcancel: Wt
      },
      Gt = "touchstart",
      Yt = "touchstart touchmove touchend touchcancel";
    u(N, C, {
      handler: function(e) {
        var t = Ht[e.type];
        if (t === Ct && (this.started = !0), this.started) {
          var n = U.call(this, e, t);
          t & (Tt | Wt) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, t, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: bt,
            srcEvent: e
          })
        }
      }
    });
    var qt = {
        touchstart: Ct,
        touchmove: Pt,
        touchend: Tt,
        touchcancel: Wt
      },
      Kt = "touchstart touchmove touchend touchcancel";
    u(V, C, {
      handler: function(e) {
        var t = qt[e.type],
          n = O.call(this, e, t);
        n && this.callback(this.manager, t, {
          pointers: n[0],
          changedPointers: n[1],
          pointerType: bt,
          srcEvent: e
        })
      }
    }), u(z, C, {
      handler: function(e, t, n) {
        var i = n.pointerType == bt,
          a = n.pointerType == wt;
        if (i) this.mouse.allow = !1;
        else if (a && !this.mouse.allow) return;
        t & (Tt | Wt) && (this.mouse.allow = !0), this.callback(e, t, n)
      },
      destroy: function() {
        this.touch.destroy(), this.mouse.destroy()
      }
    });
    var Xt = w(ut.style, "touchAction"),
      Jt = Xt !== i,
      Zt = "compute",
      Qt = "auto",
      en = "manipulation",
      tn = "none",
      nn = "pan-x",
      an = "pan-y";
    H.prototype = {
      set: function(e) {
        e == Zt && (e = this.compute()), Jt && (this.manager.element.style[Xt] = e), this.actions = e.toLowerCase().trim()
      },
      update: function() {
        this.set(this.manager.options.touchAction)
      },
      compute: function() {
        var e = [];
        return s(this.manager.recognizers, function(t) {
          p(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
        }), G(e.join(" "))
      },
      preventDefaults: function(e) {
        if (!Jt) {
          var t = e.srcEvent,
            n = e.offsetDirection;
          if (this.manager.session.prevented) return void t.preventDefault();
          var i = this.actions,
            a = f(i, tn),
            r = f(i, an),
            s = f(i, nn);
          return a || r && n & Mt || s && n & Et ? this.preventSrc(t) : void 0
        }
      },
      preventSrc: function(e) {
        this.manager.session.prevented = !0, e.preventDefault()
      }
    };
    var rn = 1,
      sn = 2,
      on = 4,
      ln = 8,
      un = ln,
      cn = 16,
      pn = 32;
    Y.prototype = {
      defaults: {},
      set: function(e) {
        return o(this.options, e), this.manager && this.manager.touchAction.update(), this
      },
      recognizeWith: function(e) {
        if (r(e, "recognizeWith", this)) return this;
        var t = this.simultaneous;
        return e = X(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
      },
      dropRecognizeWith: function(e) {
        return r(e, "dropRecognizeWith", this) ? this : (e = X(e, this), delete this.simultaneous[e.id], this)
      },
      requireFailure: function(e) {
        if (r(e, "requireFailure", this)) return this;
        var t = this.requireFail;
        return e = X(e, this), -1 === v(t, e) && (t.push(e), e.requireFailure(this)), this
      },
      dropRequireFailure: function(e) {
        if (r(e, "dropRequireFailure", this)) return this;
        e = X(e, this);
        var t = v(this.requireFail, e);
        return t > -1 && this.requireFail.splice(t, 1), this
      },
      hasRequireFailures: function() {
        return this.requireFail.length > 0
      },
      canRecognizeWith: function(e) {
        return !!this.simultaneous[e.id]
      },
      emit: function(e) {
        function t(t) {
          n.manager.emit(n.options.event + (t ? q(i) : ""), e)
        }
        var n = this,
          i = this.state;
        ln > i && t(!0), t(), i >= ln && t(!0)
      },
      tryEmit: function(e) {
        return this.canEmit() ? this.emit(e) : void(this.state = pn)
      },
      canEmit: function() {
        for (var e = 0; e < this.requireFail.length;) {
          if (!(this.requireFail[e].state & (pn | rn))) return !1;
          e++
        }
        return !0
      },
      recognize: function(e) {
        var t = o({}, e);
        return p(this.options.enable, [this, t]) ? (this.state & (un | cn | pn) && (this.state = rn), this.state = this.process(t), void(this.state & (sn | on | ln | cn) && this.tryEmit(t))) : (this.reset(), void(this.state = pn))
      },
      process: function() {},
      getTouchAction: function() {},
      reset: function() {}
    }, u(J, Y, {
      defaults: {
        pointers: 1
      },
      attrTest: function(e) {
        var t = this.options.pointers;
        return 0 === t || e.pointers.length === t
      },
      process: function(e) {
        var t = this.state,
          n = e.eventType,
          i = t & (sn | on),
          a = this.attrTest(e);
        return i && (n & Wt || !a) ? t | cn : i || a ? n & Tt ? t | ln : t & sn ? t | on : sn : pn
      }
    }), u(Z, J, {
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: jt
      },
      getTouchAction: function() {
        var e = this.options.direction,
          t = [];
        return e & Mt && t.push(an), e & Et && t.push(nn), t
      },
      directionTest: function(e) {
        var t = this.options,
          n = !0,
          i = e.distance,
          a = e.direction,
          r = e.deltaX,
          s = e.deltaY;
        return a & t.direction || (t.direction & Mt ? (a = 0 === r ? xt : 0 > r ? At : Ft, n = r != this.pX, i = Math.abs(e.deltaX)) : (a = 0 === s ? xt : 0 > s ? It : Lt, n = s != this.pY, i = Math.abs(e.deltaY))), e.direction = a, n && i > t.threshold && a & t.direction
      },
      attrTest: function(e) {
        return J.prototype.attrTest.call(this, e) && (this.state & sn || !(this.state & sn) && this.directionTest(e))
      },
      emit: function(e) {
        this.pX = e.deltaX, this.pY = e.deltaY;
        var t = K(e.direction);
        t && this.manager.emit(this.options.event + t, e), this._super.emit.call(this, e)
      }
    }), u(Q, J, {
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [tn]
      },
      attrTest: function(e) {
        return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & sn)
      },
      emit: function(e) {
        if (this._super.emit.call(this, e), 1 !== e.scale) {
          var t = e.scale < 1 ? "in" : "out";
          this.manager.emit(this.options.event + t, e)
        }
      }
    }), u(et, Y, {
      defaults: {
        event: "press",
        pointers: 1,
        time: 500,
        threshold: 5
      },
      getTouchAction: function() {
        return [Qt]
      },
      process: function(e) {
        var t = this.options,
          n = e.pointers.length === t.pointers,
          i = e.distance < t.threshold,
          r = e.deltaTime > t.time;
        if (this._input = e, !i || !n || e.eventType & (Tt | Wt) && !r) this.reset();
        else if (e.eventType & Ct) this.reset(), this._timer = a(function() {
          this.state = un, this.tryEmit()
        }, t.time, this);
        else if (e.eventType & Tt) return un;
        return pn
      },
      reset: function() {
        clearTimeout(this._timer)
      },
      emit: function(e) {
        this.state === un && (e && e.eventType & Tt ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ht(), this.manager.emit(this.options.event, this._input)))
      }
    }), u(tt, J, {
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [tn]
      },
      attrTest: function(e) {
        return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & sn)
      }
    }), u(nt, J, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: .65,
        direction: Mt | Et,
        pointers: 1
      },
      getTouchAction: function() {
        return Z.prototype.getTouchAction.call(this)
      },
      attrTest: function(e) {
        var t, n = this.options.direction;
        return n & (Mt | Et) ? t = e.velocity : n & Mt ? t = e.velocityX : n & Et && (t = e.velocityY), this._super.attrTest.call(this, e) && n & e.direction && e.distance > this.options.threshold && dt(t) > this.options.velocity && e.eventType & Tt
      },
      emit: function(e) {
        var t = K(e.direction);
        t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
      }
    }), u(it, Y, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 2,
        posThreshold: 10
      },
      getTouchAction: function() {
        return [en]
      },
      process: function(e) {
        var t = this.options,
          n = e.pointers.length === t.pointers,
          i = e.distance < t.threshold,
          r = e.deltaTime < t.time;
        if (this.reset(), e.eventType & Ct && 0 === this.count) return this.failTimeout();
        if (i && r && n) {
          if (e.eventType != Tt) return this.failTimeout();
          var s = this.pTime ? e.timeStamp - this.pTime < t.interval : !0,
            o = !this.pCenter || E(this.pCenter, e.center) < t.posThreshold;
          this.pTime = e.timeStamp, this.pCenter = e.center, o && s ? this.count += 1 : this.count = 1, this._input = e;
          var l = this.count % t.taps;
          if (0 === l) return this.hasRequireFailures() ? (this._timer = a(function() {
            this.state = un, this.tryEmit()
          }, t.interval, this), sn) : un
        }
        return pn
      },
      failTimeout: function() {
        return this._timer = a(function() {
          this.state = pn
        }, this.options.interval, this), pn
      },
      reset: function() {
        clearTimeout(this._timer)
      },
      emit: function() {
        this.state == un && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
      }
    }), at.VERSION = "2.0.4", at.defaults = {
      domEvents: !1,
      touchAction: Zt,
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [
        [tt, {
          enable: !1
        }],
        [Q, {
            enable: !1
          },
          ["rotate"]
        ],
        [nt, {
          direction: Mt
        }],
        [Z, {
            direction: Mt
          },
          ["swipe"]
        ],
        [it],
        [it, {
            event: "doubletap",
            taps: 2
          },
          ["tap"]
        ],
        [et]
      ],
      cssProps: {
        userSelect: "none",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var dn = 1,
      hn = 2;
    rt.prototype = {
      set: function(e) {
        return o(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
      },
      stop: function(e) {
        this.session.stopped = e ? hn : dn
      },
      recognize: function(e) {
        var t = this.session;
        if (!t.stopped) {
          this.touchAction.preventDefaults(e);
          var n, i = this.recognizers,
            a = t.curRecognizer;
          (!a || a && a.state & un) && (a = t.curRecognizer = null);
          for (var r = 0; r < i.length;) n = i[r], t.stopped === hn || a && n != a && !n.canRecognizeWith(a) ? n.reset() : n.recognize(e), !a && n.state & (sn | on | ln) && (a = t.curRecognizer = n), r++
        }
      },
      get: function(e) {
        if (e instanceof Y) return e;
        for (var t = this.recognizers, n = 0; n < t.length; n++)
          if (t[n].options.event == e) return t[n];
        return null
      },
      add: function(e) {
        if (r(e, "add", this)) return this;
        var t = this.get(e.options.event);
        return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
      },
      remove: function(e) {
        if (r(e, "remove", this)) return this;
        var t = this.recognizers;
        return e = this.get(e), t.splice(v(t, e), 1), this.touchAction.update(), this
      },
      on: function(e, t) {
        var n = this.handlers;
        return s(g(e), function(e) {
          n[e] = n[e] || [], n[e].push(t)
        }), this
      },
      off: function(e, t) {
        var n = this.handlers;
        return s(g(e), function(e) {
          t ? n[e].splice(v(n[e], t), 1) : delete n[e]
        }), this
      },
      emit: function(e, t) {
        this.options.domEvents && ot(e, t);
        var n = this.handlers[e] && this.handlers[e].slice();
        if (n && n.length) {
          t.type = e, t.preventDefault = function() {
            t.srcEvent.preventDefault()
          };
          for (var i = 0; i < n.length;) n[i](t), i++
        }
      },
      destroy: function() {
        this.element && st(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
      }
    }, o(at, {
      INPUT_START: Ct,
      INPUT_MOVE: Pt,
      INPUT_END: Tt,
      INPUT_CANCEL: Wt,
      STATE_POSSIBLE: rn,
      STATE_BEGAN: sn,
      STATE_CHANGED: on,
      STATE_ENDED: ln,
      STATE_RECOGNIZED: un,
      STATE_CANCELLED: cn,
      STATE_FAILED: pn,
      DIRECTION_NONE: xt,
      DIRECTION_LEFT: At,
      DIRECTION_RIGHT: Ft,
      DIRECTION_UP: It,
      DIRECTION_DOWN: Lt,
      DIRECTION_HORIZONTAL: Mt,
      DIRECTION_VERTICAL: Et,
      DIRECTION_ALL: jt,
      Manager: rt,
      Input: C,
      TouchAction: H,
      TouchInput: V,
      MouseInput: B,
      PointerEventInput: R,
      TouchMouseInput: z,
      SingleTouchInput: N,
      Recognizer: Y,
      AttrRecognizer: J,
      Tap: it,
      Pan: Z,
      Swipe: nt,
      Pinch: Q,
      Rotate: tt,
      Press: et,
      on: h,
      off: _,
      each: s,
      merge: l,
      extend: o,
      inherit: u,
      bindFn: c,
      prefixed: w
    }), typeof define == ct && define.amd ? define(function() {
      return at
    }) : "undefined" != typeof module && module.exports ? module.exports = at : e[n] = at
  }(window, document, "Hammer"),
  function(e, t, n) {
    function i(i, a) {
      var r = e(i);
      r.data(n) || r.data(n, new t(r[0], a))
    }
    e.fn.hammer = function(e) {
      return this.each(function() {
        i(this, e)
      })
    }, t.Manager.prototype.emit = function(e) {
      return function(t, n) {
        e.call(this, t, n), jQuery(this.element).triggerHandler({
          type: t,
          gesture: n
        })
      }
    }(t.Manager.prototype.emit)
  }(jQuery, Hammer, "hammer"), ! function() {
    "use strict";

    function e(e) {
      return e.split("").reverse().join("")
    }

    function t(e, t) {
      return e.substring(0, t.length) === t
    }

    function n(e, t) {
      return e.slice(-1 * t.length) === t
    }

    function i(e, t, n) {
      if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t)
    }

    function a(e) {
      return "number" == typeof e && isFinite(e)
    }

    function r(e, t) {
      var n = Math.pow(10, t);
      return (Math.round(e * n) / n).toFixed(t)
    }

    function s(t, n, i, s, o, l, u, c, p, d, h, _) {
      var m, f, g, v = _,
        b = "",
        y = "";
      return l && (_ = l(_)), a(_) ? (t && 0 === parseFloat(_.toFixed(t)) && (_ = 0), 0 > _ && (m = !0, _ = Math.abs(_)), t !== !1 && (_ = r(_, t)), _ = _.toString(), -1 !== _.indexOf(".") ? (f = _.split("."), g = f[0], i && (b = i + f[1])) : g = _, n && (g = e(g).match(/.{1,3}/g), g = e(g.join(e(n)))), m && c && (y += c), s && (y += s), m && p && (y += p), y += g, y += b, o && (y += o), d && (y = d(y, v)), y) : !1
    }

    function o(e, i, r, s, o, l, u, c, p, d, h, _) {
      var m, f = "";
      return h && (_ = h(_)), _ && "string" == typeof _ ? (c && t(_, c) && (_ = _.replace(c, ""), m = !0), s && t(_, s) && (_ = _.replace(s, "")), p && t(_, p) && (_ = _.replace(p, ""), m = !0), o && n(_, o) && (_ = _.slice(0, -1 * o.length)), i && (_ = _.split(i).join("")), r && (_ = _.replace(r, ".")), m && (f += "-"), f += _, f = f.replace(/[^0-9\.\-.]/g, ""), "" === f ? !1 : (f = Number(f), u && (f = u(f)), a(f) ? f : !1)) : !1
    }

    function l(e) {
      var t, n, a, r = {};
      for (t = 0; t < p.length; t += 1)
        if (n = p[t], a = e[n], void 0 === a) r[n] = "negative" !== n || r.negativeBefore ? "mark" === n && "." !== r.thousand ? "." : !1 : "-";
        else if ("decimals" === n) {
        if (!(a >= 0 && 8 > a)) throw new Error(n);
        r[n] = a
      } else if ("encoder" === n || "decoder" === n || "edit" === n || "undo" === n) {
        if ("function" != typeof a) throw new Error(n);
        r[n] = a
      } else {
        if ("string" != typeof a) throw new Error(n);
        r[n] = a
      }
      return i(r, "mark", "thousand"), i(r, "prefix", "negative"), i(r, "prefix", "negativeBefore"), r
    }

    function u(e, t, n) {
      var i, a = [];
      for (i = 0; i < p.length; i += 1) a.push(e[p[i]]);
      return a.push(n), t.apply("", a)
    }

    function c(e) {
      return this instanceof c ? void("object" == typeof e && (e = l(e), this.to = function(t) {
        return u(e, s, t)
      }, this.from = function(t) {
        return u(e, o, t)
      })) : new c(e)
    }
    var p = ["decimals", "thousand", "mark", "prefix", "postfix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
    window.wNumb = c
  }(),
  function(e) {
    "use strict";

    function t(t) {
      return t instanceof e || e.zepto && e.zepto.isZ(t)
    }

    function n(t, n) {
      return "string" == typeof t && 0 === t.indexOf("-inline-") ? (this.method = n || "html", this.target = this.el = e(t.replace("-inline-", "") || "<div/>"), !0) : void 0
    }

    function i(t) {
      if ("string" == typeof t && 0 !== t.indexOf("-")) {
        this.method = "val";
        var n = document.createElement("input");
        return n.name = t, n.type = "hidden", this.target = this.el = e(n), !0
      }
    }

    function a(e) {
      return "function" == typeof e ? (this.target = !1, this.method = e, !0) : void 0
    }

    function r(e, n) {
      return t(e) && !n ? (e.is("input, select, textarea") ? (this.method = "val", this.target = e.on("change.liblink", this.changeHandler)) : (this.target = e, this.method = "html"), !0) : void 0
    }

    function s(e, n) {
      return t(e) && ("function" == typeof n || "string" == typeof n && e[n]) ? (this.method = n, this.target = e, !0) : void 0
    }

    function o(t, n, i) {
      var a = this,
        r = !1;
      if (this.changeHandler = function(t) {
          var n = a.formatInstance.from(e(this).val());
          return n === !1 || isNaN(n) ? (e(this).val(a.lastSetValue), !1) : void a.changeHandlerMethod.call("", t, n)
        }, this.el = !1, this.formatInstance = i, e.each(c, function(e, i) {
          return r = i.call(a, t, n), !r
        }), !r) throw new RangeError("(Link) Invalid Link.")
    }

    function l(e) {
      this.items = [], this.elements = [], this.origin = e
    }

    function u(t, n, i, a) {
      0 === t && (t = this.LinkDefaultFlag), this.linkAPI || (this.linkAPI = {}), this.linkAPI[t] || (this.linkAPI[t] = new l(this));
      var r = new o(n, i, a || this.LinkDefaultFormatter);
      r.target || (r.target = e(this)), r.changeHandlerMethod = this.LinkConfirm(t, r.el), this.linkAPI[t].push(r, r.el), this.LinkUpdate(t)
    }
    var c = [n, i, a, r, s];
    o.prototype.set = function(e) {
      var t = Array.prototype.slice.call(arguments),
        n = t.slice(1);
      this.lastSetValue = this.formatInstance.to(e), n.unshift(this.lastSetValue), ("function" == typeof this.method ? this.method : this.target[this.method]).apply(this.target, n)
    }, l.prototype.push = function(e, t) {
      this.items.push(e), t && this.elements.push(t)
    }, l.prototype.reconfirm = function(e) {
      var t;
      for (t = 0; t < this.elements.length; t += 1) this.origin.LinkConfirm(e, this.elements[t])
    }, l.prototype.remove = function() {
      var e;
      for (e = 0; e < this.items.length; e += 1) this.items[e].target.off(".liblink");
      for (e = 0; e < this.elements.length; e += 1) this.elements[e].remove()
    }, l.prototype.change = function(e) {
      if (this.origin.LinkIsEmitting) return !1;
      this.origin.LinkIsEmitting = !0;
      var t, n = Array.prototype.slice.call(arguments, 1);
      for (n.unshift(e), t = 0; t < this.items.length; t += 1) this.items[t].set.apply(this.items[t], n);
      this.origin.LinkIsEmitting = !1
    }, e.fn.Link = function(t) {
      var n = this;
      if (t === !1) return n.each(function() {
        this.linkAPI && (e.map(this.linkAPI, function(e) {
          e.remove()
        }), delete this.linkAPI)
      });
      if (void 0 === t) t = 0;
      else if ("string" != typeof t) throw new Error("Flag must be string.");
      return {
        to: function(e, i, a) {
          return n.each(function() {
            u.call(this, t, e, i, a)
          })
        }
      }
    }
  }(window.jQuery || window.Zepto),
  function(e) {
    "use strict";

    function t(t) {
      return e.grep(t, function(n, i) {
        return i === e.inArray(n, t)
      })
    }

    function n(e, t) {
      return Math.round(e / t) * t
    }

    function i(e) {
      return "number" == typeof e && !isNaN(e) && isFinite(e)
    }

    function a(e) {
      var t = Math.pow(10, 7);
      return Number((Math.round(e * t) / t).toFixed(7))
    }

    function r(e, t, n) {
      e.addClass(t), setTimeout(function() {
        e.removeClass(t)
      }, n)
    }

    function s(e) {
      return Math.max(Math.min(e, 100), 0)
    }

    function o(t) {
      return e.isArray(t) ? t : [t]
    }

    function l(e, t) {
      return 100 / (t - e)
    }

    function u(e, t) {
      return 100 * t / (e[1] - e[0])
    }

    function c(e, t) {
      return u(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0])
    }

    function p(e, t) {
      return t * (e[1] - e[0]) / 100 + e[0]
    }

    function d(e, t) {
      for (var n = 1; e >= t[n];) n += 1;
      return n
    }

    function h(e, t, n) {
      if (n >= e.slice(-1)[0]) return 100;
      var i, a, r, s, o = d(n, e);
      return i = e[o - 1], a = e[o], r = t[o - 1], s = t[o], r + c([i, a], n) / l(r, s)
    }

    function _(e, t, n) {
      if (n >= 100) return e.slice(-1)[0];
      var i, a, r, s, o = d(n, t);
      return i = e[o - 1], a = e[o], r = t[o - 1], s = t[o], p([i, a], (n - r) * l(r, s))
    }

    function m(e, t, i, a) {
      if (100 === a) return a;
      var r, s, o = d(a, e);
      return i ? (r = e[o - 1], s = e[o], a - r > (s - r) / 2 ? s : r) : t[o - 1] ? e[o - 1] + n(a - e[o - 1], t[o - 1]) : a
    }

    function f(e, t, n) {
      var a;
      if ("number" == typeof t && (t = [t]), "[object Array]" !== Object.prototype.toString.call(t)) throw new Error("noUiSlider: 'range' contains invalid value.");
      if (a = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e), !i(a) || !i(t[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
      n.xPct.push(a), n.xVal.push(t[0]), a ? n.xSteps.push(isNaN(t[1]) ? !1 : t[1]) : isNaN(t[1]) || (n.xSteps[0] = t[1])
    }

    function g(e, t, n) {
      return t ? void(n.xSteps[e] = u([n.xVal[e], n.xVal[e + 1]], t) / l(n.xPct[e], n.xPct[e + 1])) : !0
    }

    function v(e, t, n, i) {
      this.xPct = [], this.xVal = [], this.xSteps = [i || !1], this.xNumSteps = [!1], this.snap = t, this.direction = n;
      var a, r = this;
      for (a in e) e.hasOwnProperty(a) && f(a, e[a], r);
      r.xNumSteps = r.xSteps.slice(0);
      for (a in r.xNumSteps) r.xNumSteps.hasOwnProperty(a) && g(Number(a), r.xNumSteps[a], r)
    }

    function b(e, t) {
      if (!i(t)) throw new Error("noUiSlider: 'step' is not numeric.");
      e.singleStep = t
    }

    function y(t, n) {
      if ("object" != typeof n || e.isArray(n)) throw new Error("noUiSlider: 'range' is not an object.");
      if (void 0 === n.min || void 0 === n.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      t.spectrum = new v(n, t.snap, t.dir, t.singleStep)
    }

    function w(t, n) {
      if (n = o(n), !e.isArray(n) || !n.length || n.length > 2) throw new Error("noUiSlider: 'start' option is incorrect.");
      t.handles = n.length, t.start = n
    }

    function k(e, t) {
      if (e.snap = t, "boolean" != typeof t) throw new Error("noUiSlider: 'snap' option must be a boolean.")
    }

    function S(e, t) {
      if (e.animate = t, "boolean" != typeof t) throw new Error("noUiSlider: 'animate' option must be a boolean.")
    }

    function C(e, t) {
      if ("lower" === t && 1 === e.handles) e.connect = 1;
      else if ("upper" === t && 1 === e.handles) e.connect = 2;
      else if (t === !0 && 2 === e.handles) e.connect = 3;
      else {
        if (t !== !1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        e.connect = 0
      }
    }

    function P(e, t) {
      switch (t) {
        case "horizontal":
          e.ort = 0;
          break;
        case "vertical":
          e.ort = 1;
          break;
        default:
          throw new Error("noUiSlider: 'orientation' option is invalid.")
      }
    }

    function T(e, t) {
      if (!i(t)) throw new Error("noUiSlider: 'margin' option must be numeric.");
      if (e.margin = e.spectrum.getMargin(t), !e.margin) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
    }

    function W(e, t) {
      if (!i(t)) throw new Error("noUiSlider: 'limit' option must be numeric.");
      if (e.limit = e.spectrum.getMargin(t), !e.limit) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
    }

    function x(e, t) {
      switch (t) {
        case "ltr":
          e.dir = 0;
          break;
        case "rtl":
          e.dir = 1, e.connect = [0, 2, 1, 3][e.connect];
          break;
        default:
          throw new Error("noUiSlider: 'direction' option was not recognized.")
      }
    }

    function A(e, t) {
      if ("string" != typeof t) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
      var n = t.indexOf("tap") >= 0,
        i = t.indexOf("drag") >= 0,
        a = t.indexOf("fixed") >= 0,
        r = t.indexOf("snap") >= 0;
      e.events = {
        tap: n || r,
        drag: i,
        fixed: a,
        snap: r
      }
    }

    function F(e, t) {
      if (e.format = t, "function" == typeof t.to && "function" == typeof t.from) return !0;
      throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
    }

    function I(t) {
      var n, i = {
        margin: 0,
        limit: 0,
        animate: !0,
        format: X
      };
      return n = {
        step: {
          r: !1,
          t: b
        },
        start: {
          r: !0,
          t: w
        },
        connect: {
          r: !0,
          t: C
        },
        direction: {
          r: !0,
          t: x
        },
        snap: {
          r: !1,
          t: k
        },
        animate: {
          r: !1,
          t: S
        },
        range: {
          r: !0,
          t: y
        },
        orientation: {
          r: !1,
          t: P
        },
        margin: {
          r: !1,
          t: T
        },
        limit: {
          r: !1,
          t: W
        },
        behaviour: {
          r: !0,
          t: A
        },
        format: {
          r: !1,
          t: F
        }
      }, t = e.extend({
        connect: !1,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal"
      }, t), e.each(n, function(e, n) {
        if (void 0 === t[e]) {
          if (n.r) throw new Error("noUiSlider: '" + e + "' is required.");
          return !0
        }
        n.t(i, t[e])
      }), i.style = i.ort ? "top" : "left", i
    }

    function L(e, t, n) {
      var i = e + t[0],
        a = e + t[1];
      return n ? (0 > i && (a += Math.abs(i)), a > 100 && (i -= a - 100), [s(i), s(a)]) : [i, a]
    }

    function M(e) {
      e.preventDefault();
      var t, n, i = 0 === e.type.indexOf("touch"),
        a = 0 === e.type.indexOf("mouse"),
        r = 0 === e.type.indexOf("pointer"),
        s = e;
      return 0 === e.type.indexOf("MSPointer") && (r = !0), e.originalEvent && (e = e.originalEvent), i && (t = e.changedTouches[0].pageX, n = e.changedTouches[0].pageY), (a || r) && (r || void 0 !== window.pageXOffset || (window.pageXOffset = document.documentElement.scrollLeft, window.pageYOffset = document.documentElement.scrollTop), t = e.clientX + window.pageXOffset, n = e.clientY + window.pageYOffset), s.points = [t, n], s.cursor = a, s
    }

    function E(t, n) {
      var i = e("<div><div/></div>").addClass(K[2]),
        a = ["-lower", "-upper"];
      return t && a.reverse(), i.children().addClass(K[3] + " " + K[3] + a[n]), i
    }

    function j(e, t, n) {
      switch (e) {
        case 1:
          t.addClass(K[7]), n[0].addClass(K[6]);
          break;
        case 3:
          n[1].addClass(K[6]);
        case 2:
          n[0].addClass(K[7]);
        case 0:
          t.addClass(K[6])
      }
    }

    function D(e, t, n) {
      var i, a = [];
      for (i = 0; e > i; i += 1) a.push(E(t, i).appendTo(n));
      return a
    }

    function $(t, n, i) {
      return i.addClass([K[0], K[8 + t], K[4 + n]].join(" ")), e("<div/>").appendTo(i).addClass(K[1])
    }

    function B(t, n, i) {
      function a() {
        return W[["width", "height"][n.ort]]()
      }

      function l(e) {
        var t, n = [A.val()];
        for (t = 0; t < e.length; t += 1) A.trigger(e[t], n)
      }

      function u(e) {
        return 1 === e.length ? e[0] : n.dir ? e.reverse() : e
      }

      function c(e) {
        return function(t, n) {
          A.val([e ? null : n, e ? n : null], !0)
        }
      }

      function p(t) {
        var n = e.inArray(t, B);
        A[0].linkAPI && A[0].linkAPI[t] && A[0].linkAPI[t].change(E[n], x[n].children(), A)
      }

      function d(t, i) {
        var a = e.inArray(t, B);
        return i && i.appendTo(x[a].children()), n.dir && n.handles > 1 && (a = 1 === a ? 0 : 1), c(a)
      }

      function h() {
        var e, t;
        for (e = 0; e < B.length; e += 1) this.linkAPI && this.linkAPI[t = B[e]] && this.linkAPI[t].reconfirm(t)
      }

      function _(e, t, i, a) {
        return e = e.replace(/\s/g, Y + " ") + Y, t.on(e, function(e) {
          return A.attr("disabled") ? !1 : A.hasClass(K[14]) ? !1 : (e = M(e), e.calcPoint = e.points[n.ort], void i(e, a))
        })
      }

      function m(e, t) {
        var n, i = t.handles || x,
          r = !1,
          s = 100 * (e.calcPoint - t.start) / a(),
          o = i[0][0] !== x[0][0] ? 1 : 0;
        n = L(s, t.positions, i.length > 1), r = y(i[0], n[o], 1 === i.length), i.length > 1 && (r = y(i[1], n[o ? 0 : 1], !1) || r), r && l(["slide"])
      }

      function f(t) {
        e("." + K[15]).removeClass(K[15]), t.cursor && e("body").css("cursor", "").off(Y), H.off(Y), A.removeClass(K[12]), l(["set", "change"])
      }

      function g(t, n) {
        1 === n.handles.length && n.handles[0].children().addClass(K[15]), t.stopPropagation(), _(q.move, H, m, {
          start: t.calcPoint,
          handles: n.handles,
          positions: [F[0], F[x.length - 1]]
        }), _(q.end, H, f, null), t.cursor && (e("body").css("cursor", e(t.target).css("cursor")), x.length > 1 && A.addClass(K[12]), e("body").on("selectstart" + Y, !1))
      }

      function v(t) {
        var i, s = t.calcPoint,
          o = 0;
        t.stopPropagation(), e.each(x, function() {
          o += this.offset()[n.style]
        }), o = o / 2 > s || 1 === x.length ? 0 : 1, s -= W.offset()[n.style], i = 100 * s / a(), n.events.snap || r(A, K[14], 300), y(x[o], i), l(["slide", "set", "change"]), n.events.snap && g(t, {
          handles: [x[o]]
        })
      }

      function b(e) {
        var t, n;
        if (!e.fixed)
          for (t = 0; t < x.length; t += 1) _(q.start, x[t].children(), g, {
            handles: [x[t]]
          });
        e.tap && _(q.start, W, v, {
          handles: x
        }), e.drag && (n = W.find("." + K[7]).addClass(K[10]), e.fixed && (n = n.add(W.children().not(n).children())), _(q.start, n, g, {
          handles: x
        }))
      }

      function y(e, t, i) {
        var a = e[0] !== x[0][0] ? 1 : 0,
          r = F[0] + n.margin,
          o = F[1] - n.margin,
          l = F[0] + n.limit,
          u = F[1] - n.limit;
        return x.length > 1 && (t = a ? Math.max(t, r) : Math.min(t, o)), i !== !1 && n.limit && x.length > 1 && (t = a ? Math.min(t, l) : Math.max(t, u)), t = I.getStep(t), t = s(parseFloat(t.toFixed(7))), t === F[a] ? !1 : (e.css(n.style, t + "%"), e.is(":first-child") && e.toggleClass(K[17], t > 50), F[a] = t, E[a] = I.fromStepping(t), p(B[a]), !0)
      }

      function w(e, t) {
        var i, a, r;
        for (n.limit && (e += 1), i = 0; e > i; i += 1) a = i % 2, r = t[a], null !== r && r !== !1 && ("number" == typeof r && (r = String(r)), r = n.format.from(r), (r === !1 || isNaN(r) || y(x[a], I.toStepping(r), i === 3 - n.dir) === !1) && p(B[a]))
      }

      function k(e) {
        if (A[0].LinkIsEmitting) return this;
        var t, i = o(e);
        return n.dir && n.handles > 1 && i.reverse(), n.animate && -1 !== F[0] && r(A, K[14], 300), t = x.length > 1 ? 3 : 1, 1 === i.length && (t = 1), w(t, i), l(["set"]), this
      }

      function S() {
        var e, t = [];
        for (e = 0; e < n.handles; e += 1) t[e] = n.format.to(E[e]);
        return u(t)
      }

      function C() {
        return e(this).off(Y).removeClass(K.join(" ")).empty(), delete this.LinkUpdate, delete this.LinkConfirm, delete this.LinkDefaultFormatter, delete this.LinkDefaultFlag, delete this.reappend, delete this.vGet, delete this.vSet, delete this.getCurrentStep, delete this.getInfo, delete this.destroy, i
      }

      function P() {
        var t = e.map(F, function(e, t) {
          var n = I.getApplicableStep(e),
            i = E[t],
            a = n[2],
            r = i - n[2] >= n[1] ? n[2] : n[0];
          return [
            [r, a]
          ]
        });
        return u(t)
      }

      function T() {
        return i
      }
      var W, x, A = e(t),
        F = [-1, -1],
        I = n.spectrum,
        E = [],
        B = ["lower", "upper"].slice(0, n.handles);
      if (n.dir && B.reverse(), t.LinkUpdate = p, t.LinkConfirm = d, t.LinkDefaultFormatter = n.format, t.LinkDefaultFlag = "lower", t.reappend = h, A.hasClass(K[0])) throw new Error("Slider was already initialized.");
      W = $(n.dir, n.ort, A), x = D(n.handles, n.dir, W), j(n.connect, A, x), b(n.events), t.vSet = k, t.vGet = S, t.destroy = C, t.getCurrentStep = P, t.getOriginalOptions = T, t.getInfo = function() {
        return [I, n.style, n.ort]
      }, A.val(n.start)
    }

    function R(e) {
      if (!this.length) throw new Error("noUiSlider: Can't initialize slider on empty selection.");
      var t = I(e, this);
      return this.each(function() {
        B(this, t, e)
      })
    }

    function N(t) {
      return this.each(function() {
        if (!this.destroy) return void e(this).noUiSlider(t);
        var n = e(this).val(),
          i = this.destroy(),
          a = e.extend({}, i, t);
        e(this).noUiSlider(a), this.reappend(), i.start === a.start && e(this).val(n)
      })
    }

    function U() {
      return this[0][arguments.length ? "vSet" : "vGet"].apply(this[0], arguments)
    }

    function V(t, n, i, a) {
      if ("range" === n || "steps" === n) return t.xVal;
      if ("count" === n) {
        var r, s = 100 / (i - 1),
          o = 0;
        for (i = [];
          (r = o++ * s) <= 100;) i.push(r);
        n = "positions"
      }
      return "positions" === n ? e.map(i, function(e) {
        return t.fromStepping(a ? t.getStep(e) : e)
      }) : "values" === n ? a ? e.map(i, function(e) {
        return t.fromStepping(t.getStep(t.toStepping(e)))
      }) : i : void 0
    }

    function O(n, i, a, r) {
      var s = n.direction,
        o = {},
        l = n.xVal[0],
        u = n.xVal[n.xVal.length - 1],
        c = !1,
        p = !1,
        d = 0;
      return n.direction = 0, r = t(r.slice().sort(function(e, t) {
        return e - t
      })), r[0] !== l && (r.unshift(l), c = !0), r[r.length - 1] !== u && (r.push(u), p = !0), e.each(r, function(t) {
        var s, l, u, h, _, m, f, g, v, b, y = r[t],
          w = r[t + 1];
        if ("steps" === a && (s = n.xNumSteps[t]), s || (s = w - y), y !== !1 && void 0 !== w)
          for (l = y; w >= l; l += s) {
            for (h = n.toStepping(l), _ = h - d, g = _ / i, v = Math.round(g), b = _ / v, u = 1; v >= u; u += 1) m = d + u * b, o[m.toFixed(5)] = ["x", 0];
            f = e.inArray(l, r) > -1 ? 1 : "steps" === a ? 2 : 0, !t && c && (f = 0), l === w && p || (o[h.toFixed(5)] = [l, f]), d = h
          }
      }), n.direction = s, o
    }

    function z(t, n, i, a, r, s) {
      function o(e, t) {
        return ["-normal", "-large", "-sub"][e && r ? r(t, e) : e]
      }

      function l(e, n, i) {
        return 'class="' + n + " " + n + "-" + c + " " + n + o(i[1], i[0]) + '" style="' + t + ": " + e + '%"'
      }

      function u(e, t) {
        i && (e = 100 - e), p.append("<div " + l(e, "noUi-marker", t) + "></div>"), t[1] && p.append("<div " + l(e, "noUi-value", t) + ">" + s.to(t[0]) + "</div>")
      }
      var c = ["horizontal", "vertical"][n],
        p = e("<div/>");
      return p.addClass("noUi-pips noUi-pips-" + c), e.each(a, u), p
    }
    var H = e(document),
      G = e.fn.val,
      Y = ".nui",
      q = window.navigator.pointerEnabled ? {
        start: "pointerdown",
        move: "pointermove",
        end: "pointerup"
      } : window.navigator.msPointerEnabled ? {
        start: "MSPointerDown",
        move: "MSPointerMove",
        end: "MSPointerUp"
      } : {
        start: "mousedown touchstart",
        move: "mousemove touchmove",
        end: "mouseup touchend"
      },
      K = ["noUi-target", "noUi-base", "noUi-origin", "noUi-handle", "noUi-horizontal", "noUi-vertical", "noUi-background", "noUi-connect", "noUi-ltr", "noUi-rtl", "noUi-dragable", "", "noUi-state-drag", "", "noUi-state-tap", "noUi-active", "", "noUi-stacking"];
    v.prototype.getMargin = function(e) {
      return 2 === this.xPct.length ? u(this.xVal, e) : !1
    }, v.prototype.toStepping = function(e) {
      return e = h(this.xVal, this.xPct, e), this.direction && (e = 100 - e), e
    }, v.prototype.fromStepping = function(e) {
      return this.direction && (e = 100 - e), a(_(this.xVal, this.xPct, e))
    }, v.prototype.getStep = function(e) {
      return this.direction && (e = 100 - e), e = m(this.xPct, this.xSteps, this.snap, e), this.direction && (e = 100 - e), e
    }, v.prototype.getApplicableStep = function(e) {
      var t = d(e, this.xPct),
        n = 100 === e ? 2 : 1;
      return [this.xNumSteps[t - 2], this.xVal[t - n], this.xNumSteps[t - n]]
    }, v.prototype.convert = function(e) {
      return this.getStep(this.toStepping(e))
    };
    var X = {
      to: function(e) {
        return e.toFixed(2)
      },
      from: Number
    };
    e.fn.val = function(t) {
      function n(e) {
        return e.hasClass(K[0]) ? U : G
      }
      if (void 0 === t) {
        var i = e(this[0]);
        return n(i).call(i)
      }
      var a = e.isFunction(t);
      return this.each(function(i) {
        var r = t,
          s = e(this);
        a && (r = t.call(this, i, s.val())), n(s).call(s, r)
      })
    }, e.fn.noUiSlider = function(e, t) {
      switch (e) {
        case "step":
          return this[0].getCurrentStep();
        case "options":
          return this[0].getOriginalOptions()
      }
      return (t ? N : R).call(this, e)
    }, e.fn.noUiSlider_pips = function(t) {
      var n = t.mode,
        i = t.density || 1,
        a = t.filter || !1,
        r = t.values || !1,
        s = t.format || {
          to: Math.round
        },
        o = t.stepped || !1;
      return this.each(function() {
        var t = this.getInfo(),
          l = V(t[0], n, r, o),
          u = O(t[0], i, n, l);
        return e(this).append(z(t[1], t[2], t[0].direction, u, a, s))
      })
    }
  }(window.jQuery || window.Zepto),
  function() {
    var e, t, n, i, a, r, s, o, l, u, c, p, d, h, _, m, f, g, v, b, y, w, k = [].slice,
      S = [].indexOf || function(e) {
        for (var t = 0, n = this.length; n > t; t++)
          if (t in this && this[t] === e) return t;
        return -1
      };
    $.payment = {}, $.payment.fn = {}, $.fn.payment = function() {
      var e, t;
      return t = arguments[0], e = 2 <= arguments.length ? k.call(arguments, 1) : [], $.payment.fn[t].apply(this, e)
    }, i = /(\d{1,4})/g, $.payment.cards = n = [{
      type: "visaelectron",
      pattern: /^4(026|17500|405|508|844|91[37])/,
      format: i,
      length: [16],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "maestro",
      pattern: /^(5(018|0[23]|[68])|6(39|7))/,
      format: i,
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "forbrugsforeningen",
      pattern: /^600/,
      format: i,
      length: [16],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "dankort",
      pattern: /^5019/,
      format: i,
      length: [16],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "visa",
      pattern: /^4/,
      format: i,
      length: [13, 16],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "mastercard",
      pattern: /^5[0-5]/,
      format: i,
      length: [16],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "amex",
      pattern: /^3[47]/,
      format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
      length: [15],
      cvcLength: [3, 4],
      luhn: !0
    }, {
      type: "dinersclub",
      pattern: /^3[0689]/,
      format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
      length: [14],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "discover",
      pattern: /^6([045]|22)/,
      format: i,
      length: [16],
      cvcLength: [3],
      luhn: !0
    }, {
      type: "unionpay",
      pattern: /^(62|88)/,
      format: i,
      length: [16, 17, 18, 19],
      cvcLength: [3],
      luhn: !1
    }, {
      type: "jcb",
      pattern: /^35/,
      format: i,
      length: [16],
      cvcLength: [3],
      luhn: !0
    }], cardInstructions = {
      card: "Please enter your credit card number.",
      expiry: "Enter your card's expiration month and year.",
      cvc: "Enter the three-digit CVV number found on the back of your card.",
      cvcAmex: "Enter your four-digit CVC number found on the front of your card.",
      zip: "Enter your billing zip code.",
      complete: "Awesome! You're all ready to go."
    }, cardValidationErrors = {
      card: "Please enter a valid credit card number.",
      expiry: "Please enter a valid month and year.",
      cvc: "Please enter a valid CVC number.",
      zip: "Please enter a valid zip code."
    }, e = function(e) {
      var t, i, a;
      for (e = (e + "").replace(/\D/g, ""), i = 0, a = n.length; a > i; i++)
        if (t = n[i], t.pattern.test(e)) return t
    }, t = function(e) {
      var t, i, a;
      for (i = 0, a = n.length; a > i; i++)
        if (t = n[i], t.type === e) return t
    }, p = function(e) {
      var t, n, i, a, r, s;
      for (i = !0, a = 0, n = (e + "").split("").reverse(), r = 0, s = n.length; s > r; r++) t = n[r], t = parseInt(t, 10), (i = !i) && (t *= 2), t > 9 && (t -= 9), a += t;
      return a % 10 === 0
    }, c = function(e) {
      var t;
      return null != e.prop("selectionStart") && e.prop("selectionStart") !== e.prop("selectionEnd") ? !0 : null != ("undefined" != typeof document && null !== document ? null != (t = document.selection) ? t.createRange : void 0 : void 0) && document.selection.createRange().text ? !0 : !1
    }, f = function(e) {
      return setTimeout(function() {
        var t, n;
        return t = $(e.currentTarget), n = t.val(), n = n.replace(/\D/g, ""), t.val(n)
      })
    }, _ = function(e) {
      return setTimeout(function() {
        var t, n;
        return t = $(e.currentTarget), n = t.val(), n = $.payment.formatCardNumber(n), t.val(n)
      })
    }, s = function(t) {
      var n, i, a, r, s, o, l, u, c, p, d;
      if (a = String.fromCharCode(t.which), "8" == t.keyCode || /^\d+$/.test(a)) {
        if (n = $(t.currentTarget), n.removeClass("transitioning-out"), l = n.val(), i = e(l + a), r = (l.replace(/\D/g, "") + a).length, o = 16, i && (o = i.length[i.length.length - 1]), u = $("#card-expiration"), c = $("#card-cvc"), p = $("#card-zip"), d = $(".card-instruction"), r >= o) return n.addClass("transitioning-out"), setTimeout(function() {
          u.removeClass("hide").focus(), c.removeClass("hide"), p.removeClass("hide"), d.html(cardInstructions.expiry).removeClass("invalid")
        }, 500), void 0;
        if (null == n.prop("selectionStart") || n.prop("selectionStart") === l.length) return s = i && "amex" === i.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/, s.test(l) ? (t.preventDefault(), setTimeout(function() {
          return n.val(l + " " + a)
        })) : s.test(l + a) ? (t.preventDefault(), setTimeout(function() {
          return n.val(l + a + " ")
        })) : void 0
      }
    }, a = function(e) {
      var t, n, i, a, r;
      return t = $(e.currentTarget), n = t.val(), 8 !== e.which || null != t.prop("selectionStart") && t.prop("selectionStart") !== n.length ? void 0 : (i = $("#card-expiration"), a = $("#card-cvc"), r = $("#card-zip"), t.removeClass("transitioning-out"), i.addClass("hide"), a.addClass("hide"), r.addClass("hide"), /\d\s$/.test(n) ? (e.preventDefault(), setTimeout(function() {
        return t.val(n.replace(/\d\s$/, ""))
      })) : /\s\d?$/.test(n) ? (e.preventDefault(), setTimeout(function() {
        return t.val(n.replace(/\d$/, ""))
      })) : void 0)
    }, m = function(e) {
      return setTimeout(function() {
        var t, n;
        return t = $(e.currentTarget), n = t.val(), n = $.payment.formatExpiry(n), t.val(n)
      })
    }, o = function(t) {
      var n, i, a, r, s, o, l;
      return i = String.fromCharCode(t.which), /^\d+$/.test(i) ? (n = $(t.currentTarget), a = n.val() + i, /^\d$/.test(a) && "0" !== a && "1" !== a ? (t.preventDefault(), setTimeout(function() {
        return n.val("0" + a + "/")
      })) : /^\d\d$/.test(a) ? (t.preventDefault(), setTimeout(function() {
        return n.val("" + a + "/")
      })) : (5 == a.length && (setTimeout(function() {
        $("#card-cvc").focus()
      }, 300), r = $(".card-instruction"), l = $("#card-number").val(), s = e(l), o = s && "amex" === s.type ? cardInstructions.cvcAmex : cardInstructions.cvc, r.html(o).removeClass("invalid")), void 0)) : void 0
    }, l = function(e) {
      var t, n, i;
      return n = String.fromCharCode(e.which), /^\d+$/.test(n) ? (t = $(e.currentTarget), i = t.val(), /^\d\d$/.test(i) ? t.val("" + i + "/") : void 0) : void 0
    }, u = function(e) {
      var t, n, i;
      return i = String.fromCharCode(e.which), "/" === i ? (t = $(e.currentTarget), n = t.val(), /^\d$/.test(n) && "0" !== n ? t.val("0" + n + "/") : void 0) : void 0
    }, r = function(e) {
      var t, n, i, a, r, s, o;
      return t = $(e.currentTarget), n = t.val(), 8 !== e.which || null != t.prop("selectionStart") && t.prop("selectionStart") !== n.length ? void 0 : (i = $("#card-number"), a = $("#card-expiration"), r = $("#card-cvc"), s = $("#card-zip"), o = $(".card-instruction"), 0 == n.length && (a.addClass("hide"), r.addClass("hide"), s.addClass("hide"), i.removeClass("transitioning-out").focus(), o.html(cardInstructions.card).removeClass("invalid")), /\d\/$/.test(n) ? (e.preventDefault(), setTimeout(function() {
        return t.val(n.replace(/\d\/$/, ""))
      })) : void 0)
    }, d = function(t) {
      var n, i, a, r, s, o;
      i = String.fromCharCode(t.which), /^\d+$/.test(i) && (n = $(t.currentTarget), a = n.val() + i, s = $("#card-number").val(), r = e(s), o = r && "amex" === r.type ? 4 : 3, a.length == o && (setTimeout(function() {
        $("#card-zip").focus()
      }, 300), $cardInstructions = $(".card-instruction"), $cardInstructions.html(cardInstructions.zip).removeClass("invalid")))
    }, h = function(e) {
      return setTimeout(function() {
        var t, n;
        return t = $(e.currentTarget), n = t.val(), n = n.replace(/\D/g, "").slice(0, 4), t.val(n)
      })
    }, formatBackCardCVC = function(e) {
      var t, n, i, a;
      t = $(e.currentTarget), n = t.val(), 8 === e.which && (null == t.prop("selectionStart") || t.prop("selectionStart") === n.length) && (i = $("#card-expiration"), a = $(".card-instruction"), 0 == n.length && (i.focus(), a.html(cardInstructions.expiry).removeClass("invalid")))
    }, formatZip = function(e) {
      var t, n, i, a;
      n = String.fromCharCode(e.which), /^[a-zA-Z0-9 ]+$/.test(n) && (t = $(e.currentTarget), i = t.val() + n, (/^[0-9].*$/.test(i) && 5 === i.length || 7 === i.length) && (a = $(".card-instruction"), a.html(cardInstructions.complete).addClass("valid")))
    }, reFormatZip = function(e) {
      return setTimeout(function() {
        var t, n, i, a;
        return t = $(e.currentTarget), n = t.val(), /^[0-9].*$/.test(n) ? (n = n.replace(/[^0-9]/, "").slice(0, 5), 5 === n.length && "input" === e.type && (i = !0)) : (n = n.replace(/[^a-zA-Z0-9 ]/, "").slice(0, 7), 3 === n.length ? n += " " : 7 === n.length && "input" === e.type && (i = !0)), i && (a = $(".card-instruction"), a.html(cardInstructions.complete).addClass("valid")), t.val(n)
      })
    }, formatBackCardZip = function(e) {
      var t, n, i;
      t = $(e.currentTarget), n = t.val(), 8 === e.which && (null == t.prop("selectionStart") || t.prop("selectionStart") === n.length) && (/^[0-9].*$/.test(n) || 4 === n.length && (n = n.substr(0, 3), t.val(n)), $cardCVC = $("#card-cvc"), i = $(".card-instruction"), 0 == n.length ? ($cardCVC.focus(), i.html(cardInstructions.cvc).removeClass("invalid")) : i.html(cardInstructions.zip).removeClass("valid invalid"))
    }, y = function(e) {
      var t;
      return e.metaKey || e.ctrlKey ? !0 : 32 === e.which ? !1 : 0 === e.which ? !0 : e.which < 33 ? !0 : (t = String.fromCharCode(e.which), !!/[\d\s]/.test(t))
    }, v = function(t) {
      var n, i, a, r;
      return n = $(t.currentTarget), a = String.fromCharCode(t.which), /^\d+$/.test(a) && !c(n) ? (r = (n.val() + a).replace(/\D/g, ""), i = e(r), i ? r.length <= i.length[i.length.length - 1] : r.length <= 16) : void 0
    }, b = function(e) {
      var t, n, i;
      return t = $(e.currentTarget), n = String.fromCharCode(e.which), /^\d+$/.test(n) && !c(t) ? (i = t.val() + n, i = i.replace(/\D/g, ""), i.length > 6 ? !1 : void 0) : void 0
    }, g = function(e) {
      var t, n, i;
      return t = $(e.currentTarget), n = String.fromCharCode(e.which), /^\d+$/.test(n) && !c(t) ? (i = t.val() + n, i.length <= 4) : void 0
    }, restrictZip = function(e) {
      var t, n, i;
      return t = $(e.currentTarget), n = String.fromCharCode(e.which), /^[a-zA-Z0-9 ]+$/.test(n) && !c(t) ? (i = t.val() + n, /^[0-9].*$/.test(i) ? i.length <= 5 : i.length <= 7) : void 0
    }, beginCreditCard = function() {
      $cardField = $("#card-number"), $cardField.hasClass("transitioning-out") && (setTimeout(function() {
        $cardField.removeClass("transitioning-out")
      }, 150), $(".credit-card-group").find("input:gt(0)").addClass("hide"))
    }, w = function(e) {
      var t, i, a, r, s, o;
      return t = $(e.currentTarget), o = $(".card-image"), s = t.val(), r = $.payment.cardType(s) || "unknown", t.hasClass(r) ? void 0 : (i = function() {
        var e, t, i;
        for (i = [], e = 0, t = n.length; t > e; e++) a = n[e], i.push(a.type);
        return i
      }(), t.removeClass("unknown"), t.removeClass(i.join(" ")), o.removeClass(i.join(" ")), t.addClass(r), o.addClass(r), t.toggleClass("identified", "unknown" !== r), t.trigger("payment.cardType", r))
    }, $.payment.fn.formatCardCVC = function() {
      return this.on("keypress", y), this.on("keypress", g), this.on("keypress", d), this.on("keydown", formatBackCardCVC), this.on("paste", h), this.on("change", h), this.on("input", h), this
    }, $.payment.fn.formatCardExpiry = function() {
      return this.on("keypress", y), this.on("keypress", b), this.on("keypress", o), this.on("keypress", u), this.on("keypress", l), this.on("keydown", r), this.on("change", m), this.on("input", m), this
    }, $.payment.fn.formatCardNumber = function() {
      return this.on("focus", beginCreditCard), this.on("keypress", y), this.on("keypress", v), this.on("keypress", s), this.on("keydown", a), this.on("keyup", w), this.on("paste", _), this.on("change", _), this.on("input", _), this.on("input", w), this
    }, $.payment.fn.formatCardZip = function() {
      return this.on("keypress", restrictZip), this.on("keypress", formatZip), this.on("keydown", formatBackCardZip), this.on("paste", reFormatZip), this.on("change", reFormatZip), this.on("input", reFormatZip), this
    }, $.payment.fn.restrictNumeric = function() {
      return this.on("keypress", y), this.on("paste", f), this.on("change", f), this.on("input", f), this
    }, $.payment.fn.cardExpiryVal = function() {
      return $.payment.cardExpiryVal($(this).val())
    }, $.payment.validateCreditCardForm = function() {
      var e = $(".credit-card-group"),
        t = $(".card-instruction"),
        n = !1;
      return e.removeClass("shake"), (n = $.payment.validateCardNumber($("#card-number").val())) ? (n = $.payment.validateCardExpiry($.payment.cardExpiryVal($("#card-expiration").val()))) ? (n = $.payment.validateCardCVC($("#card-cvc").val())) ? (n = $.payment.validateCardZip($("#card-zip").val()), n ? !0 : (t.html(cardValidationErrors.zip).removeClass("valid").addClass("invalid"), e.addClass("shake"), !1)) : (t.html(cardValidationErrors.cvc).removeClass("valid").addClass("invalid"), e.addClass("shake"), !1) : (t.html(cardValidationErrors.expiry).removeClass("valid").removeClass("valid").addClass("invalid"), e.addClass("shake"), !1) : (t.html(cardValidationErrors.card).removeClass("valid").addClass("invalid"), e.addClass("shake"), !1)
    }, $.payment.cardExpiryVal = function(e) {
      var t, n, i, a;
      return e = e.replace(/\s/g, ""), a = e.split("/", 2), t = a[0], i = a[1], 2 === (null != i ? i.length : void 0) && /^\d+$/.test(i) && (n = (new Date).getFullYear(), n = n.toString().slice(0, 2), i = n + i), t = parseInt(t, 10), i = parseInt(i, 10), {
        month: t,
        year: i
      }
    }, $.payment.validateCardNumber = function(t) {
      var n, i;
      return t = (t + "").replace(/\s+|-/g, ""), /^\d+$/.test(t) ? (n = e(t), n ? (i = t.length, S.call(n.length, i) >= 0 && (n.luhn === !1 || p(t))) : !1) : !1
    }, $.payment.validateCardExpiry = function(e, t) {
      var n, i, a;
      return "object" == typeof e && "month" in e && (a = e, e = a.month, t = a.year), e && t ? (e = $.trim(e), t = $.trim(t), /^\d+$/.test(e) ? /^\d+$/.test(t) ? e >= 1 && 12 >= e ? (2 === t.length && (t = 70 > t ? "20" + t : "19" + t), 4 !== t.length ? !1 : (i = new Date(t, e), n = new Date, i.setMonth(i.getMonth() - 1), i.setMonth(i.getMonth() + 1, 1), i > n)) : !1 : !1 : !1) : !1
    }, $.payment.validateCardCVC = function(e, n) {
      var i, a;
      return e = $.trim(e), /^\d+$/.test(e) ? (i = t(n), null != i ? (a = e.length, S.call(i.cvcLength, a) >= 0) : e.length >= 3 && e.length <= 4) : !1
    }, $.payment.validateCardZip = function(e) {
      var t;
      if (e = (e + "").replace(/\s+|-/g, ""), /^[0-9].*$/.test(e)) {
        if (!/^\d{5}$/.test(e)) return !1
      } else if (!/^[a-zA-Z0-9]+$/.test(e)) return !1;
      return t = e.length
    }, $.payment.cardType = function(t) {
      var n;
      return t ? (null != (n = e(t)) ? n.type : void 0) || null : null
    }, $.payment.formatCardNumber = function(t) {
      var n, i, a, r;
      return t = t.replace(/\D/g, ""), (n = e(t)) ? (a = n.length[n.length.length - 1], t = t.slice(0, a), n.format.global ? null != (r = t.match(n.format)) ? r.join(" ") : void 0 : (i = n.format.exec(t), null != i ? (i.shift(), i = $.grep(i, function(e) {
        return e
      }), i.join(" ")) : void 0)) : t
    }, $.payment.formatExpiry = function(e) {
      var t, n, i, a;
      return (n = e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/)) ? (t = n[1] || "", i = n[2] || "", a = n[3] || "", a.length > 0 ? i = "/" : "/" === i ? (t = t.substring(0, 1), i = "") : 2 === t.length || i.length > 0 ? i = "/" : 1 === t.length && "0" !== t && "1" !== t && (t = "0" + t, i = "/"), t + i + a) : ""
    }
  }.call(this);
var legacyMatchers = [
  ["brand-pink+by+victorias", "brand-pink+by+victoria%27s", "pink by victorias", "pink by victoria's"],
  ["brand-victorias", "brand-victoria%27s", "victorias", "victoria's"],
  ["brand-macys", "brand-macy%27s", "macys", "macy's"],
  ["brand-joes", "brand-joe%27s", "joes", "joe's"],
  ["brand-kiehls", "brand-kiehl%27s", "kiehls", "kiehl's"],
  ["brand-levis", "brand-levi%27s", "levis", "levi's"],
  ["brand-liu+%E2%80%A2jo+jeans", "brand-liu+jo+jeans", "liu jo jeans", "liu â€¢jo jeans"],
  ["brand-varcity", "brand-var%2Fcity", "varcity", "var/city"],
  ["brand-j.crew", "brand-j.crew", "jcrew", "j.crew"],
  ["brand-lagent", "brand-lagent", "lagent", "l'agent"],
  ["store-pink+by+victorias", "store-pink+by+victoria%27s", "pink by victorias", "pink by victoria's"],
  ["store-victorias", "store-victoria%27s", "victorias", "victoria's"],
  ["store-macys", "store-macy%27s", "macys", "macy's"],
  ["store-kiehls", "store-kiehl%27s", "kiehls", "kiehl's"],
  ["store-levis", "store-levi%27s", "levis", "levi's"],
  ["store-jcrew", "store-j.crew", "jcrew", "j.crew"],
  ["store-beautycom", "store-beauty.com", "beautycom", "beauty.com"],
  ["store-thecornercom", "store-thecorner.com", "thecornercom", "thecorner.com"],
  ["store-bloomingdales", "store-bloomingdale%27s", "bloomingdales", "bloomingdale's"],
  ["store-shoescribecom", "store-shoescribe.com", "shoescribecom", "shoescribe.com"],
  ["store-heelscom", "store-heels.com", "heelscom", "heels.com"],
  ["store-hudsons+bay", "store-hudson%27s+bay", "hudsons bay", "hudson's bay"]
];
"undefined" != typeof module ? module.exports = legacyMatchers : "undefined" != typeof window && (window.legacyMatchers = legacyMatchers);
var Templates = function() {
  "undefined" != typeof require && "function" != typeof _ && (_ = require("lodash-node"));
  var templates = {};
  return templates.AdminFeed = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="adminBody">\n    <div class="adminModule">\n        <h2>Raw Feed</h2>\n        ', _.each(items, function(e) {
      __p += '\n            <div class="rawFeedItem">\n                <div class="feedThumbnail">\n                    <img src="' + (null == (__t = e.pImage) ? "" : __t) + '">\n                </div>\n                <div class="feedInfo">\n                    <h5><a target="_blank" href="' + (null == (__t = e.userlink) ? "" : __t) + '">' + (null == (__t = e.uName) ? "" : __t) + '</a></h5>\n                    <p><a target="_blank" href="' + (null == (__t = e.productLink) ? "" : __t) + '">' + (null == (__t = e.pTitle) ? "" : __t) + "</a></p>\n                    <h6>" + (null == (__t = e.relative) ? "" : __t) + " - " + (null == (__t = e.timestamp) ? "" : __t) + "</h6>\n                </div>\n            </div>\n        "
    }), __p += "\n    </div>\n</div>\n";
    return __p
  }, templates.AdminUser = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<section class="adminWrap" data-container="admin">\n    <div class="adminBody">\n\n        <h2>' + (null == (__t = user.uName) ? "" : __t), user.name && (__p += " &ndash; " + (null == (__t = user.name) ? "" : __t)), __p += '</h2>\n        <h4>\n            <a href="mailto:' + (null == (__t = user.email) ? "" : __t) + '">' + (null == (__t = user.email) ? "" : __t) + '</a> &ndash;\n            <a data-json href="#">View JSON</a>\n        </h4>\n\n        <div>\n            <a href="#" data-rights="enabled" class="checkButton ', 1 == user.enabled && (__p += "selected"), __p += '">\n                <input id="userIsEnabled"\n                       name="userIsEnabled"\n                       type="checkbox" ', 1 == user.enabled && (__p += 'checked="true"'), __p += '\n                       class="offStage" />\n                Yes\n            </a>\n            <label for="userIsEnabled" class="descLabel">\n                Enabled\n            </label>\n        </div>\n        <div>\n            <a href="#" data-rights="shopper" class="checkButton ', 1 == user.shopper && (__p += "selected"), __p += '">\n                <input id="userIsShopperr"\n                       name="userIsShopper"\n                       type="checkbox" ', 1 == user.shopper && (__p += 'checked="true"'), __p += '\n                       class="offStage" />\n                Yes\n            </a>\n            <label for="userIsShopper" class="descLabel">\n                Shopper\n            </label>\n        </div>\n        <div>\n            <a href="#" data-rights="writer" class="checkButton ', 1 == user.writer && (__p += "selected"), __p += '">\n                <input id="userIsWriter"\n                       name="userIsWriter"\n                       type="checkbox" ', 1 == user.writer && (__p += 'checked="true"'), __p += '\n                       class="offStage" />\n                Yes\n            </a>\n            <label for="userIsWriter" class="descLabel">\n                Writer\n            </label>\n        </div>\n        <div>\n            <a href="#" data-rights="staff" class="checkButton ', 1 == user.staff && (__p += "selected"), __p += '">\n                <input id="userIsStaff"\n                       name="userIsStaff"\n                       type="checkbox" ', 1 == user.staff && (__p += 'checked="true"'), __p += '\n                       class="offStage" />\n                Yes\n            </a>\n            <label for="userIsWriter" class="descLabel">\n                Staff\n            </label>\n        </div>\n\n\n        <pre class="json">\n            <code>\n' + (null == (__t = user.json) ? "" : __t) + "\n            </code>\n        </pre>\n\n    </div>\n</section>\n";
    return __p
  }, templates.Article = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<section id="article" class="pageBody viewArticle hasFooter" itemscope itemtype="http://schema.org/Article">' + (null == (__t = articleBodyHTML) ? "" : __t) + "</section>\n";
    return __p
  }, templates.ArticleBody = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="articleMastHead ' + (null == (__t = header.focus) ? "" : __t) + "Aligned  " + (null == (__t = header.classNames) ? "" : __t) + '" style="background-image: url(' + (null == (__t = header.url) ? "" : __t) + ');">\n    ', header.isSmallHeader && (__p += '\n    <div class="blurredArticleMastHead ' + (null == (__t = header.focus) ? "" : __t) + 'Aligned" style="background-image: url(' + (null == (__t = header.url) ? "" : __t) + ');"></div>\n    <div class="clearArticleMastHeadWrap">\n        <div class="clearArticleMastHead ' + (null == (__t = header.focus) ? "" : __t) + 'Aligned" style="background-image: url(' + (null == (__t = header.url) ? "" : __t) + ');"></div>\n    </div>\n    <!--<svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="articleMastHeadSVG" viewBox="20, 0, 1600, 1200" preserveAspectRatio="xMinYMid slice">\n        <image id="articleMastHeadImageSVG" width="1640" height="1200" xlink:href="' + (null == (__t = header.url) ? "" : __t) + '" />\n    \n        <filter id="blurEffectSVG">\n            <feGaussianBlur stdDeviation="10" />\n        </filter>\n    </svg>-->\n    '), __p += '\n    <img src="' + (null == (__t = header.url) ? "" : __t) + '" itemprop="image" class="clippable" />\n    \n</div>\n<article class="articleWrap ' + (null == (__t = header.classNames) ? "" : __t) + '">\n    <div class="articleBody">\n        <header class="articleHeader">\n            <ul class="articleBreadCrumbs">\n                <li class="breadCrumbItem" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">\n                    <a href="/' + (null == (__t = typePath) ? "" : __t) + '/" class="breadCrumbAction" itemprop="url title">\n                        ' + (null == (__t = type) ? "" : __t) + '\n                    </a>\n                </li>\n            </ul>\n            <span class="articleDate">' + (null == (__t = obj.dateElapsed) ? "" : __t) + '</span>\n            <h1 class="h1Article" itemprop="name">' + (null == (__t = title) ? "" : __t) + '</h1>\n            <h2 class="h2Article" itemprop="description">' + (null == (__t = summary) ? "" : __t) + "</h2>\n            " + (null == (__t = shareHTML) ? "" : __t) + "\n            ", overrideAuthor || (__p += '\n            <div class="author">\n                <a href="' + (null == (__t = author.link) ? "" : __t) + '" class="authorLink" rel="author ', "syndicate" === author.type && (__p += "nofollow"), __p += '" itemprop="author" ', "syndicate" === author.type && (__p += 'target="_blank"'), __p += '>\n                    <span class="authorDesc">' + (null == (__t = author.caption) ? "" : __t) + "</span>\n                    " + (null == (__t = author.name) ? "" : __t) + '\n                    <div style="background-image: url(' + (null == (__t = author.avatar) ? "" : __t) + ');" title="' + (null == (__t = author.name) ? "" : __t) + '" class="authorImg"></div>\n                </a>\n            </div>\n            '), __p += '\n            <ul class="articleNav">\n                ', prev && (__p += '\n                    <li class="articleNavItem">\n                        <a href="' + (null == (__t = prev.url) ? "" : __t) + '"\n                           class="articleNavAction articleNavActionPrev actionPrev"\n                           title="Previous Article: ' + (null == (__t = prev.title) ? "" : __t) + '">\n                            Prev\n                        </a>\n                    </li>\n                '), __p += "\n                ", next && (__p += '\n                    <li class="articleNavItem">\n                        <a href="' + (null == (__t = next.url) ? "" : __t) + '"\n                           class="articleNavAction articleNavActionNext actionNext"\n                           title="Next Article: ' + (null == (__t = next.title) ? "" : __t) + '">\n                            Next\n                        </a>\n                    </li>\n                '), __p += "\n            </ul>\n        </header>\n\n        ", meta && (__p += '\n            <div itemprop="articleMeta">' + (null == (__t = meta) ? "" : __t) + "</div>\n        "), __p += '\n        <div itemprop="articleBody">\n            ' + (null == (__t = text) ? "" : __t) + '\n        </div>\n\n    </div>\n    <footer class="articleFooter clearFix">\n        <ul class="articleNavFooter">\n            ', prev && (__p += '\n                <li class="articleNavFooterItem">\n                    <a href="' + (null == (__t = prev.url) ? "" : __t) + '"\n                       class="articleNavFooterAction articleNavFooterActionPrev"\n                       style="background-image: url(' + (null == (__t = prev.image) ? "" : __t) + ');"\n                       title="Previous">\n                        <span class="articleFooterNavLabel actionPrev">' + (null == (__t = prev.title) ? "" : __t) + "</span>\n                    </a>\n                </li>\n            "), __p += "\n            ", next && (__p += '\n                <li class="articleNavFooterItem">\n                    <a href="' + (null == (__t = next.url) ? "" : __t) + '"\n                       class="articleNavFooterAction articleNavFooterActionNext"\n                       style="background-image: url(' + (null == (__t = next.image) ? "" : __t) + ');"\n                       title="Next">\n                        <span class="articleFooterNavLabel actionNext">' + (null == (__t = next.title) ? "" : __t) + "</span>\n                    </a>\n                </li>\n            "), __p += '\n        </ul>\n        <p class="pArticleFooter">\n            Published on: ' + (null == (__t = obj.dateFormatted) ? "" : __t) + "\n            ", overrideAuthor || (__p += '\n                <br />\n                Written by:\n                <a href="' + (null == (__t = author.link) ? "" : __t) + '"\n                   class="textLink"\n                   rel="author"\n                   itemprop="author"\n                   target="_blank">\n                   ' + (null == (__t = author.name) ? "" : __t) + "\n                </a>\n            "), __p += "\n            ", obj.source && (__p += '\n            <br />\n            Originally published as: <a href="' + (null == (__t = source.postUrl) ? "" : __t) + '?utm_source=wantering" class="textLink" rel="nofollow" target="_blank">' + (null == (__t = source.postTitle) ? "" : __t) + "</a>\n            "), __p += "\n        </p>\n        ", photoCredits.length && (__p += '\n            <p class="pArticleFooter">\n                Photo credits:\n                ', _.each(photoCredits, function(e, t) {
      __p += '\n                    <a href="' + (null == (__t = e.link) ? "" : __t) + '" class="photoCredit textLink" rel="nofollow" target="_blank">\n                        ' + (null == (__t = e.label) ? "" : __t), photoCredits.length !== t + 1 && (__p += ","), __p += "\n                    </a>\n                "
    }), __p += "\n            </p>\n        "), __p += "\n        " + (null == (__t = shareHTML) ? "" : __t) + "\n    </footer>\n</article>\n";
    return __p
  }, templates.ArticleImageSet = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div id="' + (null == (__t = key) ? "" : __t) + '" name="' + (null == (__t = key) ? "" : __t) + '" data-type="' + (null == (__t = type) ? "" : __t) + '" class="widgetContainer articleMedia', !isEditor && setSize > 9 && (__p += " isCarousel"), __p += '">\n    <ul class="imgSet setOf' + (null == (__t = setSize) ? "" : __t) + " " + (null == (__t = setSizeClassNames) ? "" : __t) + '">\n        ', _.forEach(assets, function(e, t) {
      __p += '\n            <li class="imgSetItem', setSize > 9 && 0 === t && (__p += " selected"), __p += '">\n\n                ', "image" === e.data.type ? (__p += "\n                    ", e.link && e.link.length > 3 ? (__p += '\n                        <a href="' + (null == (__t = e.link) ? "" : __t) + '"\n                           name="' + (null == (__t = e.data.key) ? "" : __t) + '"\n                           ', isSmartPhone || (__p += 'target="_blank"'), __p += '\n                           class="articleImgAction articleSetItemAction ' + (null == (__t = e.focusClass) ? "" : __t) + '"\n                           ', e.link.indexOf("wantering.com") < 0 && (__p += 'target="_blank" rel="nofollow"'), __p += '\n                           style="background-image: url(' + (null == (__t = e.src) ? "" : __t) + ');"\n                           data-imglarge="' + (null == (__t = e.srcLrg) ? "" : __t) + '">\n                    ') : __p += '\n                        <a href="#" name="' + (null == (__t = e.data.key) ? "" : __t) + '"\n                             class="articleImgAction articleSetItemAction ' + (null == (__t = e.focusClass) ? "" : __t) + '"\n                             style="background-image: url(' + (null == (__t = e.src) ? "" : __t) + ');"\n                             data-imglarge="' + (null == (__t = e.srcLrg) ? "" : __t) + '">\n                    ', __p += '\n                        <img class="articleImg clippable" src="' + (null == (__t = e.src) ? "" : __t) + '" alt="' + (null == (__t = e.data.title) ? "" : __t) + '" />\n                        ', setSize > 2 && e.data.text && e.data.text.length > 3 && (__p += '\n                            <figcaption data-caption="asset" name="' + (null == (__t = e.key) ? "" : __t) + '" class="captionArticle hoverCaption">\n                                ' + (null == (__t = e.data.text) ? "" : __t) + "\n                            </figcaption>\n                        "), __p += "\n                    ", __p += e.link && e.link.length > 3 ? "\n                        </a>\n                    " : "\n                        </a>\n                    ", __p += "\n                    ", e.text && e.text.length > 3 && 2 === setSize && (__p += '\n                        <figcaption data-caption="asset" name="' + (null == (__t = e.key) ? "" : __t) + '" class="captionArticle staticCaption">' + (null == (__t = e.text) ? "" : __t) + "</figcaption>\n                    "), __p += "\n                ") : (__p += "\n                    ", e.data.images && e.data.images[0] && (__p += '\n                        <a href="/' + (null == (__t = e.data.link_title) ? "" : __t) + "/" + (null == (__t = e.data.short_key) ? "" : __t) + '/"\n                            name="' + (null == (__t = e.data.short_key) ? "" : __t) + '"\n                           class="articleImgAction articleSetItemAction articleProductAction ' + (null == (__t = e.focusClass) ? "" : __t) + '"\n                           style="background-image: url(' + (null == (__t = e.src) ? "" : __t) + ');"\n                           data-imglarge="' + (null == (__t = e.srcLrg) ? "" : __t) + '"\n                           data-noscroll>\n                            <img class="articleImg clippable" src="' + (null == (__t = e.src) ? "" : __t) + '" alt="' + (null == (__t = e.data.title) ? "" : __t) + '" />\n                            ', setSize > 2 && (__p += '\n                                <figcaption data-caption="asset" name="' + (null == (__t = e.key) ? "" : __t) + '" class="captionArticle hoverCaption">\n                                    ', e.text && e.text.length > 3 ? __p += "\n                                        " + (null == (__t = e.text) ? "" : __t) + "\n                                    " : (__p += "\n                                        " + (null == (__t = e.data.title) ? "" : __t) + "\n                                        ", e.data.price && (__p += "\n                                            <strong>\n                                                ", __p += e.data.sale_price ? "\n                                                    $" + (null == (__t = e.data.sale_price) ? "" : __t) + "\n                                                " : "\n                                                    $" + (null == (__t = e.data.price) ? "" : __t) + "\n                                                ", __p += "\n                                            </strong>\n                                        "), __p += "\n                                    "), __p += "\n                                </figcaption>\n                            "), __p += '\n                        </a>\n                        <a href="' + (null == (__t = e.buyURL) ? "" : __t) + '" class="button primaryButton transparentButton doBuy" ', isSmartPhone || 0 == e.buyURL.indexOf("/buy/") || (__p += 'target="_blank"'), __p += " data-noscroll>Buy</a>\n                    "), __p += "\n                    ", e.data.sale_percent ? __p += '\n                        <span class="sticker stickerSale">\n                            <span class="stickerLabel">' + (null == (__t = e.data.sale_percent) ? "" : __t) + '%</span>\n                            <span class="stickerMicro">off</span>\n                        </span>\n                    ' : e.isNew && (__p += '\n                        <span class="sticker stickerNew">\n                            <span class="stickerLabel">New</span>\n                        </span>\n                    '), __p += "\n                    ", 2 == setSize && (__p += '\n                        <figcaption data-caption="asset" name="' + (null == (__t = e.key) ? "" : __t) + '" class="captionArticle staticCaption">\n                            ', e.text && e.text.length > 3 ? __p += "\n                                " + (null == (__t = e.text) ? "" : __t) + "\n                            " : (__p += "\n                                <strong>Shop:</strong> " + (null == (__t = e.data.title) ? "" : __t) + "\n                                ", e.data.price && (__p += "\n                                    <strong>\n                                        ", __p += e.data.sale_price ? "\n                                            $" + (null == (__t = e.data.sale_price) ? "" : __t) + "\n                                        " : "\n                                            $" + (null == (__t = e.data.price) ? "" : __t) + "\n                                        ", __p += "\n                                    </strong>\n                                "), __p += "\n                            "), __p += "\n                        </figcaption>\n                    "), __p += "\n                "), __p += "\n\n            </li>\n        "
    }), __p += "\n    </ul>\n    ", (setSize > 2 || 1 == setSize) && text && "" !== text && (__p += '\n    <figcaption class="captionArticle staticCaption" name="' + (null == (__t = key) ? "" : __t) + '" data-caption="set">\n        ' + (null == (__t = text) ? "" : __t) + "\n    </figcaption>\n    "), __p += "\n\n    ", setSize > 2 && !isEditor && (__p += '\n    <ul class="carouselNavigator firstItemSelected">\n        <li class="carouselNavigatorItem"><a href="#" class="carouselNavigatorAction carouselNavigatorActionPrev" title="Prev">Prev</a></li>\n        <li class="carouselIndicator"><a href="#" class="carouselIndicatorAction"><span class="indexIndicator">1</span> / ' + (null == (__t = setSize) ? "" : __t) + '</a></li>\n        <li class="carouselToggle"><a href="#" class="ir icon carouselToggleAction" title="Toggle Slideshow/Grid">grid</a></li>\n        <li class="carouselNavigatorItem"><a href="#" class="carouselNavigatorAction carouselNavigatorActionNext" title="Next">Next</a></li>\n    </ul>\n    '), __p += "\n</div>\n";
    return __p
  }, templates.ArticleImageWrap = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<figure id="' + (null == (__t = key) ? "" : __t) + '" name="' + (null == (__t = key) ? "" : __t) + '" data-type="imageSet" class="widgetContainer articleImgWrap articleMedia ' + (null == (__t = positionClass) ? "" : __t) + '">\n    ', "product" == type ? (__p += '\n        <a name="' + (null == (__t = data.short_key) ? "" : __t) + '" href="/' + (null == (__t = data.link_title) ? "" : __t) + "/" + (null == (__t = data.short_key) ? "" : __t) + '/" class="articleImgAction articleProductAction" data-noscroll>\n            ', data.images && data.images[0] && (__p += '\n                <img class="articleImg" src="' + (null == (__t = wanteringImageRootURL) ? "" : __t) + (null == (__t = data.images[0].medium.url) ? "" : __t) + '" alt="' + (null == (__t = data.title) ? "" : __t) + '" />\n            '), __p += "\n            ", data.sale_percent ? __p += '\n                <span class="sticker stickerSale">\n                    <span class="stickerLabel">' + (null == (__t = data.sale_percent) ? "" : __t) + '%</span>\n                    <span class="stickerMicro">off</span>\n                </span>\n            ' : isNew && (__p += '\n                <span class="sticker stickerNew">\n                    <span class="stickerLabel">New</span>\n                </span>\n            '), __p += '\n        </a>\n        <a href="' + (null == (__t = buyURL) ? "" : __t) + '" class="button primaryButton transparentButton doBuy" ', isSmartPhone || 0 == buyURL.indexOf("/buy/") || (__p += 'target="_blank"'), __p += ' data-noscroll>Buy</a>\n        <figcaption name="' + (null == (__t = data.short_key) ? "" : __t) + '" class="captionArticle staticCaption" data-caption="asset">\n            ', text && text.length > 3 ? __p += null == (__t = text) ? "" : __t : (__p += "\n                <strong>Shop:</strong> " + (null == (__t = data.title) ? "" : __t) + " ", data.price && (__p += "\n                <strong>$", __p += data.sale_price ? null == (__t = data.sale_price) ? "" : __t : null == (__t = data.price) ? "" : __t), __p += "</strong>\n            "), __p += "\n        </figcaption>\n    ") : (__p += "\n        ", link && (__p += '<a data-media="single" name="' + (null == (__t = asset.key) ? "" : __t) + '" href="' + (null == (__t = link) ? "" : __t) + '" target="_blank" class="articleImgAction">'), __p += '\n        <img data-media="single" name="' + (null == (__t = asset.key) ? "" : __t) + '" src="' + (null == (__t = asset.src) ? "" : __t) + '" alt="' + (null == (__t = asset.title) ? "" : __t) + '" class="articleImg" />\n        ', link && (__p += "</a>"), __p += "\n        ", text && (__p += '\n        <figcaption name="' + (null == (__t = asset.key) ? "" : __t) + '" class="captionArticle staticCaption" data-caption="asset">' + (null == (__t = text) ? "" : __t) + "</figcaption>\n        "), __p += "\n    "), __p += "\n</figure>\n";
    return __p
  }, templates.ArticleListing = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<section class="pageBody viewArticleListing articleDrafts articlesWrap">\n    <div class="_container">\n\n        ', /draft/.test(kind) && (__p += '\n            <article class="articleListing">\n                <a class="_link" data-article="new" href="/member/' + (null == (__t = uname) ? "" : __t) + '/drafts/new/">\n                    <h2 class="_title">Create a New Draft</h2>\n                    <p>&nbsp;<p>\n                </a>\n            </article>\n        '), __p += "\n        ", _.each(articles, function(e) {
      __p += '\n            <article class="articleListing -' + (null == (__t = e.status) ? "" : __t) + '" id="article_' + (null == (__t = e._id) ? "" : __t) + '">\n                <div class="_listing">\n                    <datetime class="_date">' + (null == (__t = e.date) ? "" : __t) + '</datetime>\n                    <h2 class="_title">\n                        <a class="_link" data-article="' + (null == (__t = e._id) ? "" : __t) + '" href="' + (null == (__t = e.url) ? "" : __t) + '">\n                            ' + (null == (__t = e.title) ? "" : __t) + "\n                            ", e.type && (__p += '\n                                <span style="color: #aaa;">&ndash; ' + (null == (__t = e.type) ? "" : __t) + "</span>\n                            "), __p += "\n                        </a>\n                    </h2>\n\n                    <p>" + (null == (__t = e.summary) ? "" : __t) + '</p>\n\n                    <p class="_status">\n                        ', e.publishRequest && (__p += "Submitted for review"), __p += "\n                        ", e.reviewable && (__p += "Available as a Mockup"), __p += "\n                        ", e.published && (__p += "Published"), __p += "\n                        ", e.tumblrID && (__p += "\n                            Tumblr ID: <strong>" + (null == (__t = e.tumblrID) ? "" : __t) + '</strong> &ndash;\n                            <a href="' + (null == (__t = e.tumblrLink) ? "" : __t) + '" target="_blank">Tumblr</a> &ndash;\n                            <a href="' + (null == (__t = e.tumblrDashboard) ? "" : __t) + '" target="_blank">Tumblr Dashboard</a>\n                        '), __p += '\n                        &nbsp;\n                    </p>\n                </div>\n                <div class="_actions">\n                    <span class="_buttons -hide" data-container="deleteActions">\n                        <button class="_button -cancel" data-cancel data-id="' + (null == (__t = e._id) ? "" : __t) + '">\n                            Cancel\n                        </button>\n                        <button class="_button -primary" data-action="delete" data-id="' + (null == (__t = e._id) ? "" : __t) + '">\n                            Delete\n                        </button>\n                    </span>\n                    ', /^published/.test(kind) && (__p += '\n                        <button class="_button -primary" data-action="unpublish" data-id="' + (null == (__t = e._id) ? "" : __t) + '">\n                            Hide\n                        </button>\n                        <button class="_button -primary" data-action="submit" data-id="' + (null == (__t = e._id) ? "" : __t) + '">\n                            Edit\n                        </button>\n                        <button class="_button -primary" data-action="publishToTumblr" data-id="' + (null == (__t = e._id) ? "" : __t) + '">\n                            Publish to Tumblr\n                        </button>\n                    '), __p += "\n                    ", /unpublished/.test(kind) && (__p += '\n                        <button class="_button -primary" data-action="republish" data-id="' + (null == (__t = e._id) ? "" : __t) + '">\n                            Republish\n                        </button>\n                    '), __p += "\n                    ", /draft/.test(kind) && (__p += '\n                        <span class="_buttons -primary" data-container="primaryActions">\n                            <button class="_button -remove" data-remove>\n                                Remove\n                            </button>\n                        </span>\n                    '), __p += "\n                    ", /draft/.test(kind) && (__p += '\n                        <span class="_buttons -primary" data-container="primaryActions">\n                            <button class="_button -remove" data-action="review" data-id="' + (null == (__t = e._id) ? "" : __t) + '">\n                                Move to Mockups\n                            </button>\n                        </span>\n                    '), __p += "\n                    ", /(draft|article|tumblr|review)/.test(kind) && !e.publishRequest && (__p += '\n                        <button class="_button -primary" data-action="submit" data-id="' + (null == (__t = e._id) ? "" : __t) + '">\n                            Submit for Review\n                        </button>\n                    '), __p += "\n                    ", /(article|tumblr)/.test(kind) && (__p += '\n                        <button class="_button -primary" data-action="publishToTumblr" data-id="' + (null == (__t = e._id) ? "" : __t) + '">\n                            Publish to Tumblr\n                        </button>\n                    '), __p += "\n                    ", /pending/.test(kind) && (__p += '\n                    <button title="Remove article from pending list" class="_button -primary" data-action="deny" data-id="' + (null == (__t = e._id) ? "" : __t) + '">\n                        Remove\n                    </button>\n                    <button class="_button -primary" data-action="publish" data-id="' + (null == (__t = e._id) ? "" : __t) + '">\n                        Publish\n                    </button>\n                    '), __p += "\n                </div>\n            </article>\n        "
    }), __p += "\n    </div>\n</section>\n";
    return __p
  }, templates.ArticleListingTumblr = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += "Tumblr ID: <strong>" + (null == (__t = tumblrID) ? "" : __t) + '</strong> &ndash;\n<a href="' + (null == (__t = tumblrLink) ? "" : __t) + '" target="_blank">Tumblr</a> &ndash;\n<a href="' + (null == (__t = tumblrDashboard) ? "" : __t) + '" target="_blank">Tumblr Dashboard</a>\n';
    return __p
  }, templates.ArticleMeta = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="articleMeta">\n    <button class="_button" data-show="data-meta"><em>Meta Info</em></button>\n    <div class=" _meta -hide" data-meta="article">\n        <!-- This is where the Meta Data for articles will go -->\n        <div>\n            <label>Article Link</label>\n            <input type="text" name="link" value="' + (null == (__t = article.linkTitle) ? "" : __t) + '" placeholder="Article Link" />\n        </div>\n        <div>\n            <select name="gender">\n                <option ' + (null == (__t = selected(article.gender, "n")) ? "" : __t) + ' value="n">Neutral</option>\n                <option ' + (null == (__t = selected(article.gender, "f")) ? "" : __t) + ' value="f">Female</option>\n                <option ' + (null == (__t = selected(article.gender, "m  ")) ? "" : __t) + ' value="m">Male</option>\n            <select>\n\n            <select name="type">\n                ', _.each(articleTypes, function(e) {
      __p += '\n                    <option value="' + (null == (__t = e.slug) ? "" : __t) + '">' + (null == (__t = e.name) ? "" : __t) + "</option>\n                "
    }), __p += '\n            <select>\n        </div>\n        <div class="_datePicker">\n            <label for="month">M</label>\n            <select name="month">\n                ', _.each(months, function(e) {
      __p += '\n                    <option value="' + (null == (__t = e) ? "" : __t) + '">' + (null == (__t = e) ? "" : __t) + "</option>\n                "
    }), __p += '\n            <select>\n            <label for="day">D</label>\n            <select name="day">\n                ', _.each(days, function(e) {
      __p += '\n                    <option value="' + (null == (__t = e) ? "" : __t) + '">' + (null == (__t = e) ? "" : __t) + "</option>\n                "
    }), __p += '\n            <select>\n            <label for="year">Y</label>\n            <select name="year">\n                ', _.each(years, function(e) {
      __p += '\n                    <option value="' + (null == (__t = e) ? "" : __t) + '">' + (null == (__t = e) ? "" : __t) + "</option>\n                "
    }), __p += '\n            <select>\n            <select name="hours">\n                ', _.times(24, function(e) {
      __p += '\n                    <option value="' + (null == (__t = e) ? "" : __t) + '">' + (null == (__t = e) ? "" : __t) + "</option>\n                "
    }), __p += '\n            <select>\n            <select name="minutes">\n                ', _.times(60, function(e) {
      __p += '\n                    <option value="' + (null == (__t = e) ? "" : __t) + '">' + (null == (__t = e) ? "" : __t) + "</option>\n                "
    }), __p += '\n            <select>\n        </div>\n        <div>\n            <label>Tumblr Tags</label>\n            <input type="text" name="tumblrTags" value="' + (null == (__t = article.tumblrTags) ? "" : __t) + '" placeholder="Tumblr Tags" />\n        </div>\n\n        <div>\n            <label>Campaign Tracker (tumblr)</label>\n            <input type="text" name="campaign" value="' + (null == (__t = article.campaign) ? "" : __t) + '" placeholder="Campaign Tracker - Leave empty if not part of a campaign" />\n        </div>\n\n        <div class="allowPreview" data-preview>\n            <div>\n                <a class="_preview" data-preview target="_blank" href="/preview/article/' + (null == (__t = article._id) ? "" : __t) + '/">\n                    Preview\n                </a>\n                <label class="_label">\n                    <input type="radio" id="allowPreview" name="allowPreview" value="1">\n                    Allow Public Preview\n                </label>\n                <label class="_label">\n                    <input type="radio" id="disablePreview" name="allowPreview" value="0">\n                    Disable Public Preview\n                </label>\n            </div>\n            <div>\n                <label class="_label">\n                    <input type="checkbox" id="overrideAuthor" name="overrideAuthor">\n                    Mark article author as "Wantering"\n                </label>\n            </div>\n        </div>\n    </div>\n</div>\n';
    return __p
  }, templates.AttributionList = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<ul class="attributionList">\n    <li class="attributionItem attributionIntro">\n        Thank you to the fashion bloggers and influencers that are Wantering Trendsetters.\n    </li>\n    ' + (null == (__t = listItmesHTML) ? "" : __t) + "\n</ul>\n";
    return __p
  }, templates.AttributionListItem = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<li class="attributionItem">\n    <span class="label">' + (null == (__t = label) ? "" : __t) + '</span> /\n    <a href="' + (null == (__t = link) ? "" : __t) + '" target="_blank" rel="nofollow" class="attributionItemAction">' + (null == (__t = attribution) ? "" : __t) + "</a>\n<li>\n";
    return __p
  }, templates.AttributionWrap = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="attributionWrap">\n    <a href="#" class="icon attributionAction">Attribution</a>\n</div>\n';
    return __p
  }, templates.Autosuggest = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<a href="' + (null == (__t = obj.link) ? "" : __t) + '" class="menuAction autoCompleteAction ' + (null == (__t = obj.kind) ? "" : __t) + 'Suggestion">\n    <span class="autoCompleteItemMark">' + (null == (__t = obj.t) ? "" : __t) + '</span>\n    <span class="autoCompleteItemType">\n        <!-- ', __p += "article" == obj.kind || "tag" == obj.kind ? null == (__t = obj.type) ? "" : __t : null == (__t = obj.kind) ? "" : __t, __p += " -->\n        " + (null == (__t = obj.label) ? "" : __t) + '\n    </span>\n    <span class="ir icon autoCompleteItemImg ', (obj.i || obj.header && obj.header.root) && (__p += "hasImg"), __p += " ", obj.header && obj.header.focus ? __p += (null == (__t = obj.header.focus) ? "" : __t) + "Aligned" : (obj.i || obj.header) && (__p += "centerAligned"), __p += '" style="\n        ', "color" == obj.kind ? __p += "\n            background: #" + (null == (__t = obj.hex) ? "" : __t) + ";\n        " : (obj.i || obj.header && obj.header.root) && (__p += "\n            background-image: url(\n                ", "article" == obj.kind ? __p += "\n                    " + (null == (__t = obj.header.root) ? "" : __t) + "s." + (null == (__t = obj.header.ext) ? "" : __t) + "\n                " : "tag" == obj.kind || "tag-category" == obj.kind ? __p += "\n                    " + (null == (__t = obj.path) ? "" : __t) + (null == (__t = obj.i) ? "" : __t) + "-s.jpg\n                " : obj.i && (__p += "\n                    " + (null == (__t = obj.path) ? "" : __t) + (null == (__t = obj.i) ? "" : __t) + "-s.png\n                "), __p += "\n            );\n        "), __p += '"></span>\n</a>\n';
    return __p
  }, templates.BrowseTags = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<section id="browseTags" class="pageBody hasFooter">\n    \n    <div class="browseHeader">\n        <h1 class="h1Browse">\n            ', __p += tagType ? "\n                " + (null == (__t = tags[0].title) ? "" : __t) + "\n            " : "\n                Style and Power\n            ", __p += "\n        </h1>\n        ", (!tagType || tags[0].description) && (__p += '\n        <p class="pBrowse">\n            ', tagType ? tags[0].description && (__p += "\n                " + (null == (__t = tags[0].description) ? "" : __t) + "\n            ") : __p += "\n               Browse the most popular and powerful searches on Wantering.\n            ", __p += "\n        </p>\n        "), __p += '\n    </div>\n    <div class="set tagsWrap">\n        ', _.each(tags, function(e) {
      __p += "\n            ", tagType || (__p += '\n            <div class="setHeader tagSetHeader">\n                <h2 class="h2Set">\n                    <a href="/browse/' + (null == (__t = e.link) ? "" : __t) + '/" class="textLink">' + (null == (__t = e.title) ? "" : __t) + '</a>\n                </h2>\n                <a href="/browse/' + (null == (__t = e.link) ? "" : __t) + '/" class="calltoAction moreSetAction">More ', isSmartPhone || (__p += null == (__t = e.title) ? "" : __t), __p += "</a>\n            </div>\n            "), __p += '\n            <ul class="tagsSet clearFix">\n                ', _.each(e.tags, function(e) {
        __p += '\n                    <li class="setItem units25 fullImg shortHeight">\n                        <a href="' + (null == (__t = e.searchURL) ? "" : __t) + '" class="setItemAction" title="Search: ' + (null == (__t = e.name) ? "" : __t) + '">\n                            ' + (null == (__t = e.name) ? "" : __t) + '\n                        </a>\n                        <div class="setImg topAligned" style="background-image: url(' + (null == (__t = e.imageURL) ? "" : __t) + ');">\n                            <img src="' + (null == (__t = e.imageURL) ? "" : __t) + '" itemprop="image" class="clippable">\n                        </div>\n                        <!-- <span class="setItemType">' + (null == (__t = e.type) ? "" : __t) + '</span> -->\n                        <ul class="setItemDetails">\n                            <li class="setItemTitle">' + (null == (__t = e.name) ? "" : __t) + '</li>\n                            <li class="setItemDescription">' + (null == (__t = e.description) ? "" : __t) + '</li>\n                            <li class="calltoAction">Search</li>\n                        </ul>\n                    </li>\n                '
      }), __p += "\n            </ul>\n        "
    }), __p += "\n    </div>\n</section>\n";
    return __p
  }, templates.Checkout = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div id="checkout" class="checkoutWrap">\n    <div class="checkout offStageRight">\n        <header class="checkoutHeader ', __p += product.images[0].small.weight ? null == (__t = product.images[0].small.weight) ? "" : __t : "center", __p += 'Aligned" style="background-image: url(' + (null == (__t = wanteringImageRootURL) ? "" : __t) + (null == (__t = product.images[0].small.url) ? "" : __t) + ');">\n        </header>\n        \n        <section id="checkoutColor" class="checkoutSection checkoutSelectColor ', __p += "color" != firstSection ? "offStageBottom" : "firstSection", __p += '" data-label="Color">', "color" == firstSection && (__p += null == (__t = firstSectionHTML) ? "" : __t), __p += '</section>\n        <section id="checkoutSize" class="checkoutSection checkoutSelectSize ', __p += "size" != firstSection ? "offStageBottom" : "firstSection", __p += '" data-label="Size">', "size" == firstSection && (__p += null == (__t = firstSectionHTML) ? "" : __t), __p += '</section>\n        <section id="checkoutShipping" class="checkoutSection checkoutSelectShipping ', __p += "shipping" != firstSection ? "offStageBottom" : "firstSection", __p += '" data-label="Ship to">', "shipping" == firstSection && (__p += null == (__t = firstSectionHTML) ? "" : __t), __p += '</section>\n        <section id="checkoutChangeCard" class="checkoutSection checkoutChangeCard offStageBottom" data-label="Change Card"></section>\n        <section id="checkoutReviewPayment" class="checkoutSection checkoutReviewPayment offStageBottom" data-label="Pay with"></section>\n        <section id="checkoutInProgress" class="checkoutSection checkoutInProgress"></section>\n        <section id="checkoutDone" class="checkoutSection checkoutDone"></section>\n        <a href="#" class="closeAction checkoutClose closeX" target="_blank">&times;</a>\n    </div>\n</div>\n';
    return __p
  }, templates.CheckoutCardForm = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<fieldset class="formModule checkoutFormModule credit-card-group">\n    <label for="card-number" class="hide">Credit Card Number</label>\n    <span class="card-image"></span>\n	<input placeholder="1234 5678 9012 3456" pattern="[0-9]*" type="text" class="card-number" id="card-number">\n	<label for="card-number" class="hide">Expiration Date</label>\n	<input placeholder="MM/YY" pattern="[0-9]*" type="text" class="card-expiration hide" id="card-expiration">\n	<label for="card-number" class="hide">CVV Number</label>\n	<input placeholder="CVC" pattern="[0-9]*" type="text" class="card-cvc hide" id="card-cvc">\n	<label for="card-number" class="hide">Billing Zip Code</label>\n	<input placeholder="ZIP" pattern="[a-zA-Z0-9]*" type="text" class="card-zip hide" id="card-zip">\n</fieldset>\n<span class="card-instruction">Please enter your credit card number</span>';
    return __p
  }, templates.CheckoutChangeCard = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) obj.cards ? (__p += '\n    <h2 class="h2Checkout">Which card would you like to use?</h2>\n    <ul class="cartSelector cardSelector">\n    ', _.each(cards, function(e) {
      __p += '\n        <li class="cartSelectorItem cartCardItem size100 ', e.is_default && (__p += "selected"), __p += '">\n            <a href="#" class="cartSelectorAction cartCardAction" data-value="' + (null == (__t = e.id) ? "" : __t) + '" title="' + (null == (__t = e.brand) ? "" : __t) + " ending in " + (null == (__t = e.last4) ? "" : __t) + '">\n                <label class="summaryLabel cardLabel">\n                    <span class="card-image ' + (null == (__t = e.classNames) ? "" : __t) + '"></span>\n                </label>\n                <span class="summaryValue">\n                    ' + (null == (__t = e.hiddenText) ? "" : __t) + (null == (__t = e.last4) ? "" : __t) + "\n                </span>\n            </a>\n        </li>\n    "
    }), __p += '\n    </ul> \n    <p class="cartSelectorP">Or, add a <a href="#" class="newSelectorItem newCard textLink">new card</a></p>\n    \n') : __p += '\n    <h2 class="h2Checkout">Add a new credit card</h2>\n    <form method="post" id="addCardForm" class="checkoutForm">\n        \n        ' + (null == (__t = cardFormHTML) ? "" : __t) + '\n         \n        <div class="buttonRow">\n            <button id="saveCard" class="button" type="submit">Save Card</button>\n            <button id="cancelAddCard" class="button linkButton">Cancel</button>\n        </div>\n    </form>\n', __p += "\n";
    return __p
  }, templates.CheckoutColor = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<h2 class="h2Checkout">What color are you looking for?</h2>\n<ul class="cartSelector colorSelector">\n', _.each(product.inventories, function(e, t) {
      __p += '\n    <li class="cartSelectorItem cartColorItem size50">\n        <a href="#" class="cartSelectorAction cartColorAction" data-value="' + (null == (__t = t) ? "" : __t) + '" title="' + (null == (__t = t) ? "" : __t) + '">' + (null == (__t = t) ? "" : __t) + "</a>\n    </li>\n"
    }), __p += "\n</ul>";
    return __p
  }, templates.CheckoutDone = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<h2 class="h2Checkout">All Done! Thank You for Shopping.</h2>\n<p class="checkoutP">Your order is complete. Your Concierge will contact you to confirm your purchase.</p>\n<div class="checkoutForm checkoutReceipt">\n    <fieldset class="formModule checkoutFormModule">\n        <div class="summaryRow">\n            <label class="summaryLabel">Order No.</label>\n            <span class="summaryValue">' + (null == (__t = obj.tid) ? "" : __t) + "-" + (null == (__t = obj.oid) ? "" : __t) + '</span>\n        </div>\n    </fieldset>\n    <fieldset class="formModule checkoutFormModule checkoutFormSummary">\n        <div class="summaryRow">\n            <label class="summaryLabel summaryLabelFull">' + (null == (__t = obj.product.title) ? "" : __t) + " by " + (null == (__t = obj.product.brand_name) ? "" : __t) + '</label>\n        </div>\n    </fieldset>\n    <fieldset class="formModule checkoutFormModule checkoutFormSummary">\n        ', obj.product.hasColorOptions && (__p += '\n        <div class="summaryRow">\n            <label class="summaryLabel">Color</label>\n            <span class="summaryValue" title="' + (null == (__t = obj.transaction.color) ? "" : __t) + '">' + (null == (__t = obj.transaction.color) ? "" : __t) + "</span>\n        </div>\n        "), __p += '\n        <div class="summaryRow">\n            <label class="summaryLabel">Size</label>\n            <span class="summaryValue" title="' + (null == (__t = obj.transaction.size) ? "" : __t) + '">' + (null == (__t = obj.transaction.size) ? "" : __t) + '</span>\n        </div>\n    </fieldset>\n    \n    <fieldset class="formModule checkoutFormModule checkoutFormSummary">\n        <div class="summaryRow summaryRowFull">\n            <label class="summaryLabel summaryLabelFull">' + (null == (__t = obj.transaction.shippingAddress.name) ? "" : __t) + '</label>\n        </div>\n        <div class="summaryRow summaryRowFull">\n            <label class="summaryLabel summaryLabelFull">' + (null == (__t = obj.transaction.shippingAddress.address1) ? "" : __t) + "</label>\n        </div>\n        ", obj.transaction.shippingAddress.address2 && (__p += '\n        <div class="summaryRow summaryRowFull">\n            <label class="summaryLabel summaryLabelFull">' + (null == (__t = obj.transaction.shippingAddress.address2) ? "" : __t) + "</label>\n        </div>\n        "), __p += '\n        <div class="summaryRow">\n            <label class="summaryLabel summaryLabelFull">' + (null == (__t = obj.transaction.shippingAddress.city) ? "" : __t) + ", " + (null == (__t = obj.transaction.shippingAddress.state) ? "" : __t) + " " + (null == (__t = obj.transaction.shippingAddress.zip) ? "" : __t) + '</label>\n        </div>\n    </fieldset>\n    <fieldset class="formModule checkoutFormModule checkoutFormSummary">\n        <div class="summaryRow">\n            <label class="summaryLabel">Price</label>\n            <span class="summaryValue">$' + (null == (__t = transaction.price) ? "" : __t) + '</span>\n        </div>\n        <div class="summaryRow">\n            <label class="summaryLabel">Shipping & Tax</label>\n            <span class="summaryValue">$' + (null == (__t = transaction.shippingTax) ? "" : __t) + '</span>\n        </div>\n        <div class="summaryRow summaryWaived">\n            <label class="summaryLabel hasStrikeThru">Concierge Fee</label>\n            <span class="summaryValue hasStrikeThru">$5.00</span>\n        </div>\n        ', transaction.credit && "0.00" != transaction.credit && (__p += '\n        <div class="summaryRow summaryCredit">\n            <label class="summaryLabel">Store Credit</label>\n            <span class="summaryValue">-$' + (null == (__t = transaction.credit) ? "" : __t) + "</span>\n        </div>\n        "), __p += '\n        <div class="summaryRow summaryTotal">\n            <label class="summaryLabel">Total</label>\n            <span class="summaryValue">$' + (null == (__t = transaction.total) ? "" : __t) + '</span>\n        </div>\n    </fieldset>\n    <div class="micro checkoutMicro">If you have any questions, please contact your Concierge at <a href="mailto:concierge@wantering.com?subject=Order No. ' + (null == (__t = obj.tid) ? "" : __t) + "-" + (null == (__t = obj.oid) ? "" : __t) + '" class="linkText">concierge@wantering.com</a>.</div>\n</div>\n<div class="buttonRow"><button class="button transparentButton checkoutButton doneAction">Done</button></div>\n';
    return __p
  }, templates.CheckoutInProgress = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<h2 class="h2Checkout">Processing...</h2>\n<p class="checkoutP">Please wait while we complete your purchase.</p>';
    return __p
  }, templates.CheckoutReviewPayment = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<h2 class="h2Checkout">\n    ', __p += cards && cards.length > 0 ? "\n        Review payment and place your order.\n    " : "\n        Enter payment to complete your order.\n    ", __p += '\n</h2>\n<form method="post" id="paymentForm" class="checkoutForm">\n    <label  class="blockLabel checkoutLabel">Credit Card Information</label>\n', cards && cards.length > 0 && useDefaultCard ? (__p += '\n    \n    <fieldset class="formModule checkoutFormModule checkoutFormSummary">\n        ', _.each(cards, function(e) {
      __p += "\n            ", e.is_default && (__p += '\n            <div class="summaryRow">\n                <label class="summaryLabel cardLabel">\n                    <span class="card-image ' + (null == (__t = e.classNames) ? "" : __t) + '"></span>\n                </label>\n                <span class="summaryValue">\n                ' + (null == (__t = e.hiddenText) ? "" : __t) + (null == (__t = e.last4) ? "" : __t) + "\n                </span>\n            </div>\n            "), __p += "\n        "
    }), __p += '\n        <div class="cartSelectorP cartSelectorPRight">\n            <a href="#" class="newSelectorItem changeCard textLink">change card</a>\n        </div>\n    </fieldset>\n') : __p += "\n     " + (null == (__t = cardFormHTML) ? "" : __t) + "\n", __p += '\n    <fieldset class="formModule checkoutFormModule checkoutFormSummary">\n        <div class="summaryRow">\n            <label class="summaryLabel">Price</label>\n            <span class="summaryValue">$' + (null == (__t = transaction.price) ? "" : __t) + '</span>\n        </div>\n        <div class="summaryRow">\n            <label class="summaryLabel">Shipping & Tax*</label>\n            <span class="summaryValue">$' + (null == (__t = transaction.shippingTax) ? "" : __t) + '</span>\n        </div>\n        <div class="summaryRow summaryWaived">\n            <label class="summaryLabel hasStrikeThru">Concierge Fee</label>\n            <span class="summaryValue hasStrikeThru">$5.00</span>\n        </div>\n        ', transaction.credit && "0.00" != transaction.credit && (__p += '\n        <div class="summaryRow summaryCredit">\n            <label class="summaryLabel">Store Credit</label>\n            <span class="summaryValue">-$' + (null == (__t = transaction.credit) ? "" : __t) + "</span>\n        </div>\n        "), __p += '\n        <div class="summaryRow summaryTotal">\n            <label class="summaryLabel">Total</label>\n            <span class="summaryValue">$' + (null == (__t = transaction.total) ? "" : __t) + '</span>\n        </div>\n    </fieldset>\n    <div class="micro checkoutMicro hasAsterisk">Shipping & Tax are estimated - you\'ll pay this amount or LESS!</div>\n    <div class="buttonRow">\n        <button id="completePayment" class="button" type="submit">Place Order</button>\n    </div>\n</form>\n';
    return __p
  }, templates.CheckoutShipped = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<h2 class="h2Checkout">Where would you like it shipped?</h2>\n', obj.shippingAddress ? (__p += '\n<ul class="cartSelector addressSelector">\n    <li class="cartSelectorItem cartAddressItem size100 ', shippingAddress.preSelected && (__p += "selected"), __p += '">\n        <a href="#" class="cartSelectorAction cartAddressAction" data-value="' + (null == (__t = shippingAddress.address1) ? "" : __t) + '" title="' + (null == (__t = shippingAddress.address1) ? "" : __t) + '">\n            <span class="checkoutActionData">' + (null == (__t = shippingAddress.name) ? "" : __t) + '</span>\n            <span class="checkoutActionData showWhenSelected">' + (null == (__t = shippingAddress.address1) ? "" : __t) + '</span>\n            <span class="checkoutActionData">' + (null == (__t = shippingAddress.address2) ? "" : __t) + '</span>\n            <span class="checkoutActionData">' + (null == (__t = shippingAddress.city) ? "" : __t) + ", " + (null == (__t = shippingAddress.state) ? "" : __t) + " " + (null == (__t = shippingAddress.country) ? "" : __t) + '</span>\n            <span class="checkoutActionData">' + (null == (__t = shippingAddress.zip) ? "" : __t) + '</span>\n        </a>\n        <p class="cartSelectorP">Or, enter a <a href="#" class="newSelectorItem newAddress textLink">new address</a></p>\n    </li>\n</ul> \n    \n') : (__p += '\n<form class="checkoutForm">\n     <fieldset class="formModule checkoutFormModule">\n        <div class="formRow">\n            <label for="shippingFullName" class="blockLabel checkoutLabel">Full Name</label>\n            <input data-validate id="shippingFullName" placeholder="Your Full Name" name="name" type="text" class="blockField" />\n            <div class="_message errorMessageUsername">&nbsp;</div>\n        </div>\n        <div class="formRow">\n            <label for="shippingAddress1" class="blockLabel checkoutLabel">Street Address</label>\n            <input data-validate id="shippingAddress1" placeholder="e.g. 660 Madison Avenue" name="address1" type="text" class="blockField" />\n            <input id="shippingAddress2" name="address2" type="text" class="blockField" />\n            <div class="_message errorMessageUsername">&nbsp;</div>\n        </div>\n        <div class="formRow">\n            <label for="shippingZip" class="blockLabel checkoutLabel">Zip Code</label>\n            <input data-validate id="shippingZip" placeholder="5 digits" name="zip" type="text" pattern="[0-9]*" class="blockField inlineField" />\n            <label id="cityStateLabel" class="inlineLabel checkoutLabel">Enter Zip for City, State</label>\n            <div class="_message errorMessageUsername">&nbsp;</div>\n        </div>\n        <input id="shippingCity" name="city" type="hidden" />\n        <input id="shippingState" name="state" type="hidden" />\n        <input id="shippingCountry" name="country" value="USA" type="hidden" />\n    </fieldset>\n    <div class="buttonRow">\n        <button id="saveShipping" class="button" type="submit" disabled>Save Shipping</button>\n        ', obj.addAnotherShipping && (__p += '\n        <button id="cancelAddShipping" class="button linkButton">Cancel</button>\n        '), __p += "\n    </div>\n</form>\n"), __p += "\n";
    return __p
  }, templates.CheckoutSize = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<h2 class="h2Checkout">What size are you looking for?</h2>\n<ul class="cartSelector sizeSelector">\n', _.each(product.inventories[selectedColor], function(e) {
      __p += '\n    <li class="cartSelectorItem cartSizeItem size33">\n        <a href="#" class="cartSelectorAction cartSizeAction" data-value="' + (null == (__t = e.size) ? "" : __t) + '" title="' + (null == (__t = e.size) ? "" : __t) + '">' + (null == (__t = e.size) ? "" : __t) + "</a>\n    </li>\n"
    }), __p += "\n</ul>";
    return __p
  }, templates.Dashboard = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="statsContainer" data-container>\n    <canvas class="stats" data-canvas></canvas>\n    <div class="statTotals isHidden" data-totals></div>\n</div>\n';
    return __p
  }, templates.EducationTips = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="tipView">\n    <div class="ir logo tipLogo">Wantering</div>\n    <div class="tipBanner">\n        <h4 class="h4Tip">' + (null == (__t = title) ? "" : __t) + '</h4>\n        <p class="pTip">' + (null == (__t = message) ? "" : __t) + '</p>\n    </div>\n    <ul class="tipActions">\n        <li class="tipActionItem">\n            <a href="#" class="tipAction optAction textLink" data-tip="' + (null == (__t = tip) ? "" : __t) + '" title="Got it, thanks. Don\'t show me this again.">\n                Hide this tip\n            </a>\n        </li>\n        <li class="tipActionItem">\n            <a href="#" class="tipAction closeAction textLink" title="Close">\n                &times;\n            </a>\n        </li>\n    </ul>\n</div>\n';
    return __p
  }, templates.EmailStats = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="adminBody">\n    <div class="adminModule">\n        <h2>Emails Sent</h2>\n        ', _.each(stats, function(e) {
      __p += '\n            <div class="statWrapper">\n                <h3>' + (null == (__t = e.id) ? "" : __t) + '</h3>\n                <div class="sentStats">\n                    <h5 class="statsLabel">Sent</h5>\n                    ', _.each(e.sent, function(e) {
        __p += "\n                        <p>\n                            " + (null == (__t = e.label) ? "" : __t) + ": <strong>" + (null == (__t = e.value) ? "" : __t) + '</strong>\n                        </p>\n                        <!-- <div title="' + (null == (__t = e.label) ? "" : __t) + '" style="margin-top: -16px;">\n                            <div style="display:inline-block; height: 4px; background: #676767; width: ' + (null == (__t = e.value) ? "" : __t) + '%"></div>\n                        </div> -->\n                    '
      }), __p += '\n                </div>\n                <div class="priceStats">\n                    <h5 class="statsLabel">Price Change </h5>\n                    <p>\n                        <label>Raw: </label><strong>' + (null == (__t = e.priceChange.raw) ? "" : __t) + "</strong>\n                    </p>\n                    <p>\n                        <label>Threshold: </label><strong>" + (null == (__t = e.priceChange.threshold) ? "" : __t) + "</strong>\n                    </p>\n                </div>\n            </div>\n        "
    }), __p += "\n    </div>\n</div>\n";
    return __p
  }, templates.Facets = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) _.each(facets, function(e) {
      __p += '\n    <ul data-type="' + (null == (__t = e.state.type) ? "" : __t) + '" class="filterNav facet ' + (null == (__t = e.state.type) ? "" : __t) + '">\n        <li class="navItem filterNavItem facetItem ' + (null == (__t = e.state.classname) ? "" : __t) + '">\n            <a href="#"\n               data-label="' + (null == (__t = e.state.defaultLabel) ? "" : __t) + '"\n               class="navAction', e.state.isCollection && (__p += " hasSubMenu"), __p += '">\n                <span class="label">' + (null == (__t = e.state.label) ? "" : __t) + '</span>\n                <span class="arrow">&#9662;</span>\n            </a>\n            <a href="#"\n               data-clearfacet="' + (null == (__t = e.state.type) ? "" : __t) + '"\n               class="navClearAction', e.state.isCollection && (__p += " categoryClearButton"), __p += '"\n               title="Clear Facet">\n                &times;\n            </a>\n            ', e.facets.length && (__p += '\n                <ul class="facets">\n                    ', _.each(e.facets, function(e) {
        __p += '\n                    <li class="facet facet' + (null == (__t = e.type) ? "" : __t) + '">\n                        <a href="' + (null == (__t = e.path) ? "" : __t) + '"\n                           class="facetAction facetType' + (null == (__t = e.type) ? "" : __t) + ' showFacet truncated"\n                           title="' + (null == (__t = e.label) ? "" : __t) + " (" + (null == (__t = e.count) ? "" : __t) + ')">\n                            ' + (null == (__t = e.label) ? "" : __t) + "\n                        </a>\n                    </li>\n                    "
      }), __p += "\n                </ul>\n            "), __p += "\n        </li>\n    </ul>\n"
    }), __p += "\n";
    return __p
  }, templates.FeaturedTags = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<ul class="set ' + (null == (__t = set) ? "" : __t) + 'Set clearFix">\n    ', _.each(obj.features[set], function(e) {
      __p += '\n        <li class="setItem ' + (null == (__t = e.classes) ? "" : __t) + '">\n            <a href="' + (null == (__t = e.searchURL) ? "" : __t) + '" class="setItemAction" title="Search: ' + (null == (__t = e.label) ? "" : __t) + '">\n                ' + (null == (__t = e.label) ? "" : __t) + '\n            </a>\n            <div class="setImg ' + (null == (__t = e.focus) ? "" : __t) + 'Aligned" style="background-image: url(' + (null == (__t = e.url) ? "" : __t) + ');">\n                <img src="' + (null == (__t = e.url) ? "" : __t) + '" itemprop="image" class="clippable">\n            </div>\n            <!-- <span class="setItemType">' + (null == (__t = e.type) ? "" : __t) + '</span> -->\n            <ul class="setItemDetails">\n                <li class="setItemTitle">' + (null == (__t = e.label) ? "" : __t) + '</li>\n                <li class="setItemDescription">' + (null == (__t = e.description) ? "" : __t) + '</li>\n                <li class="calltoAction">Search</li>\n            </ul>\n        </li>\n    '
    }), __p += "\n</ul>\n";
    return __p
  }, templates.Group = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<section id="' + (null == (__t = id) ? "" : __t) + '" class="pageBody groupWrap">' + (null == (__t = groupPageHTML) ? "" : __t) + "</section>\n";
    return __p
  }, templates.GroupList = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<ul class="groupList ' + (null == (__t = type) ? "" : __t) + 'Group">\n    ' + (null == (__t = groupListItems) ? "" : __t) + "\n</ul>\n";
    return __p
  }, templates.GroupListHeader = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="listHeader groupListHeader">\n    <h1 class="listTitle">\n        ' + (null == (__t = model.title) ? "" : __t) + "\n        ", model.prefix && (__p += ": ", __p += "0" == model.prefix ? "#" : null == (__t = model.prefix) ? "" : __t), __p += "\n    </h1>\n    ", model.description.length > 0 && (__p += '\n        <p class="listP listPFull">\n            ' + (null == (__t = model.description) ? "" : __t) + "\n        </p>\n    "), __p += "\n</div>\n";
    return __p
  }, templates.GroupListItem = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<li class="group">\n    <a href="/clothing/' + (null == (__t = obj.model.type) ? "" : __t) + "-" + (null == (__t = obj.model.path) ? "" : __t) + '/" class="groupAction">\n        ' + (null == (__t = obj.model.label) ? "" : __t) + "\n    </a>\n</li>\n";
    return __p
  }, templates.GroupWrap = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="groupListWrap">' + (null == (__t = groupLists) ? "" : __t) + "</div>\n";
    return __p
  }, templates.Home = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<section id="home" class="pageBody hasFooter">\n    <div class="setsWrap">\n        ', _.each(obj.setOrder, function(e, t) {
      __p += "\n            ", obj.features && obj.features[e] && obj.features[e].length > 0 && (__p += "\n\n", __p += "\n                ", t > 0 && (__p += '\n                    <div class="setHeader ' + (null == (__t = e) ? "" : __t) + 'SetHeader">\n                        <h2 class="h2Set">\n                            <a href="', "tags" != e && (__p += "/browse/" + (null == (__t = e.link) ? "" : __t) + "/"), __p += '/browse/" class="textLink">\n                            ' + (null == (__t = obj.setTitles[e]) ? "" : __t) + "\n                            </a>\n                        </h2>\n                        ", "tags" != e ? (__p += '\n                            <a href="/' + (null == (__t = e) ? "" : __t) + '/" class="calltoAction moreSetAction">More ', isSmartPhone || (__p += null == (__t = e) ? "" : __t), __p += "</a>\n                        ") : (__p += '\n                            <a href="/browse/" class="calltoAction moreSetAction">Browse ', isSmartPhone || (__p += " more searches"), __p += "</a>\n                        "), __p += "\n                    </div>\n                "), __p += "\n", __p += "\n                ", "masthead" == e && (__p += '\n                <div class="mastheadWrap">\n                '), __p += "\n", __p += "\n                    ", __p += "tags" != e ? "\n                        " + (null == (__t = Templates.Set({
        set: e,
        features: obj.features,
        imgPath: imgPath,
        isSmartPhone: isSmartPhone
      })) ? "" : __t) + "\n                    " : "\n                        " + (null == (__t = Templates.FeaturedTags({
        set: e,
        features: obj.features,
        imgPath: imgPath,
        isSmartPhone: isSmartPhone
      })) ? "" : __t) + "\n                    ", __p += "\n", __p += "\n                ", "masthead" == e && (__p += '\n                    <div id="siteIntro" class="siteIntro">\n                        <h2 class="h2SiteIntro">Shop What\'s Trending</h2>\n                        ' + (null == (__t = Templates.Search({
        searchFormPrefix: "home",
        classes: "textButton"
      })) ? "" : __t) + '\n                        <h3 class="h3SiteIntro">See what\'s being talked about on top social networks and fashion blogs</h3>\n                    </div>\n                </div>\n\n                '), __p += "\n            "), __p += "\n        "
    }), __p += "\n    </div>\n</section>\n";
    return __p
  }, templates.Invite = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<section id="invite" class="pageBody">\n    <div class="blockModule inviteBlock">\n        ', "facebook" == obj.userProvider && (__p += '\n            <div class="contentModule">\n                <h2 class="h2Block">Have friends who love to shop? <em>Invite them now!</em></h2>\n                <p class="pBlock">Share a better way to shop, and let your friends see what\'s being talked about on top social networks and fashion blogs.</p>\n                <div class="friendWrap"></div>\n                <p class="pButton"><a href="facebook/" data-bypass class="button buttonWithIcon facebookButton" data-fbid="none">Invite Friends</a></p>\n            </div>\n        '), __p += '\n        <div class="contentModule">\n            <h3 class="h2Block">Post an invitation to your favorite social networks</h3>\n            <ul class="socialButtons">\n                <li class="socialItem">\n                    <a href="#" class="button buttonWithIcon inviteButton pinterestButton" target="_blank">Pinterest</a>\n                </li>\n                <li class="socialItem">\n                    <a href="#" class="button buttonWithIcon inviteButton tumblrButton" target="_blank">Tumblr</a>\n                </li>\n                <li class="socialItem">\n                    <a href="#" class="button buttonWithIcon inviteButton twitterButton" target="_blank">Twitter</a>\n                </li>\n                <li class="socialItem">\n                    <a href="#" class="button buttonWithIcon inviteButton facebookButton" target="_blank">Facebook</a>\n                </li>\n                <li class="socialItem socialItemField">\n                    <label for="shareField" class="blockLabel">Copy and paste your unique URL</label>\n                    <input type="text" name="shareField" class="blockField shareLink" value="https://www.wantering.com/?ref=' + (null == (__t = obj.userHash) ? "" : __t) + '" />\n                </li>\n            </ul>\n        </div>\n    </div>\n</section>\n';
    return __p
  }, templates.Landing = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<section id="landingPage" class="pageBody hasFooter hasMenu ' + (null == (__t = obj.kind) ? "" : __t) + 'Page landingPage">\n    <div class="landingHeader">\n        <span class="landingType">Editorial</span>\n        <h1 class="landingTitle">\n            ' + (null == (__t = title) ? "" : __t) + '\n        </h1>\n    </div>\n\n    <div class="setsWrap">\n        ' + (null == (__t = Templates.Set({
      set: "landing",
      features: obj.features,
      isSmartPhone: isSmartPhone
    })) ? "" : __t) + "\n    </div>\n    ", previousPage && (__p += '\n        <a class="pagination previous offStage" href="' + (null == (__t = previousPage) ? "" : __t) + '">Previous Page</a>\n    '), __p += "\n    ", nextPage && (__p += '\n        <a class="pagination next offStage" href="' + (null == (__t = nextPage) ? "" : __t) + '">Next Page</a>\n    '), __p += "\n</section>\n";
    return __p
  }, templates.LetterNav = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<h2 class="h2Group">Browse by Letter</h2>\n\n<ul class="letterNav">\n    ' + (null == (__t = letters) ? "" : __t) + "\n</ul>\n";
    return __p
  }, templates.LetterNavItem = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<li class="letterNavItem', obj.selected && (__p += " selected"), __p += '">\n    <a href="/' + (null == (__t = obj.type) ? "" : __t) + "/" + (null == (__t = obj.letter) ? "" : __t) + '/" class="letterNavAction">\n       ', __p += "0" == obj.letter ? "#" : null == (__t = obj.letter) ? "" : __t, __p += "\n    </a>\n</li>\n";
    return __p
  }, templates.ListNoResults = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<p class="listP listPFull noResults">' + (null == (__t = noResultsText) ? "" : __t) + '</p>\n\n<div class="featuredSearches">\n    <ul class="noResultsFeaturedSearches">\n        ', _.each(obj.tags, function(e) {
      __p += '\n            <li class="_item">\n                <a href="' + (null == (__t = e.searchURL) ? "" : __t) + '" class="_itemAction" title="Search: ' + (null == (__t = e.label) ? "" : __t) + '">\n                    <span class="_itemImg"  style="background-image: url(' + (null == (__t = e.image) ? "" : __t) + ');"></span>' + (null == (__t = e.label) ? "" : __t) + "\n                </a>\n            </li>\n        "
    }), __p += "\n    </ul>\n</div>\n";
    return __p
  }, templates.ListProduct = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) model.images[0] && (__p += '\n<a href="/' + (null == (__t = model.link_title) ? "" : __t) + "/" + (null == (__t = model.short_key) ? "" : __t) + '/" class="ir productLink" data-noscroll data-action="detail" data-id="' + (null == (__t = model.short_key) ? "" : __t) + '">\n    ' + (null == (__t = model.title) ? "" : __t) + '\n</a>\n<span class="thumbnail', model.images[0] && model.images[0].weight && (__p += " " + (null == (__t = model.images[0].weight) ? "" : __t) + "Pos"), __p += '"\n    ', obj.model.showGIF ? (__p += '\n        style="background-image: url(' + (null == (__t = wanteringImageRootURL) ? "" : __t), __p += isSmartPhone ? null == (__t = model.gif.small.url) ? "" : __t : null == (__t = model.gif.medium.url) ? "" : __t, __p += ');"\n    ') : (__p += '\n      style="background-image: url(' + (null == (__t = wanteringImageRootURL) ? "" : __t), isSmartPhone && model.images[0].small ? __p += null == (__t = model.images[0].small.url) ? "" : __t : model.images[0].medium && (__p += null == (__t = model.images[0].medium.url) ? "" : __t), __p += ');"\n    '), __p += "\n>\n</span>\n", obj.model.isNew && (__p += '\n    <span class="sticker stickerNew ', obj.model.sale_percent && (__p += "stickerOnBottom"), __p += '" title="New in the last 7 days">\n        <span class="stickerLabel">New</span>\n    </span>\n'), __p += "\n", obj.model.sale_percent && (__p += '\n    <span class="sticker stickerSale ', obj.model.isNew && (__p += "stickerOnTop"), __p += '">\n        <span class="stickerLabel">' + (null == (__t = obj.model.sale_percent) ? "" : __t) + '%</span>\n        <span class="stickerMicro">off</span>\n    </span>\n'), __p += '\n\n<ul class="productDetails">\n    ', obj.model.brand_name && (__p += '\n        <li class="productDetail productBrand">' + (null == (__t = obj.model.brand_name) ? "" : __t) + "</li>\n    "), __p += '\n    <li class="productDetail productTitle">\n        ' + (null == (__t = model.title) ? "" : __t) + "\n    </li>\n    ", obj.model.store_names && (__p += '\n        <li class="productDetail productStore">from ' + (null == (__t = obj.model.store_names[0]) ? "" : __t) + "</li>\n    "), __p += "\n    ", obj.model.price && (__p += "\n        ", model.net_rev && (__p += '\n            <li class="productDetail productPrice netRev ' + (null == (__t = model.is_winner) ? "" : __t) + '" style="left: 0; width: 70px;">\n                <span class="salePrice">\n                    $' + (null == (__t = model.net_rev) ? "" : __t) + "\n                </span>\n            </li>\n        "), __p += '\n        <li class="productDetail productPrice ', obj.model.sale_price && (__p += "onSale"), __p += '">\n            <span class="regPrice">\n                ' + (null == (__t = obj.model.currencySymbol) ? "" : __t) + (null == (__t = obj.model.price) ? "" : __t) + "\n            </span>\n            ", obj.model.sale_price && (__p += '\n                <span class="salePrice">\n                    ' + (null == (__t = obj.model.currencySymbol) ? "" : __t) + (null == (__t = obj.model.sale_price) ? "" : __t) + "\n                </span>\n            "), __p += "\n            ", model.full_price && (__p += '\n                <br><span class="salePrice">\n                    T: $' + (null == (__t = model.full_price) ? "" : __t) + "\n                </span>\n            "), __p += "\n        </li>\n    "), __p += '\n</ul>\n<ul class="productActions" data-action="socialData" data-id="' + (null == (__t = model.short_key) ? "" : __t) + '">\n    ', obj.model.scoreCard.mentions && (__p += '\n        <li class="productAction socialDataItem ', obj.model.featureArticle && (__p += "hasFeatureArticle"), __p += '">\n            <a href="#" data-action="socialData" data-id="' + (null == (__t = model.short_key) ? "" : __t) + '" ', obj.model.featureArticle && (__p += 'data-featureindex="' + (null == (__t = obj.model.featureArticle.index) ? "" : __t) + '"'), __p += ' class="socialDataAction" title="Wantering Network | Facebook | Pinterest | Twitter | Tumblr | Influencers/Bloggers">View social data</a>\n\n            <span class="data socialData socialWantering" title="Wantering Network">\n                ', obj.model.scoreCard.wantering && (__p += '\n                    <span class="socialFill socialFillWantering" style="height: ' + (null == (__t = obj.model.scoreCard.wantering) ? "" : __t) + '%">Wantering Network</span>\n                '), __p += '\n            </span>\n\n            <span class="data socialData socialFacebook" title="Facebook">\n                ', obj.model.scoreCard.facebook && (__p += '\n                    <span class="socialFill socialFillFacebook" style="height: ' + (null == (__t = obj.model.scoreCard.facebook) ? "" : __t) + '%">Facebook</span>\n                '), __p += '\n            </span>\n\n            <span class="data socialData socialPinterest" title="Pinterest">\n                ', obj.model.scoreCard.pinterest && (__p += '\n                    <span class="socialFill socialFillPinterest" style="height: ' + (null == (__t = obj.model.scoreCard.pinterest) ? "" : __t) + '%">Pinterest</span>\n                '), __p += '\n            </span>\n\n            <span class="data socialData socialTwitter" title="Twitter">\n                ', obj.model.scoreCard.twitter && (__p += '\n                    <span class="socialFill socialFillTwitter" style="height: ' + (null == (__t = obj.model.scoreCard.twitter) ? "" : __t) + '%">Twitter</span>\n                '), __p += '\n            </span>\n\n            <span class="data socialData socialTumblr" title="Tumblr">\n                ', obj.model.scoreCard.tumblr && (__p += '\n                    <span class="socialFill socialFillTumblr" style="height: ' + (null == (__t = obj.model.scoreCard.tumblr) ? "" : __t) + '%">Tumblr</span>\n                '), __p += '\n            </span>\n\n            <span class="data socialData socialInfluencers" title="Influencers">\n                ', obj.model.scoreCard.influencers && (__p += '\n                    <span class="socialFill socialFillInfluencers" style="height: ' + (null == (__t = obj.model.scoreCard.influencers) ? "" : __t) + '%">Influencers</span>\n                '), __p += "\n            </span>\n            ", obj.model.featureArticle && (__p += '\n            <div class="featureArticlePreview" style="background-image: url(' + (null == (__t = obj.model.featureArticle.imgURL) ? "" : __t) + ');">' + (null == (__t = obj.model.featureArticle.title) ? "" : __t) + "</div>\n            "), __p += "\n        </li>\n    "), __p += "\n    ", 1 == model.product_wanted && model.wantSet && model.canEdit && (__p += '\n        <li class="productAction">\n            <a href="#" data-action="unlove" data-id="' + (null == (__t = model.short_key) ? "" : __t) + '"  class="ir icon action unwantAction" title="Remove from set">\n                Delete it!\n            </a>\n        </li>\n    '), __p += '\n    <li class="productAction">\n        <a href="' + (null == (__t = obj.model.buy_url) ? "" : __t) + '"\n           data-action="buy"\n           data-id="' + (null == (__t = model.short_key) ? "" : __t) + '"\n           class="button transparentButton listShopButton ', 1 == model.product_wanted && model.wantSet && model.canEdit && (__p += " memberProductAction"), __p += '"\n           rel="nofollow" ', isSmartPhone || 0 == model.buy_url.indexOf("/buy/") || (__p += 'target="_blank"'), __p += '  data-noscroll>\n            BUY\n        </a>\n    </li>\n    <li class="productAction">\n        <a href="#" data-action="love" data-id="' + (null == (__t = model.short_key) ? "" : __t) + '" class="ir icon action wantAction ', 1 == model.product_wanted && (__p += "wanted"), __p += '">\n            Love it!\n        </a>\n    </li>\n</ul>\n'), __p += "\n";
    return __p
  }, templates.ListProductItem = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<li class="product listProduct ', focused === !0 && (__p += "focused "), obj.showGIF && (__p += "hasGif "), status === !1 && (__p += "outOfStock"), __p += '" id="pid-' + (null == (__t = shortKey) ? "" : __t) + '">\n    ' + (null == (__t = productHTML) ? "" : __t) + "\n</li>\n";
    return __p
  }, templates.ListProductSimple = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<a href="/' + (null == (__t = model.link_title) ? "" : __t) + "/" + (null == (__t = model.short_key) ? "" : __t) + '/"\n   class="ir productLink ', 0 == model.in_stock && (__p += "outOfStock"), __p += '" data-action="detail" data-id="' + (null == (__t = model.short_key) ? "" : __t) + '">\n    ' + (null == (__t = model.title) ? "" : __t) + '\n</a>\n<span class="thumbnail', model.images[0] && model.images[0].weight && (__p += " " + (null == (__t = model.images[0].weight) ? "" : __t) + "Pos"), __p += '"\n      style="background-image: url(' + (null == (__t = wanteringImageRootURL) ? "" : __t) + (null == (__t = model.images[0].small.url) ? "" : __t) + ');">\n</span>\n', obj.model.sale_percent ? __p += '\n    <span class="sticker stickerSale">\n        <span class="stickerLabel">' + (null == (__t = obj.model.sale_percent) ? "" : __t) + '%</span>\n        <span class="stickerMicro">off</span>\n    </span>\n' : obj.model.isNew && (__p += '\n    <span class="sticker stickerNew" title="New in the last 7 days">\n        <span class="stickerLabel">New</span>\n    </span>\n'), __p += "\n";
    return __p
  }, templates.ListResults = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<section id="' + (null == (__t = obj.id) ? "" : __t) + '" class="pageBody resultsWrap ' + (null == (__t = obj.viewClasses) ? "" : __t) + '">\n    <div class="listResultsHeaderWrapper">\n        ' + (null == (__t = obj.listHeader) ? "" : __t) + "\n    </div>\n    " + (null == (__t = obj.listResults) ? "" : __t) + "\n    ", obj.isWishList && (__p += '\n        <div class="wishListFooter"></div>\n    '), __p += "\n</section>\n";
    return __p
  }, templates.ListResultsHeader = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="listHeader ', model.profileImage && (__p += "memberLovesHeader "), headerInfo && headerInfo.info && headerInfo.info.description && headerInfo.info.logo && (__p += "listContentHeader"), __p += '" ', headerInfo && (__p += 'itemscope itemtype="http://schema.org/Thing'), __p += '">\n\n    ', model.profile && (__p += '\n        <div class="headerProfile">\n            <a href="/member/' + (null == (__t = model.profile.uName) ? "" : __t) + '/collections/" class="headerProfileLink">\n            ', model.profileImage && (__p += '\n                <img class="headerProfileImage" src="' + (null == (__t = model.profileImage) ? "" : __t) + '">\n            '), __p += "\n            ", model.profileName && (__p += '\n                <span class="headerProfileName">' + (null == (__t = model.profileName) ? "" : __t) + "</span>\n            "), __p += '\n            </a>\n            <ul class="memberNav">\n                <li class="navItem memberNavItem"><a href="/member/' + (null == (__t = model.profile.uName) ? "" : __t) + '/collections/" class="navAction memberNavAction memberSetsNavAction"><span class="count">' + (null == (__t = model.profile.wantSetCount) ? "" : __t) + "</span> Collection", (!model.profile.wantSetCount || model.profile.wantSetCount > 1) && (__p += "s"), __p += '</a></li>\n                <li class="navItem memberNavItem"><a href="/member/' + (null == (__t = model.profile.uName) ? "" : __t) + '/loves/" class="navAction memberNavAction memberLovesNavAction">', model.profile.lovesCount && (__p += '<span class="count">', __p += model.profile.lovesCountPretty ? null == (__t = model.profile.lovesCountPretty) ? "" : __t : null == (__t = model.profile.lovesCount) ? "" : __t, __p += "</span>"), __p += " Loved Item", (!model.profile.lovesCount || model.profile.lovesCount > 1) && (__p += "s"), __p += "</a></li>\n            </ul>\n\n            ", model.canEdit && (__p += '\n                <a href="#" data-edit="' + (null == (__t = model.wantSetID) ? "" : __t) + '" class="button secondaryButton editSetAction">Edit', isSmartPhone || (__p += " Collection"), __p += "</a>\n            "), __p += "\n        </div>\n    "), __p += "\n\n    ", model.type && (__p += '\n    <span class="featureType">\n        ', model.summary && (__p += '\n        <span class="listSummary">\n            ' + (null == (__t = model.summary) ? "" : __t) + "\n        </span>\n        "), __p += "\n        " + (null == (__t = model.count) ? "" : __t) + " " + (null == (__t = model.type) ? "" : __t) + "\n    </span>\n    "), __p += '\n    <h1 class="listTitle" ', headerInfo || (__p += 'itemprop="name"'), __p += ">\n        " + (null == (__t = model.title) ? "" : __t) + "\n    </h1>\n    \n    ", !model.profile && model.type && (__p += ' \n    <ul class="nav sortNav">\n        <li class="navItem sortNavItem">\n            <a href="#" class="sortNavAction sortMenuOpener">\n                <span class="label">' + (null == (__t = model.sortLabel) ? "" : __t) + '</span>\n                <span class="arrow">&#9662;</span>\n            </a>\n            <ul class="menu menuRight">\n                <li class="menuItem"><a href="' + (null == (__t = model.url) ? "" : __t) + '" class="menuAction sortMenuAction">Popularity</a></li>\n                <li class="menuItem"><a href="' + (null == (__t = model.url) ? "" : __t) + '?sort=price-asc" class="menuAction sortMenuAction">Lowest Price</a></li>\n                <li class="menuItem"><a href="' + (null == (__t = model.url) ? "" : __t) + '?sort=price-desc" class="menuAction sortMenuAction">Highest Price</a></li>\n                <li class="menuItem"><a href="' + (null == (__t = model.url) ? "" : __t) + '?sort=new" class="menuAction sortMenuAction">Newest</a></li>\n            </ul>\n        </li>\n    </ul>\n    '), __p += "\n\n    <!-- MEMBER SHARING -->\n    ", model.shareHTML && (__p += null == (__t = model.shareHTML) ? "" : __t), __p += "\n    <!-- FOR FEATURES -->\n    ", model.description && model.description.length > 0 && (__p += '<p class="listP">' + (null == (__t = model.description) ? "" : __t) + "</p>"), __p += "\n    ", model.image && model.image.length > 0 && (__p += '\n        <div class="thumbnail" style="background-image: url(' + (null == (__t = model.image) ? "" : __t), isSmartPhone && (__p += "-sm"), __p += '.jpg);">\n            <img src="' + (null == (__t = model.image) ? "" : __t), isSmartPhone && (__p += "-sm"), __p += '.jpg" class="clippable" />\n        </div>\n    '), __p += "\n    <!-- FOR SEARCH CONTENT LIKE headerInfo/STORE/TAG SEO INFO -->\n    ", headerInfo && headerInfo.info && headerInfo.info.logo && (__p += "\n        " + (null == (__t = Templates.ListResultsInfo({
      headerInfo: headerInfo,
      model: model,
      imgPath: imgPath,
      isSmartPhone: isSmartPhone,
      Templates: Templates
    })) ? "" : __t) + "\n    "), __p += "\n</div>\n";
    return __p
  }, templates.ListResultsInfo = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '\n    <p class="listP listContentP clippable" itemprop="name">' + (null == (__t = headerInfo.label) ? "" : __t) + "</p>\n", headerInfo.info.established && (__p += '\n    <p class="listP listContentP darkened">\n        ', headerInfo.info.established && (__p += "\n            Est. " + (null == (__t = headerInfo.info.established) ? "" : __t) + "\n        "), __p += "\n        ", headerInfo.info.established && headerInfo.info.based && (__p += '\n            <span class="midDotSeparator">&middot;</span>\n            ' + (null == (__t = headerInfo.info.based) ? "" : __t) + "\n        "), __p += "\n        ", (headerInfo.info.established || headerInfo.info.based) && headerInfo.info.style && (__p += '\n            <span class="midDotSeparator">&middot;</span>\n            ' + (null == (__t = headerInfo.info.style) ? "" : __t) + "\n        "), __p += "\n    </p>\n"), __p += "\n", headerInfo.info.description && (__p += '\n    <p class="listP listContentP listContentDescription ', headerInfo.info.description.length > 460 && (__p += "collapsible collapsed"), __p += '" itemprop="description">\n        ' + (null == (__t = headerInfo.info.description) ? "" : __t) + "\n        ", headerInfo.info.description.length > 460 && (__p += '\n            <a href="#" class="collapseAction" title="Read more">&middot;&middot;&middot;</a>\n        '), __p += "\n    </p>\n"), __p += "\n        \n", headerInfo.info && headerInfo.info.description && (__p += "\n    ", headerInfo.type || isSmartPhone || (__p += '\n    <ul class="listContentBullets">\n        <!-- Shop Only Info -->\n        ', headerInfo.info.ships_to && (__p += '\n            <li class="_bullet">\n                <label class="_label">Ships to</label>\n                <div class="_value">' + (null == (__t = headerInfo.info.ships_to) ? "" : __t) + "</div>\n            </li>\n        "), __p += "\n        ", headerInfo.info.us_shipping_rates && (__p += '\n            <li class="_bullet">\n                <label class="_label">Shipping Rates</label>\n                <div class="_value">' + (null == (__t = headerInfo.info.us_shipping_rates) ? "" : __t) + " (US)</div>\n            </li>\n        "), __p += "\n\n        <!-- Brand Only Info -->\n        ", headerInfo.info.known_for && (__p += '\n            <li class="_bullet">\n                <label class="_label">Known for</label>\n                <div class="_value">' + (null == (__t = headerInfo.info.known_for) ? "" : __t) + "</div>\n            </li>\n        "), __p += "\n        ", headerInfo.info.designer && (__p += '\n            <li class="_bullet">\n                <label class="_label">Designer</label>\n                <div class="_value">' + (null == (__t = headerInfo.info.designer) ? "" : __t) + "</div>\n            </li>\n        "), __p += "\n        ", headerInfo.formattedUrl && (__p += '\n            <li class="_bullet">\n                <label class="_label">Website</label>\n                <div class="_value">\n                    <a href="' + (null == (__t = headerInfo.redirectUrl) ? "" : __t) + '" class="textLink externalSiteLink" target="_blank">\n                        ' + (null == (__t = headerInfo.formattedUrl) ? "" : __t) + '\n                    </a>\n                    <ul class="listContentSocialActions">\n                        ' + (null == (__t = Templates.ListResultsSocialLinks({
      info: headerInfo.info
    })) ? "" : __t) + "\n                     </ul>\n                </div>\n            </li>\n        "), __p += "\n\n        ", headerInfo.formattedUrl || headerInfo.type || (__p += '\n            <li class="_bullet">\n                <label class="_label">Social Media</label>\n                <div class="_value">\n                    <ul class="listContentSocialActions -alignLeft">\n                        ' + (null == (__t = Templates.ListResultsSocialLinks({
      info: headerInfo.info
    })) ? "" : __t) + "\n                     </ul>\n                </div>\n            </li>\n        "), __p += "\n    </ul>\n    "), __p += "\n\n    ", headerInfo.related && headerInfo.related.length && (__p += '\n        <div class="relatedBrands">\n            <h2 class="_title">', __p += headerInfo.type ? "Searches related" : "Similar", __p += " to " + (null == (__t = headerInfo.label) ? "" : __t) + '</h2>\n            <ul class="_listing">\n                ', _.each(headerInfo.related, function(e) {
      __p += "\n                    ", headerInfo.type && 0 != model.gender.length && e.gender != model.gender && "neutral" !== e.gender || (__p += '\n                    <li class="_item">\n                        <a href="/', model.gender.length > 0 && (__p += (null == (__t = model.gender) ? "" : __t) + "-"), __p += "clothing/", __p += headerInfo.type ? "tag" : "brand", __p += "-" + (null == (__t = e.path) ? "" : __t) + '/" title="' + (null == (__t = e.label) ? "" : __t) + '" class="_itemAction"><span class="_itemImg"  style="background-image: url(' + (null == (__t = e.logopath) ? "" : __t) + ');"></span>' + (null == (__t = e.label) ? "" : __t) + "</a>\n                    </li>\n                    "), __p += "\n                "
    }), __p += "\n            </ul>\n        </div>\n    "), __p += '\n\n    <div class="listContentBox">\n        ', headerInfo.info.logo && headerInfo.redirectUrl ? (__p += '\n            <a href="' + (null == (__t = headerInfo.redirectUrl) ? "" : __t) + '"\n               target="_blank" class="thumbnail listContentImg"\n               style="background-image: url(' + (null == (__t = imgPath) ? "" : __t) + (null == (__t = headerInfo.info.logo) ? "" : __t) + "-", __p += isSmartPhone ? "m" : "l", __p += '.png);">\n                <img src="' + (null == (__t = imgPath) ? "" : __t) + (null == (__t = headerInfo.info.logo) ? "" : __t) + "-", __p += isSmartPhone ? "m" : "l", __p += '.png"\n                     itemprop="', __p += headerInfo ? "logo" : "image", __p += '"\n                     class="clippable" />\n            </a>\n        ') : headerInfo.info.logo && headerInfo.type ? (__p += '\n            <span class="thumbnail tagContentImg listContentImg"\n                  style="background-image: url(' + (null == (__t = imgPath) ? "" : __t) + (null == (__t = headerInfo.info.logo) ? "" : __t) + "-", __p += isSmartPhone ? "s" : "m", __p += '.jpg);">\n                <img src="' + (null == (__t = imgPath) ? "" : __t) + (null == (__t = headerInfo.info.logo) ? "" : __t) + "-", __p += isSmartPhone ? "s" : "m", __p += '.jpg"\n                     itemprop="', __p += headerInfo ? "logo" : "image", __p += '"\n                     class="clippable" />\n            </span>\n        ') : headerInfo.info.logo && (__p += '\n            <span class="thumbnail tagContentImg listContentImg"\n                  style="background-image: url(' + (null == (__t = imgPath) ? "" : __t) + (null == (__t = headerInfo.info.logo) ? "" : __t) + "-", __p += isSmartPhone ? "m" : "l", __p += '.png);">\n                <img src="' + (null == (__t = imgPath) ? "" : __t) + (null == (__t = headerInfo.info.logo) ? "" : __t) + "-", __p += isSmartPhone ? "m" : "l", __p += '.png"\n                     itemprop="', __p += headerInfo ? "logo" : "image", __p += '"\n                     class="clippable" />\n            </span>\n        '), __p += "\n\n    </div>\n");
    return __p
  }, templates.ListResultsList = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<ul class="products ' + (null == (__t = type) ? "" : __t) + "Products ", ("productSimilar" == type || "productSimilarLanding" == type) && (__p += "nestedProducts"), __p += '">\n    ' + (null == (__t = listItemsHTML) ? "" : __t) + "\n</ul>\n", previousPage && (__p += '\n    <a class="pagination previous offStage" href="?cursor=' + (null == (__t = previousPage) ? "" : __t) + '">Previous Page</a>\n'), __p += "\n", nextPage && (__p += '\n    <a class="pagination next offStage" href="?cursor=' + (null == (__t = nextPage) ? "" : __t) + '">Next Page</a>\n'), __p += "\n";
    return __p
  }, templates.ListResultsSocialLinks = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) info.facebook && (__p += '\n    <li class="_item">\n        <a href="' + (null == (__t = info.facebook) ? "" : __t) + '" target="_blank" class="ir icon _action _facebook" title="Visit on Facebook">\n            Facebook\n        </a>\n    </li>\n'), __p += "\n", info.twitter && (__p += '\n    <li class="_item">\n        <a href="' + (null == (__t = info.twitter) ? "" : __t) + '" target="_blank" class="ir icon _action _twitter" title="Visit on Twitter">\n            Twitter\n        </a>\n    </li>\n'), __p += "\n", info.tumblr && (__p += '\n    <li class="_item">\n        <a href="' + (null == (__t = info.tumblr) ? "" : __t) + '" target="_blank" class="ir icon _action _tumblr" title="Visit on Pinterest">\n            Tumblr\n        </a>\n    </li>\n'), __p += "\n", info.pinterest && (__p += '\n    <li class="_item">\n        <a href="' + (null == (__t = info.pinterest) ? "" : __t) + '" target="_blank" class="ir icon _action _pinterest" title="Visit on Pinterest">\n            Pinterest\n        </a>\n    </li>\n'), __p += "\n", info.instagram && (__p += '\n    <li class="_item">\n        <a href="' + (null == (__t = info.instagram) ? "" : __t) + '" target="_blank" class="ir icon _action _instagram" title="Visit on Instagram">\n            Instagram\n        </a>\n    </li>\n'), __p += "\n";
    return __p
  }, templates.MemberList = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="memberListWrap">\n    <h5 class="h3Product h3MemberList">Loved by <a href="/member/' + (null == (__t = members[0].uName) ? "" : __t) + '/collections/" class="textLink">', __p += members[0].uName == app.user.attributes.uName ? "you" : null == (__t = members[0].uName) ? "" : __t, __p += "</a> ", total > 1 && (__p += "and " + (null == (__t = total - 1) ? "" : __t) + " other", total > 2 && (__p += "s")), __p += '</h5>\n    <ul class="memberList clearFix">\n        ', _.each(members, function(e, t) {
      __p += "\n            ", 12 > t && (__p += '\n                <li class="memberListItem">\n                    <a href="/member/' + (null == (__t = e.uName) ? "" : __t) + '/collections/" class="ir memberListItemAction" title="' + (null == (__t = e.uName) ? "" : __t) + '" style="background-image: url(' + (null == (__t = e.image) ? "" : __t) + '), url(/static/css/app/assets/authors/placeholder.png);">\n                       ' + (null == (__t = e.uName) ? "" : __t) + "\n                    </a>\n                </li>\n            "), __p += "\n        "
    }), __p += "\n    </ul>\n</div>\n";
    return __p
  }, templates.MemberProfile = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<section id="memberSets" class="pageBody resultsWrap viewMemberSets">\n    <div class="listResultsHeaderWrapper">\n        ' + (null == (__t = memberHeader) ? "" : __t) + "\n    </div>\n    ", memberSets && memberSets.length && (__p += '\n        <ul class="memberSets ">\n            ', isCurrentUser && (__p += '\n                <li class="memberSetItem createSetItem">\n                    <a href="#" data-createset class="memberSetAction createSetAction hasIcon">Add a Collection</a>\n                </li>\n            '), __p += "\n            ", _.each(memberSets, function(e) {
      __p += '\n                <li id="set-' + (null == (__t = e.id) ? "" : __t) + '" class="memberSetItem ', e.count || (__p += "emptySetItem"), __p += '">\n                    <a href="/member/' + (null == (__t = uName) ? "" : __t) + "/collections/" + (null == (__t = e.link) ? "" : __t) + "/" + (null == (__t = e.id) ? "" : __t) + '/" class="memberSetAction ', 2 == e.id && (__p += "wishlistSetAction"), __p += '" data-setid="' + (null == (__t = e.id) ? "" : __t) + '">' + (null == (__t = e.name) ? "" : __t), 2 == e.id && (__p += '<span class="ir icon giftIcon"></span>'), __p += "</a>\n                    ", e.count > 0 ? (__p += '\n                        <span class="memberSetCount">' + (null == (__t = e.count) ? "" : __t) + " love", e.count > 1 && (__p += "s"), __p += "</span>\n                    ") : (__p += '\n                        <span class="emptySetMessage">\n                            ', __p += isCurrentUser ? "\n                                Add your first love to " + (null == (__t = e.name) ? "" : __t) + "\n                            " : "\n                                No items have been added to " + (null == (__t = e.name) ? "" : __t) + "\n                            ", __p += "\n                        </span>\n                    "), __p += "\n                    ", e.userWant && isCurrentUser && (__p += '\n                        <div class="memberSetActions">\n                            <button class="button buttonAction memberSetButton transparentButton" data-editset="' + (null == (__t = e.id) ? "" : __t) + '">Edit</button>\n                        </div>\n                    '), __p += '\n                    <ul class="memberSetPreviews ', e.images && (__p += "setSize" + (null == (__t = e.images.length) ? "" : __t)), __p += '">\n                        ', _.each(e.images, function(e) {
        __p += '\n                            <li class="memberSetPreview ' + (null == (__t = e.focus) ? "" : __t) + 'Aligned" style="background-image: url(' + (null == (__t = e.url) ? "" : __t) + ')">\n                                <img class="clippable" src="' + (null == (__t = e.url) ? "" : __t) + '">\n                            </li>\n                        '
      }), __p += "\n                    </ul>\n                </li>\n            "
    }), __p += "\n        </ul>\n    "), __p += "\n    ", private && (__p += '\n        <p class="listP listPFull noResultsPrivacy">' + (null == (__t = displayName) ? "" : __t) + "'s sets are currently private.</p>\n    "), __p += "\n\n</section>\n";
    return __p
  }, templates.Message = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) title && (__p += '\n<h4 class="messageTitle">\n    ' + (null == (__t = title) ? "" : __t) + "\n</h4>\n"), __p += '\n<div class="messageBody">\n    ' + (null == (__t = message) ? "" : __t) + '\n</div>\n<a href="#" class="messageAction dontRemindAction" title="Don\'t show again">Got it. Hide tip.</a>\n<a href="#" class="messageAction closeAction" title="Close">&times;</a>\n';
    return __p
  }, templates.MessageCoupon = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="messageBody">\n\n    <a href="', __p += model.coupon_url ? null == (__t = model.coupon_url) ? "" : __t : null == (__t = model.buy_url) ? "" : __t, __p += '"\n       class="messageLinkWrap"\n       title="' + (null == (__t = model.coupons[model.store_names[0]][0].finePrint) ? "" : __t) + '"\n       target="_blank" rel="nofollow">\n            <h4 class="messageTitle">\n                Only <strong>' + (null == (__t = model.coupon_expiry) ? "" : __t) + "</strong> left at " + (null == (__t = model.store_names[0]) ? "" : __t) + '!\n            </h4>\n            <p class="messageBody">\n                ' + (null == (__t = model.coupons[model.store_names[0]][0].description) ? "" : __t) + "\n                ", model.coupons[model.store_names[0]][0].code && (__p += '\n                <button class="button inlineButton transparentButton couponButton">' + (null == (__t = model.coupons[model.store_names[0]][0].code) ? "" : __t) + "</button>\n                "), __p += "\n            </p>\n            ", model.coupons[model.store_names[0]][0].finePrint && (__p += '\n            <p class="messageFooter">\n                ' + (null == (__t = model.coupons[model.store_names[0]][0].finePrint) ? "" : __t) + "\n            </p>\n            "), __p += '\n    </a>\n</div>\n<a href="#" class="messageAction dontRemindAction" title="Don\'t show again">Got it. Hide tip.</a>\n<a href="#" class="messageAction closeAction" title="Close">&times;</a>\n';
    return __p
  }, templates.OnboardContest = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<section id="onboardLanding" class="pageBody onboardContainer topAligned">\n    <div class="onboardWrap">\n        <div class="onboardIncomplete">\n            <h1 class="h1Onboard">My Dream Bag Contest with thecorner.com</h1>\n            \n            <h2 class="h2Onboard">The contest is now closed</h2>\n            \n            <p class="pOnboard">Thanks for entering.  We will be contacting the winner directly.  In the meantime, check out some of our other <a href="/womens-clothing/handbags/">amazing bags</a>.</p>\n            \n        </div>\n        \n        <div class="cornerLogoWrap"><svg version="1.1" width="240px" height="14px" viewBox="0 0 240 14"><g fill="#000"><polygon points="27.11,3.278 21.165,3.278 21.165,0.14 35.998,0.14 35.998,3.278 30.165,3.278 30.165,14 27.11,14 "></polygon><polygon points="54.216,14 51.078,14 51.078,8.473 42.41,8.473 42.41,14 39.384,14 39.384,0.14 42.41,0.14 42.41,5.445 51.078,5.445 51.078,0.14 54.216,0.14 "></polygon><polygon points="57.408,0.14 72.238,0.14 72.238,3.168 60.546,3.168 60.546,5.556 72.238,5.556 72.238,8.583 60.546,8.583 60.546,10.973 72.238,10.973 72.238,14 57.408,14  "></polygon><polygon points="75.339,13.935 75.339,0.079 90.166,0.079 90.166,3.105 78.477,3.105 78.477,10.907 90.166,10.907 90.166,13.935"></polygon><path d="M96.584,3.105v7.72h8.803v-7.72H96.584z M108.412,0.079v13.884H93.557V0.079 H108.412z"></path><polygon points="111.412,0.079 126.245,0.079 126.245,3.105 114.55,3.105 114.55,13.935 111.412,13.935 "></polygon><polygon points="129.518,0.079 144.351,0.079 144.351,13.935 141.325,13.935 141.325,3.105 132.661,3.105 132.661,13.935 129.518,13.935 "></polygon><polygon points="147.987,0.079 162.821,0.079 162.821,3.105 151.128,3.105 151.128,5.493 162.821,5.493 162.821,8.521 151.128,8.521 151.128,10.907 162.821,10.907 162.821,13.935 147.987,13.935 "></polygon><polygon points="166.063,0.079 180.896,0.079 180.896,3.105 169.206,3.105 169.206,13.935 166.063,13.935 "></polygon><rect x="178.048" y="10.832" width="3.025" height="3.056" class="firstRect"></rect><polygon points="184.408,13.86 184.408,0 199.234,0 199.234,3.026 187.542,3.026 187.542,10.832 199.234,10.832 199.234,13.86 "></polygon><path d="M205.654,3.026v7.723h8.803V3.026H205.654z M217.481,0v13.887H202.62V0H217.481 z"></path><polygon points="235.56,0 235.56,13.86 232.534,13.86 232.534,3.026 229.813,3.026 229.813,13.86 226.786,13.86 226.786,3.026 223.866,3.026 223.866,13.86 220.734,13.86 220.734,0  "></polygon><rect x="11.676" y="10.848" fill-rule="evenodd" clip-rule="evenodd" width="3.151" height="3.151" class="secondRect"></rect><polygon points="0,0.141 14.827,0.141 14.827,3.168 3.138,3.168 3.138,14 0,14 "></polygon></g></svg></div>\n                \n        <ul class="onboardFeature">\n            <li class="onboardFeatureImg bottomAligned" style="background-image: url(//cdn.wantering.com/products/images/0/c/3/0c3d36e8-e581-11e3-ae02-062e13789e082.jpg);"></li>\n            <li class="onboardFeatureImg bottomAligned" style="background-image: url(//cdn.wantering.com/products/images/0/c/3/0c3d7cf2-e581-11e3-ae02-062e13789e082.jpg);"></li>\n        </ul>\n    </div>\n</section>\n';
    return __p
  }, templates.PopupChangePassword = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap popupWrapNarrow">\n    <h3 class="h3Popup">Change Your Password</h3>\n    <form class="formPopup" data-container="forgotpassword">\n        <div class="inputPopup">\n            <label for="emailField">Current Password</label>\n            <input class="_field" type="password" name="currentPassword" id="currentPasswordField">\n            <div class="_message">&nbsp;</div>\n        </div>\n        <div class="inputPopup">\n            <label for="emailField">New Password</label>\n            <input data-validate class="_field" type="password" name="password" id="newPasswordField">\n            <div class="_message">&nbsp;</div>\n        </div>\n        <div class="buttonRow buttonRowPopup">\n            <button id="changePassword" type="submit" class="button" disabled>\n                Update Password\n            </button>\n        </div>\n    </form>\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupChromeExtension = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap">\n    <h3 class="h3Popup">Take Wantering Shopping with You</h3>\n    <div class="popupImg chromePopupImg"></div>\n    <p class="pPopup">\n        Adding Wantering to your browser is like having your own personal shopper. It helps you find better matches to your Google searches, and provides you\n        with suggestions when shopping on top online fashion retailer websites ~ more than <i>130 stores</i> supported! <a href="https://chrome.google.com/webstore/detail/ljpenbedoidheeifojpcmgainkbgbjmi" target="_blank" class="textLink">Learn more</a>.\n    </p>\n    <p class="pPopup pButton">\n        <a href="https://chrome.google.com/webstore/detail/ljpenbedoidheeifojpcmgainkbgbjmi" class="button installChromeExtension">Add Wantering</a>\n        <a href="' + (null == (__t = buyLink) ? "" : __t) + '" class="button linkButton closeAction textLink" target="_blank">Skip, go to store &raquo;</a>\n    </p>\n    <hr class="rule" />\n    <p class="pPopup">\n        No, thanks.\n        <a href="' + (null == (__t = buyLink) ? "" : __t) + '" class="dontRemindAction textLink" target="_blank">Don\'t remind me</a>.\n    </p>\n    <a href="' + (null == (__t = buyLink) ? "" : __t) + '" class="closeAction closeX" target="_blank">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupClique = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap clique-popupWrap">\n    <div class="clique-popupTop">\n    \n        <p class="clique-p">We are excited to announce that Wantering has been acquired by Clique Media Group</p>\n        \n        <div class="clique-logos">\n            <a href="http://www.whowhatwear.com/?utm_source=wantering.com&utm_campaign=wantering" class="clique-logo whowhatwear-logo">Fashion & Style</a>\n            <a href="http://www.byrdie.com/?utm_source=wantering.com&utm_campaign=wantering" class="clique-logo byrdie-logo">Beauty</a>\n            <a href="http://http://www.mydomaine.com/?utm_source=wantering.com&utm_campaign=wantering" class="clique-logo mydomaine-logo">Lifestyle</a>\n        </div>\n        \n    </div>\n    <div class="clique-popupBottom">\n        <p class="clique-p"><em class="clique-em">Together we are on a mission</em> to make online shopping dangerously easy. <em class="clique-em">Sign up now to stay in the know</em></p>\n        <form method="POST" action="/login/" class="clique-form">\n            <div class="inputPopup">\n                <input type="email" name="email" data-validate id="emailField" autocorrect="off" autocapitalize="off" autocomplete="off" placeholder="Enter Your Email" />\n                <div class="_message _clique-message">&nbsp;</div>\n                <button type="submit" class="button inlineButton clique-button" id="subscribeNewsletter" disabled>Sign Up</button>\n            </div>\n        </form>\n        \n        <p class="clique-p clique-small-p">\n            By entering your email address, you will be subscribed to Clique Media Group\'s email communications.\n        </p>\n     \n        <p class="clique-p clique-small-p">\n            No, thanks.\n            <a href="#" class="dontRemindAction textLink clique-textlnk" target="_blank">Don\'t remind me</a>.\n        </p>\n    </div>\n    <a href="#" class="closeAction closeX clique-closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupConcierge = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap">\n    <h3 class="h3Popup">Everyone\'s Private Concierge</h3>\n    <div class="popupImg conciergePopupImg"></div>\n    <p class="pPopup">\n        Wantering Concierge lets you shop from 150 of the best boutiques and retailers without worrying about passwords, credit card numbers, junk mail, or hunting for the best deal.\n    </p>\n    <p class="pPopup pButton">\n        <a href="/concierge/" class="button completePopup" target="_blank">Join the Wait List</a>\n    </p>\n    <hr class="rule" />\n    <p class="pPopup">\n        No, thanks.\n        <a href="#" class="dontRemindAction textLink" target="_blank">Don\'t remind me</a>.\n    </p>\n    <a href="#" class="closeAction closeX" target="_blank">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupConfirmAccount = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap">\n    <h3 class="h3Popup">Complete Your Account</h3>\n    <p class="pPopup">\n        Don\'t miss out on incredible deals, style trends, and other important notifications.\n    </p>\n    <p class="pPopup">Confirm Your Email Address</p>\n    <p class="pPopup"><input id="email" name="email" type="email" value="' + (null == (__t = email) ? "" : __t) + '" class="popupField" autocorrect="off" autocapitalize="off" autocomplete="off" /></p>\n    <p class="pPopup pButton"><a href="#" class="button confirmEmail">Continue</a></p>\n</div>\n';
    return __p
  }, templates.PopupEditSet = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="popupWrap popupWrapNarrow">\n    <h3 class="h3Popup">\n        ', __p += set.id ? "\n            Edit Collection\n        " : "\n            Add a Collection\n        ", __p += '\n    </h3>\n    <form action="#" class="beforeConfirm">\n        <div class="inputPopup">\n            <label>Name</label>\n            <input type="text" name="setname" data-editset="' + (null == (__t = set.id) ? "" : __t) + '" value="' + (null == (__t = set.name) ? "" : __t) + '">\n        </div>\n\n        <div class="buttonRow buttonRowPopup">\n        ', __p += set.id ? '\n            <button data-saveset class="button">Save</button>\n        ' : '\n            <button data-newset class="button">Add</button>\n        ', __p += '\n            <a href="#" data-cancel class="linkButton">Cancel</a>\n        </div>\n    </form>\n    ', set.id && (__p += '\n    <hr class="rule beforeConfirm" />\n    <p class="pPopup beforeConfirm">\n        Not loving this anymore? <a href="#" class="textLink" data-confirm="' + (null == (__t = set.id) ? "" : __t) + '">Delete Collection</a>\n    </p>\n    <div class="toConfirm" data-actiongroup="' + (null == (__t = set.id) ? "" : __t) + '">\n        <p class="pPopup">\n            Are you sure? It cannot be undone.\n        </p>\n        <div class="buttonRow buttonRowPopup">\n            <a href="#" class="button" data-deleteset="' + (null == (__t = set.id) ? "" : __t) + '">Yes, delete</a>\n            <a href="#" class="linkButton" data-canceldelete="' + (null == (__t = set.id) ? "" : __t) + '">Cancel</a>\n        </div>\n    </div>\n    '), __p += '\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupEmailSignUp = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap popupWrapNarrow">\n    <h3 class="h3Popup">Sign Up with Email</h3>\n    <form class="formPopup" data-container="signup" autocomplete="off">\n        <input type="hidden" name="next" value="' + (null == (__t = unEncodedReturnPath) ? "" : __t) + '" />\n        <div class="inputPopup">\n            <label for="uNameField">Username</label>\n            <input data-validate class="_field" type="text" name="uName" id="uNameField" autocorrect="off" autocapitalize="off" autocomplete="off" />\n            <div class="_message errorMessageUsername">&nbsp;</div>\n        </div>\n        <div class="inputPopup">\n            <label for="emailField">Email</label>\n            <input data-validate class="_field" type="text" name="email" id="emailField" autocorrect="off" autocapitalize="off" autocomplete="off" />\n            <div class="_message errorMessageEmail">&nbsp;</div>\n        </div>\n        <div class="inputPopup">\n            <label for="passwordField">Password</label>\n            <input data-validate class="_field" type="password" name="password" id="passwordField" autocorrect="off" autocapitalize="off" autocomplete="off" />\n            <div class="_message errorMessagePassword">&nbsp;</div>\n        </div>\n        <p class="pPopup">\n            By creating an account, I accept Wantering\'s\n            <a href="/terms/" target="_blank">Terms of Service</a> and\n            <a href="/privacy/" target="_blank">Privacy Policy</a>.\n        </p>\n        <div class="buttonRow buttonRowPopup">\n            <button id="submitSignup" type="submit" class="button" disabled>\n                Sign Up\n            </button>\n        </div>\n    </form>\n    <hr class="rule" />\n    <p class="pPopup">\n        Already have an account?\n        <a data-popup="login" href="/login/" class="loginAction textLink">Login</a>\n    </p>\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupForgotPassword = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap popupWrapNarrow">\n    <h3 class="h3Popup">Forgot Your Password?</h3>\n    <p class="pPopup">\n        Don\'t worry! Enter the email address you signed up with,\n        and we\'ll send you a link to reset your password.\n    </p>\n    <form class="formPopup" data-container="forgotpassword">\n        <div class="inputPopup">\n            <label for="emailField">Email</label>\n            <input data-validate class="_field" type="text" name="email" id="emailField" autocorrect="off" autocapitalize="off" autocomplete="off" />\n            <div class="_message">&nbsp;</div>\n        </div>\n        <div class="buttonRow buttonRowPopup">\n            <button id="sendForgottenPassword" type="submit" class="button" disabled>\n                Send Link\n            </button>\n        </div>\n    </form>\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupGeneratingTrendingFeed = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap trendingFeedGenerating">\n    <h1 class="h2Block">' + (null == (__t = title) ? "" : __t) + '</em></h1>\n    <p class="pBlock beforeLoaded">We\'re gathering some of the latest trends for you to browse.</p>\n    <p class="pBlock afterLoaded">The latest trends are ready to go.</p>\n    <ul class="recoCounter">\n        <li class="ir icon counter">1</li>\n        <li class="ir icon counter">2</li>\n        <li class="ir icon counter">3</li>\n        <li class="ir icon counter">4</li>\n        <li class="ir icon counter">5</li>\n    </ul>\n    <div class="recoButtonRow afterLoaded">\n        <a href="#" class="button startButton">Start Shopping</a>\n    </div>\n</div>\n';
    return __p
  }, templates.PopupGifButton = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap">\n    <h3 class="h3Popup">Wanna make an InstaGIF of your favorite fashion items? </h3>\n    <p class="pPopup">\n        We\'ve got a button for that. Look for the GIF button on every item.\n    </p>\n    <div class="popupImg gifPopupImg"></div>\n    <p class="pPopup pButton">\n        <a href="#" class="button makeGifAction">Make an InstaGIF</a>\n    </p>\n    <hr class="rule" />\n    <p class="pPopup">\n        No, thanks.\n        <a href="#" class="dontRemindAction textLink" target="_blank">Don\'t remind me</a>.\n    </p>\n    <a href="#" class="closeAction closeX" target="_blank">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupHeartItBackInStock = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap">\n    <h3 class="h3Popup">Want to know when it\'s back in stock?</h3>\n    <p class="pPopup">\n        <span class="ir icon hearted">heart</span> it, add it to a collection, and we\'ll notify you when it does.\n    </p>\n    <p class="pPopup pButton">\n        <a href="#" class="button heartItButton">Add to Collection</a>\n        <a href="#" class="button linkButton closeAction textLink">No, thanks</a>\n    </p>\n    <hr class="rule" />\n    <p class="pPopup">\n        Got it, thanks.\n        <a href="#" class="dontRemindAction textLink">Don\'t remind me</a>.\n    </p>\n</div>\n';
    return __p
  }, templates.PopupHeartItGoesOnSale = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap">\n    <h3 class="h3Popup">Want to know when it goes on sale?</h3>\n    <p class="pPopup">\n        If you <span class="ir icon hearted">heart</span> an item and add it to a collection, we\'ll notify you when it does.\n    </p>\n    <p class="pPopup pButton">\n        <a href="#" class="button heartItButton">Add to Collection</a>\n        <a href="#" class="button linkButton closeAction textLink">No, thanks</a>\n    </p>\n    <hr class="rule" />\n    <p class="pPopup">\n        Got it, thanks.\n        <a href="#" class="dontRemindAction textLink">Don\'t remind me</a>.\n    </p>\n</div>\n';
    return __p
  }, templates.PopupLogin = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap popupWrapNarrow">\n    <h3 class="h3Popup">Login to Wantering</h3>\n    <p class="pPopup">Login with your favorite social network or enter your username and password.</p>\n    <p class="pPopup pButton">\n        <a href="/login/facebook/?next=' + (null == (__t = returnPath) ? "" : __t) + '" class="button buttonWithIcon facebookButton">\n        Login with Facebook\n        </a>\n    </p>\n    <p class="pPopup pButton">\n        <a href="/login/twitter/?next=' + (null == (__t = returnPath) ? "" : __t) + '" class="button buttonWithIcon twitterButton">\n            Login with Twitter\n        </a>\n    </p>\n    <p class="pPopup pButton">\n        <a href="/login/tumblr/?next=' + (null == (__t = returnPath) ? "" : __t) + '" class="button buttonWithIcon tumblrButton">\n            Login with Tumblr\n        </a>\n    </p>\n    <hr class="rule" />\n\n    <form method="POST" action="/login/">\n        <input type="hidden" name="next" value="' + (null == (__t = unEncodedReturnPath) ? "" : __t) + '" />\n        <div class="inputPopup">\n            <label for="uNameField">Username or Email</label>\n            <input type="text" name="username" id="uNameField" autocorrect="off" autocapitalize="off" autocomplete="off" />\n            <div class="_message"></div>\n        </div>\n        <div class="inputPopup">\n            <label for="passwordField">Password</label>\n            <input type="password" name="password" id="passwordField" autocorrect="off" autocapitalize="off" autocomplete="off" />\n            <div class="_message">&nbsp;</div>\n        </div>\n        <div class="buttonRow buttonRowPopup">\n            <button type="submit" class="button">Login</button>\n            <a data-popup="forgotPassword" href="/member/forgot/password/" class="linkButton">Forgot password?</a>\n        </div>\n    </form>\n\n    <hr class="rule" />\n    <p class="pPopup">\n        New to Wantering?\n        <a data-popup="SignUp" href="/signup/" class="signUpAction textLink">Sign Up</a>\n    </p>\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupMessage = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap popupWrapNarrow">\n    <h3 class="h3Popup">' + (null == (__t = title) ? "" : __t) + '</h3>\n    <p class="pPopup">\n        ' + (null == (__t = message) ? "" : __t) + '\n    </p>\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupNewsletter = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap">\n    <h3 class="h3Popup">Don\'t Miss Out!</h3>\n    <p class="pPopup">Stay on trend with our top style advice and editor\'s picks.</p>\n   \n     <form method="POST" action="/login/">\n        <div class="inputPopup">\n            <label for="email">&nbsp;</label>\n            <input type="email" name="email" data-validate id="emailField" autocorrect="off" autocapitalize="off" autocomplete="off" placeholder="Enter your email" />\n            <div class="_message">&nbsp;</div>\n        </div>\n        <div class="buttonRow buttonRowPopup">\n            <button type="submit" class="button" id="subscribeNewsletter" disabled>Yes, Please</button>\n        </div>\n    </form>\n    <hr class="rule" />\n    <p class="pPopup">\n        No, thanks.\n        <a href="#" class="dontRemindAction textLink" target="_blank">Don\'t remind me</a>.\n    </p>\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupNotLoggedIn = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap popupWrapNarrow">\n    <h3 class="h3Popup">\n        Want to know when it goes on sale?\n    </h3>\n    <p class="pPopup">\n        Login to <span class="ir icon hearted">heart</span> this item and get notified when it does.\n    </p>\n    <p class="pPopup pButton">\n        <a href="/login/facebook/?next=' + (null == (__t = returnPath) ? "" : __t) + '" class="button buttonWithIcon facebookButton">\n            Login with Facebook\n        </a>\n    </p>\n    <p class="pPopup pButton">\n        <a href="/login/twitter/?next=' + (null == (__t = returnPath) ? "" : __t) + '" class="button buttonWithIcon twitterButton">\n            Login with Twitter\n        </a>\n    </p>\n    <p class="pPopup pButton">\n        <a href="/login/tumblr/?next=' + (null == (__t = returnPath) ? "" : __t) + '" class="button buttonWithIcon tumblrButton">\n            Login with Tumblr\n        </a>\n    </p>\n    <hr class="rule" />\n\n    <form method="POST" action="/login/">\n        <div class="inputPopup">\n            <label for="uNameField">Username or Email</label>\n            <input type="text" name="username" id="uNameField" autocorrect="off" autocapitalize="off" autocomplete="off" />\n            <div class="_message">&nbsp;</div>\n        </div>\n        <div class="inputPopup">\n            <label for="passwordField">Password</label>\n            <input type="password" name="password" id="passwordField" autocorrect="off" autocapitalize="off" autocomplete="off" />\n            <div class="_message">&nbsp;</div>\n        </div>\n        <div class="buttonRow buttonRowPopup">\n            <button type="submit" class="button">Login</button>\n            <a data-popup="forgotPassword" href="/member/forgot/password/" class="linkButton">Forgot password?</a>\n        </div>\n    </form>\n\n    <hr class="rule" />\n    <p class="pPopup">\n        New to Wantering?\n        <a href="/login/" class="signUpAction textLink">Sign Up</a>\n    </p>\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupNotLoggedInOmg = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap popupWrapNarrow">\n    <h3 class="h3Popup">Find something amazing?</h3>\n    <p class="pPopup">Sign up to send messages to your closest friends.</p>\n    <p class="pPopup pButton">\n        <a href="/login/facebook/?next=' + (null == (__t = returnPath) ? "" : __t) + '" class="button buttonWithIcon facebookButton">\n            Sign up with Facebook\n        </a>\n    </p>\n    <p class="pPopup pButton">\n        <a href="/login/twitter/?next=' + (null == (__t = returnPath) ? "" : __t) + '" class="button buttonWithIcon twitterButton">\n            Sign up with Twitter\n        </a>\n    </p>\n    <p class="pPopup pButton">\n        <a href="/login/tumblr/?next=' + (null == (__t = returnPath) ? "" : __t) + '" class="button buttonWithIcon tumblrButton">\n            Sign up with Tumblr\n        </a>\n    </p>\n    <hr class="rule" />\n\n    <form method="POST" action="/login/">\n        <div class="inputPopup">\n            <label for="uNameField">Username or Email</label>\n            <input type="text" name="username" id="uNameField" autocorrect="off" autocapitalize="off" autocomplete="off" />\n            <div class="_message">&nbsp;</div>\n        </div>\n        <div class="inputPopup">\n            <label for="passwordField">Password</label>\n            <input type="password" name="password" id="passwordField" autocorrect="off" autocapitalize="off" autocomplete="off" />\n            <div class="_message">&nbsp;</div>\n        </div>\n        <div class="buttonRow buttonRowPopup">\n            <button type="submit" class="button">Login</button>\n            <a data-popup="forgotPassword" href="/member/forgot/password/" class="linkButton">Forgot password?</a>\n        </div>\n    </form>\n\n    <hr class="rule" />\n    <p class="pPopup">\n        Already a member?\n        <a href="/login/facebook/" class="loginAction textLink">Login</a>\n    </p>\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupRemoveSet = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap popupWrapNarrow">\n    <h3 class="h3Popup">Remove from Collection</h3>\n    <p class="pPopup">\n        Remove the <i>' + (null == (__t = product.title) ? "" : __t) + "</i> from " + (null == (__t = set.name) ? "" : __t) + '?\n    </p>\n    <form action="#">\n        <div class="buttonRow buttonRowPopup">\n            <button data-removefromset="' + (null == (__t = set.id) ? "" : __t) + '" class="button">Remove</button>\n            <a href="#" data-cancel class="linkButton">Cancel</a>\n        </div>\n    <form>\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupResetPassword = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap popupWrapNarrow">\n    <h3 class="h3Popup">Reset Your Password</h3>\n    <p class="pPopup">\n        Enter your new password.\n    </p>\n    <form class="formPopup" data-container="forgotpassword">\n        <div class="inputPopup">\n            <label for="emailField">New Password</label>\n            <input data-validate class="_field" type="password" name="password" id="passwordField" autocorrect="off" autocapitalize="off" autocomplete="off" />\n            <div class="_message">&nbsp;</div>\n        </div>\n        <div class="buttonRow buttonRowPopup">\n            <button id="resetPassword" type="submit" class="button" disabled>\n                Reset Password\n            </button>\n        </div>\n    </form>\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupSearch = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap">\n    <h3 class="h3Popup">Obsessed with Pinterest?</h3>\n    <p class="pPopup">\n        Use Wantering\'s fashion search engine to shop for your new wardrobe. Discover the best new products, brands and stores.\n    </p>\n    <div class="popupImg searchPopupImg"></div>\n    <p class="pPopup pButton">\n        <a href="#" class="button trySearchAction">Try a Search</a>\n    </p>\n    <hr class="rule" />\n    <p class="pPopup">\n        No, thanks.\n        <a href="#" class="dontRemindAction textLink" target="_blank">Don\'t remind me</a>.\n    </p>\n    <a href="#" class="closeAction closeX" target="_blank">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupSets = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="popupWrap popupWrapNarrow">\n    <h3 class="h3Popup">Save your love to...</h3>\n    <div class="selectedSetWrapper">\n        <div class="inputPopup selectedSetItem hasMenuArrow ', currentSet.id || (__p += "placeholder"), __p += '" data-selectedset="' + (null == (__t = currentSet.id) ? "" : __t) + '" data-toggle=".memberSetsDropDown">\n            ' + (null == (__t = currentSet.name) ? "" : __t) + '\n        </div>\n        <div class="memberSetsDropDown menu setsMenu">\n            <form action="#" class="menuForm">\n                <input class="inlineInput" type="text" name="setname" placeholder="Add New Collection">\n                <button data-createset class="button inlineButton">Add</button>\n            </form>\n            <div class="menuSetsWrap">\n                <ul data-sets class="standardSets">\n                    ', _.each(sets, function(e) {
      __p += '\n                        <li class="menuItem ', currentSet && currentSet.id == e.id && (__p += " selected"), __p += '">\n                            <a href="#" data-set="' + (null == (__t = e.id) ? "" : __t) + '" class="menuAction setMenuAction wishlistAction hasIcon">' + (null == (__t = e.name) ? "" : __t) + "</a>\n                        </li>\n                    "
    }), __p += "\n                </ul>\n\n                ", userSets.length && (__p += '\n                    <ul data-sets class="userSets">\n                        ', _.each(userSets, function(e) {
      __p += '\n                            <li class="menuItem ', currentSet && currentSet.id == e.id && (__p += " selected"), __p += '">\n                                <a href="#" data-set="' + (null == (__t = e.id) ? "" : __t) + '" class="menuAction setMenuAction">' + (null == (__t = e.name) ? "" : __t) + "</a>\n                            </li>\n                        "
    }), __p += "\n                    </ul>\n                "), __p += '\n            </div>\n        </div>\n    </div>\n\n    <div data-sets class="buttonRow buttonRowPopup">\n        <button data-save class="button">Save</button>\n        <a href="#" data-cancel class="linkButton">Cancel</a>\n    </div>\n\n\n    ', "unwant" === type && (__p += '\n    <hr class="rule" />\n    <p class="pPopup">\n        Not your style?\n        <a href="#" data-remove="loves" class="textLink">Remove it from your collections.</a>\n    </p>\n    '), __p += '\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupSignUp = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap popupWrapNarrow">\n    <h3 class="h3Popup">Get Started on Wantering</h3>\n    <p class="pPopup">\n        Discover a better way to shop. Join Wantering to save your favorite items and get notified when they go on sale.\n    </p>\n    <p class="pPopup pButton">\n        <a href="/login/facebook/?next=' + (null == (__t = returnPath) ? "" : __t) + '" class="button buttonWithIcon facebookButton">Sign up with Facebook</a>\n    </p>\n    <p class="pPopup pButton">\n        <a href="/login/twitter/?next=' + (null == (__t = returnPath) ? "" : __t) + '" class="button buttonWithIcon twitterButton">Sign up with Twitter</a>\n    </p>\n    <p class="pPopup pButton">\n        <a href="/login/tumblr/?next=' + (null == (__t = returnPath) ? "" : __t) + '" class="button buttonWithIcon tumblrButton">Sign up with Tumblr</a>\n    </p>\n    <p class="pPopup pButton">\n        <a data-popup="emailSignUp" href="/signup/" class="button buttonWithIcon emailButton">Sign up with Email</a>\n    </p>\n\n    <p class="pPopup">\n        By creating an account, I accept Wantering\'s <a href="/terms/" target="_blank">Terms of Service</a> and <a href="/privacy/" target="_blank">Privacy Policy</a>.\n    </p>\n    <p class="pPopup">\n        Already have an account?\n        <a data-popup="login" href="/login/" class="loginAction textLink">Login</a>\n    </p>\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\n';
    return __p
  }, templates.PopupWelcomeStyledOn = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="popupWrap">\n    <h3 class="h3Popup">A message for the StyledOn Community</h3>\n    <p class="pPopup">\n        We\'re excited to welcome you to Wantering! Together with StyledOn, we continue to grow our\n        thriving fashion community as we build an unparalleled shopping and fashion discovery\n        experience through our fashion search engine and engaging shoppable editorial.\n    </p>\n    <p class="pPopup">We are excited to have you join us.</p>\n    <p class="pPopup">\n        We are offering StyledOn members early access to join the Wantering Insider\n        Network (WIN), an exclusive blogger program with major perks.\n    </p>\n    <p class="pPopup pButton">\n        <a href="http://insiders.wantering.com/?so=true" class="button" target="_blank">\n            Join WIN\n        </a>\n    </p>\n    <hr class="rule" />\n    <p class="pPopup">\n        New to Wantering?\n        <a href="/login/" class="signUpAction textLink">Sign Up Now</a>\n    </p>\n    <a href="#" class="closeAction closeX">&times;</a>\n</div>\'\n';
    return __p
  }, templates.PopupWishList = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="popupWrap">\n    <h3 class="h3Popup">Get Started with Collections</h3>\n    <div class="popupImg wishlistPopupImg"></div>\n    <p class="pPopup">\n        Heart your must-have items from your favorite brands and stores to add them to your Wish List, or start a new Collection to save and share your sytle inspiration.\n    </p>\n    <p class="pPopup pButton">\n        <a href="', __p += isAuthenticated ? "/trending/" + (null == (__t = gender) ? "" : __t) + "/" : "/signup/", __p += '" class="button" ', __p += isAuthenticated ? 'data-retention="complete"' : 'data-popup="signUp"', __p += '>Start Hearting</a>\n        <a href="', __p += isAuthenticated ? "/member/" + (null == (__t = username) ? "" : __t) + "/loves/" : "/signup/", __p += '" class="button linkButton textLink" ', __p += isAuthenticated ? 'data-retention="complete"' : 'data-popup="signUp"', __p += '>Sort my loves &raquo;</a>\n    </p>\n    <hr class="rule" />\n    <p class="pPopup">\n        Got it, thanks.\n        <a href="#" class="dontRemindAction textLink" target="_blank">Don\'t remind me</a>.\n    </p>\n    <a href="#" class="closeAction closeX" target="_blank">&times;</a>\n</div>\n';
    return __p
  }, templates.ProductCategoryItem = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<li class="linkListItem productCategoryItem" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">\n    <a href="/', genderString && (__p += (null == (__t = genderString) ? "" : __t) + "-"), __p += "clothing/cat-" + (null == (__t = link) ? "" : __t) + '/" class="linkListAction productCategoryAction" itemprop="url">\n        <span itemprop="title">' + (null == (__t = label) ? "" : __t) + "</span>\n    </a>\n</li>\n";
    return __p
  }, templates.ProductDashboard = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="dashboard" data-container>\n    <div class="tagger" data-product></div>\n</div>\n';
    return __p
  }, templates.ProductDetail = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj)
    "inPlace" != obj.type && (__p += '<section id="productDetail" class="pageBody ' + (null == (__t = obj.viewClasses) ? "" : __t) + '">'), __p += '\n    <div class="productDetailWrap inPlaceSwitch">\n        <div class="product detailProduct" itemscope itemtype="http://schema.org/Product">\n            ', obj.categoryHTML && (__p += '<ul class="productCategories">' + (null == (__t = categoryHTML) ? "" : __t) + "</ul>"), __p += '\n            <div class="titleWrap">\n                <h1 class="productName" itemprop="name">' + (null == (__t = model.title) ? "" : __t) + "</h1>\n                ", obj.model.brand_name ? (__p += '\n                    <h2 class="productDetails productSubTitle">\n                        Made by\n                        <a href="/', model.genderString && (__p += (null == (__t = model.genderString) ? "" : __t) + "-"), __p += "clothing/brand-" + (null == (__t = model.linkBrand) ? "" : __t) + '/"\n                           itemprop="brand"\n                           class="textLink productStore"\n                           title="View more items from ' + (null == (__t = model.brand_name) ? "" : __t) + '.">\n                            ' + (null == (__t = model.brand_name) ? "" : __t) + "\n                        </a>\n                    </h2>\n                ") : obj.model.store_names && (__p += '\n                    <h2 class="productDetails productSubTitle">\n                        From\n                        <a href="/', model.genderString && (__p += (null == (__t = model.genderString) ? "" : __t) + "-"), __p += "clothing/store-" + (null == (__t = model.linkStore) ? "" : __t) + '/"\n                           class="textLink productStore" title="View more items from ' + (null == (__t = model.store_names[0]) ? "" : __t) + '.">\n                            ' + (null == (__t = model.store_names[0]) ? "" : __t) + "\n                        </a>\n                    </h2>\n                "), __p += '\n            </div>\n            <ul class="priceWrap">\n                ', obj.model.buy_url && (__p += '\n                    <li class="buttonWrap">\n                        <a href="' + (null == (__t = model.buy_url) ? "" : __t) + '"\n                           ', isSmartPhone || 0 == model.buy_url.indexOf("/buy/") || (__p += ' target="_blank" '), __p += '\n                           data-coupon="', obj.model.store_names[0] && obj.model.coupons && obj.model.coupons[obj.model.store_names[0]] && obj.model.coupons[obj.model.store_names[0]] && (__p += null == (__t = obj.model.coupons[obj.model.store_names[0]][0].code) ? "" : __t), __p += '"\n                           rel="nofollow"\n                           id="primaryBuyButton"\n                           class="button buyButton primaryButton ', 0 == model.in_stock && (__p += "isOutofStock"), __p += '" data-noscroll>\n                            ', __p += 0 == model.in_stock ? "Out of Stock" : "Buy Now", __p += "\n                        </a>\n                        ", obj.model.store_names && (__p += '\n                            <span class="buttonMicroCopy">\n                                from\n                                <a href="/', model.genderString && (__p += (null == (__t = model.genderString) ? "" : __t) + "-"), __p += "clothing/store-" + (null == (__t = model.linkStore) ? "" : __t) + '/" class="buttonMicroLink">\n                                    ' + (null == (__t = model.store_names[0]) ? "" : __t) + "\n                                </a>\n                            </span>\n                        "), __p += "\n                    </li>\n                "), __p += "\n                ", obj.model.price && (__p += '\n                    <li class="price', obj.model.sale_price && (__p += " onSale"), __p += '" itemprop="offers" itemscope itemtype="http://schema.org/Offer">\n                        <meta itemprop="availability" content="', __p += 0 == model.in_stock ? "OutOfStock" : "InStock", __p += '" />\n                        <meta itemprop="priceCurrency" content="USD" />\n                        <span class="regPrice" ', obj.model.sale_price || (__p += 'itemprop="price"'), __p += ">\n                            ", obj.model.sale_price && (__p += "was "), __p += "\n                            " + (null == (__t = obj.model.currencySymbol) ? "" : __t) + (null == (__t = obj.model.price) ? "" : __t) + "\n                        </span>\n                        ", obj.model.sale_price && (__p += '\n                            <span class="salePrice" itemprop="price">\n                                ' + (null == (__t = obj.model.currencySymbol) ? "" : __t) + (null == (__t = obj.model.sale_price) ? "" : __t) + "\n                            </span>\n                        "), __p += "\n                    </li>\n                "), __p += '\n            </ul>\n            <div class="thumbnailWrap ', obj.galleryHTML && (__p += " hasGallery"), __p += '">\n                <div class="mainImgWrap">\n                    ', model.images[0].small && model.images[0].medium && model.images[0].large && (__p += '\n                    <img src="' + (null == (__t = model.wanteringImageRootURL) ? "" : __t), __p += 1 == isSmartPhone ? null == (__t = model.images[0].small.url) ? "" : __t : null == (__t = model.images[0].medium.url) ? "" : __t, __p += '"\n                         alt="', obj.model.brand_name && model.title.toLowerCase().indexOf(model.brand_name.toLowerCase()) < 0 && (__p += null == (__t = model.brand_name) ? "" : __t), __p += " " + (null == (__t = model.title) ? "" : __t) + '"\n                         id="primaryTemplateImg"\n                         class="mainImg"\n                         itemprop="image"\n                         style="max-width:', __p += 1 == isSmartPhone ? null == (__t = model.images[0].medium.width) ? "" : __t : null == (__t = model.images[0].large.width) ? "" : __t, __p += 'px;" />\n                    '), __p += '\n                    <ul class="productActions">\n                        ', "facebook" == obj.userProvider && (__p += '\n                            <li class="productAction buttonActionItem recommendActionItem">\n                                <a href="#" class="action buttonAction recommendAction" title="Who would this look great on?">Send</a>\n                            </li>\n                        '), __p += "\n                        ", obj.galleryHTML && (__p += '<li class="productAction buttonActionItem gifActionItem">\n                            <a href="#" class="action buttonAction gifButtonAction" title="Animated GIF">GIF</a>\n                        </li>'), __p += '\n                        <li class="productAction shareActionItem">\n                            <a href="#" class="ir icon action shareItemAction" title="Share">Share it!</a>\n                            ' + (null == (__t = obj.shareHTML) ? "" : __t) + '\n                        </li>\n                        <li class="productAction wantActionItem">\n                            <a href="#" data-id="' + (null == (__t = model.short_key) ? "" : __t) + '" data-action="love" class="ir icon action wantAction ', 1 == model.product_wanted && (__p += "wanted"), __p += '" title="Love">\n                                Love it!\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                ', obj.galleryHTML && (__p += '<ul class="thumbnailGallery">' + (null == (__t = obj.galleryHTML) ? "" : __t) + "</ul>"), __p += '\n            </div>\n            <div class="productDetails productDescription" itemprop="description">\n                ', obj.model.description && (__p += null == (__t = obj.model.description) ? "" : __t), __p += "\n                ", obj.summary && (__p += "<p>" + (null == (__t = obj.summary) ? "" : __t) + "</p>"), __p += "\n            </div>\n            ", obj.model.buy_url && (__p += '\n                <div class="secondaryBuyWrap">\n                    <a href="' + (null == (__t = model.buy_url) ? "" : __t) + '"\n                       target="_blank" rel="nofollow"\n                       class="button buyButton secondaryBuyButton primaryButton"\n                       ', isSmartPhone || 0 == model.buy_url.indexOf("/buy/") || (__p += 'target="_blank"'), __p += " data-noscroll>\n                        ", __p += 0 == model.in_stock ? "\n                            Out of Stock\n                        " : "\n                            Buy Now\n                        ", __p += "\n                    </a>\n                </div>\n            "), __p += '\n        </div>\n    </div>\n    <div id="productMetaInfo"></div>\n    ', obj.tagHTML && (__p += null == (__t = obj.tagHTML) ? "" : __t), __p += "\n    ", "inPlace" != obj.type && (__p += '\n        <div id="similarList" class="subContent">\n            <h2 class="h2Nested">Similar to the ' + (null == (__t = model.title) ? "" : __t) + "</h2>\n            " + (null == (__t = obj.similarList) ? "" : __t) + '\n            <a href="/', model.genderString && (__p += (null == (__t = model.genderString) ? "" : __t) + "-"), __p += "clothing-similar/" + (null == (__t = model.link_title) ? "" : __t) + "/" + (null == (__t = model.short_key) ? "" : __t) + '/"\n               class="button similarFooterAction transparentButton"\n               title="Similar to ' + (null == (__t = model.title) ? "" : __t) + '">\n                More similar items\n            </a>\n        </div>\n    '), __p += "\n", "inPlace" != obj.type && (__p += "</section>"), __p += "\n";
    return __p
  }, templates.ProductGalleryItem = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<li class="thumbnailItem', 0 == i && (__p += " selected"), __p += '">\n    <a href="#"\n       class="thumbnailAction"\n       style="background-image: url(' + (null == (__t = smUrl) ? "" : __t) + ');"\n       data-lrg-image="', __p += 1 == isSmartPhone ? null == (__t = medUrl) ? "" : __t : null == (__t = lgUrl) ? "" : __t, __p += '">\n        ' + (null == (__t = i) ? "" : __t) + "\n    </a>\n</li>\n";
    return __p
  }, templates.ProductGifFullWrap = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="fullGifWrap"><img src="' + (null == (__t = url) ? "" : __t) + '" class="gifImage" /></div>\n';
    return __p
  }, templates.ProductGifImg = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<li class="gifClone" style="background-image: url(' + (null == (__t = url) ? "" : __t) + ');">' + (null == (__t = i) ? "" : __t) + "</li>\n";
    return __p
  }, templates.ProductGifWrap = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="gifWrap delay">\n    <ul class="gifList">' + (null == (__t = images) ? "" : __t) + '</ul>\n    <div class="gifContainer">\n        <div class="gifContainerWrap">\n            <div class="wave">\n                <div class="rect1"></div>\n                <div class="rect2"></div>\n                <div class="rect3"></div>\n                <div class="rect4"></div>\n                <div class="rect5"></div>\n            </div>\n        </div>\n        <a href="#" class="closeAction" title="Close">&times;</a>\n    </div>\n</div>\n';
    return __p
  }, templates.ProductLargeImg = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<img src="' + (null == (__t = obj.url) ? "" : __t) + '" title="' + (null == (__t = obj.title) ? "" : __t) + '" class="outOfSight" />\n';
    return __p
  }, templates.ProductScorecard = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="scoreCard">\n    <div class="scores">\n        <div title="' + (null == (__t = obj.model.scoreCard.mentions) ? "" : __t) + ' Mentions" class="scoreBlock socialMentions"><label class="scoreLabel">Mentions</label><span class="scoreCount">' + (null == (__t = obj.model.scoreCard.mentions) ? "" : __t) + '</span></div>\n        <div title="' + (null == (__t = obj.model.scoreCard.hotness) ? "" : __t) + ' out of 10" class="scoreBlock socialHotness"><label class="scoreLabel">Hotness</label><span class="scoreCount">' + (null == (__t = obj.model.scoreCard.hotness) ? "" : __t) + "</span></div>\n    </div>\n    ", obj.model.featureArticle && "listProduct" === obj.location && (__p += '\n        <h6 class="h6Social">Featured by ' + (null == (__t = obj.model.featureArticle.name) ? "" : __t) + ' in</h6>\n        <div class="blogItem">\n            <a href="' + (null == (__t = obj.model.featureArticle.permalink) ? "" : __t) + '?utm_source=wantering" class="blogItemAction" rel="nofollow" title="Mentioned in: ' + (null == (__t = obj.model.featureArticle.title) ? "" : __t) + '" ', isSmartPhone || (__p += 'target="_blank"'), __p += ">\n                " + (null == (__t = obj.model.featureArticle.title) ? "" : __t) + "\n            </a>\n            ", obj.model.featureArticle.imgURL && (__p += '\n                <div class="blogImg centerAligned" style="background-image: url(' + (null == (__t = obj.model.featureArticle.imgURL) ? "" : __t) + ');"></div>\n            '), __p += '\n            <ul class="blogItemDetails">\n                <li class="blogItemTitle">\n                    ' + (null == (__t = obj.model.featureArticle.title) ? "" : __t) + "\n                </li>\n            </ul>\n        </div>\n    "), __p += "\n</div>\n";
    return __p
  }, templates.ProductTagItem = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<li class="linkListItem productTagItem">\n    <a href="/', genderString && (__p += (null == (__t = genderString) ? "" : __t) + "-"), __p += "clothing/cat-" + (null == (__t = tagCategoryLink) ? "" : __t) + "/tag-" + (null == (__t = link) ? "" : __t) + '/"\n       class="linkListAction productTagAction">\n        ' + (null == (__t = label) ? "" : __t) + "\n    </a>\n</li>\n";
    return __p
  }, templates.ProductTags = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="tagWrap inPlaceSwitch">\n    <h3 class="h3Product">More ' + (null == (__t = tagCategoryLabel) ? "" : __t) + ' tagged</h3>\n    <ul class="productTags">' + (null == (__t = tagHTML) ? "" : __t) + "</ul>\n</div>\n";
    return __p
  }, templates.ProductTimeline = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="timelineWrap">\n    ' + (null == (__t = scoreCard) ? "" : __t) + '\n    <ul class="productTimeline">\n        ', _.each(timelineData, function(e, t) {
      __p += '\n            <li class="timelinePeriodItem">\n                <h4 class="h4Timeline">' + (null == (__t = t) ? "" : __t) + '</h4>\n    \n                <ul class="timelinePeriod">\n                ', _.each(e, function(e) {
        __p += " ", e && (__p += '\n                    <li class="timelineItem ' + (null == (__t = e.event) ? "" : __t) + 'TimelineItem">\n                    \n                        ', __p += "\n                        ", __p += "\n                        \n                        ", "twitter" === e.event || "retweetGroup" === e.event ? (__p += "\n                        \n                            ", e.isRetweet ? (__p += '\n                                Retweeted by <a href="https://twitter.com/' + (null == (__t = e.data.screenName) ? "" : __t) + "/", "00" != e.data.id.toString().slice(-2) && (__p += "status/" + (null == (__t = e.data.id) ? "" : __t)), __p += '" class="textLink" rel="nofollow" target="_blank">@' + (null == (__t = e.data.screenName) ? "" : __t) + "</a>\n                                ", "retweetGroup" === e.event && (__p += "\n                                and " + (null == (__t = e.retweetCount - 1) ? "" : __t) + " other", e.retweetCount > 2 && (__p += "s"), __p += "\n                                "), __p += "\n                            ") : (__p += "\n                                " + (null == (__t = e.data.text) ? "" : __t) + '\n                                by <a href="https://twitter.com/' + (null == (__t = e.data.screenName) ? "" : __t) + "/", "00" != e.data.id.toString().slice(-2) && (__p += "status/" + (null == (__t = e.data.id) ? "" : __t)), __p += '" class="textLink" rel="nofollow" target="_blank">@' + (null == (__t = e.data.screenName) ? "" : __t) + "</a>\n                            "), __p += '\n                            \n                            <ul class="timelineUserList">\n                            ', _.each(e.userDataCollection, function(t) {
          __p += '\n                                <li class="timelineUserListItem">\n                                    <a href="https://twitter.com/' + (null == (__t = t.screenName) ? "" : __t) + "/", "00" != e.data.id.toString().slice(-2) && (__p += "status/" + (null == (__t = t.id) ? "" : __t)), __p += '" title="' + (null == (__t = t.screenName) ? "" : __t) + '" class="ir timelineUserListAction" style="background-image: url(' + (null == (__t = t.profileImageUrl) ? "" : __t) + '), url(/static/css/app/assets/authors/placeholder-s.png);" rel="nofollow" target="_blank">@' + (null == (__t = t.screenName) ? "" : __t) + "</a>\n                                </li>\n                            "
        }), __p += "\n                            </ul>\n                          \n                          \n                        ", __p += "\n                        \n                        ") : "wantering" === e.event ? (__p += '\n                            \n                            Added to <a href="/member/' + (null == (__t = e.data.uName) ? "" : __t) + "/collections/" + (null == (__t = e.data.set.link) ? "" : __t) + "/" + (null == (__t = e.data.set.id) ? "" : __t) + '/" class="textLink">' + (null == (__t = e.data.set.name) ? "" : __t) + '</a> by <a href="/member/' + (null == (__t = e.data.uName) ? "" : __t) + '/collections/" class="textLink">@' + (null == (__t = e.data.uName) ? "" : __t) + '</a>\n                        \n                            <ul class="timelineUserList">\n                                <li class="timelineUserListItem">\n                                    <a href="/member/' + (null == (__t = e.data.uName) ? "" : __t) + "/collections/" + (null == (__t = e.data.set.link) ? "" : __t) + "/" + (null == (__t = e.data.set.id) ? "" : __t) + '/" title="' + (null == (__t = e.data.uName) ? "" : __t) + '" class="ir timelineUserListAction" style="background-image: url(' + (null == (__t = e.data.avatar) ? "" : __t) + ');" target="_blank">' + (null == (__t = e.data.uName) ? "" : __t) + "</a>\n                                </li>\n                            </ul>\n                            \n                            \n                        ", __p += "\n                        \n                        ") : "facebookShareGroup" === e.event ? __p += "\n                            \n                            " + (null == (__t = e.shareCount) ? "" : __t) + " people shared it\n                        \n                        " : "facebook" === e.event ? (__p += "\n                        \n                        \n                            " + (null == (__t = e.data.delta) ? "" : __t) + "\n                            ", __p += e.data.delta > 1 ? "\n                                people\n                            " : "\n                                person\n                            ", __p += "\n                            shared it\n                            \n                        \n                        ", __p += "\n                        \n                        ") : "pinterest" === e.event || "pinGroup" === e.event ? (__p += " \n                                            \n                        \n                            ", e.data.user && (__p += '\n                                <a href="https://www.pinterest.com' + (null == (__t = e.data.url) ? "" : __t) + '" class="textLink" rel="nofollow" target="_blank">' + (null == (__t = e.data.user.fullname) ? "" : __t) + "</a>\n                            "), __p += "\n                            \n                            ", "pinGroup" === e.event ? (__p += "\n                                ", e.data.user ? (__p += "\n                                    and " + (null == (__t = e.repinCount) ? "" : __t) + " other", e.repinCount > 1 && (__p += "s"), __p += "\n                                ") : __p += "\n                                    " + (null == (__t = e.repinCount + 1) ? "" : __t) + " people\n                                ", __p += "\n                            ") : (__p += "\n                                ", e.data.user && e.data.delta > 1 ? (__p += "\n                                    and " + (null == (__t = e.data.delta - 1) ? "" : __t) + " other", e.data.delta > 2 && (__p += "s"), __p += "\n                                ") : (__p += "\n                                    " + (null == (__t = e.data.delta) ? "" : __t) + "\n                                    ", __p += e.data.delta > 1 ? "\n                                        people\n                                    " : "\n                                        person\n                                    ", __p += "\n                                "), __p += "\n                            "), __p += '\n                            pinned this item\n                            \n                            <ul class="timelineUserList">\n                            ', _.each(e.userDataCollection, function(e) {
          __p += '\n                                <li class="timelineUserListItem">\n                                    <a href="https://www.pinterest.com' + (null == (__t = e.url) ? "" : __t) + '" title="' + (null == (__t = e.user.fullname) ? "" : __t) + '" class="ir timelineUserListAction" style="background-image: url(' + (null == (__t = e.user.smallImageURL) ? "" : __t) + ');" rel="nofollow" target="_blank">' + (null == (__t = e.user.fullname) ? "" : __t) + "</a>\n                                </li>\n                            "
        }), __p += "\n                            </ul>\n                            \n                           \n                        ", __p += "  \n    \n                        ") : "polyvoreGroup" === e.event ? (__p += "\n                            Added to " + (null == (__t = e.setCount) ? "" : __t) + "\n                            ", __p += e.data.delta > 1 ? "\n                                sets\n                            " : "\n                                set\n                            ", __p += "\n                        ") : "polyvore" === e.event ? (__p += "\n                            Added to " + (null == (__t = e.data.delta) ? "" : __t) + "\n                            ", __p += e.data.delta > 1 ? "\n                                sets\n                            " : "\n                                set\n                            ", __p += "\n                        \n                        \n                        ", __p += "    \n                        \n                        ") : "influencer" === e.event ? (__p += '\n                            \n                            <a href="' + (null == (__t = e.data.permalink) ? "" : __t) + '?utm_source=wantering" target="_blank" class="timelineBlogImg" style="background-image: url(' + (null == (__t = e.data.images[0].root) ? "" : __t) + "s." + (null == (__t = e.data.images[0].ext) ? "" : __t) + ');">Read it</a>\n                            \n                            <a href="' + (null == (__t = e.data.permalink) ? "" : __t) + '?utm_source=wantering" class="textLink" rel="nofollow" target="_blank">' + (null == (__t = e.data.title) ? "" : __t) + '</a>   \n                            <span class="timelineBlogAuthor">by ' + (null == (__t = e.data.blog.name.first) ? "" : __t) + " " + (null == (__t = e.data.blog.name.last) ? "" : __t) + '</span>                     \n                            <span class="timelineBlogDate">' + (null == (__t = e.calendarDate) ? "" : __t) + "</span>\n                            \n                        \n                        ", __p += "\n                        \n                        ") : "tumblr" === e.event ? (__p += '\n                            Posted on <a href="' + (null == (__t = e.data.tumblrURL) ? "" : __t) + '" class="textLink" rel="nofollow" target="_blank">' + (null == (__t = e.data.blog) ? "" : __t) + "</a>\n                            ", e.noteCount > 0 && (__p += "\n                                and " + (null == (__t = e.noteCount) ? "" : __t) + " other\n                                ", __p += 1 == e.noteCount ? "\n                                    blog\n                                " : "\n                                    blogs\n                                ", __p += "\n                            "), __p += "\n                        \n                        ") : __p += "\n                            " + (null == (__t = e.event) ? "" : __t) + "\n                        ", __p += "\n                    </li>"), __p += "\n                "
      }), __p += "\n                </ul>\n            </li>\n        "
    }), __p += "\n    </ul>\n</div>\n";
    return __p
  }, templates.Search = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="searchBox">\n    <form action="/" name="' + (null == (__t = searchFormPrefix) ? "" : __t) + 'SearchForm" class="searchForm">\n        <input type="Search" placeholder="What are you looking for?" value="" class="searchField" name="q" autocorrect="off" autocapitalize="off" autocomplete="off" />\n        <a href="#" class="button primaryButton ' + (null == (__t = classes) ? "" : __t) + '">Search</a>\n        <div class="autoCompleteWrap"></div>\n     </form>\n</div>\n';
    return __p
  }, templates.SearchTips = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<ul class="autoTips">\n    <li class="autoTipItem">Try "Jeans" or "Rag &amp; Bone"</li>\n    <li class="autoTipItem">or "Rag &amp; Bone Jeans"</li>\n    <li class="autoTipItem">even "Rag &amp; Bone Jeans under $150"</li>\n    <li class="autoTipItem">or "Rag &amp; Bone Jeans on sale"</li>\n</ul>\n';
    return __p
  }, templates.Set = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<ul class="set ' + (null == (__t = set) ? "" : __t) + 'Set clearFix">\n    ', _.each(obj.features[set], function(e, t) {
      __p += "\n        ", "brands" == set ? __p += "\n            " + (null == (__t = Templates.TrendingGroupListItem({
        model: e,
        type: "brand",
        imgPath: imgPath,
        isSmartPhone: isSmartPhone
      })) ? "" : __t) + "\n        " : (t < e.getMaxSet || "unlimited" == e.getMaxSet) && (__p += '\n            <li class="setItem ' + (null == (__t = e.classes) ? "" : __t) + '">\n                <a href="/' + (null == (__t = e.type) ? "" : __t) + "/" + (null == (__t = e.linkTitle) ? "" : __t) + '/" class="setItemAction" title="Read: ' + (null == (__t = e.title) ? "" : __t) + '">\n                    ' + (null == (__t = e.title) ? "" : __t) + '\n                </a>\n                <div class="setImg ' + (null == (__t = e.focus) ? "" : __t) + 'Aligned" style="background-image: url(' + (null == (__t = e.url) ? "" : __t) + ');">\n                    <img src="' + (null == (__t = e.url) ? "" : __t) + '" itemprop="image" class="clippable">\n                </div>\n                <span class="setItemType">' + (null == (__t = e.type) ? "" : __t) + '</span>\n                <ul class="setItemDetails">\n                    <li class="setItemTitle">' + (null == (__t = e.title) ? "" : __t) + "</li>\n                    ", "masthead" != set && (__p += '\n                        <li class="setItemDate">' + (null == (__t = e.dateFormatted) ? "" : __t) + "</li>\n                    "), __p += '\n                    <li class="setItemDescription">' + (null == (__t = e.summary) ? "" : __t) + '</li>\n                    <li class="calltoAction">Read</li>\n                </ul>\n            </li>\n        '), __p += "\n    "
    }), __p += "\n</ul>\n";
    return __p
  }, templates.Settings = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="blockModule settingsBlock">\n    <fieldset class="formModule userDetails">\n        <h2 class="h2Block">Style Preferences</h2>\n        <div class="formRow">\n            <a href="/tell-us-your-style/" class="textLink">\n                Retake the Style Quiz &raquo;\n            </a>\n        </div>\n    </fieldset>\n    <fieldset class="formModule">\n        <h2 class="h2Block">Account Settings</h2>\n        <p class="pBlock">\n            <a href="#" data-toggle="userDetails" class="userDetails">Update your settings &raquo;</a>\n        </p>\n        <div class="userDetails hide">\n            <div class="formRow" id="uNameSettings">\n                <label for="settingsUName" class="blockLabel">Username</label>\n                <input data-validate id="settingsUName" name="uName" type="text" value="' + (null == (__t = uName) ? "" : __t) + '" class="blockField" />\n                <div class="_message errorMessageUsername">&nbsp;</div>\n            </div>\n            <div class="formRow" id="nameSettings">\n                <label for="settingsFirstName" class="blockLabel">Name</label>\n                <input id="settingsFirstName" name="nameFirst" type="text" value="' + (null == (__t = firstName) ? "" : __t) + '" class="blockField firstName" />\n                <input id="settingsLastName" name="nameLast" type="text" value="' + (null == (__t = lastName) ? "" : __t) + '" class="blockField lastName" />\n            </div>\n            <!--<div class="formRow" id="nameSettings">\n                <label for="settingsFirstName" class="blockLabel">Shopping Preference</label>\n                <label for="settingsGenderFemale" class="">\n                    <input id="settingsGenderFemale" name="gender" type="radio" value="female" class="" />\n                    Womenswear\n                </label>\n                <label for="settingsGenderMale" class="">\n                    <input id="settingsGenderMale" name="gender" type="radio" value="male" class="" />\n                    Menswear\n                </label>\n            </div>-->\n        </div>\n    </fieldset>\n    <div class="buttonRow userDetails hide" id="updateAccountSettings">\n        <button data-update="settings" type="submit">Update Account</button>\n        <a href="#" class="cancelForm userDetails hide" data-toggle="userDetails">Cancel</a>\n    </div>\n\n    <div class="userPreferences userDetails">\n        <fieldset class="formModule">\n            <h2 class="h2Block">Email Settings</h2>\n            ', emailValidated ? (__p += '\n                <p class="pBlock">\n                    Your email was validated\n                    ', 1 == emailValidated && emailValidated !== !0 && (__p += "\n                        on " + (null == (__t = emailValidated) ? "" : __t) + ".\n                    "), __p += "\n                </p>\n            ") : __p += '\n                <p class="pBlock errorMessage">Your email is not yet validated. If you did not receive a validation link or\n                need it again, you can <a href="#" data-resend>resend it</a>.</p>\n            ', __p += '\n            <div class="formRow">\n                <label for="settingsEmail" class="blockLabel">Email Address</label>\n                <input id="settingsEmail" name="settingsEmail" type="email" value="' + (null == (__t = email) ? "" : __t) + '" class="blockField" />\n                ', emailValidated || (__p += '\n                    <a href="#" class="button saveButton inlineButton">Update Email</a>\n                '), __p += '\n            </div>\n            <div class="formRow">\n                <label class="blockLabel">Send me emails for</label>\n                <ul class="blockCheckList">\n                    <li class="blockCheckListItem">\n                        <a href="#" class="checkButton ', 1 == emailPrefSaleAlert && (__p += "selected"), __p += '">\n                            <input id="settingsEmailPrefSaleAlert"\n                                   name="settingsEmailPrefSaleAlert"\n                                   type="checkbox" ', 1 == emailPrefSaleAlert && (__p += 'checked="true"'), __p += '\n                                   class="offStage" />\n                            Yes\n                        </a>\n                        <label for="settingsEmailPrefSaleAlert" class="descLabel">\n                            Sale Alerts\n                        </label>\n                    </li>\n                    <li class="blockCheckListItem">\n                        <a href="#" class="checkButton ', 1 == emailPrefBackInStock && (__p += "selected"), __p += '">\n                            <input id="settingsEmailPrefBackInStock"\n                                   name="settingsEmailPrefBackInStock"\n                                   type="checkbox" ', 1 == emailPrefBackInStock && (__p += 'checked="true"'), __p += '\n                                   class="offStage" />\n                            Yes\n                        </a>\n                        <label for="settingsEmailPrefBackInStock" class="descLabel">\n                            Back In Stock Alerts\n                        </label>\n                    </li>\n                    <li class="blockCheckListItem">\n                        <a href="#" class="checkButton ', 1 == emailPrefWeekly && (__p += "selected"), __p += '">\n                            <input id="settingsEmailPrefWeekly"\n                                   name="settingsEmailPrefWeekly"\n                                   type="checkbox" ', 1 == emailPrefWeekly && (__p += 'checked="true"'), __p += '\n                                   class="offStage" />\n                            Yes\n                        </a>\n                        <label for="settingsEmailPrefWeekly" class="descLabel">\n                            Weekly Digest\n                        </label>\n                    </li>\n                    <li class="blockCheckListItem">\n                        <a href="#" class="checkButton ', 1 == emailFashionDeals && (__p += "selected"), __p += '">\n                            <input id="settingsEmailFashionDeals"\n                                   name="settingsEmailFashionDeals"\n                                   type="checkbox" ', 1 == emailFashionDeals && (__p += 'checked="true"'), __p += '\n                                   class="offStage" />\n                            Yes\n                        </a>\n                        <label for="settingsEmailFashionDeals" class="descLabel">\n                            Fashion Deals\n                        </label>\n                    </li>\n                    <li class="blockCheckListItem">\n                        <a href="#" class="checkButton ', 1 == emailStylePicks && (__p += "selected"), __p += '">\n                            <input id="settingsEmailStylePicks"\n                                   name="settingsEmailStylePicks"\n                                   type="checkbox" ', 1 == emailStylePicks && (__p += 'checked="true"'), __p += '\n                                   class="offStage" />\n                            Yes\n                        </a>\n                        <label for="settingsEmailStylePicks" class="descLabel">\n                            Style Picks\n                        </label>\n                    </li>\n                </ul>\n            </div>\n        </fieldset>\n        <fieldset class="formModule">\n            <h2 class="h2Block">Privacy Settings</h2>\n            <ul class="blockCheckList">\n                <li class="blockCheckListItem">\n                    <a href="#" class="checkButton ', 1 == privateWants && (__p += "selected"), __p += '">\n                        <input id="settingsPrivateWants"\n                               name="settingsPrivateWants"\n                               type="checkbox" ', 1 == privateWants && (__p += 'checked="true"'), __p += '\n                               class="offStage" />\n                        Yes\n                    </a>\n                    <label for="settingsPrivateWants" class="descLabel">\n                        Allow other people to see Your Loves\n                    </label>\n                </li>\n            </ul>\n        </fieldset>\n        ', "email" != provider && (__p += '\n        <fieldset class="formModule">\n            <h2 class="h2Block">Social Networks</h2>\n            <p class="pBlock">\n                You are logged into Wantering with ' + (null == (__t = provider) ? "" : __t) + " as\n                ", __p += "facebook" != provider ? null == (__t = uName) ? "" : __t : (null == (__t = firstName) ? "" : __t) + " " + (null == (__t = lastName) ? "" : __t), __p += ".\n            </p>\n            ", "facebook" == provider && (__p += '\n                <div class="formRow">\n                    <label class="blockLabel">Facebook</label>\n                    <ul class="blockCheckList">\n                        <li class="blockCheckListItem">\n                            <a href="#" class="checkButton ', 1 == publishFacebook && (__p += "selected"), __p += '">\n                                <input id="settingsPublishFacebook"\n                                       name="settingsPublishFacebook"\n                                       type="checkbox" ', 1 == publishFacebook && (__p += 'checked="true"'), __p += '\n                                       class="offStage" />\n                                Yes\n                            </a>\n                            <label for="settingsPublishFacebook" class="descLabel">\n                                Share items I love on Facebook\n                            </label>\n                        </li>\n                    </ul>\n                </div>\n            '), __p += "\n        </fieldset>\n\n        "), __p += '\n        <div class="buttonRow">\n            <button class="button saveButton">Save Settings</button>\n        </div>\n    </div>\n</div>\n';
    return __p
  }, templates.Share = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<ul class="shareActions ' + (null == (__t = obj.type) ? "" : __t) + 'ShareActions">\n    <li class="shareItem ' + (null == (__t = obj.type) ? "" : __t) + 'ShareItem facebookShareItem">\n        <a href="#" class="ir icon shareAction ' + (null == (__t = obj.type) ? "" : __t) + 'ShareAction facebookShareAction" title="Share on Facebook">\n            Facebook\n        </a>\n    </li>\n    <li class="shareItem ' + (null == (__t = obj.type) ? "" : __t) + 'ShareItem tumblrShareItem">\n        <a href="#" class="ir icon shareAction ' + (null == (__t = obj.type) ? "" : __t) + 'ShareAction tumblrShareAction" title="Share on Tumblr">\n            Tumblr\n        </a>\n    </li>\n    <li class="shareItem ' + (null == (__t = obj.type) ? "" : __t) + 'ShareItem twitterShareItem">\n        <a href="#" class="ir icon shareAction ' + (null == (__t = obj.type) ? "" : __t) + 'ShareAction twitterShareAction" title="Share on Twitter">\n            Twitter\n        </a>\n    </li>\n    <li class="shareItem ' + (null == (__t = obj.type) ? "" : __t) + 'ShareItem pinterestShareItem">\n        <a href="#" class="ir icon shareAction ' + (null == (__t = obj.type) ? "" : __t) + 'ShareAction pinterestShareAction" title="Share on Pinterest">\n            Pinterest\n        </a>\n    </li>\n    <li class="shareItem ' + (null == (__t = obj.type) ? "" : __t) + 'ShareItem googleShareItem">\n        <a href="#" class="ir icon shareAction ' + (null == (__t = obj.type) ? "" : __t) + 'ShareAction googleShareAction" title="Share on Google">\n            Google\n        </a>\n    </li>\n</ul>\n';
    return __p
  }, templates.SiteTimeline = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<section id="siteTimeline" class="pageBody viewSiteTimeline">\n    <h2 class="h4Timeline">Timeline</h2>\n    <div class="timelineContainer">\n        <div data-timeline="label" class="hidden newTimelineItemsLabel">\n            <span data-timeline="items">0</span> Items\n            <button disabled data-timeline="button">Refresh</button>\n        </div>\n        <ul class="productTimeline" data-timeline="products">\n            ' + (null == (__t = Templates.TimePeriod({
      timelineData: timelineData
    })) ? "" : __t) + "\n        </ul>\n    </div>\n</section>\n";
    return __p
  }, templates.TimePeriod = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) _.each(timelineData, function(e, t) {
      __p += '\n    <li class="timelinePeriodItem">\n        <h4 class="h4Timeline">' + (null == (__t = t) ? "" : __t) + '</h4>\n\n        <ul class="timelinePeriod">\n        ', _.each(e, function(e) {
        __p += " ", e && (__p += "\n            ", e.image && (__p += '\n                <li class="timelineItem ' + (null == (__t = e.event) ? "" : __t) + 'TimelineItem">\n                    ', "twitter" === e.event ? (__p += '\n                        <a href="/' + (null == (__t = e.link) ? "" : __t) + "/" + (null == (__t = e.shortKey) ? "" : __t) + '/" data-noscroll>' + (null == (__t = e.title) ? "" : __t) + " by " + (null == (__t = e.brand) ? "" : __t) + "</a>&mdash;\n                        ", __p += e.isRetweet ? '\n                            retweeted by <a href="https://twitter.com/' + (null == (__t = e.data.screenName) ? "" : __t) + '" target="_blank">@' + (null == (__t = e.data.screenName) ? "" : __t) + "</a>\n                        " : "\n                            " + (null == (__t = e.data.text) ? "" : __t) + '\n                            by <a href="https://twitter.com/' + (null == (__t = e.data.screenName) ? "" : __t) + '" target="_blank">@' + (null == (__t = e.data.screenName) ? "" : __t) + "</a>\n                        ", __p += "\n                    ") : "retweetGroup" === e.event ? __p += '\n                        <a href="/' + (null == (__t = e.link) ? "" : __t) + "/" + (null == (__t = e.shortKey) ? "" : __t) + '/" data-noscroll>' + (null == (__t = e.title) ? "" : __t) + "</a>\n                        retweeted by " + (null == (__t = e.retweetCount) ? "" : __t) + " people\n                    " : "wantering" === e.event ? __p += '\n                        <a href="/' + (null == (__t = e.link) ? "" : __t) + "/" + (null == (__t = e.shortKey) ? "" : __t) + '/" data-noscroll>' + (null == (__t = e.title) ? "" : __t) + '</a>\n                        added to <a href="/member/' + (null == (__t = e.data.uName) ? "" : __t) + "/collections/" + (null == (__t = e.data.set.link) ? "" : __t) + "/" + (null == (__t = e.data.set.id) ? "" : __t) + '/">' + (null == (__t = e.data.set.name) ? "" : __t) + '</a> by <a href="/member/' + (null == (__t = e.data.uName) ? "" : __t) + '/collections/">@' + (null == (__t = e.data.uName) ? "" : __t) + "</a>\n                    " : "facebookShareGroup" === e.event ? __p += "\n                        " + (null == (__t = e.shareCount) ? "" : __t) + ' people shared the\n                        <a href="/' + (null == (__t = e.link) ? "" : __t) + "/" + (null == (__t = e.shortKey) ? "" : __t) + '/" data-noscroll>' + (null == (__t = e.title) ? "" : __t) + " by " + (null == (__t = e.brand) ? "" : __t) + "</a>\n                    " : "facebook" === e.event ? (__p += "\n                        " + (null == (__t = e.data.delta) ? "" : __t) + "\n                        ", __p += e.data.delta > 1 ? "\n                            people\n                        " : "\n                            person\n                        ", __p += '\n                        shared the\n                        <a href="/' + (null == (__t = e.link) ? "" : __t) + "/" + (null == (__t = e.shortKey) ? "" : __t) + '/" data-noscroll>' + (null == (__t = e.title) ? "" : __t) + " by " + (null == (__t = e.brand) ? "" : __t) + "</a>\n                    ") : "pinGroup" === e.event ? (__p += "\n\n                        " + (null == (__t = e.repinCount) ? "" : __t) + ' people repinned the <a href="/' + (null == (__t = e.link) ? "" : __t) + "/" + (null == (__t = e.shortKey) ? "" : __t) + '/" data-noscroll>' + (null == (__t = e.title) ? "" : __t) + "</a>\n                        ", e.data.user && (__p += '\n                            from <a href="https://www.pinterest.com' + (null == (__t = e.data.url) ? "" : __t) + '" target="_blank">' + (null == (__t = e.data.user.fullname) ? "" : __t) + "</a>\n                        "), __p += "\n\n                    ") : "pinterest" === e.event ? (__p += "\n\n                        " + (null == (__t = e.data.delta) ? "" : __t) + "\n                        ", __p += e.data.delta > 1 ? "\n                            people\n                        " : "\n                            person\n                        ", __p += '\n                        repinned the <a href="/' + (null == (__t = e.link) ? "" : __t) + "/" + (null == (__t = e.shortKey) ? "" : __t) + '/" data-noscroll>' + (null == (__t = e.title) ? "" : __t) + "</a>\n                        ", e.data.user && (__p += '\n                             from <a href="https://www.pinterest.com' + (null == (__t = e.data.url) ? "" : __t) + '" target="_blank">' + (null == (__t = e.data.user.fullname) ? "" : __t) + "</a>\n                        "), __p += "\n\n                    ") : "polyvoreGroup" === e.event ? (__p += '\n                        <a href="/' + (null == (__t = e.link) ? "" : __t) + "/" + (null == (__t = e.shortKey) ? "" : __t) + '/" data-noscroll>' + (null == (__t = e.title) ? "" : __t) + "</a>\n                        added to " + (null == (__t = e.setCount) ? "" : __t) + "\n                        ", __p += e.data.delta > 1 ? "\n                            sets\n                        " : "\n                            set\n                        ", __p += "\n                    ") : "polyvore" === e.event ? (__p += '\n                        <a href="/' + (null == (__t = e.link) ? "" : __t) + "/" + (null == (__t = e.shortKey) ? "" : __t) + '/" data-noscroll>' + (null == (__t = e.title) ? "" : __t) + "</a>\n                        added to " + (null == (__t = e.data.delta) ? "" : __t) + "\n                        ", __p += e.data.delta > 1 ? "\n                            sets\n                        " : "\n                            set\n                        ", __p += "\n                    ") : "influencer" === e.event ? __p += "\n                        Featured by " + (null == (__t = e.data.blog.name.first) ? "" : __t) + " " + (null == (__t = e.data.blog.name.last) ? "" : __t) + ' in\n                        <a href="' + (null == (__t = e.data.permalink) ? "" : __t) + '?utm_source=wantering" target="_blank">' + (null == (__t = e.data.title) ? "" : __t) + "</a> on " + (null == (__t = e.calendarDate) ? "" : __t) + "\n                    " : "tumblr" === e.event ? (__p += '\n                        <a href="/' + (null == (__t = e.link) ? "" : __t) + "/" + (null == (__t = e.shortKey) ? "" : __t) + '/" data-noscroll>' + (null == (__t = e.title) ? "" : __t) + '</a>\n                        posted on <a href="' + (null == (__t = e.data.tumblrURL) ? "" : __t) + '" class="textLink" rel="nofollow" target="_blank">' + (null == (__t = e.data.blog) ? "" : __t) + "</a>\n                        ", e.noteCount > 0 && (__p += "\n                            and " + (null == (__t = e.noteCount) ? "" : __t) + " other\n                            ", __p += 1 == e.noteCount ? "\n                                blog\n                            " : "\n                                blogs\n                            ", __p += "\n                        "), __p += "\n                    ") : __p += "\n                        " + (null == (__t = e.event) ? "" : __t) + "\n                    ", __p += "\n\n                    ", e.parsedTags && (__p += '\n                        <strong>\n                            Tagged with\n                            <a href="/clothing/tag-' + (null == (__t = e.parsedTags.tag) ? "" : __t) + '/">' + (null == (__t = e.parsedTags.name) ? "" : __t) + "</a>.\n                        </strong>\n                    "), __p += '\n\n                    <div class="timelineImage">\n                        <a href="/' + (null == (__t = e.link) ? "" : __t) + "/" + (null == (__t = e.shortKey) ? "" : __t) + '/" data-noscroll>\n                            <img class="" src="//cdn.wantering.com/' + (null == (__t = e.image) ? "" : __t) + '">\n                        </a>\n                    </div>\n                </li>'), __p += "\n            "), __p += "\n        "
      }), __p += "\n        </ul>\n    </li>\n"
    }), __p += "\n";
    return __p
  }, templates.Timeline = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<div class="articleTimeline" data-container="timeline">\n    <ul>\n        ', _.each(versions, function(e) {
      __p += '\n            <li class="_version">\n                <button class="_versionButton' + (null == (__t = e.className) ? "" : __t) + '" data-version="' + (null == (__t = e.version) ? "" : __t) + '">\n                    ' + (null == (__t = e.version) ? "" : __t) + "\n                </button>\n            </li>\n        "
    }), __p += "\n    </ul>\n</div>\n";
    return __p
  }, templates.Timestamp = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += (null == (__t = year) ? "" : __t) + "-" + (null == (__t = month) ? "" : __t) + "-" + (null == (__t = day) ? "" : __t) + " " + (null == (__t = hour) ? "" : __t) + ":" + (null == (__t = minute) ? "" : __t) + "\n";
    return __p
  }, templates.TrendingGroupList = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<ul class="trendingGroupList">' + (null == (__t = obj.trendingGroupListItems) ? "" : __t) + "</ul>\n";
    return __p
  }, templates.TrendingGroupListItem = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape, Array.prototype.join
    }
    with(obj) __p += '<li class="trendingGroupItem"\n    style="background-image: url(' + (null == (__t = imgPath) ? "" : __t) + (null == (__t = model.info.logo) ? "" : __t) + "-", __p += isSmartPhone ? "m" : "l", __p += '.png);">\n    <a href="/clothing/' + (null == (__t = obj.type) ? "" : __t) + "-" + (null == (__t = obj.model.path) ? "" : __t) + '/"\n       class="ir trendingGroupAction"\n       title="' + (null == (__t = obj.model.label) ? "" : __t) + '">\n        ' + (null == (__t = obj.model.label) ? "" : __t) + "\n    </a>\n</li>\n";
    return __p
  }, templates.TrendingGroupWrap = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="trendingGroupWrap">\n    <h2 class="h2Group">Trending ' + (null == (__t = obj.label) ? "" : __t) + "</h2>\n    " + (null == (__t = obj.trendingGroupHTML) ? "" : __t) + "\n</div>\n";
    return __p
  }, templates.Widget = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="widgetToolbar -hide">\n    <button class="_button -insert" data-button="toggle" title="Insert Image or Product">+</button>\n    <div data-container="widgetbuttons" class="_tools -hide -inline">\n        <input class="_keyinput" type="text" name="key" placeholder="Short Key">\n        <button class="_button -add" data-insert="image">Image</button>\n        <button class="_button -add" data-insert="product">Product</button>\n        <span class="_divider">|</span>&nbsp;\n        <button class="_button -add" title="Tumblr: Content below will not appear in Tumblr posts" data-tumblr="break">\n            Break\n        </button>\n        <button class="_button -add" title="Tumblr: Content below will not appear in Tumblr posts" data-tumblr="readmore">\n            Read More\n        </button>\n        <button class="_button -add" title="Tumblr: Content below will not appear in Tumblr posts" data-insert="outro">\n            Outro\n        </button>\n    </div>\n</div>\n';
    return __p
  }, templates.WidgetHeader = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="widgetToolbar -hide -header">\n    <div data-container="widgetbuttons" class="_tools">\n        <h3 class="_legend">Add Header Image</h3>\n        <div class="_field">\n            <input class="_longinput" type="text" name="key" placeholder="Short Key">\n        </div>\n        <div class="_field">\n            <input class="_longinput" type="text" name="link" placeholder="Link">\n        </div>\n        <div class="_buttons">\n            <button class="_button -add" data-insert="header">Add</button>\n        </div>\n    </div>\n\n    ' + (null == (__t = Templates.WidgetImagePosition()) ? "" : __t) + "\n</div>\n";
    return __p
  }, templates.WidgetImagePosition = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="focusWidget" data-widget="focus">\n    <button class="_button" data-focus="topLeft"><span class="-upperLeft">&larr;</span></button>\n    <button class="_button" data-focus="top">&uarr;</button>\n    <button class="_button" data-focus="topRight"><span class="-upperRight">&rarr;</span></button>\n\n    <button class="_button" data-focus="left">&larr;</button>\n    <button class="_button" data-focus="center">X</button>\n    <button class="_button" data-focus="right">&rarr;</button>\n\n    <button class="_button" data-focus="bottomLeft"><span class="-lowerLeft">&larr;</span></button>\n    <button class="_button" data-focus="bottom">&darr;</button>\n    <button class="_button" data-focus="bottomRight"><span class="-lowerRight">&rarr;</span></button>\n<div>\n';
    return __p
  }, templates.WidgetMedia = function(obj) {
    obj || (obj = {}); {
      var __t, __p = "";
      _.escape
    }
    with(obj) __p += '<div class="partWidget -hide">\n    <div data-container="partWidget" data-info class="_smart">\n        <input class="_input" type="text" placeholder="Key" data-key name="key" value="' + (null == (__t = key) ? "" : __t) + '">\n        <input class="_input" type="text" placeholder="Link" data-key name="link" value="">\n        <div data-smart class="_productinfo -hide">\n            <input class="_input" type="text" class="_input" placeholder="Alernative Keys" name="smartkeys" value="' + (null == (__t = smartkeys) ? "" : __t) + '">\n            <input class="_input" type="text" class="_input" placeholder="Alernative Query" name="smartquery" value="' + (null == (__t = smartquery) ? "" : __t) + '">\n        </div>\n        <button class="_button" data-action="delete">Remove</button>\n        <button data-update class="_button">Update</button>\n    </div>\n\n    ' + (null == (__t = Templates.WidgetImagePosition()) ? "" : __t) + "\n</div>\n";
    return __p
  }, templates.WidgetPartEditor = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="partWidget -hide">\n    <div data-container="partWidget" class="_tools">\n        <h3 class="_legend">Add another asset</h3>\n        <input class="_keyinput" type="text" name="key" placeholder="Short Key">\n        <button class="_button -add" data-insert="image" title="Insert Image">Image</button>\n        <button class="_button -add" data-insert="product" title="Insert Product Image">Product</button>\n        <span class="divider">|&nbsp;</span>&nbsp;\n        <button class="_button -delete" data-delete="product" title="Remove Entire Part">Remove</button>\n        <button class="_button" data-paragraph title="Insert Paragraph after Images">Insert P</button>\n        <div class="positionWidget">\n            <button class="_button" data-position="left">Left</button>\n            <button class="_button" data-position="center">Center</button>\n            <button class="_button" data-position="right">Right</button>\n        </div>\n\n    </div>\n\n</div>\n';
    return __p
  }, templates.WidgetPosition = function(obj) {
    obj || (obj = {}); {
      var __p = "";
      _.escape
    }
    with(obj) __p += '<div class="partWidget -hide">\n    <div data-container="partWidget" class="_tools">\n        <h3 class="_legend">Set Position</h3>\n        <div class="positionWidget">\n            <button class="_button" data-position="left">Left</button>\n            <button class="_button" data-position="center">Center</button>\n            <button class="_button" data-position="right">Right</button>\n        </div>\n    </div>\n</div>\n';
    return __p
  }, templates
}();
"undefined" != typeof module && (module.exports = Templates);
var app = app || {},
  Wantering = Wantering || {},
  bootstrapData = bootstrapData || {};
_.extend(Wantering, Backbone.Events), Wantering.App = Wantering.App || {}, Wantering.Config = Wantering.Config || {}, Wantering.Page = Wantering.Page || {}, Wantering.Module = Wantering.Module || {}, Wantering.Mixin = Wantering.Mixin || {}, Wantering.Sharing = Wantering.Sharing || {}, Wantering.Tracker = Wantering.Tracker || {}, Wantering.Actions = Wantering.Actions || {}, Wantering.Utils = Wantering.Utils || {}, Wantering.Quizzes = Wantering.Quizzes || {}, Wantering.fbID = "157654291011015", Wantering.htmlCache = [], "#_=_" === window.location.hash && (window.location.hash = ""), _.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/gim,
  evaluate: /\{\#(.+?)\#\}/gim
}, Wantering.Config.Urls = {
  s3: "//s3.amazonaws.com/wantering/media/",
  images: bootstrapData.wanteringImageRootURL
}, Wantering.Config.Const = {
  MAX_PRICE: 2500,
  USER_FLAG_PRIVATE_WANTS: 8192,
  MIN_HEADER_WIDTH: 960
}, Wantering.fetchSize = 24, Wantering.didScroll = !1, wanteringImageRootUrl = null, Wantering.Config.PixelRatio = window.devicePixelRatio >= 1.5 ? "high" : "normal", Wantering.Config.FilteredRoutes = ["search", "similar"], Wantering.GetScreenSize = function(e) {
  var t, n, i, a, r, s, o = $(e);
  return o.innerWidth() <= 600 && (i = !0), o.innerWidth() >= 601 && o.innerWidth() <= 1024 && (n = !0), o.innerWidth() >= 601 && o.innerWidth() <= 768 && (t = !0), o.innerWidth() > 1024 && o.innerWidth() <= 1530 && (a = !0), o.innerWidth() > 1530 && (r = !0), Modernizr.touch && (i || n) && (s = !0), {
    isGiantScreen: r,
    isBigScreen: a,
    isTabletScreen: t,
    isSmallScreen: n,
    isSmartPhone: i,
    isMobile: s
  }
};
var screenSize = Wantering.GetScreenSize(window),
  searchFilters = {
    keyword: "",
    filters: "",
    gender: "womens",
    price: "any",
    color: "any",
    sale: "any",
    newFilter: "any",
    sortOrder: "default"
  };
Wantering.App.User = Backbone.Model.extend({
  initialize: function() {
    if (this.attributes.isAuthenticated) {
      if (Wantering.Authentication.OK = !0, bootstrapData && "undefined" != typeof bootstrapData.userWants && null !== bootstrapData.userWants) {
        var e = _.map(bootstrapData.userWants, function(e) {
          return {
            id: e
          }
        });
        app.wantShortKeys = new Wantering.Module.WantShortKeys(e)
      }
      "m" == this.attributes.gender ? searchFilters.gender = "mens" : "f" == this.attributes.gender && (searchFilters.gender = "womens"), analytics.identify(this.attributes.userHash, {
        id: this.attributes.userHash,
        firstName: this.attributes.nameFirst,
        lastName: this.attributes.nameLast,
        username: this.attributes.uName,
        email: this.attributes.emailPrimary ? this.attributes.emailPrimary : this.attributes.email,
        gender: searchFilters.gender,
        provider: this.attributes.provider,
        avatar: this.attributes.picture,
        authenticated: Wantering.Authentication.OK.toString()
      })
    }
    var t = this;
    analytics.ready(function() {
      ga(function(e) {
        var n = e.get("clientId");
        t.attributes.xcust = Formatters.GenerateXCust(n), Wantering.Authentication.OK && app.user.get("isShopper") || ("product" == Wantering.App.CurrentRoute || "article" == Wantering.App.CurrentRoute) && Formatters.CheckXCust($(".buyButton, .buyLink, .doBuy"));
        var i = document.createElement("div");
        i.id = "gaID", document.body.appendChild(i), setTimeout(function() {
          $("#gaID").attr("data-gaid", n)
        }, 200)
      }), ga("set", "dimension1", Wantering.Config.PixelRatio)
    })
  },
  url: function() {
    return "/api/member/" + this.attributes.uName + "/details/"
  },
  ownsCurrentPage: function() {
    var e = document.location.pathname.split("/")[2];
    return e == this.get("uName") ? !0 : !1
  },
  verify: function() {
    Wantering.Authentication.OK && (this.attributes.quizDone ? this.attributes.emailPrimary || Wantering.trigger("popup:open", {
      type: "confirmEmail"
    }) : setTimeout(function() {
      app.navigate("tell-us-your-style/", {
        trigger: !0
      })
    }, 10))
  }
}), Wantering.App.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    ":hash": "index",
    "/": "index",
    "tell-us-your-style/": "tellUsYourStyle",
    "invite/(:userHash/)": "invite",
    "about/": "content",
    "careers/": "content",
    "contact/": "content",
    "privacy/": "content",
    "terms/": "content",
    "brands/(:prefix/)": "brands",
    "stores/(:prefix/)": "stores",
    "settings/*querystring": "settings",
    "login/": "login",
    "signup/": "signup",
    "newsletter/": "newsletter",
    "concierge/": "concierge",
    "member/:username/": "memberSets",
    "member/:username/loves/": "memberLoves",
    "member/:username/collections/": "memberSets",
    "member/:username/collections/:set/(:id/)": "memberLoves",
    "member/:username/password/change/": "changePassword",
    "member/validate/email/": "validateEmail",
    "member/forgot/password/": "forgotPassword",
    "member/reset/password/": "resetPassword",
    "trending/(:gender/)": "trending",
    "trending/for-you/": "trendingForYou",
    "recently-viewed/": "recentlyViewed",
    "timeline/": "siteTimeline",
    "timeline/brand/:brand/": "brandTimeline",
    "timeline/event/:event/(:gender/)": "eventTimeline",
    "timeline/gender/:gender/(:tag/)": "genderTimeline",
    "browse/(:tagType/)": "browseTags",
    "trends/:linkTitle/": "article",
    "halloween/:linkTitle/": "article",
    "holiday/:linkTitle/": "article",
    "tv-shows/:linkTitle/": "article",
    "movies/:linkTitle/": "article",
    "celebrity/:linkTitle/": "article",
    "inspiration/:linkTitle/": "article",
    "advice/:linkTitle/": "article",
    "insiders/:linkTitle/": "article",
    "article/:linkTitle/": "article",
    "preview/article/:id/": "preview",
    "trends/": "landing",
    "halloween/": "landing",
    "holiday/": "landing",
    "tv-shows/": "landing",
    "movies/": "landing",
    "celebrity/": "landing",
    "inspiration/": "landing",
    "advice/": "landing",
    "insiders/": "landing",
    "article/": "landing",
    "contest/:linkTitle/": "contest",
    "clothing/*searchterm(?:params)": "searchAll",
    "mens-clothing/*searchterm(?:params)": "searchMens",
    "womens-clothing/*searchterm(?:params)": "searchWomens",
    "clothing-similar/:title/*prodshortkey/": "similarAll",
    "mens-clothing-similar/:title/*prodshortkey/": "similarMens",
    "womens-clothing-similar/:title/*prodshortkey/": "similarWomens",
    "product/:id/": "oldProduct",
    ":title/:prodshortkey/": "product",
    "buy/:title/:prodshortkey/": "buy",
    "admin/flags/staff/activate/": "activateStaffCookie",
    "admin/flags/staff/clear/": "clearStaffCookie"
  },
  initialize: function() {
    this.on("route", function(e) {
      var t = $("html"),
        n = $("#footer");
      n.addClass("invisible"), n.find(".searchField").val("");
      var i, a, r, s, o, l, u, c, p, d;
      return a = $("#header").find(".mainNavItem"), s = ["searchAll", "searchWomens", "searchMens"], o = ["similarAll", "similarWomens", "similarMens"], l = ["search", "similar", "memberLoves", "trending", "tellUsYourStyle"], c = ["product"], u = ["searchWomens", "searchMens", "similarWomens", "similarMens", "landing", "product", "trending"], routesToAutoHideSubNav = ["index", "article", "memberLoves", "memberSets", "invite", "settings", "contest", "tellUsYourStyle"], routesToTriggerFBScriptLoad = ["invite", "product"], routesToKeepTimeline = ["siteTimeline", "product", "brandTimeline", "eventTimeline", "genderTimeline"], d = ["siteTimeline", "brandTimeline", "eventTimeline", "genderTimeline"], u.indexOf(e) > -1 ? (r = a.parent(), "product" == e && app.productDetail ? (p = app.productDetail.attributes.genderString, p && (searchFilters.gender = p)) : "trending" == e && (p = document.location.pathname.replace(/(\/trending\/|\/)/g, "")), i = "womens" == p || e.toLowerCase().indexOf("womens") > -1 ? r.find(".womensNavItem") : e.toLowerCase().indexOf("landing") > -1 ? r.find(".editorialNavItem") : r.find(".mensNavItem"), i.hasClass("selected") || Wantering.Utils.OpenMenu(i, r, !1)) : routesToAutoHideSubNav.indexOf(e) >= 0 && Wantering.Utils.CloseMenu(a), s.indexOf(e) >= 0 ? e = "search" : o.indexOf(e) >= 0 && (e = "similar"), Wantering.App.CurrentRoute = e, Wantering.Utils.DestroyScrollMonitor(), Wantering.Actions.DestroyKeyMonitor("product"), Wantering.Utils.ClearTimers(), app.messenger && app.messenger.keepOpenOnNavigate === !1 && Wantering.trigger("message:hide"), routesToTriggerFBScriptLoad.indexOf(e) >= 0 && ("undefined" == typeof FB || null === FB) && Modernizr.load({
        test: Modernizr.touch,
        nope: "//connect.facebook.net/en_US/all.js",
        complete: function() {
          "undefined" != typeof FB && null !== FB && FB.init({
            appId: Wantering.fbID,
            xfbml: !0,
            cookie: !0
          })
        }
      }), l.indexOf(e) >= 0 ? (Wantering.Utils.ScrollMonitor(e), n.addClass("hide")) : d.indexOf(e) >= 0 ? n.addClass("hide") : ("product" != e || $("#header").hasClass("viewProductLanding")) && n.removeClass("hide invisible"), "product" == e && $("#notfound").length ? ($("#header").removeClass("hasOverlay viewProductDetail"), t.removeClass("hasOverlay"), void 0) : (c.indexOf(e) >= 0 ? (screenSize.isMobile || Wantering.Actions.KeyMonitor(e), $("#header").hasClass("viewProductLanding") || setTimeout(function() {
        t.addClass("hasOverlay")
      }, 100)) : t.removeClass("hasOverlay"), _.each(Wantering.Module.Experiments, function(e) {
        e()
      }), e.match(/^article|landing/) || (app.landingPage = null), routesToKeepTimeline.indexOf(e) < 0 && app.siteTimelineView && app.siteTimelineView.close(), "browseTags" != e && app.tagListView && app.tagListView.close(), void 0)
    })
  },
  index: function() {
    var e, t = window.location.href,
      n = !1,
      i = !1;
    if (t.indexOf("?q=") >= 0 ? (n = !0, e = Formatters.GetURLParameter("q")) : t.indexOf("?s=") >= 0 && (i = !0, e = Formatters.GetURLParameter("s")), n) Wantering.Actions.Search(e, "Redirect", "isRedirect");
    else {
      var a = {},
        r = $("#home");
      Wantering.Tracker.Event("View Homepage", "Page View Events", 1), r.length < 1 ? a.type = "fromClient" : (a.el = r, a.type = "fromBootstrap"), i && (a.prepopulateSearch = e), this.currentView && this.cleanView(this.currentView), this.currentView = new Wantering.Page.HomeView(a)
    }
  },
  landing: function() {
    var e, t = {},
      n = $("#landingPage");
    Wantering.Tracker.Event("View Landing", "Page View Events", 1), e = Backbone.history.fragment.indexOf("?") >= 0 ? window.location.pathname : Backbone.history.fragment, t.kind = e.replace(/\//g, ""), n.length < 1 ? t.type = "fromClient" : (t.el = n, t.type = "fromBootstrap"), this.currentView && this.cleanView(this.currentView), this.currentView = new Wantering.Page.LandingPageView(t)
  },
  preview: function(e) {
    this.article(null, e)
  },
  concierge: function() {
    document.location.reload(!0)
  },
  article: function(e) {
    if (!this.isComingBackFromCart()) {
      var t = {},
        n = $("#article");
      if (Wantering.Utils.SetViewClass(Defaults.ViewClasses.article), Wantering.Tracker.Event("View Article", "Page View Events", 1), Wantering.Utils.SetSessionStorageItem("backRoute", Backbone.history.fragment), this.articlePageView) {
        if (this.articlePageView.model.attributes.linkTitle == e) return 0 === n.length ? (this.articlePageView.render(), this.articlePageView.delegateEvents()) : $("#productDetail").remove(), this.articlePageView.setBackButtonText(), void 0;
        this.articlePageView.close(), this.articlePage = null
      }
      if (n.length < 1 || !bootstrapData && null === this.articlePage) {
        if (t.linkTitle = e, t.type = "fromClient", this.articlePage = new Wantering.Page.Article({
            linkTitle: e
          }), this.articlePage.fetch({
            async: !1,
            error: function() {
              Wantering.Utils.ViewError(500)
            }
          }).done(function() {}), t.model = this.articlePage, !this.articlePage.attributes.data) return;
        Wantering.trigger("state:update", {
          title: this.articlePage.attributes.data.title + Defaults.Titles.article
        }), this.articlePageView = new Wantering.Page.ArticleView(t), this.currentView && this.cleanView(this.currentView)
      } else t.el = n, t.type = "fromBootstrap", this.articlePage = new Wantering.Page.Article(bootstrapData.articleData), t.model = this.articlePage, this.articlePageView = new Wantering.Page.ArticleView(t)
    }
  },
  content: function() {
    var e = $("#about"),
      t = $("#careers"),
      n = $("#contact"),
      i = $("#privacy"),
      a = $("#terms");
    e.length < 1 && t.length < 1 && n.length < 1 && i.length < 1 && a.length < 1 && (window.location.href = window.location.href)
  },
  brands: function(e) {
    this.group("brands", e)
  },
  stores: function(e) {
    this.group("stores", e)
  },
  group: function(e, t) {
    var n, i, a = {};
    a.type = e, a.prefix = t, "brands" == e ? i = "Brands" : "stores" == e && (i = "Stores"), a.typeUpper = i, n = $("#" + e), n.length > 0 && (!app.groupPage || app.groupPage.options.type == e && app.groupPage.options.prefix == t) && (a.el = n), app.groupPage = new Wantering.Page.GroupPageView(a)
  },
  tellUsYourStyle: function() {
    Wantering.Utils.SetViewClass(Defaults.ViewClasses.tellYourStyle), Wantering.Authentication.OK ? ($("#main").html((new Wantering.Page.LearnStyleView).render().el), app.alertPopup.options.pathname = void 0, Wantering.trigger("popup:close"), ("undefined" != typeof this.trendingProducts || null !== this.trendingProducts) && (this.trendingProducts = null)) : this.cleanStart()
  },
  invite: function() {
    Wantering.Utils.SetViewClass(Defaults.ViewClasses.invite), Wantering.Authentication.OK ? (Wantering.trigger("state:update", {
      title: Defaults.Titles.invite
    }), $("#main").html((new Wantering.Page.InviteView).render().el)) : this.cleanStart()
  },
  contest: function(e) {
    if (Defaults.OnboardLandingPage.indexOf(e) < 0) return app.navigate("", {
      trigger: !0,
      replace: !0
    }), void 0;
    var t = {
        onboardLandingType: e
      },
      n = $("#onboardLanding");
    Wantering.Tracker.Event("View Onboard Landing", "Page View Events", 1), n.length < 1 ? t.type = "fromClient" : (t.el = n, t.type = "fromBootstrap"), this.currentView && this.cleanView(this.currentView), this.currentView = new Wantering.Page.OnboardLandingView(t)
  },
  settings: function() {
    Wantering.Authentication.OK ? $("#main").html((new Wantering.Page.SettingsView).render().el) : this.cleanStart()
  },
  searchAll: function(e, t) {
    this.search("any", e, t)
  },
  searchMens: function(e, t) {
    this.search("mens", e, t)
  },
  searchWomens: function(e, t) {
    this.search("womens", e, t)
  },
  search: function(e, t, n) {
    function i(e, t) {
      if (app.searchProducts.hits = e.hits, "undefined" == typeof app.searchProducts.hits && Wantering.Utils.ViewError(500), "fromClient" == t) {
        if (e.parse_info.filters) {
          var n = e.parse_info.filters,
            i = _.find(n, function(e) {
              return "brand" == e.key
            }),
            r = _.find(n, function(e) {
              return "store" == e.key
            }),
            s = _.find(n, function(e) {
              return "tag" == e.key
            });
          i ? (i = i.value, app.brandContent && app.brandContent.attributes.urlKey == i + "/" || (app.brandContent = new Wantering.Module.Brand({
            urlKey: i + "/"
          }), app.brandContent.fetch({
            async: !1
          })), app.searchProducts.searchContent = {
            brand: app.brandContent.attributes
          }) : r ? (r = r.value, app.storeContent && app.storeContent.attributes.urlKey == r + "/" || (app.storeContent = new Wantering.Module.Store({
            urlKey: r + "/"
          }), app.storeContent.fetch({
            async: !1
          })), app.searchProducts.searchContent = {
            store: app.storeContent.attributes
          }) : s && (s = s.value.match(/.+:(\S+)/i)[1], s = s ? s.replace(/\+/g, " ") : "", app.tagContent && app.tagContent.attributes.urlKey == s + "/" || (app.tagContent = new Wantering.Module.Tag({
            urlKey: s + "/"
          }), app.tagContent.fetch({
            async: !1
          })), app.searchProducts.searchContent = {
            tag: app.tagContent.attributes
          })
        }
        e.parse_info.spellcheck && (app.searchProducts.summary = 'Nothing found for <span class="collatedSearchTerm">&ldquo;' + e.parse_info.search.text + "&rdquo;</span>, but"), a = Formatters.GenerateSearchTitle(e.parse_info, app.searchProducts.searchContent, Formatters, _), app.searchProducts.titledSearchTerm = a, Wantering.trigger("state:update", {
          title: a + " on Wantering"
        }), app.searchPage && app.searchPage.close(), app.searchPage = new Wantering.Page.ProductListView({
          type: "searchResults"
        }), $("#main").html(app.searchPage.render().el), Wantering.Utils.RemoveTransitionView(), "undefined" != typeof window.transitionTimer && null !== window.transitionTimer && clearTimeout(window.transitionTimer)
      } else app.searchProducts.reset(e, {
        parse: !0
      }), app.searchProducts.titledSearchTerm = $("#searchResults").find("h1").text().trim(), app.searchPage = new Wantering.Page.ProductListView({
        el: $("#searchResults"),
        type: "searchResults"
      });
      Wantering.Utils.AdjustSaleFilter(e), Wantering.Utils.AdjustGenderFilter(e), Wantering.Utils.AdjustColorFilter(e), Wantering.trigger("state:results", e), app.state.updateSearchField(), app.facets.fetch().done(function() {
        app.facetsView ? app.facetsView.render() : app.facetsView = new Wantering.Module.FacetsView({
          el: $("[data-facets]")
        })
      }), $("#backToPage").html(a), setTimeout(function() {
        Wantering.Utils.SetSessionStorageItem("backRoute", Backbone.history.fragment)
      }, 500)
    }
    var a, r, s;
    if (!this.isComingBackFromCart()) {
      var o = $("#searchResults"),
        l = $("#productDetail");
      if (null == t && (t = ""), l.length && l.addClass("hide"), app.productDetailView && (app.productDetailView.options.type = "overList"), r = n && n.match(/sort\=/) ? Formatters.GetURLParameter("sort", "?" + n) : "default", n && n.match(/focus\=/) && (s = Formatters.GetURLParameterNaturalCase("focus", "?" + n)), searchFilters.gender = e, Wantering.trigger("state:setFilters", {
          searchterm: t,
          sortOrder: r,
          focusedProduct: s
        }), Wantering.Utils.SetViewClass(Defaults.ViewClasses.searchResults), this.searchProducts && t == this.searchProducts.searchTerm && e == this.searchProducts.searchGender && r == this.searchProducts.sortOrder) o.length > 0 ? setTimeout(function() {
        l.remove()
      }, 100) : (this.searchPage = new Wantering.Page.ProductListView({
        type: "searchResults"
      }), $("#main").html(this.searchPage.render().el)), setTimeout(function() {
        app.searchPage.$el.removeClass("almostInvisible")
      }, 300), Wantering.trigger("state:update", {
        title: app.searchProducts.titledSearchTerm
      });
      else if (this.searchProducts = new Wantering.Module.SearchProducts, this.searchProducts.searchGender = e, this.searchProducts.searchPrice = searchFilters.price, this.searchProducts.sortOrder = searchFilters.sortOrder, this.searchProducts.focusedProduct = searchFilters.focusedProduct, this.searchProducts.searchTerm = t.replace(/'/, ""), this.facets = new Wantering.Module.Facets, this.facets.searchGender = e, this.facets.searchPrice = searchFilters.price, this.facets.sortOrder = searchFilters.sortOrder, this.facets.searchTerm = t, bootstrapData && bootstrapData.searchResults) {
        if (bootstrapData.searchContent && (app.searchProducts.searchContent = bootstrapData.searchContent, bootstrapData.searchContent.brand && bootstrapData.searchContent.brand[0] && bootstrapData.searchContent.brand[0].info)) {
          var u = bootstrapData.searchContent.brand[0];
          u.urlKey = Formatters.FormatSearchForURL(u.label, !0), app.brandContent = new Wantering.Module.Brand(u)
        }
        resultsData = bootstrapData.searchResults, i(resultsData, "fromBootstrap")
      } else {
        var c = {
            cursor: "*",
            rows: Wantering.fetchSize
          },
          p = this;
        this.searchProducts.fetch({
          data: c,
          success: function(e, t) {
            var n = [];
            if (0 === t.hits) {
              var a = app.searchProducts.searchGender;
              app.searchProducts.searchGender = "any", app.searchProducts.fetch({
                async: !1,
                data: c,
                success: function(e, n) {
                  0 !== n.hits ? (t = n, searchFilters.gender = "any") : app.searchProducts.searchGender = a
                }
              }).done(function() {})
            }
            "undefined" != typeof app.searchPage && n.push(app.searchPage), i(t, "fromClient"), n.length > 0 && _.each(n, function(e) {
              p.cleanView(e), e = null
            }), searchFilters.spellcheck = t.parse_info.spellcheck;
            var r = Formatters.GenerateSearchRoute();
            app.navigate(r, {
              trigger: !1,
              replace: !0
            })
          },
          error: function() {}
        })
      }
    }
  },
  similarAll: function(e, t) {
    this.similar("", e, t)
  },
  similarMens: function(e, t) {
    this.similar("mens", e, t)
  },
  similarWomens: function(e, t) {
    this.similar("womens", e, t)
  },
  similar: function(e, t, n) {
    var i, a, r, s, o, l, u;
    this.isComingBackFromCart() || (l = $("#similarItems"), u = $("#productDetail"), $main = $("#main"), searchFilters.gender = e, a = t.replace(/-/gi, " "), i = Formatters.PrettifyString(a), Wantering.trigger("state:setPriceFilter", {
      searchTerm: n
    }), Wantering.trigger("state:update", {
      title: "Similar to " + i
    }), r = searchFilters.price, Wantering.Utils.SetSessionStorageItem("backRoute", Backbone.history.fragment), Wantering.Utils.SetViewClass(Defaults.ViewClasses.similarItems), $("#backToPage").text("Similar Items"), "undefined" == typeof this.similarProducts || null === this.similarProducts || e != this.similarProducts.productGender || n != this.similarProducts.productUrlShortKey || r != this.similarProducts.productPrice ? "undefined" != typeof bootstrapSimilarProducts && null !== bootstrapSimilarProducts ? (this.similarProducts = new Wantering.Module.SimilarProducts(Wantering.Module.SimilarProducts.prototype.parse(bootstrapSimilarProducts), {
      type: "listResults"
    }), this.similarProducts.productGender = e, this.similarProducts.productPrice = r, this.similarProducts.productUrlLink = t, this.similarProducts.productUrlShortKey = n, this.similarProducts.formattedTerm = i, this.similarProductsPage = new Wantering.Page.ProductListView({
      type: "similarItems"
    }), $main.html(this.similarProductsPage.render().el), bootstrapSimilarProducts = null) : (this.similarProducts = new Wantering.Module.SimilarProducts({
      type: "listResults"
    }), this.similarProducts.productGender = e, this.similarProducts.productPrice = r, this.similarProducts.productUrlLink = t, this.similarProducts.productUrlShortKey = n, this.similarProducts.formattedTerm = i, s = {
      fetchStart: 0,
      rows: Wantering.fetchSize
    }, o = this, this.similarProducts.fetch({
      data: s,
      success: function() {
        o.similarProducts.fetchStart = Wantering.fetchSize, o.similarProductsPage = new Wantering.Page.ProductListView({
          type: "similarItems"
        }), $main.html(o.similarProductsPage.render().el)
      }
    })) : l.length > 0 ? (setTimeout(function() {
      u.remove()
    }, 500), l.removeClass("invisible")) : (this.similarProductsPage = new Wantering.Page.ProductListView({
      type: "similarItems"
    }), $main.html(this.similarProductsPage.render().el)))
  },
  trendingForYou: function() {
    app.navigate("/trending/", {
      trigger: !0,
      replace: !0
    })
  },
  brandTimeline: function(e) {
    this.siteTimeline({
      brand: e
    })
  },
  eventTimeline: function(e, t) {
    this.siteTimeline({
      event: e,
      gender: t
    })
  },
  genderTimeline: function(e, t) {
    this.siteTimeline({
      gender: e,
      tag: t
    })
  },
  siteTimeline: function(e) {
    e = e || {};
    var t = bootstrapData && bootstrapData.timeline ? bootstrapData.timeline.data : [];
    if (Wantering.Utils.SetSessionStorageItem("backRoute", Backbone.history.fragment), $("#backToPage").html("Timeline"), Wantering.Utils.SetViewClass(Defaults.ViewClasses.siteTimeline), Wantering.trigger("state:update", {
        title: Defaults.Titles.timeline
      }), Wantering.trigger("search:replace", {
        string: ""
      }), app.siteTimelineView) {
      var n = $("#productDetail");
      n.length && (n.addClass("hide"), app.siteTimelineView.$el.removeClass("almostInvisible"), app.siteTimelineView.initializeScrollMonitor())
    } else app.siteTimelineView = new Wantering.Page.SiteTimelineView({
      collection: new Wantering.Module.SiteTimelineCollection(t, {
        brand: e.brand,
        event: e.event,
        gender: e.gender,
        tag: e.tag
      })
    }), bootstrapData && bootstrapData.timeline && (app.siteTimelineView.collection.options.hits = bootstrapData.timeline.hits)
  },
  recentlyViewed: function() {
    app.recentProducts.fetch({
      success: function() {
        app.recentlyViewedPage = new Wantering.Page.ProductListView({
          type: "recentlyViewed",
          collection: app.recentProducts
        }), $("#main").html(app.recentlyViewedPage.render().el)
      }
    })
  },
  memberSets: function(e) {
    function t(t) {
      var n, i = new Wantering.Module.PreviewWantSets;
      i.profile = t, bootstrapData && bootstrapData.memberProfile ? (n = _.filter(app.user.get("wantSets"), function(e) {
        return e.id < 1e5
      }), i.reset({
        sets: n.concat(bootstrapData.memberProfile.wantSets),
        setMeta: bootstrapData.memberProfile.wantSetMeta
      }, {
        parse: !0
      })) : i.fetch(), app.profileView && app.profileView.options.username != e && app.profileView.close(), app.profileView = new Wantering.Page.ProfileView({
        username: e,
        model: t,
        collection: i,
        el: $("#main")
      })
    }
    app.user.get("uName") == e ? (app.profile = app.user, app.user.get("want").length > 0 && app.profile.set("lovesCount", app.user.get("want").length), app.user.get("wantSets").length > 1 && app.profile.set("wantSetCount", app.user.get("wantSets").length - 1), t(app.profile)) : (app.profile && app.profile.get("uName") == e || (app.profile = new Wantering.Module.Profile({
      uName: e
    })), t(app.profile)), Wantering.Tracker.Event("View Member Sets", "Page View Events", 1), Wantering.Utils.SetViewClass(Defaults.ViewClasses.memberSets)
  },
  memberLoves: function(e, t, n) {
    function i(e) {
      return app.memberLovesPage && app.memberLovesPage.close(), app.memberLovesPage = new Wantering.Page.ProductListView({
        type: c,
        profile: e
      }), n && !s ? (app.memberLovesProducts.reset([]), a(c, e), void 0) : (n && s && (app.wantSet = r), app.memberLovesProducts.fetch({
        data: {
          start: 0,
          rows: Wantering.fetchSize
        }
      }).done(function() {
        a(c, e)
      }).fail(function() {
        a(c, e)
      }), void 0)
    }

    function a() {
      $("#main").html(app.memberLovesPage.render().el)
    }
    if (!this.isComingBackFromCart()) {
      var r, s, o, l = $("#memberLoves, #otherMemberLoves"),
        u = $("#productDetail"),
        c = e === app.user.get("uName") ? "memberLoves" : "otherMemberLoves",
        p = Defaults.ViewClasses.memberLoves,
        d = new Wantering.Module.Profile({
          uName: e
        });
      n ? (Wantering.Tracker.Event("View Set Items", "Page View Events", 1), p = "viewSetLoves", "wishlist" == t && (p += " viewWishList")) : (app.wantSet = null, Wantering.Tracker.Event("View Member Loves", "Page View Events", 1)), Wantering.Utils.SetSessionStorageItem("backRoute", Backbone.history.fragment);
      var h = d.get("nameFirst") || d.get("uName");
      if (Wantering.trigger("state:update", {
          title: h + "'s " + Defaults.Titles.memberLoves
        }), $("#backToPage").text(h + "'s Loves"), this.memberLovesProducts && l.length || (this.memberLovesProducts = new Wantering.Module.MemberLovesProducts), bootstrapData && bootstrapData.memberLoves) d.set(bootstrapData.memberProfile), app.memberLovesProducts.reset(bootstrapData.memberLoves, {
        parse: !0
      }), app.memberLovesProducts.username = e, app.wantSet = new Wantering.Module.WantSet(bootstrapData.wantSet, {
        parse: !0
      }), n && (app.memberLovesProducts.setid = app.wantSet.id), app.memberLovesPage = new Wantering.Page.ProductListView({
        type: c,
        profile: d,
        el: l
      });
      else {
        if (e === app.user.get("uName") ? (d.set("nameFirst", app.user.get("nameFirst")), d.set("nameLast", app.user.get("nameLast")), d.set("profileImage", app.user.get("picture")), d.set("currentUser", !0), r = app.wantSets.find(function(e) {
            return e.id.toString() == n
          }), s = r ? r.id : void 0) : (d.set("currentUser", !1), d.fetch({
            async: !1
          }).done(function() {}), o = new Wantering.Module.PreviewWantSets, o.profile = d, o.fetch({
            async: !1
          }).done(function() {}), r = o.find(function(e) {
            return e.id.toString() == n
          }), s = r ? r.id : void 0), app.memberLovesProducts.length && app.memberLovesProducts.wantSet == r) setTimeout(function() {
          u.remove()
        }, 500), l.removeClass("invisible"), l.removeClass("almostInvisible");
        else {
          if (this.memberLovesProducts.setid = r ? r.id : void 0, this.memberLovesProducts.wantSet = r, this.memberLovesProducts.username = d.get("uName"), !n && app.wantSets) {
            var _ = app.wantSets.find(function(e) {
              return e.get("link") == t
            });
            if (_) return app.navigate("/member/" + e + "/collections/" + t + "/" + _.id + "/", {
              trigger: !0
            }), void 0
          }
          i(d)
        }
        Wantering.Utils.SetViewClass(p)
      }
    }
  },
  validateEmail: function() {
    var e = bootstrapData.message;
    e.error ? Wantering.trigger("popup:open", {
      type: "message",
      title: "Whoops!",
      message: e.error
    }) : e.success && Wantering.trigger("popup:open", {
      type: "message",
      title: "Thanks!",
      message: e.success,
      pathname: "/"
    }), this.cleanStart()
  },
  forgotPassword: function() {
    return app.user.attributes.isAuthenticated ? (this.cleanStart(), void 0) : (Wantering.trigger("popup:open", {
      type: "forgotPassword",
      pathname: "/"
    }), void 0)
  },
  resetPassword: function() {
    if (app.user.attributes.isAuthenticated) return this.cleanStart(), void 0;
    var e = document.location.search.replace(/\?token=/, "").split("&")[0];
    e && "" !== e ? Wantering.trigger("popup:open", {
      type: "resetPassword",
      pathname: "/"
    }) : this.cleanStart()
  },
  changePassword: function() {
    app.user.attributes.isAuthenticated ? Wantering.trigger("popup:open", {
      type: "changePassword",
      pathname: "/"
    }) : this.cleanStart()
  },
  activateStaffCookie: function() {
    Wantering.trigger("message:show", {
      keepOpenOnNavigate: !0,
      message: "Feature preview is now enabled."
    }), setTimeout(function() {
      app.navigate("/", {
        trigger: !0
      })
    }, 5e3)
  },
  clearStaffCookie: function() {
    Wantering.trigger("message:show", {
      keepOpenOnNavigate: !0,
      message: "Feature preview is now disabled."
    }), setTimeout(function() {
      app.navigate("/", {
        trigger: !0
      })
    }, 5e3)
  },
  login: function() {
    return app.user.attributes.isAuthenticated ? (this.cleanStart(), void 0) : (Wantering.trigger("popup:open", {
      type: "login",
      pathname: "/"
    }), setTimeout(function() {
      document.location.search.match(/failed=true/) && Wantering.trigger("message:show", {
        type: "error",
        timeout: !1,
        keepOpenOnNavigate: !0,
        message: "There was a problem with your login. Either your password or username was incorrect."
      })
    }, 500), void 0)
  },
  signup: function() {
    return app.user.attributes.isAuthenticated ? (this.cleanStart(), void 0) : (Wantering.trigger("popup:open", {
      type: "SignUp",
      pathname: "/",
      trackRetention: !0
    }), void 0)
  },
  newsletter: function() {
    return app.user.attributes.isAuthenticated || !Wantering.Actions.CheckTipComplete("popNewsletterSignUp") ? (this.cleanStart(), void 0) : (Wantering.trigger("popup:open", {
      type: "NewsletterSignUp",
      trackRetention: !0,
      pathname: "/",
      hasTipSibling: !0,
      autofocus: !0
    }), void 0)
  },
  trending: function(e) {
    function t(e) {
      var t = {
        cursor: "*",
        rows: Wantering.fetchSize
      };
      app.trendingPage && app.trendingPage.close();
      app.trendingProducts.fetch({
        data: t,
        success: function() {
          app.trendingPage = new Wantering.Page.ProductListView(e), $("#main").html(app.trendingPage.render().el)
        }
      })
    }
    if (!this.isComingBackFromCart()) {
      {
        var n = {},
          i = $("#trending"),
          a = $("#productDetail");
        $("#main")
      }
      n.type = "trending", n.gender = e ? e : searchFilters.gender, Wantering.Utils.SetSessionStorageItem("backRoute", Backbone.history.fragment), Wantering.Utils.SetViewClass(Defaults.ViewClasses.trending), Wantering.trigger("state:update", {
        title: Defaults.Titles.trending
      }), $("#backToPage").text("Trending"), "undefined" == typeof this.trendingProducts || null === this.trendingProducts || this.trendingProducts.options.gender != n.gender ? "undefined" != typeof bootstrapTrending && null !== bootstrapTrending ? (this.trendingProducts = new Wantering.Module.TrendingProducts(Wantering.Module.TrendingProducts.prototype.parse(bootstrapTrending), viewsOptions), this.trendingPage = new Wantering.Page.ProductListView(n), $("#main").html(this.trendingPage.render().el), bootstrapTrending = null) : (this.trendingProducts = new Wantering.Module.TrendingProducts(n), t(n)) : (n.gender != this.trendingProducts.options.gender && (this.trendingProducts.options.gender = n.gender, t(n)), i.length > 0 ? (setTimeout(function() {
        a.remove()
      }, 500), i.removeClass("invisible")) : (app.trendingPage && app.trendingPage.close(), this.trendingPage = new Wantering.Page.ProductListView(n), $("#main").html(this.trendingPage.render().el)))
    }
  },
  oldProduct: function(e) {
    var t = /^\d+$/;
    t.test(e) ? this.legacyProductUrl(e) : this.product("oldProduct", e)
  },
  product: function(e, t) {
    function n() {
      if (this.productDetail && this.productDetail.get("short_key")) {
        var e = this;
        this.productDetail = new Wantering.Page.ProductDetail({
          id: t
        }), this.productDetail.fetch({
          success: function() {
            e.cleanView(e.productDetailView), r.remove(), e.productDetailView = new Wantering.Page.ProductDetailView({
              model: e.productDetail,
              type: "overList",
              userProvider: a
            }), i.append(e.productDetailView.render().el), e.productDetailView.renderSimilarList()
          }
        })
      }
    }
    if (!this.isComingBackFromCart()) {
      var i = $("#main");
      setTimeout(function() {
        Wantering.Utils.SetSessionStorageItem("productRoute", Backbone.history.fragment)
      }, 500);
      var a = app.user.get("provider"),
        r = $("#productDetail");
      if (!r.length && "undefined" == typeof this.productDetail) {
        var s = this;
        return this.productDetail = new Wantering.Page.ProductDetail({
          id: t
        }), this.productDetail.fetch({
          success: function() {
            s.productDetailView = new Wantering.Page.ProductDetailView({
              model: s.productDetail,
              type: "overList",
              userProvider: a
            }), i.append(s.productDetailView.render().el), s.productDetailView.renderSimilarList()
          }
        }), void 0
      }
      if ("undefined" == typeof this.productDetail || null === this.productDetail)
        if (bootstrapData && "undefined" != typeof bootstrapData.productInfo && null !== bootstrapData.productInfo) {
          var o = bootstrapData.productInfo.docs[0],
            l = bootstrapData.similarProducts;
          o.product_wanted = "undefined" != typeof app.wantShortKeys && app.wantShortKeys.get(o.short_key) ? !0 : !1, r.find(".productActions").removeClass("invisible"), this.productDetail = new Wantering.Page.ProductDetail(o), this.productDetailView = new Wantering.Page.ProductDetailView({
            el: r,
            model: this.productDetail,
            type: "fromBootstrap",
            similarProducts: l,
            userProvider: a
          })
        } else Wantering.Utils.SetViewClass(Defaults.ViewClasses.productDetail), n.call(this);
      else if ("fromSimilarLanding" != this.productDetailView.options.type) Wantering.Utils.SetViewClass(Defaults.ViewClasses.productDetail), t != this.productDetail.attributes.short_key ? n.call(this) : ($("#main").append(this.productDetailView.render().el), this.productDetailView.delegateEvents(), $(this.productDetailView.el).removeClass("viewProductLanding hasFooter almostInvisible hide"), this.productDetailView.renderSimilarList());
      else {
        if (t != this.productDetail.attributes.short_key) {
          var u = app.similarToProducts.find(function(e) {
            return e.attributes.short_key == t
          });
          if ($(".productSimilarLandingProducts .selected").removeClass("selected"), !u) return this.productDetail.set("id", t), this.productDetail.fetch({
            context: this
          }).done(function() {
            this.productDetailView.render()
          }), void 0;
          this.productDetail.clear({
            silent: !0
          }), this.productDetail.set(u.toJSON()), (screenSize.isSmartPhone || screenSize.isSmallScreen) && Wantering.Utils.ResetScroll()
        }
        this.productDetailView.render()
      }
    }
  },
  legacyProductUrl: function(e) {
    $.ajax({
      type: "GET",
      url: "/api/getredirecthash/?want_id=" + e,
      success: function(e) {
        $.ajax({
          type: "GET",
          url: "/api/product/" + e.redirect_hash + "/",
          success: function(e) {
            var t = e.docs[0],
              n = Formatters.GenerateProductRoute(t);
            window.location.href = n
          }
        })
      },
      error: function() {
        this.cleanStart()
      }
    })
  },
  buy: function(e, t) {
    if (Wantering.Authentication.OK && app.user.get("isShopper")) {
      if (Wantering.Tracker.Event("View Checkout", "Page View Events", 1), bootstrapData && !app.checkoutView && bootstrapData && "undefined" != typeof bootstrapData.productInfo && null !== bootstrapData.productInfo) {
        var n = $("#productDetail"),
          i = app.user.get("provider"),
          a = bootstrapData.productInfo.docs[0];
        app.checkoutView = new Wantering.Module.CheckoutView(a, {
          short_key: t,
          location: "ProductDetail",
          backURL: "/" + e + "/" + t + "/"
        });
        var r = bootstrapData.similarProducts;
        a.product_wanted = "undefined" != typeof app.wantShortKeys && app.wantShortKeys.get(a.short_key) ? !0 : !1, this.productDetail = new Wantering.Page.ProductDetail(a), this.productDetailView = new Wantering.Page.ProductDetailView({
          el: n,
          model: this.productDetail,
          type: "fromBootstrap",
          similarProducts: r,
          userProvider: i
        })
      }
      return !0
    }
  },
  isComingBackFromCart: function() {
    return app.checkoutView && app.checkoutView.options.open ? (app.checkoutView.hideCheckout(), !0) : !1
  },
  browseTags: function(e) {
    var t = Defaults.Titles.browseTags;
    e && (t += " / " + Wantering.Mixin.Tags.getTitle.call(Wantering.Mixin.Tags, e)), Wantering.Utils.SetSessionStorageItem("backRoute", Backbone.history.fragment), $("#backToPage").html("Browse"), Wantering.Utils.SetViewClass(Defaults.ViewClasses.browseTags), Wantering.trigger("state:update", {
      title: t
    }), Wantering.trigger("search:replace", {
      string: ""
    }), bootstrapData && bootstrapData.tags ? (app.tagList = new Wantering.Module.TypedTagsCollection(bootstrapData.tags), app.tagListView = new Wantering.Page.TagListView({
      collection: app.tagList
    })) : (app.tagList || (app.tagList = new Wantering.Module.TypedTagsCollection), app.tagListView || (app.tagListView = new Wantering.Page.TagListView({
      collection: app.tagList
    })), app.tagListView.options.tagType = e, app.tagListView.render()), this.currentView && this.cleanView(this.currentView), Wantering.Tracker.Event("View Browse", "Page View Events", 1)
  },
  cleanView: function(e) {
    "undefined" != typeof e && (Wantering.Utils.CloseViews(e), this.currentView = null)
  },
  cleanStart: function() {
    setTimeout(function() {
      app.navigate("/", {
        trigger: !0,
        replace: !0
      })
    }, 0)
  }
}), Wantering.App.Start = function() {
  function e(e) {
    var t = e.serializeArray(),
      n = {};
    return $.map(t, function(e) {
      n[e.name] = e.value
    }), n
  }

  function t() {
    $.getJSON("/api/user/details/get/payment/", function(e) {
      console.log(e), e && e.cards && $("#stripeSource").val(e.cards[0].id)
    })
  }
  app = new Wantering.App.Router, app.messenger = new Wantering.Module.Messenger({
    pubsub: Wantering
  }), app.alertPopup = new Wantering.Module.PopupAlertView({
    pubsub: Wantering
  }), app.setsPopup || (app.setsPopup = new Wantering.Module.SetsPopupView({
    pubsub: Wantering
  })), app.state = new Wantering.App.State, app.state.on("change", function() {
    app.state.hasChanged("path") && app.state.fireAnalytics()
  }), app.user = new Wantering.App.User(bootstrapData.userInfo), app.user.verify(), app.wantSets = app.user.get("wantSets") ? new Wantering.Module.WantSets(app.user.get("wantSets")) : null;
  var n = $("#header");
  new Wantering.Module.TopBarView({
    el: n
  }), bootstrapData.trendingSummary && (app.trendingSummary = new Wantering.Module.TrendingSummary(bootstrapData.trendingSummary)), bootstrapData.featuredTags && (app.featuredTags = bootstrapData.featuredTags), app.recentProducts = new Wantering.Module.RecentProductsCollection;
  var i = !0,
    a = !!(i && window.history && window.history.pushState);
  if (Backbone.history.start({
      pushState: a
    }), !screenSize.isSmartPhone) {
    var r = $("#navHelpers");
    new Wantering.Actions.NavHelpersView({
      el: r
    }), r.removeClass("hide")
  }
  $(document).on("click", "a:not([data-bypass])", function(e) {
    var t = $(this).attr("href"),
      n = this.protocol + "//",
      i = "/" + Backbone.history.fragment;
    if ($(e.target).hasClass("subNavAction")) {
      var a = $(e.target) ? $(e.target).text() : "";
      a = "Trending" == a || "New Arrivals" == a ? " " : a, Wantering.trigger("search:replace", {
        string: a.toLowerCase()
      })
    }
    t.slice(0, n.length) !== n && (e.preventDefault(), void 0 == $(this).attr("data-noscroll") && Wantering.Utils.TransitionView(i, t), app.navigate(t, {
      trigger: !0
    }))
  }), Wantering.Actions.CheckTipComplete("popClique") && Wantering.trigger("popup:open", {
    type: "Clique"
  }), Wantering.Utils.CheckStorageVersion(), bootstrapData = null, $("body").on("submit", ".dummyForm", function(n) {
    n.preventDefault();
    var i = $(this),
      a = $("#shippingForm"),
      r = i.attr("action");
    console.log(i);
    var s = e(i);
    s.shippingAddress = e(a), $.post(r, s, function(e) {
      e.tid ? (console.log(e.tid), $("#tid").val(e.tid), t()) : e.result && "success" == e.result && alert("Success"), console.log(e)
    })
  })
}, Wantering.App.State = Backbone.Model.extend({
  initialize: function() {
    this.set("title", document.title), this.set("path", this.getPath()), this.set("url", document.location.href), this.fireAnalytics(), this.set("searchFilters", {
      keyword: "",
      filters: "",
      gender: "any",
      price: "any",
      color: "any",
      sale: "any",
      newFilter: "any",
      sortOrder: "default"
    }), Wantering.on("state:update", this.update, this), Wantering.on("state:results", this.adjustSearchField, this), Wantering.on("state:setFilters", this.setFilters, this), Wantering.on("state:setPriceFilter", function(e) {
      searchFilters.price = this.setSearchPriceFilter(e.searchTerm)
    }, this)
  },
  update: function(e) {
    e.title && (e.title = this.getTitle(e.title)), e.path || (e.path = this.getPath()), e.url || (e.url = document.location.href), this.set(e), document.title = this.get("title"), this.set("searchFilters", searchFilters)
  },
  setRoute: function() {
    var e = Formatters.GenerateSearchRoute();
    return this.set("path", "/" + e), e
  },
  updateSearchField: function() {
    Wantering.trigger("search:replace", {
      string: this.setSearchTerm()
    })
  },
  adjustSearchField: function(e) {
    var t = e.parse_info,
      n = t && t.search ? t.search.text : "";
    t && t.spellcheck && (n = Formatters.UpdateMisspelledWords(n, t.search.text, t.spellcheck.collation)), searchFilters.keyword = n, this.set("searchFilters", searchFilters), this.setSearchKeywordFilter(e), Wantering.trigger("search:update", {
      string: this.setSearchTerm()
    })
  },
  parseFiltersFromURL: function(e) {
    var t = [];
    e && (e = e.split("?", 1)[0], t = e.split("/")), t.splice(0, 2);
    var n = t.splice(0, 1),
      i = t.reduce(function(e, t) {
        var n = new RegExp("price", "i");
        return n.test(i) || (e += " " + t), e
      }, "");
    n = n.reduce(function(e, t) {
      var n = new RegExp(t, "i");
      return n.test(i) || (e += " " + t), e
    }, ""), searchFilters.keyword = n, searchFilters.filters = i
  },
  setSearchTerm: function() {
    var e, t = ("any" != searchFilters.newFilter ? "new " + searchFilters.newFilter : "", searchFilters.filters.split("/")),
      n = "",
      i = "",
      a = "";
    return t.forEach(function(e) {
      return e.match(/tag/) ? (i += e + "/", void 0) : e.match(/cat/) ? (a += e + "/", void 0) : (n += e + "/", void 0)
    }), e = [searchFilters.color, n, i, a, searchFilters.keyword, searchFilters.sale, searchFilters.price].reduce(function(e, t) {
      return t && "" != t && "any" != t && (e += " " + t), e
    }, ""), e = Formatters.StripTagTypes(e), e = e.toLowerCase().replace(/(\/|\:)/g, "").replace(/(\+|cat-|hashtag-|tag-|store-|brand-)\-?/gi, " ").replace(/  /g, " "), e = Formatters.SearchTermModifier(e), e = e.replace(/  /g, " ").trim(), e = this.removeDuplicates(e)
  },
  removeDuplicates: function(e) {
    return e.split(" ").reverse().reduce(function(e, t) {
      var n = new RegExp(t, "i");
      return "" == e ? t : e.match(n) ? e : t + " " + e
    }, "")
  },
  setFilters: function(e) {
    searchFilters.price = this.setSearchPriceFilter(e.searchterm), searchFilters.color = this.setSearchColorFilter(e.searchterm).color, searchFilters.hex = this.setSearchColorFilter(e.searchterm).hex, searchFilters.sale = this.setSearchSaleFilter(e.searchterm), searchFilters.newFilter = this.setSearchNewFilter(e.searchterm), searchFilters.sortOrder = this.setSearchSort(e.sortOrder), searchFilters.focusedProduct = e.focusedProduct, this.set("searchFilters", searchFilters)
  },
  fireAnalytics: function() {
    analytics.page({
      url: this.get("url"),
      path: this.get("path"),
      title: this.get("title")
    })
  },
  getPath: function() {
    var e;
    return e = history.pushState ? document.location.pathname + document.location.search : document.location.hash.replace(/#/, "/")
  },
  setSearchPriceFilter: function(e) {
    var t;
    return e.match(/price-([\s\-\w\+]+)/g) && (e = e.match(/price-([\s\-\w\+]+)/g), e = e && e[0] ? e[0] : ""), e = e.replace(/\$/, ""), t = e.indexOf("between") >= 0 ? "between" + e.split("between")[1].replace(/\+/g, " ").replace(/\//, "") : e.indexOf("over") >= 0 ? "over" + e.split("over")[1].replace(/\+/g, " ").replace(/\//, "") : e.indexOf("under") >= 0 && !e.match(/under[\w]+/) ? "under" + e.split("under")[1].replace(/\+/g, " ").replace(/\//, "") : e.indexOf("above") >= 0 ? "above" + e.split("above")[1].replace(/\+/g, " ").replace(/\//, "") : e.indexOf("below") >= 0 ? "below" + e.split("below")[1].replace(/\+/g, " ").replace(/\//, "") : "any", setTimeout(function() {
      Wantering.trigger("price:set", {
        price: t
      })
    }, 1), t
  },
  setSearchColorFilter: function(e) {
    var t, n;
    return e.indexOf("color-") >= 0 ? (t = e.match(/color-(.*?)\//)[1], n = "any") : e.indexOf("hex-") >= 0 ? (t = "any", n = e.match(/hex-(.*?)\//)[1]) : (t = "any", n = "any"), {
      color: t,
      hex: n
    }
  },
  setSearchSaleFilter: function(e) {
    var t;
    return t = e.indexOf("on_sale-") >= 0 ? "on sale" : "any"
  },
  setSearchNewFilter: function(e) {
    var t;
    return t = e.indexOf("new-") >= 0 ? e.indexOf("new-in+the+last+week") >= 0 ? "in the last week" : "in the last day" : "any"
  },
  setSearchKeywordFilter: function(e) {
    if (null !== e.parse_info.filters) {
      var t = "";
      _.each(e.parse_info.filters, function(e) {
        "on_sale" === e.key ? searchFilters.sale = "on sale" : "new" === e.key ? searchFilters.newFilter = e.value.replace(/\+/g, " ") : t += e.key + "-" + e.value + "/"
      }), searchFilters.filters = t
    }
  },
  setSearchSort: function(e) {
    return Defaults.SortOptions.hasOwnProperty(e) || (e = "default"), e
  },
  getTitle: function(e) {
    return $("<div/>").html(e).text().trim()
  }
}), Wantering.Authentication = {
  OK: !1,
  Login: function() {
    return Wantering.trigger("popup:open", {
      type: "login"
    }), !1
  },
  Logout: function() {
    app.fbFriends = null, Wantering.Utils.RemoveSessionStorageItem("fbFriends"), $.ajax({
      type: "POST",
      url: "/api/user/logout/",
      success: function() {
        Wantering.Utils.StartOver()
      },
      error: function() {
        Wantering.trigger("message:show", {
          type: "error",
          message: "There were problems logging out. Please try again."
        })
      }
    })
  }
};
var Defaults = {
  Titles: {
    home: "Wantering / Shop What's Trending",
    about: "About Wantering",
    article: " on Wantering",
    brands: "Brands on Wantering",
    stores: "Stores on Wantering",
    careers: "Careers at Wantering",
    contact: "Contact Us at Wantering",
    director: "Director of Sales at Wantering",
    invite: "Invite Friends to Wantering",
    memberLoves: "Loves on Wantering",
    notfound: "Not Found on Wantering",
    privacy: "Wantering Privacy Policy",
    settings: "Manage Your Settings on Wantering",
    terms: "Wantering Terms of Service",
    trending: "Trending on Wantering",
    onboardLanding: "My Dream Bag Contest with thecorner.com",
    browseTags: "Browse Wantering",
    timeline: "Wantering Product Timeline"
  },
  ViewClasses: {
    home: "viewHome hasFooter",
    article: "viewArticle hasFooter",
    articleListing: "viewArticleListing",
    landing: "viewLanding",
    brands: "viewBrands viewGroup hasFooter",
    stores: "viewStores viewGroup hasFooter",
    invite: "viewInvite hasFooter",
    memberLoves: "viewMemberLoves",
    memberSets: "viewMemberSets hasFooter",
    settings: "viewSettings hasFooter",
    trending: "viewTrending",
    onboardLanding: "viewOnboardLanding hasFooter",
    searchResults: "viewSearchResults hasFilters",
    similarItems: "viewSimilarItems",
    productDetail: "viewProductDetail hasOverlay",
    productDetailLanding: "viewProductDetail viewProductLanding hasFooter",
    siteTimeline: "viewSiteTimeline",
    browseTags: "viewBrowseTags",
    about: "viewAbout viewContent hasFooter",
    careers: "viewCareers viewContent hasFooter",
    contact: "viewContact viewContent hasFooter",
    terms: "viewTerms viewContent hasFooter",
    privacy: "viewPrivacy viewContent hasFooter",
    myDreamBagRules: "viewContent"
  },
  RootSearches: {
    "/clothing/": 2274719,
    "/mens-clothing/": 673916,
    "/womens-clothing/": 1665469
  },
  HomePageSetOrder: ["masthead", "tags", "brands", "inspiration", "advice"],
  LandingPageTitles: {
    advice: "Style Advice",
    celebrity: "Celebrity Style",
    inspiration: "Find Your Inspiration",
    insiders: "Wantering Insiders",
    trends: "Trends",
    brands: "Trending Brands",
    tags: "Trending Searches"
  },
  LandingPageDesc: {
    advice: "This is your go-to style guide with tips and advice on how to wear the hottest trends in fashion.",
    celebrity: "Who's your style icon? Get inspired and upgrade your wardrobe with closets inspired by these fashion game-changers.",
    inspiration: "Whether it's a special occasion or tips on how to wear a trend, we've got you covered with these curated style guides.",
    insiders: 'What are your favorite style bloggers wearing? See the best street style from our Wantering Insider Network. Learn how to <a href="http://insiders.wantering.com/" target="_blank">join WIN here</a>.',
    trends: "Curious about what this season's fashion trends are? Keep up with with what's new and what's back in style.",
    brands: "Looking for your favorite designer? Check out these trending brands."
  },
  PageTitles: {
    brands: "Brands",
    stores: "Stores",
    categories: "Categories"
  },
  PageDesc: {
    brands: "Looking for your favorite designer? Check out our list of trending brands, or browse by letter to access the label you're looking for.",
    stores: "Want to shop your favorite store? Check out our list of trending stores, or browse by letter to find the retailer you're looking for.",
    categories: "Category desc",
    onboardLanding: "Enter to win Burberry London's Little Crush Bag (priced at $750)"
  },
  SortOptions: {
    "default": "Popularity",
    "price-asc": "Lowest Price",
    "price-desc": "Highest Price",
    "new": "Newest"
  },
  ArticleTypes: [{
    name: "Advice",
    slug: "advice"
  }, {
    name: "Celebrity",
    slug: "celebrity"
  }, {
    name: "Inspiration",
    slug: "inspiration"
  }, {
    name: "Insiders",
    slug: "insiders"
  }, {
    name: "Trends",
    slug: "trends"
  }, {
    name: "Tumblr Only",
    slug: "tumblr"
  }],
  OnboardLandingPage: ["my-dream-bag"]
};
"undefined" != typeof module && (module.exports = Defaults), Wantering.Tracker.Event = function(e, t, n, i) {
  var a, r, s, o, l, u, c, p, d, h;
  p = !1, d = !1, "undefined" == typeof n && (n = 0), "undefined" != typeof i && (a = i.short_key, i.brand_name && (s = i.brand_name), i.store_names[0] && (o = i.store_names[0]), h = i.coupon_expiry ? "true" : "false", u = i.sale_price ? "sale" : i.isNew ? "new" : "regular", i.sale_price ? c = i.sale_price : i.price && (c = i.price), i.gender && (r = "m" === i.gender ? "mens" : "f" === i.gender ? "womens" : "neutral"), l = i.price_bucket), analytics && (analytics.track(e, {
    url: window.location.href,
    path: "/" + Backbone.history.fragment,
    category: t,
    nonInteraction: n,
    shortKey: a,
    brand: s,
    store: o,
    gender: r,
    activePrice: c,
    priceBucket: l,
    hasCoupon: h,
    productState: u
  }), "Rotate Carousel" == e && analytics.page(t, e)), e = null, t = null, n = null, i = null
}, Wantering.Tracker.Search = function(e, t) {
  analytics && analytics.track(e, {
    url: window.location.href,
    path: "/" + Backbone.history.fragment,
    category: "Search",
    label: t,
    keyword: searchFilters.keyword,
    gender: searchFilters.gender
  }), e = null
}, Wantering.Tracker.Retention = function(e, t, n) {
  if (analytics) {
    var i = 0;
    e.toLowerCase().indexOf("view") >= 0 && (i = 1), analytics.track(e, {
      url: window.location.href,
      path: "/" + Backbone.history.fragment,
      category: "Retention",
      nonInteraction: i,
      location: t,
      label: n,
      tip: n
    })
  }
  trackTarget = null
}, Wantering.Utils.OpenMenu = function(e, t, n) {
  if (e.hasClass("selected")) e.removeClass("selected");
  else {
    var i = t.find(".navItem");
    Wantering.Utils.CloseMenu(i), e.addClass("selected"), n && $(document).one("click", function() {
      i.removeClass("selected")
    })
  }
}, Wantering.Utils.CloseMenu = function(e) {
  e.removeClass("selected")
}, Wantering.Utils.SetViewClass = function(e) {
  $("#header").removeClass("viewHome viewLanding viewArticle viewArticleListing viewAbout viewCareers viewContact viewPrivacy viewTerms viewContent viewInvite viewOnboardLanding viewTellYourStyle viewSettings viewSearchResults viewProductDetail viewProductLanding viewUser viewMemberLoves viewMemberSets viewSetLoves viewWishList viewUserLoves viewTrending viewSimilarItems viewGroup viewBrands viewStores viewQuizLanding viewQuizQuestions viewQuizComplete viewSiteTimeline viewBrowseTags viewQuizJoin searchOpen hasOverlay hasFilters hasMenu hasFooter").addClass(e)
}, Wantering.Utils.StartOver = function() {
  window.location.href = "/"
}, Wantering.Utils.TransitionView = function(e, t) {
  function n(e) {
    window.transitionTimer = setTimeout(function() {
      i.removeClass("almostInvisible")
    }, e)
  } {
    var i = $("#main").find("section");
    "/" + Wantering.Utils.GetSessionStorageItem("backRoute")
  }
  i.addClass("almostInvisible"), Wantering.Utils.ResetScroll(), (e == t || e == "/" + t) && n(800)
}, Wantering.Utils.RemoveTransitionView = function() {
  var e = $("#main").find("section");
  e.removeClass("almostInvisible")
}, Wantering.Utils.CloseViews = function(e) {
  return _.each(e.childViews, function(e) {
    e.close ? e.close() : (e.remove(), e = null)
  }), e.remove(), e = null
}, Wantering.Utils.ViewError = function(e) {
  500 == e ? window.location.href = "/static/500.html" : 404 == e && (window.location.href = "/static/404.html"), e = null
}, Wantering.Utils.StorageVersion = "0.0.4", Wantering.Utils.CheckStorageVersion = function() {
  var e = Wantering.Utils.StorageVersion,
    t = Wantering.Utils.GetLocalStorageItem("version");
  t != e && (Wantering.Utils.ClearLocalStorage(), Wantering.Utils.SetLocalStorageItem("version", e))
}, Wantering.Utils.SetLocalStorageItem = function(e, t) {
  window.localStorage.setItem(e, t)
}, Wantering.Utils.GetLocalStorageItem = function(e) {
  var t = window.localStorage.getItem(e);
  return t
}, Wantering.Utils.RemoveLocalStorageItem = function(e) {
  window.localStorage.removeItem(e)
}, Wantering.Utils.ClearLocalStorage = function() {
  window.localStorage.clear()
}, Wantering.Utils.SetSessionStorageItem = function(e, t) {
  window.sessionStorage.setItem(e, t)
}, Wantering.Utils.GetSessionStorageItem = function(e) {
  var t = window.sessionStorage.getItem(e);
  return t
}, Wantering.Utils.RemoveSessionStorageItem = function(e) {
  window.sessionStorage.removeItem(e)
}, Wantering.Utils.ReadCookie = function(e) {
  e += "=";
  for (var t = document.cookie.split(/;\s*/), n = t.length - 1; n >= 0; n--)
    if (!t[n].indexOf(e)) return t[n].replace(e, "")
}, Wantering.Utils.ResetScroll = function() {
  setTimeout(function() {
    $("#bodyWrap").scrollTop(0), window.scrollTo(0, 0)
  }, 0)
}, Wantering.Utils.ScrollToSelected = function(e) {
  if (!screenSize.isMobile && e.length > 0) {
    var t = $(window),
      n = t.scrollTop(),
      i = t.height(),
      a = e.position().top,
      r = e.height();
    if (a + r / 2 > n + .8 * i) {
      var s = a + r / 2 - i / 2;
      setTimeout(function() {
        t.scrollTop(s)
      }, 0)
    }
  }
}, Wantering.Utils.ScrollMonitor = function(e) {
  function t(e) {
    Wantering.Utils.DestroyScrollMonitor(), e.one("scroll", function() {
      Wantering.Utils.ScrollMonitor(Wantering.App.CurrentRoute)
    })
  } {
    var n, i, a, r, s, o, l, u, c = $("#backToTop"),
      p = !1,
      d = !1,
      h = !1,
      _ = !1,
      m = !1,
      f = !1;
    Backbone.history.fragment
  }
  n = screenSize.isMobile ? 1400 : 1e3, r = screenSize.isMobile ? $("#bodyWrap") : $(window), "search" == e ? m = !0 : "similar" == e ? f = !0 : "memberLoves" == e ? d = !0 : "otherMemberLoves" == e ? d = !0 : "trending" == e ? h = !0 : "feature" == e && (_ = !0), $(".listProduct.selected").removeClass("selected"), window.scrollTimer = setTimeout(function() {
    var e;
    return u = r.height(), s = $("#bodyWrap").find(".products"), e = s.find(".product").length / Wantering.fetchSize, 0 == s.length ? (Wantering.Utils.DestroyScrollMonitor(), void 0) : (o = s.position().top, l = s.outerHeight(), i = l + o, r.on("scroll", function() {
      Wantering.didScroll = !0, screenSize.isMobile || (clearTimeout(window.hoverTimer), s.addClass("hoverDisabled"), window.hoverTimer = setTimeout(function() {
        s.removeClass("hoverDisabled"), Wantering.didScroll = !1
      }, 350))
    }), window.scrollWatcher = setInterval(function() {
      function e(t) {
        function n(e, t) {
          return 0 == t.docs.length ? (p = !1, void 0) : (!screenSize.isSmartPhone && c.hasClass("invisible") && c.removeClass("invisible"), e.fetchStart && (e.fetchStart = e.fetchStart + Wantering.fetchSize), setTimeout(function() {
            if (analytics) {
              var t = "";
              e.prevCursorMark && (t = "?cursor=" + encodeURIComponent(e.prevCursorMark)), Wantering.trigger("state:update", {
                path: document.location.pathname + t
              })
            }
          }, 0), setTimeout(function() {
            l = s.outerHeight(), i = l + o, Wantering.didScroll = !1, p = !1
          }, 200), void 0)
        }
        var r = t.hits,
          u = t.nextCursorMark,
          d = t.prevCursorMark,
          h = (t.username, t.fetchStart);
        u && u != d || r > h ? (a = u ? {
          cursor: encodeURIComponent(u),
          rows: Wantering.fetchSize
        } : {
          start: h,
          rows: Wantering.fetchSize
        }, t.beforeFetchCount = t.length, t.fetch({
          remove: !1,
          data: a,
          timeout: 15e3,
          success: n
        }).error(function(n) {
          "timeout" != n.statusText || g > 3 || (g++, e(t))
        })) : (p = !1, Wantering.didScroll = !1, Wantering.Utils.DestroyScrollMonitor())
      }
      var t, _, g = 0;
      Wantering.didScroll && !p && (t = r.scrollTop(), _ = t + u, Wantering.Utils.HidePagesInScroll(t, u), n > i - _ ? (p = !0, m && "undefined" != typeof app.searchProducts ? e(app.searchProducts) : f && "undefined" != typeof app.similarProducts ? e(app.similarProducts) : h && "undefined" != typeof app.trendingProducts ? e(app.trendingProducts) : d && "undefined" != typeof app.memberLovesProducts && e(app.memberLovesProducts)) : Wantering.didScroll = !1)
    }, 225), void 0)
  }, 2e3);
  var g = $(window);
  g.off("focus blur resize orientationchange"), g.blur(function() {
    t(r)
  }), g.focus(function() {
    t(r)
  }), g.on("orientationchange", function() {
    var e;
    e = Modernizr.touch && (screenSize.isSmartPhone || screenSize.isSmallScreen) ? $("#bodyWrap") : g, t(e)
  }), (!Modernizr.touch || g.innerWidth() > 1280) && g.resize(function() {
    t(r)
  })
}, Wantering.Utils.GetScrollTarget = function() {
  var e;
  return e = screenSize.isMobile ? $("#bodyWrap") : $(window)
}, Wantering.Utils.DestroyScrollMonitor = function() {
  var e;
  $("#backToTop").addClass("invisible"), e = screenSize.isMobile ? $("#bodyWrap") : $(window), e.off("scroll"), "undefined" != typeof window.scrollTimer && null != window.scrollTimer && clearTimeout(window.scrollTimer), window.clearInterval(window.scrollWatcher), window.scrollWatcher = !1, $(window).off("blur resize orientationchange")
}, Wantering.Utils.HidePagesInScroll = _.throttle(function(e, t) {
  var n = 6,
    i = 6,
    a = document.querySelectorAll(".product");
  _.each(a, function(a) {
    var r, s, o, l, u = $(a),
      c = u.offset().top,
      p = u.height(),
      d = c + p;
    screenSize.isMobile ? (s = c > 0 && t / 2 > c, o = c > 0 - t * n && t * n * 2 > c, r = 0 - t * n > c || c > t * n * 2) : (s = c > e && e + t > d, o = c > e - t * i && e + t * i > d, r = e - t * i > c && e + t * i > d), r && !u.hasClass("empty") && u.addClass("empty"), o && u.hasClass("empty") && (l = _.find(Wantering.htmlCache, function(e) {
      return e.id == u.attr("id")
    }), u.removeClass("empty"))
  })
}, 225), Wantering.Utils.Validate = function(e, t) {
  var n = "Is that a valid email address?",
    i = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return i.test(t) ? (e = null, t = null, !0) : (e.addClass("isInvalid").on("focus", function() {
    $(this).removeClass("isInvalid").parent().find(".errorMessage").remove()
  }).after('<div class="errorMessage">' + n + "</div>"), !1)
}, Wantering.Utils.AdjustGenderFilter = function(e) {
  var t = $("#header"),
    n = t.find(".genderFilterItem"),
    i = n.find(".label"),
    a = "any mens womens";
  if (null !== e.parse_info.gender) {
    var r = e.parse_info.gender,
      s = Formatters.PrettifyString(r);
    n.removeClass(a).addClass(r), i.text(s)
  } else n.removeClass(a).addClass("any"), i.text("Gender")
}, Wantering.Utils.AdjustSaleFilter = function(e) {
  var t = $("#header"),
    n = t.find(".statusFilterItem"),
    i = "any new sale";
  if (e.parse_info.filters.length > 0) {
    var a = !1,
      r = !1;
    _.each(e.parse_info.filters, function(e) {
      "new" == e.key ? r = !0 : "on_sale" == e.key && (a = !0)
    }), n.removeClass(i), r ? n.addClass("new") : a && n.addClass("sale")
  } else n.removeClass(i).addClass("any")
}, Wantering.Utils.AdjustColorFilter = function(e) {
  var t, n, i = $("#header"),
    a = i.find(".colorFilterItem");
  if (null != e.parse_info.color) {
    var r = e.parse_info.color.name,
      s = e.parse_info.color.hex;
    null != r ? (t = r.replace(/ /g, "+").toLowerCase(), searchFilters.color !== t && (searchFilters.color = t), n = r) : null != s && (t = "any", searchFilters.hex = s, n = "#" + s), a.removeClass("any")
  } else t = "any", n = "Color", a.addClass("any");
  a.attr("data-color", t), a.find(".label").text(n)
};
var Settings = {
    linkshareID: "p/VkHLLU/1w",
    skimlinksID: "20569X892016"
  },
  Formatters = {
    MAX_UNAME_LENGTH: 32,
    TidySearchString: function(e) {
      function t(e) {
        for (var t = 0; t < n.length; t++) e = e.replace(n[t].letters, n[t].base);
        return e
      }
      if (!e) return "";
      var n = [{
        base: "A",
        letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
      }, {
        base: "AA",
        letters: /[\uA732]/g
      }, {
        base: "AE",
        letters: /[\u00C6\u01FC\u01E2]/g
      }, {
        base: "AO",
        letters: /[\uA734]/g
      }, {
        base: "AU",
        letters: /[\uA736]/g
      }, {
        base: "AV",
        letters: /[\uA738\uA73A]/g
      }, {
        base: "AY",
        letters: /[\uA73C]/g
      }, {
        base: "B",
        letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
      }, {
        base: "C",
        letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
      }, {
        base: "D",
        letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
      }, {
        base: "DZ",
        letters: /[\u01F1\u01C4]/g
      }, {
        base: "Dz",
        letters: /[\u01F2\u01C5]/g
      }, {
        base: "E",
        letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
      }, {
        base: "F",
        letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
      }, {
        base: "G",
        letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
      }, {
        base: "H",
        letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
      }, {
        base: "I",
        letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
      }, {
        base: "J",
        letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
      }, {
        base: "K",
        letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
      }, {
        base: "L",
        letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
      }, {
        base: "LJ",
        letters: /[\u01C7]/g
      }, {
        base: "Lj",
        letters: /[\u01C8]/g
      }, {
        base: "M",
        letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
      }, {
        base: "N",
        letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
      }, {
        base: "NJ",
        letters: /[\u01CA]/g
      }, {
        base: "Nj",
        letters: /[\u01CB]/g
      }, {
        base: "O",
        letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
      }, {
        base: "OI",
        letters: /[\u01A2]/g
      }, {
        base: "OO",
        letters: /[\uA74E]/g
      }, {
        base: "OU",
        letters: /[\u0222]/g
      }, {
        base: "P",
        letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
      }, {
        base: "Q",
        letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
      }, {
        base: "R",
        letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
      }, {
        base: "S",
        letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
      }, {
        base: "T",
        letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
      }, {
        base: "TZ",
        letters: /[\uA728]/g
      }, {
        base: "U",
        letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
      }, {
        base: "V",
        letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
      }, {
        base: "VY",
        letters: /[\uA760]/g
      }, {
        base: "W",
        letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
      }, {
        base: "X",
        letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
      }, {
        base: "Y",
        letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
      }, {
        base: "Z",
        letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
      }, {
        base: "a",
        letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
      }, {
        base: "aa",
        letters: /[\uA733]/g
      }, {
        base: "ae",
        letters: /[\u00E6\u01FD\u01E3]/g
      }, {
        base: "ao",
        letters: /[\uA735]/g
      }, {
        base: "au",
        letters: /[\uA737]/g
      }, {
        base: "av",
        letters: /[\uA739\uA73B]/g
      }, {
        base: "ay",
        letters: /[\uA73D]/g
      }, {
        base: "b",
        letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
      }, {
        base: "c",
        letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
      }, {
        base: "d",
        letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
      }, {
        base: "dz",
        letters: /[\u01F3\u01C6]/g
      }, {
        base: "e",
        letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
      }, {
        base: "f",
        letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
      }, {
        base: "g",
        letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
      }, {
        base: "h",
        letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
      }, {
        base: "hv",
        letters: /[\u0195]/g
      }, {
        base: "i",
        letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
      }, {
        base: "j",
        letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
      }, {
        base: "k",
        letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
      }, {
        base: "l",
        letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
      }, {
        base: "lj",
        letters: /[\u01C9]/g
      }, {
        base: "m",
        letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
      }, {
        base: "n",
        letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
      }, {
        base: "nj",
        letters: /[\u01CC]/g
      }, {
        base: "o",
        letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
      }, {
        base: "oi",
        letters: /[\u01A3]/g
      }, {
        base: "ou",
        letters: /[\u0223]/g
      }, {
        base: "oo",
        letters: /[\uA74F]/g
      }, {
        base: "p",
        letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
      }, {
        base: "q",
        letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
      }, {
        base: "r",
        letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
      }, {
        base: "s",
        letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
      }, {
        base: "t",
        letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
      }, {
        base: "tz",
        letters: /[\uA729]/g
      }, {
        base: "u",
        letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
      }, {
        base: "v",
        letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
      }, {
        base: "vy",
        letters: /[\uA761]/g
      }, {
        base: "w",
        letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
      }, {
        base: "x",
        letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
      }, {
        base: "y",
        letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
      }, {
        base: "z",
        letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
      }];
      return e = t(e.trim()), e = e.replace(/[^+\-\&\$\w\s]/gi, ""), e = e.replace(/\s{2,}/g, " ")
    },
    CurrencySymbol: function(e) {
      return "GBP" == e ? "&pound;" : "$"
    },
    CleanForMatch: function(e) {
      return e = e.replace(/[^+\-\&\$\w\s\'\.\/]/gi, "").replace("/", "\\/")
    },
    UName: function(e) {
      return e ? (e = this.TidySearchString(e.trim()), e = e.replace(/[^a-z0-9.]/gi, ""), e.length > this.MAX_UNAME_LENGTH && (e.length = this.MAX_UNAME_LENGTH), e) : ""
    },
    Slugify: function(e) {
      return e ? e = e.trim().replace(/ /g, "-").toLowerCase() : ""
    },
    FormatSearchForURL: function(e, t) {
      return e ? (e = e.trim().replace(/ /g, "+"), t && (e = e.toLowerCase()), e += "/") : ""
    },
    CleanSearchString: function(e) {
      return e ? e = e.replace(/[^-\&\$\xF1\xD1\xE7\xC7\w\s]/gi, " ").trim() : ""
    },
    PrettifyString: function(e) {
      return e ? (e = this.CleanSearchString(e), e = this.StripPriceFromString(e), e = this.StripTagTypes(e), e = e.replace(/\bcat-\b|\bbrand-\b|\bcolor-\b|\bkey-\b|\bstore-\b|\bhashtag-\b|\bprice-\b|\bon_sale-\b|\bin_stock-\b/gi, " / ").trim(), "/" == e.substring(0, 1) && (e = e.substring(1)), e = e.replace(/ +(?= )/g, ""), e = e.replace(/\w\S*/g, function(e) {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
      }), e = e.trim()) : ""
    },
    UpdateMisspelledWords: function(e, t, n) {
      var i = t.split(" "),
        a = n.split(" ");
      return _.each(i, function(t, n) {
        var i = new RegExp(t, "i");
        e = e.replace(i, a[n])
      }), e
    },
    AddPriceString: function(e) {
      return e = e.replace(/\d+/g, "&dollar;$&").replace(/\&dollar;/g, "$")
    },
    SearchTermModifier: function(e) {
      return legacyMatchers.forEach(function(t) {
        e = e.replace(t[2], t[3])
      }), e
    },
    GenerateSearchTitle: function(e, t, n, i) {
      var a, r = "",
        s = "",
        o = "",
        l = "",
        u = "",
        c = "",
        p = "",
        d = "",
        h = "",
        _ = "",
        m = "Clothing";
      return e.gender && (r = e.gender.slice(0, -1), r = " for " + n.PrettifyString(r)), e.filters.length > 0 && i.each(e.filters, function(i) {
        if ("brand" == i.key) s = n.PrettifyString(i.value), t && t.brand && t.brand.label && (s = t.brand.label);
        else if ("store" == i.key) o = n.PrettifyString(i.value), t && t.store && t.store.label && (o = t.store.label), o = " at " + o;
        else if ("on_sale" == i.key) d = " on Sale";
        else if ("new" == i.key) h = "New ", i.value.indexOf("day") >= 0 && (_ = " in the Last Day");
        else if (null === e.search && 0 == l.length && "Clothing" == m) m = n.StripTagTypes(i.value);
        else {
          var a = n.StripTagTypes(i.value);
          l += " &#xb7; " + n.PrettifyString(a)
        }
      }), e.color && (u = e.color.name, null == u && (u = "#" + e.color.hex + " Colored")), e.price && i.each(e.price, function(e, t) {
        "bucket" == t ? (c = "med" == e ? "Medium" : e, c = n.PrettifyString(c + " Priced"), c += " ") : (e = e.replace(" to ", "-"), p = " " + t + " $" + e, p = p.replace("$$", "$"))
      }), null != e.search && (m = e.search.text), e.spellcheck && e.search && (m = this.UpdateMisspelledWords(m, e.search.text, e.spellcheck.collation)), a = n.PrettifyString(m), a = s + " " + a + " ", a = h + c + a + r + _ + o + d + l + p, a = a.replace(/ +(?= )/g, "").trim(), e = null, a
    },
    GenerateProductTitle: function(e, t) {
      var n = "",
        i = "",
        a = "";
      return e.title && (n = t.TidySearchString(e.title.toLowerCase()), e.brand_name && (i = t.TidySearchString(e.brand_name.toLowerCase())), n = e.brand_name && n.indexOf(i) < 0 ? e.brand_name + " " + e.title : e.title), e.brand && (i = e.brand.toLowerCase()), e.price && (a = e.price, e.sale_price && (a = e.sale_price)), n = n + " for $" + a + " / Wantering"
    },
    CheckForGenderInString: function(e) {
      if (!e) return "";
      var t, n = /\bfemale\b|\bwomens\b|\bwomen\b|\bladies\b|\bgirls\b|\bgirl\b/gi,
        i = /\bmale\b|\bmens\b|\bmen\b|\bguys\b/gi;
      return n.test(e) ? t = "womens" : i.test(e) && (t = "mens"), t
    },
    StripGenderFromString: function(e) {
      var t = /\bwomens\b|\bfor women\b|\bwomen\b|\bfor ladies\b|\bladies\b|\bfor girls\b|\bgirls\b|\bgirl\b|\bmens\b|\bfor men\b|\bmen\b|\bfor guys\b|\bguys\b/gi;
      return e = e.replace(t, "").replace("  ", " ")
    },
    CheckForNewInString: function(e) {
      var t = /\bnew\b/gi,
        n = !1;
      return t.test(e) && (n = !0), n
    },
    CheckNewInBlacklist: function(e) {
      var t = /\bnew balance\b|\bnew look\b|\bnew year\b|\bnew years\b|\bnew england\b|\bnew era\b|\bnew kid\b|\bnew standard\b|\bnew ultra\b|\bnew york\b/gi,
        n = !1;
      return t.test(e) && (n = !0), n
    },
    CheckForSaleInString: function(e) {
      var t = /\bon sale\b|\bfor sale\b|\bsale\b/gi,
        n = !1;
      return t.test(e) && (n = !0), n
    },
    StripHTML: function(e) {
      return e ? (e = e.replace(/ +(?= )/g, ""), e = e.replace(/[\n\t\r]/g, ""), e = e.replace(/<(?:.|\n)*?>/g, ""), e = e.replace(/"/g, "")) : ""
    },
    StripEmptyHTML: function(e) {
      return e ? (e = e.replace(/<li>-/g, "<li>"), e = e.replace(/<br>/g, ""), e = e.replace(/<br \/>/g, ""), e = e.replace(/<li><\/li>/g, ""), e = e.replace(/<(p|div|li)>(\s|&nbsp;)*<\/\1>/g, ""), e = e.replace(/<\/p><\/p>/g, "</p>")) : ""
    },
    StripTagTypes: function(e) {
      return e ? (e = e.replace(/(^|\s|-)+tag-(\w+)/gi, " / "), e = e.replace(/attribute:|print:|material:|detail:|style:|celebrity:|holiday:|inspiration:|advice:|movie:|occasion:|trend:|type:|tvshow:/gi, "").trim()) : ""
    },
    StripNewFromString: function(e) {
      if (!e) return "";
      var t = /\bnew\b/gi;
      return e = e.replace(t, "").replace("  ", " ")
    },
    StripSaleFromString: function(e) {
      if (!e) return "";
      var t = /\bon sale\b|\bfor sale\b|\bsale\b/gi;
      return e = e.replace(t, "").replace("  ", " "), e.trim()
    },
    StripPriceFromString: function(e) {
      return e ? e = e.replace(/price-any|price-high|price-med|price-low/gi, "").replace("//", "/").trim() : ""
    },
    PrettifyNumber: function(e) {
      if (!e) return "";
      for (var t = [{
          divider: 1e6,
          suffix: "M"
        }, {
          divider: 1e3,
          suffix: "k"
        }], n = 0, i = t.length; i > n; n++) e >= t[n].divider && (e = Math.round(e / t[n].divider * 10) / 10 + t[n].suffix);
      return e.toString()
    },
    DisplayUrl: function(e) {
      if (!e) return "";
      var t = e.replace(/\bhttps:\/\/\b|\bhttp:\/\/\b|\bwww.\b|\//gi, "").trim();
      return e = null, t
    },
    Redirect: function(e, t, n) {
      var i, a, r, s, o = n ? _.keys(n)[0] : void 0;
      if ("linkshare" == o) return a = Settings.linkshareID, r = n[o], i = "http://click.linksynergy.com/deeplink?id=" + a + "&mid=" + r + "&murl=" + encodeURIComponent(e);
      a = Settings.skimlinksID;
      try {
        s = app.user.get("xcust")
      } catch (l) {}
      return i = "http://buy.wantering.com/?id=" + a + "&xs=1&url=" + encodeURIComponent(e), s && (i += "&xcust=" + s), t && (i += "&sref=" + encodeURIComponent(t)), i
    },
    GenerateXCust: function(e) {
      if (!e) return "";
      var t = /[.]/gi,
        n = /[-]/gi;
      return e = e.replace(t, "DOT").replace(n, "DASH")
    },
    CheckXCust: function(e) {
      _.each(e, function(e) {
        var t = $(e).prop("href");
        t.indexOf("xcust") < 0 && t.indexOf("linksynergy") < 0 && (t += t.indexOf("?") < 0 ? "?" : "&", "undefined" != typeof app && (t += "xcust=" + app.user.get("xcust")), $(e).prop("href", t))
      }), e = null
    },
    GetURLParameterNaturalCase: function(e, t) {
      t || (t = location.search);
      var n = new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)");
      return decodeURIComponent((n.exec(t) || [, ""])[1].replace(/\+/g, "%20")) || null
    },
    GetURLParameter: function(e, t) {
      var n = this.GetURLParameterNaturalCase(e, t);
      return n ? n.toLowerCase() : null
    },
    GenerateProductRoute: function(e) {
      return "/" + e.link_title + "/" + e.short_key + "/"
    },
    GenerateCanonicalRoute: function(e) {
      var t = e,
        n = t.indexOf("?");
      return e = null, n >= 0 && (t = t.substr(0, n)), t
    },
    GenerateCanonicalSearchRoute: function(e, t, n, i, a) {
      var r, s, o = "",
        l = "",
        u = "",
        c = "",
        p = "";
      return t ? (o = t.gender ? "/" + t.gender + "-clothing/" : "/clothing/", s = i.GetURLParameter("page", e), s && (p = "?page=" + s), t.filters.length > 0 && n > 0 ? (a.each(t.filters, function(e) {
        "cat" == e.key ? c = "cat-" + e.value + "/" : "brand" == e.key ? l = "brand-" + e.value + "/" : "store" == e.key && (u = "store-" + e.value + "/")
      }), r = u.length > 1 ? "noIndexButFollow" : o + l + c + p) : r = 0 == n ? "noIndexNoFollow" : t.search ? "noIndexButFollow" : o + p) : r = "noIndexNoFollow", t = null, n = null, e = null, r
    },
    GenerateSearchRoute: function() {
      var e, t = "clothing/",
        n = "",
        i = "",
        a = "",
        r = "",
        s = "",
        o = "",
        l = "",
        u = "",
        c = searchFilters.gender,
        p = searchFilters.color,
        d = searchFilters.hex,
        h = searchFilters.price,
        _ = searchFilters.sale,
        m = searchFilters.newFilter,
        f = searchFilters.sortOrder,
        g = searchFilters.focusedProduct,
        v = [];
      return searchFilters.keyword.length > 0 && (n = this.FormatSearchForURL(searchFilters.keyword, !0)), searchFilters.filters.length > 0 && (i = searchFilters.filters, i.match(/(brand-|store-)/) || (i = i.replace(/(\+&|\+and)/, "").replace(/&/, "+"))), c && "any" != c && (t = c + "-" + t), "any" != p && (p = this.FormatSearchForURL(p, !0), a = "color-" + p), "any" != d && (d = this.FormatSearchForURL(d, !0), r = "hex-" + d), "undefined" != typeof h && "any" != h && (h = this.FormatSearchForURL(h, !0), s = "price-" + h), "any" != _ && (_ = this.FormatSearchForURL(_, !0), o = "on_sale-" + _), "any" != m && (m = this.FormatSearchForURL(m, !0), l = "new-" + m), f && "default" != f && v.push("sort=" + f), g && "" != g && v.push("focus=" + g), e = t + n + i + a + r + s + l + o + u, searchFilters.keyword && searchFilters.spellcheck && (e = this.UpdateMisspelledWords(e, searchFilters.keyword, searchFilters.spellcheck.collation), searchFilters.spellcheck = void 0), v.length && (e += "?" + v.join("&")), e
    }
  };
"undefined" != typeof module && (module.exports = Formatters), Wantering.Utils.ClearTimers = function() {
  "undefined" != typeof window.gifFetch && null !== window.gifFetch && clearTimeout(window.gifFetch), "undefined" != typeof window.homeMastheadTimer && null !== window.homeMastheadTimer && clearTimeout(window.homeMastheadTimer), "undefined" != typeof window.signUpTimer && null !== window.signUpTimer && clearTimeout(window.signUpTimer)
}, Wantering.Mixin.Validations = {
  setupValidations: function() {
    var e = this,
      t = this.$("[data-validate]");
    !screenSize.isSmartPhone && this.options && this.options.autofocus && setTimeout(function() {
      e.$(":input").eq(0).focus()
    }, 750), this.validations = _.reduce(t, function(e, t) {
      var n = $(t).attr("name");
      return e[n] = !1, e
    }, {})
  },
  clearValidationStyling: function(e) {
    $(e.target).removeClass("isInvalid")
  },
  watch: function(e, t) {
    var n = $(e.target),
      i = n.val(),
      a = n.siblings("._message");
    this.validations || this.setupValidations(), n.data().hasOwnProperty("novalidate") || t.call(this, n, i, a)
  },
  cleanUsername: function(e) {
    e.target.value = Formatters.UName(e.target.value), this.watchEmail(e)
  },
  watchEmail: _.debounce(function(e) {
    this.watch(e, function(e, t, n) {
      this.checkEmail(t) && (n.html("Looks good!"), this.validations.email = !0, this.disableSignupSubmit())
    })
  }, 250),
  checkEmail: function(e) {
    var t = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return t.test(e) ? !0 : !1
  },
  watchUsername: _.debounce(function(e) {
    this.watch(e, function(e, t, n) {
      var i = this.checkUsername(Formatters.UName(t));
      i ? "available" == i ? (n.html("Awesome! This name is available."), this.validations.uName = !0, this.disableSignupSubmit()) : "current" == i ? (n.html("&nbsp;"), this.validations.uName = !0, this.disableSignupSubmit()) : n.text("Aww, this name is taken.") : n.html("It must be between 3 and 32 characters long.")
    })
  }, 250),
  checkUsername: function(e) {
    if (e == app.user.get("uName")) return "current";
    if (e.length < 3 || e.length > Formatters.MAX_UNAME_LENGTH) return !1;
    var t;
    return $.ajax({
      url: "/api/user/name/available/?name=" + e,
      async: !1
    }).done(function(e) {
      t = e.result
    }), t
  },
  watchPassword: _.debounce(function(e) {
    this.watch(e, function(e, t, n) {
      this.checkPassword(t) ? (n.html("Awesome, that's great."), this.validations.password = !0, this.disableSignupSubmit()) : t.length > 0 && n.text("Your password must be at least 6 characters.")
    })
  }, 250),
  checkPassword: function(e) {
    return e.length < 6 ? !1 : !0
  },
  watchZip: _.debounce(function(e) {
    this.watch(e, function(t, n, i) {
      this.checkZip(n) ? (t.removeClass("isInvalid"), i.html("&nbsp;"), this.validations.zip = !0, this.disableSignupSubmit()) : n.length > 0 && "focusout" == e.type && (t.addClass("isInvalid"), i.text("Must be a 5 digit Zip"), $("#shippingCity").val(""), $("#shippingState").val(""), $("#cityStateLabel").html("&nbsp;"))
    })
  }, 250),
  checkZip: function(e) {
    var t = /^\d{5}$/;
    if (t.test(e)) {
      return $.ajax({
        url: "//ziptasticapi.com/" + e
      }).done(function(e) {
        e = JSON.parse(e), $("#shippingCity").val(e.city), $("#shippingState").val(e.state), $("#cityStateLabel").html(e.city + ", " + e.state)
      }), !0
    }
    return !1
  },
  watchField: _.debounce(function(e) {
    this.watch(e, function(t, n, i) {
      this.checkField(n) ? (t.removeClass("isInvalid"), i.html("&nbsp;"), "address1" == t[0].name ? this.validations.address1 = !0 : "name" == t[0].name && (this.validations.name = !0), this.disableSignupSubmit()) : n.length > 0 && "focusout" == e.type && (t.addClass("isInvalid"), i.text("3â€“100 characters"))
    })
  }, 250),
  checkField: function(e) {
    return e.length > 2 && e.length < 101 ? !0 : !1
  },
  validateUsername: function(e) {
    var t = $(e.target),
      n = t.val(),
      i = this.checkUsername(n);
    i && "available" == i ? (t.removeClass("isInvalid"), this.validations.uName = !0) : i && "current" == i ? (t.removeClass("isInvalid"), this.validations.uName = !0) : (n.length > 0 && t.addClass("isInvalid"), this.validations.uName = !1), this.disableSignupSubmit()
  },
  validateEmail: function(e) {
    var t = $(e.target),
      n = t.val(),
      i = t.next("._message");
    this.checkEmail(n) ? (t.removeClass("isInvalid"), i.html("&nbsp;"), this.validations.email = !0) : (n.length > 1 && (t.addClass("isInvalid"), i.html("Is this a valid email address?")), this.validations.email = !1), this.disableSignupSubmit()
  },
  validatePassword: function(e) {
    var t = $(e.target),
      n = t.val();
    this.checkPassword(n) ? (t.removeClass("isInvalid"), this.validations.password = !0) : (n.length > 1 && t.addClass("isInvalid"), this.validations.password = !1), this.disableSignupSubmit()
  },
  disableSignupSubmit: function() {
    var e = this.$("button[type=submit]");
    if (!e.data().hasOwnProperty("novalidate")) {
      var t = _.reduce(this.validations, function(e, t) {
        return e && t
      }, !0);
      e.prop("disabled", !t)
    }
  }
}, Wantering.Mixin.Requests = {
  request: function(e) {
    var t, n = {
      context: this
    };
    return _.extend(n, e), t = $.ajax(n).fail(function() {
      Wantering.trigger("message:show", {
        type: "error",
        title: "Error",
        message: "There was a problem making the request"
      })
    })
  },
  responseWithErrorMessage: function(e, t) {
    "success" === e.result ? t.call(this, e) : Wantering.trigger("message:show", {
      type: "error",
      message: this.errorMessages[e.result]
    })
  }
}, Wantering.Mixin.Messages = {
  errorMessages: {
    incorrectOldPassword: "Your original password was incorrect. Please try again.",
    invalidOldPassword: "Your original password was incorrect. Please try again.",
    invalidToken: "That reset link is no longer valid. Please request another new password.",
    wrongAccount: "It looks like you signed up with Facebook, Twitter or Tumblr. Please try again with the correct service.",
    authRequired: "You must be logged in to reach this page.",
    notStaff: "You have staff rights to reach this page.",
    articleNotFound: "Article not found.",
    errorPublishing: "Error publishing article to Tumblr.",
    errorSettingTubmlrID: "Error setting article TumblrID.",
    linkTitleTaken: "Article was not saved. Please check the link title and try again.",
    staleVersion: "Someone else has edited this article and it cannot be saved. Relax, get a cup of coffee or tea first, and then please reload your browser in order to save it...",
    user: {
      notFound: "That user could not be found, please check your entry and try again."
    }
  },
  messages: {
    enable: " was successfully enabled.",
    disable: " was successfully disabled.",
    writer: " was successfully enabled as a Writer.",
    unwriter: " was successfully disabled as a Writer.",
    staff: " was successfully enabled as a Staff user.",
    unstaff: " was successfully disabled as a Staff user.",
    shopper: " was successfully enabled as a Shopper.",
    unshopper: " was successfully disabled as a Shopper."
  }
}, Wantering.Mixin.Popups = {
  closePopup: function() {
    var e = this.options.type,
      t = $("html");
    return Wantering.Authentication.OK && "heartItGoesOnSale" == e && Wantering.Actions.TipComplete(e), $("#popup").unbind("click.closePopupEvent").addClass("hide invisible"), (!t.hasClass("viewProductDetail") || t.hasClass("viewProductLanding")) && t.removeClass("hasOverlay"), this.options.pathname && app.navigate(this.options.pathname, {
      trigger: !1
    }), !1
  }
}, Wantering.Mixin.Utils = {
  stop: function(e) {
    e && (e.preventDefault(), e.stopPropagation())
  }
}, Wantering.Mixin.ScrollerUtils = {
  initScrollWatcher: function() {
    var e = this;
    screenSize.isMobile ? (this.scrollThreshold = 1500, this.$scrollMonitorTarget = $("#bodyWrap")) : (this.$scrollMonitorTarget = $(window), this.scrollThreshold = 1e3), this.$scrollMonitorTarget.on("scroll", function() {
      e.didScroll = !0, screenSize.isMobile || (clearTimeout(window.hoverTimer), window.hoverTimer = setTimeout(function() {
        e.didScroll = !1
      }, 250))
    })
  },
  destroyScrollMonitor: function() {
    this.$scrollMonitorTarget && this.$scrollMonitorTarget.off("scroll"), "undefined" != typeof window.scrollTimer && null != window.scrollTimer && clearTimeout(window.scrollTimer), clearInterval(this.scrollMonitor), this.scrollMonitor = void 0, $(window).off("blur resize orientationchange")
  }
};
var Timeline = {
  terms: {
    twitter: "tweet",
    facebook: "fbshare",
    polyvore: "vulture",
    loves: "want",
    female: "f",
    womens: "f",
    male: "m",
    mens: "m"
  },
  translate: function(e) {
    return this.terms[e] || e
  },
  parseTimelineEvent: function(e, t, n, i) {
    var a;
    if (t.data.delta < 0) return e;
    t.displayDate = moment(t.date).fromNow(), t.calendarDate = moment(t.date).format("MMM Do, YYYY"), e[t.displayDate] || (e[t.displayDate] = []);
    var r = e[t.displayDate][e[t.displayDate].length - 1];
    a = this.getReducedEvent[t.event] ? this.getReducedEvent[t.event] : this.getReducedEvent["default"];
    var s = a(t, r, i);
    return s && (s.parsedTags = this.parseTags(s.tags), e[t.displayDate].push(s)), e
  },
  parseTags: function(e) {
    return e ? (e = e.reduce(function(e, t) {
      var n = new RegExp("(celebrity|occasion):([\\w\\s]+)");
      return n.test(t) && e.push({
        tag: t.match(n)[0].replace(/\s/g, "+"),
        name: t.match(n)[2]
      }), e
    }, []), e[Math.floor(Math.random() * e.length)]) : void 0
  },
  getReducedEvent: {
    fbshare: function(e, t) {
      return e.event = "facebook", !t || t.shortKey !== e.shortKey || "facebook" !== t.event && "facebookShareGroup" !== t.event ? e : (t.event = "facebookShareGroup", t.shareCount ? t.shareCount += e.data.delta : t.shareCount = t.data.delta + e.data.delta, e = null, void 0)
    },
    tweet: function(e, t) {
      var n = e.data.text.substr(0, 2);
      return e.data.profileImageUrl && (e.data.profileImageUrl = e.data.profileImageUrl.replace("http://", "https://")), e.userCollection = [e.data.screenName], e.userDataCollection = [e.data], (0 == n.indexOf("RT") || 0 == n.indexOf('"@') || 0 == n.indexOf("â€œ@")) && (e.isRetweet = !0, t && t.shortKey === e.shortKey && t.isRetweet) ? (t.event = "retweetGroup", t.retweetCount ? t.retweetCount += 1 : t.retweetCount = 2, t.userCollection.indexOf(e.data.screenName) < 0 && (t.userCollection = _.union(t.userCollection, e.userCollection), t.userDataCollection = _.union(t.userDataCollection, e.userDataCollection)), e = null, void 0) : (e.event = "twitter", e)
    },
    pinterest: function(e, t) {
      return e.event = "pinterest", e.data.user && (e.userCollection = [e.data.user.username], e.userDataCollection = [e.data]), !t || t.shortKey !== e.shortKey || "pinterest" !== t.event && "pinGroup" !== t.event ? e : (t.event = "pinGroup", t.repinCount ? t.repinCount += e.data.delta - 1 : t.repinCount = t.data.delta + e.data.delta - 1, e.data.user && t.data.user && t.userCollection.indexOf(e.data.user.username) < 0 && (t.userCollection = _.union(t.userCollection, e.userCollection), t.userDataCollection = _.union(t.userDataCollection, e.userDataCollection)), e = null, void 0)
    },
    vulture: function(e, t) {
      return e.event = "polyvore", !t || t.shortKey !== e.shortKey || "polyvore" !== t.event && "polyvoreGroup" !== t.event ? e : (t.event = "polyvoreGroup", t.setCount ? t.setCount += e.data.delta : t.setCount = t.data.delta + e.data.delta, e = null, void 0)
    },
    blog: function(e) {
      return e.event = "influencer", e
    },
    tumblr: function(e, t) {
      return e.event = "tumblr", e.data.tumblrURL = e.data.blogID ? e.data.blogURL + "post/" + e.data.blogID + "/" : e.data.blogURL, t && t.shortKey === e.shortKey && "tumblr" === t.event && e.data && e.data.blog ? (t.event = "tumblr", t.noteCount ? t.noteCount++ : t.noteCount = 1, e = void 0, void 0) : e
    },
    want: function(e) {
      return e.event = "wantering", e.data.avatar && (e.data.avatar = e.data.avatar.replace("http://", "https://")), e
    },
    "default": function(e) {
      return e
    }
  }
};
"undefined" != typeof module ? module.exports = Timeline : Wantering && Wantering.Mixin && (Wantering.Mixin.Timeline = Timeline), TagMixin = {
  filterTags: function(e) {
    return e.reduce(function(e, t) {
      return t.image && e.push(t), e
    }, [])
  },
  groupTags: function(e, t) {
    return e.reduce(function(e, n, i) {
      var a = "";
      return a = "m" == n.gender ? "mens-" : "f" == n.gender ? "womens-" : "m" == t ? "mens-" : "womens-", e[n.type] = e[n.type] || [], e[n.type].push({
        image: n.image,
        type: n.type,
        name: n.name,
        gender: n.gender,
        description: n.description,
        index: i,
        searchURL: "/" + a + "clothing/tag-" + n.type + ":" + n.name.replace(/\s/g, "+") + "/",
        imageURL: "//s3.amazonaws.com/wantering/media/" + n.image + "-m.jpg"
      }), e
    }, {})
  },
  parseTags: function(e, t, n) {
    var i = t ? void 0 : 8;
    return e = this.groupTags(e, n), t && e[t] ? [this.parseType(t, e[t], i)] : this.parseTagTypes(e, i)
  },
  parseType: function(e, t, n) {
    return t = t.sort(function(e, t) {
      return t.index - e.index
    }), n && t.length >= n && (t = t.splice(0, n)), t.length % 2 == 1 && t.splice(t.length - 1, 1), {
      title: this.titles[e] && this.titles[e].title,
      link: e,
      description: this.titles[e] && this.titles[e].description,
      rank: this.titles[e] && this.titles[e].rank,
      tags: t
    }
  },
  parseTagTypes: function(e, t) {
    return e = Object.keys(e).map(function(n) {
      return this.parseType(n, e[n], t)
    }, this), e.sort(function(e, t) {
      return e.rank + e.title > t.rank + t.title ? 1 : e.rank + e.title < t.rank + t.title ? -1 : 0
    })
  },
  getTitle: function(e) {
    var t = this.titles[e];
    return t ? t.title : e
  },
  titles: {
    holiday: {
      title: "Holidays",
      rank: "090"
    },
    tvshow: {
      title: "TV Shows",
      rank: "110"
    },
    movie: {
      title: "Movies",
      rank: "100"
    },
    detail: {
      title: "Details",
      rank: "090"
    },
    type: {
      title: "Features",
      rank: "040"
    },
    celebrity: {
      title: "Celebrity Style",
      description: "Who's your style icon? Get inspired and upgrade your wardrobe with closets inspired by these fashion game-changers.",
      rank: "010"
    },
    occasion: {
      title: "Occasions",
      rank: "020"
    },
    trend: {
      title: "Trends",
      description: "Curious about what this season's fashion trends are? Keep up with with what's new and what's back in style.",
      rank: "080"
    },
    print: {
      title: "Prints",
      rank: "060"
    },
    inspiration: {
      title: "Inspiration",
      description: "Whether it's a special occasion or tips on how to wear a trend, we've got you covered with these curated style guides.",
      rank: "070"
    },
    material: {
      title: "Materials",
      rank: "050"
    },
    style: {
      title: "Personal Style",
      rank: "000"
    }
  }
}, "undefined" != typeof module ? module.exports = TagMixin : Wantering && Wantering.Mixin && (Wantering.Mixin.Tags = TagMixin);
var ViewHelpers = {
  Sets: {
    getCollectionLength: function(e) {
      return e.length
    },
    getLayoutType: function(e, t, n) {
      var i, a = {
        landing: function() {
          return 0 === n || 1 == n && 2 == t ? "fourBlock" : 1 == n || 2 == n && 3 == t ? "twoBlock" : 4 == n && 5 == t ? "fullWidth" : 5 == n || 6 == n ? "block" : 4 == n ? "twoBlock" : n > 18 ? "sideBySide" : "blockHalfImg"
        },
        masthead: function() {
          return "masthead"
        },
        advice: function() {
          return 0 === n || 1 == n && 2 == t ? "fourBlock" : 1 == n || 2 == n && 3 == t ? "twoBlock" : "blockHalfImg"
        },
        inspiration: function() {
          return 0 === n || 3 == n || 2 == t ? "twoBlock" : "blockHalfImg"
        },
        celebrity: function() {
          return 0 === n || 2 == t ? "twoBlock" : 1 == n ? "block" : "smallBlock"
        },
        insiders: function() {
          return 2 == t ? "twoBlock" : "block"
        },
        tags: function() {
          return "shortBlock"
        },
        "default": function() {
          return "blockHalfImg"
        }
      };
      return i = a[e] ? a[e] : a["default"], i()
    },
    getClasses: function(e, t, n) {
      var i, a, r = {
        masthead: "units100 fullImg unitsMasthead",
        fullWidth: "units100 fullImg",
        fourBlock: "units50 fullImg doubleHeight",
        twoBlock: "units50 fullImg",
        twoBlockRight: "units50 fullImg rightColumnSetItem",
        block: "units25 fullImg",
        blockDoubleHeight: "units25 fullImg doubleHeight",
        smallBlock: "units10 fullImg",
        smallBlockWithTitle: "units10 fullImg withTitle",
        blockHalfImg: "units25 halfImg",
        shortBlock: "units25 fullImg shortHeight",
        sideBySide: "units50 sideBySide"
      };
      return a = ViewHelpers.Sets.getLayoutType(e, t, n), i = r[a], "masthead" == e && n > 0 && (i += " backStage"), i
    },
    getImgSize: function(e, t, n, i) {
      var a, r, s = {
        masthead: i ? "m" : "l",
        fullWidth: i ? "m" : "l",
        fourBlock: i ? "m" : "l",
        twoBlock: "m",
        twoBlockRight: "m",
        block: i ? "s" : "m",
        blockDoubleHeight: "m",
        smallBlock: "s",
        blockHalfImg: "s",
        shortBlock: "s",
        sideBySide: "s"
      };
      return r = ViewHelpers.Sets.getLayoutType(e, t, n), a = s[r]
    },
    getMaxSetLength: function(e) {
      var t, n = {
        masthead: 3,
        "default": "unlimited"
      };
      return t = n[e], t = n[e] ? n[e] : n["default"]
    }
  },
  Product: {
    checkIsNew: function(e) {
      var t, n, i, a = e.published || e.created,
        r = !1;
      return t = moment(), n = moment(a), i = t.diff(n, "days"), 8 > i && (r = !0), r
    },
    checkSizeOrder: function(e) {
      var t = ["xxxs", "3xs", "xxxsmall", "xxsp", "xxs", "2xs", "xxsmall", "xs", "xsmall", "extrasmall", "s", "small", "sm", "p", "petite", "m", "med", "medium", "l", "lg", "lrg", "large", "xl", "xlarge", "extralarge", "1x", "xxl", "2x", "2xl", "3x", "3xl", "xxxl", "4x", "4xl", "xxxxl"],
        n = /(\d+(?:[\.,]\d{2})?)/,
        i = /\d(?!x)/gi;
      if ("number" == typeof e || i.test(e)) {
        var a = n.exec(e);
        e = "00" == a[0] ? -1 : null !== a ? parseFloat(a) : e
      } else {
        e = e.toLowerCase().replace(/\W/gi, "");
        var r = t.indexOf(e);
        r > -1 && (e = r)
      }
      return e
    }
  },
  Article: {
    getGender: function(e) {
      switch (e) {
        case "mens":
          return "mens-";
        case "womens":
          return "womens-";
        default:
          return ""
      }
    },
    getAuthorLink: function(e) {
      switch (e) {
        case "gerald-cruz":
          return "https://twitter.com/Cruzpresso";
        case "kathleen-ong":
          return "https://twitter.com/itsmekathleeno";
        case "louise-henwood":
          return "https://twitter.com/louisecoulthard";
        case "susie-draffan":
          return "https://www.wantering.com/member/susie.draffan/loves/";
        case "sophie-pawlowski":
          return "https://www.wantering.com/member/sophie.pawlowski.3/loves/";
        case "jessica-rohr":
          return "https://www.wantering.com/member/jessrohr/loves/";
        default:
          return ""
      }
    },
    getDeviceImageSize: function(e) {
      switch (!0) {
        case e.isSmartPhone:
          return "m";
        case e.isSmallScreen:
          return "l";
        default:
          return "x"
      }
    },
    getDeviceImageURL: function(e) {
      return e.header.root + this.getDeviceImageSize(e) + "." + e.header.ext
    },
    getImageNavURL: function(e, t, n) {
      return n = n || "s", e[t].header.root + n + "." + e[t].header.ext
    },
    getHeaderFocus: function(e) {
      return e.header && e.header.focus ? e.header.focus : e.focus ? e.focus : "center"
    },
    getDateFormatted: function(e, t) {
      var n;
      return n = e.dateDisplayed ? e.dateDisplayed : e.dateModified, "elapsed" === t ? moment(n).fromNow() : moment(n).format(t)
    }
  }
};
"undefined" != typeof module && (module.exports = ViewHelpers), "undefined" != typeof require && (ViewHelpers = require("./wantering.presenter.helpers.js"), Templates = require("../wantering.templates.js"), Defaults = require("../wantering.defaults.js"), Formatters = require("../utils/wantering.utils.format.js"), moment = require("moment"));
var Helpers = {
  GroupListHeader: function(e) {
    e.prefix && (e.prefix = e.prefix.toUpperCase());
    var t = Templates.GroupListHeader({
      model: e
    });
    return e = null, t
  },
  LetterNav: function(e, t, n) {
    var i = "";
    return _.each(t, function(t) {
      var a = !1;
      n == t && (a = !0), i += Templates.LetterNavItem({
        type: e,
        letter: t,
        selected: a
      })
    }), i = Templates.LetterNav({
      letters: i
    }), e = null, t = null, i
  },
  GroupList: function(e, t) {
    var n = "",
      i = 3;
    this.isSmartPhone && (i = 2);
    for (var a = Math.ceil(t.length / i), r = 0; i > r; r++) {
      var s = t.slice(r * a, a * (r + 1));
      n += Helpers.GroupListChunk(e, s)
    }
    return e = null, t = null, n
  },
  GroupListChunk: function(e, t) {
    var n = "",
      i = "";
    return _.each(t, function(t) {
      i += Helpers.GroupListItem(e, t)
    }), n = Templates.GroupList({
      type: e,
      groupListItems: i
    }), e = null, t = null, n
  },
  GroupListItem: function(e, t) {
    "brands" == e ? t.type = "brand" : "stores" == e && (t.type = "store");
    var n = Templates.GroupListItem({
      model: t
    });
    return e = null, t = null, n
  },
  TrendingGroupList: function(e, t, n) {
    var i = "";
    return "brands" == t ? t = "brand" : "stores" == t && (t = "store"), _.each(e, function(e) {
      e.attributes && (e = e.attributes), e.info && (i += Templates.TrendingGroupListItem({
        model: e,
        type: t,
        imgPath: n,
        isSmartPhone: this.isSmartPhone
      }))
    }), i = Templates.TrendingGroupList({
      trendingGroupListItems: i
    }), e = null, t = null, i
  },
  ProductListHeader: function(e, t, n, i) {
    var a;
    if (t)
      if (a = t.brand || t.store || t.tag, a && a.info) {
        a.info.website && (a.redirectUrl = Formatters.Redirect(a.info.website, "https://www.wantering.com" + n), a.formattedUrl = Formatters.DisplayUrl(a.info.website));
        var r = this;
        a.related = _.map(a.related, function(e) {
          var n = "png";
          return !t.tag || t.store || t.brand || (n = "jpg"), e.logopath = r.s3Url + e.logo + "-s." + n, e
        })
      } else a = null;
    e.profile && e.profile.lovesCount && e.profile.lovesCount > 9999 && (e.profile.lovesCountPretty = Formatters.PrettifyNumber(e.profile.lovesCount));
    var s = {
        model: e,
        headerInfo: a,
        imgPath: i,
        isSmartPhone: this.isSmartPhone,
        Templates: Templates
      },
      o = Templates.ListResultsHeader(s);
    return e = null, brand = null, n = null, o
  },
  ProductListNoResults: function(e, t, n, i, a) {
    var r, s, o = [],
      l = "";
    i && (s = i.nameFirst ? i.nameFirst : i.uName, i.currentUser && (l = 'Heart an item to add it to this collection. Want to start simple? Pick an item from <a href="/member/' + i.uName + '/loves/" class="textLink">your loves</a>.'));
    var u = {
        searchResults: "No results. Try adjusting your search or choose a suggested search below.",
        similarItems: "There are no similar products to this item.",
        memberLoves: "You haven't loved any items yet. Hearting items helps Wantering learn your style!",
        otherMemberLoves: s ? s + "'s loves are currently private." : "",
        memberLovesSet: "There are no loves in this collection yet. " + l,
        trending: "Trending products are currently unavailable.",
        feature: "Feature products are currently unavailable."
      },
      c = u[e];
    a && (o = "any" == t ? a.womens : a[t]);
    var p = this;
    return o = _.map(o, function(e) {
      return e.image = p.s3Url + e.assetKey + "-s.jpg", e
    }), r = Templates.ListNoResults({
      noResultsText: c,
      searchGender: t,
      tags: o
    })
  },
  HomePage: function(e, t, n) {
    var i;
    if (_.each(e, function(t, n) {
        var t = _.reduce(t, function(e, i, a) {
          return i = Helpers.LandingPage(i, a, n, t.length), e.push(i), e
        }, []);
        n.indexOf(Defaults.HomePageSetOrder) >= 0 && (e[n] = t)
      }), n && n.home) {
      var a = this;
      e.tags = _.map(n.home, function(e) {
        return e.url = a.s3Url + e.assetKey + "-m.jpg", e
      }, this)
    }
    return i = _.reduce(t, function(e, t) {
      return t.info && e.length < 16 && (t = Helpers.LandingPage(t), e.push(t)), e
    }, []), e && i.length > 4 && (e.brands = i), e
  },
  LandingPage: function(e, t, n, i) {
    var a, r, s;
    return _.extend(e, ViewHelpers), e.meta && e.meta.header.data && (a = ViewHelpers.Sets.getImgSize(n, i, t, this.isSmartPhone), r = e.meta.header.data.root, s = e.meta.header.data.ext, e.url = r + a + "." + s), e.getMaxSet = ViewHelpers.Sets.getMaxSetLength(n), e.classes = ViewHelpers.Sets.getClasses(n, i, t), e.focus = ViewHelpers.Article.getHeaderFocus(e), e.dateFormatted = ViewHelpers.Article.getDateFormatted(e, "elapsed"), e
  },
  ProductScoreCard: function(e) {
    var t = {};
    if (t.mentions = 0, t.hotness = Math.round(1.2 * e.popularity) / 10, t.hotness = t.hotness < 10 ? t.hotness : 10, e.social_scores) {
      var n = e.social_scores;
      n.wants && (t.wantering = 5 * n.wants + n.tumblr, t.mentions += n.wants), n.pinterest && (t.pinterest = n.pinterest, t.mentions += n.pinterest), n.twitter && (t.twitter = n.twitter, t.mentions += n.twitter), n.tumblr && (t.tumblr = n.tumblr, t.mentions += n.tumblr), n.facebook && (t.facebook = n.facebook, t.mentions += n.facebook), n.vulture && (t.polyvore = n.vulture, t.mentions += n.vulture), e.blogs.length && (t.influencers = 10 * e.blogs.length, t.mentions += e.blogs.length)
    }
    return t
  },
  ProductCategories: function(e) {
    if (e.category_names) {
      var t = "",
        n = e.category_names,
        i = n.length;
      return ("Clothing" == n[i - 1] || "Accessories" == n[i - 1] || "Shoes" == n[i - 1]) && n.reverse(), _.each(e.category_names, function(n) {
        var i = n.replace(/ /g, "+");
        t += Templates.ProductCategoryItem({
          label: n,
          link: i,
          genderString: e.genderString
        })
      }), e = null, t
    }
  },
  ProductTags: function(e) {
    if (e.typed_tags && e.category_names) {
      var t = "",
        n = e.typed_tags,
        i = e.category_names.reverse();
      return e.tagCategory = _.first(i), e.tagCategoryLabel = e.tagCategory.toLowerCase(), _.each(n, function(n) {
        if ("Clothing" != n) {
          var i = n.replace(/ /g, "+"),
            a = Formatters.StripTagTypes(n),
            r = e.tagCategory.replace(/ /gi, "+");
          t += Templates.ProductTagItem({
            label: a,
            tagCategoryLink: r,
            link: i,
            genderString: e.genderString
          })
        }
      }), t = Templates.ProductTags({
        tagHTML: t,
        tagCategoryLabel: e.tagCategoryLabel
      }), e = null, t
    }
  },
  ProductGallery: function(e) {
    var t = "";
    return _.each(e.images, function(n, i) {
      n.small && n.medium && n.large && 5 > i && (t += Templates.ProductGalleryItem({
        isSmartPhone: this.isSmartPhone,
        smUrl: e.wanteringImageRootURL + n.small.url,
        medUrl: e.wanteringImageRootURL + n.medium.url,
        lgUrl: e.wanteringImageRootURL + n.large.url,
        i: i
      }))
    }), e = null, t
  },
  ProductSummaryText: function(e, t) {
    var n = "",
      i = "",
      a = "",
      r = "",
      s = "",
      o = "",
      l = "",
      u = "",
      c = "";
    e.genderString && (c = e.genderString + "-");
    var p = " is ";
    if (e.in_stock === !1 ? (p = " was ", s = ", but it is currently out of stock ") : s = " in stock ", n = "The " + e.title, e.brand_name && (i = ' made by <a href="/' + c + "clothing/brand-" + e.linkBrand + '/" class="textLink">' + e.brand_name + "</a>", n += i), n += p, e.store_names) {
      var d = "";
      t || (d = ' target="_blank"'), r = 'at <a href="' + e.buy_url + '" class="textLink buyLink"' + d + " data-noscroll>" + e.store_names[0] + "</a>"
    }
    if (e.price ? ("$" == e.price_bucket ? l = "low priced " : "$$" == e.price_bucket ? l = "medium priced " : "$$$" == e.price_bucket && (l = "high priced "), e.sale_price ? (e.in_stock && (s = " and is in stock "), a = e.sale_percent + "% off " + r + s + ". ", a = a + "The sale price for this item " + p + "$" + e.sale_price + " USD, and it originally sold for") : (a = s + r + ". ", a = a + "The price for this item " + p), a = a + " " + Formatters.CurrencySymbol(e.currency) + e.price + " " + e.currency + ". ", n += a) : n = n + "It is for sale by " + a + ". ", e.created && (e.daysOnSite = moment(e.created).fromNow(!0), u = "It has been available through Wantering for " + e.daysOnSite + ". "), n += u, e.category_names ? (o = "Found in ", e.gender && ("m" == e.gender ? o += "Mens " : "f" == e.gender && (o += "Womens ")), catLength = e.category_names.length - 1, "Clothing" == e.category_names[catLength] && (e.category_names = e.category_names.reverse()), _.each(e.category_names, function(e) {
        o += "Clothing" == e ? '<a href="/' + c + 'clothing/" class="textLink">' + e + "</a>, " : '<a href="/' + c + "clothing/cat-" + e + '/" class="textLink">' + e + "</a>, "
      }), o = o + "this " + l, n += o) : n = n + "This " + l, n += "item ", e.typed_tags) {
      var h, m = [],
        f = "";
      _.each(e.typed_tags, function(e) {
        e.indexOf("material") >= 0 && m.push(e)
      }), h = m.length, h > 0 && (_.each(m, function(e, t) {
        f += '<a href="/' + c + "clothing/tag-" + e + '/" class="textLink">' + e.replace("material:", "").toLowerCase() + "</a>", h - 1 > t && (f += ", ", t == h - 2 && (f += "and "))
      }), n = n + "The " + e.title + " is made of " + f + ". ")
    }
    return e = null, n
  },
  CheckTrendingSummary: function() {
    var e;
    return app.trendingSummary ? e = app.trendingSummary.models[0].attributes : (app.trendingSummary = new Wantering.Module.TrendingSummary, app.trendingSummary.fetch({
      async: !1,
      success: function() {
        e = app.trendingSummary.models[0].attributes
      }
    })), e
  },
  AugmentTrendingSummaryData: function(e, t, n, i, a) {
    _.each(e, function(e) {
      var i = {};
      "object" == typeof e ? (i.label = e.label, i.path = e.path) : (i.label = e, i.path = e.replace(/ /g, "+")), i.type = n, a && (i.gender = a), "Clothing" != e && t.push(i)
    }), t.length > i && (t.length = i)
  }
};
if ("undefined" != typeof module) module.exports = Helpers;
else {
  var screenSize = Wantering.GetScreenSize(window);
  Helpers.isSmartPhone = screenSize.isSmartPhone, Helpers.isMobile = screenSize.isMobile, Helpers.isSmallScreen = screenSize.isSmallScreen, Helpers.isBigScreen = screenSize.isBigScreen, Helpers.wanteringImageRootURL = Wantering.Config.Urls.images, Helpers.s3Url = Wantering.Config.Urls.s3
}
if ("undefined" != typeof require) var Templates = require("../../app/wantering.templates.js"),
  Formatters = require("../../app/utils/wantering.utils.format.js"),
  moment = require("moment"),
  jsdom = require("jsdom").jsdom,
  parentWindow = jsdom().parentWindow,
  doc = parentWindow.document;
else var doc = document;
var ArticlePresenter = function() {
  function e(e, o) {
    o = o || {}, d = o.isSmartPhone, h = o.isSmallScreen, m = o.isEditor, f = o.isShopper, g = o.isServer, wanteringImageRootURL = o.wanteringImageRootURL, this.author = t(e), this.header = n(e), this.text = s.call(ArticlePresenter, e), this.prev = i(e, {
      direction: "prev",
      order: o.order
    }), this.next = i(e, {
      direction: "next",
      order: o.order
    }), this.photoCredits = a(e, o.route), this.dateElapsed = moment(r(e)).fromNow(), this.dateFormatted = moment(r(e)).format("MMMM Do, YYYY"), this.meta = o.meta || null, e.data && (this.summary = e.data.summary, this.title = e.data.title, this.type = Formatters.PrettifyString(e.data.type), this.typePath = e.data.type, this.source = e.data.source, this.overrideAuthor = parseInt(e.data.overrideAuthor)), this.shareHTML = Templates.Share({
      type: "article"
    }), this.isEditor = m, this.isSmartPhone = d, this.isServer = g
  }

  function t(e) {
    var t, n, i, a, r = {},
      s = "/static/css/app/assets/authors/wantering.png";
    return r.type = "wantering", e.data.source ? (r = e.data.source, r.type = "syndicate", e.meta.author && (r.uName = e.meta.author.uName)) : e.meta.author && (r = e.meta.author, r.type = "wantering"), r.uName ? (t = r.sourceName ? r.sourceName : r.nameFirst || r.nameLast ? r.nameFirst + " " + r.nameLast : r.uName, n = t.toLowerCase().replace(" ", "-"), "syndicate" === r.type ? (i = r.sourceUrl + "?utm_source=wantering", a = s, r.sourceImage && r.sourceImage.key && (a = r.sourceImage.root + "s." + r.sourceImage.ext)) : (i = "/member/" + r.uName + "/loves/", a = "/static/css/app/assets/authors/" + n + "-s.jpg"), r.caption = "Written by", {
      uName: r.uName,
      name: t,
      link: i,
      avatar: a,
      type: r.type,
      caption: r.caption
    }) : {
      uName: "Author not in DB",
      name: "Wantering",
      link: "/",
      avatar: s,
      caption: r.caption,
      type: r.type
    }
  }

  function n(e, t) {
    var n, i, a, r, s, o = 1200,
      l = !1;
    t = t || {};
    try {
      n = e.data.header
    } catch (u) {
      n = {}
    }
    try {
      i = e.meta.header.data
    } catch (u) {
      i = {}
    }
    i = i ? i : {}, n = n ? n : {};
    try {
      a = e.meta.header.data.size.o[0]
    } catch (u) {
      a = 0
    }
    switch (o > a && !d && (l = !0), i.size = i.size ? i.size : {}, !0) {
      case i.size.l && g && !d:
        r = "m";
        break;
      case i.size.l && m:
        r = "l";
        break;
      case i.size.m && d:
        r = "s";
        break;
      case !i.size.m:
        r = "o";
        break;
      default:
        r = "m"
    }
    return s = i.root && i.ext ? i.root + r + "." + i.ext : null, {
      url: s,
      focus: n.focus || "center",
      classNames: o > a ? "smallHeader" : "",
      isSmallHeader: l
    }
  }

  function i(e, t) {
    var n, i, a, r, s, o, l = t.order || "date";
    try {
      n = e.nextPrev[l][t.direction]
    } catch (u) {}
    return n ? (i = n.type ? n.type.toLowerCase() : "", a = n.linkTitle, r = n.title, s = n.meta.header.data, o = d ? "s" : "m", {
      url: "/" + i + "/" + a + "/",
      title: n.title,
      image: s ? s.root + o + "." + s.ext : ""
    }) : null
  }

  function a(e, t) {
    var n, i = e.meta.assets || [],
      a = _.reduce(i, function(e, t) {
        return e = e.concat(t)
      }, []);
    return a.unshift(e.meta.header), n = _.reduce(a, function(e, n) {
      return n && "product" != n.type && n.data ? (n.data.sourceText && n.data.sourceText.length > 1 && e.push({
        label: n.data.sourceText,
        link: Formatters.Redirect(n.data.sourceLink, t)
      }), n.data.creditText && n.data.creditText.length > 1 && e.push({
        label: n.data.creditText,
        link: Formatters.Redirect(n.data.creditLink, t)
      }), e) : e
    }, []), _.uniq(n, function(e) {
      return e.label + e.link
    })
  }

  function r(e) {
    try {
      return e.data.dateDisplayed ? e.data.dateDisplayed : e.data.dateModified
    } catch (t) {
      return ""
    }
  }

  function s(e) {
    if (!e || !e.data || !e.data.body) return "";
    var t = _.sortBy(e.data.body, function(e) {
        return parseInt(e.order)
      }),
      n = _.reduce(t, function(t, n) {
        return "imageset" === n.type || "imageSet" === n.type ? t += l(n, e.meta) : "outro" === n.type && m ? t += l(n, e.meta) : "break" !== n.type && "readmore" !== n.type || !m ? this.classmap[n.type] && (t += o.call(ArticlePresenter, n)) : t += '<p class="pArticle tumblrBreak" data-type="break" name="' + n.key + '">' + n.content + "</p>", t
      }, "", this);
    return n
  }

  function o(e) {
    var t = doc.createElement(e.type);
    return e.content = e.content.replace(/(<\/?p>)/, ""), t.innerHTML = this.clean(e.content), t.className = this.classmap[e.type] + " " + ArticlePresenter.getImagePositionClass(e.position), t.setAttribute("name", e.key), e.position && "undefined" !== e.position && t.setAttribute("data-position", e.position), this.clean(t.outerHTML)
  }

  function l(e, t) {
    if (!e) return "";
    var n = t.assets[e.key];
    switch (!0) {
      case !n:
        return "";
      case 1 === n.length:
        return u(e, n[0]);
      case n.length > 1:
        return c(e, n);
      default:
        return ""
    }
  }

  function u(e, t) {
    var n = "";
    return !t.data && m ? n = Templates.ArticleImageWrap({
      id: e.key,
      key: e.key,
      type: t.type,
      asset: {
        src: "/static/css/app/assets/article_placeholder.png",
        key: t.key,
        position: ""
      },
      data: null,
      link: null,
      text: null,
      positionClass: ArticlePresenter.getImagePositionClass(e.position)
    }) : (t.data && "image" == t.kind ? (size = e.position ? t.data.size.m ? "m" : "o" : t.data.size.l ? "l" : "o", n = Templates.ArticleImageWrap({
      id: e.key,
      key: e.key,
      type: "image",
      asset: {
        src: t.data.root + size + "." + t.data.ext,
        key: t.data.key,
        position: t.data.position
      },
      data: null,
      link: t.link,
      text: t.content,
      positionClass: ArticlePresenter.getImagePositionClass(e.position)
    })) : ("product" == t.kind || t.data && t.data.short_key) && (n = Templates.ArticleImageWrap({
      id: e.key,
      key: e.key,
      data: t.data,
      type: "product",
      asset: {},
      text: t.content,
      wanteringImageRootURL: wanteringImageRootURL,
      buyURL: ArticlePresenter.getProductBuyURL(t.data),
      positionClass: ArticlePresenter.getImagePositionClass(e.position),
      isNew: ViewHelpers.Product.checkIsNew(t.data),
      isSmartPhone: d
    })), n)
  }

  function c(e, t) {
    var n = _.reduce(t, function(e, n) {
        if (e.length >= p) return e;
        var i, a;
        if (n.data && "image" === n.data.type) n.src = !d && !h && t.length > 9 ? n.data.root + "l." + n.data.ext : n.data.root + "m." + n.data.ext, n.srcLrg = n.data.root + "l." + n.data.ext, n.focusClass = n.focus ? n.focus + "Aligned" : "", n.text = n.content, e.push(n);
        else if (n.data && n.data.images[0]) try {
          a = n.data.images[0].weight ? n.data.images[0].weight : "center", i = n.focus ? n.focus : a, n.src = ArticlePresenter.getProductImageURL(n), n.src = !d && !h && t.length > 9 ? ArticlePresenter.getProductImageURL(n, "large") : ArticlePresenter.getProductImageURL(n), n.srcLrg = ArticlePresenter.getProductImageURL(n, "large"), n.text = n.content, n.focusClass = i ? i + "Aligned" : "", n.buyURL = ArticlePresenter.getProductBuyURL(n.data), n.isNew = ViewHelpers.Product.checkIsNew(n.data), e.push(n)
        } catch (r) {
          console.log("imageSet", r)
        }
        return e
      }, [], this),
      i = Templates.ArticleImageSet({
        id: e.key,
        key: e.key,
        type: e.type,
        link: e.link,
        text: e.content,
        assets: n,
        setSizeClassNames: ArticlePresenter.getSetSizeClassNames(n.length),
        setSize: n.length,
        caption: e.caption,
        isEditor: m,
        isSmartPhone: d
      });
    return i
  }
  var p = 16,
    d = !1,
    h = !1,
    m = !1,
    f = !1,
    g = !1;
  return {
    context: function(t, n) {
      var i = new e(t, n);
      return i
    },
    classmap: {
      H1: "h1Article",
      H2: "h2Article",
      H3: "h3Article",
      H4: "h4Article",
      H5: "h5Article",
      H6: "h6Article",
      P: "pArticle",
      BLOCKQUOTE: "bqArticle -quotes",
      UL: "bulletsArticle unorderedBullets",
      OL: "bulletsArticle orderedBullets",
      LI: "bulletArticle"
    },
    clean: function(e) {
      var t = new RegExp("(</?(span|script)([^>]+)?>)", "ig");
      return e = e.replace(t, ""), e = e.replace(/(https|http):\/\/www.wantering.com\//g, "/"), e = e.replace(/<li>/g, '<li class="' + this.classmap.LI + '">')
    },
    generateUID: function() {
      return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
    },
    getImagePositionClass: function(e) {
      switch (e) {
        case "right":
          return "positionArticleRight";
        case "left":
          return "positionArticleLeft";
        default:
          return ""
      }
    },
    getImageUrl: function(e) {
      var t;
      switch (!0) {
        case d:
          t = "m";
          break;
        case h:
          t = "l";
          break;
        default:
          t = "x"
      }
      return e.data.root + t + "." + e.data.ext
    },
    getSetSizeClassNames: function(e) {
      switch (!0) {
        case e > 2 && 10 >= e:
          return "setMoreThan2";
        case e > 10:
          return "setMoreThan10";
        default:
          return ""
      }
    },
    getProductBuyURL: function(e) {
      var t;
      return t = f ? "/buy/" + e.link_title + "/" + e.short_key + "/" : Formatters.Redirect(e.store_urls[0])
    },
    getProductImageURL: function(e, t) {
      var n = wanteringImageRootURL;
      if (d) switch (t) {
        case "large":
          return n += e.data.images[0].medium ? e.data.images[0].medium.url : "";
        default:
          return n += e.data.images[0].small ? e.data.images[0].small.url : ""
      }
      if (!e.data.images || !e.data.images[0]) return n += "placeholder";
      switch (t) {
        case "large":
          return n += e.data.images[0].large ? e.data.images[0].large.url : "";
        default:
          return n += e.data.images[0].medium ? e.data.images[0].medium.url : ""
      }
    }
  }
}();
"undefined" != typeof module ? module.exports = ArticlePresenter : Wantering.ArticlePresenter = ArticlePresenter, Wantering.Module.WantShortKey = Backbone.Model.extend({}), Wantering.Module.WantShortKeys = Backbone.Collection.extend({
  model: Wantering.Module.WantShortKey,
  url: function() {
    return "/api/member/" + userName + "/loves/keys/"
  }
}), Wantering.Module.MainNavView = Backbone.View.extend({
  events: {
    "click .hasNavAction": "openNav",
    "click .subNavAction": "navigateSubMenu",
    "click .noMenu": "navigate",
    "click .loginNavAction": "login",
    "click .signUpNavAction": "signUp"
  },
  openNav: function(e) {
    var t, n;
    t = $(e.target).parent(), n = t.parent(), Wantering.Utils.OpenMenu(t, n, !1)
  },
  navigate: function() {
    return Wantering.Tracker.Event("Navigate", "Menu"), !0
  },
  navigateSubMenu: function(e) {
    $subNavItems = $("#mainNav").find(".subNavItem"), $target = $(e.target).parent(), $subNavItems.removeClass("selected"), $target.addClass("selected"), Wantering.Tracker.Event("Navigate", "Menu")
  },
  login: function() {
    return Wantering.Authentication.Login(), !1
  },
  signUp: function() {
    return Wantering.Actions.SignUp("UtilNav"), !1
  }
}), Wantering.Module.GroupItem = Backbone.Model.extend({}), Wantering.Module.GroupList = Backbone.Collection.extend({
  initialize: function(e) {
    this.options = e
  },
  model: Wantering.Module.GroupItem,
  url: function() {
    var e = "/api/";
    return "brands" == this.options.type ? e += "brands/" : "stores" == this.options.type && (e += "stores/"), e += this.options.prefix ? this.options.prefix + "/" : "letters/"
  },
  parse: function(e) {
    return e
  }
}), Wantering.Module.GroupListView = Backbone.View.extend({
  initialize: function(e) {
    this.options = e, _.has(e, "el") || this.setElement(this.template({
      groupLists: ""
    }))
  },
  template: Templates.GroupWrap,
  getGroupData: function() {
    var e, t = this.options.type;
    return "brands" == t ? e = app.brands.models[0].attributes.brand : "stores" == t && (e = app.stores.models[0].attributes.store), e
  },
  render: function() {
    var e = this.options.type,
      t = this.getGroupData();
    return $(this.el).html(Helpers.GroupList(e, t, screenSize.isSmartPhone)), this
  },
  renderGroupList: function(e, t) {
    Helpers.GroupListChunk(e, t)
  },
  renderGroup: function(e, t) {
    Helpers.GroupListItem(e, t)
  }
}), Wantering.Module.MemberListCollection = Backbone.Collection.extend({
  initialize: function(e, t) {
    this.options = t
  },
  url: function() {
    return "/api/product/wanters/" + this.options.short_key + "/"
  },
  parse: function(e) {
    this.options.total = e.total;
    var t = e.users.reduce(function(e, t) {
      return t.image = t.image.replace("http://", "https://"), e.push(t), e
    }, []);
    return t
  }
}), Wantering.Module.MemberListView = Backbone.View.extend({
  initialize: function(e) {
    var t = [];
    this.options = e, app.members ? app.members.options.short_key != this.options.short_key && (app.members.options.short_key = this.options.short_key, app.members.reset()) : app.members = new Wantering.Module.MemberListCollection(t, {
      short_key: this.options.short_key
    }), this.listenTo(app.members, "sync", this.render), app.members.length < 1 && app.members.fetch()
  },
  template: Templates.MemberList,
  render: function() {
    if (app.members.length > 0) {
      var e = this;
      this.setElement(this.template({
        total: app.members.options.total,
        members: app.members.toJSON()
      })), setTimeout(function() {
        $("#productMetaInfo").prepend($(e.el))
      }, 800)
    }
  },
  close: function() {
    Wantering.Utils.CloseViews(this)
  }
}), Wantering.Module.Product = Backbone.Model.extend({
  idAttribute: "short_key",
  initialize: function() {
    if (Wantering.Authentication.OK && "undefined" != typeof app.wantShortKeys ? app.wantShortKeys.get(this.attributes.short_key) ? this.set("product_wanted", !0) : this.set("product_wanted", !1) : this.set("product_wanted", !1), this.set("wanteringImageRootURL", Wantering.Config.Urls.images), this.get("short_key")) {
      var e, t = this.get("blogs"),
        n = this.get("articles");
      e = Wantering.Authentication.OK && app.user.get("isShopper") ? "/buy/" + this.attributes.link_title + "/" + this.attributes.short_key + "/" : Formatters.Redirect(this.attributes.store_urls[0], window.location, this.attributes.affiliate), this.set("buy_url", e);
      var i = Helpers.ProductScoreCard(this.attributes);
      if (this.set("scoreCard", i), i.influencers) {
        var a = Math.floor(Math.random() * t.length),
          r = t[a],
          s = "";
        if (r.blog.name.first && (s += r.blog.name.first + " "), r.blog.name.last && (s += r.blog.name.last), r.images && "active" == r.images[0].state) {
          var o = r.images[0].root.replace("http://", "https://");
          this.set("featureArticle", {
            name: s,
            title: r.title,
            imgURL: o + "s." + r.images[0].ext,
            permalink: r.permalink,
            index: a
          })
        }
      } else if (n.length) {
        var l = n.length - 1,
          o = n[l].meta.header.data.root.replace("http://", "https://");
        this.set("featureArticle", {
          name: "Wantering",
          title: n[l].title,
          imgURL: n[l].meta.header.data.root + "s." + n[l].meta.header.data.ext,
          permalink: "/" + n[l].type + "/" + n[l].linkTitle + "/"
        })
      }
    }
  }
}), Wantering.Module.Brand = Backbone.Model.extend({
  initialize: function(e) {
    this.options = e
  },
  url: function() {
    return "/api/brand/" + this.options.urlKey
  },
  parse: function(e) {
    return e
  }
}), Wantering.Module.Store = Backbone.Model.extend({
  initialize: function(e) {
    this.options = e
  },
  url: function() {
    return "/api/store/" + this.options.urlKey
  },
  parse: function(e) {
    return e
  }
}), Wantering.Module.Tag = Backbone.Model.extend({
  initialize: function(e) {
    this.options = e
  },
  url: function() {
    return "/api/tag/" + this.options.urlKey
  },
  parse: function(e) {
    return e
  }
}), Wantering.Module.SearchProducts = Backbone.Collection.extend({
  initialize: function() {
    this.on("sync", function(e, t) {
      var n = e.length;
      e.beforeFetchCount && (n -= e.beforeFetchCount);
      var i = t.docs.length,
        a = t.docs.slice(i - n);
      a = _.map(a, function(e) {
        return e = app.searchProducts.get(e.short_key)
      }), e.beforeFetchCount && app.searchProductsView.renderProducts(a)
    })
  },
  model: Wantering.Module.Product,
  url: function() {
    var e = [],
      t = this.searchGender;
    "mens" == t || "womens" == t ? t += "-" : t = "";
    var n = this.searchPrice;
    n = "high" == n || "med" == n || "low" == n ? "price-" + n + "/" : "";
    var i = Formatters.StripPriceFromString(this.searchTerm);
    return i.match(/(brand-|store-)/) || (i = i.replace(/(\+&|\+and)/, "").replace(/&/, "+")), "default" != this.sortOrder && e.push("sort=" + this.sortOrder), this.focusedProduct && "" != this.focusedProduct && e.push("focus=" + this.focusedProduct), e = e.length ? "?" + e.join("&") : "", "/api/" + t + "clothing/" + i + n + e
  },
  parse: function(e) {
    return this.hits = e.hits, this.nextCursorMark && (this.prevCursorMark = this.nextCursorMark), this.nextCursorMark = e.nextCursorMark, e.extra && !this.extra && e.extra.docs && (this.hits++, this.extra = e.extra, e.extra.docs.forEach(function(t) {
      var n, i = e.docs.filter(function(e, i) {
        return e.short_key == t.short_key ? (n = i, !0) : !1
      })[0];
      i ? (i.focused = !0, e.docs.splice(n, 1), e.docs.unshift(i)) : (t.focused = !0, e.docs.unshift(t), e.hits++)
    })), e.docs
  }
}), Wantering.Module.TrendingProducts = Backbone.Collection.extend({
  model: Wantering.Module.Product,
  initialize: function(e) {
    this.options = e, this.on("sync", function(e, t) {
      var n = e.length;
      e.beforeFetchCount && (n -= e.beforeFetchCount);
      var i = t.docs.length,
        a = t.docs.slice(i - n);
      a = _.map(a, function(e) {
        return e = app.trendingProducts.get(e.short_key)
      }), e.beforeFetchCount && app.trendingProductsView.renderProducts(a)
    })
  },
  url: function() {
    var e = "";
    return this.options && this.options.gender && ("mens" == this.options.gender ? e = "mens-" : "womens" == this.options.gender && (e = "womens-")), "/api/" + e + "clothing/"
  },
  parse: function(e) {
    return this.hits = e.hits, this.nextCursorMark && (this.prevCursorMark = this.nextCursorMark), this.nextCursorMark = e.nextCursorMark, e.docs
  }
}), Wantering.Module.MemberLovesProducts = Backbone.Collection.extend({
  model: Wantering.Module.Product,
  initialize: function() {
    this.on("sync", function(e, t) {
      var n = e.length;
      e.beforeFetchCount && (n -= e.beforeFetchCount);
      var i = t.docs.length,
        a = t.docs.slice(i - n);
      a = _.map(a, function(e) {
        return e = app.memberLovesProducts.get(e.short_key)
      }), app.memberLovesProductsView.renderProducts(a)
    })
  },
  url: function() {
    var e = this.username,
      t = this.setid,
      n = "/api/member/" + e + "/loves/";
    return t && (n += "?set=" + t), n
  },
  parse: function(e) {
    return this.hits = e.hits, this.fetchStart = this.fetchStart ? this.fetchStart + e.docs.length : e.docs.length, e.docs
  }
}), Wantering.Module.SimilarProducts = Backbone.Collection.extend({
  initialize: function(e) {
    var t = this;
    this.options = e || {}, this.on("sync", function(e, n) {
      var i = e.length;
      e.beforeFetchCount && (i -= e.beforeFetchCount);
      var a = n.docs.length,
        r = n.docs.slice(a - i);
      r = _.map(r, function(e) {
        return e = "productDetail" === t.options.type ? app.similarToProducts.get(e.short_key) : app.similarProducts.get(e.short_key)
      }), "productDetail" === t.options.type ? app.similarToProductsView.renderProducts(r) : app.similarProductsView.renderProducts(r)
    })
  },
  model: Wantering.Module.Product,
  url: function() {
    var e = this.productGender;
    "mens" == e || "womens" == e ? e += "-" : e = "";
    var t = this.productPrice;
    t = "high" == t || "med" == t || "low" == t ? "price-" + t + "/" : "";
    var n = this.productUrlLink + "/" + this.productUrlShortKey + "/";
    return n = Formatters.StripPriceFromString(n), "/api/" + e + "clothing-similar/" + n + t
  },
  parse: function(e) {
    return this.hits = e.hits, this.fetchStart = this.fetchStart ? this.fetchStart + e.docs.length : e.docs.length, e.docs
  }
}), Wantering.Module.ProductsView = Backbone.View.extend({
  initialize: function(e) {
    this.options = e, this.childViews = [];
    var t = this.options.type;
    _.has(e, "el") ? $(".product").each(function(e, t) {
      var n = _.find(Wantering.htmlCache, function(e) {
        return e.id == t.id
      });
      n || Wantering.htmlCache.push({
        id: t.id,
        html: t.innerHTML.trim()
      })
    }) : this.setElement(this.template({
      type: t,
      listItemsHTML: "",
      previousPage: !1,
      nextPage: !1
    }))
  },
  events: {
    click: "delegateClick"
  },
  delegateClick: _.debounce(function(e) {
    var t = $(e.target),
      n = t.data("action"),
      i = this.getProductData(),
      a = t.data("id"),
      r = i.get(a);
    switch (n) {
      case "detail":
        Wantering.Utils.SetViewClass("viewProductDetail hasOverlay"), this.viewProduct(e, r);
        break;
      case "socialData":
        this.viewSocialData(e, r);
        break;
      case "love":
        this.toggleWant(e, r);
        break;
      case "unlove":
        this.removeFromSet(e, r);
        break;
      case "buy":
        if (this.trackBuy(e, r), screenSize.isSmartPhone) return !1
    }
    i = null, r = null
  }, 250, !0),
  template: Templates.ListResultsList,
  getProductData: function() {
    var e, t = this.options.type;
    return "searchResults" == t ? e = app.searchProducts : "trending" == t ? e = app.trendingProducts : "memberLoves" == t ? e = app.memberLovesProducts : "otherMemberLoves" == t ? e = app.memberLovesProducts : "recentlyViewed" == t ? e = app.recentProducts : "similarItems" == t ? e = app.similarProducts : ("productSimilar" == t || "productSimilarLanding" == t) && (e = app.similarToProducts), e
  },
  render: function() {
    return $("#header").find(".autoCompleteWrap").removeClass("selected"), this
  },
  renderProducts: function(e) {
    function t(e, t) {
      return Math.floor(Math.random() * (t - e) + e)
    }
    var n, i, a, r, s, o = document.createDocumentFragment();
    s = screenSize.isBigScreen ? Wantering.fetchSize / 3 : Wantering.fetchSize / 2, n = t(0, s), i = t(s, 2 * s), r = [n, i], screenSize.isBigScreen && (a = t(2 * s, 3 * s), r.push(a)), _.each(e, function(e, t) {
      var n = document.createElement("div");
      e.attributes.gif.small && e.attributes.gif.medium && r.indexOf(t) >= 0 && (e.attributes.showGIF = !0), e.attributes.images.length && e.attributes.images[0].medium && (n.innerHTML = this.renderProduct(e.attributes), o.appendChild(n.firstChild))
    }, this), $(this.el).append(o)
  },
  renderProduct: function(e) {
    var t, n, i;
    return e.isNew = ViewHelpers.Product.checkIsNew(e), e.wantSet = app.wantSet ? app.wantSet.id : void 0, e.canEdit = app.user.ownsCurrentPage(), e.currencySymbol = Formatters.CurrencySymbol(e.currency), e.images = e.images.reduce(function(e, t) {
      return t.medium && t.medium.width > 72 && e.push(t), e
    }, []), n = {
      model: e,
      wanteringImageRootURL: Wantering.Config.Urls.images,
      isStaff: parseInt(Wantering.Utils.ReadCookie("isStaff")),
      isSmartPhone: screenSize.isSmartPhone
    }, t = "productSimilarLanding" == this.options.type ? Templates.ListProductSimple(n) : Templates.ListProduct(n), i = _.find(Wantering.htmlCache, function(t) {
      return t.id == e.short_key
    }), i || Wantering.htmlCache.push({
      id: "pid-" + e.short_key,
      html: t
    }), Templates.ListProductItem({
      shortKey: e.short_key,
      showGIF: e.showGIF,
      status: e.in_stock,
      focused: !!e.focused,
      productHTML: t
    })
  },
  viewProduct: function(e, t) {
    if (t) {
      var n, i, a = $(e.target).parent();
      return a.hasClass("selected") ? !1 : (Wantering.Utils.SetViewClass(Defaults.ViewClasses.productDetail), n = t.attributes, Wantering.Page.PreloadProductDetailImg(n), i = $(this.el).parent().find(".listProduct"), i.removeClass("selected"), a.addClass("selected"), "productSimilarLanding" == this.options.type ? (app.productDetail.clear({
        silent: !0
      }), app.productDetail.set(n), Wantering.Utils.ResetScroll()) : app.productDetail ? n.short_key != app.productDetail.attributes.short_key && (Wantering.Page.CleanProductDetail(), Wantering.Page.NewProductDetail(n, "overList")) : Wantering.Page.NewProductDetail(n, "overList"), !0)
    }
  },
  viewSocialData: function(e, t) {
    e.stopPropagation(), e.preventDefault();
    var n = $("#pid-" + t.attributes.short_key),
      i = $(e.target).data("featureindex");
    if (i && i != t.attributes.featureArticle.index) {
      var a = "",
        r = t.attributes.blogs[i];
      r.blog.name.first && (a += r.blog.name.first + " "), r.blog.name.last && (a += r.blog.name.last), t.attributes.featureArticle = {
        name: a,
        title: r.title,
        imgURL: r.images[0].root + "s." + r.images[0].ext,
        permalink: r.permalink,
        index: i
      }
    }
    if (n.hasClass("showSocial")) n.removeClass("showSocial preanimateState");
    else {
      var s = Templates.ProductScorecard({
          model: t.toJSON(),
          location: "listProduct",
          isSmartPhone: screenSize.isSmartPhone
        }),
        o = n.find(".socialDataItem");
      $(this.el).find(".showSocial").removeClass("showSocial"), o.find(".scoreCard").length || o.append(s), n.addClass("showSocial preanimateState"), setTimeout(function() {
        n.removeClass("preanimateState")
      }, 450), Wantering.Tracker.Event("View Social Score", "List Product", 0, t.attributes)
    }
    return !1
  },
  toggleWant: function(e, t) {
    e.stopPropagation(), e.preventDefault();
    var n = "want";
    return Wantering.Authentication.OK ? (t.get("product_wanted") === !1 ? (n = "want", "facebook" != app.user.get("provider") || app.user.get("fbPublishLikes") || Wantering.trigger("message:show", {
      title: "Did you know?",
      message: 'You can send the items you love to Facebook. <a href="#" class="button facebookButton turnOnFacebookAction">Turn on Facebook Likes</a>',
      type: "tip",
      tipID: "tipSendHeartsToFB",
      timeout: !1
    })) : n = "unwant", Wantering.trigger("sets:want", {
      model: t,
      type: n
    }), !1) : (Wantering.trigger("popup:open", {
      type: "notLoggedIn"
    }), !1)
  },
  removeFromSet: function(e, t) {
    e.stopPropagation(), e.preventDefault(), Wantering.trigger("sets:remove", {
      model: t,
      type: "removeFromSet"
    })
  },
  trackBuy: function(e, t) {
    Wantering.Tracker.Event("Buy", "List Product", 0, t.attributes), Wantering.Authentication.OK && app.user.get("isShopper") ? app.checkoutView && app.checkoutView.options.short_key == t.attributes.short_key ? app.checkoutView.showOrRenderEl() : app.checkoutView = new Wantering.Module.CheckoutView(t, {
      short_key: t.attributes.short_key,
      location: "List Product"
    }) : (Formatters.CheckXCust($(e.target)), screenSize.isSmartPhone && setTimeout(function() {
      document.location = $(e.target).prop("href")
    }, 200))
  },
  close: function() {
    Wantering.Utils.CloseViews(this)
  }
}), Wantering.Module.Profile = Backbone.Model.extend({
  initialize: function(e) {
    this.options = e, this.options.profileImage || this.fetch({
      async: !1
    })
  },
  url: function() {
    return "/api/member/" + this.options.uName + "/details/"
  },
  parse: function(e) {
    return e
  }
}), Wantering.Module.PopupAlert = Backbone.Model.extend({}), Wantering.Module.PopupAlertView = Backbone.View.extend({
  id: "popupAlert",
  className: "popupView",
  initialize: function(e) {
    this.options = e, this.options.pathname = this.options.pathname || "/", "undefined" != typeof this.options.autofocus && null != this.options.autofocus || screenSize.isMobile || (this.options.autofocus = !0), ("undefined" == typeof this.options.trackRetention || null == this.options.trackRetention) && (this.options.trackRetention = !1), ("undefined" == typeof this.options.hasTipSibling || null == this.options.hasTipSibling) && (this.options.hasTipSibling = !1), ("undefined" == typeof this.options.short_key || null == this.options.short_key) && (this.options.short_key = !1), ("undefined" == typeof this.options.openLocation || null == this.options.openLocation) && (this.options.openLocation = !1), this.pubsub = e.pubsub || Wantering, this.pubsub.on("popup:close", this.closePopup, this), this.pubsub.on("popup:open", this.openPopup, this)
  },
  render: function() {
    var e = $("html"),
      t = $("#popup"),
      n = this.options.type,
      i = encodeURIComponent("/" + Backbone.history.fragment),
      a = "/" + Backbone.history.fragment,
      r = {
        returnPath: i,
        unEncodedReturnPath: a,
        isStaff: parseInt(Wantering.Utils.ReadCookie("isStaff"))
      };
    if ("notLoggedIn" == n) $(this.el).addClass("popupViewNarrow").html(Templates.PopupNotLoggedIn(r));
    else if ("message" == n) $(this.el).addClass("popupViewNarrow").html(Templates.PopupMessage({
      title: this.data.title,
      message: this.data.message
    }));
    else if ("resetPassword" == n) $(this.el).addClass("popupViewNarrow").html(Templates.PopupResetPassword(r));
    else if ("changePassword" == n) $(this.el).addClass("popupViewNarrow").html(Templates.PopupChangePassword(r));
    else if ("forgotPassword" == n) $(this.el).addClass("popupViewNarrow").html(Templates.PopupForgotPassword(r));
    else if ("HeartItGoesOnSale" == n) $(this.el).html(Templates.PopupHeartItGoesOnSale());
    else if ("HeartItBackInStock" == n) $(this.el).html(Templates.PopupHeartItBackInStock());
    else if ("ChromeExtension" == n) r.buyLink = app.productDetail.get("buy_url"), $(this.el).html(Templates.PopupChromeExtension(r));
    else if ("Concierge" == n) $(this.el).html(Templates.PopupConcierge(r));
    else if ("WishList" == n) r.gender = searchFilters.gender, r.username = app.user.get("uName"), r.isAuthenticated = app.user.get("isAuthenticated"), $(this.el).html(Templates.PopupWishList(r));
    else if ("notLoggedInOMG" == n) $(this.el).addClass("popupViewNarrow").html(Templates.PopupNotLoggedInOmg(r));
    else if ("emailSignUp" == n) this.$el.empty().html(Templates.PopupEmailSignUp(r));
    else if ("SignUp" == n) $(this.el).addClass("popupViewNarrow").html(Templates.PopupSignUp(r));
    else if ("login" == n) $(this.el).addClass("popupViewNarrow").html(Templates.PopupLogin(r));
    else if ("NewsletterSignUp" == n) $(this.el).html(Templates.PopupNewsletter(r));
    else if ("Clique" == n) $(this.el).addClass("cliquePopupView").html(Templates.PopupClique(r));
    else if ("GifButton" == n) $(this.el).html(Templates.PopupGifButton(r));
    else if ("Search" == n) $(this.el).html(Templates.PopupSearch(r));
    else if ("welcomeStyledOn" == n) $(this.el).html(Templates.PopupWelcomeStyledOn(r));
    else if ("confirmEmail" == n) {
      var s = app.user.get("email");
      $(this.el).html(Templates.PopupConfirmAccount({
        email: s
      }))
    } else "welcome" == n && (t.addClass("whiteOverlay"), $(this.el).addClass("cleanPopupView").html(Templates.PopupGeneratingTrendingFeed({
      title: "Welcome to Wantering"
    })), setTimeout(function() {
      var e = 500,
        n = t.find(".trendingFeedGenerating"),
        i = (n.find(".recoCounter"), n.find(".counter"));
      i.each(function(t) {
        var a = $(this);
        setTimeout(function() {
          var e = "counter" + t;
          a.addClass(e), t == i.length - 1 && setTimeout(function() {
            n.addClass("isReady")
          }, 1e3)
        }, e), e += 1e3
      })
    }, 50));
    screenSize.isSmartPhone && t.addClass("forceOverlay"), Wantering.trigger("message:hide");
    var o = this;
    return t.one("click.closePopupEvent", function() {
      o.closePopup()
    }), e.addClass("hasOverlay"), this.setupValidations(), this
  },
  events: {
    click: "stop",
    "click .facebookButton": "signUpWithFacebook",
    "click .twitterButton": "signUpWithTwitter",
    "click .tumblrButton": "signUpWithTumblr",
    "click .emailButton": "signUpWithEmail",
    "click .confirmEmail": "confirmEmail",
    "click .closeAction": "closePopup",
    "click .startButton": "closePopup",
    "click .heartItButton": "heartIt",
    "click .dontRemindAction": "dontRemind",
    "click .installChromeExtension": "installChromeExtension",
    "click .completePopup": "completePopup",
    "click .trySearchAction": "trySearch",
    "click .makeGifAction": "makeGif",
    "click [data-popup]": "openPopupByLink",
    "click [data-retention]": "doRetention",
    "click #submitSignup": "createSignup",
    "click #sendForgottenPassword": "sendForgottenPassword",
    "click #resetPassword": "resetPassword",
    "click #changePassword": "changePassword",
    "click #subscribeNewsletter": "newsletterSignup",
    "focus [data-validate]": "clearValidationStyling",
    'keydown [data-validate][name="uName"]': "watchUsername",
    'blur [data-validate][name="uName"]': "validateUsername",
    'input [data-validate][name="uName"]': "cleanUsername",
    'keydown [data-validate][name="email"]': "watchEmail",
    'blur [data-validate][name="email"]': "validateEmail",
    'keydown [data-validate][name="password"]': "watchPassword",
    'blur [data-validate][name="password"]': "validatePassword"
  },
  confirmEmail: function() {
    var e = $(this.el).find("#email"),
      t = e.val(),
      n = this;
    return Wantering.Utils.Validate(e, t) ? ($.ajax({
      type: "POST",
      url: "/api/user/details/set/",
      data: {
        primary_email: t
      },
      success: function() {
        n.closePopup(), app.user.set("emailPrimary", t), Wantering.Tracker.Event("Confirm Email", "Popup")
      }
    }), !1) : !1
  },
  heartIt: function() {
    return "ProductDetail" == this.options.openLocation ? app.productDetailView.toggleWant() : this.options.short_key && $("#pid-" + this.options.short_key + " .wantAction").trigger("click"), !1
  },
  dontRemind: function(e) {
    return Wantering.Actions.TipComplete("pop" + this.options.type), this.closePopup(e), "ChromeExtension" != this.options.type ? !1 : void 0
  },
  doRetention: function(e) {
    var t = $(e.target).data("retention");
    "complete" === t && this.completePopup()
  },
  completePopup: function() {
    app.alertPopup.options.trackRetention && Wantering.Tracker.Retention("Complete Retention", "popup", "pop" + app.alertPopup.options.type), Wantering.Actions.TipComplete("pop" + app.alertPopup.options.type), app.alertPopup.options.hasTipSibling && Wantering.Actions.TipComplete("tip" + app.alertPopup.options.type)
  },
  makeGif: function() {
    return this.completePopup(), this.closePopup(), !1
  },
  trySearch: function() {
    return this.completePopup(), this.closePopup(), $("#header").find(".searchField").focus(), !1
  },
  installChromeExtension: function() {
    return chrome.webstore.install("https://chrome.google.com/webstore/detail/ljpenbedoidheeifojpcmgainkbgbjmi", this.chromeExtensionSuccess, this.chromeExtensionFailure), setTimeout(function() {
      $("#popupAlert").addClass("invisible")
    }, 200), !1
  },
  chromeExtensionSuccess: function() {
    this.completePopup(), Wantering.Tracker.Event("Buy", "Product Detail", 0, app.productDetail.attributes), Wantering.trigger("message:show", {
      type: "success",
      title: "That's it.  All done.",
      message: "Redirecting to store. Happy Shopping."
    }), setTimeout(function() {
      window.location.href = $("#primaryBuyButton").prop("href")
    }, 1e3)
  },
  chromeExtensionFailure: function() {
    $("#popupAlert").removeClass("invisible")
  },
  openPopupByLink: function(e) {
    e.preventDefault(), e.stopPropagation();
    var t = $("#popup");
    this.options.trackRetention && this.completePopup(), this.options.type = $(e.target).data("popup"), this.options.pathname = document.location.pathname, this.options.trackRetention = !1, t.empty().html(this.render().el).removeClass("hide"), setTimeout(function() {
      t.removeClass("invisible")
    }, 5), this.delegateEvents();
    var n = $(e.target).attr("href");
    app.navigate(n, {
      trigger: !1
    })
  },
  openPopup: function(e) {
    this.options.type = e.type, this.options.pathname = e.pathname || document.location.pathname, this.options.short_key = e.short_key || !1, this.options.trackRetention = e.trackRetention || !1, this.options.openLocation = e.openLocation || !1, this.options.hasTipSibling = e.hasTipSibling || !1, this.data = e;
    var t = this,
      n = $("html"),
      i = $("#popup");
    return (e.autofocus === !0 || e.autofocus === !1) && (this.options.autofocus = e.autofocus), i.empty().html(this.render().el).removeClass("hide").addClass(e.className), setTimeout(function() {
      i.removeClass("invisible"), setTimeout(function() {
        n.addClass("hasOverlay")
      }, 500), t.options.trackRetention && Wantering.Tracker.Retention("View Retention", "popup", "pop" + t.options.type)
    }, 5), this.delegateEvents(), !1
  },
  closePopup: function(e) {
    var t = (this.options.type, $("html")),
      n = $("#popup");
    if (n.unbind("click.closePopupEvent").removeClass("whiteOverlay").addClass("hide invisible"), $("#popupAlert").removeClass("cliquePopupView"), (!t.hasClass("viewProductDetail") || t.hasClass("viewProductLanding")) && t.removeClass("hasOverlay"), app.popup && (app.popup.remove(), app.popup = null), this.options.pathname) {
      var i = !0;
      "product" === Wantering.App.CurrentRoute && (i = !1), app.navigate(this.options.pathname, {
        trigger: i
      })
    }
    return "ChromeExtension" != this.options.type ? !1 : (app.productDetailView.trackEvt(e, "Buy"), void 0)
  },
  signUpWithFacebook: function(e) {
    return this.signUp(e, "Facebook"), !1
  },
  signUpWithTwitter: function(e) {
    return this.signUp(e, "Twitter"), !1
  },
  signUpWithTumblr: function(e) {
    return this.signUp(e, "Tumblr"), !1
  },
  signUpWithEmail: function(e) {
    return this.signUp(e, "Email"), !1
  },
  createSignup: function(e) {
    e.preventDefault(), Wantering.trigger("message:hide"), this.request({
      url: "/api/user/signup/",
      method: "POST",
      data: {
        uName: this.$('[name="uName"]').val(),
        password: this.$('[name="password"]').val(),
        email: this.$('[name="email"]').val()
      }
    }).done(function(e) {
      if ("success" == e.result) app.user = new Wantering.App.User(e.user), setTimeout(function() {
        document.location.pathname = "/tell-us-your-style/"
      }, 200);
      else {
        if ("emailTaken" == e.result) {
          var t = $('[name="email"]'),
            n = t.next("._message");
          return t.addClass("isInvalid"), n.html("This email is already taken."), void 0
        }
        Wantering.trigger("message:show", {
          message: e.result,
          type: "error",
          timeout: !1
        })
      }
    })
  },
  validateEmail: function(e) {
    e.preventDefault(), Wantering.trigger("message:hide"), this.request({
      url: "/api/user/signup/",
      method: "POST",
      data: {
        uName: this.$('[name="uName"]').val(),
        password: this.$('[name="password"]').val(),
        email: this.$('[name="email"]').val()
      }
    }).done(function(e) {
      if ("success" == e.result) app.user = new Wantering.App.User(e.user), setTimeout(function() {
        document.location.pathname = "/tell-us-your-style/"
      }, 200);
      else {
        if ("emailTaken" == e.result) {
          var t = $('[name="email"]'),
            n = t.next("._message");
          return t.addClass("isInvalid"), n.html("This email is already taken."), void 0
        }
        Wantering.trigger("message:show", {
          message: e.result,
          type: "error",
          timeout: !1
        })
      }
    })
  },
  signUp: function(e, t) {
    if (Wantering.Tracker.Event("Sign Up " + t, "Popup - " + this.options.type), Wantering.Tracker.Retention("Complete Retention", "popup", "pop" + app.alertPopup.options.type), "Email" != t) {
      var n = $(e.target).prop("href");
      setTimeout(function() {
        window.location.href = n
      }, 200)
    }
  },
  sendForgottenPassword: function(e) {
    e.preventDefault(), this.request({
      url: "/api/user/forgot/password/",
      method: "POST",
      data: {
        email: $('[name="email"]').val()
      }
    }).done(function(e) {
      this.responseWithErrorMessage(e, function() {
        Wantering.trigger("popup:open", {
          type: "message",
          title: "Email Sent",
          message: "An email with your password reset link has been sent. If you do not receive it, please check your spam folder."
        })
      })
    })
  },
  resetPassword: function(e) {
    e.preventDefault();
    var t = document.location.search.replace(/\?token=/, "").split("&")[0],
      n = $('[name="password"]').val();
    this.request({
      url: "/api/user/forgot/password/change/",
      method: "POST",
      data: {
        token: t,
        password: n
      }
    }).done(function(e) {
      this.responseWithErrorMessage(e, function() {
        Wantering.trigger("popup:open", {
          type: "login"
        }), app.navigate("/login/", {
          trigger: !1
        }), Wantering.trigger("message:show", {
          message: "Your password was successfully reset. Please login."
        })
      })
    })
  },
  changePassword: function(e) {
    e.preventDefault();
    var t = $('[name="currentPassword"]').val(),
      n = $('[name="password"]').val();
    this.request({
      url: "/api/user/change/password/",
      method: "POST",
      data: {
        old: t,
        "new": n
      }
    }).done(function(e) {
      this.responseWithErrorMessage(e, function() {
        Wantering.trigger("message:show", {
          message: "Your password was updated."
        }), app.navigate("/", {
          trigger: !1
        }), Wantering.trigger("popup:close")
      })
    })
  },
  newsletterSignup: function(e) {
    e.preventDefault();
    var t = "";
    "any" != searchFilters.gender ? t = "mens" == searchFilters.gender ? "m" : "f" : app.articlePage && (t = app.articlePage.attributes.data.gender);
    var n = "/api/user/signup/newsletter/";
    Wantering.Authentication.OK && (n = "/api/user/tags/add/"), this.request({
      url: n,
      method: "POST",
      data: {
        gender: t,
        tags: "clique",
        email: this.$('[name="email"]').val()
      }
    }).done(function(e) {
      this.completePopup(), this.closePopup(), "success" === e.result ? Wantering.trigger("message:show", {
        type: "success",
        title: "Awesome, thanks.",
        message: "Please check your email for a confirmation link.",
        timeout: !1
      }) : Wantering.trigger("message:show", {
        type: "error",
        title: "Oops. No worries.",
        message: "It looks like you have already signed up.",
        timeout: !1
      })
    })
  },
  stop: function(e) {
    e.stopPropagation()
  }
}), _.extend(Wantering.Module.PopupAlertView.prototype, Wantering.Mixin.Validations), _.extend(Wantering.Module.PopupAlertView.prototype, Wantering.Mixin.Requests), _.extend(Wantering.Module.PopupAlertView.prototype, Wantering.Mixin.Messages), Wantering.Module.WantSet = Backbone.Model.extend({
  request: function(e) {
    var t = {
      context: this,
      url: "/api/user/want/set/",
      data: {
        name: this.get("name")
      },
      method: "POST"
    };
    return t.url = "/api/user/want/set" + e.action, e.action.indexOf("create") >= 0 && Wantering.Tracker.Event("Create Set", "Sets"), delete e.action, t = _.extend(t, e), Backbone.ajax(t).done(function(e) {
      "success" != e.result && Wantering.trigger("message:show", {
        type: "error",
        message: e.result
      })
    }).fail(function() {
      Wantering.trigger("message:show", {
        type: "error",
        message: "Error"
      })
    })
  },
  create: function(e) {
    e = e || {};
    var t = {
      action: "/create/",
      data: {
        name: e.name || this.get("name")
      }
    };
    return t = _.extend(t, e), this.request(t)
  },
  rename: function(e) {
    e = e || {}, e.name && this.set("name", e.name);
    var t = {
      action: "/rename/",
      data: {
        id: this.id,
        name: e.name || this.get("name")
      }
    };
    return t = _.extend(t, e), this.request(t)
  },
  destroy: function(e) {
    var t = {
      action: "/delete/",
      data: {
        id: this.id
      }
    };
    return t = _.extend(t, e), this.request(t)
  },
  parse: function(e) {
    return e.id && (e.userWant = e.id > 99999), e
  }
}), Wantering.Module.WantSets = Backbone.Collection.extend({
  model: Wantering.Module.WantSet,
  parse: function(e) {
    return e = e.filter(function(e) {
      return 1 !== e.id
    })
  },
  userSetsJSON: function() {
    var e = _.reduce(this.models, function(e, t) {
      return t.id >= 1e5 && e.push(t.toJSON()), e
    }, []);
    return _.sortBy(e, function(e) {
      return e.name.toLowerCase()
    })
  },
  standardSetsJSON: function() {
    var e = _.reduce(this.models, function(e, t) {
      return t.id > 1 && t.id < 1e5 && e.push(t.toJSON()), e
    }, []);
    return _.sortBy(e, function(e) {
      return e.name.toLowerCase()
    })
  }
}), Wantering.Module.SetsPopupView = Backbone.View.extend({
  id: "popupAlert",
  className: "popupView",
  initialize: function(e) {
    this.options = e || {}, this.pubsub = this.options.pubsub || Wantering, this.pubsub.off("sets:close"), this.pubsub.off("sets:want"), this.pubsub.off("sets:edit"), this.pubsub.off("sets:remove"), this.pubsub.off("sets:create"), this.pubsub.on("sets:close", this.closePopup, this), this.pubsub.on("sets:want", this.want, this), this.pubsub.on("sets:edit", this.edit, this), this.pubsub.on("sets:remove", this.remove, this), this.pubsub.on("sets:create", this.edit, this), this.collection = app.wantSets
  },
  render: function(e) {
    var t = $("#popup");
    return $(this.el).removeClass("confirming").addClass("popupViewNarrow").html(e), screenSize.isSmartPhone && t.addClass("forceOverlay"), t.one("click.closePopupEvent", this.closePopup.bind(this)), $("html").addClass("hasOverlay"), this
  },
  events: {
    "click .closeAction": "closePopup",
    "click [data-set]": "addToSet",
    'click [data-remove="loves"]': "unWant",
    "click [data-removefromset]": "removeFromSet",
    "click [data-createset]": "createSetInline",
    "click [data-deleteset]": "deleteSet",
    "click [data-confirm]": "confirmDeleteSet",
    "click [data-saveset]": "saveEdits",
    "click [data-save]": "saveToSet",
    "click [data-cancel]": "closePopup",
    "click [data-canceldelete]": "cancelDeleteSet",
    "click [data-toggle]": "toggleMenu",
    "click [data-newset]": "createNewSet",
    click: "stop"
  },
  want: function(e) {
    var t, n;
    app.setsPopup && app.setsPopup.options.lastSet ? n = app.setsPopup.options.lastSet.toJSON() : app.wantSets.models[1] && (n = app.wantSets.models[1].toJSON()), this.product = e.model, this.product.set("product_wanted", !0), this.options.pathname = "/" + Backbone.history.fragment, this.type = e.type, t = {
      type: e.type,
      sets: app.wantSets.standardSetsJSON(),
      userSets: app.wantSets.userSetsJSON(),
      currentSet: n || {
        name: "Choose a collection"
      },
      product: this.product.toJSON()
    }, this.openPopup(Templates.PopupSets(t)), Wantering.trigger("message:show", {
      title: "Did you know?",
      message: "You can now sort your loves into collections. Try it.",
      type: "tip",
      tipID: "tipNewFeatureSets",
      delay: 1e3,
      timeout: !1
    })
  },
  remove: function(e) {
    app.wantSet && (this.wantSet = app.wantSet, this.type = e.type, this.product = e.model, this.openPopup(Templates.PopupRemoveSet({
      set: app.wantSet ? app.wantSet.toJSON() : null,
      product: this.product ? this.product.toJSON() : null
    })))
  },
  cancelDeleteSet: function(e) {
    this.stop(e), $(this.el).removeClass("confirming")
  },
  edit: function(e) {
    var t = {};
    e && e.wantSet && (this.wantSet = e.wantSet, this.type = e.type, t = e.wantSet.toJSON()), this.openPopup(Templates.PopupEditSet({
      set: t
    }))
  },
  openPopup: function(e) {
    $("#popup").empty().html(this.render(e).el).removeClass("hide"), setTimeout(function() {
      $("#popup").removeClass("invisible")
    }, 5), this.delegateEvents()
  },
  deleteSet: function() {
    this.wantSet.destroy({
      context: this
    }).done(function(e) {
      if ("success" == e.result) {
        var t = this.wantSet.get("name"),
          n = "/member/" + app.user.get("uName") + "/collections/";
        Wantering.trigger("sets:close"), app.user.set("wantSets", e.wantSets), app.wantSets.remove(this.wantSet), document.location.pathname == n ? Wantering.trigger("profile:removeset", {
          set: this.wantSet.id
        }) : app.navigate(n, {
          trigger: !0
        }), setTimeout(function() {
          Wantering.trigger("message:show", {
            keepOpenOnNavigate: !0,
            message: t + " was removed from your sets."
          })
        }, 500)
      }
    })
  },
  confirmDeleteSet: function(e) {
    e.stopPropagation(), e.preventDefault(), $(this.el).addClass("confirming")
  },
  saveEdits: function() {
    {
      var e = this.$('[name="setname"]').val(),
        t = app.user.wantSets,
        n = "/member/" + app.user.get("uName") + "/collections/";
      new RegExp("^" + n + "$")
    }
    this.wantSet.rename({
      name: e,
      context: this
    }).done(function(e) {
      "success" == e.result && (t = e.wantSets, wantSet = _.find(e.wantSets, function(e) {
        return e.id == this.wantSet.id
      }, this), Wantering.trigger("sets:close"), app.wantSet && (app.wantSet = app.wantSet.set(wantSet, {
        parse: !0
      })), app.wantSets.reset(t), app.user.set("wantSets", t), document.location.pathname != n ? app.navigate(n + wantSet.link + "/", {
        trigger: !0
      }) : (Wantering.trigger("header:updateSet"), Wantering.trigger("sets:update", {
        set: wantSet
      })))
    })
  },
  updateCachedModel: function(e, t) {
    var n = ["searchProducts", "trendingProducts", "memberLovesProducts"];
    _.each(n, function(n) {
      var i = app[n];
      if (i) {
        var a = i.get(e);
        a && a.set("product_wanted", t)
      }
    })
  },
  unWant: function(e) {
    this.stop(e);
    var t = this.product.get("short_key"),
      n = $("#pid-" + t),
      i = n.find(".wantAction"),
      a = $('[data-id="' + this.product.attributes.short_key + '"][data-action="love"]');
    this.product.set("product_wanted", !1), this.updateCachedModel(this.product.id, !1), i.removeClass("wanted"), a.removeClass("wanted"), Backbone.history.fragment.match(/(loves|sets)/) && app.user.ownsCurrentPage() && n.addClass("hide"), Wantering.Actions.Want(this.product.attributes, "unwant", "List Product", Backbone.history.fragment), this.closePopup()
  },
  addToSet: function(e) {
    this.stop(e);
    var t = $(e.target).data("set"),
      n = app.wantSets.get(t);
    this.$("[data-selectedset]").text(n.get("name")).data("selectedset", n.id).removeClass("placeholder"), this.options.lastSet = n, this.$(".memberSetsDropDown").parent().removeClass("selected")
  },
  saveToSet: function(e) {
    this.stop(e);
    var t = this.$("[data-selectedset]").data("selectedset"),
      n = $("#pid-" + this.product.get("short_key") + " .wantAction"),
      i = $('[data-id="' + this.product.get("short_key") + '"][data-action="love"]');
    i.addClass("wanted"), n.addClass("wanted"), t && "" != t && (Wantering.Actions.Want(this.product.attributes, "want", "List Product", Backbone.history.fragment, t), Wantering.Tracker.Event("Save to Set", "Sets"), this.closePopup())
  },
  removeFromSet: function(e) {
    this.stop(e);
    var t = $(e.target).data("removefromset"),
      n = this.product.get("short_key"),
      i = $("#pid-" + n);
    Wantering.Actions.Want(this.product.attributes, "unwant", "List Product", Backbone.history.fragment, t), Wantering.Tracker.Event("Remove from Set", "Sets"), app.user.ownsCurrentPage() && i.addClass("hide"), this.closePopup()
  },
  createSet: function(e) {
    var t, n = this.$('[name="setname"]').val();
    "" != n && (t = new Wantering.Module.WantSet({
      name: n
    }), t.create({
      context: this
    }).done(function(i) {
      "success" == i.result && (app.user.set("wantSets", i.wantSets), app.wantSets.reset(i.wantSets, {
        parse: !0
      }), t = app.wantSets.find(function(e) {
        return e.get("name").toLowerCase() == n.toLowerCase()
      }), this.options.lastSet = t, e.call(this, t))
    }))
  },
  createSetInline: function() {
    this.createSet(function(e) {
      context = {
        type: this.type,
        sets: app.wantSets.standardSetsJSON(),
        userSets: app.wantSets.userSetsJSON(),
        currentSet: e.toJSON()
      }, this.openPopup(Templates.PopupSets(context))
    })
  },
  createNewSet: function() {
    this.options.pathname = void 0, this.closePopup(), this.createSet(function(e) {
      Wantering.trigger("sets:add", {
        set: e
      })
    })
  },
  toggleMenu: function(e) {
    this.stop(e);
    var t = $(e.target),
      n = (t.data("toggle"), t.parent());
    Wantering.trigger("message:hide"), n.toggleClass("selected")
  }
}), _.extend(Wantering.Module.SetsPopupView.prototype, Wantering.Mixin.Utils), _.extend(Wantering.Module.SetsPopupView.prototype, Wantering.Mixin.Popups), Wantering.Module.TrendingItem = Backbone.Model.extend(), Wantering.Module.TrendingSummary = Backbone.Collection.extend({
  model: Wantering.Module.TrendingItem,
  url: function() {
    return "/api/trending/summary/"
  }
}), Wantering.Module.TrendingGroup = Backbone.Collection.extend({
  model: Wantering.Module.TrendingItem,
  parse: function(e) {
    return e.docs
  }
}), Wantering.Module.TrendingGroupView = Backbone.View.extend({
  initialize: function(e) {
    _.has(e, "el") || this.setElement(this.template({
      label: Formatters.PrettifyString(e.type),
      trendingGroupHTML: ""
    })), this.options = e
  },
  template: Templates.TrendingGroupWrap,
  render: function() {
    return $(this.el).append(Helpers.TrendingGroupList(app.trendingGroup.models, this.options.type, Wantering.Config.Urls.s3)), this
  },
  close: function() {
    Wantering.Utils.CloseViews(this)
  }
}), Wantering.Module.MatchView = Backbone.View.extend({
  tagName: "li",
  className: "friend",
  template: _.template('<a href="#" class="friendAction" style="background-image: url({{picture.data.url}});">{{name}}</a>'),
  render: function() {
    return $(this.el).html(this.template(this.model)).data("fid", this.model.id), this
  },
  events: {
    "click .friendAction": "recommendToThisFriend"
  },
  recommendToThisFriend: function() {
    $(this.el).closest(".productAction").removeClass("selected"), Wantering.Sharing.RecommendItem(this.model.id)
  }
}), Wantering.Module.Recommend = Backbone.Model.extend({}), Wantering.Module.RecommendView = Backbone.View.extend({
  className: "recommend",
  template: _.template('<div class="recommendWrap"><h3 class="h3Widget">Send this item to...</h3><input type="text" class="recommendField" placeholder="Who would this look good on?" /></div><ul class="recommendList"></ul>'),
  initialize: function() {
    this.childViews = [], ("undefined" == typeof app.fbFriends || null == app.fbFriends) && (app.fbFriends = new Wantering.Sharing.FBFriends([]), app.fbFriends.getFBFriends())
  },
  render: function() {
    return $(this.el).html(this.template()), this
  },
  events: {
    click: "stop",
    "keyup .recommendField": "fieldListen"
  },
  keyCodeMap: {
    13: "enter",
    38: "up",
    40: "down"
  },
  fieldListen: function(e) {
    var t = e.keyCode;
    t in this.keyCodeMap ? this.moveSuggestionMarker(this.keyCodeMap[t]) : this.findFriend(e)
  },
  findFriend: _.debounce(function(e) {
    var t, n, i;
    return t = $(e.target), n = $(this.el).find(".recommendList"), i = t.val(), i.length > 0 ? app.fbFriends.searchFBFriends(i, function(e) {
      app.recommendView.renderMatchingFriends(e, n)
    }) : n.empty(), !1
  }, 225),
  moveSuggestionMarker: function(e) {
    var t, n = $(this.el).find(".friend"),
      i = n.length,
      a = $(this.el).find(".selected"),
      r = n.index(a);
    i > 0 && ("down" == e ? (a.removeClass("selected"), t = i - 1 > r ? r + 1 : 0, n.eq(t).addClass("selected")) : "up" == e ? (a.removeClass("selected"), t = r - 1, n.eq(t).addClass("selected")) : "enter" == e && (-1 == r ? n.parent().empty() : ($(this.el).closest(".productAction").removeClass("selected"), Wantering.Sharing.RecommendItem(a.data("fid")))))
  },
  renderMatchingFriends: function(e, t) {
    var n = document.createDocumentFragment(),
      i = document.createDocumentFragment(),
      a = n.appendChild(i),
      r = this;
    _.each(e, function(e) {
      a.appendChild(r.renderMatch(e))
    }), t.html(a)
  },
  renderMatch: function(e) {
    var t, n = new Wantering.Module.MatchView({
      model: e
    });
    return t = n.render().el, this.childViews.push(n), t
  },
  stop: function(e) {
    e.stopPropagation()
  },
  close: function() {
    Wantering.Utils.CloseViews(this)
  }
}), Wantering.Module.FilterNav = Backbone.Model.extend({}), Wantering.Module.FilterNavView = Backbone.View.extend({
  initialize: function() {
    this.setupPriceSlider("#pricerange"), Wantering.off("price:set"), Wantering.off("price:clear"), Wantering.on("price:set", this.setCurrentPriceFilters, this)
  },
  events: {
    "click .hasSubMenu": "toggleFilterMenu",
    "click .disabled": "stop",
    "click .saleNavAction": "statusSale",
    "click .newNavAction": "statusNew",
    "click .allNavAction": "statusAll",
    "click .genderClearAction": "filterAnyGender",
    "click .womensNavAction": "filterWomens",
    "click .mensNavAction": "filterMens",
    "click .colorClearAction": "clearColor",
    "click .colorMenuAction": "filterColor"
  },
  setupPriceSlider: function(e) {
    this.priceslider = this.$(e), this.priceslider.noUiSlider({
      start: [0, 5e3],
      connect: !0,
      direction: "ltr",
      orientation: "horizontal",
      behaviour: "tap-drag",
      format: wNumb({
        decimals: 0
      }),
      range: {
        min: [0, 25],
        "30%": [100, 50],
        "50%": [500, 100],
        "70%": [1e3, 500],
        max: [Wantering.Config.Const.MAX_PRICE]
      }
    }).on({
      slide: this.displayPriceRange.bind(this),
      change: this.setPriceRange.bind(this)
    })
  },
  setCurrentPriceFilters: function(e) {
    var t = e.price,
      n = Wantering.Config.Const.MAX_PRICE,
      i = 0;
    switch (!0) {
      case t.indexOf("between") > -1:
        i = parseInt(t.match(/\d+/g)[0]), n = parseInt(t.match(/\d+/g)[1]);
        break;
      case t.indexOf("over") > -1:
        i = parseInt(t.match(/\d+/)), n = n;
        break;
      case t.indexOf("under") > -1:
        n = parseInt(t.match(/\d+/)), i = 0;
        break;
      case t.indexOf("above") > -1:
        i = parseInt(t.match(/\d+/)), n = n;
        break;
      case t.indexOf("below") > -1:
        n = parseInt(t.match(/\d+/)), i = 0
    }
    this.priceslider.val([i, n]), this.displayPriceRange()
  },
  clearPriceRange: function() {
    this.priceslider.val([0, Wantering.Config.Const.MAX_PRICE])
  },
  displayPriceRange: function() {
    var e = this.priceslider.val()[0],
      t = this.priceslider.val()[1],
      n = this.$("[data-min]"),
      i = this.$("[data-max]"),
      a = Formatters.PrettifyNumber(e),
      r = Formatters.PrettifyNumber(t);
    t >= Wantering.Config.Const.MAX_PRICE && (r += "+"), i.text("$" + r), n.text("$" + a)
  },
  setPriceRange: function() {
    var e, t = this.priceslider.val()[0],
      n = this.priceslider.val()[1];
    switch (!0) {
      case 0 == t && n == Wantering.Config.Const.MAX_PRICE:
        e = "any";
        break;
      case 0 == t:
        e = "under " + n;
        break;
      case n == Wantering.Config.Const.MAX_PRICE:
        e = "over " + t;
        break;
      default:
        e = "between " + t + " and " + n
    }
    searchFilters.price = e, this.changeFilterAndNavigate("price", e, "LABEL"), app.state.updateSearchField()
  },
  toggleFilterMenu: function(e) {
    var t = $(e.target).closest(".navItem"),
      n = $(this.el).find(".filterNav");
    return Wantering.Utils.OpenMenu(t, n, !1), !1
  },
  setFilterClass: function(e, t, n) {
    if (n) {
      var i = "any new sale womens mens anyColor";
      n.removeClass(i), ("color" != e || "any" === t) && n.addClass(t)
    }
  },
  setFilterText: function(e, t) {
    t.find(".label").text(e)
  },
  changeFilterAndNavigate: function(e, t, n, i) {
    var a = $(this.el).find(".filterNav");
    if (this.setFilterClass(e, t, i), "toggle" != e && i && (this.setFilterText(n, i), "any" != t && Wantering.Utils.OpenMenu(i, a, !1)), Wantering.Tracker.Search("Filter", "Sidebar"), Wantering.Config.FilteredRoutes.indexOf(Wantering.App.CurrentRoute) >= 0) {
      var r = app.state.setRoute();
      Wantering.Utils.TransitionView("/" + Backbone.history.fragment, r), app.navigate(r, {
        trigger: !0
      })
    }
  },
  statusAll: function(e) {
    this.stop(e), this.toggleStatus(e, "all")
  },
  statusNew: function(e) {
    this.stop(e), this.toggleStatus(e, "new")
  },
  statusSale: function(e) {
    this.stop(e), this.toggleStatus(e, "sale")
  },
  toggleStatus: function(e, t) {
    var n, i;
    switch (t) {
      case "sale":
        searchFilters.sale = "on sale", searchFilters.newFilter = "any", n = "sale";
        break;
      case "new":
        searchFilters.sale = "any", searchFilters.newFilter = "in the last week", n = "new";
        break;
      default:
        searchFilters.sale = "any", searchFilters.newFilter = "any", n = "any"
    }
    i = $(this.el).find(".statusFilterItem"), this.changeFilterAndNavigate("toggle", n, "", i), app.state.updateSearchField()
  },
  filterAnyGender: function(e) {
    this.stop(e), this.filterGender(e, "any", "Gender")
  },
  filterWomens: function(e) {
    this.stop(e), this.filterGender(e, "womens", "Womens")
  },
  filterMens: function(e) {
    this.stop(e), this.filterGender(e, "mens", "Mens")
  },
  filterGender: function(e, t, n) {
    searchFilters.gender = t;
    var i = $(this.el).find(".genderFilterItem");
    this.changeFilterAndNavigate("gender", t, n, i)
  },
  filterColor: function(e) {
    this.stop(e);
    var t = $(e.target),
      n = $(this.el).find(".colorFilterItem"),
      i = t.text(),
      a = i;
    searchFilters.color = a, n.attr("data-color", a.toLowerCase().replace(" ", "+")), searchFilters.hex = "any", this.changeFilterAndNavigate("color", a, i, n), console.log("change searchfield here"), app.state.updateSearchField()
  },
  clearColor: function(e) {
    this.stop(e);
    var t = $(this.el).find(".colorFilterItem"),
      n = "Color",
      i = "any";
    searchFilters.color = i, searchFilters.hex = i, t.attr("data-color", i.toLowerCase()), this.changeFilterAndNavigate("color", i, n, t), console.log("change searchfield here"), app.state.updateSearchField()
  },
  stop: function(e) {
    e.stopPropagation(), e.preventDefault()
  }
}), Wantering.Module.SearchBox = Backbone.Model.extend({}), Wantering.Module.SearchBoxView = Backbone.View.extend({
  initialize: function(e) {
    if (_.has(e, "el")) {
      var t = ["index", "product"];
      if (t.indexOf(Wantering.App.CurrentRoute) >= 0) {
        var n = this;
        setTimeout(function() {
          $(n.el).find(".searchField").focus()
        }, 1e3)
      }
    } else this.setElement(this.template({
      classes: "ir primaryButton"
    }));
    this.options = e, this.options.showAutoSuggest = !1, Wantering.off("search:update"), Wantering.off("search:replace"), Wantering.on("search:update", this.animateField, this), Wantering.on("search:replace", this.replaceField, this)
  },
  template: Templates.Search,
  events: {
    "submit form": "doSearch",
    "click .primaryButton": "buttonSearch",
    "keydown .searchField": "fieldListen",
    "search .searchField": "listenForReset",
    "blur .searchField": "blurSearchBox",
    "focus .searchField": "focusSearchBox"
  },
  search: function() {
    var e = this.$(".searchField").val();
    $(".autoCompleteWrap").removeClass("selected"), Wantering.Actions.Search(e, this.options.type)
  },
  doSearch: function(e) {
    e.preventDefault(), this.options.showAutoSuggest = !1, this.search()
  },
  buttonSearch: function(e) {
    e.preventDefault(), e.stopPropagation(), this.search()
  },
  focusSearchBox: function() {
    $(this.el).addClass("searchOpen")
  },
  blurSearchBox: function() {
    $(this.el).removeClass("searchOpen")
  },
  keyCodeMap: {
    13: "enter",
    38: "up",
    40: "down"
  },
  listenForReset: function(e) {
    var t, n, i;
    t = $(e.target), n = $(this.el).find(".autoCompleteWrap"), i = t.val(), "" == i && (n.removeClass("selected"), n.empty())
  },
  replaceField: function(e) {
    var t = $(".searchField");
    $("#header").hasClass("searchOpen") || t.val(e.string)
  },
  checkFieldFocus: function() {
    this.isFocused = !0, (self.animationTimeout || this.autoFillTimeout) && (clearTimeout(this.animationTimeout), clearTimeout(this.autoFillTimeout), this.animationTimeout = void 0, this.autoFillTimeout = void 0, $(".searchField").val(""), $("#header").removeClass("searchOpen"))
  },
  animateField: function(e) {
    var t, n, i = $(".searchField"),
      a = e.string || "",
      r = this;
    "SiteIntro" != this.options.type ? t = $("#header") : n = $(".mastheadSet"), i.on("focus", this.checkFieldFocus.bind(this)), _.each(i, function(i, s) {
      if (!$(i).hasClass("footerSearchField")) {
        var o = $(i).val(),
          l = o.length;
        if ("" == o || e.override) {
          l && l > 0 && (a = a.substr(l));
          var u = a.split(""),
            c = u.length;
          if (c > 0) {
            var p = "",
              s = 0;
            if (o.length > 0 && (p = o), t && t.addClass("searchOpen"), r.isFocused) return;
            this.autoFillTimeout = setTimeout(function() {
              r.insertLetter(u[0], p, t, n, i, u, s)
            }, 1e3)
          }
        }
      }
    }, this)
  },
  insertLetter: function(e, t, n, i, a, r, s) {
    var o = Math.round(Math.random() * (300 - 6 * r.length)),
      l = this;
    this.animationTimeout = setTimeout(function() {
      n || i.addClass("darkenSet"), t += e, $(a).val(t), l.isFocused || s === r.length - 1 && (n ? setTimeout(function() {
        n.removeClass("searchOpen")
      }, 1e3) : $("#siteIntro .primaryButton").focus()), s++, r[s] ? l.insertLetter(r[s], t, n, i, a, r, s) : (l.animationTimeout = void 0, l.autoFillTimeout = void 0, n && n.removeClass("searchOpen"))
    }, o)
  },
  fieldListen: function(e) {
    {
      var t = e.keyCode;
      $(this.el).find(".autoCompleteWrap")
    }
    app.autoCompleteView && t in this.keyCodeMap ? app.autoCompleteView.moveSuggestionMarker(e, this.keyCodeMap[t]) : (this.options.showAutoSuggest = !0, this.autoSuggest(e, t))
  },
  autoSuggest: _.debounce(function(e) {
    var t, n, i;
    if (t = $(e.target), n = $(this.el).find(".autoCompleteWrap"), i = t.val(), i.length > 2) {
      if (app.autoComplete) return n.html(app.autoCompleteView.render().el), void 0;
      app.autoCompleteView = new Wantering.Module.AutoCompleteView, term = i.trim(), term.length > 2 && $.ajax({
        url: "/api/autocomplete/?max=40&s=" + encodeURIComponent(term),
        context: this
      }).done(function(e, t) {
        "success" == t && app.autoCompleteView && (app.autoCompleteView.sort({
          term: i,
          results: e
        }), n.html(app.autoCompleteView.render().el))
      }), this.options.showAutoSuggest && n.addClass("selected")
    } else n.removeClass("selected"), n.empty(), app.autoCompleteView && app.autoCompleteView.close();
    return !1
  }, 300)
}), Wantering.Module.Suggestion = Backbone.Model.extend({}), Wantering.Module.SuggestionView = Backbone.View.extend({
  tagName: "li",
  className: "menuItem autoCompleteItem",
  template: Templates.Autosuggest,
  render: function() {
    var e = this.augmentSuggestion(this.model.attributes);
    return $(this.el).html(this.template(e)), this
  },
  augmentSuggestion: function(e) {
    var t = "clothing/",
      n = searchFilters.gender;
    n && "any" != n && (t = n + "-" + t);
    var i = {
      brand: "/" + t + "brand-" + e.path + "/",
      store: "/" + t + "store-" + e.path + "/",
      category: "/" + t + "cat-" + Formatters.FormatSearchForURL(e.t, !1),
      tag: "/" + t + "tag-" + e.type + ":" + Formatters.FormatSearchForURL(e.t, !1),
      article: "/" + e.type + "/" + e.linkTitle + "/",
      color: "/" + t + "color-" + Formatters.FormatSearchForURL(e.t, !0),
      "brand-category": "/" + t + e.path + "/",
      "store-category": "/" + t + e.path + "/",
      "tag-category": "/" + t + "tag-" + e.type + ":" + e.path + "/"
    };
    return e.link = i[e.kind], e.path = Wantering.Config.Urls.s3, e
  }
}), Wantering.Module.AutoCompleteView = Backbone.View.extend({
  tagName: "ul",
  className: "menu menuLeft autoComplete",
  initialize: function(e) {
    this.options = e, this.childViews = [], this.collection = [], $("body").off("click", this.hide), $("body").on("click", this.hide.bind(this))
  },
  events: {
    "click .autoCompleteItem": "takeSuggestion"
  },
  sort: function(e) {
    e.term && (e.term = Formatters.CleanForMatch(e.term.trim()));
    var t = e.term.split(" "),
      n = new RegExp("^" + e.term.replace(/ (and|&) /, "\\s*(and|&)\\s*"), "i"),
      i = new RegExp("^" + e.term + "$", "i"),
      a = new RegExp("^" + t[0], "i"),
      r = _.reduce(e.results, function(e, t) {
        return (t.i || t.full || "tag" == t.kind) && a.test(t.t) && (t.index = 0, e.push(t)), e
      }, []),
      s = _.reduce(e.results, function(e, t, n) {
        var a = new RegExp(t.t.slice(0, 3), "i");
        return _.each(r, function(r) {
          var s, o, l = {};
          i.test(r.t) || a.test(r.t) || t.path && t.path == r.path || !t.kind.match(/(tag|category)/) || t == r || r && t.kind == r.kind && "tag" != t.kind || (l.kind = r.kind + "-category", l.i = r.i, l.t = r.t + " " + t.t, l.index = n, "tag" == r.kind ? (l.type = r.type, l.path = r.t + "/" + t.t.toLowerCase(), l.path = l.path.replace(/ /g, "+")) : (s = r.path || r.t, o = t.path || t.t, l.path = r.kind + "-" + s.toLowerCase() + "/" + o.toLowerCase().replace(/ /g, "+").replace(/&/, "+").replace(/\+\+\+/, "+")), e.push(l))
        }), e
      }, []);
    _.each(s, function(t) {
      e.results.unshift(t)
    }), this.collection = _.reduce(e.results, function(e, t) {
      var i = t.t.replace(/\//, " ");
      return n.test(i) && e.indexOf(t) < 0 && (t.label = this.getAutocompleteLabel(t), e.push(t)), e
    }, [], this), this.collection = _.sortBy(this.collection, function(e) {
      var t = i.test(e.t) ? "0-" : "",
        n = e.i ? "1-" : "";
      return e.index + n + t + e.kind + " " + e.t
    })
  },
  getAutocompleteLabel: function(e) {
    switch (!0) {
      case "tag" == e.kind:
        return e.type;
      case "article" == e.kind:
        return e.type + " Article";
      case "store-category" == e.kind || "store-tag" == e.kind:
        return "store";
      case "tag-category" == e.kind:
        return e.type;
      case "brand-category" == e.kind || "brand-tag" == e.kind:
        return "brand";
      default:
        return e.kind
    }
  },
  render: function() {
    var e, t, n, i = 10;
    return this.collection.length > 0 ? (e = "", e = document.createDocumentFragment(), _.each(this.collection, function(a, r) {
      i > r && (t = new Wantering.Module.Suggestion(a), n = new Wantering.Module.SuggestionView({
        model: t
      }), this.childViews.push(n), e.appendChild(n.render().el))
    }, this), $(this.el).html(e).removeClass("hide")) : this.hide(), this
  },
  hide: function(e) {
    return e && "INPUT" == e.target.tagName ? (e.stopPropagation(), void 0) : (this.$el.empty().addClass("hide"), void 0)
  },
  takeSuggestion: function(e, t) {
    var n, i;
    t || (t = $(e.currentTarget).find(".autoCompleteAction")), n = t.attr("href"), i = n.indexOf("clothing/") >= 0 ? t.find(".autoCompleteItemMark").text().toLowerCase() : "", this.closeSuggestions(), Wantering.Tracker.Event("AutoComplete", "Search", 0), Wantering.trigger("search:replace", {
      string: i
    })
  },
  closeSuggestions: function() {
    $(this.el).parent().removeClass("selected"), Wantering.Utils.ResetScroll(), this.close()
  },
  moveSuggestionMarker: function(e, t) {
    var n, i = $(this.el).find(".autoCompleteItem"),
      a = i.length,
      r = $(this.el).find(".selected"),
      s = i.index(r);
    if (a > 0) {
      if ("down" == t) r.removeClass("selected"), n = a - 1 > s ? s + 1 : 0, i.eq(n).addClass("selected");
      else if ("up" == t) r.removeClass("selected"), n = s - 1, i.eq(n).addClass("selected");
      else if ("enter" == t)
        if (-1 == s) this.closeSuggestions();
        else {
          e.preventDefault();
          var o = r.find(".autoCompleteAction"),
            l = o.attr("href");
          this.takeSuggestion(e, o), app.navigate(l, {
            trigger: !0
          })
        }
    } else this.closeSuggestions()
  },
  close: function() {
    app.autoCompleteView = Wantering.Utils.CloseViews(this)
  }
}), Wantering.Module.Facet = Backbone.Model.extend({}), Wantering.Module.Facets = Backbone.Collection.extend({
  model: Wantering.Module.Facet,
  url: function() {
    var e = "",
      t = this.searchGender;
    "mens" == t || "womens" == t ? t += "-" : t = "";
    var n = this.searchPrice;
    n = "high" == n || "med" == n || "low" == n ? "price-" + n + "/" : "";
    var i = Formatters.StripPriceFromString(this.searchTerm).replace(/\'/g, "");
    return this.sortOrder && "default" != this.sortOrder && (e = "?sort=" + this.sortOrder), "/api/facet/" + t + "clothing/" + i + n + e
  },
  types: [{
    name: "category",
    type: "cat",
    label: "Categories"
  }, {
    name: "brand",
    type: "brand",
    label: "Brand"
  }, {
    name: "store",
    type: "store",
    label: "Store"
  }, {
    name: "style",
    type: "tag-style",
    label: "Styles"
  }, {
    name: "print",
    type: "tag-print",
    label: "Prints"
  }, {
    name: "material",
    type: "tag-material",
    label: "Materials"
  }, {
    name: "hashtag",
    type: "hashtag",
    label: "Hashtags"
  }, {
    name: "tags_type",
    type: "tag-type",
    label: "Type"
  }],
  parse: function(e) {
    var t, n = "",
      i = Formatters.PrettifyString(Formatters.CleanSearchString(app.facets.searchTerm)),
      a = 0,
      r = Math.floor(.9 * e.hits),
      s = this.types;
    t = "product" == Wantering.App.CurrentRoute ? Wantering.Utils.GetSessionStorageItem("backRoute") : Backbone.history.fragment, t = t.split("?", 1), app.facets.hits = e.hits, app.facets.sortOrder && "default" != app.facets.sortOrder && (n = "?sort=" + app.facets.sortOrder);
    var o = [];
    return _.each(e.facets.facet_fields, function(e, l) {
      var u = _.reduce(s, function(e, t) {
        return l.indexOf(t.name) >= 0 && (e = t.type), e
      }, null);
      _.each(e, function(e) {
        var s;
        s = "cat" == u || "hashtag" == u || "brand" == u || "store" == u ? u + "-" : u + ":", e.link = e.label.replace(/ /g, "+"), ("store" == u || "brand" == u) && (e.link = e.link.toLowerCase()), "Clothing" != e.label && "Cheap" != e.label && "Menswear" != e.label && e.label != i && e.count > a && e.count <= r && o.push({
          type: u,
          label: e.label,
          count: e.count,
          path: "/" + t + s + e.link + "/" + n
        })
      })
    }), o
  },
  includeModelsByType: function(e) {
    var t = e.min || 4,
      n = new RegExp("(" + e.include.join("|") + ")");
    return this.filter(function(e) {
      return n.test(e.get("type")) && e.get("count") > t
    })
  },
  excludeModelsByType: function(e) {
    var t = e.min || 4,
      n = new RegExp("(" + e.exclude.join("|") + ")");
    return this.filter(function(e) {
      return !n.test(e.get("type")) && e.get("count") > t
    })
  }
}), Wantering.Module.FacetsView = Backbone.View.extend({
  initialize: function() {
    this.render()
  },
  render: function() {
    if (!screenSize.isSmartPhone) {
      var e, t = {
        brands: app.facets.includeModelsByType({
          include: ["brand"]
        }),
        stores: app.facets.includeModelsByType({
          include: ["store"]
        }),
        categories: app.facets.includeModelsByType({
          include: ["cat", "tag-type"]
        }),
        tags: app.facets.excludeModelsByType({
          exclude: ["brand", "store", "cat", "tag-type"]
        })
      };
      return this.renderFacets(t), e = this.$(".cat"), e.addClass("opening"), e.find("li.facetItem").addClass("selected"), setTimeout(function() {
        e.removeClass("opening")
      }, 250), this
    }
  },
  events: {
    "click [data-clearfacet]": "clearFacet",
    "click .empty": "stop",
    "click .navAction": "checkForChildren",
    "click .facetAction": "trackFacet"
  },
  stop: function(e) {
    e.stopPropagation(), e.preventDefault()
  },
  checkForChildren: function(e) {
    $(e.currentTarget).hasClass("hasSubMenu") || (e.stopPropagation(), e.preventDefault())
  },
  numberFacetsShown: function() {
    switch (!0) {
      case screenSize.isSmartPhone:
        return 0;
      case screenSize.isSmallScreen:
        return 8;
      default:
        return 16
    }
  },
  resetFacets: function() {
    this.renderFacets({
      brands: [],
      categories: [],
      stores: [],
      tags: []
    })
  },
  clearFacet: function(e) {
    this.stop(e), this.trackFacet();
    var t = $(e.target),
      n = t.attr("data-clearfacet"),
      i = searchFilters.filters.split("/").reverse(),
      a = {
        brand: new RegExp("brand", "i"),
        store: new RegExp("store", "i"),
        cat: new RegExp("(cat|tag-type)", "i"),
        tag: new RegExp("tag-(?!type)", "i")
      },
      r = _.find(i, function(e) {
        return a[n].test(e)
      }),
      s = _.reject(i, function(e) {
        return e == r
      });
    searchFilters.filters = s.reverse().join("/"), app.navigate(app.state.setRoute(), {
      trigger: !0
    }), this.resetFacets(), app.state.updateSearchField()
  },
  augmentFacetContext: function(e) {
    var t = 1,
      n = _.sortBy(e, function(e) {
        return -e.attributes.count
      });
    return n = _.uniq(n, !0, function(e) {
      return e.attributes.label.toLowerCase()
    }), _.reduce(n, function(e, n) {
      return t < this.numberFacetsShown() && (e.push(n.toJSON()), t++), e
    }, [], this)
  },
  setState: function(e, t, n) {
    var i, a, r, s, o;
    switch (e && (i = new RegExp(e.toLowerCase() + "-([\\s-\\w\\&+]+\\/)", "ig"), a = searchFilters.filters.match(i)), s = searchFilters.filters.match(/tag-type:([\s\-\w\+]+)/g), !0) {
      case "cat" != e && !(!a || !a[a.length - 1]):
        r = a[a.length - 1].replace(/\//, ""), o = "current";
        break;
      case "cat" == e && !(!a || !a[a.length - 1]) && !s:
        r = a[a.length - 1].replace(/\//, ""), o = "current";
        break;
      case "cat" == e && !(!s || !s[s.length - 1]):
        r = s[s.length - 1], o = "current";
        break;
      case n && 1 == n.length:
        n.shift().attributes.label, r = t, o = "empty";
        break;
      case 0 == n.length && !a:
        o = "empty";
        break;
      default:
        o = "any", r = t
    }
    return {
      label: Formatters.PrettifyString(r || t),
      classname: o,
      type: e,
      defaultLabel: t,
      isCollection: n.length > 0
    }
  },
  setTaggedState: function(e) {
    var t, n, i = searchFilters.filters.replace(/\+/g, " ").match(/tag-(?!type)[\w]+:([\s\-\w]+)\//g);
    switch (!0) {
      case !(!i || !i[i.length - 1]):
        t = i[i.length - 1], n = "current";
        break;
      case e && 1 == e.length:
        e.shift().attributes.label;
      case 0 == e.length:
        t = "Features", n = "empty";
        break;
      default:
        t = "Features", n = "any"
    }
    return {
      label: Formatters.PrettifyString(t),
      classname: n,
      type: "tag",
      isCollection: e.length > 0
    }
  },
  renderFacets: function(e) {
    this.$el.html(Templates.Facets({
      facets: [{
        state: this.setState("brand", "Top Brands", e.brands),
        facets: this.augmentFacetContext(e.brands)
      }, {
        state: this.setState("store", "Top Stores", e.stores),
        facets: this.augmentFacetContext(e.stores)
      }, {
        state: this.setState("cat", "Category", e.categories),
        facets: this.augmentFacetContext(e.categories)
      }, {
        state: this.setTaggedState(e.tags),
        facets: this.augmentFacetContext(e.tags)
      }]
    }))
  },
  trackFacet: function(e) {
    if (Wantering.Tracker.Search("Facet", "Sidebar"), e) {
      var t = $(e.target),
        n = t.parents(".facetItem:first"),
        i = t.text().trim();
      $(".facetItem").removeClass("selected").addClass("empty"), n.removeClass("empty").addClass("current").find(".label").text(i), app.state.parseFiltersFromURL(t.attr("href")), app.state.updateSearchField()
    }
  },
  close: function() {
    app.brandFacets = Wantering.Utils.CloseViews(app.brandFacets)
  }
}), Wantering.Module.TopBarView = Backbone.View.extend({
  initialize: function() {
    var e = $(this.el).find(".col-2"),
      t = e.find(".searchBox"),
      n = e.find("#mainNav"),
      i = $(this.el).find("#filters"),
      a = $(".footerIntro .searchBox");
    new Wantering.Module.SearchBoxView({
      el: t,
      type: "BarModule"
    }), new Wantering.Module.MainNavView({
      el: n
    });
    var r = $(this.el).find("#utilNav");
    new Wantering.Module.UtilNavView({
      el: r
    }), new Wantering.Module.FilterNavView({
      el: i
    }), new Wantering.Module.SearchBoxView({
      el: a,
      type: "FooterModule"
    })
  },
  events: {
    "click .signUpAction": "signUp"
  },
  signUp: function() {
    return Wantering.Actions.SignUp("Utils"), !1
  }
}), Wantering.Module.UtilNav = Backbone.Model.extend({}), Wantering.Module.UtilNavView = Backbone.View.extend({
  events: {
    "click .avatarAction": "toggleUtilMenu",
    "click .logoutAction": "logout"
  },
  toggleUtilMenu: function(e) {
    if (Wantering.Authentication.OK || screenSize.isSmartPhone) {
      var t = $(e.currentTarget).parent(),
        n = $(this.el);
      Wantering.Utils.OpenMenu(t, n, !0)
    } else this.login();
    return !1
  },
  logout: function() {
    return Wantering.Authentication.Logout(), !1
  }
}), Wantering.Module.AB = Backbone.View.extend({
  initialize: function(e) {
    _.bindAll(this, "setupCxApi"), this.runRoute = e.runRoute, this.expID = e.expID, this.selector = e.selector, this.experiments = e.experiments, ("all" === this.runRoute || this.runRoute === Wantering.App.CurrentRoute) && (this.setupCxApi(), this.render())
  },
  setupCxApi: function() {
    if ("object" != typeof cxApi) return setTimeout(this.setupCxApi, 100), void 0;
    var e = cxApi.getChosenVariation(this.expID);
    (isNaN(e) || 0 > e) && (e = Math.floor(Math.random() * this.getNumberOfExperiments())), this.setVariation(e)
  },
  getNumberOfExperiments: function() {
    return _.map(this.experiments, function(e, t) {
      return t
    }).length
  },
  setVariation: function(e) {
    this.variation = e, cxApi.setChosenVariation(this.variation, this.expID)
  },
  render: function() {
    var e = this.experiments[this.variation],
      t = $(this.selector);
    return t.length && e ? (this.setElement(t), e.call(this), void 0) : void 0
  }
}), Wantering.Module.Experiments = {}, Wantering.Module.RecentProductsCollection = Backbone.Collection.extend({
  model: Wantering.Module.Product,
  url: function() {
    return "/api/products/?id=" + this.shortkeys
  },
  parse: function(e) {
    return e.docs
  },
  maxItems: 24,
  initialize: function() {
    if (!this.hasLocalStorage()) return this.shortkeys = "", void 0;
    var e = localStorage.getItem("recentProducts") || "";
    this.shortkeys = e
  },
  hasLocalStorage: function() {
    return "undefined" != typeof localStorage ? !0 : !1
  },
  add: function(e) {
    this.models.length >= this.maxItems && this.remove(this.at(0)), Backbone.Collection.prototype.add.call(this, e), this.save()
  },
  save: function() {
    if (this.hasLocalStorage()) {
      var e = this.models.map(function(e) {
        return e.attributes.short_key
      }).toString();
      localStorage.setItem("recentProducts", e)
    }
  }
}), Wantering.Module.Messenger = Backbone.View.extend({
  initialize: function(e) {
    _.has(e, "el") || this.setElement($("#messenger")), this.pubsub = e.pubsub || Wantering, this.pubsub.on("message:show", this.render, this), this.pubsub.on("message:hide", this.hide, this)
  },
  template: Templates.Message,
  render: function(e) {
    if (e = e || {}, "tip" != e.type || Wantering.Actions.CheckTipComplete(e.tipID)) {
      var t, n, i = this,
        a = 250,
        r = e.type ? e.type + "Notification" : "";
      n = e.template ? Templates[e.template](e.content) : this.template({
        message: e.message,
        title: e.title
      }), this.type = e.type, this.tipID = e.tipID, this.keepOpenOnNavigate = e.keepOpenOnNavigate ? e.keepOpenOnNavigate : !1, this.$el.html(n).removeClass("hide tipNotification couponNotification errorNotification").addClass(r), this.trackRetention = e.trackRetention ? e.trackRetention : !1, e.delay && (a = e.delay), setTimeout(function() {
        i.$el.removeClass("offStageBottom"), i.setupValidations(), i.trackRetention && Wantering.Tracker.Retention("View Retention", "message", i.tipID)
      }, a), e.timeout !== !1 && (t = e.timeout || 4e3, window.messageTimer = setTimeout(function() {
        i.hide()
      }, t))
    }
  },
  events: {
    "click .closeAction": "closeMessage",
    "click .dontRemindAction": "optOut",
    "click .turnOnFacebookAction": "turnOnFacebook",
    "click .subscribeAction": "newsletterSignup",
    "click .loginAction": "login",
    "click [data-retention]": "doRetention",
    "focus [data-validate]": "clearValidationStyling",
    'keydown [data-validate][name="email"]': "watchEmail",
    'blur [data-validate][name="email"]': "validateEmail"
  },
  closeMessage: function() {
    return this.hide(), !1
  },
  hide: function() {
    var e = this;
    "undefined" != typeof window.messageTimer && null !== window.messageTimer && clearTimeout(window.messageTimer), this.$el.addClass("offStageBottom"), setTimeout(function() {
      e.$el.addClass("hide").removeClass("notification " + e.type + "Notification").html(""), e.type = null, e.tipID = null, e.trackRetention = null, e.keepOpenOnNavigate = null
    }, 400)
  },
  optOut: function() {
    return Wantering.Actions.TipComplete(this.tipID), this.hide(), !1
  },
  turnOnFacebook: function() {
    return Wantering.Authentication.OK && Wantering.Actions.SetFacebookPublishSetting(!0), !1
  },
  doRetention: function(e) {
    e.preventDefault();
    var t = $(e.target).data("retention");
    "complete" === t && this.completeMessage()
  },
  completeMessage: function() {
    Wantering.Tracker.Retention("Complete Retention", "message", app.messenger.tipID), Wantering.Actions.TipComplete(app.messenger.tipID)
  },
  newsletterSignup: function(e) {
    e.preventDefault();
    var t = "";
    "any" != searchFilters.gender ? t = "mens" == searchFilters.gender ? "m" : "f" : app.articlePage && (t = app.articlePage.attributes.data.gender), this.request({
      url: "/api/user/signup/newsletter/",
      method: "POST",
      data: {
        gender: t,
        email: this.$('[name="email"]').val()
      }
    }).done(function(e) {
      Wantering.Actions.TipComplete(this.tipID), Wantering.Tracker.Retention("Complete Retention", "message", this.tipID), "success" === e.result ? Wantering.trigger("message:show", {
        type: "success",
        title: "Awesome, thanks.",
        message: "Please check your email for a confirmation link.",
        timeout: !1
      }) : Wantering.trigger("message:show", {
        type: "error",
        title: "Oops. No worries.",
        message: "It looks like you have already signed up.",
        timeout: !1
      })
    })
  },
  login: function() {
    return Wantering.Authentication.Login(), !1
  },
  showMessage: function(e) {
    var t, n = {
      newsletterSignUp: function() {
        Wantering.Authentication.OK || "email" == Formatters.GetURLParameter("utm_source") || setTimeout(function() {
          Wantering.trigger("message:show", {
            title: "Stay on trend with our top style advice and editors picks.",
            message: 'Don\'t miss out <form class="inlineForm"><input type="email" data-validate name="email" id="emailField" class="inlineField" placeholder="Enter your email" autocorrect="off" autocapitalize="off" autocomplete="off" /><div class="_message errorMessageEmail">&nbsp;</div><button id="submitSignup" class="button inlineButton subscribeAction" type="submit" disabled>Yes, Please</button></form>',
            type: "tip",
            tipID: "tipNewsletterSignUp",
            trackRetention: !0,
            delay: 4e3,
            timeout: !1
          })
        }, 1e3)
      },
      "default": function() {
        Wantering.trigger("message:show", {
          title: "Oops. Sorry.",
          message: "Something has gone wrong on our end. Please try again.",
          type: "error"
        })
      }
    };
    return t = n[e] ? n[e] : n["default"], t()
  }
}), _.extend(Wantering.Module.Messenger.prototype, Wantering.Mixin.Validations), _.extend(Wantering.Module.Messenger.prototype, Wantering.Mixin.Requests), Wantering.Module.SearchHeader = Backbone.View.extend({
  initialize: function(e) {
    this.options = e || {}, _.has(this.options, "el") && this.options.el.length || this.setElement('<div class="listResultsHeaderWrapper">')
  },
  pageTitles: {
    searchResults: "",
    similarItems: "Similar to",
    trending: "Trending",
    feature: ""
  },
  events: {
    "click .sortMenuOpener": "toggleSortMenu",
    "click .sortMenuAction": "sortResults"
  },
  render: function() {
    var e, t, n, i, a = this.options.type,
      r = this.pageTitles[a],
      s = "",
      o = "",
      l = "",
      u = "",
      c = "",
      p = this.options.collection;
    if ("searchResults" == a) {
      n = this.collection.searchGender, n.indexOf("any") < 0 && (s = n), r = this.collection.titledSearchTerm;
      var d = app.state.get("path").replace(/\?.+/, "");
      o = Defaults.RootSearches.hasOwnProperty(d) ? Defaults.RootSearches[d] : this.collection.hits, o = Formatters.PrettifyNumber(o), u = "Results for"
    } else "similarItems" == a ? r = r + " " + this.collection.formattedTerm : "trending" == a ? "mens" == this.options.gender ? r += " Menswear" : "womens" == this.options.gender && (r += " Womenswear") : "feature" == a ? (r = this.model.title, l = this.model.description, u = this.model.featureType.replace(/-/gi, " "), c = this.model.small_image) : "recentlyViewed" == a && (r = "Recently Viewed");
    return i = "/" + Backbone.history.fragment.split("?", 1)[0], e = {
      title: r,
      summary: p.summary,
      gender: s,
      count: o,
      description: l,
      type: u,
      image: c,
      url: i,
      sortLabel: Defaults.SortOptions[p.sortOrder]
    }, t = Helpers.ProductListHeader(e, this.options.searchContent, void 0, Wantering.Config.Urls.s3, Formatters, screenSize.isSmartPhone), this.$el.html(t), this
  },
  toggleSortMenu: function(e) {
    var t = $(e.currentTarget).parent(),
      n = t.parent();
    return Wantering.Utils.OpenMenu(t, n, !0), !1
  },
  sortResults: function() {
    Wantering.Tracker.Search("Sort", "ListHeader")
  }
}), _.extend(Wantering.Module.SearchHeader.prototype, Wantering.Mixin.Utils), _.extend(Wantering.Module.SearchHeader.prototype, Wantering.Mixin.Search), Wantering.Module.MemberHeader = Backbone.View.extend({
  initialize: function(e) {
    this.options = e || {}, _.has(this.options, "el") && this.options.el.length || this.setElement('<div class="listResultsHeaderWrapper">'), Wantering.off("header:updateSet"), Wantering.on("header:updateSet", this.render, this)
  },
  events: {
    "click [data-edit]": "editSet",
    "click [data-createset]": "createSet",
    "click .shareAction": "share"
  },
  render: function() {
    var e, t, n, i, a = this.options.type,
      n = this.options.pageTitle,
      r = app.user.get("uName") == this.options.profile.get("uName"),
      s = this.options.profile,
      o = this.options.profile.get("nameFirst") + " " + this.options.profile.get("nameLast");
    return (o.length < 2 || o.indexOf("undefined") >= 0) && (o = this.options.profile.get("uName")), "memberLoves" == a && this.options.profile.get("currentUser") ? n = app.wantSet ? app.wantSet.get("name") + " <attr>by " + o + "</attr>" : "Your Loves" : "memberProfile" == a && r ? (n = "Your Collections", i = !0) : "memberProfile" == a ? n = app.wantSet ? app.wantSet.get("name") + " <attr>by " + o + "</attr>" : "Collections <attr>by " + o + "</attr>" : "otherMemberLoves" == a ? n = app.wantSet ? app.wantSet.get("name") + " <attr>by " + o + "</attr>" : "Loved <attr>by " + o + "</attr>" : "otherMemberLoves" != a || this.options.profile || (n = "Whoops! We couldn't find anyone with that name."), e = {
      title: n,
      profileName: o,
      profileImage: this.options.profile.get("profileImage") || this.options.profile.get("picture"),
      shareHTML: this.options.profile ? Templates.Share({
        type: "member"
      }) : "",
      canEdit: this.options.profile.get("currentUser") && app.wantSet && app.wantSet.id >= 1e4,
      setid: app.wantSet ? app.wantSet.id : null,
      isCurrentUser: r,
      canCreate: r && "memberProfile" == a,
      profile: s.toJSON()
    }, t = Helpers.ProductListHeader(e, void 0, void 0, Wantering.Config.Urls.s3, Formatters, screenSize.isSmartPhone), this.$el.html(t), this
  },
  editSet: function(e) {
    e.stopPropagation(), e.preventDefault();
    var t = app.wantSet.id;
    Wantering.trigger("sets:edit", {
      wantSet: app.wantSets.get(t)
    })
  },
  createSet: function(e) {
    e.stopPropagation(), e.preventDefault(), Wantering.trigger("sets:create")
  },
  share: function(e) {
    e.stopPropagation(), e.preventDefault();
    var t, n, i, a, r, s, o = {};
    n = Wantering.Config.Urls.images, app.memberLovesProducts && app.memberLovesProducts.models[0] && (n += app.memberLovesProducts.models[0].attributes.images[0].medium.url), app.user.attributes.uName === this.options.profile.get("uName") ? (i = "I", a = "My", o.love = "love", o.has = "have") : (i = this.options.profile.get("nameFirst") || this.options.profile.get("uName"), a = i + "'s", o.love = "loves", o.has = "has"), r = "Need a gift idea? Check out " + a + " Wish List on Wantering! ", s = "Click to see what else " + i + " " + o.has + " loved.", t = {
      shareMessage: r,
      shareSubTitle: s,
      mediaURL: n
    }, Wantering.Sharing.BasicShare($(e.target), t)
  }
}), _.extend(Wantering.Module.SetsPopupView.prototype, Wantering.Mixin.Utils), Wantering.Module.TimelineCollection = Backbone.Collection.extend({
  initialize: function(e, t) {
    this.options = t
  },
  url: function() {
    return "https://www.wantering.com/api/product/timeline/" + this.options.short_key + "/?rows=" + this.options.rows
  },
  parse: function(e) {
    return e.data
  },
  comparator: function(e) {
    return -new Date(e.get("date"))
  }
}), Wantering.Module.TimelineView = Backbone.View.extend({
  initialize: function(e) {
    var t = [];
    this.options = e, app.timeline ? app.timeline.options.short_key != this.options.short_key && (app.timeline.options.short_key = this.options.short_key, app.timeline.options.rows = this.options.rows, app.timeline.reset(), app.timelineView && app.timelineView.close()) : app.timeline = new Wantering.Module.TimelineCollection(t, {
      short_key: this.options.short_key,
      rows: this.options.rows
    }), this.listenTo(app.timeline, "sync", this.render), app.timeline.length < 1 && app.timeline.fetch()
  },
  template: Templates.ProductTimeline,
  render: function() {
    if (app.timeline.length > 0) {
      var e, t = this,
        n = _.reduce(app.timeline.toJSON(), this.parseTimelineEvent.bind(this), {});
      app.productDetailView && (e = Templates.ProductScorecard({
        model: app.productDetailView.model.toJSON(),
        location: "productDetail",
        isSmartPhone: screenSize.isSmartPhone
      })), this.setElement(this.template({
        timelineData: n,
        scoreCard: e
      })), setTimeout(function() {
        $("#productMetaInfo").append($(t.el))
      }, 800)
    }
  },
  close: function() {
    Wantering.Utils.CloseViews(this)
  }
}), _.extend(Wantering.Module.TimelineView.prototype, Wantering.Mixin.Timeline), Wantering.Module.Checkout = Backbone.Model.extend({
  initialize: function() {
    this.on("change:short_key", this.fetch), this.fetch()
  },
  defaults: {
    color: "None",
    size: "One Size"
  },
  url: function() {
    return "/api/product/" + this.get("short_key") + "/"
  },
  parse: function(e) {
    var t, n = {},
      i = ["none"],
      a = ["one", "one size", "none", "no size", "n/a", "sold out"],
      r = e.docs[0];
    return r.inventories && (r.inventories = r.inventories.reduce(function(e, n) {
      return n = JSON.parse(n), i.indexOf(n.colour.toLowerCase()) >= 0 ? e : (r.onlyColor = n.colour, r.numberOfColors = r.numberOfColors + 1 || 1, n.sizes = n.sizes.reduce(function(e, n) {
        return t = n.size.toString().toLowerCase(), a.indexOf(t) < 0 && e.push(n), e
      }, []), n.sizes = _.sortBy(n.sizes, function(e) {
        return ViewHelpers.Product.checkSizeOrder(e.size)
      }), e[n.colour] = n.sizes, e)
    }, {}), r.hasColorOptions = r.numberOfColors && r.numberOfColors > 1 ? !0 : !1, r.hasColorOptions ? r.onlyColor = null : (r.hasSizeOptions = r.inventories[r.onlyColor] && r.inventories[r.onlyColor].length > 0 ? !0 : !1, r.hasSizeOptions || (r.onlySize = this.defaults.size))), n.product = r, n.transaction = {}, n
  }
}), Wantering.Module.CheckoutView = Backbone.View.extend({
  initialize: function(e, t) {
    this.options = t, t.backURL || (this.options.backURL = "/" + Backbone.history.fragment), app.checkout ? app.checkout.get("short_key") != this.options.short_key && (app.checkoutView && app.checkoutView.close(), app.checkout.set("short_key", this.options.short_key)) : app.checkout = new Wantering.Module.Checkout({
      short_key: this.options.short_key
    }), this.listenTo(app.checkout, "sync", this.render)
  },
  urlRoot: "/api/user/details",
  transitionEvents: "transitionend webkitTransitionEnd oTransitionEnd otransitionend",
  loadStripe: function() {
    ("undefined" == typeof Stripe || null === Stripe) && Modernizr.load({
      nope: "https://js.stripe.com/v2/",
      complete: function() {
        "undefined" != typeof Stripe && null !== Stripe && Stripe.setPublishableKey(wanteringStripeKey)
      }
    })
  },
  showOrRenderEl: function() {
    var e = $("#checkout");
    this.options.open = !0, this.options.backURL = "/" + Backbone.history.fragment, e.length ? (e.removeClass("hide"), setTimeout(function() {
      $("html").addClass("hasOverlay")
    }, 200)) : app.checkoutView.render()
  },
  template: Templates.Checkout,
  templateColor: Templates.CheckoutColor,
  templateSize: Templates.CheckoutSize,
  templateShipped: Templates.CheckoutShipped,
  templateCardForm: Templates.CheckoutCardForm,
  templateChangeCard: Templates.CheckoutChangeCard,
  templateCheckoutReviewPayment: Templates.CheckoutReviewPayment,
  templateInProgress: Templates.CheckoutInProgress,
  templateDone: Templates.CheckoutDone,
  events: {
    click: "closeCheckout",
    "click .checkoutClose": "closeCheckout",
    "click .doneAction": "doneCheckout",
    "click .checkout": "stop",
    "click .cartColorAction": "selectItemFromList",
    "click .cartSizeAction": "selectItemFromList",
    "click .cartAddressAction": "selectItemFromList",
    "click .cartCardAction": "selectCard",
    "click .newCard": "newCard",
    "click #saveShipping": "saveShipping",
    "click .newAddress": "newShipping",
    "click #cancelAddShipping": "cancelShippingAdd",
    "click .changeCard": "changeCard",
    "click #saveCard": "addCard",
    "click #cancelAddCard": "cancelCardAdd",
    "click #completePayment": "completeTransaction",
    "click .closed": "triggerOpen",
    "click .linkText": "followLink",
    "focus [data-validate]": "clearValidationStyling",
    'keydown [data-validate][name="name"]': "watchField",
    'blur [data-validate][name="name"]': "watchField",
    'input [data-validate][name="name"]': "watchField",
    'keydown [data-validate][name="address1"]': "watchField",
    'blur [data-validate][name="address1"]': "watchField",
    'input [data-validate][name="address1"]': "watchField",
    'keydown [data-validate][name="zip"]': "watchZip",
    'blur [data-validate][name="zip"]': "watchZip",
    'input [data-validate][name="zip"]': "watchZip"
  },
  render: function() {
    if (app.checkout) {
      var e = this;
      if (this.options.open = !0, !app.checkout.get("product").in_stock) return Wantering.trigger("popup:open", {
        type: "HeartItBackInStock",
        openLocation: "Checkout",
        short_key: app.checkout.get("short_key"),
        pathname: this.options.backURL
      }), void 0;
      this.context = app.checkout.toJSON(), this.context.wanteringImageRootURL = Wantering.Config.Urls.images, this.context.product.hasColorOptions ? (this.context.firstSection = "color", this.context.firstSectionHTML = this.templateColor(this.context)) : this.context.product.inventories && this.context.product.hasSizeOptions ? (this.context.firstSection = "size", this.context.selectedColor = this.context.product.onlyColor, app.checkout.get("transaction").color = this.context.selectedColor || app.checkout.defaults.color, this.context.firstSectionHTML = this.templateSize(this.context)) : (this.context.firstSection = "shipping", this.context.selectedColor = this.context.product.onlyColor, app.checkout.get("transaction").color = this.context.selectedColor || app.checkout.defaults.color, this.context.selectedSize = this.context.product.onlySize, app.checkout.get("transaction").size = this.context.selectedSize || app.checkout.defaults.size, this.checkUserTransactionData({
        async: !1
      }), this.context.firstSectionHTML = this.templateShipped(this.context)), this.setElement(this.template(this.context)), this.checkUserTransactionData(), $("html").addClass("hasOverlay"), $("body").append($(e.el)), setTimeout(function() {
        $(e.el).find(".checkout").removeClass("offStageRight").one(e.transitionEvents, function() {
          e.loadStripe()
        })
      }, 400), Wantering.Tracker.Event("Checkout Started", "Checkout Events")
    }
  },
  setupCardValidations: function() {
    $("#card-number").payment("formatCardNumber"), $("#card-expiration").payment("formatCardExpiry"), $("#card-cvc").payment("formatCardCVC"), $("#card-zip").payment("formatCardZip")
  },
  checkUserTransactionData: function(e) {
    if (app.user && app.user.get("shippingAddress") && app.user.get("cards")) return this.context.shippingAddress = app.user.get("shippingAddress"), this.context.cards = app.user.get("cards"), void 0;
    var t = this,
      e = e || {};
    e.url = this.urlRoot + "/get/payment/", e.method = "GET", $.ajax(e).done(function(e) {
      if (e.shippingAddress && (app.user.set("shippingAddress", e.shippingAddress), t.context.shippingAddress = e.shippingAddress), e.cards) {
        var n = e.cards.reduce(function(e, n) {
          return n = t.cardDetailsPresenter(n), e.push(n), e
        }, []);
        app.user.set("cards", n)
      }
    })
  },
  transitionSection: function(e, t, n) {
    var i = this,
      a = $("#" + t);
    e.addClass("completed"), setTimeout(function() {
      e.addClass("transitioning"), setTimeout(function() {
        e.addClass("closed"), setTimeout(function() {
          a.html(n), ("checkoutReviewPayment" === t || "checkoutChangeCard" === t) && i.setupCardValidations(), i.setupValidations(), setTimeout(function() {
            a.removeClass("offStageBottom")
          }, 100)
        }, 200)
      }, 500)
    }, 200)
  },
  triggerOpen: function(e) {
    $(e.target).find(".selected > .cartSelectorAction").trigger("click")
  },
  selectItemFromList: function(e) {
    e.preventDefault(), e.stopPropagation();
    var t, n, i = $(e.target),
      a = i.closest(".cartSelectorItem"),
      r = i.closest(".checkoutSection"),
      s = r.data("label"),
      o = r.nextAll(".checkoutSection"),
      l = r.find(".cartSelectorItem"),
      u = i.data("value");
    r.hasClass("closed") ? (o.addClass("offStageBottom").removeClass("completed transitioning closed").html(""), r.removeClass("closed"), setTimeout(function() {
      r.removeClass("transitioning")
    }, 200)) : ("Color" == s ? (app.checkout.get("transaction").color = u, app.checkout.get("transaction").size = null, this.context.selectedColor = u, this.context.product.inventories && this.context.product.inventories[u].length > 0 ? (t = "checkoutSize", n = this.templateSize(this.context)) : (app.checkout.get("transaction").size = app.checkout.defaults.size, this.context.selectedSize = app.checkout.defaults.size, t = "checkoutShipping", n = this.templateShipped(this.context))) : "Size" == s ? (app.checkout.get("transaction").size = u, this.context.selectedSize = u, t = "checkoutShipping", n = this.templateShipped(this.context)) : "Ship to" == s && (app.checkout.get("transaction").shippingAddress = this.context.shippingAddress, this.initTransaction()), Wantering.Tracker.Event("Select " + s, "Checkout Events"), l.removeClass("selected"), a.toggleClass("selected"), this.transitionSection(r, t, n))
  },
  goToCheckoutSection: function(e) {
    var t, n, i = this,
      a = app.user.get("cards"),
      r = app.checkout.get("transaction"),
      s = this.templateCardForm(),
      o = $("#checkoutShipping"),
      l = $("#checkoutReviewPayment"),
      u = $("#checkoutChangeCard"),
      c = {
        newCard: function() {
          n = i.templateChangeCard({
            cardFormHTML: s
          }), i.transitionSection(o, "checkoutChangeCard", n), i.resetCheckoutSectionHTML(l)
        },
        newShipping: function() {
          n = i.templateShipped({
            addAnotherShipping: !0
          }), o.html(n)
        },
        shipping: function() {
          i.context.shippingAddress.preSelected = !0, n = i.templateShipped(i.context), o.html(n)
        },
        changeCard: function() {
          n = i.templateChangeCard({
            cards: a
          }), i.transitionSection(o, "checkoutChangeCard", n), i.resetCheckoutSectionHTML(l)
        },
        backToChangeCard: function() {
          n = i.templateChangeCard({
            cards: a
          }), u.html(n)
        },
        reviewPayment: function() {
          n = i.templateCheckoutReviewPayment({
            cards: a,
            useDefaultCard: !0,
            cardFormHTML: s,
            transaction: r
          }), i.transitionSection(o, "checkoutReviewPayment", n)
        },
        backToReviewPayment: function() {
          n = i.templateCheckoutReviewPayment({
            cards: a,
            useDefaultCard: !0,
            cardFormHTML: s,
            transaction: r
          }), i.transitionSection(u, "checkoutReviewPayment", n), i.resetCheckoutSectionHTML(u)
        },
        "default": function() {}
      };
    return t = c[e] ? c[e] : c["default"], t()
  },
  newShipping: function(e) {
    e.preventDefault(), e.stopPropagation(), this.goToCheckoutSection("newShipping")
  },
  cancelShippingAdd: function(e) {
    e.preventDefault(), e.stopPropagation(), this.goToCheckoutSection("shipping")
  },
  saveShipping: function() {
    var e = this,
      t = {},
      n = n || {};
    t.shippingAddress = JSON.stringify({
      name: this.$('[name="name"]').val(),
      address1: this.$('[name="address1"]').val(),
      address2: this.$('[name="address2"]').val(),
      city: this.$('[name="city"]').val(),
      state: this.$('[name="state"]').val(),
      country: this.$('[name="country"]').val(),
      zip: this.$('[name="zip"]').val()
    }), n.data = t, n.url = this.urlRoot + "/set/", n.method = "POST", $.ajax(n).done(function(n) {
      return "error" == n.result ? (e.showError(n.message), void 0) : (t.shippingAddress = JSON.parse(t.shippingAddress), app.user.set(t), app.checkout.get("transaction").shippingAddress = t.shippingAddress, e.context.shippingAddress = t.shippingAddress, e.goToCheckoutSection("shipping"), e.initTransaction(), Wantering.Tracker.Event("Save Shipping", "Checkout Events"), void 0)
    }).fail(this.showError)
  },
  initTransaction: function() {
    var e = this,
      t = t || {},
      n = app.checkout.get("transaction");
    n.pid = app.checkout.get("short_key"), t.data = n, t.url = "/api/user/transactions/init/", t.method = "POST", $.ajax(t).done(function(t) {
      if ("error" == t.result) return e.showError(t.message), void 0;
      var n = app.checkout.get("transaction");
      n.price = parseFloat(100 * t.price / 100).toFixed(2), n.shippingTax = parseFloat(100 * (t.shippingPrice + t.tax) / 100).toFixed(2), n.fee = parseFloat(100 * t.fee / 100).toFixed(2), n.credit = parseFloat(100 * t.creditAvailable / 100).toFixed(2), n.total = parseFloat(100 * (t.price + t.shippingPrice + t.tax + t.fee - t.creditAvailable) / 100).toFixed(2), n.tid = t.tid, app.checkout.set("transaction", n), e.goToCheckoutSection("reviewPayment")
    }).fail(this.showError)
  },
  changeCard: function(e) {
    e.preventDefault(), e.stopPropagation();
    var t = app.user.get("cards"),
      n = [];
    t = t.reduce(function(e, t) {
      var i = t.exp_year + t.exp_month + t.last4,
        a = n.indexOf(i) < 0;
      return (t.is_default || a) && (a && n.push(i), e.push(t)), e
    }, []), app.user.set("cards", t), t.length > 1 ? this.goToCheckoutSection("changeCard") : this.newCard(e)
  },
  setCardAsDefault: function(e, t) {
    return e = e.reduce(function(e, n) {
      return n.is_default = n.id === t ? !0 : !1, e.push(n), e
    }, []), app.user.set("cards", e), e
  },
  selectCard: function(e) {
    e.preventDefault(), e.stopPropagation();
    var t = $(e.currentTarget),
      n = t.closest(".cartSelectorItem"),
      i = t.closest(".checkoutSection"),
      a = i.find(".cartSelectorItem"),
      r = t.data("value"),
      s = app.user.get("cards");
    s = this.setCardAsDefault(s, r), a.removeClass("selected"), n.addClass("selected"), this.goToCheckoutSection("backToReviewPayment")
  },
  newCard: function(e) {
    e.preventDefault(), e.stopPropagation(), this.goToCheckoutSection("newCard")
  },
  addCard: function(e) {
    e.preventDefault(), e.stopPropagation(), $(e.target).prop("disabled", !0), this.getStripeTokenForCard(e, "saveCard")
  },
  resetCheckoutSectionHTML: function(e) {
    setTimeout(function() {
      e.html("").removeClass("completed transitioning closed").addClass("offStageBottom")
    }, 800)
  },
  cancelCardAdd: function(e) {
    e.preventDefault(), e.stopPropagation();
    var t = app.user.get("cards");
    t.length > 1 ? this.goToCheckoutSection("backToChangeCard") : this.goToCheckoutSection("backToReviewPayment")
  },
  cardDetailsPresenter: function(e) {
    var t = function(e) {
      switch (!0) {
        case "American Express" == e:
          return "amex";
        case "Visa" == e:
          return "visa";
        case "MasterCard" == e:
          return "mastercard";
        case "Discover" == e:
          return "disc";
        default:
          return ""
      }
    };
    return e.classNames = t(e.brand), e.hiddenText = "American Express" == e.brand ? "XXXX XXXXXX X" : "XXXX XXXX XXXX ", e
  },
  saveCard: function(e, t) {
    var n = this,
      i = i || {},
      a = {
        source: e
      },
      r = app.user.get("cards");
    i.data = a, i.url = "/api/user/details/add/payment/", i.method = "POST", $.ajax(i).done(function(e) {
      if ("error" == e.result) return n.showError(e.message), t.prop("disabled", !1), void 0;
      var i = n.cardDetailsPresenter(e.card);
      r.unshift(i), r = n.setCardAsDefault(r, i.id), n.goToCheckoutSection("backToReviewPayment")
    }).fail(n.showError)
  },
  getStripeTokenForCard: function(e, t) {
    e.preventDefault(), e.stopPropagation();
    var n, i, a = this,
      r = {};
    t = t || {}, i = "transaction" === t.type ? $("#completePayment") : $("#saveCard");
    var s = $.payment.validateCreditCardForm();
    if (s) {
      n = $("#card-expiration").val().split("/");
      var o = {
        number: $("#card-number").val(),
        cvc: $("#card-cvc").val(),
        exp_month: n[0],
        exp_year: n[1],
        address_zip: $("#card-zip").val()
      };
      Stripe.card.createToken(o, function(e, n) {
        n.error ? (a.showError(n.error.message), i.prop("disabled", !1)) : (r.tid = app.checkout.get("transaction").tid, r.source = n.id, "transaction" === t.type ? a.sendTransaction(r) : a.saveCard(r.source, i), o = null)
      })
    } else i.prop("disabled", !1)
  },
  completeTransaction: function(e) {
    e.preventDefault(), e.stopPropagation();
    var t = {},
      n = app.user.get("cards"),
      i = $("#completePayment");
    i.prop("disabled", !0), n && n.length > 0 ? (t.tid = app.checkout.get("transaction").tid, t.source = n[0].id, this.sendTransaction(t)) : this.getStripeTokenForCard(e, {
      type: "transaction"
    }), Wantering.Tracker.Event("Submit Payment", "Checkout Events")
  },
  sendTransaction: function(e) {
    var t = this,
      n = n || {},
      i = {},
      a = $("#completePayment");
    n.data = e, n.url = "/api/user/transactions/checkout/", n.method = "POST", $(this.el).addClass("isInProgress"), this.transitionSection($("#checkoutReviewPayment"), "checkoutInProgress", this.templateInProgress()), $.ajax(n).done(function(n) {
      return "error" == n.result ? (t.showError(n.message), setTimeout(function() {
        $("#checkoutInProgress").html(""), $("#checkoutReviewPayment").removeClass("completed transitioning closed"), $("#checkout").removeClass("isInProgress isComplete"), a.prop("disabled", !1)
      }, 500), void 0) : (n.data.creditUsed && (app.checkoutView.context.transaction.credit = parseFloat(100 * n.data.creditUsed / 100).toFixed(2)), i = {
        tid: e.tid.substr(0, 6),
        oid: n.data.zendeskID,
        transaction: app.checkoutView.context.transaction,
        product: app.checkoutView.context.product
      }, $(t.el).addClass("isComplete"), t.transitionSection($("#checkoutInProgress"), "checkoutDone", t.templateDone(i)), Wantering.Tracker.Event("Checkout Completed", "Checkout Events"), void 0)
    }).fail(t.showError)
  },
  showError: function(e) {
    e || (e = "There was a problem connecting to the server, please try again."), Wantering.trigger("message:show", {
      type: "error",
      message: e,
      timeout: !1
    }), Wantering.Tracker.Event(e, "Checkout Errors")
  },
  hideCheckout: function() {
    (!$("#header").hasClass("viewProductDetail") || $("#header").hasClass("viewProductLanding")) && $("html").removeClass("hasOverlay"), $(this.el).addClass("hide"), this.options.open = !1
  },
  closeCheckout: function() {
    app.navigate(this.options.backURL, {
      trigger: !0,
      replace: !0
    })
  },
  doneCheckout: function() {
    this.closeCheckout(), this.close()
  },
  close: function() {
    app.checkout.set("transaction", {}), Wantering.Utils.CloseViews(this)
  },
  followLink: function(e) {
    return e.stopPropagation(), !0
  }
}), _.extend(Wantering.Module.CheckoutView.prototype, Wantering.Mixin.Utils), _.extend(Wantering.Module.CheckoutView.prototype, Wantering.Mixin.Validations), Wantering.Module.PromoFeatureCollection = Backbone.Collection.extend({
  url: function() {
    return "/api/promo/"
  }
}), Wantering.Page.HomeView = Backbone.View.extend({
  initialize: function(e) {
    var t = bootstrapData ? bootstrapData.promoFeatures : [];
    if (this.options = e, this.childViews = [], app.promoFeatures || (app.promoFeatures = new Wantering.Module.PromoFeatureCollection(t)), this.listenTo(app.promoFeatures, "sync", this.render), _.has(this.options, "el") && this.options.el.length ? this.activateSearch() : this.setElement(this.template(this.context())), app.promoFeatures.length < 1 ? app.promoFeatures.fetch() : "fromClient" === this.options.type && this.render(), Wantering.trigger("state:update", {
        title: Defaults.Titles.home
      }), Wantering.Utils.SetViewClass("viewHome"), window.location.href.indexOf("StyledOn") >= 0) {
      var n = Formatters.GetURLParameter("utm_campaign");
      "styledon" === n && Wantering.trigger("popup:open", {
        type: "welcomeStyledOn"
      })
    }
  },
  template: Templates.Home,
  context: function() {
    var e, t = app.promoFeatures.toJSON()[0];
    return app.trendingSummary && (e = app.trendingSummary.toJSON()[0].brands.docs), t = Helpers.HomePage(t, e), {
      features: t,
      setOrder: Defaults.HomePageSetOrder,
      setTitles: Defaults.LandingPageTitles,
      setDescriptions: Defaults.LandingPageDesc,
      isSmartPhone: screenSize.isSmartPhone,
      imgPath: Wantering.Config.Urls.s3,
      Templates: Templates
    }
  },
  render: function() {
    return $("#main").html(this.template(this.context())), this.activateSearch(), this
  },
  activateSearch: function() {
    var e = {},
      t = $("#siteIntro").find(".searchBox"),
      n = new Wantering.Module.SearchBoxView({
        el: t,
        type: "SiteIntro"
      });
    this.childViews.push(n), $(".searchBox").val(""), this.options.prepopulateSearch && (e.string = this.options.prepopulateSearch, n.animateField(e)), this.animateMasthead()
  },
  animateMasthead: function() {
    var e, t, n, i, a, r;
    r = $("#main"), setTimeout(function() {
      e = $(".unitsMasthead"), t = e.length, t > 1 && !window.homeMastheadTimer && (window.homeMastheadTimer = setInterval(function() {
        e = $(".unitsMasthead"), n = e.not(".backStage"), i = e.index(n), n.addClass("offStageLeft"), a = t - 1 > i ? i + 1 : 0, setTimeout(function() {
          n.removeClass("offStageLeft").addClass("backStage")
        }, 1e3), e.eq(a).removeClass("backStage")
      }, 8e3))
    }, 100)
  },
  close: function() {
    Wantering.Utils.CloseViews(this)
  }
}), Wantering.Page.Article = Backbone.Model.extend({
  url: function() {
    return this.attributes.linkTitle ? "/api/article/?link=" + this.attributes.linkTitle : "/api/user/article/?id=" + this.id
  },
  parse: function(e) {
    return e[0]
  },
  toJSON: function() {
    var e = Backbone.Model.prototype.toJSON.call(this);
    return e.wanteringImageRootURL = Wantering.Config.Urls.images, e.isSmartPhone = screenSize.isSmartPhone, e
  }
}), Wantering.Page.ArticleView = Backbone.View.extend({
  initialize: function(e) {
    _.has(e, "el") || this.setElement(Templates.Article({
      articleBodyHTML: ""
    })), this.options = e, "fromClient" == this.options.type ? this.render() : this.switchMainImg(), this.options.model.attributes.meta.header.data.size.o[0] < 1200 && !screenSize.isSmartPhone && (this.options.isSmallHeader = !0), screenSize.isSmartPhone || setTimeout(this.checkWidgetPosition, 500), screenSize.isBigScreen || this.$el.hammer({
      threshold: 15,
      velocity: .25
    })
  },
  events: {
    "click .shareAction": "share",
    "click .articleProductAction": "toggleCarousel",
    "click .doBuy": "trackBuy",
    "click .carouselIndicatorAction": "nextCarouselItem",
    "click .carouselNavigatorActionNext": "nextCarouselItem",
    "click .carouselNavigatorActionPrev": "prevCarouselItem",
    "click .carouselToggleAction, .imgSetItem": "toggleCarousel",
    panstart: "swipe"
  },
  render: function() {
    var e = (this.model.toJSON(), app.landingPage ? "type" : "date"),
      t = Wantering.ArticlePresenter.context(this.model.attributes, {
        isSmartPhone: screenSize.isSmartPhone,
        isEditor: !1,
        isShopper: Wantering.Authentication.OK && !!app.user.get("isShopper"),
        route: document.location.href,
        order: e,
        wanteringImageRootURL: Wantering.Config.Urls.images
      }),
      n = Templates.ArticleBody(t);
    this.$el.html(n), $("#main").html($(this.el)), this.switchMainImg(), $("#header").find(".autoCompleteWrap").removeClass("selected"), this.removeInvisibleClass()
  },
  removeInvisibleClass: function() {
    this.$el.removeClass("almostInvisible")
  },
  share: function(e) {
    return Wantering.Sharing.BasicShare($(e.target), this.model.attributes), !1
  },
  switchMainImg: function() {
    var e, t, n, i, a;
    e = $(this.el).find(".articleMastHead"), t = e.find(".clippable"), n = e.find(".clearArticleMastHead"), i = t.prop("src"), a = screenSize.isSmartPhone ? i.replace("s.jpg", "m.jpg") : i.replace("m.jpg", "l.jpg");
    var r = this;
    setTimeout(function() {
      r.options.isSmallHeader ? n.css("background-image", "url(" + a + "), url(" + i + ")") : e.css("background-image", "url(" + a + "), url(" + i + ")"), t.prop("src", a)
    }, 250)
  },
  getModelOfTargetItem: function(e) {
    var t, n, i, a, r, s;
    return t = $(e.currentTarget), n = t.closest(".widgetContainer"), i = t.parent(), a = n.attr("id"), r = n.find(".imgSetItem").index(i), 0 > r && (r = 0), s = this.model.attributes.meta.assets[a][r].data
  },
  trackBuy: function(e) {
    var t;
    if (t = this.getModelOfTargetItem(e), e.stopPropagation(), Wantering.Tracker.Event("Buy", "Article Set", 0, t), Wantering.Authentication.OK && app.user.get("isShopper")) {
      app.checkoutView && app.checkoutView.options.short_key == t.short_key ? app.checkoutView.showOrRenderEl() : app.checkoutView = new Wantering.Module.CheckoutView(t, {
        short_key: t.short_key,
        location: "Article Set"
      }), e.preventDefault();
      var n = $(e.target).attr("href");
      app.navigate(n, {
        trigger: !0
      })
    } else if (Formatters.CheckXCust($(e.target)), screenSize.isSmartPhone) return setTimeout(function() {
      document.location = $(e.target).prop("href")
    }, 200), !1
  },
  setBackButtonText: function() {
    $("#backToPage").html(this.model.attributes.data.title)
  },
  checkWidgetPosition: function() {
    var e, t, n, i;
    e = screenSize.isSmallScreen ? $(this.el).find(".positionArticleRight") : $(this.el).find(".positionArticleLeft, .positionArticleRight"), e.length > 0 && (t = $(this.el).find(".articleFooter"), n = t.position().top, i = t.outerHeight(), _.each(e, function(e) {
      var t = $(e).position().top,
        a = $(e).outerHeight();
      t + a > n && $(e).css("bottom", i + 60)
    }))
  },
  swipe: _.debounce(function(e) {
    function t(e) {
      var t, n = {
        2: "prev",
        4: "next"
      };
      return t = n[e], n[e]
    }
    var n, i, a;
    n = $(e.gesture.target), n.hasClass("articleSetItemAction") && (i = n.closest(".widgetContainer"), i.hasClass("isCarousel") && (a = t(e.gesture.offsetDirection), a && this.rotateCarousel(e, n, a)))
  }, 225),
  prevCarouselItem: function(e) {
    var t = $(e.target);
    return this.rotateCarousel(e, t, "prev"), !1
  },
  nextCarouselItem: function(e) {
    var t = $(e.target);
    return this.rotateCarousel(e, t, "next"), !1
  },
  toggleCarousel: function(e) {
    var t, n, i, a, r, s;
    t = $(e.target), n = t.closest(".widgetContainer"), i = n.find(".imgSet"), a = i.find(".imgSetItem"), r = n.find(".carouselNavigator"), $indexIndicator = r.find(".indexIndicator"), itemIndex = t.hasClass("carouselToggleAction") ? 0 : a.index(t.closest(".imgSetItem"));
    var o = n.hasClass("isCarousel");
    return n.removeClass("isCarousel"), a.removeClass("selected offStageLeft offStageRight"), r.removeClass("lastItemSelected").addClass("firstItemSelected"), o ? !1 : (s = a.eq(itemIndex), s.addClass("selected"), n.toggleClass("isCarousel"), $indexIndicator.text(itemIndex + 1), setTimeout(function() {
      _.each(a, function(e) {
        var t = $(e).find(".articleSetItemAction"),
          n = t.css("background-image");
        t.css("background-image", "url(" + t.data("imglarge") + "), " + n)
      })
    }, 150), Wantering.Tracker.Event("Toggle Carousel", "Article", itemIndex), !1)
  },
  rotateCarousel: function(e, t, n) {
    var i, a, r, s, o, l, u, c, p, d;
    if (i = t.closest(".widgetContainer"), a = i.find(".carouselNavigator"), r = i.find(".imgSet"), s = r.find(".imgSetItem"), l = s.length - 1, o = a.find(".indexIndicator"), l > 1) {
      if (u = r.find(".selected"), c = s.index(u), "next" === n && c != l) u.addClass("offStageLeft"), l > c && (p = c + 1, p == l && a.addClass("lastItemSelected"));
      else {
        if ("prev" !== n || 0 == c) return !1;
        u.addClass("offStageRight"), c > 0 && (p = c - 1, 0 == p && a.addClass("firstItemSelected"))
      }
      p > 0 && l > p && a.removeClass("firstItemSelected lastItemSelected"), u.removeClass("selected"), d = s.eq(p), d.addClass("selected").removeClass("offStageLeft offStageRight"), o.text(p + 1), Wantering.Tracker.Event("Rotate Carousel", "Article", 0)
    }
  },
  close: function() {
    app.articlePageView = Wantering.Utils.CloseViews(app.articlePageView)
  }
}), Wantering.Page.GroupPageView = Backbone.View.extend({
  initialize: function(e) {
    this.options = e, this.childViews = [];
    var t = [],
      n = this.options.type,
      i = this.options.prefix,
      a = this.options.typeUpper;
    if (!_.has(e, "el")) {
      this.setElement(Templates.Group({
        id: n,
        groupPageHTML: ""
      })), "brands" == n ? (app.brands = new Wantering.Module.GroupList({
        type: n,
        prefix: i
      }), this.options.collection = app.brands) : "stores" == n && (app.stores = new Wantering.Module.GroupList({
        type: n,
        prefix: i
      }), this.options.collection = app.stores), "undefined" != typeof app.groupPage && t.push(app.groupPage);
      var r = Defaults.Titles[n];
      if (i) {
        var s = i.toUpperCase();
        "0" == i && (s = "#"), r = r.replace(a, a + ": " + s)
      }
      Wantering.trigger("state:update", {
        title: r
      }), Wantering.Utils.SetViewClass(Defaults.ViewClasses[n]), this.render()
    }
    t.length > 0 && _.each(t, function(e) {
      Wantering.Utils.CloseViews(e)
    })
  },
  render: function() {
    {
      var e = this,
        t = this.options.type,
        n = this.options.prefix,
        i = Defaults.PageTitles[t],
        a = Defaults.PageDesc[t],
        r = this.options.collection;
      this.options.letters
    }
    app.groupView = new Wantering.Module.GroupListView(this.options), this.childViews.push(app.groupView), $(this.el).html(Helpers.GroupListHeader({
      title: i,
      prefix: n,
      description: a
    })), r.fetch({
      async: !1,
      success: function(i, a) {
        a.letters && $(e.el).append(Helpers.LetterNav(t, a.letters, n)), n && $(e.el).append(app.groupView.render().el)
      },
      error: function() {}
    });
    var s = Helpers.CheckTrendingSummary();
    if (s && !n) {
      var o;
      "brands" == this.options.type && (o = s.brands.docs), o && (app.trendingGroup = new Wantering.Module.TrendingGroup(o), app.trendingGroupView = new Wantering.Module.TrendingGroupView({
        type: this.options.type
      }), this.childViews.push(app.trendingGroupView), $(this.el).append(app.trendingGroupView.render().el))
    }
    $("#main").html(this.el)
  },
  close: function() {
    Wantering.Utils.CloseViews(this)
  }
}), Wantering.Page.InviteView = Backbone.View.extend({
  initialize: function(e) {
    var t = app.user.attributes.userHash,
      n = app.user.attributes.provider;
    if (!_.has(e, "el")) {
      var i = this.template({
        userHash: t,
        userProvider: n
      });
      this.setElement(i)
    }
  },
  template: Templates.Invite,
  render: function() {
    return "facebook" == app.user.attributes.provider && (("undefined" == typeof app.fbFriends || null == app.fbFriends) && (app.fbFriends = new Wantering.Sharing.FBFriends([]), app.fbFriends.getFBFriends()), app.fbFriendsView = new Wantering.Sharing.FBFriendsView({
      collection: app.fbFriends
    }), $(this.el).find(".friendWrap").html(app.fbFriendsView.render().el)), this
  },
  events: {
    "click .button": "invite",
    "click .thumbnail": "inviteFriend"
  },
  inviteFriend: function(e) {
    var t = $(e.currentTarget).data("fbid"),
      n = Wantering.Sharing.Compose("facebook", "invite", null, t);
    return Modernizr.touch && window.open(n, "_blank"), Wantering.Tracker.Event("invite", "facebook friend"), !1
  },
  invite: function(e) {
    return Wantering.Sharing.BasicShare($(e.target), null), !1
  }
}), Wantering.Module.ArticleHeaderCollection = Backbone.Collection.extend({
  url: function() {
    return "/api/article/headers/type/" + this.kind + "/"
  },
  initialize: function(e, t) {
    this.kind = t.kind, this.sort_key = "dateDisplayed"
  },
  parse: function(e) {
    var t = this.toJSON().concat(e.docs);
    return t
  }
}), Wantering.Page.LandingPageView = Backbone.View.extend({
  fetchSize: 30,
  initialize: function(e) {
    var t = bootstrapData ? bootstrapData.articles : [],
      n = document.location.search.match(/\?page=(\d+)/);
    this.kind = e.kind, this.options = e, this.options.page = n && n[1] ? parseInt(n[1]) : 1, this.options.hits = this.fetchSize, app.articles && this.kind == app.articles.kind || (app.articles = new Wantering.Module.ArticleHeaderCollection(t, {
      kind: this.kind
    })), _.has(this.options, "el") && this.options.el.length || this.setElement(this.template(this.context())), $("#notfound").length || (app.articles.length < 1 ? app.articles.fetch({
      context: this
    }).done(function(e) {
      this.options.hits = e.hits, this.render()
    }) : "fromClient" == this.options.type && this.render(), Wantering.trigger("state:update", {
      title: Defaults.LandingPageTitles[this.kind] + " / Wantering"
    }), Wantering.Utils.SetViewClass("viewLanding"), $(".subNavAction").removeClass("selected"), $(".subNavAction.-" + this.kind).addClass("selected"), app.landingPage = this.kind, setTimeout(this.initScrollWatcher.bind(this), 500), this.scrollMonitor = setInterval(this.scrollWatcher.bind(this), 225))
  },
  template: Templates.Landing,
  events: {
    "click .shareAction": "share"
  },
  context: function() {
    var e = {};
    return e.landing = _.reduce(app.articles.toJSON(), function(e, t, n, i) {
      return t = Helpers.LandingPage(t, n, "landing", i.length), e.push(t), e
    }, []), {
      features: e,
      kind: this.kind,
      title: Defaults.LandingPageTitles[this.kind],
      imgPath: Wantering.Config.Urls.s3,
      isSmartPhone: screenSize.isSmartPhone,
      nextPage: void 0,
      previousPage: void 0,
      Templates: Templates
    }
  },
  render: function() {
    return this.options.page = app.articles ? Math.ceil(app.articles.length / this.fetchSize) : 1, $("#main").html(this.template(this.context())), this
  },
  share: function(e) {
    e.stopPropagation(), e.preventDefault();
    var t, n, i, a, r;
    t = {
      advice: "style advice",
      celebrity: "celebrity style",
      inspiration: "style inspiration",
      insiders: "about Insiders",
      trends: "about the latest trends"
    }, n = "landing", i = $("#main .setItem").find(".clippable").prop("src"), a = "Read more " + t[app.landingPage] + " on Wantering!", r = "The best from Wantering Editors and Insiders.";
    var s = {
      shareMessage: a,
      shareSubTitle: r,
      mediaURL: i
    };
    Wantering.Sharing.BasicShare($(e.target), s)
  },
  scrollWatcher: _.throttle(function() {
    if (this.didScroll) {
      var e, t, n, i, a = $(".landingSet");
      if (e = this.$scrollMonitorTarget.scrollTop(), pageFold = e + $(window).height(), t = a.outerHeight() + a.position().top, this.didScroll = !1, position = screenSize.isMobile ? t : t - pageFold, position < this.scrollThreshold) {
        var r = app.articles.length < this.options.hits;
        !n && r && (n = !0, i = this.options.page * this.fetchSize, app.articles.fetch({
          data: {
            rows: this.fetchSize,
            start: i
          },
          context: this
        }).done(function(e) {
          this.options.hits = e.hits, e.docs.length && (this.options.page++, this.render(), app.state.set("path", app.state.get("path") + "?page=" + this.options.page)), n = !1
        }))
      }
    }
  }, 1500)
}), _.extend(Wantering.Page.LandingPageView.prototype, Wantering.Mixin.ScrollerUtils), Wantering.Page.LearnStyle = Backbone.Model.extend({}), Wantering.Page.LearnStyleView = Backbone.View.extend({
  tagName: "section",
  id: "learnStyle",
  className: "quizView pageBody",
  template: _.template('<div class="stepBar"><ul class="steps"><li class="stepItem step0 selected">6</li><li class="stepItem step1">5</li><li class="stepItem step2">4</li><li class="stepItem step3">3</li><li class="stepItem step4">2</li><li class="stepItem step5">1</li></ul></div><div class="questions"></div>'),
  templateGender: _.template('<div data-qid="0" class="question questionLook genderQuestion"><h1 class="h1Questions">You most often shop for...</h1><ul class="answers"><li data-aid="female" class="answer genderAnswer"><span class="thumbnail" style="background-image: url(/static/css/app/assets/quiz-images/gender-female.jpg)"></span><span class="hint">Womenswear</span></li><li data-aid="male" class="answer genderAnswer"><span class="thumbnail" style="background-image: url(/static/css/app/assets/quiz-images/gender-male.jpg)"></span><span class="hint">Menswear</span></li></ul></div>'),
  templateQuestion: _.template('<div data-qid="{{qid}}" class="question question{{style}} offStageRight"><h1 class="h1Questions">{{text}}</h1><ul class="answers">{# _.each(answers, function(i) { #}<li data-aid="{{i.aid}}" title="{{i.style}}" class="answer styleAnswer"><span class="thumbnail" style="background-image: url(/static/css/app/assets/quiz-images/{{i.image}})"></span><span class="hint">{{i.hint}}</span></li>{# }); #}</ul></div>'),
  questions: function() {
    var e = [];
    return $.ajax({
      url: "/api/quiz/" + app.user.get("gender") + "/",
      async: !1,
      dataType: "json",
      success: function(t) {
        e = t
      }
    }), e
  },
  render: function() {
    return $(this.el).html(this.template()), $steps = $(this.el).find(".stepItem"), $questions = $(this.el).find(".questions"), $questions.append(this.templateGender()), this
  },
  loadQuestions: function(e) {
    var t = this.questions(),
      n = this;
    return _.each(t, function(t) {
      _.each(t, function(t) {
        e += n.templateQuestion(t)
      })
    }), e
  },
  collectedAnswers: [],
  collectAnswers: function(e) {
    var t, n = $(this.el).find(".question"),
      i = n.parent(),
      a = $(e.currentTarget),
      r = a.find(".thumbnail").css("background-image"),
      s = a.closest(".question"),
      o = s.next(),
      l = $("li.stepItem"),
      u = l.length,
      c = n.index(s);
    t = 6 == u ? c : c + 1;
    var p = t + 1,
      d = a.closest("div.question").data("qid"),
      h = a.data("aid");
    this.collectedAnswers.push({
      qid: d,
      aid: h
    }), Wantering.Tracker.Event("Learn Style Step" + t, "Quiz"), a.addClass("selected"), s.addClass("offStageLeft"), 0 == o.length ? (l.parent().addClass("invisible"), this.saveAnswers()) : (o.removeClass("offStageRight"), i.removeClass("onQuestion1 onQuestion2 onQuestion3 onQuestion4 onQuestion5").addClass("onQuestion" + p), setTimeout(function() {
      Wantering.Utils.ResetScroll(), l.removeClass("selected"), $(".step" + t).addClass("stepComplete").css("background-image", r), $(".step" + p).addClass("selected")
    }, 400))
  },
  saveAnswers: function() {
    return app.navigate("trending/" + searchFilters.gender + "/", {
      trigger: !0
    }), Wantering.trigger("popup:open", {
      type: "welcome",
      pathname: document.location.pathname,
      autofocus: !1
    }), $("#popupAlert").append((new Wantering.Page.InviteView).render().el), $.ajax({
      type: "POST",
      url: "/api/user/quiz/answers/",
      data: {
        answers: this.collectedAnswers
      },
      success: function() {
        app.user.set("quizDone", !0), Wantering.Tracker.Event("Welcome", "Quiz")
      }
    }), !1
  },
  setGender: function(e) {
    var t = "",
      n = $(e.currentTarget),
      i = n.closest(".question"),
      a = i.parent(),
      r = $(this.el).find(".stepItem"),
      s = $(e.currentTarget).data("aid");
    app.user.set("gender", s), searchFilters.gender = Formatters.CheckForGenderInString(s), this.collectedAnswers.push({
      gender: s
    }), t = this.loadQuestions(t), $questions.append(t), setTimeout(function() {
      var e = i.next();
      i.addClass("offStageLeft"), e.removeClass("offStageRight"), a.removeClass("onQuestion1 onQuestion2 onQuestion3 onQuestion4 onQuestion5").addClass("onQuestion1"), setTimeout(function() {
        r.removeClass("selected"), $(".step1").addClass("selected")
      }, 400)
    }, 10)
  },
  events: {
    "click .styleAnswer": "collectAnswers",
    "click .genderAnswer": "setGender"
  }
}), Wantering.Page.OnboardLandingView = Backbone.View.extend({
  template: Templates.OnboardContest,
  render: function() {
    Wantering.Utils.SetViewClass("viewOnboardLanding"), $("#main").html(this.el)
  }
}), Wantering.Page.Settings = Backbone.Model.extend({}), Wantering.Page.SettingsView = Backbone.View.extend({
  tagName: "section",
  id: "settings",
  className: "pageBody",
  template: Templates.Settings,
  initialize: function(e) {
    this.options = e, Wantering.Utils.SetViewClass("viewSettings"), Wantering.trigger("state:update", {
      title: Defaults.Titles.settings
    })
  },
  render: function() {
    var e, t, n, i, a, r, s, o, l, u, c, p, d, h;
    return $.ajax({
      type: "GET",
      url: "/api/user/details/get/",
      async: !1,
      success: function(m) {
        d = m.uName, e = m.nameFirst, t = m.nameLast, p = m.provider, i = m.emailValidated, userPrivateWants = m.privateWants, h = m.isStaff, n = null === m.emailPrimary ? m.email : m.emailPrimary, a = m.emailPreferences, _.each(a, function(e) {
          "weekly" === e.key ? r = e.active : "stylePicks" === e.key ? s = e.active : "sale" === e.key ? o = e.active : "fashionDeals" === e.key ? l = e.active : "backInStock" === e.key && (u = e.active)
        }), c = m.fbPublishLikes
      }
    }), this.$el.html(this.template({
      uName: d,
      firstName: e,
      lastName: t,
      provider: p,
      email: n,
      emailValidated: i,
      emailPrefWeekly: r,
      emailPrefSaleAlert: o,
      emailFashionDeals: l,
      emailStylePicks: s,
      emailPrefBackInStock: u,
      publishFacebook: c,
      privateWants: !userPrivateWants,
      isStaff: h
    })), this.setupValidations(), this
  },
  events: {
    "blur #settingsEmail": "validateEmail",
    "click .checkButton": "toggleCheck",
    "click .saveButton": "saveSettings",
    "click [data-resend]": "resendValidation",
    "click [data-toggle]": "toggleForms",
    "click [data-update]": "updateAccount",
    'keydown [data-validate][name="uName"]': "watchUsername",
    'blur [data-validate][name="uName"]': "validateUsername"
  },
  validateEmail: function() {
    var e = this.$el.find("#settingsEmail"),
      t = e.val();
    Wantering.Utils.Validate(e, t)
  },
  updateAccount: function() {
    var e = {
      uName: this.$('[name="uName"]').val(),
      nameFirst: this.$('[name="nameFirst"]').val(),
      nameLast: this.$('[name="nameLast"]').val()
    };
    this.updateSettings({
      data: e
    }).done(function(t) {
      Wantering.trigger("message:show", {
        message: "Your account has been updated."
      }), $(".lovesNavAction").attr("href", "/member/" + t.uName + "/collections/"), app.user.set(e), $(".userDetails").toggleClass("hide")
    }).fail(this.showError)
  },
  toggleForms: function(e) {
    e.preventDefault(), e.stopPropagation();
    var t = $(e.target),
      n = "." + t.data("toggle");
    $(n).toggleClass("hide")
  },
  resendValidation: function(e) {
    e.preventDefault(), e.stopPropagation(); {
      var t;
      this.$("#settingsEmail").val()
    }
    return t = null === app.user.attributes.emailPrimary || "" === app.user.attributes.emailPrimary ? app.user.attributes.email : app.user.attributes.emailPrimary, "" === t ? (Wantering.trigger("message:show", {
      message: "Please enter a valid email",
      type: "error"
    }), void 0) : ($.ajax({
      url: "/api/user/send/validation/email/",
      method: "POST"
    }).done(function() {
      Wantering.trigger("message:show", {
        message: "An email with the validation link has been sent to " + t
      })
    }), void 0)
  },
  toggleCheck: function(e) {
    var t = $(e.target),
      n = t.find("input[type=checkbox]");
    return t.toggleClass("selected"), n.prop("checked", !n.prop("checked")), !1
  },
  saveSettings: function() {
    var e = this.$("#settingsEmail"),
      t = this.$("#settingsEmailPrefWeekly"),
      n = this.$("#settingsEmailPrefSaleAlert"),
      i = this.$("#settingsEmailPrefBackInStock"),
      a = this.$("#settingsEmailFashionDeals"),
      r = this.$("#settingsEmailStylePicks"),
      s = this.$el.find("#settingsPrivateWants"),
      o = this.$("#settingsPublishFacebook"),
      l = {
        email: e.val(),
        weekly: t.prop("checked"),
        sale: n.prop("checked"),
        backInStock: i.prop("checked"),
        fashionDeals: a.prop("checked"),
        stylePicks: r.prop("checked"),
        publish_facebook: o.prop("checked"),
        privateWants: !s.prop("checked")
      };
    return Wantering.Utils.Validate(e, l.email) ? (this.$el.addClass("invisible"), this.publishFacebook = l.publish_facebook, this.updateSettings({
      data: l
    }).done(this.showSuccess).fail(this.showError), void 0) : !1
  },
  showSuccess: function() {
    Wantering.Tracker.Event("Save Settings", "Form"), app.user.set("fbPublishLikes", this.publishFacebook), $("#confirmFacebookPublish").remove(), setTimeout(function() {
      app.navigate("/", {
        trigger: !0
      }), Wantering.trigger("message:show", {
        title: "Settings Updated",
        message: "Your changes have been saved.",
        keepOpenOnNavigate: !0
      })
    }, 50)
  },
  showError: function() {
    Wantering.trigger("message:show", {
      message: "There was a problem connecting to the server, please try again."
    })
  },
  urlRoot: "/api/user/details",
  updateSettings: function(e) {
    return e = e || {}, e.context = this, e.url = this.urlRoot + "/set/", e.method = "POST", $.ajax(e)
  }
}), _.extend(Wantering.Page.SettingsView.prototype, Wantering.Mixin.Validations), _.extend(Wantering.Page.SettingsView.prototype, Wantering.Mixin.Messages), Wantering.Page.ProductsList = Backbone.Model.extend({
  parse: function(e) {
    return e[0]
  }
}), Wantering.Page.ProductListView = Backbone.View.extend({
  tagName: "section",
  initialize: function(e) {
    this.options = e, this.childViews = [];
    var t = this.options.type,
      n = !1,
      i = {
        type: t
      },
      a = !1,
      r = {};
    r.type = this.options.type, _.has(e, "el") && (n = $(this.el).find(".products")[0], i.el = n, a = $(this.el).find(".listResultsHeaderWrapper"), r.el = a), "searchResults" == t ? (this.options.collection = app.searchProducts, this.options.searchContent = app.searchProducts.searchContent, app.searchProductsView = new Wantering.Module.ProductsView(i), this.childViews.push(app.searchProductsView)) : "similarItems" == t ? (this.options.collection = app.similarProducts, app.similarProductsView = new Wantering.Module.ProductsView(i), this.childViews.push(app.similarProductsView)) : "memberLoves" == t ? (this.options.collection = app.memberLovesProducts, app.memberLovesProductsView = new Wantering.Module.ProductsView(i), this.childViews.push(app.memberLovesProductsView)) : "otherMemberLoves" == t ? (this.options.collection = app.memberLovesProducts, app.memberLovesProductsView = new Wantering.Module.ProductsView(i), this.childViews.push(app.memberLovesProductsView)) : "recentlyViewed" == t ? (this.options.collection = app.recentProducts, app.recentProductsView = new Wantering.Module.ProductsView(i), this.childViews.push(app.recentProductsView)) : "trending" == t && (this.options.collection = app.trendingProducts, app.trendingProductsView = new Wantering.Module.ProductsView(i), this.childViews.push(app.trendingProductsView)), t.match(/(searchResults|similarItems|recentlyViewed|trending|feature)/) ? (r.model = this.model, r.collection = this.options.collection, r.searchContent = this.options.searchContent, this.headerView = new Wantering.Module.SearchHeader(r)) : t.match(/member/i) && (r.profile = this.options.profile, this.headerView = new Wantering.Module.MemberHeader(r)), this.childViews.push(this.headerView)
  },
  events: {
    "click .collapsible": "expandCollapse",
    "click .externalSiteLink": "trackShop",
    "click .listContentImg": "trackShop",
    "click .listContentSocialAction": "trackSocial"
  },
  render: function() {
    var e, t, n = this.options.type,
      i = this.options.collection,
      a = (this.options.searchContent, "pageBody resultsWrap " + Defaults.ViewClasses[n]);
    return i.setid && (a = "pageBody resultsWrap viewSetLoves", 2 === i.setid && (a += " viewWishList", $(this.el).append('<div class="wishListFooter"></div>'))), $(this.el).prop("id", n).prop("className", a).prepend(this.headerView.render().el), "searchResults" == n ? (e = i.searchGender, t = app.searchProductsView) : "similarItems" == n ? t = app.similarProductsView : "memberLoves" == n ? (i = app.memberLovesProducts, t = app.memberLovesProductsView) : "otherMemberLoves" == n && this.options.profile ? (i = app.memberLovesProducts, t = app.memberLovesProductsView) : "otherMemberLoves" != n || this.options.profile ? "trending" == n ? t = app.trendingProductsView : "recentlyViewed" == n && (t = app.recentProductsView) : (i = app.memberLovesProducts, t = app.memberLovesProductsView), 0 === i.length ? this.renderNoResults(n, e) : (t.el.childElementCount < 1 && t.renderProducts(i.models), $(this.el).append(t.el)), t = null, this
  },
  renderNoResults: function(e, t) {
    var n;
    this.options.profile && this.options.profile.attributes && (n = this.options.profile.attributes), $("#header").hasClass("viewSetLoves") && (e = "memberLovesSet");
    var i = Helpers.ProductListNoResults(e, t, Backbone.history.fragment, n, app.featuredTags);
    $(this.el).append(i), "searchResults" == e && Wantering.Tracker.Search("No Results", "ListResults")
  },
  expandCollapse: function(e) {
    return $(e.currentTarget).toggleClass("collapsed"), !1
  },
  trackShop: function(e) {
    Formatters.CheckXCust($(e.currentTarget)), Wantering.Tracker.Event("Shop Brand", "Search Content", 0)
  },
  trackSocial: function() {
    Wantering.Tracker.Event("Social Referral", "Search Content", 0)
  },
  close: function() {
    Wantering.Utils.CloseViews(this)
  }
}), Wantering.Page.ProductDetail = Backbone.Model.extend({
  initialize: function() {
    var e = Helpers.ProductScoreCard(this.attributes);
    this.set("scoreCard", e)
  },
  url: function() {
    return "/api/product/" + this.id + "/"
  },
  parse: function(e) {
    return e.docs[0]
  },
  extractTags: function() {
    if (!this.get("typed_tags")) return "";
    var e = ["style", "occasion", "inspiration", "celebrity"],
      t = new RegExp("(" + e.join("|") + ")\\:([\\w\\-\\s]*)", "i");
    return this.get("typed_tags").reduce(function(e, n) {
      return t.test(n) && e.push(n.match(t)[2]), e
    }, [])
  },
  extractCategories: function() {
    if (!this.get("category_names")) return "";
    var e = ["clothing"],
      t = new RegExp("(" + e.join("|") + ")");
    return this.get("category_names").filter(function(e) {
      return !t.test(e)
    })
  },
  extractSearchString: function() {
    var e = this.extractTags(),
      t = e[Math.floor(Math.random() * e.length)],
      n = this.extractCategories()[0];
    return t = t || this.get("brand_name"), n = n || "", (t + " " + n).toLowerCase()
  }
}), Wantering.Page.ProductDetailView = Backbone.View.extend({
  initialize: function(e) {
    if (this.options = e, this.model.get("short_key")) {
      if (this.childViews = [], this.checkGIF(), app.recentProducts.add(this.model.attributes), this.augmentModel(), this.options.similarProducts && this.renderSimilarList(), _.has(e, "el")) {
        var t = this;
        setTimeout(function() {
          t.showCoupon(), t.showWhoHearted(), t.showTimeline()
        }, 500)
      } else {
        var n = this.renderDetailsOnClient("overList");
        this.setElement(n)
      }
      app.setsPopup || (app.setsPopup = new Wantering.Module.SetsPopupView({
        pubsub: Wantering
      })), this.switchMainImg(), app.productDetail.on("change:short_key", this.renderInPlace, this), "fromBootstrap" == this.options.type && "any" == searchFilters.gender && "n" != this.model.get("gender") && (searchFilters.gender = this.model.get("genderString"));
      var t = this;
      setTimeout(function() {
        t.trackView()
      }, 500), app.wantSet = void 0, Wantering.trigger("search:update", {
        string: this.model.extractSearchString()
      })
    }
  },
  checkGender: function(e) {
    if (!e) return "";
    var t, n = /\bf|\bfemale\b|\bwomens\b|\bwomen\b|\bladies\b|\bgirls\b|\bgirl\b/gi,
      i = /\bm|\bmale\b|\bmens\b|\bmen\b|\bguys\b/gi;
    return n.test(e) ? t = "womens" : i.test(e) && (t = "mens"), t
  },
  augmentModel: function() {
    var e, t;
    "undefined" == typeof this.model.get("product_wanted") && ("undefined" != typeof app.wantShortKeys && app.wantShortKeys.get(this.model.attributes.short_key) ? this.model.set("product_wanted", !0) : this.model.set("product_wanted", !1)), this.model.set("isNew", ViewHelpers.Product.checkIsNew(this.model.attributes)), this.model.set("currencySymbol", Formatters.CurrencySymbol(this.model.get("currency")));
    var n = this.model.get("gender");
    "n" != n && this.model.set("genderString", this.checkGender(n)), this.model.get("brand_name") && (e = Formatters.TidySearchString(this.model.attributes.brand_name), e = e.replace(/(\&|\s\&)/g, "").replace(/\s/g, "+").toLowerCase(), this.model.set("linkBrand", e)), this.model.get("store_names")[0] && (t = Formatters.TidySearchString(this.model.attributes.store_names[0]), t = t.replace(/ /g, "+").toLowerCase(), this.model.set("linkStore", t)), this.model.attributes.description = Formatters.StripEmptyHTML(this.model.attributes.description);
    var i;
    if (i = Wantering.Authentication.OK && app.user.get("isShopper") ? "/buy/" + this.model.attributes.link_title + "/" + this.model.attributes.short_key + "/" : Formatters.Redirect(this.model.attributes.store_urls[0], window.location, this.model.attributes.affiliate), this.model.set("buy_url", i), this.model.attributes.coupons && this.model.attributes.store_names[0] && this.model.attributes.coupons[this.model.attributes.store_names[0]]) {
      var a = this.model.attributes.coupons[this.model.attributes.store_names[0]][0].link;
      a.length < 3 && (a = this.model.attributes.store_urls[0]), this.model.set("coupon_url", Formatters.Redirect(a, window.location));
      var r = moment(),
        s = moment(this.model.attributes.coupons[this.model.attributes.store_names[0]][0].expiryDate);
      s.isAfter(r) && this.model.set("coupon_expiry", s.fromNow(!0))
    }
  },
  template: Templates.ProductDetail,
  render: function() {
    var e = this;
    if (this.model.get("short_key")) return setTimeout(function() {
      e.showCoupon()
    }, 300), this.showWhoHearted(), this.showTimeline(), setTimeout(function() {
      e.$el.removeClass("almostInvisible")
    }, 800), Wantering.trigger("state:update", {
      title: Formatters.GenerateProductTitle(this.model.attributes, Formatters)
    }), this
  },
  renderDetailsOnClient: function(e) {
    this.model.get("wanteringImageRootURL") || this.model.set("wanteringImageRootURL", Wantering.Config.Urls.images);
    var t = {
        model: this.model.attributes,
        type: e,
        userProvider: this.options.userProvider,
        viewClasses: Defaults.ViewClasses.productDetail,
        shareHTML: Templates.Share({
          type: "product"
        }),
        summary: Helpers.ProductSummaryText(this.model.attributes, screenSize.isSmartPhone),
        isStaff: parseInt(Wantering.Utils.ReadCookie("isStaff")),
        isShopper: app.user && !!app.user.get("isShopper"),
        isSmartPhone: screenSize.isSmartPhone
      },
      n = this.model.attributes.images;
    n.length > 1 && (t.galleryHTML = Helpers.ProductGallery(this.model.attributes, screenSize.isSmartPhone));
    var i = this.model.attributes.category_names;
    "undefined" != typeof i && null !== i && (t.categoryHTML = Helpers.ProductCategories(this.model.attributes));
    var a = this.model.attributes.typed_tags;
    "undefined" != typeof i && null !== i && a && (t.tagHTML = Helpers.ProductTags(this.model.attributes));
    var r = this.template(t);
    return r
  },
  renderInPlace: function() {
    this.options.type = "fromSimilarLanding", this.checkGIF(), this.augmentModel();
    var e = $("#productDetail").find(".inPlaceSwitch");
    e.remove();
    var t = this.renderDetailsOnClient("inPlace");
    $(this.el).prepend(t), this.switchMainImg(), this.trackView()
  },
  switchMainImg: function() {
    var e = this,
      t = screenSize.isSmartPhone ? 400 : 800;
    setTimeout(function() {
      var t = e.model.attributes.images[0].large.url;
      screenSize.isSmartPhone && (t = e.model.attributes.images[0].medium.url), $(e.el).find("#primaryTemplateImg").attr("src", e.model.attributes.wanteringImageRootURL + t)
    }, t)
  },
  renderLargeImages: function(e) {
    var t = "";
    if (this.model.hasGallery !== !0) {
      _.each(e, function(e, n) {
        if (0 !== n && 5 > n) {
          var i = e.large.url;
          screenSize.isMobile && (i = e.medium.url), t += Templates.ProductLargeImg({
            url: Wantering.Config.Urls.images + i,
            i: n
          })
        }
      }), this.model.hasGallery = !0
    }
    return t
  },
  renderGifWrap: function(e) {
    var t = "";
    return _.each(e, function(e, n) {
      t += Templates.ProductGifImg({
        url: Wantering.Config.Urls.images + e.small.url,
        i: n
      })
    }), t = Templates.ProductGifWrap({
      images: t
    })
  },
  renderSimilarList: function() {
    function e(e) {
      i.find(".h2Nested").after(e), e = null
    }
    var t = document.createDocumentFragment(),
      n = "productSimilar";
    "fromBootstrap" == this.options.type && (n = "productSimilarLanding");
    var i = $("#similarList");
    if ("undefined" == typeof app.similarToProducts || app.similarToProducts.productUrlShortKey != this.model.attributes.short_key)
      if (app.similarToProducts = new Wantering.Module.SimilarProducts({
          type: "productDetail"
        }), app.similarToProducts.productGender = this.model.attributes.genderString, app.similarToProducts.productPrice = searchFilters.price, app.similarToProducts.productUrlLink = this.model.attributes.link_title, app.similarToProducts.productUrlShortKey = this.model.attributes.short_key, app.similarToProductsView = new Wantering.Module.ProductsView({
          type: n
        }), this.childViews.push(app.similarToProductsView), $(t).html(app.similarToProductsView.el), e(t), fetchParams = {
          start: 0,
          rows: 12
        }, this.options.similarProducts) {
        {
          var a = this.options.similarProducts;
          i.find(".nestedProducts")
        }
        app.similarToProducts.hits = a.hits, app.similarToProducts.reset(Wantering.Module.SimilarProducts.prototype.parse(a), {
          type: "productDetail"
        })
      } else {
        var r = this;
        app.similarToProducts.fetch({
          data: fetchParams,
          success: function(e, t) {
            app.similarToProducts.hits = t.hits, screenSize.isMobile || "overList" !== r.options.type || Wantering.trigger("message:show", {
              title: "Shortcut:&nbsp; &#8592; Prev | Next &#8594;",
              message: "Use the right and left arrow keys to flip through items quickly.",
              type: "tip",
              tipID: "tipArrowKeys",
              timeout: !1
            })
          }
        })
      } else $(t).prepend(app.similarToProductsView.el), e(t)
  },
  events: function() {
    var e = {};
    return e["click .wantAction"] = "toggleWant", e["click .shareItemAction"] = "toggleShare", e["click .recommendAction"] = "toggleRecommend", e["click .gifButtonAction"] = "toggleGIF", e["click .closeAction"] = "toggleGIF", e["click .shareAction"] = "share", e["click .thumbnailAction"] = "rotateGalleryImg", e["click .buyButton"] = "buyClick", e["click .buyLink"] = "buyClick", e["click .coupon"] = "couponClick", e["contextmenu .buyButton"] = "buyClick", e.click = "closeDetailOverlay", Modernizr.touch || (e["mouseover .productDetailWrap"] = "preloadImgs", e["mouseover .mainImgWrap"] = "preloadFBFriends"), e
  },
  preloadImgs: function() {
    var e = this.model.attributes.images;
    $(this.el).find(".mainImgWrap").append(this.renderLargeImages(e)), $(this.el).undelegate(".productDetailWrap", "mouseover")
  },
  preloadFBFriends: function() {
    Wantering.Authentication.OK && ("undefined" == typeof app.fbFriends || null === app.fbFriends) && (app.fbFriends = new Wantering.Sharing.FBFriends([]), app.fbFriends.getFBFriends()), $(this.el).undelegate(".mainImgWrap", "mouseover")
  },
  rotateGalleryImg: function(e) {
    var t = $(e.target),
      n = $(this.el).find("#primaryTemplateImg"),
      i = $(this.el).find(".thumbnailItem");
    return i.removeClass("selected"), t.parent().addClass("selected"), n.prop("src", t.data("lrg-image")), Wantering.Tracker.Event("Rotate Carousel", "Product Detail", 0), !1
  },
  closeDetailOverlay: function(e) {
    $("#productDetail").hasClass("viewProductLanding") || "productDetail" == $(e.target).attr("id") && (Wantering.Actions.Back(), e.stopPropagation())
  },
  buyClick: function(e) {
    if (Wantering.Authentication.OK && app.user.get("isShopper")) app.checkoutView && app.checkoutView.options.short_key == this.model.get("short_key") ? app.checkoutView.showOrRenderEl() : app.checkoutView = new Wantering.Module.CheckoutView(this.model, {
      short_key: this.model.get("short_key"),
      location: "ProductDetail"
    }), this.trackEvt(e, "Buy");
    else {
      var t = $("#extensionIsInstalled").length,
        n = "fromBootstrap" == this.options.type && !app.user.attributes.isAuthenticated,
        i = Wantering.Actions.CheckTipComplete("popChromeExtension");
      if (window.chrome && 0 == t && i && !n) return Wantering.trigger("popup:open", {
        type: "ChromeExtension",
        trackRetention: !0
      }), !1;
      if (this.model.product_wanted || "undefined" != typeof this.model.sale_price || (Wantering.Authentication.OK ? Wantering.Actions.CheckTipComplete("popHeartItGoesOnSale") && !this.model.attributes.product_wanted && Wantering.trigger("popup:open", {
          type: "HeartItGoesOnSale",
          openLocation: "ProductDetail"
        }) : Wantering.trigger("popup:open", {
          type: "notLoggedIn"
        })), this.trackEvt(e, "Buy"), screenSize.isSmartPhone) return setTimeout(function() {
        document.location = $(e.target).prop("href")
      }, 200), !1
    }
  },
  couponClick: function(e) {
    this.trackEvt(e, "Coupon")
  },
  toggleWant: function(e) {
    e ? $(e.target) : $(this.el).find(".wantAction");
    if (Wantering.Authentication.OK) {
      var t;
      t = this.model.get("product_wanted") === !1 ? "want" : "unwant", Wantering.trigger("sets:want", {
        model: this.model,
        type: t
      })
    } else Wantering.trigger("popup:open", {
      type: "notLoggedIn"
    });
    return !1
  },
  toggleAction: function(e) {
    var t = $(e.target),
      n = $(e.target).parent(),
      i = n.parent();
    i.removeClass("shareOpen recommendOpen"), n.hasClass("selected") ? n.removeClass("selected") : (i.find(".selected").removeClass("selected"), n.addClass("selected"), $(document).one("click", function() {
      n.removeClass("selected"), i.removeClass("shareOpen recommendOpen")
    }), t.hasClass("shareItemAction") ? i.addClass("shareOpen") : t.hasClass("recommendAction") && (i.addClass("recommendOpen"), Wantering.Tracker.Event("Recommend Open", "Logged In", 0, this.model.attributes)))
  },
  toggleShare: function(e) {
    return this.toggleAction(e), !1
  },
  toggleRecommend: function(e) {
    if (Wantering.Authentication.OK)
      if (screenSize.isSmartPhone) Wantering.Sharing.RecommendItem(), Wantering.Tracker.Event("Recommend Open", "Mobile", 0, this.model.attributes);
      else {
        this.toggleAction(e);
        var t = $(e.target).parent(),
          n = t.find(".recommendWrap");
        app.recommendView = new Wantering.Module.RecommendView, this.childViews.push(app.recommendView), n.length < 1 && (t.append(app.recommendView.render().el), setTimeout(function() {
          t.find(".recommendField").focus()
        }, 10))
      } else Wantering.trigger("popup:open", {
      type: "notLoggedInOMG"
    }), Wantering.Tracker.Event("Recommend Open", "Logged Out", 0, this.model.attributes);
    return !1
  },
  checkGIF: function() {
    this.model.get("gif") && !this.model.get("gif").medium && $.ajax({
      type: "GET",
      url: "/api/product/ensure-gif/" + this.model.attributes.short_key + "/"
    })
  },
  toggleGIF: function() {
    function e(e, t) {
      e.removeClass("selected"), t.addClass("delay")
    }
    var t = $(this.el).find(".thumbnailWrap"),
      n = t.find(".gifActionItem"),
      i = t.find(".gifWrap");
    if (n.hasClass("selected")) e(n, i);
    else {
      var a = this.model.attributes.images,
        r = a.length;
      if (n.addClass("selected"), $(document).one("click", function() {
          e(n, i)
        }), r > 1 && i.length < 1) {
        var s = this.renderGifWrap(a);
        t.append(s);
        var o = this;
        setTimeout(function() {
          function e(e, t, n) {
            t += Templates.Share({
              type: "gif"
            }), e.find(".gifContainerWrap").html(t), e.addClass("hasGif"), screenSize.isSmartPhone || setTimeout(function() {
              e.find(".gifImage").prop("src", Wantering.Config.Urls.images + n.gif.medium.url)
            }, 300)
          }
          i = t.find(".gifWrap"), i.removeClass("delay"), setTimeout(function() {
            var t;
            o.model.attributes.gif.medium ? (t = Templates.ProductGifFullWrap({
              url: Wantering.Config.Urls.images + o.model.attributes.gif.small.url
            }), e(i, t, o.model.attributes)) : $.ajax({
              type: "GET",
              tryCount: 0,
              retryLimit: 10,
              url: "/api/product/get-gif/" + o.model.attributes.short_key + "/",
              success: function(n) {
                if ("undefined" != typeof n.medium) {
                  o.model.set("gif", n);
                  var a;
                  "undefined" != typeof n.medium && (a = n.medium.url), "undefined" != typeof n.small && (a = n.small.url), t = Templates.ProductGifFullWrap({
                    url: Wantering.Config.Urls.images + a
                  }), e(i, t, o.model.attributes)
                } else if (this.tryCount++, this.tryCount <= this.retryLimit) {
                  var r = this;
                  window.gifFetch = setTimeout(function() {
                    $.ajax(r)
                  }, 1e3 * r.tryCount)
                }
              },
              error: function() {
                return this.tryCount++, this.tryCount <= this.retryLimit ? ($.ajax(this), void 0) : void 0
              }
            })
          }, 3600)
        }, 100), Wantering.Tracker.Event("GIF", "Product Detail", 0, this.model.attributes)
      } else i.toggleClass("delay")
    }
    return !1
  },
  showCoupon: function() {
    if (this.model.attributes.coupon_expiry && Wantering.Actions.CheckTipComplete("coupon" + this.model.attributes.coupons[this.model.attributes.store_names[0]][0].id)) Wantering.trigger("message:show", {
      template: "MessageCoupon",
      type: "coupon",
      tipID: "coupon" + this.model.attributes.coupons[this.model.attributes.store_names[0]][0].id,
      content: {
        model: this.model.attributes
      },
      delay: 1e3,
      timeout: !1
    });
    else if ("fromBootstrap" == this.options.type && !app.user.attributes.isAuthenticated) {
      var e = (document.referrer, Formatters.GetURLParameter("utm_source"));
      Wantering.Actions.CheckTipComplete("popGifButton") && "tumblr" === e && Wantering.trigger("popup:open", {
        type: "GifButton",
        trackRetention: !0
      })
    }
  },
  showWhoHearted: function() {
    app.memberListView && app.memberListView.options.short_key == this.model.attributes.short_key || (app.memberListView && app.memberListView.options.short_key != this.model.attributes.short_key && app.memberListView.close(), app.memberListView = new Wantering.Module.MemberListView({
      short_key: this.model.attributes.short_key
    }), this.childViews.push(app.memberListView))
  },
  showTimeline: function() {
    var e = 25;
    Wantering.GetScreenSize.isMobile || ("fromBootstrap" === this.options.type && (e = 15), app.timelineView && app.timelineView.options.short_key == this.model.attributes.short_key || (app.timelineView && app.timelineView.options.short_key != this.model.attributes.short_key && app.timelineView.close(), app.timelineView = new Wantering.Module.TimelineView({
      short_key: this.model.attributes.short_key,
      rows: e
    }), this.childViews.push(app.timelineView)))
  },
  share: function(e) {
    return Wantering.Sharing.BasicShare($(e.target), this.model.attributes), !1
  },
  trackEvt: function(e, t) {
    Wantering.Tracker.Event(t, "Product Detail", 0, this.model.attributes)
  },
  trackView: function() {
    "fromBootstrap" != this.options.type && Wantering.Tracker.Event("Open Product", "List Product", 0, this.model.attributes), Wantering.Tracker.Event("View Product", "Product Detail", 1, this.model.attributes)
  },
  close: function() {
    Wantering.Utils.CloseViews(this)
  }
}), Wantering.Page.PreloadProductDetailImg = function(e) {
  var t = e.images[0].large.url;
  screenSize.isMobile && (t = e.images[0].medium.url);
  var n = Wantering.Config.Urls.images + t,
    i = new Image;
  i.src = n
}, Wantering.Page.NewProductDetail = function(e, t) {
  var n = app.user.get("provider");
  app.productDetail = new Wantering.Page.ProductDetail, app.productDetail.set(e), app.productDetailView = new Wantering.Page.ProductDetailView({
    model: app.productDetail,
    type: t,
    userProvider: n
  })
}, Wantering.Page.CleanProductDetail = function() {
  app.productDetail = null, app.productDetailView.remove(), app.productDetailView = app.productDetailView.close()
}, Wantering.Module.PreviewWantSets = Backbone.Collection.extend({
  model: Wantering.Module.WantSet,
  url: function() {
    var e = this.profile.get("uName");
    return "/api/member/" + e + "/loves/headers/"
  },
  parse: function(e) {
    var t;
    return e.sets && (t = e.sets.filter(function(e) {
      return e ? 1 !== e.id : void 0
    })), this.rootURL = Wantering.Config.Urls.images, e.setMeta && _.each(t, function(t) {
      var n = "s" + t.id,
        i = e.setMeta[n];
      i && (t.count = i.c, t.images = i.i.map(this.parseImages, this))
    }, this), t
  },
  parseImages: function(e) {
    return {
      key: e[0],
      url: this.rootURL + e[1],
      focus: e[2]
    }
  }
}), Wantering.Page.ProfileView = Backbone.View.extend({
  initialize: function(e) {
    this.options = e || {}, Wantering.off("sets:update"), Wantering.off("sets:add"), Wantering.off("profile:removeset"), this.model = e.model, this.header || (this.header = new Wantering.Module.MemberHeader({
      profile: this.model,
      type: "memberProfile",
      el: $(".listResultsHeaderWrapper")
    })), Wantering.on("sets:update", this.updateSet, this), Wantering.on("sets:add", this.addSet, this), Wantering.on("profile:removeset", this.removeSet, this), this.collection.on("sync", this.render, this)
  },
  template: Templates.MemberProfile,
  events: {
    "click [data-editset]": "editSet",
    "click [data-createset]": "createSet"
  },
  render: function() {
    var e, t = this.model.get("nameFirst"),
      n = this.model.get("nameLast"),
      i = this.model.get("uName"),
      a = i,
      r = this.model.get("uName"),
      s = this.model.get("uName") == app.user.get("uName"),
      o = !!(this.model.get("flags") & Wantering.Config.Const.USER_FLAG_PRIVATE_WANTS);
    return t && n && (a = t + " " + n), t && (r = t), e = _.sortBy(this.collection.toJSON(), function(e) {
      var t = e.userWant ? 1 : 0;
      return t + e.name.toLowerCase()
    }), this.$el.html(this.template({
      uName: this.model.get("uName"),
      profileImage: this.model.get("picture") || this.model.get("profileImage"),
      shareHTML: Templates.Share({
        type: "member"
      }),
      memberSets: e,
      isCurrentUser: s,
      currentUser: this.model.toJSON(),
      memberHeader: "",
      "private": !s && o,
      displayName: r,
      profileName: a
    })), this.header.profile = this.model, this.header.type = "memberProfile", this.header.pageTitle = r + "'s Sets", this.header.profileName = a, this.header.setElement($(".listResultsHeaderWrapper")), this.header.render(), this
  },
  createSet: function(e) {
    e.stopPropagation(), e.preventDefault(), Wantering.trigger("sets:create")
  },
  removeSet: function(e) {
    this.collection.remove(e.set), this.$("#set-" + e.set).addClass("hide")
  },
  updateSet: function(e) {
    e && e.set && this.$('[data-setid="' + e.set.id + '"]').text(e.set.name).attr("href", "/member/" + app.user.get("uName") + "/collections/" + e.set.link + "/")
  },
  addSet: function(e) {
    this.collection.add(e.set), this.render()
  },
  updateSets: function(e) {
    this.collection ? this.collection.reset(e, {
      parse: !0
    }) : this.collection = new Wantering.Module.PreviewWantSets(e, {
      parse: !0
    })
  },
  editSet: function(e) {
    e.stopPropagation(), e.preventDefault();
    var t = $(e.target).data("editset");
    Wantering.trigger("sets:edit", {
      wantSet: app.wantSets.get(t),
      type: "Listing"
    })
  },
  close: function() {
    Wantering.Utils.CloseViews(this)
  }
}), _.extend(Wantering.Page.ProfileView.prototype, Wantering.Mixin.Utils), Wantering.Module.SiteTimelineCollection = Backbone.Collection.extend({
  initialize: function(e, t) {
    var n = Wantering.Mixin.Timeline.terms;
    this.options = t || {}, this.newModelsLength = e && e.length || 0, this.options.event = n[this.options.event] || this.options.event, this.options.gender = n[this.options.gender] || this.options.gender
  },
  url: function() {
    var e, t, n = 60;
    switch (!0) {
      case !!this.options.brand:
        e = "brand/timeline/" + this.options.brand + "/";
        break;
      case !!this.options.event && !this.options.gender:
        e = "event/timeline/" + this.options.event + "/";
        break;
      case !!this.options.event && !!this.options.gender:
        e = "event/timeline/" + this.options.event + "/" + this.options.gender + "/";
        break;
      case !this.options.event && !!this.options.gender:
        e = "gender/timeline/" + this.options.gender + "/";
        break;
      case !!this.options.gender && !!this.options.tag:
        e = "gender/timeline/" + this.options.gender + "/" + this.options.tag + "/";
        break;
      default:
        e = "product/timeline/"
    }
    return t = "https://www.wantering.com/api/" + e + "?rows=" + n, this.options.start && (t += "&start=" + moment(this.options.start).format()), t
  },
  getNewModelsAsJSON: function() {
    return this.reduce(function(e, t) {
      return this.newIDs.indexOf(t.attributes._id) > -1 && e.push(t.toJSON()), e
    }, [], this)
  },
  resetNewModels: function() {
    this.newIDs = []
  },
  setStartToLastItem: function() {
    var e = this.last();
    e && (this.options.start = e.get("date"))
  },
  parse: function(e) {
    var t = [];
    return this.newIDs = [], this.options.hits = e.hits, this.models && this.models.length && (this.previousLength = this.models.length, t = this.toJSON()), e.data.forEach(function(e) {
      var n = _.any(t, function(t) {
        return t._id == e._id
      });
      n || (this.newModelsLength++, this.newIDs.push(e._id), t.push(e))
    }, this), t
  },
  comparator: function(e) {
    return -new Date(e.get("date"))
  }
}), Wantering.Page.SiteTimelineView = Backbone.View.extend({
  initialize: function(e) {
    this.options = e, this.collection || (this.collection = new Wantering.Module.SiteTimelineCollection), this.collection.length < 1 ? this.collection.fetch({
      context: this
    }).done(function() {
      this.render()
    }) : (this.setElement($("#siteTimeline")), this.getLatestEvents()), this.initializeScrollMonitor()
  },
  initializeScrollMonitor: function() {
    setTimeout(this.initScrollWatcher.bind(this), 500), this.scrollMonitor = setInterval(this.scrollWatcher.bind(this), 225)
  },
  template: Templates.SiteTimeline,
  events: {
    'click [data-timeline="button"]': "render"
  },
  render: function() {
    if (this.collection.length > 0) {
      var e = _.reduce(this.collection.toJSON(), this.parseTimelineEvent.bind(this), {});
      this.setElement(this.template({
        timelineData: e,
        Templates: Templates
      }))
    }
    return $("#main").html(this.el), this.getLatestEvents(), this
  },
  clearNewItemRefresh: function() {
    this.modelsSinceLastRender = [], this.refreshNewItems && clearInterval(this.refreshNewItems)
  },
  getLatestEvents: function() {
    this.refreshNewItems || (this.clearNewItemRefresh(), this.refreshNewItems = setInterval(this.renderLatestEvents.bind(this), 3e4))
  },
  renderLatestEvents: function() {
    this.isLoading || this.didScroll || (this.isLoading = !0, this.collection.options.start = void 0, this.collection.fetch({
      context: this
    }).done(function() {
      this.isLoading = !1
    }).done(this.showNewModels))
  },
  showNewModels: function() {
    if (this.collection.newIDs.length) {
      this.modelsSinceLastRender = this.modelsSinceLastRender.concat(this.collection.getNewModelsAsJSON());
      var e = _.reduce(this.modelsSinceLastRender, this.parseTimelineEvent.bind(this), {}),
        t = Object.keys(e).reduce(function(t, n) {
          return t = t.concat(e[n])
        }, []);
      this.$('[data-timeline="button"]').prop("disabled", !1), this.$('[data-timeline="label"]').removeClass("hidden"), this.$('[data-timeline="items"]').html(t.length)
    }
  },
  close: function() {
    this.clearNewItemRefresh(), this.destroyScrollMonitor(), app.siteTimelineView = void 0, Wantering.Utils.CloseViews(this)
  },
  scrollWatcher: _.throttle(function() {
    if (this.didScroll) {
      var e, t, n = $(".timelineContainer");
      if (e = this.$scrollMonitorTarget.scrollTop(), pageFold = e + $(window).height(), t = n.outerHeight() + n.position().top, this.didScroll = !1, position = screenSize.isMobile ? t : t - pageFold, position < this.scrollThreshold) {
        var i = this.collection.length < this.collection.options.hits;
        !this.isLoading && i && (this.isLoading = !0, this.collection.setStartToLastItem(), this.collection.fetch({
          context: this
        }).done(function() {
          var e = _.reduce(this.collection.getNewModelsAsJSON(), this.parseTimelineEvent.bind(this), {}),
            t = Templates.TimePeriod({
              timelineData: e
            });
          this.isLoading = !1, this.$('[data-timeline="products"]').append(t)
        }))
      }
    }
  }, 800)
}), _.extend(Wantering.Page.SiteTimelineView.prototype, Wantering.Mixin.Timeline), _.extend(Wantering.Page.SiteTimelineView.prototype, Wantering.Mixin.ScrollerUtils), Wantering.Module.TypedTagsCollection = Backbone.Collection.extend({
  initialize: function() {},
  url: function() {
    return "/api/tags/"
  },
  parse: function(e) {
    return Wantering.Mixin.Tags.filterTags(e.data)
  }
}), Wantering.Page.TagListView = Backbone.View.extend({
  initialize: function(e) {
    this.options = e, this.collection.length < 1 ? this.collection.fetch({
      context: this
    }).done(function() {
      this.render()
    }) : this.setElement($("#browseTags"))
  },
  template: Templates.BrowseTags,
  events: {
    "click .setItem": "updateSearch"
  },
  updateSearch: function() {
    Wantering.trigger("search:replace", {
      string: ""
    })
  },
  render: function() {
    var e = "mens" == searchFilters.gender ? "m" : "f";
    return this.collection.length > 0 && this.setElement(this.template({
      tags: this.parseTags(this.collection.toJSON(), this.options.tagType, e),
      tagType: this.options.tagType,
      isSmartPhone: screenSize.isSmartPhone
    })), $("#main").html(this.el), this
  },
  close: function() {
    Wantering.Utils.CloseViews(this)
  }
}), _.extend(Wantering.Page.TagListView.prototype, Wantering.Mixin.Tags), Wantering.Sharing.BasicShare = function(e, t) {
  var n, i, a;
  if (e.hasClass("facebookShareAction") || e.hasClass("facebookButton") ? n = "facebook" : e.hasClass("pinterestShareAction") || e.hasClass("pinterestButton") ? n = "pinterest" : e.hasClass("tumblrShareAction") || e.hasClass("tumblrButton") ? n = "tumblr" : e.hasClass("twitterShareAction") || e.hasClass("twitterButton") ? n = "twitter" : (e.hasClass("googleShareAction") || e.hasClass("googleButton")) && (n = "google"), a = Wantering.App.CurrentRoute, "product" == a && e.hasClass("gifShareAction") && (a = "productGIF"), i = Wantering.Sharing.Compose(n, a, t), "facebook" != n || "invite" != a || Modernizr.touch) {
    var r = "";
    screenSize.isSmartPhone || (r = "_tab"), window.open(i, r)
  }
  Wantering.Tracker.Event(a, n)
}, Wantering.Sharing.Compose = function(e, t, n, i) {
  var a, r, s, o, l, u, c, p, d, h, _, m, f, g, v, b = {};
  if (d = "", a = "https://www.wantering.com/", r = a + Backbone.history.fragment, n && (o = n.title), f = e, g = "wantering-" + t + "-share", "article" == t ? (o = n.data.title, s = n.meta.header.data.root + "m." + n.meta.header.data.ext, l = n.data.summary, u = o + " from Wantering.") : "product" == t || "productGIF" == t ? (v = n, s = Wantering.Config.Urls.images, s += "productGIF" == t || "tumblr" == e && n.gif.medium ? n.gif.medium.url : n.images[0].medium.url, n.brand_name && (c = n.brand_name, o.indexOf(c) < 0 && (o = c + " " + o), d += c.replace(/ /g, "").toLowerCase() + ", "), n.sale_price && (p = "sale", d += p + ", "), u = "Love the " + o + " on Wantering.", l = "Shop this and other items from " + c + " on Wantering.") : "invite" == t || "trending" == t ? (r = a + "?ref=" + app.user.get("userHash"), s = a + "static/css/assets/wantering-invite.png", u = "Come shop with me on Wantering - a better way to discover clothes you'll love.") : "contest" == t ? (s = n.mediaURL, u = n.shareMessage, o = u, l = n.shareSubTitle, r = r + "?ref=" + app.user.get("userHash")) : (s = n.mediaURL, u = n.shareMessage, o = u, l = n.shareSubTitle), r = encodeURIComponent(r + "?utm_source=" + f + "&utm_medium=" + g), m = r, s = encodeURIComponent(s), o = encodeURIComponent(o), l = encodeURIComponent(l), "facebook" == e) {
    h = "https://www.facebook.com/dialog/";
    var y = Wantering.fbID,
      w = "feed";
    "invite" != t || screenSize.isSmartPhone || (w = "send", b = {
      method: w,
      name: "Shop with me on Wantering",
      link: decodeURIComponent(r),
      description: u
    }), i && "number" == typeof i && (b.to = i), Modernizr.touch || "invite" != t ? (_ = h + w + "?app_id=" + y + "&link=" + r + "&picture=" + s + "&name=" + o + "&description=" + l + "&redirect_uri=" + m, Modernizr.touch && b.to && (_ += "&to=" + b.to)) : "undefined" != typeof FB && null !== FB && FB.ui(b, function(e) {
      e && $.ajax({
        type: "POST",
        data: $.param(e),
        url: "/api/invite/facebook/"
      })
    })
  } else "pinterest" == e ? (h = "http://www.pinterest.com/pin/create/button/", _ = h + "?url=" + r + "&media=" + s + "&description=" + encodeURIComponent(u)) : "tumblr" == e ? (h = "http://www.tumblr.com/share/photo", u = u.replace("Wantering", '<a href="' + decodeURIComponent(r) + '">Wantering</a>'), d += "fashion, wantering", _ = h + "?clickthru=" + r + "&source=" + s + "&tags=" + d + "&caption=" + encodeURIComponent(u)) : "twitter" == e ? (h = "https://twitter.com/intent/tweet", u = u.replace("Wantering", "@wantering"), u = u.replace("TheCorner.com", "@thecornerdotcom"), _ = h + "?url=" + r + "&text=" + encodeURIComponent(u) + "&hashtags=" + d) : "google" == e && (h = "https://plus.google.com/share", _ = h + "?url=" + r);
  return Wantering.Tracker.Event("Share Article", e, 0, v), _
}, Wantering.Sharing.FBFriend = Backbone.Model.extend({}), Wantering.Sharing.FBFriendView = Backbone.View.extend({
  tagName: "li",
  className: "ir friendAvatar",
  template: _.template('<a href="facebook/friend/" title="Invite {{name}} to Wantering" data-fbid="{{id}}" data-bypass class="thumbnail" style="background-image: url({{picture.data.url}});"></a>'),
  render: function() {
    this.model.get("id");
    return $(this.el).html(this.template(this.model.toJSON())), this
  }
}), Wantering.Sharing.FBFriends = Backbone.Collection.extend({
  model: Wantering.Sharing.FBFriend,
  url: function() {
    return "/api/user/friends/fb/"
  },
  getFBFriends: function() {
    var e = JSON.parse(Wantering.Utils.GetSessionStorageItem("fbFriends"));
    "undefined" != typeof e && null != e ? this.reset(e) : this.fetch({
      success: function() {
        Wantering.Utils.SetSessionStorageItem("fbFriends", JSON.stringify(app.fbFriends))
      }
    })
  },
  searchFBFriends: function(e, t) {
    var n = [];
    e = new RegExp("^" + $.trim(e), "gi"), this.each(function(t) {
      t.attributes.name && e.test(t.attributes.name) && n.push(t.attributes)
    }), n = _.sortBy(n, function(e) {
      return e.name
    }), t.call(this, n)
  }
}), Wantering.Sharing.FBFriendsView = Backbone.View.extend({
  tagName: "ul",
  className: "friendList clearFix",
  initialize: function() {
    this.collection.bind("add", function(e) {
      this.renderFriend(e)
    }, this), this.collection.bind("reset", this.render, this)
  },
  renderFriend: function(e) {
    var t = this.collection.type,
      n = new Wantering.Sharing.FBFriendView({
        model: e,
        collectionType: t
      });
    $(this.el).append(n.render().el)
  },
  render: function() {
    return this.collection.each(function(e, t) {
      return this.renderFriend(e), 47 != t
    }, this), this
  }
}), Wantering.Sharing.RecommendItem = function(e) {
  var t = {
    method: "send",
    link: "https://www.wantering.com/" + Backbone.history.fragment
  };
  if (("undefined" != typeof e || null != e) && (t.to = e), Modernizr.touch) {
    var n = "https://www.facebook.com/dialog/",
      i = "send",
      a = Wantering.fbID,
      r = encodeURIComponent(t.link);
    screenSize.isSmartPhone && (i = "feed");
    var s = n + i + "?app_id=" + a + "&link=" + r + "&redirect_uri=" + r;
    t.to && (s = s + "&to=" + t.to), window.open(s, "_blank")
  } else "undefined" != typeof FB && null != FB && FB.ui(t, function(e) {
    e && Wantering.Tracker.Event("Recommend Product", "facebook")
  });
  return !1
}, Wantering.Actions.SignUp = function(e) {
  Wantering.Tracker.Event("Sign Up", e), Wantering.trigger("popup:open", {
    type: "SignUp",
    trackRetention: !0
  })
}, Wantering.Actions.Back = function() {
  var e = Wantering.Utils.GetSessionStorageItem("backRoute");
  app.navigate("/" + e, {
    trigger: !0
  })
}, Wantering.Actions.Search = function(e, t, n) {
  var i, a, r, s, o, l, u;
  ("undefined" == typeof n || null == n) && (n = !1), a = $("#header").find(".searchField"), i = "index" === Wantering.App.CurrentRoute ? $("#siteIntro").find(".searchField") : a, ("undefined" == typeof e || null == e) && (e = i.val()), "index" === Wantering.App.CurrentRoute && a.val(e);
  var c = Formatters.TidySearchString(e);
  c.length > 0 && (searchFilters.color = "any", searchFilters.hex = "any", searchFilters.price = "any", searchFilters.sale = "any", searchFilters.newFilter = "any", searchFilters.filters = "", searchFilters.sortOrder = "default", i.val(c), r = Formatters.CheckForGenderInString(c), ("undefined" != typeof r || null != r) && (searchFilters.gender = r, c = Formatters.StripGenderFromString(c)), s = Formatters.CheckForSaleInString(c), s && (searchFilters.sale = "on sale", c = Formatters.StripSaleFromString(c)), o = Formatters.CheckForNewInString(c), l = Formatters.CheckNewInBlacklist(c), o && !l && (searchFilters.newFilter = "in the last week", c = Formatters.StripNewFromString(c)), searchFilters.keyword = c, setTimeout(function() {
    $("#header").find(".autoCompleteWrap").removeClass("selected"), i.blur(), Wantering.Tracker.Search("Search", t)
  }, 50), u = app.state.setRoute(), Wantering.Utils.TransitionView("/" + Backbone.history.fragment, u), app.navigate(u, {
    trigger: !0,
    replace: n
  }), $subNavItems = $("#mainNav").find(".subNavItem"), $subNavItems.removeClass("selected"), Wantering.Utils.ResetScroll(), setTimeout(function() {
    Wantering.App.CurrentRoute = "search"
  }, 100)), app.facetsView && app.facetsView.resetFacets(), c = null, r = null, s = null, u = null
}, Wantering.Actions.Want = function(e, t, n, i, a) {
  if (Wantering.Authentication.OK) {
    var r, s, o, l = "/api/product/",
      u = e.short_key,
      c = l + t + "/" + u + "/";
    a && (c += "?set=" + a), r = "unwant" == t ? "UnHeart" : "Heart", $.ajax({
      type: "POST",
      url: c,
      success: function() {
        a ? (s = app.wantSets.get(a), o = "want" == t ? " added to " : " removed from ", Wantering.trigger("message:show", {
          message: e.title + o + '<a href="/member/' + app.user.get("uName") + "/collections/" + s.get("link") + '/" class="button inlineButton transparentButton">' + s.get("name") + "</a>",
          timeout: 6e3
        })) : (Wantering.Tracker.Event(r, n, 0, e), "unwant" == t ? (app.wantShortKeys.remove({
          id: u
        }), ("undefined" != typeof app.memberLovesProducts || null != app.memberLovesProducts) && (app.memberLovesProducts.remove(e), app.memberLovesProducts.hits--)) : (app.wantShortKeys.add({
          id: u
        }), ("undefined" != typeof app.memberLovesProducts || null != app.memberLovesProducts) && (app.memberLovesProducts.add(e, {
          at: 0
        }), app.memberLovesProducts.hits++)))
      }
    }), Wantering.Utils.SetSessionStorageItem("hasHearted", !0)
  } else Wantering.trigger("popup:open", {
    type: "notLoggedIn"
  })
}, Wantering.Actions.SetFacebookPublishSetting = function(e) {
  $.ajax({
    type: "POST",
    url: "/api/user/details/set/",
    data: {
      publish_facebook: e
    },
    success: function() {
      Wantering.Tracker.Event("Publish Facebook " + e, "Tip"), app.user.set("fbPublishLikes", e), Wantering.trigger("message:show", {
        title: "Settings Updated",
        message: "Thanks for sharing your loves."
      })
    }
  })
}, Wantering.Actions.TipComplete = function(e) {
  var t = Wantering.Utils.GetLocalStorageItem("tipsComplete");
  t = "undefined" == typeof t || null == t ? [] : JSON.parse(t), t.indexOf(e) < 0 && (t.push(e), Wantering.Utils.SetLocalStorageItem("tipsComplete", JSON.stringify(t)))
}, Wantering.Actions.CheckTipComplete = function(e) {
  var t = !1,
    n = JSON.parse(Wantering.Utils.GetLocalStorageItem("tipsComplete"));
  return (null == n || n.indexOf(e) < 0) && (t = !0), t
}, Wantering.Actions.KeyMonitor = function() {
  $(window).bind("keyup.keyMonitor", _.debounce(function(e) {
    function t(e) {
      var t = i.eq(e),
        a = t.find(".productLink");
      n.removeClass("selected"), a.trigger("click"), Wantering.Utils.ScrollToSelected(t)
    }
    var n, i, a, r, s, o;
    o = e.keyCode, (37 == o || 39 == o) && (i = $(".resultsWrap .listProduct"), n = $(".resultsWrap .selected"), r = i.index(n), a = i.length, 37 == o ? (s = r - 1, s >= 0 && t(s)) : 39 == o && (s = r + 1, a > s ? t(s) : Wantering.Actions.Back()), Wantering.Actions.TipComplete("tipArrowKeys"), Wantering.trigger("message:hide"))
  }, 200))
}, Wantering.Actions.DestroyKeyMonitor = function() {
  screenSize.isMobile || $(window).unbind("keyup.keyMonitor")
}, Wantering.Actions.NavHelpers = Backbone.Model.extend({}), Wantering.Actions.NavHelpersView = Backbone.View.extend({
  events: {
    "click #backToPage": "backToPage",
    "click #backToTop": "backtoTop"
  },
  backToPage: function() {
    return Wantering.Actions.Back(), !1
  },
  backtoTop: function() {
    var e = $("#bodyWrap");
    return screenSize.isBigScreen && (e = $("html, body")), $("html").hasClass("viewProductDetail") && (e = $("#productDetail")), Wantering.Utils.ResetScroll(), !1
  }
});
