parcelRequire = (function (e, r, t, n) {
	var i,
		o = 'function' == typeof parcelRequire && parcelRequire,
		u = 'function' == typeof require && require;
	function f(t, n) {
		if (!r[t]) {
			if (!e[t]) {
				var i = 'function' == typeof parcelRequire && parcelRequire;
				if (!n && i) return i(t, !0);
				if (o) return o(t, !0);
				if (u && 'string' == typeof t) return u(t);
				var c = new Error("Cannot find module '" + t + "'");
				throw ((c.code = 'MODULE_NOT_FOUND'), c);
			}
			(p.resolve = function (r) {
				return e[t][1][r] || r;
			}),
				(p.cache = {});
			var l = (r[t] = new f.Module(t));
			e[t][0].call(l.exports, p, l, l.exports, this);
		}
		return r[t].exports;
		function p(e) {
			return f(p.resolve(e));
		}
	}
	(f.isParcelRequire = !0),
		(f.Module = function (e) {
			(this.id = e), (this.bundle = f), (this.exports = {});
		}),
		(f.modules = e),
		(f.cache = r),
		(f.parent = o),
		(f.register = function (r, t) {
			e[r] = [
				function (e, r) {
					r.exports = t;
				},
				{},
			];
		});
	for (var c = 0; c < t.length; c++)
		try {
			f(t[c]);
		} catch (e) {
			i || (i = e);
		}
	if (t.length) {
		var l = f(t[t.length - 1]);
		'object' == typeof exports && 'undefined' != typeof module
			? (module.exports = l)
			: 'function' == typeof define && define.amd
			? define(function () {
					return l;
			  })
			: n && (this[n] = l);
	}
	if (((parcelRequire = f), i)) throw i;
	return f;
})(
	{
		bQl6: [
			function (require, module, exports) {
				'use strict';
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.fetchDeleteCharacter = void 0);
				const e = 'https://character-database.becode.xyz/characters/',
					t = async (t) => {
						try {
							await fetch(`${e}${t}`, { method: 'DELETE' }),
								Swal.fire(
									'Deleted',
									'The character was deleted',
									'success'
								);
						} catch (r) {
							console.log(r),
								Swal.fire(
									'Oh no!',
									'there was an error, please try later',
									'error'
								);
						}
					};
				exports.fetchDeleteCharacter = t;
			},
			{},
		],
		sMzJ: [
			function (require, module, exports) {
				'use strict';
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.fetchGetCharacters = void 0);
				const e = 'https://character-database.becode.xyz/characters',
					t = async () => {
						try {
							const c = await fetch(e),
								a = await c.json(),
								s = a.slice(0, 4);
							return console.log(s), a;
						} catch (t) {
							console.log(t);
						}
					};
				exports.fetchGetCharacters = t;
			},
			{},
		],
		WQpZ: [
			function (require, module, exports) {
				'use strict';
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.fetchUpdateCharacter = void 0);
				const e = 'https://character-database.becode.xyz/characters/',
					t = async (t, a) => {
						try {
							await fetch(`${e}${a}`, {
								method: 'PUT',
								headers: { 'Content-Type': 'application/json' },
								body: JSON.stringify(t),
							}),
								Swal.fire('Nice!', 'Character updated', 'success');
						} catch (r) {
							Swal.fire(
								'Oh no!!',
								'Something went wrong, please try again later',
								'error'
							),
								console.log(r);
						}
					};
				exports.fetchUpdateCharacter = t;
			},
			{},
		],
		Gm3G: [
			function (require, module, exports) {
				'use strict';
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.setUpdatedCharacter = void 0);
				const e = (
					e,
					{
						inputNameModal: t,
						inputShortDescriptionModal: r,
						inputLongDescriptionModal: o,
					}
				) => {
					return {
						...e,
						name: t.value,
						shortDescription: r.value,
						description: o.value,
					};
				};
				exports.setUpdatedCharacter = e;
			},
			{},
		],
		'/ocx': [
			function (require, module, exports) {
				'use strict';
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.cloneGenerator = void 0);
				const e = (
					e,
					{ image: t, name: r, shortDescription: o, description: n },
					c
				) => {
					const i = e.cloneNode(!0).content;
					(i.querySelector('img').src = `data:image/*;base64,${t}`),
						(i.querySelector('h4').innerHTML = r),
						(i.querySelector('h5').innerHTML = o),
						(i.querySelector('p').innerHTML = n);
					const s = i.querySelector('button');
					return (
						s.setAttribute('id', `button-${c}`), { clone: i, button: s }
					);
				};
				exports.cloneGenerator = e;
			},
			{},
		],
		'2LM2': [
			function (require, module, exports) {
				'use strict';
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.setModalValues = void 0);
				const e = (e, t, o) => {
					let l = document.getElementById('name-modal');
					l.value = e;
					let d = document.getElementById('short-description-modal');
					d.value = t;
					let n = document.getElementById('long-description-modal');
					return (
						(n.value = o),
						{
							inputNameModal: l,
							inputShortDescriptionModal: d,
							inputLongDescriptionModal: n,
						}
					);
				};
				exports.setModalValues = e;
			},
			{},
		],
		siVJ: [
			function (require, module, exports) {
				'use strict';
				var e = require('../helpers/fetchDeleteCharacter.js'),
					t = require('../helpers/fetchGetCharacters.js'),
					r = require('../helpers/fetchUpdateCharacter.js'),
					a = require('../helpers/setUpdatedCharacter.js'),
					c = require('./cloneGenerator.js.js'),
					s = require('./setModalValues.js.js');
				const n = document.getElementById('target'),
					d = document.querySelector('template'),
					o = async () => {
						try {
							(await (0, t.fetchGetCharacters)()).forEach((t, o) => {
								const { clone: l, button: h } = (0, c.cloneGenerator)(
										d,
										t,
										o
									),
									i = t.id;
								h.addEventListener('click', () => {
									const {
											name: c,
											shortDescription: n,
											description: d,
										} = t,
										o = document.getElementById('delete-button'),
										l = document.getElementById('button-modal'),
										h = (0, s.setModalValues)(c, n, d);
									l.addEventListener('click', () => {
										const e = (0, a.setUpdatedCharacter)(t, h);
										(0, r.fetchUpdateCharacter)(e, i);
									}),
										o.addEventListener('click', () => {
											(0, e.fetchDeleteCharacter)(i);
										});
								}),
									n.appendChild(l);
							});
						} catch (o) {
							console.log(o);
						}
					};
				o();
			},
			{
				'../helpers/fetchDeleteCharacter.js': 'bQl6',
				'../helpers/fetchGetCharacters.js': 'sMzJ',
				'../helpers/fetchUpdateCharacter.js': 'WQpZ',
				'../helpers/setUpdatedCharacter.js': 'Gm3G',
				'./cloneGenerator.js': '/ocx',
				'./setModalValues.js': '2LM2',
			},
		],
	},
	{},
	['siVJ'],
	null
);
//# sourceMappingURL=script.js.80f054b1.js.map
