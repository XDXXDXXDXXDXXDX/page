/*!
 * hash-wasm (https://www.npmjs.com/package/hash-wasm)
 * (c) Dani Biro
 * @license MIT
 */

!(function (A, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((A =
          "undefined" != typeof globalThis ? globalThis : A || self).hashwasm =
          A.hashwasm || {})
      );
})(this, function (A) {
  "use strict";
  function e(A, e, t, i) {
    return new (t || (t = Promise))(function (n, o) {
      function B(A) {
        try {
          I(i.next(A));
        } catch (A) {
          o(A);
        }
      }
      function a(A) {
        try {
          I(i.throw(A));
        } catch (A) {
          o(A);
        }
      }
      function I(A) {
        var e;
        A.done
          ? n(A.value)
          : ((e = A.value),
            e instanceof t
              ? e
              : new t(function (A) {
                  A(e);
                })).then(B, a);
      }
      I((i = i.apply(A, e || [])).next());
    });
  }
  class t {
    constructor() {
      this.mutex = Promise.resolve();
    }
    lock() {
      let A = () => {};
      return (
        (this.mutex = this.mutex.then(() => new Promise(A))),
        new Promise((e) => {
          A = e;
        })
      );
    }
    dispatch(A) {
      return e(this, void 0, void 0, function* () {
        const e = yield this.lock();
        try {
          return yield Promise.resolve(A());
        } finally {
          e();
        }
      });
    }
  }
  var i;
  const n =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : global,
    o = null !== (i = n.Buffer) && void 0 !== i ? i : null,
    B = n.TextEncoder ? new n.TextEncoder() : null;
  function a(A, e) {
    return (
      (((15 & A) + ((A >> 6) | ((A >> 3) & 8))) << 4) |
      ((15 & e) + ((e >> 6) | ((e >> 3) & 8)))
    );
  }
  const I = "a".charCodeAt(0) - 10,
    r = "0".charCodeAt(0);
  function E(A, e, t) {
    let i = 0;
    for (let n = 0; n < t; n++) {
      let t = e[n] >>> 4;
      (A[i++] = t > 9 ? t + I : t + r),
        (t = 15 & e[n]),
        (A[i++] = t > 9 ? t + I : t + r);
    }
    return String.fromCharCode.apply(null, A);
  }
  const g =
      null !== o
        ? (A) => {
            if ("string" == typeof A) {
              const e = o.from(A, "utf8");
              return new Uint8Array(e.buffer, e.byteOffset, e.length);
            }
            if (o.isBuffer(A))
              return new Uint8Array(A.buffer, A.byteOffset, A.length);
            if (ArrayBuffer.isView(A))
              return new Uint8Array(A.buffer, A.byteOffset, A.byteLength);
            throw new Error("Invalid data type!");
          }
        : (A) => {
            if ("string" == typeof A) return B.encode(A);
            if (ArrayBuffer.isView(A))
              return new Uint8Array(A.buffer, A.byteOffset, A.byteLength);
            throw new Error("Invalid data type!");
          },
    Q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    c = new Uint8Array(256);
  for (let A = 0; A < Q.length; A++) c[Q.charCodeAt(A)] = A;
  function s(A) {
    const e = (function (A) {
        let e = Math.floor(0.75 * A.length);
        const t = A.length;
        return "=" === A[t - 1] && ((e -= 1), "=" === A[t - 2] && (e -= 1)), e;
      })(A),
      t = A.length,
      i = new Uint8Array(e);
    let n = 0;
    for (let e = 0; e < t; e += 4) {
      const t = c[A.charCodeAt(e)],
        o = c[A.charCodeAt(e + 1)],
        B = c[A.charCodeAt(e + 2)],
        a = c[A.charCodeAt(e + 3)];
      (i[n] = (t << 2) | (o >> 4)),
        (n += 1),
        (i[n] = ((15 & o) << 4) | (B >> 2)),
        (n += 1),
        (i[n] = ((3 & B) << 6) | (63 & a)),
        (n += 1);
    }
    return i;
  }
  const h = 16384,
    f = new t(),
    l = new Map();
  function d(A, t) {
    return e(this, void 0, void 0, function* () {
      let i = null,
        n = null,
        o = !1;
      if ("undefined" == typeof WebAssembly)
        throw new Error("WebAssembly is not supported in this environment!");
      const B = () =>
          new DataView(i.exports.memory.buffer).getUint32(
            i.exports.STATE_SIZE,
            !0
          ),
        I = f.dispatch(() =>
          e(this, void 0, void 0, function* () {
            if (!l.has(A.name)) {
              const e = s(A.data),
                t = WebAssembly.compile(e);
              l.set(A.name, t);
            }
            const e = yield l.get(A.name);
            i = yield WebAssembly.instantiate(e, {});
          })
        ),
        r = (A = null) => {
          (o = !0), i.exports.Hash_Init(A);
        },
        Q = (A) => {
          if (!o) throw new Error("update() called before init()");
          ((A) => {
            let e = 0;
            for (; e < A.length; ) {
              const t = A.subarray(e, e + h);
              (e += t.length), n.set(t), i.exports.Hash_Update(t.length);
            }
          })(g(A));
        },
        c = new Uint8Array(2 * t),
        d = (A, e = null) => {
          if (!o) throw new Error("digest() called before init()");
          return (
            (o = !1),
            i.exports.Hash_Final(e),
            "binary" === A ? n.slice(0, t) : E(c, n, t)
          );
        },
        C = (A) => ("string" == typeof A ? A.length < 4096 : A.byteLength < h);
      let u = C;
      switch (A.name) {
        case "argon2":
        case "scrypt":
          u = () => !0;
          break;
        case "blake2b":
        case "blake2s":
          u = (A, e) => e <= 512 && C(A);
          break;
        case "blake3":
          u = (A, e) => 0 === e && C(A);
          break;
        case "xxhash64":
        case "xxhash3":
        case "xxhash128":
          u = () => !1;
      }
      return (
        yield (() =>
          e(this, void 0, void 0, function* () {
            i || (yield I);
            const A = i.exports.Hash_GetBuffer(),
              e = i.exports.memory.buffer;
            n = new Uint8Array(e, A, h);
          }))(),
        {
          getMemory: () => n,
          writeMemory: (A, e = 0) => {
            n.set(A, e);
          },
          getExports: () => i.exports,
          setMemorySize: (A) => {
            i.exports.Hash_SetMemorySize(A);
            const e = i.exports.Hash_GetBuffer(),
              t = i.exports.memory.buffer;
            n = new Uint8Array(t, e, A);
          },
          init: r,
          update: Q,
          digest: d,
          save: () => {
            if (!o)
              throw new Error(
                "save() can only be called after init() and before digest()"
              );
            const e = i.exports.Hash_GetState(),
              t = B(),
              n = i.exports.memory.buffer,
              I = new Uint8Array(n, e, t),
              r = new Uint8Array(4 + t);
            return (
              (function (A, e) {
                const t = e.length >> 1;
                for (let i = 0; i < t; i++) {
                  const t = i << 1;
                  A[i] = a(e.charCodeAt(t), e.charCodeAt(t + 1));
                }
              })(r, A.hash),
              r.set(I, 4),
              r
            );
          },
          load: (e) => {
            if (!(e instanceof Uint8Array))
              throw new Error(
                "load() expects an Uint8Array generated by save()"
              );
            const t = i.exports.Hash_GetState(),
              n = B(),
              I = 4 + n,
              r = i.exports.memory.buffer;
            if (e.length !== I)
              throw new Error(
                `Bad state length (expected ${I} bytes, got ${e.length})`
              );
            if (
              !(function (A, e) {
                if (A.length !== 2 * e.length) return !1;
                for (let t = 0; t < e.length; t++) {
                  const i = t << 1;
                  if (e[t] !== a(A.charCodeAt(i), A.charCodeAt(i + 1)))
                    return !1;
                }
                return !0;
              })(A.hash, e.subarray(0, 4))
            )
              throw new Error(
                "This state was written by an incompatible hash implementation"
              );
            const E = e.subarray(4);
            new Uint8Array(r, t, n).set(E), (o = !0);
          },
          calculate: (A, e = null, o = null) => {
            if (!u(A, e)) return r(e), Q(A), d("hex", o);
            const B = g(A);
            return (
              n.set(B), i.exports.Hash_Calculate(B.length, e, o), E(c, n, t)
            );
          },
          hashLength: t,
        }
      );
    });
  }
  var C = {
    name: "md5",
    data: "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",
    hash: "9b0fac7d",
  };
  const u = new t();
  let q = null;
  (A.createMD5 = function () {
    return d(C, 16).then((A) => {
      A.init();
      const e = {
        init: () => (A.init(), e),
        update: (t) => (A.update(t), e),
        digest: (e) => A.digest(e),
        save: () => A.save(),
        load: (t) => (A.load(t), e),
        blockSize: 64,
        digestSize: 16,
      };
      return e;
    });
  }),
    (A.md5 = function (A) {
      if (null === q)
        return (function (A, t, i) {
          return e(this, void 0, void 0, function* () {
            const e = yield A.lock(),
              n = yield d(t, i);
            return e(), n;
          });
        })(u, C, 16).then((e) => ((q = e), q.calculate(A)));
      try {
        const e = q.calculate(A);
        return Promise.resolve(e);
      } catch (A) {
        return Promise.reject(A);
      }
    }),
    Object.defineProperty(A, "__esModule", { value: !0 });
});
