(window.webpackJsonp = window.webpackJsonp || []).push([
	[14], {
		117: function (e, t, n) {
			"use strict";
			var r = n(1),
				a = n(1169),
				o = n(154),
				i = n(196),
				s = n(480),
				l = o.a.createInstance();
			l.use(s.e).use(i.a).init({
				debug: !1,
				defaultNS: "locales",
				detection: {
					excludeCacheFor: ["cimode"],
					lookupFromPathIndex: 0,
					lookupQuerystring: "lng",
					order: ["path", "navigator"]
				},
				fallbackLng: "en",
				interpolation: {
					escapeValue: !1
				},
				load: "languageOnly",
				react: {
					bindI18n: "languageChanged loaded",
					bindI18nStore: "added removed",
					nsMode: "default",
					useSuspense: !1,
					wait: !1
				}
			});
			var c = l;

			function u(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function d(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? u(Object(n), !0).forEach((function (t) {
						p(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function p(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			t.a = function (e, t) {
				return Object(r.each)(t, (function (t, n) {
						c.addResourceBundle(n, e, t[e], !0, !0)
					})),
					function (t) {
						return Object(a.a)(e, d(d({}, t), {}, {
							i18n: c
						}))
					}
			}
		},
		141: function (e, t, n) {
			"use strict";
			n.d(t, "a", (function () {
				return l
			}));
			var r = n(0),
				a = n.n(r),
				o = n(140);

			function i(e) {
				return function (e) {
					if (Array.isArray(e)) return s(e)
				}(e) || function (e) {
					if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || function (e, t) {
					if (!e) return;
					if ("string" === typeof e) return s(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
				}(e) || function () {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function s(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function l(e, t) {
				var n = o.a.apply(void 0, i(e));
				return function (e) {
					return a.a.createElement(n, null, a.a.createElement(t, e))
				}
			}
		},
		1643: function (e, t, n) {
			"use strict";
			n.r(t);
			n(330), n(437);
			const r = n(1644);
			n(320).useContext(r)
		},
		1644: function (e, t, n) {
			var r = {
				"./activation": 525,
				"./activation/": 525,
				"./activation/index": 525,
				"./activation/index.ts": 525,
				"./activation/pages/ActivationPage": 526,
				"./activation/pages/ActivationPage.tsx": 526,
				"./app/components/Layout": 74,
				"./app/components/Layout/": 74,
				"./app/components/Layout/Content": 554,
				"./app/components/Layout/Content.tsx": 554,
				"./app/components/Layout/Layout": 372,
				"./app/components/Layout/Layout.tsx": 372,
				"./app/components/Layout/Subtitle": 555,
				"./app/components/Layout/Subtitle.tsx": 555,
				"./app/components/Layout/Title": 556,
				"./app/components/Layout/Title.tsx": 556,
				"./app/components/Layout/index": 74,
				"./app/components/Layout/index.ts": 74,
				"./change-password": 527,
				"./change-password/": 527,
				"./change-password/index": 527,
				"./change-password/index.ts": 527,
				"./change-password/pages/ChangePasswordPage": 528,
				"./change-password/pages/ChangePasswordPage.tsx": 528,
				"./demo": 529,
				"./demo/": 529,
				"./demo/index": 529,
				"./demo/index.ts": 529,
				"./demo/pages/DemoShowPage": 530,
				"./demo/pages/DemoShowPage.tsx": 530,
				"./invalid-reset-password": 531,
				"./invalid-reset-password/": 531,
				"./invalid-reset-password/index": 531,
				"./invalid-reset-password/index.ts": 531,
				"./invalid-reset-password/pages/InvalidResetPasswordPage": 532,
				"./invalid-reset-password/pages/InvalidResetPasswordPage.tsx": 532,
				"./reset-password": 533,
				"./reset-password-confirmation": 535,
				"./reset-password-confirmation/": 535,
				"./reset-password-confirmation/index": 535,
				"./reset-password-confirmation/index.ts": 535,
				"./reset-password-confirmation/pages/ResetPasswordConfirmationPage": 536,
				"./reset-password-confirmation/pages/ResetPasswordConfirmationPage.tsx": 536,
				"./reset-password/": 533,
				"./reset-password/index": 533,
				"./reset-password/index.ts": 533,
				"./reset-password/pages/ResetPasswordPage": 534,
				"./reset-password/pages/ResetPasswordPage.tsx": 534,
				"./sign-in": 537,
				"./sign-in/": 537,
				"./sign-in/index": 537,
				"./sign-in/index.ts": 537,
				"./home": 538,
				"./home.tsx": 538,
				"./stylesheets": 437,
				"./stylesheets/": 437,
				"./stylesheets/index": 437,
				"./stylesheets/index.scss": 437
			};

			function a(e) {
				var t = o(e);
				return n(t)
			}

			function o(e) {
				if (!n.o(r, e)) {
					var t = new Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				return r[e]
			}
			a.keys = function () {
				return Object.keys(r)
			}, a.resolve = o, e.exports = a, a.id = 1644
		},
		236: function (module, exports) {
			var topLevel = "undefined" === typeof window ? this : window;
			module.exports = function (className) {
				var constructor;
				return constructor = topLevel[className], constructor || (constructor = eval(className)), constructor && constructor.default && (constructor = constructor.default), constructor
			}
		},
		250: function (e, t, n) {
			"use strict";
			var r = n(0),
				a = n(98);
			t.a = Object(a.a)(r.createElement("path", {
				d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
			}), "Close")
		},
		313: function (e, t, n) {
			"use strict";
			var r = n(1),
				a = n(883),
				o = n(11),
				i = n.n(o),
				s = n(0),
				l = n.n(s),
				c = n(231),
				u = function (e) {
					return l.a.createElement(c.a, e, l.a.createElement("g", {
						stroke: "none",
						strokeWidth: "1",
						fill: "currentColor",
						fillRule: "evenodd"
					}, l.a.createElement("g", {
						transform: "translate(9.000000, 5.000000)",
						fillRule: "nonzero"
					}, l.a.createElement("path", {
						d: "M4,6 C4,5.4 3.6,5 3,5 L0,5 L0,7 L2,7 L2,13 L0,13 L0,15 L6,15 L6,13 L4,13 L4,6 Z"
					}), l.a.createElement("circle", {
						cx: "2.5",
						cy: "1.5",
						r: "1.5"
					}))))
				},
				d = n(78),
				p = n(13);

			function m() {
				return (m = Object.assign || function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function f(e, t) {
				if (null == e) return {};
				var n, r, a = function (e, t) {
					if (null == e) return {};
					var n, r, a = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
				}
				return a
			}
			var b = Object(p.a)((function () {
					return Object(d.a)({
						root: {
							display: "flex",
							"& a": {
								"&:hover": {
									textDecoration: "none"
								},
								cursor: "pointer",
								textDecoration: "underline"
							}
						},
						fullWidth: {
							width: "100%"
						}
					})
				})),
				g = function (e) {
					var t, n, r, o = e.className,
						s = e.message,
						c = e.icon,
						d = e.withIcon,
						p = f(e, ["className", "message", "icon", "withIcon"]),
						g = b(e),
						h = g.root,
						v = g.fullWidth,
						y = i()(o, h, (t = {}, n = v, r = e.fullWidth, n in t ? Object.defineProperty(t, n, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[n] = r, t));
					return l.a.createElement(a.a, m({
						className: y,
						icon: !!d && c,
						iconMapping: {
							info: l.a.createElement(u, null)
						}
					}, p), s ? l.a.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: s
						}
					}) : e.children)
				};
			g.defaultProps = {
				fullWidth: !1,
				withIcon: !1
			};
			var h = g,
				v = n(49);

			function y() {
				return (y = Object.assign || function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var w = Object(p.a)((function (e) {
					return {
						alert: {
							"& + $alert": {
								marginTop: e.spacing(2)
							}
						}
					}
				})),
				E = function (e) {
					var t = e.alerts,
						n = w(e);
					return l.a.createElement(v.a, {
						display: "flex",
						flexDirection: "column"
					}, t.map((function (e, t) {
						return l.a.createElement(h, y({
							className: n.alert,
							key: t
						}, e))
					})))
				};
			t.a = Object(r.assign)(h, {
				Stacked: E
			})
		},
		320: function (e, t, n) {
			function r(e) {
				return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
					return typeof e
				} : function (e) {
					return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}
			var a = n(0),
				o = n(41),
				i = n(363),
				s = n(321),
				l = n(236),
				c = n(327),
				u = {
					CLASS_NAME_ATTR: "data-react-class",
					PROPS_ATTR: "data-react-props",
					RENDER_ATTR: "data-hydrate",
					CACHE_ID_ATTR: "data-react-cache-id",
					TURBOLINKS_PERMANENT_ATTR: "data-turbolinks-permanent",
					jQuery: "undefined" !== typeof window && "undefined" !== typeof window.jQuery && window.jQuery,
					components: {},
					findDOMNodes: function (e) {
						var t, n, a = u.CLASS_NAME_ATTR;
						switch (r(e)) {
						case "undefined":
							t = "[" + a + "]", n = document;
							break;
						case "object":
							t = "[" + a + "]", n = e;
							break;
						case "string":
							t = e + "[" + a + "], " + e + " [" + a + "]", n = document
						}
						return u.jQuery ? u.jQuery(t, n) : n.querySelectorAll(t)
					},
					getConstructor: l,
					useContext: function (e) {
						this.getConstructor = c(e)
					},
					serverRender: function (e, t, n) {
						var r = this.getConstructor(t),
							o = a.createElement(r, n);
						return i[e](o)
					},
					mountComponents: function (e) {
						for (var t = u, n = t.findDOMNodes(e), r = 0; r < n.length; ++r) {
							var i = n[r],
								s = i.getAttribute(t.CLASS_NAME_ATTR),
								l = t.getConstructor(s),
								c = i.getAttribute(t.PROPS_ATTR),
								d = c && JSON.parse(c),
								p = i.getAttribute(t.RENDER_ATTR),
								m = i.getAttribute(t.CACHE_ID_ATTR),
								f = i.hasAttribute(t.TURBOLINKS_PERMANENT_ATTR);
							if (!l) {
								var b = "Cannot find component: '" + s + "'";
								throw console && console.log && console.log("%c[react-rails] %c" + b + " for element", "font-weight: bold", "", i), new Error(b + ". Make sure your component is available to render.")
							}
							var g = this.components[m];
							void 0 === g && (g = a.createElement(l, d), f && (this.components[m] = g)), g = p && "function" === typeof o.hydrate ? o.hydrate(g, i) : o.render(g, i)
						}
					},
					unmountComponents: function (e) {
						for (var t = u.findDOMNodes(e), n = 0; n < t.length; ++n) {
							var r = t[n];
							o.unmountComponentAtNode(r)
						}
					},
					detectEvents: function () {
						s(this)
					},
					handleMount: function (e) {
						var t = void 0;
						e && e.target && (t = e.target), u.mountComponents(t)
					},
					handleUnmount: function (e) {
						var t = void 0;
						e && e.target && (t = e.target), u.unmountComponents(t)
					}
				};
			"undefined" !== typeof window && u.detectEvents(), self.ReactRailsUJS = u, e.exports = u
		},
		321: function (e, t, n) {
			var r = n(322),
				a = n(323),
				o = n(324),
				i = n(325),
				s = n(326);
			e.exports = function (e) {
				e.handleEvent && ("undefined" !== typeof Turbolinks && "undefined" !== typeof Turbolinks.EVENTS && s.teardown(e), o.teardown(e), i.teardown(e), a.teardown(e), r.teardown(e)), "addEventListener" in window ? (e.handleEvent = function (e, t) {
					document.addEventListener(e, t)
				}, e.removeEvent = function (e, t) {
					document.removeEventListener(e, t)
				}) : (e.handleEvent = function (e, t) {
					window.attachEvent(e, t)
				}, e.removeEvent = function (e, t) {
					window.detachEvent(e, t)
				}), "undefined" !== typeof Turbolinks && Turbolinks.supported ? "undefined" !== typeof Turbolinks.EVENTS ? s.setup(e) : "undefined" !== typeof Turbolinks.controller ? o.setup(e) : i.setup(e) : "undefined" !== typeof $ && "function" === typeof $.pjax ? a.setup(e) : r.setup(e)
			}
		},
		322: function (e, t) {
			e.exports = {
				setup: function (e) {
					"addEventListener" in window ? e.handleEvent("DOMContentLoaded", e.handleMount) : e.handleEvent("onload", e.handleMount)
				},
				teardown: function (e) {
					e.removeEvent("DOMContentLoaded", e.handleMount), e.removeEvent("onload", e.handleMount)
				}
			}
		},
		323: function (e, t) {
			e.exports = {
				setup: function (e) {
					e.handleEvent("ready", e.handleMount), e.handleEvent("pjax:end", e.handleMount), e.handleEvent("pjax:beforeReplace", e.handleUnmount)
				},
				teardown: function (e) {
					e.removeEvent("ready", e.handleMount), e.removeEvent("pjax:end", e.handleMount), e.removeEvent("pjax:beforeReplace", e.handleUnmount)
				}
			}
		},
		324: function (e, t) {
			e.exports = {
				setup: function (e) {
					e.handleEvent("turbolinks:load", e.handleMount), e.handleEvent("turbolinks:before-render", e.handleUnmount)
				},
				teardown: function (e) {
					e.removeEvent("turbolinks:load", e.handleMount), e.removeEvent("turbolinks:before-render", e.handleUnmount)
				}
			}
		},
		325: function (e, t) {
			e.exports = {
				setup: function (e) {
					Turbolinks.pagesCached(0), e.handleEvent("page:change", e.handleMount), e.handleEvent("page:receive", e.handleUnmount)
				},
				teardown: function (e) {
					e.removeEvent("page:change", e.handleMount), e.removeEvent("page:receive", e.handleUnmount)
				}
			}
		},
		326: function (e, t) {
			e.exports = {
				setup: function (e) {
					e.handleEvent(Turbolinks.EVENTS.CHANGE, e.handleMount), e.handleEvent(Turbolinks.EVENTS.BEFORE_UNLOAD, e.handleUnmount)
				},
				teardown: function (e) {
					e.removeEvent(Turbolinks.EVENTS.CHANGE, e.handleMount), e.removeEvent(Turbolinks.EVENTS.BEFORE_UNLOAD, e.handleUnmount)
				}
			}
		},
		327: function (e, t, n) {
			var r = n(236),
				a = n(328);
			e.exports = function (e) {
				var t = a(e);
				return function (e) {
					var n;
					try {
						n = t(e)
					} catch (a) {
						try {
							n = r(e)
						} catch (o) {
							console.error(a), console.error(o)
						}
					}
					return n
				}
			}
		},
		328: function (e, t) {
			e.exports = function (e) {
				return function (t) {
					var n = t.split("."),
						r = n.shift(),
						a = n,
						o = e("./" + r);
					return a.forEach((function (e) {
						o = o[e]
					})), o.__esModule && (o = o.default), o
				}
			}
		},
		372: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(408),
				a = n(11),
				o = n.n(a),
				i = n(48),
				s = n.n(i),
				l = n(0),
				c = n.n(l),
				u = n(13),
				d = n(78),
				p = n(117),
				m = n(407),
				f = n(157);

			function b(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function g(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? b(Object(n), !0).forEach((function (t) {
						h(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function h(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var v = Object(u.a)((function (e) {
					return Object(d.a)({
						container: {
							textAlign: "center",
							width: "480px"
						},
						copyrights: g(g({}, e.typography.body2), {}, {
							color: e.palette.grey[500],
							marginTop: e.spacing(5),
							paddingLeft: e.spacing(8),
							paddingRight: e.spacing(8)
						}),
						layout: {
							alignItems: "center",
							backgroundColor: e.palette.grey[100],
							display: "flex",
							flexDirection: "column",
							minHeight: "100vh",
							paddingBottom: e.spacing(7),
							paddingTop: e.spacing(7)
						},
						logo: {
							height: "24px",
							marginBottom: e.spacing(3),
							width: "106px"
						},
						paper: {
							borderRadius: "8px",
							minHeight: function (e) {
								return e.contentMinHeight
							},
							padding: e.spacing(5)
						}
					})
				})),
				y = Object(p.a)("authentication", {
					en: {
						authentication: {
							allRightsReserved: "All Rights Reserved",
							and: "and",
							legalTerms: "Legal Terms",
							privacyPolicy: "Privacy Policy",
							termsOfUse: "Terms of use"
						}
					},
					fr: {
						authentication: {
							allRightsReserved: "Tous droits r\xe9serv\xe9s",
							and: "et",
							legalTerms: "Mentions l\xe9gales",
							privacyPolicy: "Politique de confidentialit\xe9",
							termsOfUse: "Conditions g\xe9n\xe9rales d'utilisation"
						}
					}
				}),
				w = function (e) {
					var t = e.children,
						n = e.className,
						a = e.links,
						i = v(e),
						l = y().t;
					return c.a.createElement("div", {
						className: o()(i.layout, n)
					}, c.a.createElement("div", {
						className: i.container
					}, c.a.createElement(r.a, {
						elevation: 4,
						className: i.paper
					}, c.a.createElement(m.a, {
						className: i.logo
					}), t), c.a.createElement("div", {
						className: i.copyrights
					}, "\xa92014\u2013", s()().format("YYYY"), " ", l("allRightsReserved"), " Ethical Research Solutions\xae", c.a.createElement("br", null), c.a.createElement(f.a, {
						to: a.legalTermsPath,
						target: "_blank",
						color: "subtle",
						underline: "always",
						variant: "body2",
						isStatic: !0
					}, l("legalTerms")), ",", " ", c.a.createElement(f.a, {
						to: a.privacyPolicyPath,
						target: "_blank",
						color: "subtle",
						underline: "always",
						variant: "body2",
						isStatic: !0
					}, l("privacyPolicy")), ", ", l("and"), " ", c.a.createElement(f.a, {
						to: a.termsOfUsePath,
						target: "_blank",
						color: "subtle",
						underline: "always",
						variant: "body2",
						isStatic: !0
					}, l("termsOfUse")), ".")))
				};
			w.defaultProps = {
				contentMinHeight: "auto"
			}, t.default = w
		},
		407: function (e, t, n) {
			"use strict";
			var r = n(0),
				a = n.n(r);

			function o() {
				return (o = Object.assign || function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function (e) {
				return a.a.createElement("svg", o({}, e, {
					width: "354px",
					height: "80px",
					viewBox: "0 0 354 80"
				}), a.a.createElement("g", {
					stroke: "none",
					strokeWidth: "1",
					fill: "none",
					fillRule: "evenodd"
				}, a.a.createElement("g", {
					id: "Logo-Color",
					transform: "translate(-36.000000, -35.000000)"
				}, a.a.createElement("g", {
					transform: "translate(36.000000, 35.000000)"
				}, a.a.createElement("path", {
					d: "M259.993814,1 C258.343192,1.00677404 257.006779,2.34224604 257,3.99170509 L257,58.1885444 C257.101653,59.7696043 258.414563,61 260,61 C261.585437,61 262.898347,59.7696043 263,58.1885444 L263,3.99170509 C262.993187,2.33743428 261.649266,1 259.993814,1 L259.993814,1 Z",
					id: "Shape",
					fill: "#272930",
					fillRule: "nonzero"
				}), a.a.createElement("path", {
					d: "M196.374406,21 C185.062644,21.0696168 175.944882,30.288444 176,41.6003033 C176.055619,52.9121626 185.263189,62.0412919 196.575087,62 C207.886985,61.9584271 217.027434,52.7620939 217,41.4501325 C216.983347,36.0011098 214.799355,30.7826081 210.929853,26.9460706 C207.060351,23.1095331 201.823361,20.9702737 196.374406,21 L196.374406,21 Z M196.487388,55.9997592 C190.623053,56.0913629 185.284111,52.6319908 182.97149,47.2421201 C180.658868,41.8522494 181.830584,35.5993515 185.937769,31.4124776 C190.044954,27.2256038 196.274175,25.9339703 201.707471,28.1426182 C207.140768,30.3512662 210.702068,35.6227698 210.723429,41.4877933 C210.772118,49.4152391 204.414297,55.896417 196.487388,55.9997592 L196.487388,55.9997592 Z",
					id: "Shape",
					fill: "#272930",
					fillRule: "nonzero"
				}), a.a.createElement("path", {
					d: "M292.374406,21 C281.062644,21.0696168 271.944882,30.288444 272,41.6003033 C272.055619,52.9121626 281.263189,62.0412919 292.575087,62 C303.886985,61.9584271 313.027434,52.7620939 313,41.4501325 C312.983347,36.0011098 310.799355,30.7826081 306.929853,26.9460706 C303.060351,23.1095331 297.823361,20.9702737 292.374406,21 L292.374406,21 Z M292.487388,55.9997592 C286.623053,56.0913629 281.284111,52.6319908 278.97149,47.2421201 C276.658868,41.8522494 277.830584,35.5993515 281.937769,31.4124776 C286.044954,27.2256038 292.274175,25.9339703 297.707471,28.1426182 C303.140768,30.3512662 306.702068,35.6227698 306.723356,41.4877933 C306.76526,49.4124598 300.411386,55.8896133 292.487388,55.9997592 L292.487388,55.9997592 Z",
					id: "Shape",
					fill: "#272930",
					fillRule: "nonzero"
				}), a.a.createElement("path", {
					d: "M149.521814,21 C144.088305,20.9736776 138.86821,23.1106614 135.016722,26.9382871 C131.165234,30.7659127 129,35.9685663 129,41.3949137 L129,41.3949137 L129,41.3949137 L129,76.8796406 C129,78.6029675 130.398893,80 132.124515,80 C133.850137,80 135.24903,78.6029675 135.24903,76.8796406 L135.24903,56.0980471 C139.128484,59.7916836 144.299646,61.8251486 149.659292,61.7646198 C156.950844,61.7400943 163.675414,57.8326088 167.299922,51.5140753 C170.92443,45.1955417 170.898226,37.4258956 167.231183,31.1318876 C163.564139,24.8378796 156.813365,20.9757191 149.521814,21 L149.521814,21 Z M149.634296,55.7984926 C143.796941,55.8844916 138.485401,52.4417216 136.18696,47.0823606 C133.88852,41.7229996 135.058205,35.5080496 139.148276,31.347843 C143.238348,27.1876364 149.439087,25.9057765 154.846816,28.1025318 C160.254546,30.2992871 163.798687,35.5397621 163.8198,41.3699508 C163.861452,49.2538623 157.528148,55.6957684 149.634296,55.7984926 L149.634296,55.7984926 Z",
					id: "Shape",
					fill: "#272930",
					fillRule: "nonzero"
				}), a.a.createElement("path", {
					d: "M352.954123,52.1833182 C351.789742,51.0731416 349.962718,51.0731416 348.798337,52.1833182 C346.208786,54.5659266 342.823398,55.8880679 339.310126,55.8888783 C331.687479,55.4615103 325.717747,49.146133 325.694511,41.4849245 C325.671276,33.823716 331.60259,27.4719914 339.222504,26.9980707 C342.759941,26.9846598 346.1749,28.2971875 348.798337,30.6785084 C349.961787,31.8031259 351.80319,31.8031259 352.966641,30.6785084 L353.11685,30.5403349 C353.698809,29.9580063 354.016415,29.161077 353.995106,28.3366384 C353.973798,27.5121998 353.615451,26.7328638 353.004193,26.1815914 C344.805148,18.8643594 332.310299,19.3536532 324.704414,27.2898003 C317.098529,35.2259475 317.098529,47.7740525 324.704414,55.7101997 C332.310299,63.6463468 344.805148,64.1356406 353.004193,56.8184086 C353.615072,56.2756363 353.975042,55.5034935 353.998751,54.6850656 C354.022459,53.8666377 353.707795,53.0748149 353.129367,52.4973487 L352.954123,52.1833182 Z",
					id: "Shape",
					fill: "#272930",
					fillRule: "nonzero"
				}), a.a.createElement("path", {
					d: "M249.449926,52.8123412 C249.084148,52.810674 248.723168,52.8954993 248.39651,53.0598797 L248.39651,53.0598797 C246.712496,53.8441918 244.982568,54.5261654 243.216181,55.1020724 C237.11876,56.661565 233.078598,53.5425798 233.016633,47.2922324 C233.016633,42.3414622 233.016633,29.6798674 233.016633,28.1698825 L246.438395,28.1698825 C247.889437,28.1698825 249.065739,26.9951187 249.065739,25.5459743 C249.065739,24.0968298 247.889437,22.922066 246.438395,22.922066 L232.979453,22.922066 L232.979453,2.97046212 C232.979453,1.32992119 231.647791,0 230.005102,0 C228.362412,0 227.03075,1.32992119 227.03075,2.97046212 L227.03075,22.9715738 L221.614951,22.9715738 C220.170753,22.9715738 219,24.1407961 219,25.583105 C219,27.0254139 220.170753,28.1946363 221.614951,28.1946363 L227.080322,28.1946363 C227.080322,28.9496288 226.99357,42.1063006 227.142288,48.0967325 C227.266219,53.0475027 228.592285,57.5527036 233.549537,59.644404 C239.560207,62.1197891 245.285834,61.1048813 250.751205,57.4165574 C250.814363,57.3884313 250.872867,57.3508706 250.924709,57.3051651 L251.023854,57.3051651 L251.023854,57.3051651 C251.878109,56.6548233 252.215701,55.5289761 251.859974,54.5167622 C251.504247,53.5045484 250.536169,52.8363596 249.46232,52.8618489 L249.449926,52.8123412 Z",
					id: "Shape",
					fill: "#272930",
					fillRule: "nonzero"
				}), a.a.createElement("g", {
					id: "Group-2",
					transform: "translate(0.000000, 7.000000)",
					fill: "#E80D70"
				}, a.a.createElement("path", {
					d: "M5.96707105,29.7241166 L5.99985843,29.7241166 C5.99985843,46.4064891 19.3765235,59.9302241 35.877476,59.9302241 C52.3784286,59.9302241 65.7550936,46.4064891 65.7550936,29.7241166 L65.7577852,29.7241166 C65.7577852,28.0669396 67.0935595,26.7235323 68.7413207,26.7235323 C70.3890819,26.7235323 71.7248562,28.0669396 71.7248562,29.7241166 L71.7264934,29.7241166 C71.7264934,49.7406611 55.6763416,65.9672765 35.877476,65.9672765 C16.2218937,65.9672765 0.260963032,49.9746734 0.0309757825,30.1580921 C0.0105653169,30.0163982 1.13686838e-12,29.8714983 1.13686838e-12,29.7241166 C1.13686838e-12,28.0669396 1.33577435,26.7235323 2.98353553,26.7235323 C4.6312967,26.7235323 5.96707105,28.0669396 5.96707105,29.7241166 Z",
					id: "Path"
				}), a.a.createElement("path", {
					d: "M39.0334927,36.24316 C39.0334927,37.9003369 37.6977183,39.2437443 36.0499571,39.2437443 C34.402196,39.2437443 33.0664216,37.9003369 33.0664216,36.24316 C33.0664216,36.0957783 33.0769869,35.9508783 33.0973974,35.8091844 C33.3273846,15.9926031 49.2883153,-2.48689958e-13 68.9438976,-2.48689958e-13 C88.7427632,-2.48689958e-13 104.792915,16.2266154 104.792915,36.24316 L104.791278,36.24316 C104.791278,37.9003369 103.455503,39.2437443 101.807742,39.2437443 C100.159981,39.2437443 98.8242068,37.9003369 98.8242068,36.24316 L98.8215152,36.24316 C98.8215152,19.5607874 85.4448502,6.03705243 68.9438976,6.03705243 C52.4429451,6.03705243 39.06628,19.5607874 39.06628,36.24316 L39.0334927,36.24316 Z",
					id: "Path"
				}))))))
			}
		},
		437: function (e, t, n) {},
		525: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(526);
			n.d(t, "ActivationPage", (function () {
				return r.default
			}))
		},
		526: function (e, t, n) {
			"use strict";
			n.r(t), n.d(t, "ActivationPage", (function () {
				return C
			}));
			var r = n(49),
				a = n(0),
				o = n.n(a),
				i = n(22),
				s = n(13),
				l = n(78),
				c = n(117),
				u = n(232),
				d = n(157),
				p = n(483),
				m = n(313),
				f = n(178),
				b = n(229),
				g = n(44),
				h = n(141),
				v = n(202),
				y = n(74);

			function w(e, t) {
				if (null == e) return {};
				var n, r, a = function (e, t) {
					if (null == e) return {};
					var n, r, a = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
				}
				return a
			}
			var E = Object(s.a)((function (e) {
					return Object(l.a)({
						checkbox: {
							marginBottom: e.spacing(2),
							marginLeft: e.spacing(-1),
							marginTop: e.spacing(2)
						},
						link: {
							marginTop: e.spacing(2)
						}
					})
				})),
				O = Object(c.a)("activation", {
					en: {
						activation: {
							agree: "I agree to the",
							and: "and",
							email: "Email",
							firstName: "First Name",
							hidePassword: "Hide password",
							lastName: "Last Name",
							password: "Create password",
							passwordHelper: "Create password",
							privacyPolicy: "Privacy Policy",
							showPassword: "Show password",
							signIn: "Login",
							submit: "Create your account",
							subtitle: "Already have a Ethical Research Solutions account?",
							termsOfUse: "Terms of Service",
							title: "Create an account to access the study"
						}
					},
					fr: {
						activation: {
							agree: "J'accepte les",
							and: "et",
							email: "Adresse mail",
							firstName: "Pr\xe9nom",
							hidePassword: "Cacher le mot de passe",
							lastName: "Nom",
							password: "Cr\xe9ez un mot de passe",
							passwordHelper: "Cr\xe9ez un mot de passe",
							privacyPolicy: "Politique de confidentialit\xe9",
							showPassword: "Afficher le mot de passe",
							signIn: "Se connecter",
							submit: "Cr\xe9ez votre compte",
							subtitle: "Vous avez d\xe9j\xe0 un compte Ethical Research Solutions ?",
							termsOfUse: "conditions d'utilisation",
							title: "Cr\xe9ez un compte pour acc\xe9der \xe0 l'\xe9tude"
						}
					}
				}),
				P = function (e) {
					var t = e.privacyPolicyPath,
						n = e.termsOfUsePath,
						r = O().t;
					return o.a.createElement(o.a.Fragment, null, r("agree"), u.b, o.a.createElement(d.a, {
						to: n,
						rel: "noopener noreferrer",
						target: "_blank",
						underline: "always",
						isStatic: !0
					}, r("termsOfUse")), u.b, r("and"), u.b, o.a.createElement(d.a, {
						to: t,
						rel: "noopener noreferrer",
						target: "_blank",
						underline: "always",
						isStatic: !0
					}, r("privacyPolicy")))
				},
				C = function (e) {
					var t = e.alerts,
						n = e.errors,
						a = e.links,
						i = a.newUserSessionPath,
						s = w(a, ["newUserSessionPath"]),
						l = e.user,
						c = E({}),
						h = O().t,
						v = {
							hidePassword: h("hidePassword"),
							showPassword: h("showPassword")
						};
					return o.a.createElement(y.default, {
						links: s
					}, o.a.createElement(y.default.Title, null, h("title")), o.a.createElement(y.default.Subtitle, null, h("subtitle"), u.b, o.a.createElement(d.a, {
						to: i,
						underline: "always",
						isStatic: !0
					}, h("signIn"))), o.a.createElement(y.default.Content, null, o.a.createElement(p.a, null, o.a.createElement(r.a, {
						paddingBottom: 2
					}, o.a.createElement(m.a.Stacked, {
						alerts: t
					})), o.a.createElement(f.a.Text, {
						defaultValue: l.firstName,
						label: h("firstName"),
						name: "user[first_name]",
						required: !0,
						InputLabelProps: {
							required: !1
						}
					}), o.a.createElement(f.a.Text, {
						defaultValue: l.lastName,
						label: h("lastName"),
						name: "user[last_name]",
						required: !0,
						InputLabelProps: {
							required: !1
						}
					}), o.a.createElement(f.a.Password, {
						error: n.password,
						label: h("password"),
						locales: v,
						name: "user[password]",
						required: !0,
						InputLabelProps: {
							required: !1
						},
						inputProps: {
							title: h("passwordHelper")
						}
					}), o.a.createElement(f.a.Email, {
						defaultValue: l.email,
						label: h("email"),
						disabled: !0
					}), o.a.createElement(b.a, {
						className: c.checkbox,
						name: "user[terms_of_service]",
						label: o.a.createElement(P, {
							privacyPolicyPath: s.privacyPolicyPath,
							termsOfUsePath: s.termsOfUsePath
						}),
						LabelProps: {
							variant: "body2"
						}
					}), o.a.createElement(g.a, {
						type: "submit",
						color: "secondary",
						variant: "contained",
						size: "large",
						fullWidth: !0
					}, h("submit")))))
				};
			t.default = Object(h.a)([v.a, i.a], C)
		},
		527: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(528);
			n.d(t, "ChangePasswordPage", (function () {
				return r.default
			}))
		},
		528: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(49),
				a = n(0),
				o = n.n(a),
				i = n(22),
				s = n(13),
				l = n(78),
				c = n(117),
				u = n(483),
				d = n(313),
				p = n(178),
				m = n(44),
				f = n(141),
				b = n(202),
				g = n(74),
				h = Object(s.a)((function (e) {
					return Object(l.a)({
						link: {
							alignItems: "center",
							display: "flex",
							marginTop: e.spacing(2)
						},
						submitButton: {
							marginBottom: e.spacing(2),
							marginTop: e.spacing(2)
						}
					})
				})),
				v = Object(c.a)("change-password", {
					en: {
						"change-password": {
							hidePassword: "Hide password",
							password: "Password",
							passwordConfirmation: "Confirm Password",
							showPassword: "Show password",
							submit: "Reset password",
							subtitle: "Your password must be at least 8 characters.",
							title: "Reset password"
						}
					},
					fr: {
						"change-password": {
							hidePassword: "Cacher le mot de passe",
							password: "Mot de passe",
							passwordConfirmation: "Confirmer le mot de passe",
							showPassword: "Afficher le mot de passe",
							submit: "R\xe9initialiser le mot de passe",
							subtitle: "Votre mot de passe doit comporter au moins 8 caract\xe8res.",
							title: "Modifier votre mot de passe"
						}
					}
				});
			t.default = Object(f.a)([b.a, i.a], (function (e) {
				var t = e.alerts,
					n = e.errors,
					a = e.links,
					i = h(e),
					s = v().t,
					l = {
						hidePassword: s("hidePassword"),
						showPassword: s("showPassword")
					};
				return o.a.createElement(g.default, {
					links: a
				}, o.a.createElement(g.default.Title, null, s("title")), o.a.createElement(g.default.Subtitle, null, s("subtitle")), o.a.createElement(g.default.Content, null, o.a.createElement(u.a, null, o.a.createElement(r.a, {
					paddingBottom: 2
				}, o.a.createElement(d.a.Stacked, {
					alerts: t
				})), o.a.createElement(p.a.Password, {
					error: n.password,
					label: s("password"),
					locales: l,
					name: "user[password]",
					InputLabelProps: {
						required: !1
					},
					ConfirmationFieldProps: {
						error: n.passwordConfirmation,
						InputLabelProps: {
							required: !1
						},
						label: s("passwordConfirmation"),
						name: "user[password_confirmation]",
						required: !0
					},
					confirmation: !0,
					required: !0
				}), o.a.createElement(m.a, {
					className: i.submitButton,
					type: "submit",
					color: "secondary",
					variant: "contained",
					size: "large",
					fullWidth: !0
				}, s("submit")))))
			}))
		},
		529: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(530);
			n.d(t, "DemoShowPage", (function () {
				return r.default
			}))
		},
		530: function (e, t, n) {
			"use strict";
			n.r(t), n.d(t, "DemoShowPage", (function () {
				return j
			}));
			var r = n(49),
				a = n(1),
				o = n(0),
				i = n.n(o),
				s = n(22),
				l = n(13),
				c = n(78),
				u = n(117),
				d = n(232),
				p = n(157),
				m = n(483),
				f = n(313),
				b = n(178),
				g = n(229),
				h = n(44),
				v = n(141),
				y = n(202),
				w = n(74);

			function E(e, t) {
				if (null == e) return {};
				var n, r, a = function (e, t) {
					if (null == e) return {};
					var n, r, a = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
				}
				return a
			}
			var O = Object(l.a)((function (e) {
					return Object(c.a)({
						checkbox: {
							marginBottom: e.spacing(2),
							marginLeft: e.spacing(-1),
							marginTop: e.spacing(2)
						},
						link: {
							marginTop: e.spacing(2)
						}
					})
				})),
				P = Object(u.a)("demo-show", {
					en: {
						"demo-show": {
							agree: "I agree to the",
							and: "and",
							blogSubscription: "Subscribe to our blog",
							company: "Company",
							country: "Country",
							email: "Email",
							firstName: "First Name",
							hidePassword: "Hide password",
							lastName: "Last Name",
							password: "Create password",
							passwordHelper: "Create password",
							privacyPolicy: "Privacy Policy",
							showPassword: "Show password",
							signIn: "Login",
							submit: "View the study now",
							subtitle: "Returning user?",
							termsOfUse: "Terms of Service",
							title: "Access the full study"
						}
					},
					fr: {
						"demo-show": {
							agree: "J'accepte les",
							and: "et",
							blogSubscription: "S'inscrire \xe0 notre blog",
							company: "Entreprise",
							country: "Pays",
							email: "Adresse mail",
							firstName: "Pr\xe9nom",
							hidePassword: "Cacher le mot de passe",
							lastName: "Nom",
							password: "Cr\xe9ez un mot de passe",
							passwordHelper: "Cr\xe9ez un mot de passe",
							privacyPolicy: "Politique de confidentialit\xe9",
							showPassword: "Afficher le mot de passe",
							signIn: "Se connecter",
							submit: "Acc\xe9der \xe0 l'\xe9tude",
							subtitle: "Vous avez d\xe9j\xe0 rempli ce formulaire ?",
							termsOfUse: "conditions d'utilisation",
							title: "Acc\xe9der \xe0 l'\xe9tude compl\xe8te"
						}
					}
				}),
				C = function (e) {
					var t = e.privacyPolicyPath,
						n = e.termsOfUsePath,
						r = P().t;
					return i.a.createElement(i.a.Fragment, null, r("agree"), d.b, i.a.createElement(p.a, {
						to: n,
						rel: "noopener noreferrer",
						target: "_blank",
						underline: "always",
						isStatic: !0
					}, r("termsOfUse")), d.b, r("and"), d.b, i.a.createElement(p.a, {
						to: t,
						rel: "noopener noreferrer",
						target: "_blank",
						underline: "always",
						isStatic: !0
					}, r("privacyPolicy")))
				},
				j = function (e) {
					var t = e.alerts,
						n = e.errors,
						o = e.links,
						s = o.newUserSessionPath,
						l = E(o, ["newUserSessionPath"]),
						c = e.user,
						u = O({}),
						v = P().t,
						y = {
							hidePassword: v("hidePassword"),
							showPassword: v("showPassword")
						};
					return i.a.createElement(w.default, {
						links: l
					}, i.a.createElement(w.default.Title, null, v("title")), i.a.createElement(w.default.Subtitle, null, v("subtitle"), d.b, i.a.createElement(p.a, {
						to: s,
						underline: "always",
						isStatic: !0
					}, v("signIn"))), i.a.createElement(w.default.Content, null, i.a.createElement(m.a, null, i.a.createElement(r.a, {
						paddingBottom: 2
					}, i.a.createElement(f.a.Stacked, {
						alerts: t
					})), i.a.createElement(b.a.Email, {
						required: !0,
						error: Object(a.get)(n, "email"),
						name: "email",
						defaultValue: c.email,
						label: v("email"),
						InputLabelProps: {
							required: !1
						}
					}), i.a.createElement(b.a.Text, {
						required: !0,
						defaultValue: c.firstName,
						label: v("firstName"),
						name: "user[first_name]",
						InputLabelProps: {
							required: !1
						}
					}), i.a.createElement(b.a.Text, {
						required: !0,
						defaultValue: c.lastName,
						label: v("lastName"),
						name: "user[last_name]",
						InputLabelProps: {
							required: !1
						}
					}), i.a.createElement(b.a.Text, {
						required: !0,
						label: v("company"),
						name: "user[company]",
						InputLabelProps: {
							required: !1
						}
					}), i.a.createElement(b.a.Password, {
						required: !0,
						error: Object(a.get)(n, "password"),
						label: v("password"),
						locales: y,
						name: "user[password]",
						InputLabelProps: {
							required: !1
						},
						inputProps: {
							title: v("passwordHelper")
						}
					}), i.a.createElement(g.a.Group, {
						className: u.checkbox,
						onChange: a.noop,
						value: null
					}, i.a.createElement(g.a, {
						required: !0,
						name: "user[terms_of_service]",
						label: i.a.createElement(C, {
							privacyPolicyPath: l.privacyPolicyPath,
							termsOfUsePath: l.termsOfUsePath
						}),
						LabelProps: {
							variant: "body2"
						}
					}), i.a.createElement(g.a, {
						name: "user[blog_subscribed]",
						label: v("blogSubscription"),
						LabelProps: {
							variant: "body2"
						}
					})), i.a.createElement(h.a, {
						type: "submit",
						color: "secondary",
						variant: "contained",
						size: "large",
						fullWidth: !0
					}, v("submit")))))
				};
			t.default = Object(v.a)([y.a, s.a], j)
		},
		531: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(532);
			n.d(t, "InvalidResetPasswordPage", (function () {
				return r.default
			}))
		},
		532: function (e, t, n) {
			"use strict";
			n.r(t), n.d(t, "InvalidResetPasswordPage", (function () {
				return m
			}));
			var r = n(0),
				a = n.n(r),
				o = n(22),
				i = n(117),
				s = n(44),
				l = n(141),
				c = n(202),
				u = n(74);

			function d(e, t) {
				if (null == e) return {};
				var n, r, a = function (e, t) {
					if (null == e) return {};
					var n, r, a = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
				}
				return a
			}
			var p = Object(i.a)("invalid-reset-password", {
					en: {
						"invalid-reset-password": {
							submit: "Request a link",
							subtitle: "For increased security, the link expire 6 hours after it was sent. It's also possible that you've already reset your password using this link. You can request a new one by clicking below.",
							title: "This link is expired or invalid"
						}
					},
					fr: {
						"invalid-reset-password": {
							submit: "Demander un lien",
							subtitle: "Pour plus de s\xe9curit\xe9, le lien expire 6 heures apr\xe8s avoir \xe9t\xe9 envoy\xe9. Il est \xe9galement possible que vous ayez d\xe9j\xe0 r\xe9initialis\xe9 votre mot de passe en utilisant ce lien. Vous pouvez en demander un nouveau en cliquant ci-dessous.",
							title: "Ce lien est expir\xe9 ou invalide"
						}
					}
				}),
				m = function (e) {
					var t = e.links,
						n = t.resetPasswordPath,
						r = d(t, ["resetPasswordPath"]),
						o = p().t;
					return a.a.createElement(u.default, {
						links: r,
						contentMinHeight: "428px"
					}, a.a.createElement(u.default.Title, null, o("title")), a.a.createElement(u.default.Subtitle, null, o("subtitle")), a.a.createElement(u.default.Content, null, a.a.createElement(s.a, {
						isStatic: !0,
						type: "submit",
						color: "secondary",
						variant: "contained",
						size: "large",
						to: n
					}, o("submit"))))
				};
			t.default = Object(l.a)([c.a, o.a], m)
		},
		533: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(534);
			n.d(t, "ResetPasswordPage", (function () {
				return r.default
			}))
		},
		534: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(49),
				a = n(977),
				o = n.n(a),
				i = n(0),
				s = n.n(i),
				l = n(22),
				c = n(13),
				u = n(78),
				d = n(117),
				p = n(483),
				m = n(313),
				f = n(178),
				b = n(44),
				g = n(157),
				h = n(141),
				v = n(202),
				y = n(74);

			function w(e, t) {
				if (null == e) return {};
				var n, r, a = function (e, t) {
					if (null == e) return {};
					var n, r, a = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
				}
				return a
			}
			var E = Object(c.a)((function (e) {
					return Object(u.a)({
						link: {
							alignItems: "center",
							display: "flex",
							marginTop: e.spacing(2)
						},
						submitButton: {
							marginBottom: e.spacing(2),
							marginTop: e.spacing(2)
						}
					})
				})),
				O = Object(d.a)("reset-password", {
					en: {
						"reset-password": {
							back: "Back to login",
							email: "Email",
							submit: "Reset password",
							subtitle: "Forgot your password? Request a reset email",
							title: "Reset password"
						}
					},
					fr: {
						"reset-password": {
							back: "Se connecter",
							email: "Courriel",
							submit: "R\xe9initialiser votre mot de passe",
							subtitle: "Vous avez oubli\xe9 votre mot de passe ? Demandez un courriel ",
							title: "R\xe9initialiser votre mot de passe"
						}
					}
				});
			t.default = Object(h.a)([v.a, l.a], (function (e) {
				var t = e.alerts,
					n = e.links,
					a = n.backToLogin,
					i = w(n, ["backToLogin"]),
					l = E(e),
					c = O().t;
				return s.a.createElement(y.default, {
					links: i
				}, s.a.createElement(y.default.Title, null, c("title")), s.a.createElement(y.default.Subtitle, null, c("subtitle")), s.a.createElement(y.default.Content, null, s.a.createElement(p.a, null, s.a.createElement(r.a, {
					paddingBottom: 2
				}, s.a.createElement(m.a.Stacked, {
					alerts: t
				})), s.a.createElement(f.a.Email, {
					label: c("email"),
					name: "email",
					required: !0,
					InputLabelProps: {
						required: !1
					}
				}), s.a.createElement(b.a, {
					className: l.submitButton,
					type: "submit",
					color: "secondary",
					variant: "contained",
					size: "large",
					fullWidth: !0
				}, c("submit")), s.a.createElement(g.a, {
					className: l.link,
					color: "secondary",
					to: a,
					isStatic: !0
				}, s.a.createElement(o.a, null), " ", c("back")))))
			}))
		},
		535: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(536);
			n.d(t, "ResetPasswordConfirmationPage", (function () {
				return r.default
			}))
		},
		536: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(0),
				a = n.n(r),
				o = n(22),
				i = n(117),
				s = n(157),
				l = n(141),
				c = n(202),
				u = n(74);

			function d(e, t) {
				if (null == e) return {};
				var n, r, a = function (e, t) {
					if (null == e) return {};
					var n, r, a = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
				}
				return a
			}
			var p = Object(i.a)("reset-password-confirmation", {
				en: {
					"reset-password-confirmation": {
						back: "Back to login",
						subtitle: "If an account exists for {{ email }}, you will get an email with instructions on how to reset your password. Make sure you check your spam folder.",
						title: "Check your email!"
					}
				},
				fr: {
					"reset-password-confirmation": {
						back: "Se connecter",
						subtitle: "Si un compte existe pour l'adresse mail {{ email }}, vous recevrez un courriel avec les instructions pour r\xe9initialiser votre mot de passe. Assurez-vous de consulter bo\xeete de courrier ind\xe9sirable.",
						title: "Consulter vos courriels !"
					}
				}
			});
			t.default = Object(l.a)([c.a, o.a], (function (e) {
				var t = e.links,
					n = t.loginPath,
					r = d(t, ["loginPath"]),
					o = e.user,
					i = p().t;
				return a.a.createElement(u.default, {
					links: r,
					contentMinHeight: "428px"
				}, a.a.createElement(u.default.Title, null, i("title")), a.a.createElement(u.default.Subtitle, null, i("subtitle", {
					email: o.email
				})), a.a.createElement(u.default.Content, null, a.a.createElement(s.a, {
					color: "secondary",
					to: n,
					isStatic: !0
				}, i("back"))))
			}))
		},
		537: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(538);
			n.d(t, "SignInPage", (function () {
				return r.default
			}))
		},
		538: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(49),
				a = n(100),
				o = n(1),
				i = n(0),
				s = n.n(i),
				l = n(22),
				c = n(13),
				u = n(78),
				d = n(117),
				p = n(721),
				m = n(31),
				f = n(157),
				b = n(483),
				g = n(313),
				h = n(178),
				v = n(44),
				y = n(141),
				w = n(277),
				E = n(202),
				O = n(74);

			function P(e) {
				return function (e) {
					if (Array.isArray(e)) return C(e)
				}(e) || function (e) {
					if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || function (e, t) {
					if (!e) return;
					if ("string" === typeof e) return C(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
				}(e) || function () {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function C(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function j(e, t) {
				if (null == e) return {};
				var n, r, a = function (e, t) {
					if (null == e) return {};
					var n, r, a = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
				}
				return a
			}
			var S = Object(c.a)((function (e) {
					return Object(u.a)({
						link: {
							marginTop: e.spacing(2)
						},
						redirectLink: {
							marginLeft: e.spacing(1)
						},
						submitButton: {
							marginBottom: e.spacing(2),
							marginTop: e.spacing(2)
						}
					})
				})),
				k = Object(d.a)("sign-in", {
					en: {
						"sign-in": {
							bookADemo: "Book a demo",
							email: "Email",
							forgottenPassword: "Forgot password?",
							hidePassword: "Hide password",
							noAccount: "You don't have a Ethical Research Solutions account?",
							noCookie: "Cookies are disabled in your browser. Please enable them in the preferences to continue.",
							password: "Password",
							showPassword: "Show password",
							signUp: "Sign up",
							submit: "Login",
							title: "Login"
						}
					},
					fr: {
						"sign-in": {
							bookADemo: "Demandez une d\xe9mo",
							email: "Courriel",
							forgottenPassword: "Mot de passe oubli\xe9 ?",
							hidePassword: "Cacher le mot de passe",
							noAccount: "Vous n'avez pas de compte Ethical Research Solutions ?",
							noCookie: "Les t\xe9moins sont d\xe9sactiv\xe9s dans votre navigateur. Veuillez les activer dans vos pr\xe9f\xe9rences pour continuer.",
							password: "Mot de passe",
							showPassword: "Afficher le mot de passe",
							signUp: "Se cr\xe9er un compte",
							submit: "Se connecter",
							title: "Connexion"
						}
					}
				});
			t.default = Object(y.a)([w.a.Provider, E.a, l.a], (function (e) {
				var t = e.alerts,
					n = e.links,
					i = n.demoAccessPath,
					l = n.newPasswordPath,
					c = j(n, ["demoAccessPath", "newPasswordPath"]),
					u = e.user,
					d = S(e),
					y = k().t,
					w = Object(p.b)().openModal,
					E = {
						hidePassword: y("hidePassword"),
						showPassword: y("showPassword")
					},
					C = {
						message: y("noCookie"),
						severity: "error"
					},
					L = [].concat(P(t), P(Object(m.c)(C).if(Object(o.get)(window, ["__ERS_INIT__", "noCookie"])))),
					x = Object(o.get)(window, ["bookADemo", "formId"]),
					T = Object(o.get)(window, ["bookADemo", "portalId"]),
					A = function (e) {
						e.preventDefault(), w()
					};
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(p.a, {
					formId: x,
					portalId: T
				}), s.a.createElement(O.default, {
					links: c
				}, s.a.createElement(O.default.Title, null, y("title")), s.a.createElement(O.default.Content, null, s.a.createElement(r.a, {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap"
				}, s.a.createElement(a.a, null, y("noAccount")), i ? s.a.createElement(f.a, {
					isStatic: !0,
					className: d.redirectLink,
					color: "secondary",
					to: i,
					variant: "body1"
				}, y("signUp")) : s.a.createElement(f.a, {
					className: d.redirectLink,
					color: "secondary",
					onClick: A,
					variant: "body1"
				}, y("bookADemo"))), s.a.createElement(b.a, null, s.a.createElement(r.a, {
					paddingBottom: 2
				}, s.a.createElement(g.a.Stacked, {
					alerts: L
				})), s.a.createElement(h.a.Email, {
					defaultValue: u.email,
					label: y("email"),
					name: "email",
					required: !0,
					InputLabelProps: {
						required: !1
					}
				}), s.a.createElement(h.a.Password, {
					label: y("password"),
					locales: E,
					name: "user[password]",
					required: !0,
					InputLabelProps: {
						required: !1
					}
				}), s.a.createElement(f.a, {
					className: d.link,
					to: l,
					color: "secondary",
					isStatic: !0
				}, y("forgottenPassword")), s.a.createElement(v.a, {
					className: d.submitButton,
					type: "submit",
					color: "secondary",
					variant: "contained",
					size: "large",
					fullWidth: !0
				}, y("submit"))))))
			}))
		},
		554: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(0),
				a = n.n(r);
			t.default = function (e) {
				var t = e.children;
				return a.a.createElement("div", null, t)
			}
		},
		555: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(0),
				a = n.n(r),
				o = n(13),
				i = n(78);

			function s(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function l(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? s(Object(n), !0).forEach((function (t) {
						c(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var u = Object(o.a)((function (e) {
				return Object(i.a)({
					subtitle: l(l({}, e.typography.body1), {}, {
						marginBottom: e.spacing(3),
						marginTop: e.spacing(2)
					})
				})
			}));
			t.default = function (e) {
				var t = e.children,
					n = u(e);
				return a.a.createElement("div", {
					className: n.subtitle
				}, t)
			}
		},
		556: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(0),
				a = n.n(r),
				o = n(13),
				i = n(78);

			function s(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function l(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? s(Object(n), !0).forEach((function (t) {
						c(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var u = Object(o.a)((function (e) {
				return Object(i.a)({
					title: l(l({}, e.typography.h4), {}, {
						marginBottom: e.spacing(2)
					})
				})
			}));
			t.default = function (e) {
				var t = e.children,
					n = u(e);
				return a.a.createElement("div", {
					className: n.title
				}, t)
			}
		},
		721: function (e, t, n) {
			"use strict";
			n.d(t, "b", (function () {
				return u
			}));
			var r = n(0),
				a = n.n(r),
				o = n(344),
				i = n(277),
				s = n(1),
				l = function (e) {
					var t = e.formId,
						n = e.portalId,
						r = Object(s.get)(window, "hbspt");
					return a.a.useLayoutEffect((function () {
						r.forms.create({
							formId: t,
							portalId: n,
							target: "#modal"
						})
					}), []), a.a.createElement("div", {
						id: "modal"
					})
				},
				c = Symbol("HubspotModal"),
				u = function () {
					return Object(o.a)(c)
				};
			t.a = function (e) {
				var t = e.formId,
					n = e.portalId;
				return a.a.createElement(i.a, {
					modalId: c
				}, a.a.createElement(l, {
					formId: t,
					portalId: n
				}))
			}
		},
		74: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(1),
				a = n(554),
				o = n(372),
				i = n(555),
				s = n(556);
			t.default = Object(r.assign)(o.default, {
				Content: a.default,
				Subtitle: i.default,
				Title: s.default
			})
		},
		883: function (e, t, n) {
			"use strict";
			var r = n(14),
				a = n(3),
				o = n(0),
				i = (n(10), n(12)),
				s = n(39),
				l = n(19),
				c = n(408),
				u = n(98),
				d = Object(u.a)(o.createElement("path", {
					d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
				}), "SuccessOutlined"),
				p = Object(u.a)(o.createElement("path", {
					d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
				}), "ReportProblemOutlined"),
				m = Object(u.a)(o.createElement("path", {
					d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
				}), "ErrorOutline"),
				f = Object(u.a)(o.createElement("path", {
					d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
				}), "InfoOutlined"),
				b = n(250),
				g = n(1160),
				h = n(33),
				v = {
					success: o.createElement(d, {
						fontSize: "inherit"
					}),
					warning: o.createElement(p, {
						fontSize: "inherit"
					}),
					error: o.createElement(m, {
						fontSize: "inherit"
					}),
					info: o.createElement(f, {
						fontSize: "inherit"
					})
				},
				y = o.createElement(b.a, {
					fontSize: "small"
				}),
				w = o.forwardRef((function (e, t) {
					var n = e.action,
						s = e.children,
						l = e.classes,
						u = e.className,
						d = e.closeText,
						p = void 0 === d ? "Close" : d,
						m = e.color,
						f = e.icon,
						b = e.iconMapping,
						w = void 0 === b ? v : b,
						E = e.onClose,
						O = e.role,
						P = void 0 === O ? "alert" : O,
						C = e.severity,
						j = void 0 === C ? "success" : C,
						S = e.variant,
						k = void 0 === S ? "standard" : S,
						L = Object(r.a)(e, ["action", "children", "classes", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant"]);
					return o.createElement(c.a, Object(a.a)({
						role: P,
						square: !0,
						elevation: 0,
						className: Object(i.a)(l.root, l["".concat(k).concat(Object(h.a)(m || j))], u),
						ref: t
					}, L), !1 !== f ? o.createElement("div", {
						className: l.icon
					}, f || w[j] || v[j]) : null, o.createElement("div", {
						className: l.message
					}, s), null != n ? o.createElement("div", {
						className: l.action
					}, n) : null, null == n && E ? o.createElement("div", {
						className: l.action
					}, o.createElement(g.a, {
						size: "small",
						"aria-label": p,
						title: p,
						color: "inherit",
						onClick: E
					}, y)) : null)
				}));
			t.a = Object(l.a)((function (e) {
				var t = "light" === e.palette.type ? s.a : s.e,
					n = "light" === e.palette.type ? s.e : s.a;
				return {
					root: Object(a.a)({}, e.typography.body2, {
						borderRadius: e.shape.borderRadius,
						backgroundColor: "transparent",
						display: "flex",
						padding: "6px 16px"
					}),
					standardSuccess: {
						color: t(e.palette.success.main, .6),
						backgroundColor: n(e.palette.success.main, .9),
						"& $icon": {
							color: e.palette.success.main
						}
					},
					standardInfo: {
						color: t(e.palette.info.main, .6),
						backgroundColor: n(e.palette.info.main, .9),
						"& $icon": {
							color: e.palette.info.main
						}
					},
					standardWarning: {
						color: t(e.palette.warning.main, .6),
						backgroundColor: n(e.palette.warning.main, .9),
						"& $icon": {
							color: e.palette.warning.main
						}
					},
					standardError: {
						color: t(e.palette.error.main, .6),
						backgroundColor: n(e.palette.error.main, .9),
						"& $icon": {
							color: e.palette.error.main
						}
					},
					outlinedSuccess: {
						color: t(e.palette.success.main, .6),
						border: "1px solid ".concat(e.palette.success.main),
						"& $icon": {
							color: e.palette.success.main
						}
					},
					outlinedInfo: {
						color: t(e.palette.info.main, .6),
						border: "1px solid ".concat(e.palette.info.main),
						"& $icon": {
							color: e.palette.info.main
						}
					},
					outlinedWarning: {
						color: t(e.palette.warning.main, .6),
						border: "1px solid ".concat(e.palette.warning.main),
						"& $icon": {
							color: e.palette.warning.main
						}
					},
					outlinedError: {
						color: t(e.palette.error.main, .6),
						border: "1px solid ".concat(e.palette.error.main),
						"& $icon": {
							color: e.palette.error.main
						}
					},
					filledSuccess: {
						color: "#fff",
						fontWeight: e.typography.fontWeightMedium,
						backgroundColor: e.palette.success.main
					},
					filledInfo: {
						color: "#fff",
						fontWeight: e.typography.fontWeightMedium,
						backgroundColor: e.palette.info.main
					},
					filledWarning: {
						color: "#fff",
						fontWeight: e.typography.fontWeightMedium,
						backgroundColor: e.palette.warning.main
					},
					filledError: {
						color: "#fff",
						fontWeight: e.typography.fontWeightMedium,
						backgroundColor: e.palette.error.main
					},
					icon: {
						marginRight: 12,
						padding: "7px 0",
						display: "flex",
						fontSize: 22,
						opacity: .9
					},
					message: {
						padding: "8px 0"
					},
					action: {
						display: "flex",
						alignItems: "center",
						marginLeft: "auto",
						paddingLeft: 16,
						marginRight: -8
					}
				}
			}), {
				name: "MuiAlert"
			})(w)
		},
		977: function (e, t, n) {
			"use strict";
			var r;
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var a = (0, ((r = n(70)) && r.__esModule ? r : {
				default: r
			}).default)("M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z");
			t.default = a
		}
	},
	[
		[1643, 22, 1, 5, 0, 4]
	]
]);
